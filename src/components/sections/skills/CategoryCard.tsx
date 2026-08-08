import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  CodeXml,
  Layout,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";
import { SkillCategory } from "./skills-config";

const ICON_MAP = {
  CodeXml,
  ShieldAlert,
  Layout,
  Server,
  Database,
  Cloud,
  BrainCircuit,
};

interface CategoryCardProps {
  category: SkillCategory;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const CategoryCard = React.memo(function CategoryCard({
  category,
  isActive,
  onClick,
  index,
}: CategoryCardProps) {
  const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP] || CodeXml;

  return (
    <motion.button
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      onClick={onClick}
      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isActive
          ? "border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(0,221,255,0.15)]"
          : "border-border/50 bg-surface-card/40 hover:border-primary/30 hover:bg-surface-card/80 hover:shadow-glass-sm"
      }`}
      aria-pressed={isActive}
    >
      {/* Animated background gradient on active state */}
      {isActive && (
        <motion.div
          layoutId="active-category-bg"
          className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-50"
        />
      )}

      <div
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
          isActive
            ? "border-primary/30 bg-primary/20 text-primary"
            : "border-border/80 bg-surface-elevated text-muted-foreground group-hover:border-primary/20 group-hover:text-primary"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div className="relative z-10 flex-1">
        <h3
          className={`font-heading text-lg font-bold transition-colors ${
            isActive ? "text-foreground" : "text-foreground group-hover:text-primary"
          }`}
        >
          {category.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {category.technologies.length} Technologies
        </p>
      </div>

      <div
        className={`relative z-10 transition-transform duration-300 ${
          isActive
            ? "translate-x-0 text-primary opacity-100"
            : "-translate-x-2 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </div>
    </motion.button>
  );
});
