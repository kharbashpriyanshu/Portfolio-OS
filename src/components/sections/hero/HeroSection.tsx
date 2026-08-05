import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { HeroBackground } from "./HeroBackground";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Shield, Code, Terminal as TerminalIcon } from "lucide-react";

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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 lg:py-0">
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
                <Shield className="w-4 h-4" />
                <span>Hi, I'm</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground"
            >
              Priyanshu Kharbash
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 font-mono text-sm md:text-base text-foreground-muted"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyber-blue" />
                <span>Cybersecurity Engineering Student</span>
              </div>
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-cyber-amber" />
                <span>Security Research Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyber-emerald" />
                <span>Full Stack Developer</span>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground-subtle max-w-lg leading-relaxed"
          >
            Building secure, scalable, and beautifully designed digital experiences. Passionate
            about bridging the gap between offensive security research and robust engineering
            principles.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" variant="cyber" className="group">
              <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="group">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
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
