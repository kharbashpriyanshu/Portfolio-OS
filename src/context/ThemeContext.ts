import { createContext } from "react";
import type { Theme } from "@/types";

export interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextState | undefined>(undefined);
