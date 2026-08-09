import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from datetime import datetime, timedelta, timezone

from backend.main import app
from backend.database import Base, get_db
from backend.models import AdminSecurityRecord, ContactSender
from backend.routers.contact import ip_request_history
import backend.auth as auth
from backend.auth import ADMIN_USERNAME, pwd_context
from backend.routers.contact import rate_limit

# Setup Test DB
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"
auth.ADMIN_PASSWORD_HASH = pwd_context.hash("admin123")
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    connect_args={"check_same_thread": False},
    poolclass=StaticPool
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_db():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    ip_request_history.clear()
    yield

def test_admin_lockout():
    # Login #1 fail
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 401

    # Login #2 fail
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 401

    # Login #3 triggers lockout
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 401

    # Locked out response
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 429
    assert "temporarily locked" in res.json()["detail"]

    # Verify lockout time in DB
    db = TestingSessionLocal()
    record = db.query(AdminSecurityRecord).filter_by(identifier=ADMIN_USERNAME).first()
    assert record is not None
    assert record.failed_attempts == 3
    assert record.locked_until is not None
    db.close()

def test_successful_login_resets_counter():
    # Login #1 fail
    client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    
    # Login success
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "admin123"})
    assert res.status_code == 200

    # Verify counter is 0
    db = TestingSessionLocal()
    record = db.query(AdminSecurityRecord).filter_by(identifier=ADMIN_USERNAME).first()
    assert record is not None
    assert record.failed_attempts == 0
    assert record.locked_until is None
    db.close()

def test_admin_lockout_persistence_and_expiration():
    # 3 Failed attempts
    client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    
    # 1. Verify lockout
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 429
    
    # 2. Simulate persistence by checking DB independently
    db = TestingSessionLocal()
    record = db.query(AdminSecurityRecord).filter_by(identifier=ADMIN_USERNAME).first()
    assert record is not None
    assert record.failed_attempts == 3
    
    # 3. Expiration time travel
    # Move locked_until to the past
    record.locked_until = datetime.now(timezone.utc).replace(tzinfo=None) - timedelta(hours=1)
    db.commit()
    db.close()
    
    # 4. Attempt login again (should be allowed but fail auth)
    res = client.post("/api/v1/admin/login", data={"username": ADMIN_USERNAME, "password": "wrongpassword"})
    assert res.status_code == 401

def test_contact_message_flood_control():
    # Override rate_limit for this test so IP rate limit doesn't block the flood loop
    app.dependency_overrides[rate_limit] = lambda: None
    
    email = "test@example.com"
    payload = {
        "name": "Test User",
        "email": email,
        "subject": "Test Subject",
        "message": "This is a valid test message with enough characters."
    }

    # Send 10 messages (accepted)
    for i in range(10):
        res = client.post("/api/v1/contact", json=payload)
        assert res.status_code == 200

    # Message 11 (rejected)
    res = client.post("/api/v1/contact", json=payload)
    assert res.status_code == 429
    assert "reached the current message limit" in res.json()["detail"]
    
    app.dependency_overrides.pop(rate_limit)

def test_approved_sender_and_revocation():
    app.dependency_overrides[rate_limit] = lambda: None
    
    email = "approved@example.com"
    payload = {
        "name": "Approved User",
        "email": email,
        "subject": "Test Subject",
        "message": "This is a valid test message with enough characters."
    }

    client.post("/api/v1/contact", json=payload)
    
    # Admin approves sender
    db = TestingSessionLocal()
    sender = db.query(ContactSender).filter_by(normalized_email=email).first()
    assert sender is not None
    sender.approved = True
    sender.message_count = 10
    db.commit()

    # Message 11 accepted
    res = client.post("/api/v1/contact", json=payload)
    assert res.status_code == 200
    
    # Admin revokes approval
    sender.approved = False
    db.commit()
    db.close()
    
    # Message 12 rejected
    res = client.post("/api/v1/contact", json=payload)
    assert res.status_code == 429
    
    app.dependency_overrides.pop(rate_limit)

def test_ip_rate_limiter():
    # Test existing IP rate limiter limits up to 5 requests
    email = "ip_rate@example.com"
    payload = {
        "name": "IP User",
        "email": email,
        "subject": "Test Subject",
        "message": "This is a valid test message with enough characters."
    }

    # IP limit is 5 requests per window, so we do 5 (accepted), 6th is rejected
    for i in range(5):
        res = client.post("/api/v1/contact", json=payload)
        assert res.status_code == 200
        
    res = client.post("/api/v1/contact", json=payload)
    assert res.status_code == 429
    assert "Too many requests" in res.json()["detail"]

def test_public_api_protection():
    # Clear any cookies from previous login tests
    client.cookies.clear()
    
    # Ensure unauthenticated users cannot access admin endpoints
    res_stats = client.get("/api/v1/admin/stats")
    assert res_stats.status_code == 401
    
    res_senders = client.get("/api/v1/admin/senders")
    assert res_senders.status_code == 401
    
    res_messages = client.get("/api/v1/admin/messages")
    assert res_messages.status_code == 401
