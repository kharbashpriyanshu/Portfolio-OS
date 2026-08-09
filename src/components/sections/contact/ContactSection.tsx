import React from "react";
import { motion } from "framer-motion";
import { CONTACT_CONFIG } from "./contact-config";
import { AvailabilityPanel } from "./AvailabilityPanel";
import { ContactCards } from "./ContactCards";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {CONTACT_CONFIG.label}
          </div>

          <h2
            id="contact-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {CONTACT_CONFIG.heading}
          </h2>

          {CONTACT_CONFIG.subtitle && (
            <p className="mb-6 max-w-3xl text-lg font-medium text-primary">
              {CONTACT_CONFIG.subtitle}
            </p>
          )}

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {CONTACT_CONFIG.introduction}
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Info & Cards */}
          <div className="flex flex-col gap-8">
            <AvailabilityPanel availability={CONTACT_CONFIG.availability} />
            <ContactCards platforms={CONTACT_CONFIG.platforms} />
          </div>

          {/* Right Column: Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
