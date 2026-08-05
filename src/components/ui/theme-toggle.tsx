import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

/**
 * Accessible theme toggle button cycling between Dark, Light, and System modes.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  const getIcon = () => {
    if (theme === "dark") return <Moon className="h-4 w-4 text-primary transition-transform" />;
    if (theme === "light") return <Sun className="h-4 w-4 text-warning transition-transform" />;
    return <Monitor className="h-4 w-4 text-muted-foreground transition-transform" />;
  };

  const getLabel = () => {
    if (theme === "dark") return "Dark mode active. Click to switch to Light mode.";
    if (theme === "light") return "Light mode active. Click to switch to System preference.";
    return "System theme active. Click to switch to Dark mode.";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={getLabel()}
      title={getLabel()}
      className="rounded-full border border-border/80 bg-surface/50 hover:border-primary/50 hover:bg-surface-elevated"
    >
      {getIcon()}
    </Button>
  );
}

export default ThemeToggle;
