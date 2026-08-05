import * as React from "react";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";

export interface RoadmapCardProps {
  roadmap: string[];
}

/**
 * Reusable RoadmapCard component for engineering case study future milestones.
 * Elegantly formats TBD placeholders without fabricating fake metrics.
 */
export function RoadmapCard({ roadmap }: RoadmapCardProps) {
  return (
    <div className="space-y-2 rounded-xl border border-border/80 bg-surface/60 p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-warning" aria-hidden="true" />
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-warning">
          // FUTURE ROADMAP &amp; HORIZON
        </h4>
      </div>
      <ul role="list" className="space-y-2">
        {roadmap.map((item, idx) => {
          const isTbd = item.startsWith("TBD");
          return (
            <li
              key={`roadmap-${idx}`}
              className={`flex items-start gap-2 text-xs sm:text-sm ${
                isTbd ? "text-muted-foreground/80 italic font-mono" : "text-foreground-muted"
              }`}
            >
              {isTbd ? (
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning/70" aria-hidden="true" />
              ) : (
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
              )}
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RoadmapCard;
