import { CertificationItem } from "./types";

export const CERTIFICATIONS_CONFIG = {
  heading: "Certifications & Achievements",
  label: "CONTINUOUS LEARNING",
  introduction:
    "A testament to my commitment to lifelong learning, practical experience, and validated technical excellence in cybersecurity and software engineering.",
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-google-cybersecurity",
    title: "Google Cybersecurity Foundations",
    issuer: "Coursera",
    issueDate: "Verified",
    category: "Professional Certifications",
    skills: ["Cybersecurity Foundations"],
    description: "Foundational training in cybersecurity principles and practices.",
    featured: true,
    status: "Active",
  },
  {
    id: "cert-ccep",
    title: "Certified Cybersecurity Ethical Professional (CCEP)",
    issuer: "Red Team Leaders",
    issueDate: "Verified",
    category: "Professional Certifications",
    skills: ["Ethical Hacking", "Security Professionalism"],
    description:
      "Certification demonstrating ethical hacking proficiency and professional security standards.",
    featured: true,
    status: "Active",
  },
  {
    id: "cert-codec-training",
    title: "Cyber Security Training Program",
    issuer: "Codec Technologies (ICAC Recognized)",
    issueDate: "May 2026",
    category: "Workshops",
    skills: ["Network Security", "Vulnerability Assessment"],
    description:
      "Comprehensive training in network security and practical vulnerability assessment.",
    featured: false,
    status: "Active",
  },
  {
    id: "cert-sql",
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    issueDate: "Verified",
    category: "Courses",
    skills: ["Database Management", "SQL"],
    description: "Technical training on database design, querying, and SQL optimization.",
    featured: false,
    status: "Active",
  },
  {
    id: "cert-matlab-deeplearning",
    title: "MATLAB Deep Learning Onramp",
    issuer: "MathWorks",
    issueDate: "Verified",
    category: "Courses",
    skills: ["Deep Learning", "MATLAB"],
    description: "Introduction to deep learning techniques using MATLAB.",
    featured: false,
    status: "Active",
  },
  {
    id: "cert-matlab-workshop",
    title: "MATLAB Workshop",
    issuer: "Rashtriya Raksha University",
    issueDate: "Verified",
    category: "Workshops",
    skills: ["MATLAB"],
    description: "Practical workshop on MATLAB applications.",
    featured: false,
    status: "Active",
  },
];
