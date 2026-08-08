import React from "react";
import { motion } from "framer-motion";
import { MISSION_CONFIG } from "./mission-config";
import {
  Terminal,
  Activity,
  Code,
  Shield,
  BrainCircuit,
  Target,
  Server,
  ShieldCheck,
  Github,
  GraduationCap,
} from "lucide-react";
import { PROJECTS_DATA } from "@/components/sections/projects/projects-config";
import { JOURNEY_DATA } from "@/components/sections/journey/journey-config";
import { SKILLS_CATEGORIES } from "@/components/sections/skills/skills-config";
import { CERTIFICATIONS_DATA } from "@/components/sections/certifications/certifications-config";

export function MissionDashboard() {
  const { dashboard } = MISSION_CONFIG;

  // Calculate dynamic metrics
  const totalProjects = PROJECTS_DATA.length;
  const totalInternships = JOURNEY_DATA.filter((item) => item.type === "Internship").length;
  const totalTechnologies = SKILLS_CATEGORIES.reduce(
    (acc, category) => acc + category.technologies.length,
    0
  );
  const totalGithubRepos = PROJECTS_DATA.filter((project) => project.github).length;
  const totalCertifications = CERTIFICATIONS_DATA.length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: 20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card relative h-full w-full overflow-hidden rounded-3xl p-1"
    >
      {/* Glow effects */}
      <div className="absolute -left-1/2 -top-1/2 h-full w-full animate-pulse-glow rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-cyber-emerald/10 blur-[100px]" />

      <div className="glass-panel relative flex h-full flex-col rounded-2xl p-6 sm:p-8">
        {/* Dashboard Header */}
        <div className="mb-8 flex items-center justify-between border-b border-border/50 pb-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
              CURRENT OPERATIONS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs text-success uppercase">{dashboard.status}</span>
          </div>
        </div>

        {/* Current Operations Grid */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-3 h-3" /> CURRENT INTERNSHIP
            </span>
            <span className="text-sm font-semibold text-foreground">
              {dashboard.currentInternship.role}{" "}
              <span className="text-primary">@ {dashboard.currentInternship.company}</span>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Code className="w-3 h-3" /> CURRENT PROJECT
            </span>
            <span className="text-sm font-semibold text-foreground">
              {dashboard.currentProject.name}{" "}
              <span className="text-foreground-subtle text-xs">
                — {dashboard.currentProject.description}
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <BrainCircuit className="w-3 h-3" /> CURRENT LEARNING
            </span>
            <span className="text-xs font-medium text-foreground-subtle leading-relaxed">
              {dashboard.currentLearning.join(" • ")}
            </span>
          </div>

          <div className="flex flex-col gap-1 mt-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest flex items-center gap-2 mb-1">
              <Target className="w-3 h-3" /> CURRENT OBJECTIVE
            </span>
            <span className="text-xs text-foreground-muted leading-relaxed">
              {dashboard.currentObjective}
            </span>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-2 gap-3 mt-auto border-t border-border/50 pt-6">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/30 border border-border/40">
            <Server className="w-4 h-4 text-cyber-blue mb-1" />
            <span className="font-heading text-lg font-bold text-foreground">{totalProjects}</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/30 border border-border/40">
            <ShieldCheck className="w-4 h-4 text-cyber-emerald mb-1" />
            <span className="font-heading text-lg font-bold text-foreground">
              {totalInternships}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              Internships
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/30 border border-border/40">
            <Activity className="w-4 h-4 text-cyber-amber mb-1" />
            <span className="font-heading text-lg font-bold text-foreground">
              {totalTechnologies}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              Technologies
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface/30 border border-border/40">
            <Github className="w-4 h-4 text-foreground-muted mb-1" />
            <span className="font-heading text-lg font-bold text-foreground">
              {totalGithubRepos}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              Repositories
            </span>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center p-3 rounded-xl bg-surface/30 border border-border/40">
            <GraduationCap className="w-4 h-4 text-primary mb-1" />
            <span className="font-heading text-lg font-bold text-foreground">
              {totalCertifications}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              Certifications
            </span>
          </div>
        </div>

        {/* Footer detail */}
        <div className="mt-6">
          <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/40 bg-surface/20 py-2 font-mono text-[10px] text-muted-foreground">
            <span>LAST_UPDATED: {dashboard.lastUpdated}</span>
            <span>|</span>
            <span>STATUS: NOMINAL</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
