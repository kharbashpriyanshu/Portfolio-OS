/**
 * Global application constants and immutable configuration tokens.
 */

export const APP_NAME = "Portfolio OS";
export const APP_OWNER = "Priyanshu Kharbash";
export const APP_VERSION = "1.0.0";

export const DEFAULT_THEME = "dark";

export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "*",
} as const;

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1400,
  "3xl": 1600,
} as const;
