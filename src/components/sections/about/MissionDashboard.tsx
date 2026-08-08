import React from "react";
import { motion } from "framer-motion";
import { MISSION_CONFIG } from "./mission-config";
import { Terminal, Activity } from "lucide-react";

export function MissionDashboard() {
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
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
              SYS.METRICS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs text-success">ONLINE</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="flex flex-col gap-3">
          {MISSION_CONFIG.currentOperations.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-border/30 bg-surface/30 p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="flex items-center gap-3 mb-1 sm:mb-0">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-surface-elevated text-muted-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                  <Activity className="h-3 w-3" />
                </div>
                <span className="text-xs font-medium text-foreground-subtle uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
              <span className="font-mono text-sm font-semibold text-primary/90 sm:text-right">
                {metric.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer detail */}
        <div className="mt-auto pt-8">
          <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/40 bg-surface/20 py-2 font-mono text-[10px] text-muted-foreground">
            <span>LAST_UPDATED: {new Date().toISOString().split("T")[0]}</span>
            <span>|</span>
            <span>STATUS: NOMINAL</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
