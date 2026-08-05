# Portfolio OS v1.0 — Architecture & Engineering Specification

**Owner:** Priyanshu Kharbash  
**Version:** 1.0.0  
**Stack:** React 19, Vite, TypeScript, Tailwind CSS, React Router 7, Framer Motion, shadcn/ui

---

## 1. Architectural Overview

Portfolio OS v1.0 is engineered following **Clean Architecture** and **Domain-Driven Design** principles, enforcing strict separation of concerns across presentation, state management, configuration, observability, and domain services.

```
src/
├── animations/         # Framer Motion reusable animation variants
├── assets/             # Static visual assets (icons, vectors, images)
├── components/
│   ├── common/         # Domain-agnostic reusable components (SEO, ErrorBoundary, SkipLink)
│   ├── layout/         # Semantic layout shells (header, main, footer)
│   ├── sections/       # Portfolio feature sections (future sprint)
│   └── ui/             # shadcn/ui primitive components
├── config/             # Environment, site metadata, SEO defaults, routes, and navigation
├── constants/          # Immutable application tokens and breakpoints
├── context/            # React context interfaces and definitions
├── data/               # Static portfolio data sources (future sprint)
├── hooks/              # Custom reusable React hooks (useTheme, useMediaQuery, useSEO)
├── lib/                # Third-party wrapper utilities (cn for Tailwind/clsx)
├── pages/              # Declarative route page containers
├── providers/          # Global application providers (ThemeProvider, AppProvider)
├── services/           # Service Container DI registry and structured frontend logging
├── styles/             # Tailwind CSS entry and theme variable definitions
├── types/              # Domain TypeScript interfaces and Vite declarations
└── utils/              # General pure utility functions (date, slugify, debounce)
```

---

## 2. Core Architectural Pillars

### 2.1 Clean Architecture & Service DI Container

- **Service Container (`src/services/index.ts`)**: Serves as the single Dependency Injection (DI) access point for enterprise observability, telemetry, and future external APIs.
- **Strict TypeScript 5.7+**: Zero implicit any, strict null checks, full module interop, and clean Vite bundler resolution.
- **Path Aliases**: Consistent `@/*` prefixes mapped across TypeScript (`tsconfig.app.json`) and Vite (`vite.config.ts`).

### 2.2 Accessibility (a11y) — WCAG 2.1 AAA Standard

- **Skip Navigation (`SkipLink.tsx`)**: Visually hidden skip link for keyboard users jumping directly to `#main-content`.
- **Semantic Landmark Roles**: AppLayout implements explicit `<header role="banner">`, `<main id="main-content" role="main">`, and `<footer role="contentinfo">`.
- **Accessible Fault Isolation**: `ErrorBoundary.tsx` implements `role="alert"`, `aria-live="assertive"`, and clear keyboard focus indicators.

### 2.3 Rich SEO & Structured Data Architecture

- **JSON-LD Schema (`getPersonJSONLD()`)**: Automatically injects schema.org `"@type": "Person"` structured data for rich Google Search indexing.
- **Canonical URL Synchronization**: Synchronizes document titles, descriptions, keywords, Open Graph, Twitter cards, and `<link rel="canonical" />` on route transitions.

### 2.4 Styling & Dynamic Theming System

- **Tailwind CSS & shadcn/ui**: Built on CSS variables (`hsl(var(--primary))`, etc.) supporting light, dark, and system preference detection via `ThemeProvider`.
- **Responsive Breakpoints**: Custom breakpoint hooks (`useMediaQuery`, `useBreakpoint`) aligned with Tailwind tokens (`xs` through `3xl`).

---

## 3. Development Workflow

```bash
# Start local development server
npm run dev

# Run TypeScript type checking and Vite production build
npm run build

# Run ESLint validation
npm run lint

# Format codebase with Prettier
npm run format
```

---

## 4. Vercel Deployment Architecture

The project includes a production-ready `vercel.json` configured for:

- SPA routing rewrites (`/(.*)` -> `/index.html`)
- Strict HTTP security headers (`Strict-Transport-Security`, `Permissions-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
- Immutable caching rules for static assets (`/assets/*`) and favicon verification
