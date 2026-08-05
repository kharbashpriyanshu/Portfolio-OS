import type { SiteConfig } from "@/types";
import { APP_NAME, APP_OWNER } from "@/constants";
import env from "@/config/env";
import { SOCIAL_LINKS } from "@/config/navigation";

/**
 * Site metadata structure for SEO, Open Graph, and Twitter Cards.
 * Truthful, professional cybersecurity engineering profile.
 */
export const siteConfig: SiteConfig = {
  name: APP_NAME,
  author: APP_OWNER,
  description:
    "Professional Cyber Security Engineer, AI Security Developer, and Digital Forensics Enthusiast portfolio engineered by Priyanshu Kharbash.",
  url: env.appUrl,
  ogImage: `${env.appUrl}/og-image.png`,
  links: {
    github: SOCIAL_LINKS.github,
    linkedin: SOCIAL_LINKS.linkedin,
  },
  keywords: [
    "Priyanshu Kharbash",
    "Portfolio OS",
    "Cyber Security Engineer",
    "AI Security Developer",
    "Digital Forensics Enthusiast",
    "Information Security",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export default siteConfig;
