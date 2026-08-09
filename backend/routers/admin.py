from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime, timezone
from pydantic import BaseModel
import logging

logger = logging.getLogger("security")
from ..database import get_db
from ..models import ContactMessage, ContactSender
from ..schemas import ContactResponse, ContactSenderResponse, DashboardStatsResponse, SenderApprovalUpdate
from ..auth import get_current_admin, TokenData

admin_router = APIRouter(prefix="/api/v1/admin/messages")
admin_senders_router = APIRouter(prefix="/api/v1/admin/senders")
admin_stats_router = APIRouter(prefix="/api/v1/admin/stats")

class ReadStatusUpdate(BaseModel):
    is_read: bool

@admin_router.get("", response_model=List[ContactResponse])
def get_messages(db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()

@admin_router.get("/{msg_id}", response_model=ContactResponse)
def get_message(msg_id: int, db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    return msg

@admin_router.patch("/{msg_id}/read")
def mark_as_read(msg_id: int, status_update: ReadStatusUpdate, db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    msg.is_read = status_update.is_read
    msg.read_at = datetime.now(timezone.utc) if status_update.is_read else None
    db.commit()
    return {"message": "Status updated successfully"}

@admin_router.delete("/{msg_id}")
def delete_message(msg_id: int, db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    msg = db.query(ContactMessage).filter(ContactMessage.id == msg_id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    db.delete(msg)
    db.commit()
    return {"message": "Message deleted successfully"}

@admin_stats_router.get("", response_model=DashboardStatsResponse)
def get_stats(db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    total_messages = db.query(ContactMessage).count()
    unread_messages = db.query(ContactMessage).filter(ContactMessage.is_read == False).count()
    approved_senders = db.query(ContactSender).filter(ContactSender.approved == True).count()
    near_limit_senders = db.query(ContactSender).filter(ContactSender.message_count >= 8, ContactSender.approved == False).count()
    
    return {
        "total_messages": total_messages,
        "unread_messages": unread_messages,
        "approved_senders": approved_senders,
        "near_limit_senders": near_limit_senders
    }

@admin_senders_router.get("", response_model=List[ContactSenderResponse])
def get_senders(db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    return db.query(ContactSender).order_by(ContactSender.updated_at.desc()).all()

@admin_senders_router.patch("/{sender_id}/approval")
def update_sender_approval(sender_id: int, status_update: SenderApprovalUpdate, db: Session = Depends(get_db), admin: TokenData = Depends(get_current_admin)):
    sender = db.query(ContactSender).filter(ContactSender.id == sender_id).first()
    if not sender:
        raise HTTPException(status_code=404, detail="Sender not found")
    
    sender.approved = status_update.approved
    db.commit()
    
    if sender.approved:
        logger.info(f"CONTACT_SENDER_APPROVED: {sender.normalized_email}")
    else:
        logger.info(f"CONTACT_SENDER_APPROVAL_REVOKED: {sender.normalized_email}")
        
    return {"message": "Sender approval status updated successfully"}
