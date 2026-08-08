import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { HeroBackground } from "./HeroBackground";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, CheckCircle2 } from "lucide-react";
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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0">
      <HeroBackground />

      <div className="container relative z-10 px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side: Intro & Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle text-sm text-cyber-emerald font-mono">
                <span>
                  🟢 Open to Internships • Security Engineering • SOC • Application Security
                </span>
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <span className="font-mono text-xl font-semibold text-primary">
                {PROFILE_CONFIG.name}
              </span>
              <span className="font-mono text-sm text-cyber-blue">
                Cybersecurity Engineering Student
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground"
            >
              Building Practical Cybersecurity Solutions Through <br className="hidden md:block" />
              <span className="text-primary">Security Engineering</span>,{" "}
              <br className="hidden md:block" />
              <span className="text-cyber-emerald">Detection Engineering</span>,{" "}
              <br className="hidden md:block" />
              and Secure Software Development.
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 font-mono text-sm md:text-base text-foreground-muted pt-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-blue" />
                <span>Security Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-amber" />
                <span>Detection Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-emerald" />
                <span>Network Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Secure Backend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>AI-assisted Security</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 text-lg text-foreground-subtle max-w-lg leading-relaxed text-justify"
          >
            <p>
              I am a B.Tech Computer Science (Cyber Security) student at Rashtriya Raksha University
              focused on building practical cybersecurity solutions through hands-on engineering.
            </p>
            <p>
              My work combines secure software development, detection engineering, network security,
              backend development, and AI-assisted security tools.
            </p>
            <p>
              Rather than limiting my learning to theory, I build real systems that strengthen my
              understanding of modern cybersecurity while continuously improving my engineering
              skills through projects, internships, certifications, and practical experimentation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" variant="cyber" className="group" asChild>
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
            <Button size="lg" variant="outline" className="group" asChild>
              <a href={PROFILE_CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </a>
            </Button>
            <div className="flex items-center gap-4">
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12" asChild>
                <a
                  href={PROFILE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-12 h-12" asChild>
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
          className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto perspective-1000"
        >
          <div className="transform-gpu transition-transform hover:scale-[1.02] duration-500">
            <Terminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
