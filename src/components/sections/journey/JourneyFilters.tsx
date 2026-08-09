import React from "react";
import { JourneyFilterType } from "./types";
import { Filter } from "lucide-react";

interface JourneyFiltersProps {
  activeFilter: JourneyFilterType;
  setActiveFilter: (filter: JourneyFilterType) => void;
}

const FILTERS: JourneyFilterType[] = [
  "All",
  "Education",
  "Learning",
  "Engineering",
  "Internship",
  "Current",
];

export const JourneyFilters = React.memo(function JourneyFilters({
  activeFilter,
  setActiveFilter,
}: JourneyFiltersProps) {
  return (
    <div className="mb-12 flex flex-col items-center gap-4">
      <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
        <Filter className="h-3.5 w-3.5" /> Timeline Filters
      </h4>

      <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
        {FILTERS.map((filter) => (
          <button
            key={`jf-${filter}`}
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
