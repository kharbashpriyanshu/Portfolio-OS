import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface TechnologyBadgeProps {
  name: string;
  className?: string;
}

/**
 * Reusable Technology Badge component for engineering case studies.
 * Implements subtle hover glow and transition micro-interactions.
 */
export function TechnologyBadge({ name, className }: TechnologyBadgeProps) {
  return (
    <Badge
      variant="cyan"
      className={cn(
        "font-mono text-2xs transition-all duration-200 hover:scale-105 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(0,221,255,0.3)] cursor-default select-none",
        className
      )}
    >
      {name}
    </Badge>
  );
}

export default TechnologyBadge;
