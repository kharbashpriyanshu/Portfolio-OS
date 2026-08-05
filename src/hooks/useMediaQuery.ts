import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/constants";

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Reusable hook to monitor media query matching for responsive layout adjustments.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * Convenient shorthand hook to check if the viewport exceeds a designated breakpoint.
 */
export function useBreakpoint(breakpoint: BreakpointKey): boolean {
  const minWidth = BREAKPOINTS[breakpoint];
  return useMediaQuery(`(min-width: ${minWidth}px)`);
}

export default useMediaQuery;
