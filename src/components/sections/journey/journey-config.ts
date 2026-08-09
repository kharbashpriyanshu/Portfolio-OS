import { JourneyMilestone } from "./types";

export const JOURNEY_CONFIG = {
  heading: "Professional Journey",
  label: "CAREER PATH",
  subtitle:
    "A timeline of education, hands-on cybersecurity learning, engineering projects, internships, and continuous technical growth.",
  introduction:
    "My journey in cybersecurity has been shaped by combining academic foundations with practical implementation. Each stage represents progress toward understanding how modern systems are built, analyzed, secured, and improved.",
};

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    id: "btech",
    title: "B.Tech Computer Science & Engineering (Cyber Security)",
    organization: "Rashtriya Raksha University",
    location: "Gandhinagar, Gujarat, India",
    type: "Education",
    status: "Ongoing",
    featured: true,
    description:
      "Pursuing Computer Science & Engineering with a specialization in Cyber Security, building foundations across computer networks, programming, databases, operating systems, cybersecurity, and secure computing.\n\nThe academic foundation is complemented by practical projects, security labs, certifications, technical workshops, and independent learning outside the classroom.",
    highlights: [
      "Computer Networks",
      "Cybersecurity",
      "Programming",
      "Database Systems",
      "Operating Systems",
      "Digital Image Processing",
      "Practical networking and security laboratories",
    ],
  },
  {
    id: "cyber-foundations",
    title: "Building Cybersecurity Foundations",
    type: "Learning",
    status: "Completed",
    description:
      "Expanded cybersecurity knowledge beyond university coursework through structured courses, certifications, practical labs, security tools, networking exercises, and independent experimentation.",
    highlights: [
      "Network Security",
      "Linux",
      "Kali Linux",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "OSINT",
      "Digital Forensics",
      "Web Security",
      "Reconnaissance and Enumeration",
    ],
  },
  {
    id: "engineering-tools",
    title: "From Learning Security to Building Security Tools",
    type: "Engineering",
    status: "Completed",
    featured: true,
    description:
      "Started applying cybersecurity and programming knowledge by developing practical engineering projects instead of limiting learning to isolated exercises.\n\nProjects such as PortIntel and LogSentry became opportunities to explore network reconnaissance, security automation, log analysis, detection engineering, threat intelligence, backend architecture, and secure software development.",
    highlights: [
      "Python security tooling",
      "Network reconnaissance",
      "Security automation",
      "Log analysis",
      "Detection engineering",
      "Backend development",
      "REST API development",
      "Secure software architecture",
    ],
  },
  {
    id: "codec-internship",
    title: "Cyber Security Internship",
    organization: "Codec Technologies",
    type: "Internship",
    status: "Completed",
    description:
      "Completed a cybersecurity internship focused on strengthening foundational security knowledge and gaining structured exposure to cybersecurity concepts and practical learning.",
    highlights: [
      "Cybersecurity fundamentals",
      "Practical security learning",
      "Structured internship experience",
      "Professional technical development",
      "Evidence: Internship Certificate — Available",
      "Evidence: Recommendation Letter — Available",
    ],
  },
  {
    id: "istudio-internship",
    title: "Ethical Hacking Internship",
    organization: "iStudio",
    type: "Internship",
    status: "Ongoing",
    featured: true,
    description:
      "Currently undertaking an Ethical Hacking internship focused on developing practical cybersecurity skills through structured training and hands-on security activities.\n\nThe internship contributes to strengthening knowledge across ethical hacking, vulnerability assessment, penetration-testing concepts, network security, and security analysis.",
    highlights: [
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Penetration Testing Concepts",
      "Network Security",
      "Security Analysis",
      "Hands-on Cybersecurity Learning",
    ],
  },
  {
    id: "current-development",
    title: "Current Engineering Development",
    type: "Current",
    status: "Active",
    description:
      "Continuing to strengthen practical cybersecurity and software engineering capabilities through security-focused projects, internship experience, technical documentation, interview preparation, and hands-on learning.\n\nObjective: Develop the technical depth, engineering discipline, and practical cybersecurity experience required to transition from cybersecurity student to security professional.",
    highlights: [
      "Security Engineering",
      "Detection Engineering",
      "Network Security",
      "Secure Software Development",
      "Threat Intelligence",
      "Cybersecurity Interview Preparation",
      "Building practical security tools",
    ],
  },
];
