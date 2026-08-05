import React, { useEffect, useState, useMemo, useCallback } from "react";
import type { Theme } from "@/types";
import { ThemeContext } from "@/context/ThemeContext";
import { DEFAULT_THEME } from "@/constants";

const THEME_STORAGE_KEY = "portfolio_os_theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME as Theme,
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      return storedTheme || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let effectiveTheme: "light" | "dark";

    if (theme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      effectiveTheme = systemPreference;
    } else {
      effectiveTheme = theme;
    }

    root.classList.add(effectiveTheme);
    root.style.colorScheme = effectiveTheme;
    setResolvedTheme(effectiveTheme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      const nextTheme = e.matches ? "dark" : "light";
      root.classList.add(nextTheme);
      root.style.colorScheme = nextTheme;
      setResolvedTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore storage errors in restricted browser contexts
      }
      setThemeState(newTheme);
    },
    [storageKey]
  );

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
    }),
    [theme, setTheme, resolvedTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
