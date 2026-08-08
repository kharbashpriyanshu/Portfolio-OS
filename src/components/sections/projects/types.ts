export type ProjectCategory =
  "Cybersecurity" | "Full Stack" | "AI" | "Research" | "Academic" | "Innovation Roadmap";
export type ProjectStatus = "Completed" | "In Progress" | "Planned" | "Archived";

export interface ArchitectureLayer {
  layer: string;
  technologies: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;

  // Case Study Fields
  problem: string;
  architecture: ArchitectureLayer[];
  screenshots: string[];
  engineeringDecisions: string[];
  challenges: string[];
  securityConsiderations: string[];
  lessonsLearned: string[];
  futureRoadmap: string[];

  // Metadata
  github?: string;
  demo?: string;
  technologies: string[];
  timeline: {
    start: string;
    end?: string;
  };
  impact: string[];
  metrics: ProjectMetric[];
}
