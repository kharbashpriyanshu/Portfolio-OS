import React from "react";
import { ProjectData } from "./types";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectData;
  isActive: boolean;
  onClick: () => void;
}

export const ProjectCard = React.memo(function ProjectCard({
  project,
  isActive,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      layout="position"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative flex w-full flex-col gap-2 rounded-xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isActive
          ? "border-primary/50 bg-primary/10 shadow-[0_0_15px_rgba(0,221,255,0.1)]"
          : "border-border/50 bg-surface-card/30 hover:border-primary/30 hover:bg-surface-card/60"
      }`}
      aria-pressed={isActive}
    >
      {/* Active Indicator Line */}
      {isActive && (
        <motion.div
          layoutId="active-project-indicator"
          className="absolute -left-px bottom-3 top-3 w-[3px] rounded-r-full bg-primary"
        />
      )}

      <div className="flex w-full items-start justify-between gap-2">
        <h3
          className={`font-heading text-base font-bold transition-colors ${
            isActive ? "text-foreground" : "text-foreground-subtle group-hover:text-primary"
          }`}
        >
          {project.title}
        </h3>

        <div className="flex items-center gap-1.5 shrink-0">
          {project.featured && (
            <Star
              className={`h-3.5 w-3.5 ${isActive ? "fill-cyber-amber text-cyber-amber" : "fill-muted-foreground text-muted-foreground group-hover:fill-cyber-amber group-hover:text-cyber-amber"}`}
            />
          )}
          <div
            className={`transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100 text-primary" : "-translate-x-2 opacity-0 text-muted-foreground group-hover:translate-x-0 group-hover:opacity-100"}`}
          >
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground line-clamp-2">{project.tagline}</p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded bg-surface-elevated px-1.5 py-0.5 text-[10px] font-medium text-foreground-muted">
          {project.category}
        </span>
        <span
          className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
            project.status === "Completed"
              ? "bg-cyber-emerald/10 text-cyber-emerald"
              : project.status === "In Progress"
                ? "bg-cyber-blue/10 text-cyber-blue"
                : "bg-muted/10 text-muted-foreground"
          }`}
        >
          {project.status}
        </span>
      </div>
    </motion.button>
  );
});
