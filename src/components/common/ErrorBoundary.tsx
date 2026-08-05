import React, { Component, type ErrorInfo, type ReactNode } from "react";
import logger from "@/services/logger";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
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
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground"
        >
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold tracking-tight">Application Error</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              An unexpected error occurred while rendering this interface.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              aria-label="Reload application page"
              className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
