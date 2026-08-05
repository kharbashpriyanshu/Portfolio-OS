import * as React from "react";
import { CheckCircle2, Clock } from "lucide-react";

export interface FeatureListProps {
  features: string[];
}

/**
 * Reusable FeatureList component for engineering case study key capabilities.
 * Correctly distinguishes between verified capabilities and TBD roadmap items.
 */
export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground-muted">
        // KEY ENGINEERING FEATURES
      </h4>
      <ul role="list" className="space-y-2">
        {features.map((feature, idx) => {
          const isTbd = feature.startsWith("TBD");
          return (
            <li
              key={`feature-${idx}`}
              className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                isTbd ? "text-muted-foreground/80 italic font-mono" : "text-foreground-muted"
              }`}
            >
              {isTbd ? (
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-warning/70" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              )}
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeatureList;
