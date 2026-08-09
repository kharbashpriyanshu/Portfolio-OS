import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Activity, Code2, ArrowRight, ShieldCheck } from "lucide-react";
import type { PreviewSchematic } from "@/config/projects";

export interface AnimatedPreviewAreaProps {
  schematic: PreviewSchematic;
  projectName: string;
}

/**
 * Reusable AnimatedPreviewArea component for engineering case studies.
 * Renders an interactive architectural pipeline schematic and real-time snippet inspector
 * without fabricating false UI screenshots.
 */
export function AnimatedPreviewArea({ schematic, projectName }: AnimatedPreviewAreaProps) {
  const [activeTab, setActiveTab] = useState<"pipeline" | "code">("pipeline");

  return (
    <div className="card-cyber relative flex flex-col overflow-hidden rounded-2xl shadow-2xl transition-all duration-500">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 bg-black/40 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/80" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/80" aria-hidden="true" />
          <span className="ml-2 font-mono text-xs font-semibold text-foreground-muted">
            {schematic.architectureTitle}
          </span>
        </div>

        {/* Inspection Mode Tabs */}
        <div
          role="tablist"
          aria-label={`${projectName} inspection modes`}
          className="flex items-center gap-1 rounded-lg bg-surface/80 p-0.5 border border-border/60"
        >
          <button
            role="tab"
            aria-selected={activeTab === "pipeline"}
            onClick={() => setActiveTab("pipeline")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-2xs font-medium transition-colors ${
              activeTab === "pipeline"
                ? "bg-primary/20 text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="h-3 w-3" aria-hidden="true" />
            <span>Pipeline</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "code"}
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-2xs font-medium transition-colors ${
              activeTab === "code"
                ? "bg-primary/20 text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code2 className="h-3 w-3" aria-hidden="true" />
            <span>Telemetry</span>
          </button>
        </div>
      </div>

      {/* Preview Content Area */}
      <div className="relative min-h-[260px] p-5 sm:p-6 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "pipeline" ? (
            <motion.div
              key="pipeline-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between h-full space-y-6"
            >
              {/* Architecture Node Sequence */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-2xs font-mono text-muted-foreground uppercase tracking-widest">
                  <span>// Data Flow Sequence</span>
                  <span>Zero-Trust Invariant</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {schematic.nodeSequence.map((node, index) => (
                    <div
                      key={`${node}-${index}`}
                      className="group flex items-center justify-between rounded-xl border border-primary/25 bg-surface/70 px-3.5 py-3 transition-colors hover:border-primary/60 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 font-mono text-2xs font-bold text-primary">
                          0{index + 1}
                        </span>
                        <span className="font-mono text-xs font-semibold text-foreground">
                          {node}
                        </span>
                      </div>
                      <ArrowRight
                        className="h-3.5 w-3.5 text-primary/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Verification Badge */}
              <div className="flex items-center justify-between rounded-lg border border-success/30 bg-success/10 px-3.5 py-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="font-mono text-2xs font-bold uppercase tracking-wider text-success">
                    {schematic.statusText}
                  </span>
                </div>
                <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-3 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-2xs text-muted-foreground uppercase tracking-widest">
                <span>// Architectural Telemetry Contract</span>
                <span>Read-Only</span>
              </div>
              <pre
                tabIndex={0}
                aria-label="Code telemetry sample"
                className="overflow-x-auto rounded-xl border border-border/80 bg-surface/80 p-4 text-primary leading-relaxed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <code>{schematic.codeSnippet || "// Telemetry snippet TBD"}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer System Indicator */}
      <div className="border-t border-white/5 bg-black/20 px-4 py-2 font-mono text-2xs text-muted-foreground flex items-center justify-between backdrop-blur-md">
        <span className="flex items-center gap-1.5">
          <TerminalIcon className="h-3 w-3 text-primary" aria-hidden="true" />
          <span>PORTFOLIO-OS // CASE-STUDY-HUD</span>
        </span>
        <span>VERIFIED DESIGN</span>
      </div>
    </div>
  );
}

export default AnimatedPreviewArea;
