import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { PROJECTS_CONFIG } from "./projects-config";
import { useProjects } from "./useProjects";
import { ProjectNavigator } from "./ProjectNavigator";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectsCommandCenter() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    showFeaturedOnly,
    setShowFeaturedOnly,
    filteredProjects,
    activeProjectId,
    setActiveProjectId,
    activeProject,
  } = useProjects();

  return (
    <section
      id="projects"
      role="region"
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      {/* Background Gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background"
        aria-hidden="true"
      />

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
            {PROJECTS_CONFIG.label}
          </div>

          <h2
            id="projects-heading"
            className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {PROJECTS_CONFIG.heading}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {PROJECTS_CONFIG.introduction}
          </p>
        </motion.div>

        {/* Command Center Layout */}
        <LayoutGroup>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 xl:gap-12">
            {/* Left Side: Navigator (30%) */}
            <div className="glass-panel lg:col-span-5 xl:col-span-4 h-[600px] lg:h-[800px] rounded-3xl p-4 sm:p-6">
              <ProjectNavigator
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                showFeaturedOnly={showFeaturedOnly}
                setShowFeaturedOnly={setShowFeaturedOnly}
                filteredProjects={filteredProjects}
                activeProjectId={activeProjectId}
                setActiveProjectId={setActiveProjectId}
              />
            </div>

            {/* Right Side: Details Panel (70%) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="sticky top-32 h-[800px] lg:h-[800px]">
                <ProjectDetails project={activeProject} />
              </div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
