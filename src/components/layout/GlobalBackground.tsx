import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

export function GlobalBackground() {
  const { activeSection } = useScroll();

  // Opacity mapping for section transitions
  const opacityMap: Record<string, number> = {
    home: 0.8,
    about: 0.6,
    skills: 0.3,
    projects: 0.3,
    experience: 0.15,
    certifications: 0.15,
    contact: 0.05,
  };

  const imageOpacity = opacityMap[activeSection] ?? 0.05;

  return (
    <div className="fixed inset-0 z-[-1] bg-background overflow-hidden pointer-events-none">
      {/* Layer 1: SOC Background Image with opacity transition */}
      <motion.div
        className="absolute inset-0 bg-[url('/soc_background.png')] bg-cover bg-[position:20%_center] lg:bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageOpacity }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Layer 2: Theme-Aware Overlay */}
      {/* Dark Mode Overlay */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-[#060913] via-[#060913]/90 to-transparent" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-transparent via-[#060913]/40 to-[#060913]" />

      {/* Light Mode Overlay (Soft white + subtle cool blue tint) */}
      <div className="absolute inset-0 block dark:hidden bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
      <div className="absolute inset-0 block dark:hidden bg-gradient-to-b from-white/30 via-white/60 to-white/95" />
      <div className="absolute inset-0 block dark:hidden bg-cyber-blue/5 mix-blend-multiply" />

      {/* Layer 3: Subtle Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)] opacity-40 dark:opacity-40" />

      {/* Ambient Cyan Light Movement (subtle atmospheric glow) */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyber-blue/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
      />

      {/* Secondary Ambient Glow for Server Racks */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyber-emerald/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />

      {/* Noise Texture for Cinematic Feel */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
