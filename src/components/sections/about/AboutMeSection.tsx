import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Cpu,
  FileText,
  Github,
  Linkedin,
  Terminal as TerminalIcon,
  CheckCircle2,
} from "lucide-react";
import { ABOUT_CONFIG } from "@/config/about";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * World-class About Me section designed for technical recruiters and security architects.
 * Employs clean engineering storytelling without generic clichés ("I am passionate...").
 */
export function AboutMeSection() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Background Subtle Gradient Zone */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background"
        aria-hidden="true"
      />

      <div className="container-cyber mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col space-y-3 sm:mb-16"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              01 // Professional Profile
            </span>
          </div>
          <h2
            id="about-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {ABOUT_CONFIG.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Professional Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-6 lg:col-span-5"
          >
            <div className="card-cyber group relative overflow-hidden rounded-2xl border border-border/80 bg-surface-card/90 p-6 shadow-2xl transition-all duration-300 hover:border-primary/50 sm:p-8">
              {/* Decorative Corner Matrix Status */}
              <div className="mb-6 flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <TerminalIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>ID: SOC-ENG-01 // PK</span>
                </div>
                <Badge variant="emerald" className="gap-1 px-2.5 py-0.5 text-2xs">
                  <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                  <span>ACTIVE CLEARANCE</span>
                </Badge>
              </div>

              {/* High-Resolution Avatar Placeholder Card */}
              <div className="relative mb-6 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-b from-primary/15 to-surface-elevated/80 py-12 text-center shadow-inner">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/80 bg-primary/20 font-heading text-3xl font-extrabold tracking-tight text-primary shadow-[0_0_30px_rgba(0,221,255,0.25)] transition-transform duration-300 group-hover:scale-105">
                  PK
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                  Priyanshu Kharbash
                </h3>
                <p className="font-mono text-xs text-primary">Cyber Security Engineer</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  <span>Windows &amp; Linux Security Infrastructure</span>
                </div>
              </div>

              {/* Availability Box */}
              <div className="rounded-lg border border-success/30 bg-success/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-success">
                    {ABOUT_CONFIG.availability.label}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {ABOUT_CONFIG.availability.detail}
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                <Button variant="primary" size="sm" asChild className="flex-1">
                  <a href={ABOUT_CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    <span>Resume PDF</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={ABOUT_CONFIG.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={ABOUT_CONFIG.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Biography & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8 lg:col-span-7"
          >
            {/* Headline & Subtitle */}
            <div className="space-y-3">
              <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {ABOUT_CONFIG.subHeadline}
              </h3>
            </div>

            {/* Recruiter-Focused Engineering Copy (30% Shorter) */}
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {ABOUT_CONFIG.biography.map((paragraph, idx) => (
                <p key={`bio-${idx}`}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts Grid */}
            <div>
              <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-foreground-muted">
                // TECHNICAL SPECIALIZATION SNAPSHOT
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ABOUT_CONFIG.quickFacts.map((fact) => (
                  <div
                    key={fact.id}
                    className={`rounded-xl border p-4 transition-colors ${
                      fact.highlight
                        ? "border-primary/40 bg-primary/5"
                        : "border-border/80 bg-surface/50"
                    }`}
                  >
                    <span className="font-mono text-xs text-muted-foreground">{fact.label}</span>
                    <p className="mt-1 font-heading text-sm font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Philosophy Card */}
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                <h4 className="font-heading text-base font-bold text-foreground">
                  {ABOUT_CONFIG.engineeringPhilosophy.title}
                </h4>
              </div>
              <ul role="list" className="space-y-2.5">
                {ABOUT_CONFIG.engineeringPhilosophy.principles.map((principle, idx) => (
                  <li
                    key={`principle-${idx}`}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Academic Rigor */}
            <div className="rounded-xl border border-border/80 bg-surface-elevated/40 p-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                <h4 className="font-heading text-base font-bold text-foreground">
                  Academic Foundation &amp; Systems Rigor
                </h4>
              </div>
              {ABOUT_CONFIG.education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-foreground">{edu.institution}</p>
                    <span className="font-mono text-xs text-primary">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{edu.degree}</p>
                  <p className="font-mono text-xs text-foreground-muted">Focus: {edu.focus}</p>
                </div>
              ))}
            </div>

            {/* Current Engineering Focus Box */}
            <div className="rounded-xl border border-primary/30 bg-surface-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-5 w-5 text-primary" aria-hidden="true" />
                <h4 className="font-heading text-base font-bold text-foreground">
                  {ABOUT_CONFIG.currentFocus.title}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {ABOUT_CONFIG.currentFocus.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ABOUT_CONFIG.currentFocus.technologies.map((tech) => (
                  <Badge key={tech} variant="cyan" className="text-2xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
