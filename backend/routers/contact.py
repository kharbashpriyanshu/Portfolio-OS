from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import ContactMessage, ContactSender
from ..schemas import ContactCreate
import time
import logging

logger = logging.getLogger("security")

contact_router = APIRouter(prefix="/api/v1/contact")

RATE_LIMIT_WINDOW = 60 # seconds
MAX_REQUESTS_PER_WINDOW = 5
ip_request_history = {}

def rate_limit(request: Request):
    client_ip = request.client.host
    current_time = time.time()
    
    if client_ip not in ip_request_history:
        ip_request_history[client_ip] = []
    
    ip_request_history[client_ip] = [t for t in ip_request_history[client_ip] if current_time - t < RATE_LIMIT_WINDOW]
    
    if len(ip_request_history[client_ip]) >= MAX_REQUESTS_PER_WINDOW:
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    
    ip_request_history[client_ip].append(current_time)

MAX_MESSAGES_PER_EMAIL = 10

@contact_router.post("", dependencies=[Depends(rate_limit)])
def submit_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    # Normalize email
    normalized_email = contact.email.strip().lower()
    
    # Check sender limits
    sender = db.query(ContactSender).filter(ContactSender.normalized_email == normalized_email).first()
    
    if sender:
        if not sender.approved and sender.message_count >= MAX_MESSAGES_PER_EMAIL:
            logger.warning(f"CONTACT_SENDER_LIMIT_REACHED: {normalized_email}")
            raise HTTPException(status_code=429, detail="You've reached the current message limit. Further messages require approval.")
        sender.message_count += 1
    else:
        sender = ContactSender(normalized_email=normalized_email, message_count=1)
        db.add(sender)
    
    db_message = ContactMessage(
        name=contact.name,
        email=normalized_email,
        subject=contact.subject,
        message=contact.message
    )
    db.add(db_message)
    db.commit()
    return {"message": "Message received successfully"}
