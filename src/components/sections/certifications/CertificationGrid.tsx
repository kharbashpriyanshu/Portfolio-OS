import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificationItem } from "./types";
import { CertificationCard } from "./CertificationCard";

interface CertificationGridProps {
  items: CertificationItem[];
}

export const CertificationGrid = React.memo(function CertificationGrid({
  items,
}: CertificationGridProps) {
  return (
    <div className="w-full">
      <AnimatePresence mode="popLayout">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <CertificationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex w-full flex-col items-center justify-center py-20 text-center"
          >
            <p className="text-sm font-medium text-foreground-subtle">
              No credentials found for this category.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
