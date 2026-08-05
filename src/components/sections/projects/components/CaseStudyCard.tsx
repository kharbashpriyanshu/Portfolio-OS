import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Wrench, AlertTriangle, Cpu } from "lucide-react";
import type { ProjectCaseStudy } from "@/config/projects";
import { Badge } from "@/components/ui/badge";
import { TechnologyBadge } from "./TechnologyBadge";
import { FeatureList } from "./FeatureList";
import { ArchitectureHighlights } from "./ArchitectureHighlights";
import { ProjectActions } from "./ProjectActions";
import { RoadmapCard } from "./RoadmapCard";
import { ChallengeCard } from "./ChallengeCard";
import { AnimatedPreviewArea } from "./AnimatedPreviewArea";

export interface CaseStudyCardProps {
  project: ProjectCaseStudy;
  index: number;
  isReversed?: boolean;
}

/**
 * World-class CaseStudyCard component engineered like a flagship product launch.
 * Alternates desktop presentation layout while remaining fluidly single-column on mobile.
 */
export function CaseStudyCard({ project, index, isReversed = false }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-cyber group relative overflow-hidden rounded-3xl border border-border/80 bg-surface-card/95 p-6 shadow-2xl transition-all duration-500 hover:border-primary/50 sm:p-8 lg:p-12"
    >
      {/* Subtle Top Accent Bar */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-success to-primary opacity-75"
        aria-hidden="true"
      />

      {/* Flagship Header: Category & Number */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
        <div className="flex items-center gap-3">
          <Badge
            variant={
              project.category === "AI Security Platform"
                ? "emerald"
                : project.category === "Network Intelligence Framework"
                  ? "cyan"
                  : "neutral"
            }
            className="px-3 py-1 font-mono text-2xs uppercase tracking-wider"
          >
            {project.category}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            // CASE STUDY 0{index + 1}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-2xs text-primary">
          <Shield className="h-3.5 w-3.5" aria-hidden="true" />
          <span>PRODUCTION ARCHITECTURE</span>
        </div>
      </div>

      {/* Main Alternating Flagship Layout Grid */}
      <div
        className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Left/Primary Side: Narrative & Deep Technical Architecture */}
        <div
          className={`flex flex-col space-y-8 lg:col-span-7 ${isReversed ? "lg:col-start-6" : ""}`}
        >
          {/* Project Title & Summary */}
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {project.name}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-primary sm:text-base">
              {project.summary}
            </p>
          </div>

          {/* Problem Statement Box */}
          <div className="space-y-2 rounded-xl border border-warning/30 bg-warning/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-warning">
              <Target className="h-4 w-4 text-warning" aria-hidden="true" />
              <span>The Problem</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {project.problemStatement}
            </p>
          </div>

          {/* Why Existing Solutions Were Insufficient Box */}
          <div className="space-y-2 rounded-xl border border-destructive/25 bg-destructive/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-destructive">
              <AlertTriangle className="h-4 w-4 text-destructive" aria-hidden="true" />
              <span>Why Existing Solutions Failed</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {project.whyInsufficient}
            </p>
          </div>

          {/* Engineering Solution Box */}
          <div className="space-y-2 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
              <Wrench className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>My Engineering Approach</span>
            </div>
            <p className="text-xs leading-relaxed text-foreground-muted sm:text-sm">
              {project.engineeringSolution}
            </p>
          </div>

          {/* Architecture Highlights */}
          <ArchitectureHighlights highlights={project.architectureHighlights} />

          {/* Key Engineering Decisions Box */}
          <div className="space-y-2.5 rounded-xl border border-border/80 bg-surface/60 p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                // KEY ENGINEERING DECISIONS
              </h4>
            </div>
            <ul role="list" className="space-y-2">
              {project.engineeringDecisions.map((decision, idx) => (
                <li
                  key={`dec-${idx}`}
                  className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted"
                >
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges Row */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground-muted">
              // TECH STACK &amp; CORE DEPENDENCIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <FeatureList features={project.keyFeatures} />

          {/* Challenges & Lessons Learned Grid */}
          <ChallengeCard
            challenges={project.engineeringChallenges}
            lessonsLearned={project.lessonsLearned}
          />

          {/* Future Roadmap */}
          <RoadmapCard roadmap={project.futureRoadmap} />

          {/* CTA Buttons (Case Study, Demo, GitHub) */}
          <ProjectActions
            githubUrl={project.githubUrl}
            caseStudyUrl={project.caseStudyUrl}
            demoUrl={project.demoUrl}
            projectName={project.name}
          />
        </div>

        {/* Right/Secondary Side: Animated Preview Area */}
        <div
          className={`flex flex-col justify-start lg:col-span-5 ${
            isReversed ? "lg:col-start-1" : ""
          }`}
        >
          <div className="sticky top-24">
            <AnimatedPreviewArea schematic={project.previewSchematic} projectName={project.name} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default CaseStudyCard;
