import React from "react";
import { motion } from "framer-motion";
import { MISSION_CONFIG } from "./mission-config";
import { MissionCard } from "./MissionCard";
import { MissionDashboard } from "./MissionDashboard";

export function MissionControlSection() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="mission-control-heading"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {MISSION_CONFIG.label}
          </div>

          <h2
            id="mission-control-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {MISSION_CONFIG.heading}
          </h2>

          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {MISSION_CONFIG.introduction.map((paragraph, idx) => (
              <p key={`intro-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Side: Mission Cards (col-span 7) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {MISSION_CONFIG.cards.map((card, idx) => (
              <MissionCard key={card.id} card={card} index={idx} />
            ))}
          </div>

          {/* Right Side: Mission Dashboard (col-span 5) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 h-full min-h-[450px]">
              <MissionDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
