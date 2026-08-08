# Portfolio OS v1.0

![Portfolio OS Banner](public/og-image.webp)

A production-grade, enterprise-ready personal portfolio architecture engineered for Cybersecurity Professionals, Frontend Engineers, and AI Security Developers. Built to deliver a premium, scan-able, and highly accessible recruiter experience.

## 🚀 Live Deployment

**[View Live Portfolio](https://priyanshukharbash.com)**

## ⚡ Core Features

- **Component-Driven Architecture**: Fully modular React 19 architecture with distinct separation of concerns.
- **Config-Driven Data Layer**: All user-facing content (Projects, Journey, Certifications, Contact, About) is centralized in strict TypeScript configuration files.
- **Performance Optimized**: Achieves near-perfect Lighthouse scores through bundle-splitting (`React.lazy`), memoization (`useMemo`, `React.memo`), and Vite optimizations.
- **Glassmorphism Design System**: A bespoke, highly polished UI utilizing Tailwind CSS for vibrant gradients, backdrop blurs, and premium typography.
- **Immersive Micro-interactions**: Fluid page transitions and scroll animations powered by Framer Motion.
- **Accessibility First**: WCAG AAA compliant with full ARIA support, keyboard navigation, focus management, and native `prefers-reduced-motion` handling.
- **Production SEO**: Dynamic Open Graph, Twitter Cards, Canonical URLs, and JSON-LD structured data for flawless indexing.

## 🛠 Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Deployment**: [Vercel](https://vercel.com/) Edge Network

## 📁 Repository Structure

```text
├── src/
│   ├── animations/     # Reusable Framer Motion variants
│   ├── assets/         # Static assets (images, vectors)
│   ├── components/     # Modular React components
│   │   ├── common/     # Global shared UI (ErrorBoundary, SEO)
│   │   ├── layout/     # Structural wrappers (Navbar, Footer)
│   │   └── sections/   # Major page quadrants (Hero, Projects, Contact)
│   ├── config/         # Centralized configuration (Profile, SEO, Site)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   ├── pages/          # Next.js-style page routing
│   ├── providers/      # Context providers (Theme, App)
│   ├── services/       # External integrations (Logging, API)
│   ├── styles/         # Global CSS and Tailwind directives
│   └── types/          # TypeScript domain models
├── public/             # Static root assets (robots.txt, sitemap.xml)
├── index.html          # HTML entry point with meta tags
├── vite.config.ts      # Vite build pipeline
└── vercel.json         # Vercel deployment & security headers
```

## ⚙️ Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kharbashpriyanshu/Portfolio-OS.git
   cd Portfolio-OS
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment:**
   Copy the example environment file and update variables if necessary.

   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Lint and Typecheck:**
   ```bash
   npm run lint
   npm run typecheck
   ```

## 🚀 Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project into your Vercel Dashboard.
3. Vercel will automatically detect Vite and configure the build settings.
4. Set the `VITE_APP_URL` environment variable to your production domain.
5. Deploy. The included `vercel.json` will automatically apply strict security headers and aggressive caching policies.

## 🤝 Contribution

This repository serves as a personal engineering showcase. While pull requests for bug fixes or accessibility improvements are welcome, feature additions should be forked into your own variations.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

_Engineered by [Priyanshu Kharbash](https://github.com/kharbashpriyanshu)_
