import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JourneyMilestone } from "./types";
import { JourneyCard } from "./JourneyCard";

interface JourneyTimelineProps {
  milestones: JourneyMilestone[];
}

export const JourneyTimeline = React.memo(function JourneyTimeline({
  milestones,
}: JourneyTimelineProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10">
      {/* Central Timeline Line (Desktop) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "100%", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 hidden md:block"
      />

      {/* Mobile Timeline Line */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 md:hidden ml-px"
      />

      <div className="relative flex flex-col gap-12 md:gap-8 pl-6 md:pl-0">
        <AnimatePresence mode="popLayout">
          {milestones.length > 0 ? (
            milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <JourneyCard
                  key={milestone.id}
                  milestone={milestone}
                  isEven={isEven}
                  index={index}
                />
              );
            })
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-full flex-col items-center justify-center py-20 text-center opacity-70 md:col-span-2"
            >
              <div className="rounded-full border border-dashed border-border p-4 mb-4">
                <div className="h-8 w-8 rounded-full bg-surface-elevated" />
              </div>
              <p className="text-sm font-medium text-foreground-muted">
                No milestones found matching criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});
