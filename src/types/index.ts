/**
 * Core application domain types and architectural interfaces.
 */

import type { ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

export interface SiteConfig {
  name: string;
  author: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  keywords: string[];
}

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noIndex?: boolean;
  canonicalUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
}

export * from "./design";

export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  version: string;
  owner: string;
  createdAt: string;
}
