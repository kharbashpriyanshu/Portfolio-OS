import type { Variants } from "framer-motion";
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from "@/config/design";

/**
 * Portfolio OS v1.0 — Reusable Cybersecurity Framer Motion Presets
 * Engineered for sleek, zero-jank hardware-accelerated animations across
 * cybersecurity cards, terminal outputs, and cyber section reveals.
 */

export const cyberFadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.cyberOut,
    },
  },
};

export const cyberSlideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: ANIMATION_EASINGS.cyberOut,
    },
  },
};

export const cyberScanReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.cyberOut,
    },
  },
};

export const matrixStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const glassCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
    borderColor: "rgba(32, 44, 70, 0.60)",
  },
  hover: {
    scale: 1.015,
    y: -4,
    boxShadow: "0 0 25px rgba(0, 221, 255, 0.25)",
    borderColor: "rgba(0, 221, 255, 0.60)",
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: ANIMATION_EASINGS.cyberOut,
    },
  },
};

export const cyberGlowPulse: Variants = {
  rest: { opacity: 0.85, scale: 1 },
  pulse: {
    opacity: [0.85, 1, 0.85],
    scale: [1, 1.02, 1],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cyberGlitchText: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export default {
  cyberFadeIn,
  cyberSlideUp,
  cyberScanReveal,
  matrixStaggerContainer,
  glassCardHover,
  cyberGlowPulse,
  cyberGlitchText,
};
