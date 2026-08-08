import React from "react";
import { motion } from "framer-motion";
import { ContactPlatform } from "./types";
import * as Icons from "lucide-react";

interface ContactCardsProps {
  platforms: ContactPlatform[];
}

export const ContactCards = React.memo(function ContactCards({ platforms }: ContactCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {platforms
        .filter((p) => p.url !== "")
        .map((platform, index) => {
          // @ts-expect-error - dynamic icon access
          const IconComponent = Icons[platform.icon] || Icons.Link;

          return (
            <motion.a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-interactive flex flex-col items-start gap-3 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">{platform.description}</p>
              </div>
            </motion.a>
          );
        })}
    </div>
  );
});
