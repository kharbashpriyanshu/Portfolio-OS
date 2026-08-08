export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const SKILLS_CONFIG = {
  heading: "Skills Intelligence",
  label: "ENGINEERING CAPABILITIES",
  introduction:
    "Technologies and engineering skills developed through practical projects, internships, continuous learning, and hands-on experimentation.",
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description:
      "Programming languages used across engineering projects, backend systems, automation scripts, and web applications.",
    icon: "CodeXml",
    technologies: ["Python", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Practical cybersecurity tools and concepts applied through projects, internship experience, security labs, and continuous learning.",
    icon: "ShieldAlert",
    technologies: [
      "Kali Linux",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "OWASP Top 10",
      "Packet Tracer",
      "OSINT",
      "Network Security",
      "Digital Forensics",
      "Reconnaissance",
      "Enumeration",
      "Web Security",
      "Threat Analysis",
    ],
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description:
      "Backend technologies used for building secure APIs, modular architectures, and scalable engineering projects.",
    icon: "Server",
    technologies: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "JWT Authentication",
      "Python Backend Development",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Database systems used for structured storage, backend development, authentication, and project data management.",
    icon: "Database",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "Firebase", "XAMPP"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Modern frontend technologies used to build responsive, accessible, and high-performance user interfaces.",
    icon: "Layout",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "shadcn/ui",
      "Responsive Design",
    ],
  },
  {
    id: "devops-development",
    title: "DevOps & Development",
    description:
      "Development tools supporting version control, virtualization, deployment, and engineering workflows.",
    icon: "Cloud",
    technologies: ["Git", "GitHub", "Docker", "Linux", "Nginx", "VirtualBox", "VS Code"],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Technologies explored while integrating artificial intelligence into engineering workflows and cybersecurity applications.",
    icon: "BrainCircuit",
    technologies: [
      "OpenAI API",
      "Prompt Engineering",
      "LLM Integration",
      "Ollama",
      "AI-assisted Development",
    ],
  },
];
