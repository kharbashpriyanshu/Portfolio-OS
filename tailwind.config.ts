import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      /* ======================================================================
         1. TYPOGRAPHY SYSTEM
         ====================================================================== */
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.05" }],
      },

      /* ======================================================================
         2. GLOBAL COLOR SYSTEM & CYBERSECURITY PALETTE
         ====================================================================== */
      colors: {
        border: "hsl(var(--border))",
        "border-subtle": "hsl(var(--border-subtle))",
        "border-accent": "hsl(var(--border-accent))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        "surface-elevated": "hsl(var(--surface-elevated))",
        "surface-card": "hsl(var(--surface-card))",
        "surface-hover": "hsl(var(--surface-hover))",
        foreground: "hsl(var(--foreground))",
        "foreground-muted": "hsl(var(--foreground-muted))",
        "foreground-subtle": "hsl(var(--foreground-subtle))",
        "foreground-accent": "hsl(var(--foreground-accent))",

        /* Cybersecurity Palette Accents */
        cyber: {
          cyan: "hsl(var(--cyber-cyan))",
          emerald: "hsl(var(--cyber-emerald))",
          blue: "hsl(var(--cyber-blue))",
          amber: "hsl(var(--cyber-amber))",
          crimson: "hsl(var(--cyber-crimson))",
          violet: "hsl(var(--cyber-violet))",
        },

        /* Standard Semantic Mapping */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /* ======================================================================
         3. SPACING & LAYOUT SYSTEM
         ====================================================================== */
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "128": "32rem",
        "144": "36rem",
      },

      /* ======================================================================
         4. BORDER RADIUS & SHADOW SYSTEMS
         ====================================================================== */
      borderRadius: {
        "3xl": "1.5rem",
        "2xl": "1rem",
        xl: "0.75rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "0.125rem",
      },
      boxShadow: {
        "cyber-cyan": "0 0 25px rgba(0, 221, 255, 0.25)",
        "cyber-emerald": "0 0 25px rgba(52, 211, 153, 0.25)",
        "cyber-amber": "0 0 25px rgba(245, 158, 11, 0.25)",
        "cyber-crimson": "0 0 25px rgba(244, 63, 94, 0.25)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
        "glass-lg": "0 12px 40px 0 rgba(0, 0, 0, 0.45)",
      },

      /* ======================================================================
         5. ANIMATION LANGUAGE & KEYFRAMES
         ====================================================================== */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 15px rgba(0,221,255,0.4))" },
          "50%": { opacity: "0.7", filter: "drop-shadow(0 0 5px rgba(0,221,255,0.1))" },
        },
        "matrix-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        "cyber-glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "matrix-scan": "matrix-scan 4s linear infinite",
        "cyber-glitch": "cyber-glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        float: "float 4s ease-in-out infinite",
        "shimmer-slide": "shimmer-slide 2.5s infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
