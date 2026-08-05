/**
 * Portfolio OS v1.0 — Cybersecurity Design System TypeScript Interfaces
 * Defines type-safe tokens for colors, typography, spacing, elevations, and animations.
 */

export type CyberAccent = "cyan" | "emerald" | "blue" | "amber" | "crimson" | "violet";

export type SemanticColor =
  "primary" | "secondary" | "destructive" | "warning" | "success" | "info" | "muted" | "accent";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "cyber" | "destructive";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type BadgeSeverity = "cyan" | "emerald" | "warning" | "critical" | "neutral";

export type CardElevation = "sm" | "md" | "lg" | "glass" | "cyber";

export type TypographyScale =
  | "heading-7xl"
  | "heading-6xl"
  | "heading-5xl"
  | "heading-4xl"
  | "heading-3xl"
  | "heading-2xl"
  | "heading-xl"
  | "body-lg"
  | "body-base"
  | "body-sm"
  | "body-xs"
  | "code-mono";

export interface GlassToken {
  background: string;
  backdropBlur: string;
  border: string;
  boxShadow: string;
}

export interface AnimationDuration {
  instant: number;
  fast: number;
  normal: number;
  slow: number;
  scan: number;
}

export interface AnimationEasing {
  cyberOut: number[];
  cyberIn: number[];
  cyberInOut: number[];
  spring: {
    type: "spring";
    stiffness: number;
    damping: number;
  };
}
