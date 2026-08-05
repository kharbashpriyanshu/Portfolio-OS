import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { router } from "@/config/routes";

/**
 * Enterprise root provider wrapper combining ThemeProvider, RouterProvider, and ErrorBoundary.
 */
export function AppProvider() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default AppProvider;
