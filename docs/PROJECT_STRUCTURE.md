# Project Structure Guide

A detailed breakdown of the Portfolio OS v1.0 directory layout to assist in rapid navigation and future feature development.

## Root Directory

- `src/` - The core application source code.
- `public/` - Static files served at the root URL (manifest, sitemap, robots, favicons).
- `docs/` - System architecture and project documentation.
- `index.html` - The HTML shell and Vite entry point.
- `vite.config.ts` - Build pipeline configuration.
- `vercel.json` - Serverless deployment configuration and headers.
- `tailwind.config.ts` - Tailwind CSS theme, colors, and plugin configuration.
- `tsconfig.json` - TypeScript compiler rules.

## `src/` Architecture

### `animations/`

Contains global Framer Motion configurations.

- `variants.ts` - Reusable animation states (fadeIn, slideUp) to ensure motion consistency.

### `components/`

The UI presentation layer, divided by scope.

- `common/` - Global primitives (`ErrorBoundary`, `SEO`, `SkipLink`, `SectionSkeleton`).
- `layout/` - Shell components (`Navbar`, `Footer`, `MobileNav`).
- `sections/` - The heavy-lifting feature modules (`hero`, `projects`, `skills`, `journey`, `certifications`, `contact`, `metrics`, `about`).
  - _Note:_ Each section often contains its own localized `*-config.ts` and `use*.ts` hook to encapsulate logic.

### `config/`

Global configuration files that dictate application state and metadata.

- `profile.ts` - The Single Source of Truth for personal data.
- `seo.ts` - Global SEO parameters and schema generation.
- `site.ts` - Generic site-wide constants.
- `navigation.ts` - Header and footer routing paths.

### `hooks/`

Reusable React hooks decoupled from specific components.

- `useTerminal.ts` - Logic for the interactive terminal simulation in the Hero.
- `useScrollSpy.ts` - Intersection observer logic for active navigation highlighting.

### `pages/`

Route-level components.

- `HomePage.tsx` - The main assembly file that orchestrates all sections and lazy-loading boundaries.

### `providers/`

React Context providers.

- `AppProvider.tsx` - Root wrapper for Theme, Routing, Error boundaries, and Framer Motion config.
- `ThemeProvider.tsx` - Dark mode context management.

### `services/`

External integrations.

- `logger.ts` - Structured console logging for debugging.

### `styles/`

Global CSS assets.

- `index.css` - Tailwind directives, CSS variables, and the custom Glassmorphism design system abstractions (`.card-cyber`, `.glass-panel`).

### `types/`

Global TypeScript definitions.

- `index.ts` - Shared interfaces used across multiple domains.
