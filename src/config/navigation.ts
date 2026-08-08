import type { NavigationItem } from "@/types";
import { PROFILE_CONFIG } from "@/config/profile";

/**
 * Scalable navigation configuration for header menus, footer links, and social links.
 * Enables zero-touch navigation updates without mutating layout components.
 */

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Certifications",
    href: "#certifications",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = {
  github: PROFILE_CONFIG.socials.github,
  linkedin: PROFILE_CONFIG.socials.linkedin,
} as const;

export const FOOTER_LINKS: NavigationItem[] = [
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    external: true,
  },
];

export default {
  MAIN_NAVIGATION,
  SOCIAL_LINKS,
  FOOTER_LINKS,
};
