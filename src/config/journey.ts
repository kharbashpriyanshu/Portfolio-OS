export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  lessonLearned: string;
  technologies: string[];
  highlight?: boolean;
}

/**
 * Immutable engineering milestones configuration for Portfolio OS v1.0.
 * Structured strictly into Problem, Solution, Lesson Learned, and Technology Stack
 * for maximum scanability and rapid recruiter comprehension.
 */
export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "journey-1",
    year: "Year 1",
    title: "Linux Foundations & Systems Programming",
    category: "Foundation",
    problem:
      "Modern application developers often rely on high-level frameworks without understanding low-level OS primitives, networking stacks, or kernel boundaries.",
    solution:
      "Mastered Linux POSIX systems, Bash scripting, and TCP/IP networking, configuring hardened server environments from the command line.",
    lessonLearned:
      "Security starts at the operating system layer; unhardened kernel defaults create vulnerabilities no application firewall can fix.",
    technologies: ["Linux (POSIX)", "Bash Scripting", "TCP/IP Stack", "Kernel Ergonomics"],
  },
  {
    id: "journey-2",
    year: "Year 2",
    title: "Python Systems Automation & AppSec",
    category: "Core Systems",
    problem:
      "Manual security auditing and ad-hoc penetration scripts fail to scale and leave undiscovered vulnerabilities in production APIs.",
    solution:
      "Built automated vulnerability scanners and modular security test suites using Python and Pytest with strict regression verification.",
    lessonLearned:
      "Automated testing and continuous integration are the most reliable defenses against security regressions.",
    technologies: ["Python 3", "Pytest", "REST APIs", "Socket Programming"],
  },
  {
    id: "journey-3",
    year: "Year 2+",
    title: "PortIntel v2.0 — VAPT Reconnaissance Engine",
    category: "VAPT Intelligence",
    problem:
      "Reconnaissance scripts suffer from NVD API rate-limiting and generate unstructured output that slows down formal VAPT audits.",
    solution:
      "Engineered an authenticated NVD threat intelligence client with exponential backoff, CPE matching, and CVSS v3.1 risk reporting—verified by 45 unit tests.",
    lessonLearned:
      "Exponential backoff with randomized jitter is mandatory for resilient integrations with external CVE threat feeds.",
    technologies: ["Python", "CVSS v3.1", "NVD REST API", "CPE Resolution", "Pytest"],
    highlight: true,
  },
  {
    id: "journey-4",
    year: "Year 3",
    title: "LogSentry v1.0 — AI-Powered SOC Response",
    category: "AI Security",
    problem:
      "Security Operations Centers suffer from alert fatigue when reviewing high-volume, unstructured log streams during active incidents.",
    solution:
      "Built a real-time log ingestion platform integrated with Gemini REST APIs, implementing zero-trust API boundaries and automated remediation playbooks.",
    lessonLearned:
      "Zero-trust credential isolation and graceful UI fallback routines are essential for keeping SOC tools operational during outages.",
    technologies: ["TypeScript", "React 19", "Gemini REST", "Tailwind CSS", "Dependency Injection"],
    highlight: true,
  },
  {
    id: "journey-5",
    year: "Current",
    title: "VisionShield X — AI Visual Forensics",
    category: "Active Development",
    problem:
      "Visual forensics analysts lack real-time tools to detect synthetic image manipulation and verify evidence integrity on edge devices.",
    solution:
      "Architecting a modular visual forensics engine combining edge-ready AI inference with zero-trust RPC communication and cryptographic audit trails.",
    lessonLearned:
      "Decoupling heavy AI visual inference from the analyst HUD prevents UI freezing and ensures low-latency inspection.",
    technologies: ["AI Visual Forensics", "Python", "TypeScript", "React 19", "Zero-Trust RPC"],
  },
  {
    id: "journey-6",
    year: "Horizon",
    title: "AI Security Engineer",
    category: "Career Horizon",
    problem:
      "As cyber threats adopt AI-driven automation, static human-only SOC triage cannot match the speed of autonomous attacks.",
    solution:
      "Developing self-healing enterprise architectures that autonomously detect, contain, and remediate zero-day threats in real time.",
    lessonLearned:
      "The future of cybersecurity lies in asymmetric defense—using automated intelligence to outpace automated attacks.",
    technologies: [
      "Autonomous Defense",
      "Self-Healing Systems",
      "Threat Intelligence",
      "AI Safety",
    ],
  },
];

export default JOURNEY_MILESTONES;
