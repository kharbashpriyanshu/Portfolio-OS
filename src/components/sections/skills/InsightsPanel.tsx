import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillCategory, Technology, SkillLevel } from "./skills-config";
import { Terminal, Lightbulb, Rocket, FolderGit2 } from "lucide-react";

interface InsightsPanelProps {
  category: SkillCategory;
}

const LEVEL_COLORS: Record<SkillLevel, string> = {
  "Core Skills": "border-cyber-emerald/40 bg-cyber-emerald/10 text-cyber-emerald",
  "Hands-on Experience": "border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue",
  "Working Knowledge": "border-cyber-amber/40 bg-cyber-amber/10 text-cyber-amber",
  "Currently Learning": "border-muted/40 bg-muted/10 text-muted-foreground",
};

const TechnologyBadge = React.memo(({ tech }: { tech: Technology }) => (
  <div className={`flex flex-col gap-1.5 rounded-lg border p-3 ${LEVEL_COLORS[tech.level]}`}>
    <span className="font-heading text-sm font-bold">{tech.name}</span>
    <span className="font-mono text-[10px] uppercase tracking-wider opacity-80">{tech.level}</span>
  </div>
));

export const InsightsPanel = React.memo(function InsightsPanel({ category }: InsightsPanelProps) {
  return (
    <div className="glass-card relative h-full w-full overflow-hidden rounded-3xl p-1">
      <div className="absolute -left-1/2 -top-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="glass-panel relative flex h-full flex-col rounded-2xl p-6 sm:p-8 overflow-y-auto custom-scrollbar">
        {/* Panel Header */}
        <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
              INTEL.PANEL
            </span>
          </div>
          <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] text-primary">
            ID: {category.id.toUpperCase()}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Description Section */}
            <section>
              <h4 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                <Lightbulb className="h-4 w-4 text-primary" />
                Overview
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                {category.description}
              </p>
            </section>

            {/* Technologies Grid */}
            <section>
              <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
                // ACTIVE TECHNOLOGIES
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-2">
                {category.technologies.map((tech) => (
                  <TechnologyBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </section>

            {/* Practical Usage */}
            <section className="rounded-xl border border-border/40 bg-surface/30 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                <Rocket className="h-4 w-4 text-cyber-emerald" />
                Practical Implementation
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground text-justify">
                {category.practicalUsage}
              </p>
            </section>

            {/* Representative Projects */}
            <section>
              <h4 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                <FolderGit2 className="h-4 w-4 text-cyber-blue" />
                Representative Projects
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.representativeProjects.map((project) => (
                  <span
                    key={project}
                    className="rounded-md border border-border/60 bg-surface-elevated px-2.5 py-1 text-xs text-foreground-subtle"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
