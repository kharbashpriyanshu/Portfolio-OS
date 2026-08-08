import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SKILLS_CONFIG, SKILLS_CATEGORIES } from "./skills-config";
import { CategoryCard } from "./CategoryCard";
import { InsightsPanel } from "./InsightsPanel";

export function SkillsIntelligenceSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SKILLS_CATEGORIES[0].id);

  const activeCategory =
    SKILLS_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILLS_CATEGORIES[0];

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategoryId(id);
  }, []);

  return (
    <section
      id="skills"
      role="region"
      aria-labelledby="skills-heading"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {SKILLS_CONFIG.label}
          </div>

          <h2
            id="skills-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {SKILLS_CONFIG.heading}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {SKILLS_CONFIG.introduction}
          </p>
        </motion.div>

        {/* Intelligence Console Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 xl:gap-12">
          {/* Left Side: Categories Ecosystem (65%) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-muted mb-2">
              // ECOSYSTEM CATEGORIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_CATEGORIES.map((category, idx) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={idx}
                  isActive={activeCategoryId === category.id}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Technology Insights Panel (35%) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-32 h-full min-h-[600px] lg:min-h-[500px]">
              <InsightsPanel category={activeCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
