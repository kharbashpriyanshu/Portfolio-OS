import * as React from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/config/projects";
import { CaseStudyCard } from "./components";

/**
 * Featured Engineering Case Studies section (#projects).
 * Centerpiece of Portfolio OS v1.0, presenting LogSentry, PortIntel, and VisionShield X
 * like flagship enterprise security product presentations.
 */
export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      {/* Background Architectural Glow & Matrix Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/30 to-background"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cyber-grid opacity-15"
        aria-hidden="true"
      />

      <div className="container-cyber mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col space-y-4 text-center sm:mb-24"
        >
          <div className="mx-auto flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              03 // Featured Engineering Case Studies
            </span>
          </div>
          <h2
            id="projects-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Featured Engineering Case Studies
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Production-ready security platforms, VAPT reconnaissance tools, and AI incident response
            engines—built to solve real operational bottlenecks.
          </p>
        </motion.div>

        {/* Alternating Flagship Case Studies List */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {FEATURED_PROJECTS.map((project, idx) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={idx}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
