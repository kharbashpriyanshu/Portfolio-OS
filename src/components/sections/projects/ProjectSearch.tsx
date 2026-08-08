import React from "react";
import { Search } from "lucide-react";

interface ProjectSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProjectSearch = React.memo(function ProjectSearch({
  searchQuery,
  setSearchQuery,
}: ProjectSearchProps) {
  return (
    <div className="relative mb-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <input
        type="text"
        className="block w-full rounded-xl border border-border/60 bg-surface-card/50 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary/50 focus:bg-surface-elevated focus:outline-none focus:ring-1 focus:ring-primary/50"
        placeholder="Search projects, tech, category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search projects"
      />
    </div>
  );
});
