import React from "react";
import { Outlet } from "react-router-dom";
import { SkipLink } from "@/components/common/SkipLink";
import { Navbar } from "@/components/navigation/Navbar";
import { GlobalBackground } from "./GlobalBackground";

interface AppLayoutProps {
  children?: React.ReactNode;
}

/**
 * Root semantic layout wrapper providing consistent header, main container, and footer zones.
 * Implements WCAG 2.1 AAA keyboard accessibility via SkipLink and semantic landmark roles.
 * Connects Navbar sticky navigation and renders ONLY authorized sprint sections.
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground relative z-0">
      <GlobalBackground />
      <SkipLink targetId="main-content" />

      <Navbar />

      <main id="main-content" role="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children || <Outlet />}
      </main>

      <footer
        role="contentinfo"
        className="border-t border-border/80 bg-background/80 py-12 text-center"
      >
        <div className="mx-auto max-w-7xl px-4 text-xs leading-loose text-muted-foreground sm:px-6">
          <p>
            Designed and engineered by <br />
            <span className="font-semibold text-foreground">Priyanshu Kharbash</span>
          </p>
          <p className="mt-4">
            Built using <br />
            React &bull; TypeScript &bull; FastAPI &bull; TailwindCSS &bull; Framer Motion &bull;
            Modern Software Engineering Practices
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
