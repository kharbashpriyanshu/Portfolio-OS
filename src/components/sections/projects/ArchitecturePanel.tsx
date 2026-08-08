import React from "react";
import { ArchitectureLayer } from "./types";
import { ArrowDown } from "lucide-react";

interface ArchitecturePanelProps {
  layers: ArchitectureLayer[];
}

export const ArchitecturePanel = React.memo(function ArchitecturePanel({
  layers,
}: ArchitecturePanelProps) {
  if (!layers || layers.length === 0) return null;

  return (
    <div className="mt-8 rounded-2xl border border-border/40 bg-surface/30 p-6">
      <h4 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted">
        // System Architecture Map
      </h4>
      <div className="flex flex-col items-center">
        {layers.map((layer, index) => (
          <React.Fragment key={layer.layer}>
            <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl border border-border/60 bg-surface-elevated p-4 text-center shadow-sm transition-colors hover:border-primary/40 hover:bg-surface-card">
              <span className="font-heading text-sm font-bold text-foreground">{layer.layer}</span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {layer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {index < layers.length - 1 && (
              <div className="flex h-8 w-px items-center justify-center bg-border/50 my-1">
                <ArrowDown className="h-3 w-3 text-muted-foreground bg-surface/30" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});
