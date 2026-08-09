import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { JOURNEY_CONFIG } from "./journey-config";
import { useJourney } from "./useJourney";
import { JourneyFilters } from "./JourneyFilters";
import { JourneyTimeline } from "./JourneyTimeline";

export function ProfessionalJourney() {
  const { activeFilter, setActiveFilter, filteredMilestones } = useJourney();

  return (
    <section
      id="journey"
      role="region"
      aria-labelledby="journey-heading"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {JOURNEY_CONFIG.label}
          </div>

          <h2
            id="journey-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {JOURNEY_CONFIG.heading}
          </h2>

          {JOURNEY_CONFIG.subtitle && (
            <p className="mb-6 max-w-2xl text-lg font-medium text-primary">
              {JOURNEY_CONFIG.subtitle}
            </p>
          )}

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {JOURNEY_CONFIG.introduction}
          </p>
        </motion.div>

        {/* Layout Group for animated reflows */}
        <LayoutGroup>
          <JourneyFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <JourneyTimeline milestones={filteredMilestones} />
        </LayoutGroup>
      </div>
    </section>
  );
}
