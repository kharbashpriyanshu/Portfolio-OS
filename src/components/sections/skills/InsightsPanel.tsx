import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillCategory } from "./skills-config";
import { Terminal, Lightbulb } from "lucide-react";

interface InsightsPanelProps {
  category: SkillCategory;
}

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
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col justify-center rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 hover:border-primary/60 hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-heading text-sm font-bold text-foreground-subtle">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
