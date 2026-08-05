/**
 * Type-safe environment configuration parser and runtime accessor.
 * Provides fallback defaults for resilience in development and production.
 */

export interface AppEnvironmentConfig {
  appName: string;
  appUrl: string;
  appEnv: "development" | "production" | "test";
  enableDarkMode: boolean;
  enableSeoIndexing: boolean;
  apiBaseUrl?: string;
  analyticsId?: string;
}

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (!value) return defaultValue;
  return value.toLowerCase() === "true";
}

export const env: AppEnvironmentConfig = {
  appName: import.meta.env.VITE_APP_NAME || "Portfolio OS",
  appUrl: import.meta.env.VITE_APP_URL || "http://localhost:3000",
  appEnv: (import.meta.env.VITE_APP_ENV as AppEnvironmentConfig["appEnv"]) || "development",
  enableDarkMode: parseBoolean(import.meta.env.VITE_ENABLE_DARK_MODE, true),
  enableSeoIndexing: parseBoolean(import.meta.env.VITE_ENABLE_SEO_INDEXING, false),
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || undefined,
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || undefined,
};

export default env;
