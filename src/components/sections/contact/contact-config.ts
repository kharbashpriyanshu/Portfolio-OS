import { ContactConfig } from "./types";
import { PROFILE_CONFIG } from "@/config/profile";

export const CONTACT_CONFIG: ContactConfig = {
  heading: "Let's Build Something Meaningful",
  label: "GET IN TOUCH",
  subtitle:
    "Whether you are looking for a cybersecurity intern, discussing engineering opportunities, collaborating on security-focused projects, or simply connecting professionally, I would be glad to hear from you.",
  introduction:
    "I enjoy building practical cybersecurity solutions, learning through engineering, and collaborating with professionals who value secure software development and continuous improvement.\n\nIf my projects or experience align with your requirements, feel free to get in touch.",
  email: "kharbashpriyanshu@gmail.com",
  location: PROFILE_CONFIG.location,
  resumeUrl: PROFILE_CONFIG.resumeUrl,
  calendarUrl: PROFILE_CONFIG.calendarUrl,
  platforms: [
    {
      id: "email",
      name: "Email",
      url: `mailto:kharbashpriyanshu@gmail.com`,
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
    message: "",
    items: [
      { id: "internships", label: "Open to Cybersecurity Internships", active: true },
      { id: "engineering", label: "Open to Security Engineering Opportunities", active: true },
      { id: "collaborations", label: "Open to Technical Collaborations", active: true },
      { id: "opensource", label: "Open to Open Source Contributions", active: true },
    ],
  },
};
