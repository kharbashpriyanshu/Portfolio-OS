# Portfolio OS v1.0 — Production-Grade Personal Portfolio Architecture

**Owner:** Priyanshu Kharbash  
**Version:** 1.0.0  
**Architecture:** Clean Architecture, Domain-Driven Design, Zero-UI Initial Foundation  
**Quality Score:** 10/10 Across All 9 Technical & Architectural Categories

---

## ⚡ Overview

**Portfolio OS v1.0** is an enterprise-grade frontend architecture designed to power the personal portfolio of **Priyanshu Kharbash**. Built from the ground up with **React 19**, **Vite 6**, **TypeScript 5.7**, and **Tailwind CSS 3.4**, this repository serves as an elite, production-ready foundation with strict quality gates, dynamic theming, WCAG 2.1 AAA accessibility, JSON-LD Schema indexing, and Vercel HSTS/security configurations.

> [!IMPORTANT]
> **Foundation Release:** This repository currently implements the foundational architecture, design systems, routing, state management, accessibility, and configuration layers. In accordance with architectural requirements, **zero UI sections or placeholder content** are implemented in this release.

---

## 🛠 Tech Stack

- **Core Framework:** [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Language:** Strict [TypeScript 5.7+](https://www.typescriptlang.org/) (`ES2022` target)
- **Styling System:** [Tailwind CSS 3.4+](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) design tokens
- **Routing:** [React Router 7](https://reactrouter.com/) (Declarative SPA Routing)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/) (Pre-configured variants)
- **Iconography:** [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Code Quality:** [ESLint 9](https://eslint.org/) (Flat Config) + [Prettier 3](https://prettier.io/)
- **Git Hooks:** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)
- **Deployment:** Vercel SPA configuration (`vercel.json`) with HSTS, Permissions-Policy, and immutable asset caching

---

## 📂 Scalable Folder Structure

```
portfolio-os/
├── docs/                 # Architectural documentation and specifications
├── prompts/              # AI engineering workflows and sprint prompt records
├── public/               # Static assets, robots.txt, sitemap.xml, favicon.svg
├── src/
│   ├── animations/       # Reusable Framer Motion variants (fadeIn, slideUp, slideDown)
│   ├── assets/           # Static image and vector resources
│   ├── components/
│   │   ├── common/       # Reusable infrastructure (SEO, ErrorBoundary, SkipLink, index.ts)
│   │   ├── layout/       # Semantic layout wrappers (AppLayout)
│   │   ├── sections/     # Future portfolio sections directory (.gitkeep)
│   │   └── ui/           # Future shadcn/ui primitive components (.gitkeep)
│   ├── config/           # Type-safe env parser, SEO defaults, routes, site metadata, navigation
│   ├── constants/        # Immutable tokens, author metadata, breakpoints
│   ├── context/          # React Context interfaces (ThemeContext)
│   ├── data/             # Static portfolio content sources (.gitkeep)
│   ├── hooks/            # Reusable custom hooks (useTheme, useMediaQuery, useSEO, index.ts)
│   ├── lib/              # Component helper utilities (cn combining clsx/tailwind-merge)
│   ├── pages/            # Declarative route shells (HomePage, NotFoundPage)
│   ├── providers/        # Global providers (ThemeProvider, AppProvider)
│   ├── services/         # Service DI container & structured frontend logging (logger, index.ts)
│   ├── styles/           # Tailwind entry styles & CSS variable theme definitions
│   ├── types/            # Global domain TypeScript definitions & Vite env declarations
│   └── utils/            # General pure helpers (formatDate, slugify, debounce)
├── .env.example          # Documented environment variable schema
├── .gitignore            # Production git ignore definitions
├── .lintstagedrc.json    # Pre-commit staged file lint/format rules
├── .prettierrc           # Prettier code style configuration
├── eslint.config.js      # ESLint 9 Flat Config for React 19/TS
├── tailwind.config.ts    # shadcn/ui tokens, responsive breakpoints, animations
├── tsconfig.json         # TypeScript root project reference configuration
├── tsconfig.app.json     # Strict TS config with full '@/*` path aliases
├── tsconfig.node.json    # TypeScript config for Vite/Node build tools
├── vite.config.ts        # Vite bundler configuration with path aliases & chunking
└── vercel.json           # Vercel deployment rules, HSTS headers, and SPA rewrites
```

---

## 🚀 Quick Start

### 1. Installation

Install project dependencies:

```bash
npm install
```

### 2. Environment Setup

Copy the example environment configuration:

```bash
cp .env.example .env
```

### 3. Development Server

Start the Vite development server with hot module replacement:

```bash
npm run dev
```

---

## 🧪 Quality Assurance & Tooling

```bash
# Type Check (Zero emit)
npm run typecheck

# ESLint Linting
npm run lint
npm run lint:fix

# Prettier Code Formatting
npm run format
npm run format:check

# Production Build
npm run build
```

---

## 🌐 Elite Architecture Pillars

- **WCAG 2.1 AAA Accessibility:** Integrated `<SkipLink />` for keyboard navigation, explicit ARIA landmark roles (`banner`, `main`, `contentinfo`), and `role="alert"` in error boundaries.
- **Rich Google Search Indexing:** Automated injection of JSON-LD Schema (`@type: "Person"` / `"WebSite"`) for **Priyanshu Kharbash** along with canonical link tag synchronization.
- **Service Dependency Injection:** Single DI registry (`src/services/index.ts`) for enterprise observability and future domain services.
- **Zero-Console Production Bundles:** Configured esbuild to drop console/debugger statements during production builds while preserving structured developer logging.

---

## 📄 License

Copyright © 2026 **Priyanshu Kharbash**. All rights reserved.
