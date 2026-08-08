import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { CERTIFICATIONS_CONFIG } from "./certifications-config";
import { useCertifications } from "./useCertifications";
import { CertificationFilters } from "./CertificationFilters";
import { CertificationGrid } from "./CertificationGrid";

export function CertificationsHub() {
  const { activeFilter, setActiveFilter, filteredItems } = useCertifications();

  return (
    <section
      id="certifications"
      role="region"
      aria-labelledby="certifications-heading"
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
            {CERTIFICATIONS_CONFIG.label}
          </div>

          <h2
            id="certifications-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {CERTIFICATIONS_CONFIG.heading}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {CERTIFICATIONS_CONFIG.introduction}
          </p>
        </motion.div>

        {/* Layout Group for animated reflows */}
        <LayoutGroup>
          <CertificationFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <CertificationGrid items={filteredItems} />
        </LayoutGroup>
      </div>
    </section>
  );
}
