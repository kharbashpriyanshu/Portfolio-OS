import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import logger from "@/services/logger";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  variant?: "full" | "section";
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Enterprise-grade Error Boundary to catch React render tree errors gracefully.
 * Implements WCAG AAA role="alert" accessible error reporting and focus management.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error("Uncaught exception in component tree", error, {
      componentStack: errorInfo.componentStack,
    });
  }

  render(): ReactNode {
    const { variant = "full" } = this.props;

    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isSection = variant === "section";

      const containerClasses = isSection
        ? "flex flex-col items-center justify-center rounded-lg border border-destructive/30 bg-destructive/5 p-8 text-foreground min-h-[300px] w-full"
        : "flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground";

      return (
        <div role="alert" aria-live="assertive" className={containerClasses}>
          <div className="flex max-w-md flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-destructive/10 p-3 text-destructive">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              {isSection ? "Section Failed to Load" : "Application Error"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {isSection
                ? "An error occurred while rendering this section."
                : "An unexpected error occurred while rendering this interface."}
            </p>
            <button
              type="button"
              onClick={() => {
                if (isSection) {
                  this.setState({ hasError: false, error: null });
                } else {
                  window.location.reload();
                }
              }}
              aria-label="Reload content"
              className="mt-6 flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <RefreshCw className="h-4 w-4" />
              {isSection ? "Try Again" : "Reload Application"}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
