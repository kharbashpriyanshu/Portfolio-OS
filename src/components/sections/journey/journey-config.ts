import { JourneyMilestone } from "./types";

export const JOURNEY_CONFIG = {
  heading: "Professional Journey",
  label: "CAREER PATH",
  introduction:
    "A chronological mapping of my continuous evolution from a cybersecurity student to a professional security engineer. This journey reflects my commitment to applied learning, technical leadership, and engineering excellence.",
};

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    id: "btech-start",
    date: "Aug 2024",
    title: "Started B.Tech",
    organization: "Rashtriya Raksha University",
    type: "Education",
    description:
      "Pursuing Bachelor of Technology in Computer Science Engineering (Cyber Security). Coursework includes Computer Networks, Operating Systems, Database Management Systems, Cryptography, Digital Forensics, and Network Security.",
    status: "Completed",
    featured: true,
  },
  {
    id: "codec-internship",
    date: "Apr 2026 - May 2026",
    title: "Cyber Security Intern",
    organization: "Codec Technologies",
    type: "Internship",
    description:
      "Successfully completed cybersecurity internship covering cybersecurity fundamentals and practical concepts. Performed hands-on security assessments using Linux, Nmap, Wireshark, Burp Suite, and Metasploit in controlled laboratory environments. Applied reconnaissance, vulnerability identification, and web application security testing methodologies.",
    status: "Completed",
    featured: true,
  },
  {
    id: "academic-resource-hub",
    date: "2024",
    title: "Academic Resource Hub",
    organization: "Independent Project",
    type: "Project Milestone",
    description:
      "Developed a secure, AI-powered educational platform using React, Supabase, and Gemini.",
    status: "Completed",
  },
  {
    id: "portintel",
    date: "2024",
    title: "PortIntel",
    organization: "Independent Project",
    type: "Project Milestone",
    description:
      "Engineered an automated reconnaissance and VAPT intelligence framework featuring NVD-authenticated threat feeds and CVSS v3.1 standard risk metrics.",
    status: "Completed",
  },
  {
    id: "logsentry",
    date: "2024",
    title: "LogSentry",
    organization: "Independent Project",
    type: "Project Milestone",
    description:
      "Developed a commercial-grade SIEM and detection engine. Integrated Gemini REST for AI-powered SOC incident response and automated triage.",
    status: "Completed",
  },
  {
    id: "istudio-internship",
    date: "Jul 2026 - Present",
    title: "Ethical Hacking Intern",
    organization: "iStudio",
    type: "Internship",
    description:
      "Participating in a structured Ethical Hacking Internship covering penetration testing, network security, web application security, Linux, and cybersecurity methodologies. Performing hands-on security labs involving reconnaissance, vulnerability assessment, and exploitation techniques.",
    status: "In Progress",
    featured: true,
  },
];
