export interface RecruiterMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
}

/**
 * Immutable configuration for Recruiter Snapshot Metrics.
 * Uses verified, truthful engineering values without fabricating inflated numbers.
 */
export const RECRUITER_METRICS: RecruiterMetric[] = [
  {
    id: "metric-1",
    label: "Flagship Case Studies",
    value: "3+",
    detail: "Production-ready security & AI platforms",
    highlight: true,
  },
  {
    id: "metric-2",
    label: "Core Technologies",
    value: "10+",
    detail: "Python, TypeScript, React 19, Linux & AppSec",
  },
  {
    id: "metric-3",
    label: "Verification Tests",
    value: "45+",
    detail: "Automated test suite verifying PortIntel v2.0",
    highlight: true,
  },
  {
    id: "metric-4",
    label: "Years in Linux & Systems",
    value: "3+",
    detail: "Hands-on POSIX, kernel hardening & network security",
  },
];

export default RECRUITER_METRICS;
