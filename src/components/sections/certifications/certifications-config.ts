import { CertificationItem } from "./types";

export const CERTIFICATIONS_CONFIG = {
  heading: "Certifications & Achievements",
  label: "CONTINUOUS LEARNING",
  introduction:
    "Professional certifications, workshops, internships, and technical learning completed to strengthen practical cybersecurity and software engineering skills.",
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-google-cybersecurity",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    issueDate: "",
    category: "Cybersecurity Certifications",
    skills: [
      "Linux",
      "Networking",
      "Security Operations",
      "Incident Response",
      "Risk Management",
      "Digital Security",
    ],
    description:
      "Cybersecurity training covering networking, Linux, security operations, incident response, risk management and foundational security concepts.",
    featured: true,
    status: "Completed",
  },
  {
    id: "cert-ccep",
    title: "CCEP Training",
    issuer: "Red Team Leaders",
    issueDate: "",
    category: "Professional Training",
    skills: [],
    description:
      "Completed foundational cybersecurity training focused on practical security concepts and offensive security fundamentals.",
    featured: true,
    status: "Completed",
  },
  {
    id: "cert-sql",
    title: "Database Management and SQL",
    issuer: "Infosys Springboard",
    issueDate: "",
    category: "Database & SQL",
    skills: [],
    description:
      "Training covering relational databases, SQL fundamentals, database design, normalization, and practical database operations.",
    featured: false,
    status: "Completed",
  },
  {
    id: "cert-matlab",
    title: "MATLAB Workshop",
    issuer: "",
    issueDate: "",
    category: "Workshop",
    skills: [],
    description:
      "Participated in practical MATLAB training focused on engineering applications and computational problem solving.",
    featured: false,
    status: "Completed",
  },
  {
    id: "cert-internship-codec",
    title: "Cyber Security Internship",
    issuer: "Codec Networks",
    issueDate: "",
    category: "Internship Evidence",
    skills: ["Network Security", "Vulnerability Assessment"],
    description:
      "Successfully completed a cybersecurity internship providing practical exposure to cybersecurity concepts and professional development.",
    featured: true,
    status: "Completed",
  },
  {
    id: "cert-current-learning",
    title: "Currently Learning",
    issuer: "",
    issueDate: "",
    category: "Current Learning",
    skills: [
      "Detection Engineering",
      "Threat Intelligence",
      "Secure Software Development",
      "Network Security",
      "Security Engineering",
      "Ethical Hacking",
    ],
    description:
      "Continuous learning through internships, engineering projects, technical documentation, security labs, and practical experimentation.",
    featured: true,
    status: "Ongoing",
  },
  {
    id: "cert-achievements",
    title: "Verified Achievements",
    issuer: "",
    issueDate: "",
    category: "Achievements",
    skills: [
      "B.Tech Computer Science & Engineering (Cyber Security)",
      "Cyber Security Internship Completed",
      "Ethical Hacking Internship Ongoing",
      "Engineering Projects Completed",
      "Practical Cybersecurity Learning",
    ],
    description:
      "Academic and professional milestones achieved throughout my cybersecurity engineering journey.",
    featured: true,
    status: "Active",
  },
];
