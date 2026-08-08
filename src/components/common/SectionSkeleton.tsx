import React from "react";
import { Loader2 } from "lucide-react";

export function SectionSkeleton() {
  return (
    <div className="flex w-full min-h-[50vh] items-center justify-center bg-background/50 py-20">
      <div className="flex flex-col items-center gap-4 opacity-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Loading Component...
        </p>
      </div>
    </div>
  );
}

export default SectionSkeleton;
