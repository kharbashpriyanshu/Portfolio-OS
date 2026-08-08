export type SkillLevel =
  "Core Skills" | "Hands-on Experience" | "Working Knowledge" | "Currently Learning";

export interface Technology {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  practicalUsage: string;
  representativeProjects: string[];
  technologies: Technology[];
}

export const SKILLS_CONFIG = {
  heading: "Skill Intelligence Dashboard",
  label: "ENGINEERING CAPABILITIES",
  introduction:
    "A comprehensive mapping of my technical capabilities. Proficiency is strictly categorized by actual experience—backed by projects, internships, and labs—rather than arbitrary percentages.",
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description:
      "Core languages used to build everything from low-level systems to high-level web applications.",
    icon: "CodeXml",
    practicalUsage:
      "Scripting automations, backend development, systems programming, and competitive problem solving.",
    representativeProjects: ["PortIntel", "LogSentry"],
    technologies: [
      { name: "Python", level: "Core Skills" },
      { name: "C++", level: "Hands-on Experience" },
      { name: "Java", level: "Hands-on Experience" },
      { name: "JavaScript", level: "Core Skills" },
      { name: "SQL", level: "Core Skills" },
    ],
  },
  {
    id: "security-engineering",
    title: "Security Engineering",
    description: "Building resilient systems and integrating secure coding practices.",
    icon: "Shield",
    practicalUsage: "System hardening, secure architecture design, threat modeling.",
    representativeProjects: ["LogSentry"],
    technologies: [
      { name: "OWASP Top 10", level: "Hands-on Experience" },
      { name: "Vulnerability Assessment", level: "Hands-on Experience" },
      { name: "Web Security", level: "Hands-on Experience" },
    ],
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Identifying and exploiting vulnerabilities to strengthen security postures.",
    icon: "Crosshair",
    practicalUsage: "Web exploitation, binary exploitation, vulnerability assessment.",
    representativeProjects: [],
    technologies: [
      { name: "Burp Suite", level: "Hands-on Experience" },
      { name: "Metasploit", level: "Working Knowledge" },
      { name: "Reconnaissance", level: "Core Skills" },
      { name: "Enumeration", level: "Core Skills" },
    ],
  },
  {
    id: "osint",
    title: "OSINT",
    description: "Open-source intelligence gathering and analysis.",
    icon: "Search",
    practicalUsage: "Reconnaissance, threat actor tracking.",
    representativeProjects: ["PortIntel"],
    technologies: [{ name: "OSINT", level: "Hands-on Experience" }],
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Securing network infrastructure and analyzing traffic.",
    icon: "Network",
    practicalUsage: "Packet analysis, IDS/IPS configuration, firewall management.",
    representativeProjects: [],
    technologies: [
      { name: "Wireshark", level: "Core Skills" },
      { name: "Nmap", level: "Core Skills" },
      { name: "Packet Tracer", level: "Hands-on Experience" },
      { name: "Network Security", level: "Hands-on Experience" },
    ],
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    description: "Investigating digital evidence and responding to incidents.",
    icon: "FileSearch",
    practicalUsage: "Malware analysis, disk imaging, memory forensics.",
    representativeProjects: ["LogSentry"],
    technologies: [{ name: "Digital Forensics", level: "Currently Learning" }],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side runtimes and frameworks used to process data and serve APIs.",
    icon: "Server",
    practicalUsage: "Building RESTful APIs and microservices.",
    representativeProjects: ["PortIntel", "LogSentry"],
    technologies: [
      { name: "FastAPI", level: "Core Skills" },
      { name: "Flask", level: "Hands-on Experience" },
      { name: "REST APIs", level: "Core Skills" },
      { name: "JWT", level: "Hands-on Experience" },
      { name: "SQLAlchemy", level: "Hands-on Experience" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and modern cloud-native database architectures.",
    icon: "Database",
    practicalUsage: "Designing schemas, optimizing queries.",
    representativeProjects: ["PortIntel", "Academic Resource Hub"],
    technologies: [
      { name: "PostgreSQL", level: "Core Skills" },
      { name: "MySQL", level: "Hands-on Experience" },
      { name: "SQLite", level: "Core Skills" },
      { name: "Firebase", level: "Hands-on Experience" },
      { name: "XAMPP", level: "Hands-on Experience" },
    ],
  },
  {
    id: "ai",
    title: "AI",
    description: "Data manipulation libraries and generative AI APIs.",
    icon: "BrainCircuit",
    practicalUsage: "Processing datasets, integrating LLMs.",
    representativeProjects: ["LogSentry"],
    technologies: [
      { name: "OpenAI API", level: "Hands-on Experience" },
      { name: "Prompt Engineering", level: "Core Skills" },
      { name: "LLM Integration", level: "Hands-on Experience" },
      { name: "Ollama", level: "Currently Learning" },
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    description: "System administration and kernel interaction.",
    icon: "Monitor",
    practicalUsage: "Linux administration, Windows internals.",
    representativeProjects: ["LogSentry"],
    technologies: [
      { name: "Linux", level: "Core Skills" },
      { name: "Kali Linux", level: "Hands-on Experience" },
      { name: "Windows", level: "Core Skills" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Development and operational tooling.",
    icon: "Wrench",
    practicalUsage: "Version control, containerization.",
    representativeProjects: ["LogSentry", "PortIntel"],
    technologies: [
      { name: "Git", level: "Core Skills" },
      { name: "GitHub", level: "Core Skills" },
      { name: "Docker", level: "Hands-on Experience" },
      { name: "Nginx", level: "Working Knowledge" },
      { name: "VirtualBox", level: "Hands-on Experience" },
      { name: "Postman", level: "Core Skills" },
    ],
  },
];
