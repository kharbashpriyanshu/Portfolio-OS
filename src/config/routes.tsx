import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AdminLogin } from "@/pages/admin/AdminLogin";
import { AdminInbox } from "@/pages/admin/AdminInbox";
import { ROUTES } from "@/constants";

/**
 * Modern React Router 7 route configuration table.
 * Implements AppLayout as the root layout shell and ErrorBoundary for fault isolation.
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: (
      <ErrorBoundary>
        <AdminLogin />
      </ErrorBoundary>
    ),
  },
  {
    path: "/admin/inbox",
    element: (
      <ErrorBoundary>
        <AdminInbox />
      </ErrorBoundary>
    ),
  },
]);

export default router;
