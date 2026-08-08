import React from "react";
import { motion } from "framer-motion";
import { CertificationItem } from "./types";
import { ExternalLink, Star, Award, CheckCircle2, Clock, Calendar } from "lucide-react";

interface CertificationCardProps {
  item: CertificationItem;
  index: number;
}

export const CertificationCard = React.memo(function CertificationCard({
  item,
  index,
}: CertificationCardProps) {
  const getStatusIcon = () => {
    switch (item.status) {
      case "Active":
        return <CheckCircle2 className="h-3 w-3 text-cyber-emerald" />;
      case "In Progress":
        return <Clock className="h-3 w-3 text-cyber-blue animate-spin-slow" />;
      case "Expired":
        return <Clock className="h-3 w-3 text-muted-foreground" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.1, ease: "easeOut" }}
      className="card-cyber group flex h-full flex-col hover:-translate-y-1 hover:shadow-glass-lg duration-300"
    >
      {/* Subtle top gradient glow effect based on feature status */}
      <div
        className={`absolute inset-x-0 top-0 h-1 ${item.featured ? "bg-gradient-to-r from-cyber-amber/50 via-primary/50 to-cyber-amber/50" : "bg-gradient-to-r from-border/50 via-primary/20 to-border/50"} opacity-50 transition-opacity group-hover:opacity-100`}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface-elevated px-2.5 py-1 text-[10px] font-medium text-foreground-muted">
            {getStatusIcon()}
            {item.status}
          </div>
          {item.featured && (
            <span className="flex items-center gap-1 rounded bg-cyber-amber/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyber-amber border border-cyber-amber/20">
              <Star className="h-2.5 w-2.5 fill-current" /> Featured
            </span>
          )}
        </div>

        <div className="mb-3">
          <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-primary/80 mt-1 flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5" />
            {item.issuer}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Issued: {item.issueDate}
          </span>
          {item.expiryDate && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 opacity-50" />
              Expires: {item.expiryDate}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
          {item.description}
        </p>

        <div className="mt-auto space-y-4 pt-4 border-t border-border/50">
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-foreground-subtle transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="rounded bg-surface/50 px-2 py-1 text-[10px] uppercase border border-border/50 font-medium text-muted-foreground">
              {item.category}
            </span>

            {item.verificationUrl && (
              <a
                href={item.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-focus transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
                aria-label={`Verify ${item.title}`}
              >
                Verify <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
