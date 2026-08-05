import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { ROUTES } from "@/constants";

/**
 * 404 Not Found structural shell.
 */
export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <SEO title="Page Not Found" noIndex />
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="mt-2 text-sm text-muted-foreground">The requested page could not be found.</p>
      <Link
        to={ROUTES.HOME}
        className="mt-6 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
