# Portfolio OS Roadmap

This document outlines the strategic vision and future engineering sprints for Portfolio OS.

## 🟢 v1.0.0 - Production Launch (Current)

- [x] Component-driven React architecture.
- [x] Configuration-first data isolation.
- [x] Enterprise glassmorphism design system.
- [x] SEO & Meta tags production readiness.
- [x] Vercel edge deployment configuration.

## 🟡 v1.1.0 - Backend Integration & Analytics (Planned)

- **Database Integration:** Migrate the static `*-config.ts` files to a headless CMS (Sanity or Payload CMS) or a Supabase backend for dynamic content updating without code deployments.
- **Analytics Engine:** Integrate Vercel Analytics and Google Search Console to monitor recruiter engagement and page performance.
- **Dynamic Contact Form:** Connect the contact form to Resend or SendGrid for real-time email delivery.

## 🟠 v1.2.0 - Advanced Personalization (Exploratory)

- **Recruiter Dashboard Mode:** A toggleable state that presents a strictly analytical, metric-heavy version of the portfolio, stripping away animations for rapid scanning.
- **AI Chatbot Assistant:** Embed a small LLM-powered terminal that can answer questions about Priyanshu's resume, experience, and availability based on vector embeddings of the configuration files.
- **PDF Resume Generator:** Dynamically generate a stylized PDF resume directly from the active configuration files using `@react-pdf/renderer`.

## 🔴 v2.0.0 - Multi-Tenant Architecture (Future)

- **Portfolio-as-a-Service:** Abstract the core engine into a customizable template that other engineers can deploy with zero configuration, powered by a CLI tool (`npx create-portfolio-os`).
