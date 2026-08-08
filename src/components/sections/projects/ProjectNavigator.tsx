import React from "react";
import { ProjectData, ProjectCategory, ProjectStatus } from "./types";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";
import { AnimatePresence } from "framer-motion";

interface ProjectNavigatorProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ProjectCategory | "All";
  setSelectedCategory: (c: ProjectCategory | "All") => void;
  selectedStatus: ProjectStatus | "All";
  setSelectedStatus: (s: ProjectStatus | "All") => void;
  showFeaturedOnly: boolean;
  setShowFeaturedOnly: (f: boolean) => void;
  filteredProjects: ProjectData[];
  activeProjectId: string;
  setActiveProjectId: (id: string) => void;
}

export const ProjectNavigator = React.memo(function ProjectNavigator({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  showFeaturedOnly,
  setShowFeaturedOnly,
  filteredProjects,
  activeProjectId,
  setActiveProjectId,
}: ProjectNavigatorProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex flex-col gap-2">
        <h3 className="font-heading text-lg font-bold text-foreground">Project Catalog</h3>
        <p className="text-xs text-muted-foreground">
          Select a module to view architectural details.
        </p>
      </div>

      <ProjectSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ProjectFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        showFeaturedOnly={showFeaturedOnly}
        setShowFeaturedOnly={setShowFeaturedOnly}
      />

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="flex flex-col gap-3 pb-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={activeProjectId === project.id}
                  onClick={() => setActiveProjectId(project.id)}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center opacity-70">
                <p className="text-sm font-medium text-foreground-muted">
                  No modules found matching query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                    setShowFeaturedOnly(false);
                  }}
                  className="mt-3 text-xs text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});
