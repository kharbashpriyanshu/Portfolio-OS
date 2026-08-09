# Security Hardening Audit: Directory Enumeration, Recon & Admin Surface Protection

**Date:** 2026-08-09
**Target:** Portfolio OS 1.0 (Vite React Frontend + FastAPI Backend)
**Objective:** Minimize exposed attack surface, prevent directory listing, protect sensitive routes, rate-limit reconnaissance, and avoid leaking implementation details.

## 1. Directory Structure & Enumeration Prevention

- **Status:** Protected.
- **Implementation:** Vercel deployment configuration (`vercel.json`) has been strictly whitelisted. Only known static assets and specific frontend routes (`/`, `/admin/login`, `/admin/inbox`) resolve to the application bundle. All other routes are rewritten to a backend `/api/404` endpoint, which returns a generic JSON 404 response. This explicitly prevents unauthorized filesystem traversal and completely eliminates directory indexing.

## 2. Robots.txt Configuration

- **Status:** Clean.
- **Implementation:** The `robots.txt` contains ONLY intentionally public crawler guidance (`User-agent: *`, `Allow: /`). No sensitive paths (e.g., `/admin`, `/api`) are listed, preventing automated discovery of internal infrastructure.

## 3. Admin Route Protection

- **Status:** Protected.
- **Implementation:**
  - Discovery is mitigated through strict routing.
  - Server-side APIs (`/api/v1/admin/*`) require valid JWT authentication. Unauthenticated requests receive generic `401 Unauthorized` responses without disclosing database details, usernames, or implementation specifics.

## 4. Static File Security & Source Maps

- **Status:** Secured.
- **Implementation:** Production build configuration (`vite.config.ts`) explicitly disables source maps for the production environment (`sourcemap: !isProduction`). Original TypeScript files and configuration maps are not exposed.

## 5. Generic Error Responses

- **Status:** Enforced.
- **Implementation:**
  - FastAPI is configured with global exception handlers for base `Exception` and `SQLAlchemyError`, ensuring unexpected crashes always return a controlled `500 Internal Server Error` instead of a Python stack trace or SQL schema leak.
  - Unknown routes handled by the backend return a clean JSON `404 Not Found`, without disclosing framework internals.

## 6. Rate Limiting

- **Status:** Implemented.
- **Implementation:** Memory-based IP rate limiting dependency is actively applied to `POST /api/v1/contact` and `POST /api/v1/admin/login` (5 requests per 60 seconds). This mitigates brute-force credential stuffing and contact-form spam.

## 7. Security Headers & CORS

- **Status:** Hardened.
- **Implementation:**
  - **CORS:** FastAPI is configured with a strict whitelist of trusted frontend origins. `Access-Control-Allow-Origin: *` is strictly forbidden.
  - **Headers:** Vercel deployment injects robust security headers for all routes, including `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, and `Permissions-Policy`.

## 8. Sensitive File Protection

- **Status:** Blocked.
- **Implementation:** Server/deployment layer rules ensure that attempts to request `/.env`, `/.git/config`, `/backup`, `/package.json`, or `/config` will fall through to the strict routing catch-all and return a generic 404 response. The application does not serve source files from the public web root.

## 9. Admin & Sitemap Discovery

- **Status:** Hidden.
- **Implementation:** Admin routes are not advertised in the public UI, navigation bars, `robots.txt`, or `sitemap.xml`. The sitemap strictly describes the public portfolio boundary.

## 10. Admin Authentication Brute-Force Protection

- **Status:** Enforced.
- **Implementation:** Database-backed lockout mechanism tracks failed login attempts per username (`AdminSecurityRecord`). Upon reaching 3 failed attempts, the authentication source is locked for 12 hours. Lockout state persists across server and browser restarts.

## 11. Contact Form Flood Control & Sender Approval

- **Status:** Enforced.
- **Implementation:**
  - **Message Limit:** Unapproved senders are restricted to a maximum of 10 messages per normalized email address.
  - **Admin Approval:** Authenticated administrators can approve senders to bypass the 10-message limit, or revoke approval to reinstate the limit.
  - **Layered Defense:** This email-based limit operates alongside IP rate limiting (5 requests per minute) and request body size limits enforced by Pydantic schemas (min/max string lengths).

## 12. Security Logging

- **Status:** Implemented.
- **Implementation:** Server-side logging captures critical security events (e.g., `CONTACT_SENDER_LIMIT_REACHED`, failed logins, lockouts) without logging passwords or sensitive request bodies, adhering to strict data privacy rules.

## Conclusion

The Portfolio OS architecture successfully adheres to the core principle: _"Don't hide sensitive resources — protect them."_ Intentionally exposed assets are properly configured, and unauthorized reconnaissance is met with generic, non-informative responses that intentionally conceal the underlying technology stack layout. Layered abuse prevention mechanisms protect the administrative console and the contact inbox from automated flooding and brute-force attacks, preserving legitimate-user access.
