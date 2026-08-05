import * as React from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  ShieldAlert,
  Cpu,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  Target,
  Wrench,
} from "lucide-react";
import { JOURNEY_MILESTONES, type JourneyMilestone } from "@/config/journey";
import { Badge } from "@/components/ui/badge";

/**
 * Maps semantic milestone categories to distinct cybersecurity visual iconography.
 */
function getMilestoneIcon(category: JourneyMilestone["category"]) {
  switch (category) {
    case "Foundation":
      return <TerminalIcon className="h-4 w-4 text-primary" aria-hidden="true" />;
    case "Core Systems":
      return <Layers className="h-4 w-4 text-info" aria-hidden="true" />;
    case "VAPT Intelligence":
      return <ShieldAlert className="h-4 w-4 text-warning" aria-hidden="true" />;
    case "AI Security":
      return <Cpu className="h-4 w-4 text-success" aria-hidden="true" />;
    case "Active Development":
      return <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />;
    default:
      return <Award className="h-4 w-4 text-primary" aria-hidden="true" />;
  }
}

/**
 * World-class Engineering Journey visual timeline section.
 * Chronicles Priyanshu's real technical evolution with scan-able Problem, Solution,
 * Lesson Learned, and Technology Stack blocks.
 */
export function EngineeringJourneySection() {
  return (
    <section
      id="journey"
      role="region"
      aria-labelledby="journey-heading"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Subtle Background Grid & Dark Surface Zone */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cyber-grid opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background"
        aria-hidden="true"
      />

      <div className="container-cyber mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col space-y-3 text-center sm:mb-20"
        >
          <div className="mx-auto flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              02 // Engineering Journey &amp; Milestones
            </span>
          </div>
          <h2
            id="journey-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            How I Became a Cyber Security Engineer
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            A timeline of real security problems solved, systems built, and technical lessons
            learned.
          </p>
        </motion.div>

        {/* Visual Timeline Stack */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Glowing Connecting Line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/60 via-success/40 to-primary/20 md:left-1/2 md:-ml-px"
            aria-hidden="true"
          />

          <ol role="list" className="relative space-y-12 sm:space-y-16">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.li
                  key={milestone.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex flex-col items-start md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-6 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_15px_rgba(0,221,255,0.4)] md:left-1/2">
                    {getMilestoneIcon(milestone.category)}
                  </div>

                  {/* Spacer for Alternate Columns */}
                  <div className="hidden w-1/2 md:block" aria-hidden="true" />

                  {/* Interactive Milestone Card */}
                  <div
                    className={`w-full pl-12 md:w-1/2 ${
                      isEven ? "md:pl-0 md:pr-10" : "md:pl-10 md:pr-0"
                    }`}
                  >
                    <div
                      tabIndex={0}
                      aria-label={`Milestone: ${milestone.title}`}
                      className="card-cyber group flex flex-col space-y-4 rounded-2xl border border-border/80 bg-surface-card/95 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-7"
                    >
                      {/* Year Banner & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                          {milestone.year}
                        </span>
                        <Badge
                          variant={
                            milestone.category === "AI Security"
                              ? "emerald"
                              : milestone.category === "VAPT Intelligence"
                                ? "cyan"
                                : "neutral"
                          }
                          className="text-2xs"
                        >
                          {milestone.category}
                        </Badge>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        {milestone.title}
                      </h3>

                      {/* Scan-able Problem Block */}
                      <div className="space-y-1 rounded-lg border border-warning/25 bg-warning/5 p-3">
                        <div className="flex items-center gap-1.5 font-mono text-2xs font-bold uppercase tracking-wider text-warning">
                          <Target className="h-3 w-3" aria-hidden="true" />
                          <span>Problem</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {milestone.problem}
                        </p>
                      </div>

                      {/* Scan-able Solution Block */}
                      <div className="space-y-1 rounded-lg border border-primary/25 bg-primary/5 p-3">
                        <div className="flex items-center gap-1.5 font-mono text-2xs font-bold uppercase tracking-wider text-primary">
                          <Wrench className="h-3 w-3" aria-hidden="true" />
                          <span>Solution</span>
                        </div>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {milestone.solution}
                        </p>
                      </div>

                      {/* Lesson Learned Block */}
                      <div className="space-y-1 rounded-lg border border-success/25 bg-success/5 p-3">
                        <div className="flex items-center gap-1.5 font-mono text-2xs font-bold uppercase tracking-wider text-success">
                          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                          <span>Lesson Learned</span>
                        </div>
                        <p className="text-xs text-foreground leading-relaxed">
                          {milestone.lessonLearned}
                        </p>
                      </div>

                      {/* Technology Stack */}
                      <div className="pt-2 border-t border-border/40">
                        <span className="block font-mono text-2xs uppercase tracking-wider text-muted-foreground mb-2">
                          // Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.technologies.map((tech) => (
                            <Badge key={tech} variant="neutral" className="text-2xs font-mono">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default EngineeringJourneySection;
