export type CertificationCategory =
  | "Professional Certifications"
  | "Courses"
  | "Hackathons"
  | "Workshops"
  | "Achievements"
  | "Awards"
  | "Digital Badges";

export type CertificationFilterType = "All" | "Featured" | CertificationCategory;

export type CertificationStatus = "Active" | "Expired" | "In Progress";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: CertificationCategory;
  skills: string[];
  description: string;
  badge?: string;
  featured?: boolean;
  status: CertificationStatus;
}
