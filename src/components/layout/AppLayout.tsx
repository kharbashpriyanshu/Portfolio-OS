import React from "react";
import { Outlet } from "react-router-dom";
import { SkipLink } from "@/components/common/SkipLink";
import { Navbar } from "@/components/navigation/Navbar";
import { APP_OWNER } from "@/constants";

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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink targetId="main-content" />

      <Navbar />

      <main id="main-content" role="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children || <Outlet />}
      </main>

      <footer
        role="contentinfo"
        className="border-t border-border/80 bg-background/80 py-8 text-center"
      >
        <div className="mx-auto max-w-7xl px-4 text-xs text-muted-foreground sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {APP_OWNER}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
