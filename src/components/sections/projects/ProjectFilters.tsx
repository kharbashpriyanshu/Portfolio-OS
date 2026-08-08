import React from "react";
import { ProjectCategory, ProjectStatus } from "./types";
import { Filter, Star } from "lucide-react";

interface ProjectFiltersProps {
  selectedCategory: ProjectCategory | "All";
  setSelectedCategory: (category: ProjectCategory | "All") => void;
  selectedStatus: ProjectStatus | "All";
  setSelectedStatus: (status: ProjectStatus | "All") => void;
  showFeaturedOnly: boolean;
  setShowFeaturedOnly: (show: boolean) => void;
}

const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Cybersecurity",
  "Full Stack",
  "AI",
  "Research",
  "Academic",
];
const STATUSES: (ProjectStatus | "All")[] = ["All", "Completed", "In Progress", "Archived"];

export const ProjectFilters = React.memo(function ProjectFilters({
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  showFeaturedOnly,
  setShowFeaturedOnly,
}: ProjectFiltersProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
          <Filter className="h-3.5 w-3.5" /> Filters
        </h4>
        <button
          onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
          className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${
            showFeaturedOnly
              ? "border-cyber-amber/50 bg-cyber-amber/10 text-cyber-amber"
              : "border-border/60 bg-surface-card text-muted-foreground hover:bg-surface-elevated"
          }`}
          aria-pressed={showFeaturedOnly}
        >
          <Star className={`h-3 w-3 ${showFeaturedOnly ? "fill-current" : ""}`} />
          Featured
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Category Scroll */}
        <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={`cat-${category}`}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                selectedCategory === category
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border/40 bg-surface-card/40 text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Status Scroll */}
        <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {STATUSES.map((status) => (
            <button
              key={`stat-${status}`}
              onClick={() => setSelectedStatus(status)}
              className={`whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                selectedStatus === status
                  ? "border-cyber-emerald/40 bg-cyber-emerald/10 text-cyber-emerald"
                  : "border-border/40 bg-surface-card/40 text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              }`}
              aria-pressed={selectedStatus === status}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
