# Private Contact Inbox Architecture

This document describes the secure contact inbox implementation for Portfolio OS.

## 1. Architecture Overview

- **Frontend**: React (Vite) client sending JSON requests to `/api/v1/contact`. Admin UI hosted at `/admin/login` and `/admin/inbox`.
- **Backend**: FastAPI providing real server-side validation and authentication.
- **Database**: PostgreSQL (or SQLite for local development) via SQLAlchemy.

## 2. Security Features

- **Server-Side Authentication**: The `/admin/inbox` endpoint requires an HTTP-only secure JWT session cookie.
- **Password Hashing**: Admin passwords are never stored in plaintext. They are hashed using bcrypt.
- **Rate Limiting**: Public contact submissions are IP-rate-limited to prevent spam.
- **Data Validation**: Pydantic models strictly validate all incoming data sizes and types.

## 3. Configuration & Startup

### Backend Environment Variables

Create a `.env` file at the root of the project. Do **NOT** prefix these with `VITE_`.

```env
# Example configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_db
ADMIN_USERNAME=your_secure_username
ADMIN_PASSWORD_HASH="$2b$12$YOUR_BCRYPT_HASH_HERE"
SESSION_SECRET="your-secure-random-32-character-string"
ENVIRONMENT=production
```

**To generate a bcrypt hash for your password, you can run:**

```python
python -c "from passlib.hash import bcrypt; print(bcrypt.hash('your-super-secret-password'))"
```

### Running the Database Migrations

FastAPI and SQLAlchemy are configured to auto-create tables on startup (using `Base.metadata.create_all`). For a more robust production setup, consider integrating Alembic.

### Running the Backend (Development)

1. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
2. Start the FastAPI server:
   ```bash
   python -m uvicorn backend.main:app --reload --port 8000
   ```

### Running the Frontend

Start Vite as usual. The Vite dev server (`vite.config.ts`) is configured to proxy all `/api` requests to `http://127.0.0.1:8000`.

```bash
npm run dev
```

## 4. Accessing the Inbox

Navigate to `http://localhost:3000/admin/login` to access the Private Security Console.
Upon successful authentication, you will be redirected to the secure inbox at `/admin/inbox`. Unauthenticated access to the backend messages API will return `401 Unauthorized`.
