export type MilestoneType =
  | "Education"
  | "Internship"
  | "Hackathon"
  | "Certification"
  | "Project Milestone"
  | "Achievement"
  | "Leadership"
  | "Research"
  | "Future Goal";

export type JourneyFilterType =
  | "All"
  | "Education"
  | "Internship"
  | "Projects"
  | "Hackathons"
  | "Certifications"
  | "Achievements"
  | "Research"
  | "Future Goals";

export type MilestoneStatus = "Completed" | "In Progress" | "Planned";

export interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  organization: string;
  location?: string;
  type: MilestoneType;
  description: string;
  highlights?: string[];
  technologies?: string[];
  status: MilestoneStatus;
  links?: { label: string; url: string }[];
  featured?: boolean;
}
