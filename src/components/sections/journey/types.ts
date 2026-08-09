export type MilestoneType = "Education" | "Learning" | "Engineering" | "Internship" | "Current";

export type JourneyFilterType =
  "All" | "Education" | "Internship" | "Engineering" | "Learning" | "Current";

export type MilestoneStatus = "Completed" | "Ongoing" | "Active" | "Planned";

export interface JourneyMilestone {
  id: string;
  date?: string;
  title: string;
  organization?: string;
  location?: string;
  type: MilestoneType;
  description: string;
  highlights?: string[];
  technologies?: string[];
  status: MilestoneStatus;
  links?: { label: string; url: string }[];
  featured?: boolean;
}
