import type { SiteConfig } from "@/types";
import { APP_NAME } from "@/constants";
import env from "@/config/env";
import { SOCIAL_LINKS } from "@/config/navigation";

import { PROFILE_CONFIG } from "@/config/profile";

/**
 * Site metadata structure for SEO, Open Graph, and Twitter Cards.
 * Truthful, professional cybersecurity engineering profile.
 */
export const siteConfig: SiteConfig = {
  name: APP_NAME,
  author: PROFILE_CONFIG.name,
  description: `${PROFILE_CONFIG.headline}, ${PROFILE_CONFIG.subtitle} portfolio engineered by ${PROFILE_CONFIG.name}.`,
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
