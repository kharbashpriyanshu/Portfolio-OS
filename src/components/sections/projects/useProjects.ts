import { useState, useMemo } from "react";
import { PROJECTS_DATA } from "./projects-config";
import { ProjectCategory, ProjectStatus } from "./types";

export function useProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "All">("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string>(
    PROJECTS_DATA.find((p) => p.featured)?.id || PROJECTS_DATA[0].id
  );

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
      const matchesFeatured = !showFeaturedOnly || project.featured;

      return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
    });
  }, [searchQuery, selectedCategory, selectedStatus, showFeaturedOnly]);

  const activeProject = useMemo(() => {
    return (
      PROJECTS_DATA.find((p) => p.id === activeProjectId) || filteredProjects[0] || PROJECTS_DATA[0]
    );
  }, [activeProjectId, filteredProjects]);

  return {
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
  };
}
