import * as React from "react";
import { Cpu } from "lucide-react";

export interface ArchitectureHighlightsProps {
  highlights: string[];
}

/**
 * Reusable ArchitectureHighlights component for engineering case studies.
 * Highlights zero-trust boundaries, service DI containers, and system invariants.
 */
export function ArchitectureHighlights({ highlights }: ArchitectureHighlightsProps) {
  return (
    <div className="space-y-2.5 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
          // ARCHITECTURE HIGHLIGHTS
        </h4>
      </div>
      <ul role="list" className="space-y-2">
        {highlights.map((item, idx) => {
          const isTbd = item.startsWith("TBD");
          return (
            <li
              key={`arch-${idx}`}
              className={`flex items-start gap-2 text-xs sm:text-sm ${
                isTbd ? "text-muted-foreground/80 italic font-mono" : "text-foreground"
              }`}
            >
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArchitectureHighlights;
