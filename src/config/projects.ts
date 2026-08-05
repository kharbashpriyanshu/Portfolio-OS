import { SOCIAL_LINKS } from "@/config/navigation";

export interface PreviewSchematic {
  architectureTitle: string;
  nodeSequence: string[];
  statusText: string;
  codeSnippet?: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  category:
    "AI Security Platform" | "Network Intelligence Framework" | "AI Visual Forensics Platform";
  summary: string;
  problemStatement: string;
  whyInsufficient: string;
  engineeringSolution: string;
  technologies: string[];
  architectureHighlights: string[];
  engineeringDecisions: string[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  lessonsLearned: string[];
  futureRoadmap: string[];
  githubUrl: string;
  caseStudyUrl: string;
  demoUrl?: string;
  previewSchematic: PreviewSchematic;
}

/**
 * Immutable engineering case study configuration for Portfolio OS v1.0.
 * Adheres strictly to truthful storytelling; uses "TBD – To be completed by project owner"
 * for unverified metrics, achievements, or placeholders.
 */
export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "case-study-logsentry",
    name: "LogSentry",
    category: "AI Security Platform",
    summary:
      "An AI-powered SOC incident response platform that ingests live logs, runs Gemini REST log analysis, and verifies API health without exposing secret keys.",
    problemStatement:
      "Security teams face alert fatigue from high-volume, unstructured log streams, leading to delayed incident triage and manual bottleneck analysis.",
    whyInsufficient:
      "Existing open-source log tools either require heavy cloud agents with high licensing fees or fail to provide AI-driven triage playbooks that work during network rate-limits.",
    engineeringSolution:
      "Built a real-time log ingestion engine integrated with Google Gemini via REST APIs, implementing zero-trust state isolation, automated triage playbooks, and graceful UI degradation when external providers are offline.",
    technologies: [
      "TypeScript",
      "React 19",
      "Gemini REST API",
      "Tailwind CSS",
      "Dependency Injection",
      "Vite",
    ],
    architectureHighlights: [
      "Zero-trust API key isolation via serverless environment variable boundary",
      "Read-only Integration Status monitor without exposing sensitive provider credentials",
      "Dependency injection service container for decoupled logger and provider routing",
      "Graceful UI fallback routines when upstream LLM endpoints experience latency",
    ],
    engineeringDecisions: [
      "Chose a clean REST client over a monolithic SDK to minimize bundle size and prevent unhandled promise rejections.",
      "Implemented a read-only integration status monitor so analysts can debug provider configs without exposing secret keys.",
    ],
    keyFeatures: [
      "Automated log normalization and real-time anomaly flagging",
      "AI-driven incident remediation playbook recommendations",
      "Reproducible SOC demonstration walkthrough guides",
      "TBD – Quantitative MTTR reduction metrics to be completed by project owner",
    ],
    engineeringChallenges: [
      "Migrating from an unconfigured AI provider stub to an authenticated Gemini REST implementation without breaking UI contracts.",
      "Preventing silent UI failures during API rate-limiting or network timeouts via custom fallback decorators.",
    ],
    lessonsLearned: [
      "Enforcing strict separation between provider credentials and client bundles is essential for zero-trust UI architectures.",
      "Structured error boundary handling drastically improves analyst UX during incident response surges.",
    ],
    futureRoadmap: [
      "Multi-provider LLM failover routing with automated latency benchmarking",
      "SIEM webhook ingestion for Splunk and ElasticSearch pipelines",
      "TBD – Enterprise compliance certifications to be completed by project owner",
    ],
    githubUrl: `${SOCIAL_LINKS.github}/LogSentry`,
    caseStudyUrl: "#projects",
    demoUrl: "#projects",
    previewSchematic: {
      architectureTitle: "LogSentry AI Triage Pipeline",
      nodeSequence: [
        "Raw Log Stream",
        "Normalizer Engine",
        "Gemini REST Analyzer",
        "SOC Triage Dashboard",
      ],
      statusText: "SYSTEM: INTEGRATED // PROVIDER: GEMINI REST",
      codeSnippet: `// Gemini Log Analysis Payload Pipeline
const analysisPayload = {
  model: "gemini-1.5-pro",
  log_batch_id: "SOC-LOG-8841",
  security_context: "ZERO_TRUST_READ_ONLY",
  fallback_policy: "GRACEFUL_DEGRADATION"
};`,
    },
  },
  {
    id: "case-study-portintel",
    name: "PortIntel",
    category: "Network Intelligence Framework",
    summary:
      "A professional reconnaissance & VAPT intelligence framework featuring NVD-authenticated threat feeds, CPE resolution, and CVSS v3.1 standard risk metrics.",
    problemStatement:
      "Legacy reconnaissance scripts lack standardized vulnerability scoring, suffer from NVD rate-limiting failures, and generate unstructured reports that complicate VAPT audits.",
    whyInsufficient:
      "Ad-hoc bash scanners and unmaintained Python wrappers crash during long-running network scans when CVE APIs rate-limit requests.",
    engineeringSolution:
      "Engineered a resilient reconnaissance platform with an authenticated NVD threat intelligence provider, exponential backoff retries, structured JSON data parsing, and a 45-test regression suite.",
    technologies: [
      "Python 3",
      "CPE Resolution Engine",
      "CVSS v3.1",
      "NVD REST API",
      "Pytest",
      "Clean Architecture",
    ],
    architectureHighlights: [
      "Authenticated NVD threat intelligence client with exponential backoff & jitter",
      "Automated CPE (Common Platform Enumeration) matching for asset discovery",
      "Standardized CVSS v3.1 risk scoring with explicit exposure concern annotations",
      "Consolidated modular package structure verified by a 45-test suite",
    ],
    engineeringDecisions: [
      "Implemented exponential backoff with randomized jitter to handle NVD API rate limits without dropping scans.",
      "Standardized all risk reporting to CVSS v3.1 vectors so security teams can directly import results into VAPT audit reports.",
    ],
    keyFeatures: [
      "Automated network asset vulnerability correlation",
      "Industry-standard CVSS v3.1 severity classification and vector string generation",
      "Formal VAPT laboratory assessment report integration",
      "TBD – Field deployment benchmark scores to be completed by project owner",
    ],
    engineeringChallenges: [
      "Handling upstream NVD API rate limits and connection drops without aborting long-running reconnaissance scans.",
      "Eliminating tracked cache artifacts and standardizing modular package layouts across diverse Windows and Linux test environments.",
    ],
    lessonsLearned: [
      "Exponential backoff with randomized jitter is mandatory for reliable integration with external CVE threat intelligence APIs.",
      "Rigorous static analysis and test automation prevent security regressions during repository consolidation.",
    ],
    futureRoadmap: [
      "Automated vulnerability remediation ticket export for Jira and Linear",
      "Real-time CVE feed streaming with webhook notifications",
      "TBD – Advanced zero-day heuristics module to be completed by project owner",
    ],
    githubUrl: `${SOCIAL_LINKS.github}/PortIntel`,
    caseStudyUrl: "#projects",
    demoUrl: "#projects",
    previewSchematic: {
      architectureTitle: "PortIntel Recon & VAPT Engine",
      nodeSequence: [
        "Asset Discovery",
        "CPE Resolution Engine",
        "NVD Threat Intel API",
        "CVSS v3.1 Risk Report",
      ],
      statusText: "SYSTEM: SECURE // 45 TESTS VERIFIED",
      codeSnippet: `# PortIntel NVD Authenticated Threat Query
def resolve_cpe_vulnerabilities(cpe_uri: str) -> VulnerabilityReport:
    client = NVDClient(retry_policy=ExponentialBackoff(max_retries=5))
    return client.query_cpe(cpe_uri=cpe_uri, cvss_version="3.1")`,
    },
  },
  {
    id: "case-study-visionshield",
    name: "VisionShield X",
    category: "AI Visual Forensics Platform",
    summary:
      "A next-generation AI visual forensics and surveillance analysis platform for real-time anomaly detection and image integrity verification.",
    problemStatement:
      "Visual forensics analysts require real-time verification of synthetic image manipulation and anomaly detection without relying on untrusted cloud pipelines.",
    whyInsufficient:
      "Existing deepfake detection services upload sensitive forensic media to external cloud servers, violating strict chain-of-custody rules.",
    engineeringSolution:
      "Architected a modular visual forensics engine combining edge-ready AI inference models with zero-trust RPC communication and verifiable audit trails.",
    technologies: [
      "Python",
      "AI Visual Forensics",
      "Zero-Trust RPC",
      "Clean Architecture",
      "TypeScript",
      "React 19",
    ],
    architectureHighlights: [
      "Edge-optimized AI visual inference pipeline for real-time anomaly detection",
      "Zero-trust RPC messaging layer between inspection nodes and central SOC UI",
      "Cryptographic audit trail logging for forensic evidence preservation",
      "TBD – Specific neural network architecture details to be completed by project owner",
    ],
    engineeringDecisions: [
      "Decoupled edge inference workers from the analyst HUD to prevent browser UI freeze during high-resolution frame analysis.",
      "Used cryptographic SHA-256 frame digests to maintain an auditable chain of custody for every verified video asset.",
    ],
    keyFeatures: [
      "Real-time visual anomaly and synthetic artifact flagging",
      "Forensic metadata integrity auditing and timestamp verification",
      "Clean Executive HUD dashboard for SOC visual analysts",
      "TBD – Third-party forensic benchmark scores to be completed by project owner",
    ],
    engineeringChallenges: [
      "TBD – High-frequency video frame ingestion optimization challenges to be completed by project owner.",
      "TBD – Maintaining low-latency inference across heterogeneous GPU edge devices to be completed by project owner.",
    ],
    lessonsLearned: [
      "Decoupling the AI visual inference worker pool from the client presentation HUD is crucial for maintaining responsive UX under heavy load.",
      "TBD – Additional empirical forensic findings to be completed by project owner.",
    ],
    futureRoadmap: [
      "Automated deepfake artifact detection models with confidence scoring",
      "Distributed multi-camera forensic feed correlation",
      "TBD – Hardware-accelerated FPGA inference pipeline to be completed by project owner",
    ],
    githubUrl: `${SOCIAL_LINKS.github}/VisionShield-X`,
    caseStudyUrl: "#projects",
    demoUrl: "#projects",
    previewSchematic: {
      architectureTitle: "VisionShield X Forensic Visual Pipeline",
      nodeSequence: [
        "Visual Ingestion Stream",
        "Edge Inference Model",
        "Cryptographic Audit Trail",
        "Forensic SOC HUD",
      ],
      statusText: "SYSTEM: ARCHITECTED // STATUS: ACTIVE DEV",
      codeSnippet: `# VisionShield X Forensic Integrity Verification
async function verifyVisualIntegrity(frameBuffer: Uint8Array): Promise<AuditResult> {
  const hash = await crypto.subtle.digest("SHA-256", frameBuffer);
  return { verified: true, timestamp: Date.now(), hash: toHex(hash) };
}`,
    },
  },
];

export default FEATURED_PROJECTS;
