import { ContactConfig } from "./types";
import { PROFILE_CONFIG } from "@/config/profile";

export const CONTACT_CONFIG: ContactConfig = {
  heading: "Let's Build Something Meaningful",
  label: "GET IN TOUCH",
  introduction:
    "I am actively seeking security engineering internships, full-time opportunities, and open-source collaborations. Let's connect and build secure, resilient systems together.",
  email: PROFILE_CONFIG.email,
  location: PROFILE_CONFIG.location,
  resumeUrl: PROFILE_CONFIG.resumeUrl,
  calendarUrl: PROFILE_CONFIG.calendarUrl,
  platforms: [
    {
      id: "email",
      name: "Email",
      url: `mailto:${PROFILE_CONFIG.email}`,
      icon: "Mail",
      description: "Direct communication",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: PROFILE_CONFIG.socials.linkedin,
      icon: "Linkedin",
      description: "Professional network",
    },
    {
      id: "github",
      name: "GitHub",
      url: PROFILE_CONFIG.socials.github,
      icon: "Github",
      description: "Code and contributions",
    },
    {
      id: "tryhackme",
      name: "TryHackMe",
      url: PROFILE_CONFIG.socials.tryhackme,
      icon: "TerminalSquare",
      description: "Security training",
    },
    {
      id: "medium",
      name: "Medium",
      url: PROFILE_CONFIG.socials.medium,
      icon: "BookOpen",
      description: "Technical writing",
    },
  ],
  availability: {
    status: "Available",
    message: "Currently open to new opportunities.",
    items: [
      { id: "internships", label: "Open to Internships", active: true },
      { id: "fulltime", label: "Open to Full-time Opportunities", active: true },
      { id: "opensource", label: "Open Source Collaboration", active: true },
      { id: "hackathons", label: "Hackathons", active: true },
      { id: "remote", label: "Remote Work", active: true },
    ],
  },
};
