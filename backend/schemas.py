from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=2, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: datetime
    is_read: bool
    read_at: Optional[datetime]

    class Config:
        from_attributes = True

class ContactSenderResponse(BaseModel):
    id: int
    normalized_email: str
    message_count: int
    approved: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True

class DashboardStatsResponse(BaseModel):
    total_messages: int
    unread_messages: int
    approved_senders: int
    near_limit_senders: int

class SenderApprovalUpdate(BaseModel):
    approved: bool
