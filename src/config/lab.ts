export interface LabPlatform {
  id: string;
  name: string;
  url: string;
  rank?: string;
  points?: number;
  completedRooms?: number;
  badges?: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category:
    | "Network Analysis"
    | "OSINT"
    | "Active Directory"
    | "Detection Rules"
    | "Threat Hunting"
    | "MITRE ATT&CK";
  description: string;
  toolsUsed: string[];
  outcomes: string[];
  link?: string;
}

export const LAB_CONFIG = {
  heading: "Security Lab",
  label: "PRACTICAL RESEARCH",
  introduction:
    "A dedicated environment for hands-on security research, threat hunting, and infrastructure analysis. This section tracks my continuous learning across various attack and defense simulations.",
  platforms: [
    {
      id: "tryhackme",
      name: "TryHackMe",
      url: "#",
      rank: "Junior Penetration Tester (In Progress)",
      points: 0,
      completedRooms: 0,
    },
  ] as LabPlatform[],
};

export const LAB_EXPERIMENTS: LabExperiment[] = [];
