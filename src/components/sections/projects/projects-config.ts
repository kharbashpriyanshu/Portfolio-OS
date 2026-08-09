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
    tagline: "AI-powered Security Information and Event Management (SIEM) Platform",
    category: "Security Engineering",
    status: "Completed",
    featured: true,
    overview:
      "LogSentry is a modular Security Information and Event Management (SIEM) platform developed to understand how modern Security Operations Centers (SOCs) collect, process, analyze, enrich, and visualize security events.\n\nRather than replicating existing enterprise SIEM products, the project was designed as a practical engineering exercise to explore secure software architecture, detection engineering, AI-assisted security analysis, threat intelligence integration, and production-ready backend development.\n\nThe project emphasizes maintainability, modularity, scalability, and security-first engineering principles.",
    problem:
      "Security analysts often investigate logs originating from multiple systems, requiring repetitive manual analysis before determining whether an event represents suspicious activity.\n\nThe objective of LogSentry was to understand how a modern SIEM platform can centralize log processing, automate detection, enrich events with threat intelligence, and assist analysts through AI-generated investigations.",
    objectives: [
      "Understand SIEM architecture",
      "Learn Detection Engineering",
      "Explore Threat Intelligence integration",
      "Design modular backend architecture",
      "Build secure REST APIs",
      "Practice production-ready software engineering",
    ],
    features: [],
    coreModules: [
      {
        name: "Log Parsing Engine",
        description: "Parses structured security logs from supported sources.",
      },
      {
        name: "Detection Engine",
        description: "Analyzes events using modular detection rules and generates security alerts.",
      },
      {
        name: "Threat Intelligence",
        description:
          "Enriches indicators using external intelligence sources and MITRE ATT&CK mappings.",
      },
      {
        name: "AI SOC Analyst",
        description:
          "Provides AI-assisted explanations of alerts to improve analyst understanding.",
      },
      {
        name: "Reporting",
        description: "Generates structured investigation summaries and security reports.",
      },
    ],
    architecture: [
      { layer: "Frontend Dashboard", technologies: [] },
      { layer: "FastAPI Backend", technologies: [] },
      { layer: "Detection Engine", technologies: [] },
      { layer: "Threat Intelligence Engine", technologies: [] },
      { layer: "AI SOC Analyst", technologies: [] },
      { layer: "Reporting Engine", technologies: [] },
      { layer: "PostgreSQL / Storage Layer", technologies: [] },
    ],
    architectureDescription:
      "Each subsystem is independently modular to simplify future expansion and maintenance.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "Git",
    ],
    engineeringDecisions: [
      "FastAPI: Selected for asynchronous request handling, automatic API documentation, and strong type validation.",
      "Modular Architecture: Each subsystem was isolated to improve maintainability and simplify future feature expansion.",
      "Configuration-driven Design: Environment variables and configuration files separate deployment settings from application logic.",
      "React Dashboard: Provides a responsive interface while keeping presentation independent from backend services.",
    ],
    securityConsiderations: [
      "Input validation",
      "Structured exception handling",
      "Security headers",
      "Request size limits",
      "Configuration isolation",
      "Sensitive information redaction",
      "Secure API design",
      "Production-ready middleware",
    ],
    testing: [
      "Unit testing",
      "Backend validation",
      "Frontend compilation",
      "Type checking",
      "Production readiness verification",
      "Comprehensive engineering validation before deployment.",
    ],
    challenges: [
      "Designing a modular architecture that remained maintainable while integrating multiple independent security components.",
      "Balancing extensibility with simplicity during backend development.",
      "Maintaining clean interfaces between detection, enrichment, reporting, and presentation layers.",
    ],
    lessonsLearned: [
      "Building security software extends beyond writing detection logic.",
      "It requires thoughtful architecture, secure development practices, documentation, testing, modularity, and maintainability.",
      "The project reinforced the importance of designing systems that remain understandable and extensible as complexity increases.",
    ],
    futureImprovements: [
      "Support additional log sources",
      "Real-time streaming ingestion",
      "Role-based authentication",
      "Advanced detection rules",
      "Threat hunting workflows",
      "Cloud-native deployment",
      "Expanded threat intelligence integrations",
    ],
    github: "https://github.com/kharbashpriyanshu/LogSentry",
  },
  {
    id: "portintel",
    title: "PortIntel",
    tagline: "Intelligent Network Reconnaissance & Service Enumeration Framework",
    category: "Network Security",
    status: "Completed",
    featured: true,
    overview:
      "PortIntel is a Python-based network reconnaissance framework developed to strengthen practical networking and cybersecurity knowledge through intelligent host discovery, service identification, fingerprinting, and structured reporting.\n\nRather than acting as a simple port scanner, PortIntel was designed to explore how modern reconnaissance workflows combine host discovery, protocol analysis, service fingerprinting, vulnerability intelligence, and reporting into a structured engineering process.\n\nThe project emphasizes modular software architecture, reliability, maintainability, and practical network analysis.",
    problem:
      "Network reconnaissance is one of the earliest stages of both security assessments and defensive network analysis.\n\nTraditional tools often provide raw scan results that require manual interpretation.\n\nPortIntel was developed to understand how reconnaissance data can be collected, enriched, organized, and reported in a structured and extensible manner.",
    objectives: [
      "Learn practical networking",
      "Understand TCP/IP behavior",
      "Explore service fingerprinting",
      "Build modular scanning architecture",
      "Practice Python network programming",
      "Generate structured security reports",
    ],
    features: [],
    coreModules: [
      {
        name: "Host Discovery",
        description: "Discovers reachable systems before active enumeration.",
      },
      { name: "TCP Scanner", description: "Identifies open TCP services." },
      { name: "UDP Scanner", description: "Performs UDP-based service discovery." },
      {
        name: "Banner Grabbing",
        description: "Collects service banners for protocol identification.",
      },
      {
        name: "Fingerprint Engine",
        description: "Attempts service identification using collected banners.",
      },
      {
        name: "Threat Intelligence",
        description:
          "Maps discovered software versions to publicly available vulnerability information where applicable.",
      },
      { name: "Reporting", description: "Exports structured scan results for later analysis." },
    ],
    architecture: [
      { layer: "CLI Interface", technologies: [] },
      { layer: "Discovery Engine", technologies: [] },
      { layer: "TCP Scanner", technologies: [] },
      { layer: "UDP Scanner", technologies: [] },
      { layer: "Banner Grabbing", technologies: [] },
      { layer: "Service Fingerprinting", technologies: [] },
      { layer: "Threat Intelligence Lookup", technologies: [] },
      { layer: "Reporting Engine", technologies: [] },
    ],
    architectureDescription:
      "Each module is isolated to simplify maintenance, testing, and future feature expansion.",
    technologies: [
      "Python",
      "Socket Programming",
      "Threading",
      "JSON",
      "Requests",
      "NVD API",
      "Git",
    ],
    engineeringDecisions: [
      "Python: Selected for rapid development, strong networking libraries, and readability.",
      "Modular Scanner Design: Scanning, fingerprinting, reporting, and intelligence were separated into independent modules to improve maintainability.",
      "Structured JSON Reporting: Chosen to simplify future integrations and automated processing.",
    ],
    securityConsiderations: [
      "Input validation",
      "Safe timeout handling",
      "Controlled concurrency",
      "Reliable exception handling",
      "Graceful connection management",
    ],
    testing: [
      "Local network testing",
      "Multiple host scanning",
      "Banner validation",
      "Report validation",
      "Error handling verification",
    ],
    challenges: [
      "Balancing scan speed with reliability while preventing excessive false negatives caused by aggressive timeout values.",
      "Designing a modular framework capable of supporting future protocol extensions without major architectural changes.",
    ],
    lessonsLearned: [
      "Network reconnaissance is significantly more than identifying open ports.",
      "Reliable security tooling requires structured engineering, modular architecture, accurate reporting, protocol understanding, and maintainable code.",
    ],
    futureImprovements: [
      "IPv6 support",
      "OS fingerprinting",
      "Parallel scanning optimization",
      "Plugin architecture",
      "HTML reporting",
      "Additional protocol support",
    ],
    github: "https://github.com/kharbashpriyanshu/Port_Intel",
  },
  {
    id: "academic-hub",
    title: "Academic Resource Hub",
    tagline: "Centralized Academic Collaboration & Resource Management Platform",
    category: "Full Stack Development",
    status: "Completed",
    featured: true,
    overview:
      "Academic Resource Hub is a full-stack web platform developed to simplify the way students access, organize, and share academic resources.\n\nThe project was designed to solve the common problem of fragmented educational material spread across multiple messaging groups, cloud storage platforms, and personal devices.\n\nBy centralizing academic content into a structured platform, the application demonstrates backend engineering, authentication, database management, and scalable software architecture.",
    problem:
      "Students frequently lose time searching for notes, previous papers, assignments, and study resources because information is distributed across numerous communication channels.\n\nThe objective of Academic Resource Hub was to centralize academic resources into a secure, organized, and maintainable platform that improves accessibility and collaboration.",
    objectives: [
      "Centralize educational resources",
      "Build secure user authentication",
      "Practice backend API development",
      "Learn database-driven applications",
      "Develop scalable web architecture",
      "Improve resource organization",
    ],
    features: [],
    coreModules: [
      { name: "User Authentication", description: "Provides secure access to the platform." },
      {
        name: "Resource Management",
        description: "Allows educational resources to be organized and accessed efficiently.",
      },
      {
        name: "Role-based Access",
        description: "Supports controlled access based on user permissions.",
      },
      {
        name: "Backend API",
        description: "Handles requests between the frontend and the database.",
      },
      { name: "Database", description: "Stores structured academic information." },
    ],
    architecture: [
      { layer: "Frontend", technologies: [] },
      { layer: "Authentication Layer", technologies: [] },
      { layer: "FastAPI Backend", technologies: [] },
      { layer: "Business Logic", technologies: [] },
      { layer: "Database Layer", technologies: [] },
      { layer: "Storage", technologies: [] },
    ],
    architectureDescription:
      "Each layer is separated to improve maintainability, scalability, and future feature expansion.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
    engineeringDecisions: [
      "FastAPI: Selected for its clean architecture, automatic API documentation, and scalability.",
      "Relational Database: Chosen to organize structured academic resources efficiently.",
      "Modular Backend: Separated authentication, business logic, and persistence into independent layers.",
    ],
    securityConsiderations: [
      "Authentication",
      "Authorization",
      "Input Validation",
      "Secure API Design",
      "Database Integrity",
    ],
    testing: [
      "Authentication testing",
      "API validation",
      "Database verification",
      "Role-based access testing",
      "Input validation testing",
    ],
    challenges: [
      "Designing an application capable of organizing multiple resource types while maintaining a clean and scalable architecture.",
      "Balancing usability with secure access control.",
    ],
    lessonsLearned: [
      "Developing collaborative platforms requires careful attention to authentication, authorization, data organization, backend architecture, and long-term maintainability.",
    ],
    futureImprovements: [
      "Advanced search",
      "Resource tagging",
      "Notifications",
      "AI-powered summarization",
      "Analytics Dashboard",
      "Mobile application",
    ],
    github: "https://github.com/kanwal-vyas/Academic-Resource-Hub",
  },
  {
    id: "tracezero",
    title: "TraceZero",
    tagline: "Windows Privacy & System Cleanup Utility",
    category: "System Utilities",
    status: "Completed",
    featured: false,
    overview:
      "TraceZero is a Windows desktop utility developed to simplify routine system cleanup and improve user privacy by automating common maintenance operations.\n\nThe project was created to explore desktop application development, system utilities, file management, and safe automation while maintaining a clean and user-friendly interface.\n\nRather than focusing on advanced cybersecurity functionality, TraceZero demonstrates practical software engineering through responsible system maintenance and usability.",
    problem:
      "Temporary files, cached data, and other residual system artifacts accumulate over time, affecting storage efficiency and leaving unnecessary traces of user activity.\n\nTraceZero was developed to automate common cleanup tasks while maintaining predictable and safe behavior.",
    objectives: [
      "Learn desktop application development",
      "Explore Windows file management",
      "Practice safe automation",
      "Build an intuitive user interface",
      "Improve understanding of system utilities",
    ],
    features: [],
    coreModules: [
      {
        name: "User Interface",
        description: "Provides a simple interface for executing maintenance tasks.",
      },
      { name: "Cleanup Engine", description: "Coordinates cleanup operations." },
      {
        name: "File Operations",
        description: "Safely identifies and removes temporary files where appropriate.",
      },
      {
        name: "Application Logic",
        description: "Separates interface behavior from cleanup functionality.",
      },
    ],
    architecture: [
      { layer: "Desktop User Interface", technologies: [] },
      { layer: "Application Controller", technologies: [] },
      { layer: "Cleanup Engine", technologies: [] },
      { layer: "File System Operations", technologies: [] },
      { layer: "Windows Operating System", technologies: [] },
    ],
    architectureDescription:
      "Each component has a single responsibility, making the application easier to maintain and extend.",
    technologies: ["Python", "PyQt6", "SQLite", "Windows API", "Git"],
    engineeringDecisions: [
      "PyQt6: Selected for building a responsive cross-platform desktop interface.",
      "Modular Design: Separated cleanup logic from the graphical interface to improve maintainability.",
      "SQLite: Used for lightweight local configuration and application data where appropriate.",
    ],
    securityConsiderations: [
      "Safe file handling",
      "Controlled cleanup operations",
      "Error handling",
      "Confirmation before destructive actions",
    ],
    testing: [
      "UI testing",
      "Cleanup workflow verification",
      "Error handling validation",
      "Basic Windows compatibility testing",
    ],
    challenges: [
      "Balancing automation with user safety while preventing accidental deletion of important files.",
    ],
    lessonsLearned: [
      "Desktop utilities require careful consideration of user experience, system safety, and predictable behavior in addition to technical implementation.",
    ],
    futureImprovements: [
      "Additional cleanup modules",
      "Scheduled maintenance",
      "User profiles",
      "System health reporting",
      "Plugin support",
    ],
    github: "https://github.com/kharbashpriyanshu/TraceZero",
  },
];
