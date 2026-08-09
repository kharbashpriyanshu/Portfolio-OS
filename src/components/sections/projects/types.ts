export type ProjectCategory =
  | "Security Engineering"
  | "Network Security"
  | "Full Stack Development"
  | "System Utilities"
  | "Software Engineering"
  | "Cybersecurity"
  | "Full Stack"
  | "AI"
  | "Research"
  | "Academic"
  | "Innovation Roadmap";
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
  overview: string;
  problem: string;
  objectives?: string[];
  features: string[];
  architecture?: ArchitectureLayer[];
  architectureDescription?: string;
  coreModules?: { name: string; description: string }[];
  screenshots?: string[];
  engineeringDecisions: string[];
  challenges?: string[];
  securityConsiderations?: string[];
  testing?: string[];
  lessonsLearned: string[];
  futureImprovements?: string[];
  futureRoadmap?: string[];

  // Metadata
  github?: string;
  demo?: string;
  architectureDiagram?: string;
  documentation?: string;
  technologies: string[];
  timeline?: {
    start: string;
    end?: string;
  };
  impact?: string[];
  metrics?: ProjectMetric[];
}
