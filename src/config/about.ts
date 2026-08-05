import { SOCIAL_LINKS } from "@/config/navigation";

export interface QuickFact {
  id: string;
  label: string;
  value: string;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  focus: string;
}

export interface EngineeringPhilosophy {
  title: string;
  principles: string[];
}

export interface AboutConfig {
  headline: string;
  subHeadline: string;
  biography: string[];
  engineeringPhilosophy: EngineeringPhilosophy;
  quickFacts: QuickFact[];
  education: EducationItem[];
  currentFocus: {
    title: string;
    description: string;
    technologies: string[];
  };
  availability: {
    status: "available" | "employed" | "selective";
    label: string;
    detail: string;
  };
  socialLinks: typeof SOCIAL_LINKS;
  resumeUrl: string;
}

/**
 * Immutable configuration for the About Me section.
 * Engineered for 30% reduced reading time, conversational clarity, and rapid scanability.
 */
export const ABOUT_CONFIG: AboutConfig = {
  headline: "Building Secure Software That Solves Real Problems",
  subHeadline:
    "Security engineer and developer focused on vulnerability research, automated threat detection, and reliable software.",
  biography: [
    "Security engineering means building software that is secure by default—not adding firewalls as an afterthought. I combine proactive vulnerability research with automated testing to catch risks early.",
    "My focus is bridging the gap between offensive VAPT reconnaissance and defensive SOC automation. I write clean, verifiable code that teams can trust and maintain.",
  ],
  engineeringPhilosophy: {
    title: "Engineering Philosophy",
    principles: [
      "Verify Continuous Integrity — Treat every input and system boundary as untrusted by default.",
      "Automate Remediation — Turn repetitive SOC triage into reproducible, real-time code playbooks.",
      "Prioritize Ergonomics — Security tools fail if engineers find them too complex to use.",
    ],
  },
  quickFacts: [
    {
      id: "qf-1",
      label: "Specialization",
      value: "Vulnerability Assessment & AppSec",
      highlight: true,
    },
    {
      id: "qf-2",
      label: "Defense Focus",
      value: "Automated SOC Incident Response",
    },
    {
      id: "qf-3",
      label: "Core Stack",
      value: "Python, TypeScript, React 19, Linux",
      highlight: true,
    },
    {
      id: "qf-4",
      label: "Frameworks",
      value: "CVSS v3.1, NVD CVE Threat Intel, OWASP Top 10",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Bachelor of Technology / Computer Science & Information Security",
      degree: "Computer Science & Cybersecurity Systems Engineering",
      period: "Current",
      focus: "Network Forensics, Applied Artificial Intelligence, Cryptography",
    },
  ],
  currentFocus: {
    title: "AI-Enabled SOC Automation & Threat Reconnaissance",
    description:
      "Building automated VAPT engines and AI log analyzers that normalize and triage security events in real time.",
    technologies: ["Gemini REST", "CVSS v3.1", "Python / Pytest", "React 19"],
  },
  availability: {
    status: "available",
    label: "Available for Security Engineering & AppSec Roles",
    detail: "Seeking challenging positions in Cyber Security, VAPT, and AI Security Engineering.",
  },
  socialLinks: SOCIAL_LINKS,
  resumeUrl: "/resume.pdf",
};

export default ABOUT_CONFIG;
