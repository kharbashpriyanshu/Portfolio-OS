import * as React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Download, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { APP_OWNER } from "@/constants";
import { SOCIAL_LINKS } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveTerminal } from "@/components/sections/hero/InteractiveTerminal";

/**
 * World-class Cyber Security Engineer Hero HUD Section.
 * Engineered for clean, executive-level presentation with authentic credentials,
 * interactive terminal verification, and zero-layout-shift GPU animations.
 */
export function SocHeroHud() {
  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle Background Matrix Scan Grid (CSS-only, zero DOM bloat) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cyber-grid opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background"
        aria-hidden="true"
      />

      <div className="container-cyber mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Professional Profile & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-6 lg:col-span-6"
          >
            {/* Status Badge & Authentic Titles */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="cyan" className="gap-1.5 px-3 py-1 text-xs">
                <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Cyber Security Engineer</span>
              </Badge>
              <Badge variant="emerald" className="gap-1 px-3 py-1 text-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" aria-hidden="true" />
                <span>AI Security Developer</span>
              </Badge>
              <Badge variant="neutral" className="px-3 py-1 text-xs font-mono">
                Digital Forensics Enthusiast
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1
                id="hero-title"
                className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                {APP_OWNER}
              </h1>
              <p className="text-lg font-semibold text-primary sm:text-xl font-mono">
                Building Secure Software That Solves Real Problems.
              </p>
            </div>

            {/* Conversational & Human Introduction */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cyber Security Engineer and AI developer designing automated defense tools, VAPT
              intelligence platforms, and reliable software that protects data by design.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="gap-2 shadow-cyber-cyan transition-transform hover:translate-y-[-1px]"
              >
                <a href="#projects">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2 border-primary/40 bg-surface/50 text-foreground hover:border-primary hover:bg-surface-elevated"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>

            {/* Social Buttons & Profile Card Placeholder */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-6">
              {/* GitHub & LinkedIn Action Links */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="gap-2 border border-border/80 bg-surface/40 hover:border-primary/50"
                >
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-4 w-4 text-foreground" aria-hidden="true" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="gap-2 border border-border/80 bg-surface/40 hover:border-primary/50"
                >
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4 text-foreground" aria-hidden="true" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </a>
                </Button>
              </div>

              {/* Professional Profile Image Placeholder */}
              <div
                role="figure"
                aria-label="Professional avatar placeholder for Priyanshu Kharbash"
                className="flex items-center gap-3 rounded-lg border border-border/80 bg-surface-elevated/70 px-3.5 py-2 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary">
                  PK
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">Priyanshu Kharbash</span>
                  <span className="font-mono text-2xs text-muted-foreground">ID: SOC-ENG-01</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Portrait Area with Floating Glass Terminal Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Subtle Ambient Lighting Backdrop */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/15 via-blue-500/10 to-success/15 opacity-70 blur-2xl"
                aria-hidden="true"
              />

              {/* Executive Portrait Frame Backdrop */}
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface-elevated/40 p-4 sm:p-6 shadow-2xl">
                {/* Frame Header: Active Status & Clearance */}
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3 text-2xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    <span>VERIFIED IDENTITY // PK-SOC</span>
                  </span>
                  <span>SECURITY CLEARANCE: ACTIVE</span>
                </div>

                {/* Portrait Display Area */}
                <div className="relative mb-6 flex items-center justify-between rounded-xl border border-primary/20 bg-gradient-to-r from-surface-card to-surface-elevated/80 p-5 shadow-inner">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/60 bg-primary/15 font-heading text-2xl font-bold text-primary shadow-[0_0_20px_rgba(0,221,255,0.2)]">
                      PK
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        Priyanshu Kharbash
                      </h3>
                      <p className="font-mono text-xs text-primary">Cyber Security Engineer</p>
                      <p className="text-2xs text-muted-foreground mt-0.5">
                        Focus: Zero-Trust &amp; AI Security
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-right font-mono text-2xs text-muted-foreground">
                    <span>SYS: ONLINE</span>
                    <span className="text-success">VAPT READY</span>
                  </div>
                </div>

                {/* Floating Glass Terminal Overlay */}
                <div className="relative z-10 shadow-2xl rounded-xl">
                  <InteractiveTerminal />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { SocHeroHud as SOC_HERO_HUD };
export default SocHeroHud;
