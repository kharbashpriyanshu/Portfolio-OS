import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { PROFILE_CONFIG } from "@/config/profile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-[160px] pb-20 lg:pt-[170px] lg:pb-12"
    >
      <div className="container relative z-10 px-4 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-8 items-center">
        {/* Left Side: Intro & Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:col-span-6"
        >
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants} className="inline-flex max-w-full">
              <span className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-2xl md:rounded-full bg-surface-elevated border border-border-subtle text-xs md:text-sm text-cyber-emerald font-mono shadow-sm">
                <span>🟢 Open to Internships • Cybersecurity • SOC • Security Engineering</span>
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-1 mb-2">
              <span className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {PROFILE_CONFIG.name}
              </span>
              <span className="font-mono text-sm md:text-base font-medium tracking-wide text-cyber-blue uppercase">
                Cybersecurity Engineering Student
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[52px] font-extrabold font-heading tracking-tight text-foreground leading-[1.12] max-w-[700px]"
            >
              Building Practical Cybersecurity Solutions.
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-[20px] font-medium text-foreground-muted leading-relaxed max-w-[680px] mt-1"
            >
              Exploring <span className="text-cyber-amber/90">Offensive Security</span>,{" "}
              <span className="text-cyber-emerald">Blue Team Operations</span>,{" "}
              <span className="text-cyber-amber/90">Threat Detection</span>,{" "}
              <span className="text-cyber-blue">Network Security</span>, and{" "}
              <span className="text-primary/90">Secure Application Development</span>.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 font-mono text-[13px] md:text-[14px] mt-2"
            >
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-cyber-amber/90">
                Ethical Hacking
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-cyber-emerald">
                Blue Team
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-cyber-emerald">
                SOC
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-cyber-amber/90">
                Threat Detection
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-cyber-blue">
                Network Security
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle text-primary/90">
                AppSec
              </span>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-2">
            <p className="text-[17px] text-foreground-subtle max-w-[660px] leading-[1.7] text-left">
              Cybersecurity Engineering student focused on building practical security tools,
              detection systems, network security utilities, and secure software. I learn by
              building, testing, breaking, and improving real systems.
            </p>
            <div className="font-mono text-[13px] text-foreground-muted/60 tracking-wide">
              Offensive Security • Defensive Security • Security Automation • Python
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-4">
            <Button
              size="lg"
              variant="cyber"
              className="group h-12 px-8 text-sm font-semibold tracking-wide"
              asChild
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Engineering Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {PROFILE_CONFIG.resumeUrl ? (
              <Button
                size="lg"
                variant="outline"
                className="group h-12 px-8 text-sm font-medium border-border/60 hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300"
                asChild
              >
                <a href={PROFILE_CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="group h-12 px-8 text-sm font-medium border-border/60 opacity-50 cursor-not-allowed"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume Unavailable
              </Button>
            )}
            <div className="flex items-center gap-4 ml-2">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-12 h-12 border-border/60 hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 hover:-translate-y-1 shadow-sm"
                asChild
              >
                <a
                  href={PROFILE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-12 h-12 border-border/60 hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 hover:-translate-y-1 shadow-sm"
                asChild
              >
                <a
                  href={PROFILE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-[600px] mx-auto lg:col-span-5 lg:ml-auto perspective-1200"
        >
          <div className="transform-gpu transition-transform hover:scale-[1.02] duration-500">
            <Terminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
