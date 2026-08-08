import { ProjectData } from "./types";

export const PROJECTS_CONFIG = {
  heading: "Projects Command Center",
  label: "FLAGSHIP WORK",
  introduction:
    "A centralized view of production-grade systems engineered to solve real-world problems in cybersecurity, software development, and automation. Use the dashboard controls to filter and examine technical implementations.",
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "logsentry",
    title: "LogSentry",
    tagline: "Commercial-Grade SIEM & Detection Engine",
    category: "Cybersecurity",
    status: "Completed",
    featured: true,
    problem:
      "Security teams face alert fatigue from high-volume, unstructured log streams, leading to delayed incident triage and manual bottleneck analysis.",
    architecture: [
      { layer: "Ingestion", technologies: ["Raw Log Stream", "Normalizer Engine"] },
      { layer: "Analysis", technologies: ["Gemini REST Analyzer"] },
      { layer: "Presentation", technologies: ["SOC Triage Dashboard"] },
    ],
    screenshots: [],
    engineeringDecisions: [
      "Chose a clean REST client over a monolithic SDK to minimize bundle size and prevent unhandled promise rejections.",
      "Implemented a read-only integration status monitor so analysts can debug provider configs without exposing secret keys.",
    ],
    challenges: [
      "Migrating from an unconfigured AI provider stub to an authenticated Gemini REST implementation without breaking UI contracts.",
      "Preventing silent UI failures during API rate-limiting or network timeouts via custom fallback decorators.",
    ],
    securityConsiderations: [
      "Zero-trust API key isolation via serverless environment variable boundary.",
      "Read-only Integration Status monitor without exposing sensitive credentials.",
    ],
    lessonsLearned: [
      "Enforcing strict separation between provider credentials and client bundles is essential for zero-trust UI architectures.",
      "Structured error boundary handling drastically improves analyst UX during incident response surges.",
    ],
    futureRoadmap: [
      "Multi-provider LLM failover routing with automated latency benchmarking.",
      "SIEM webhook ingestion for Splunk and ElasticSearch pipelines.",
    ],
    github: "https://github.com/kharbashpriyanshu/LogSentry",
    technologies: ["FastAPI", "React", "Docker", "PostgreSQL", "Gemini REST API"],
    timeline: { start: "2024" },
    impact: ["116 Tests Passed", "Automated log normalization and real-time anomaly flagging"],
    metrics: [],
  },
  {
    id: "portintel",
    title: "PortIntel",
    tagline: "Automated Reconnaissance Platform",
    category: "Cybersecurity",
    status: "Completed",
    featured: true,
    problem:
      "Legacy reconnaissance scripts lack standardized vulnerability scoring, suffer from NVD rate-limiting failures, and generate unstructured reports that complicate VAPT audits.",
    architecture: [
      { layer: "Discovery", technologies: ["Asset Discovery", "CPE Resolution Engine"] },
      { layer: "Intelligence", technologies: ["NVD Threat Intel API", "CVSS v3.1 Risk Report"] },
    ],
    screenshots: [],
    engineeringDecisions: [
      "Implemented exponential backoff with randomized jitter to handle NVD API rate limits without dropping scans.",
      "Standardized all risk reporting to CVSS v3.1 vectors so security teams can directly import results into VAPT audit reports.",
    ],
    challenges: [
      "Handling upstream NVD API rate limits and connection drops without aborting long-running reconnaissance scans.",
      "Eliminating tracked cache artifacts and standardizing modular package layouts across diverse test environments.",
    ],
    securityConsiderations: [
      "Authenticated NVD threat intelligence client to ensure trusted data sources.",
    ],
    lessonsLearned: [
      "Exponential backoff with randomized jitter is mandatory for reliable integration with external CVE threat intelligence APIs.",
      "Rigorous static analysis and test automation prevent security regressions during repository consolidation.",
    ],
    futureRoadmap: [
      "Automated vulnerability remediation ticket export for Jira and Linear.",
      "Real-time CVE feed streaming with webhook notifications.",
    ],
    github: "https://github.com/kharbashpriyanshu/PortIntel",
    technologies: ["Python", "NVD REST API", "Pytest"],
    timeline: { start: "2024" },
    impact: [
      "Scanning Engine",
      "CVE Correlation",
      "NVD integration",
      "Standardized CVSS v3.1 risk scoring",
      "45-test regression suite verified",
    ],
    metrics: [],
  },
  {
    id: "academic-hub",
    title: "Academic Resource Hub",
    tagline: "Secure AI-Powered Educational Platform",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    problem:
      "Needed a full-stack academic resource platform for Rashtriya Raksha University enabling secure sharing and management of academic resources.",
    architecture: [
      { layer: "Frontend", technologies: ["React"] },
      { layer: "Backend", technologies: ["Node.js", "Express.js", "Socket.IO"] },
      { layer: "Database", technologies: ["PostgreSQL", "Supabase", "Cloudinary"] },
      { layer: "AI & Processing", technologies: ["Gemini AI", "Llama", "OCR"] },
    ],
    screenshots: [],
    engineeringDecisions: [
      "Implemented AI-powered PDF summarization and OCR-based text extraction.",
      "Developed contextual chatbot functionality using Gemini and Llama models to enhance resource accessibility.",
    ],
    challenges: [
      "Implementing real-time notification and communication features securely.",
      "Collaborating within a multidisciplinary development team.",
    ],
    securityConsiderations: [
      "Assisted in implementing Role-Based Access Control (RBAC), administrative dashboards, and resource verification workflows to strengthen platform security.",
    ],
    lessonsLearned: [
      "Gained hands-on experience integrating generative AI models (Gemini/Llama) with secure backend architectures.",
    ],
    futureRoadmap: ["Expand AI capabilities for automated quiz generation from resources."],
    github: "https://github.com/kharbashpriyanshu/Academic-Resource-Hub",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Socket.IO",
      "Gemini AI",
      "OCR",
      "Cloudinary",
    ],
    timeline: { start: "2024" },
    impact: [
      "AI-powered PDF summarization",
      "OCR text extraction",
      "Contextual chatbot integration",
    ],
    metrics: [],
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    tagline: "Engineering Portfolio Architecture",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    problem:
      "Standard portfolios fail to effectively demonstrate deep technical capability, architecture decisions, and code-level expertise expected of a security engineer.",
    architecture: [
      { layer: "Frontend", technologies: ["React 19", "Vite"] },
      { layer: "Typing & Config", technologies: ["TypeScript Data Layer"] },
      { layer: "Styling", technologies: ["Tailwind CSS", "Framer Motion"] },
    ],
    screenshots: [],
    engineeringDecisions: [
      "Enforced strict separation between the data layer and the UI layer to allow content updates without touching component logic.",
      "Implemented React.lazy loading for heavy sections to optimize First Contentful Paint (FCP).",
    ],
    challenges: [
      "Maintaining synchronized animations (Framer Motion) across dynamically rendered layout transitions without causing jank.",
    ],
    securityConsiderations: [
      "Automated pre-commit linting (Husky) and strict type checking to ensure codebase integrity and prevent regressions.",
    ],
    lessonsLearned: [
      "Strict type boundaries and configuration files drastically reduce maintenance overhead and UI bugs during content audits.",
    ],
    futureRoadmap: [
      "Automated deployment pipelines (CI/CD) and GitHub contribution graph integration.",
    ],
    github: "https://github.com/kharbashpriyanshu/Portfolio-OS",
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: { start: "Aug 2026" },
    impact: [
      "Configuration-driven UI",
      "Fully responsive Neon Cyberpunk Design System",
      "SEO Optimized & Accessible",
    ],
    metrics: [],
  },
];
