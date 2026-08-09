export type CertificationCategory =
  | "Cybersecurity Certifications"
  | "Professional Training"
  | "Database & SQL"
  | "Workshop"
  | "Internship Evidence"
  | "Current Learning"
  | "Achievements";

export type CertificationFilterType = "All" | "Featured" | CertificationCategory;

export type CertificationStatus = "Active" | "Expired" | "In Progress" | "Completed" | "Ongoing";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  certificateUrl?: string;
  certificateFile?: string;
  evidence?: string;
  category: CertificationCategory;
  skills: string[];
  description: string;
  badge?: string;
  featured?: boolean;
  status: CertificationStatus;
}
