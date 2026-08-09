from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException
from sqlalchemy.exc import SQLAlchemyError
from .database import engine, Base
from .routers import contact, admin
from .auth import auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio OS Contact API")

import os

frontend_origin = os.getenv("FRONTEND_ORIGIN")
origins = [
    "http://localhost:3000", 
    "http://localhost:5173", 
    "http://127.0.0.1:3000", 
    "http://localhost:3001", 
    "http://127.0.0.1:3001", 
    "https://priyanshukharbash.com", 
    "https://www.priyanshukharbash.com"
]
if frontend_origin and frontend_origin not in origins:
    origins.append(frontend_origin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.contact_router)
app.include_router(auth_router)
app.include_router(admin.admin_router)
app.include_router(admin.admin_stats_router)
app.include_router(admin.admin_senders_router)

@app.get("/api/health")
def api_health_check():
    return {"status": "ok"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    if exc.status_code == 404:
        return JSONResponse(status_code=404, content={"detail": "Not Found"})
    return JSONResponse(status_code=exc.status_code, content={"detail": exc.detail})

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(status_code=500, content={"detail": "Internal Server Error"})

@app.exception_handler(SQLAlchemyError)
async def sqlalchemy_exception_handler(request: Request, exc: SQLAlchemyError):
    return JSONResponse(status_code=500, content={"detail": "Internal Server Error"})
