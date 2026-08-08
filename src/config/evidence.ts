export interface EvidenceItem {
  id: string;
  title: string;
  category:
    | "Screenshot"
    | "GitHub"
    | "Certificate"
    | "Recommendation"
    | "Internship"
    | "Architecture Diagram"
    | "Demo Video";
  description: string;
  url: string;
  thumbnailUrl?: string;
  associatedProject?: string;
  dateAdded: string;
}

export const EVIDENCE_CONFIG = {
  heading: "Evidence Center",
  label: "VERIFICATION",
  introduction:
    "Every claim on this platform is backed by hard evidence. Review the raw data, architecture diagrams, and official verifications that validate my engineering experience.",
};

export const EVIDENCE_DATA: EvidenceItem[] = [];
