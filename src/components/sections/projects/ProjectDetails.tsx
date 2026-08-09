import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "./types";
import { ArchitecturePanel } from "./ArchitecturePanel";
import {
  Github,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ShieldAlert,
  Settings,
  Lightbulb,
  Target,
  Layers,
  TestTube,
  AlertTriangle,
  Rocket,
  FileText,
  Image as ImageIcon,
  Network,
} from "lucide-react";

interface ProjectDetailsProps {
  project: ProjectData;
}

export const ProjectDetails = React.memo(function ProjectDetails({ project }: ProjectDetailsProps) {
  if (!project) return null;

  return (
    <div className="glass-card relative h-full w-full overflow-hidden rounded-3xl p-1">
      <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="glass-panel relative flex h-full flex-col rounded-2xl p-6 sm:p-8 overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <header className="flex flex-col gap-4 border-b border-border/50 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      project.status === "Completed"
                        ? "bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20"
                        : project.status === "In Progress"
                          ? "bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20"
                          : "bg-muted/10 text-muted-foreground border border-muted/20"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="rounded-full bg-surface-elevated px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground-muted border border-border/50">
                    {project.category}
                  </span>
                </div>
                {project.timeline?.start && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.timeline.start}{" "}
                    {project.timeline.end ? `— ${project.timeline.end}` : "— Present"}
                  </div>
                )}
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Github className="h-3.5 w-3.5" /> Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
                {project.architectureDiagram && (
                  <a
                    href={project.architectureDiagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Network className="h-3.5 w-3.5" /> Architecture
                  </a>
                )}
                {project.screenshots && project.screenshots.length > 0 && (
                  <a
                    href={project.screenshots[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ImageIcon className="h-3.5 w-3.5" /> Screenshots
                  </a>
                )}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FileText className="h-3.5 w-3.5" /> Documentation
                  </a>
                )}
              </div>
            </header>

            {/* Overview & Problem Statement */}
            <section className="flex flex-col gap-6">
              <div>
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  // Overview
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify whitespace-pre-wrap">
                  {project.overview}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  // Problem Statement
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify whitespace-pre-wrap">
                  {project.problem}
                </p>
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
                // Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-foreground-subtle transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Layout Grid for Features, Engineering, Security, Lessons */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-6">
                {/* Objectives */}
                {project.objectives && project.objectives.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Target className="h-4 w-4 text-primary" />
                      Objectives
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.objectives.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-cyber-emerald" />
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.features.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-emerald/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Core Modules */}
                {project.coreModules && project.coreModules.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Layers className="h-4 w-4 text-cyber-blue" />
                      Core Modules
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {project.coreModules.map((item, idx) => (
                        <li key={idx} className="flex flex-col gap-1 text-xs text-muted-foreground">
                          <span className="font-bold text-foreground-subtle">{item.name}</span>
                          <span className="leading-relaxed">{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Testing */}
                {project.testing && project.testing.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <TestTube className="h-4 w-4 text-cyber-emerald" />
                      Testing
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.testing.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-emerald/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Security Considerations */}
                {project.securityConsiderations && project.securityConsiderations.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <ShieldAlert className="h-4 w-4 text-cyber-amber" />
                      Security Considerations
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.securityConsiderations.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-amber/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <div className="flex flex-col gap-6">
                {/* Engineering Decisions */}
                {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Settings className="h-4 w-4 text-cyber-blue" />
                      Engineering Decisions
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.engineeringDecisions.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-blue/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Lessons Learned */}
                {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Lessons Learned
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.lessonsLearned.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <AlertTriangle className="h-4 w-4 text-cyber-amber" />
                      Challenges
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.challenges.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-amber/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Future Improvements */}
                {project.futureImprovements && project.futureImprovements.length > 0 && (
                  <section className="rounded-xl border border-border/40 bg-surface/30 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Rocket className="h-4 w-4 text-cyber-blue" />
                      Future Improvements
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.futureImprovements.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-blue/70" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {/* Architecture Panel */}
            {project.architecture && project.architecture.length > 0 && (
              <ArchitecturePanel
                layers={project.architecture}
                description={project.architectureDescription}
              />
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <section className="mt-4 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col gap-1 border-l-2 border-primary/40 pl-3"
                    >
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {metric.label}
                      </span>
                      <span className="font-heading text-lg font-bold text-foreground">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
