# Portfolio OS Architecture

## Core Philosophy

Portfolio OS is built on a **Configuration-First Component Architecture**. The primary objective is to cleanly separate data (content) from presentation (React components) to ensure the portfolio is trivial to update without risking UI regressions.

## 1. Data Layer (The Configs)

All data rendered in the application originates from `src/config/` and section-specific `-config.ts` files.

- **Single Source of Truth:** `src/config/profile.ts` serves as the root identity. It contains names, roles, and global social links.
- **Section Configs:** Complex sections (like Projects and Journey) have their own localized config files (`projects-config.ts`).
- **Immutability:** React components treat config data as immutable readonly states.

## 2. Component Layer

The component layer heavily leverages React 19.

- **Composition over Inheritance:** Large sections are broken down into granular, single-responsibility components (e.g., `MissionDashboard`, `MissionCard`).
- **Code Splitting:** Sections rendered "below the fold" are lazy-loaded via `React.lazy()` and wrapped in `<Suspense>` boundaries.
- **Resilience:** Every major section is wrapped in an `<ErrorBoundary variant="section">`. A crash in one quadrant will not cascade to the root application.

## 3. Styling & Design System

- **Tailwind CSS Engine:** Uses strict utility classes.
- **Glassmorphism Constants:** Highly reused utilities like `card-cyber`, `glass-card`, and `glass-panel` are abstracted in `index.css` to prevent DOM clutter and enforce design consistency.
- **Dark Mode Native:** The application is exclusively dark mode to match a cybersecurity aesthetic.

## 4. Performance & UX

- **Framer Motion:** Centralized variants in `src/animations/variants.ts` ensure unified motion language. The app respects OS-level `prefers-reduced-motion` globally via `<MotionConfig>`.
- **Memoization:** High-frequency rendering paths (like project filtering and skill interactions) are optimized with `React.memo` and `useMemo`.

## 5. Deployment & Edge

- Designed for **Vercel Edge Network**.
- Employs static asset caching and strict security headers via `vercel.json`.
