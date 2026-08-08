import React from "react";
import { motion } from "framer-motion";
import { JourneyMilestone } from "./types";
import {
  ExternalLink,
  Star,
  MapPin,
  Building2,
  CheckCircle2,
  CircleDashed,
  Clock,
} from "lucide-react";

interface JourneyCardProps {
  milestone: JourneyMilestone;
  isEven: boolean;
  index: number;
}

export const JourneyCard = React.memo(function JourneyCard({
  milestone,
  isEven,
  index,
}: JourneyCardProps) {
  const getStatusIcon = () => {
    switch (milestone.status) {
      case "Completed":
        return <CheckCircle2 className="h-3 w-3 text-cyber-emerald" />;
      case "In Progress":
        return <CircleDashed className="h-3 w-3 text-cyber-blue animate-spin-slow" />;
      case "Planned":
        return <Clock className="h-3 w-3 text-muted-foreground" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex w-full flex-col md:w-1/2 ${isEven ? "md:items-end md:pr-12 lg:pr-16" : "md:ml-auto md:items-start md:pl-12 lg:pl-16"}`}
    >
      {/* Connector Line for Desktop */}
      <div
        className={`hidden md:block absolute top-8 h-px w-8 bg-border/80 ${isEven ? "right-4 lg:right-8" : "left-4 lg:left-8"}`}
      />

      {/* Milestone Node on Desktop */}
      <div
        className={`hidden md:flex absolute top-6 h-5 w-5 items-center justify-center rounded-full border-2 bg-background z-10 transition-colors duration-300 ${
          milestone.featured
            ? "border-cyber-amber/80 shadow-[0_0_10px_rgba(255,184,0,0.4)]"
            : "border-primary/50"
        } ${isEven ? "-right-2.5" : "-left-2.5"}`}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full ${milestone.featured ? "bg-cyber-amber" : "bg-primary"}`}
        />
      </div>

      {/* Card Content */}
      <div className="card-cyber group w-full max-w-xl p-6">
        {/* Mobile Timeline Node (hidden on md) */}
        <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/50 bg-background md:hidden">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>

        <div className="flex flex-col gap-4">
          {/* Header Info */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-primary">{milestone.date}</span>
              {milestone.featured && (
                <span className="flex items-center gap-1 rounded bg-cyber-amber/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyber-amber border border-cyber-amber/20">
                  <Star className="h-2.5 w-2.5 fill-current" /> Featured
                </span>
              )}
            </div>

            <span className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface-elevated px-2.5 py-1 text-[10px] font-medium text-foreground-muted">
              {getStatusIcon()}
              {milestone.status}
            </span>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {milestone.title}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" /> {milestone.organization}
              </span>
              {milestone.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {milestone.location}
                </span>
              )}
              <span className="rounded bg-surface/50 px-1.5 py-0.5 text-[10px] uppercase border border-border/50">
                {milestone.type}
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            {milestone.description}
          </p>

          {/* Highlights */}
          {milestone.highlights && milestone.highlights.length > 0 && (
            <ul className="flex flex-col gap-2 rounded-xl bg-surface/30 p-4 border border-border/40">
              {milestone.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-foreground-subtle">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {milestone.technologies && milestone.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {milestone.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-foreground-subtle transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {milestone.links && milestone.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-3 border-t border-border/50 mt-2">
              {milestone.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  {link.label} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});
