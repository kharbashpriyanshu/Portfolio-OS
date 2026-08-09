import React from "react";
import { motion } from "framer-motion";
import { MISSION_CONFIG } from "./mission-config";
import {
  ShieldAlert,
  Code2,
  Bot,
  TrendingUp,
  Terminal,
  BrainCircuit,
  Search,
  Activity,
} from "lucide-react";

const ICON_MAP = {
  ShieldAlert: ShieldAlert,
  Code2: Code2,
  Bot: Bot,
  TrendingUp: TrendingUp,
  Terminal: Terminal,
  BrainCircuit: BrainCircuit,
  Search: Search,
  Activity: Activity,
};

interface MissionCardProps {
  card: (typeof MISSION_CONFIG.cards)[0];
  index: number;
}

export function MissionCard({ card, index }: MissionCardProps) {
  const Icon = ICON_MAP[card.icon as keyof typeof ICON_MAP];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="card-cyber group p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,221,255,0.2)]">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-foreground">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
