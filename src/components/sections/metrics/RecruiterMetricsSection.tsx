import * as React from "react";
import { motion } from "framer-motion";
import { RECRUITER_METRICS } from "@/config/metrics";

/**
 * RecruiterMetricsSection provides technical recruiters and hiring managers
 * with an immediate, scan-able snapshot of Priyanshu's verified engineering output.
 */
export function RecruiterMetricsSection() {
  return (
    <section
      id="recruiter-metrics"
      role="region"
      aria-labelledby="metrics-heading"
      className="relative w-full border-y border-border/80 bg-surface-elevated/40 py-10 sm:py-14"
    >
      <div className="container-cyber mx-auto">
        <h2 id="metrics-heading" className="sr-only">
          Recruiter Engineering Metrics Snapshot
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {RECRUITER_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex flex-col rounded-2xl border p-5 transition-all duration-300 ${
                metric.highlight
                  ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_rgba(0,221,255,0.08)]"
                  : "border-border/80 bg-surface/60"
              }`}
            >
              <span className="font-mono text-2xs uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </span>
              <span className="mt-1 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {metric.value}
              </span>
              <p className="mt-1.5 text-xs text-foreground-muted sm:text-sm">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecruiterMetricsSection;
