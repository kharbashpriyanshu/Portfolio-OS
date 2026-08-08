import { ProjectData } from "./types";

export const PROJECTS_CONFIG = {
  heading: "Engineering Projects",
  label: "FLAGSHIP WORK",
  introduction:
    "A collection of engineering projects built to strengthen practical cybersecurity knowledge through secure software development, automation, detection engineering, and real-world problem solving.",
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "logsentry",
    title: "LogSentry",
    tagline: "AI-powered Security Information and Event Management Platform",
    category: "Security Engineering",
    status: "Completed",
    featured: true,
    overview:
      "LogSentry is a modular SIEM platform designed to centralize log analysis, automate threat detection, and assist security analysts using AI-driven investigations.\n\nThe project was developed to understand how modern SOC platforms collect, normalize, analyze, and visualize security events while maintaining a secure and scalable architecture.",
    problem:
      "Security analysts often spend significant time manually investigating logs from multiple sources.\n\nLogSentry explores how centralized log collection, detection rules, AI-assisted analysis, and threat intelligence can simplify incident investigation.",
    features: [
      "Modular log ingestion",
      "Detection Engine",
      "Threat Intelligence",
      "AI SOC Analyst",
      "REST API",
      "Interactive Dashboard",
      "Reporting Engine",
    ],
    engineeringDecisions: [
      "Designed with modular architecture to separate ingestion, detection, enrichment, reporting, and presentation layers.",
      "FastAPI was selected for backend development because of its performance, asynchronous capabilities, and excellent API ecosystem.",
    ],
    securityConsiderations: [
      "Input validation",
      "Secure API architecture",
      "Configuration isolation",
      "Production security headers",
      "Request size limiting",
    ],
    lessonsLearned: [
      "Building security software requires balancing performance, modularity, maintainability, and usability while keeping the system extensible for future integrations.",
    ],
    github: "https://github.com/kharbashpriyanshu/LogSentry",
    technologies: ["FastAPI", "Python", "React", "Docker", "PostgreSQL", "AI"],
  },
  {
    id: "portintel",
    title: "PortIntel",
    tagline: "Intelligent Network Reconnaissance Framework",
    category: "Network Security",
    status: "Completed",
    featured: true,
    overview:
      "PortIntel is a Python-based reconnaissance framework created to strengthen practical networking knowledge through intelligent host discovery, service identification, and vulnerability intelligence.",
    problem:
      "Traditional scanning tools provide raw information but often require additional manual investigation.\n\nPortIntel combines reconnaissance, fingerprinting, vulnerability lookup, and reporting into a unified workflow.",
    features: [
      "TCP Scanning",
      "UDP Scanning",
      "Banner Grabbing",
      "Service Fingerprinting",
      "JSON Reporting",
      "NVD Integration",
    ],
    engineeringDecisions: [
      "Designed using a modular architecture to allow scanners, fingerprinting engines, reporting modules, and intelligence modules to evolve independently.",
    ],
    securityConsiderations: [
      "Safe timeout handling",
      "Controlled concurrency",
      "Input validation",
      "Reliable error handling",
    ],
    lessonsLearned: [
      "Practical network security requires understanding protocols, services, operating systems, and structured reporting rather than simply scanning ports.",
    ],
    github: "https://github.com/kharbashpriyanshu/PortIntel",
    technologies: ["Python", "NVD API", "Network Protocols", "Security Tooling"],
  },
  {
    id: "academic-hub",
    title: "Academic Resource Hub",
    tagline: "Centralized Academic Collaboration Platform",
    category: "Full Stack Development",
    status: "Completed",
    featured: true,
    overview:
      "Academic Resource Hub was developed to simplify academic collaboration by providing a centralized platform where students can organize and access educational resources efficiently.",
    problem:
      "Students often rely on fragmented communication channels and disconnected storage locations.\n\nThis project centralizes learning resources into a structured platform.",
    features: [
      "Resource Management",
      "Authentication",
      "Role-based Access",
      "Backend APIs",
      "Document Organization",
    ],
    engineeringDecisions: [
      "Built using a modular backend architecture emphasizing maintainability and scalability.",
    ],
    securityConsiderations: [
      "Authentication",
      "Authorization",
      "Input Validation",
      "Secure API Design",
    ],
    lessonsLearned: [
      "Building collaborative platforms requires balancing usability, scalability, and secure access control.",
    ],
    github: "https://github.com/kharbashpriyanshu/Academic-Resource-Hub",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Authentication"],
  },
  {
    id: "tracezero",
    title: "TraceZero",
    tagline: "Windows Privacy & Cleanup Utility",
    category: "System Utilities",
    status: "Completed",
    featured: false,
    overview:
      "TraceZero is a Windows utility designed to automate temporary file cleanup and improve user privacy through safe system maintenance operations.",
    problem:
      "Routine system cleanup is repetitive and often overlooked.\n\nTraceZero automates common maintenance tasks while providing a safer user experience.",
    features: [
      "Temporary File Cleanup",
      "Privacy Cleanup",
      "Simple User Interface",
      "Safe Operations",
    ],
    engineeringDecisions: [],
    securityConsiderations: [],
    lessonsLearned: [
      "Desktop application development requires balancing simplicity, usability, and system safety.",
    ],
    github: "https://github.com/kharbashpriyanshu/TraceZero",
    technologies: ["Windows API", "System Utilities", "Desktop Development"],
  },
  {
    id: "portfolio-os",
    title: "Portfolio Website",
    tagline: "Configuration-Driven Personal Engineering Portfolio",
    category: "Software Engineering",
    status: "Completed",
    featured: true,
    overview:
      "This portfolio itself is treated as a software engineering project.\n\nRather than building a traditional static portfolio, the application demonstrates component-driven architecture, configuration-first design, responsive engineering, accessibility, performance optimization, and production deployment practices.",
    problem:
      "Standard portfolios fail to effectively demonstrate deep technical capability, architecture decisions, and code-level expertise expected of a security engineer.",
    features: [
      "Configuration-driven architecture",
      "Theme System",
      "Interactive Terminal",
      "Knowledge Base Integration",
      "Project Command Center",
      "Performance Optimization",
    ],
    engineeringDecisions: [
      "Single Source of Truth configuration",
      "React 19",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
      "Component isolation",
      "Lazy loading",
    ],
    securityConsiderations: [],
    lessonsLearned: [
      "Even a personal portfolio should demonstrate software engineering principles, maintainability, accessibility, and production readiness.",
    ],
    github: "https://github.com/kharbashpriyanshu/Portfolio-OS",
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
