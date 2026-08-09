import os
from datetime import datetime, timedelta, timezone
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from fastapi.security import OAuth2PasswordRequestForm
from passlib.context import CryptContext
from jose import JWTError, jwt
from pydantic import BaseModel

SECRET_KEY = os.getenv("SESSION_SECRET", "super-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 1 day

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD_HASH = os.getenv("ADMIN_PASSWORD_HASH")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

if not ADMIN_PASSWORD_HASH:
    if ENVIRONMENT == "production":
        raise RuntimeError("ADMIN_PASSWORD_HASH environment variable is required in production")
    else:
        ADMIN_PASSWORD_HASH = pwd_context.hash("admin123")

class TokenData(BaseModel):
    username: Optional[str] = None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_admin(request: Request):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token = request.cookies.get("admin_session")
    if not token:
        raise credentials_exception
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None or username != ADMIN_USERNAME:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    return token_data

auth_router = APIRouter(prefix="/api/v1/admin")

from .routers.contact import rate_limit
from sqlalchemy.orm import Session
from .database import get_db
from .models import AdminSecurityRecord
import logging

logger = logging.getLogger("security")

MAX_FAILED_ATTEMPTS = 3
LOCKOUT_HOURS = 12

@auth_router.post("/login", dependencies=[Depends(rate_limit)])
def login(response: Response, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # Fetch security record
    security_record = db.query(AdminSecurityRecord).filter(AdminSecurityRecord.identifier == form_data.username).first()
    if not security_record:
        security_record = AdminSecurityRecord(identifier=form_data.username)
        db.add(security_record)
        db.commit()
        db.refresh(security_record)
        
    current_time = datetime.now(timezone.utc).replace(tzinfo=None)
    
    # Check if locked out
    if security_record.locked_until and security_record.locked_until.replace(tzinfo=None) > current_time:
        logger.warning(f"ADMIN_LOCKOUT_TRIGGERED: Blocked login attempt for {form_data.username}")
        raise HTTPException(
            status_code=429,
            detail="Authentication temporarily locked due to repeated failed attempts. Please try again later."
        )

    if form_data.username != ADMIN_USERNAME or not verify_password(form_data.password, ADMIN_PASSWORD_HASH):
        # Update failed attempts
        security_record.failed_attempts += 1
        security_record.last_failed_at = current_time
        if security_record.failed_attempts >= MAX_FAILED_ATTEMPTS:
            security_record.locked_until = current_time + timedelta(hours=LOCKOUT_HOURS)
            logger.warning(f"ADMIN_LOCKOUT_TRIGGERED: Lockout applied for {form_data.username}")
        else:
            logger.warning(f"ADMIN_LOGIN_FAILED: Failed attempt for {form_data.username}")
        db.commit()
        
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    # Reset on success
    security_record.failed_attempts = 0
    security_record.locked_until = None
    db.commit()
    
    logger.info(f"ADMIN_LOGIN_SUCCESS: {form_data.username}")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": ADMIN_USERNAME}, expires_delta=access_token_expires
    )
    
    is_production = os.getenv("ENVIRONMENT", "development") == "production"
    
    response.set_cookie(
        key="admin_session",
        value=access_token,
        httponly=True,
        max_age=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        expires=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        secure=is_production,
        samesite="lax"
    )
    return {"message": "Authenticated successfully"}

@auth_router.post("/logout")
def logout(response: Response):
    response.delete_cookie(key="admin_session")
    return {"message": "Logged out successfully"}

@auth_router.get("/me")
def get_me(admin: TokenData = Depends(get_current_admin)):
    return {"username": admin.username}
