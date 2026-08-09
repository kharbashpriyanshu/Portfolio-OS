import React from "react";
import { CertificationFilterType } from "./types";
import { Filter } from "lucide-react";

interface CertificationFiltersProps {
  activeFilter: CertificationFilterType;
  setActiveFilter: (filter: CertificationFilterType) => void;
}

import { CERTIFICATIONS_DATA } from "./certifications-config";

const dynamicCategories = Array.from(new Set(CERTIFICATIONS_DATA.map((item) => item.category)));
const FILTERS: CertificationFilterType[] = ["All", "Featured", ...dynamicCategories];

export const CertificationFilters = React.memo(function CertificationFilters({
  activeFilter,
  setActiveFilter,
}: CertificationFiltersProps) {
  return (
    <div className="mb-12 flex flex-col items-center gap-4">
      <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
        <Filter className="h-3.5 w-3.5" /> Filter Achievements
      </h4>

      <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
        {FILTERS.map((filter) => (
          <button
            key={`cf-${filter}`}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              activeFilter === filter
                ? "border-primary/50 bg-primary/10 text-primary shadow-glass-sm"
                : "border-border/60 bg-surface-card/50 text-muted-foreground hover:border-primary/30 hover:bg-surface-elevated hover:text-foreground"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
});
