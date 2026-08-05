import type { AnimationDuration, AnimationEasing, CyberAccent, GlassToken } from "@/types/design";

/**
 * Portfolio OS v1.0 — Award-Winning Cybersecurity Design Token Registry
 * Centralized immutable configuration of color codes, typography scales, glassmorphic tokens,
 * and Framer Motion animation curves.
 */

export const CYBER_ACCENT_PALETTE: Record<CyberAccent, string> = {
  cyan: "#00DDFF", // Primary cyber accent (Electric Cyan)
  emerald: "#34D399", // Secondary accent (Matrix Emerald)
  blue: "#3B82F6", // Interactive focus / info blue
  amber: "#F59E0B", // Warning & security alert amber
  crimson: "#F43F5E", // Critical vulnerability / destructive crimson
  violet: "#A855F7", // Deep neural / encryption violet
} as const;

export const GLASS_TOKENS: Record<"default" | "elevated" | "accent", GlassToken> = {
  default: {
    background: "rgba(13, 20, 36, 0.70)",
    backdropBlur: "12px",
    border: "rgba(32, 44, 70, 0.60)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
  },
  elevated: {
    background: "rgba(22, 34, 59, 0.75)",
    backdropBlur: "16px",
    border: "rgba(0, 221, 255, 0.35)",
    boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.45)",
  },
  accent: {
    background: "rgba(0, 221, 255, 0.10)",
    backdropBlur: "20px",
    border: "rgba(0, 221, 255, 0.50)",
    boxShadow: "0 0 25px rgba(0, 221, 255, 0.25)",
  },
} as const;

export const ANIMATION_DURATIONS: AnimationDuration = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.35,
  slow: 0.6,
  scan: 3.5,
} as const;

export const ANIMATION_EASINGS: AnimationEasing = {
  cyberOut: [0.16, 1, 0.3, 1],
  cyberIn: [0.7, 0, 0.84, 0],
  cyberInOut: [0.65, 0, 0.35, 1],
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
} as const;

export const SPACING_SCALE = {
  containerMax: "1280px",
  containerNarrow: "896px",
  sectionGapVertical: "5.5rem", // 88px (22 scale)
  cardPadding: "1.5rem", // 24px (6 scale)
  gridGap: "1.5rem", // 24px (6 scale)
} as const;

export const DESIGN_SYSTEM_CONFIG = {
  theme: "Cybersecurity Engineer Portfolio",
  owner: "Priyanshu Kharbash",
  defaultMode: "dark",
  wcagLevel: "AAA",
  colors: CYBER_ACCENT_PALETTE,
  glass: GLASS_TOKENS,
  durations: ANIMATION_DURATIONS,
  easings: ANIMATION_EASINGS,
  spacing: SPACING_SCALE,
} as const;

export default DESIGN_SYSTEM_CONFIG;
