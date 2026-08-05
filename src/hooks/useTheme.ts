import { useContext } from "react";
import { ThemeContext, type ThemeContextState } from "@/context/ThemeContext";

/**
 * Custom hook to consume the ThemeContext safely.
 * Throws a descriptive error if used outside of a ThemeProvider.
 */
export function useTheme(): ThemeContextState {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default useTheme;
