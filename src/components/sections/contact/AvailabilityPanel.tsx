import React from "react";
import { motion } from "framer-motion";
import { AvailabilityStatus } from "./types";
import { CheckCircle2, Circle } from "lucide-react";

interface AvailabilityPanelProps {
  availability: AvailabilityStatus;
}

export const AvailabilityPanel = React.memo(function AvailabilityPanel({
  availability,
}: AvailabilityPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-cyber p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-emerald opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-emerald"></span>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground">Current Availability</h3>
      </div>

      {availability.message && (
        <p className="mb-6 text-sm text-muted-foreground">{availability.message}</p>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {availability.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 text-sm text-foreground-muted"
          >
            {item.active ? (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            ) : (
              <Circle className="h-4 w-4 text-border" />
            )}
            <span className={item.active ? "font-medium text-foreground" : "opacity-50"}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});
