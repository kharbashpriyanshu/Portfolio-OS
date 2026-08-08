import type { SEOConfig } from "@/types";
import siteConfig from "@/config/site";
import { PROFILE_CONFIG } from "@/config/profile";

export interface JSONLDSchema {
  "@context": "https://schema.org";
  "@type": "Person" | "WebSite" | "ProfilePage";
  name: string;
  url: string;
  description: string;
  sameAs?: string[];
  jobTitle?: string;
  author?: {
    "@type": "Person";
    name: string;
  };
}

/**
 * Generates SEO metadata defaults merged with page-specific overrides.
 */
export function getDefaultSEO(overrides?: SEOConfig): Required<SEOConfig> {
  const canonicalUrl = overrides?.canonicalUrl || siteConfig.url;
  return {
    title: overrides?.title
      ? `${overrides.title} | ${siteConfig.name}`
      : `${siteConfig.name} - ${siteConfig.author}`,
    description: overrides?.description || siteConfig.description,
    keywords: overrides?.keywords || siteConfig.keywords,
    ogImage: overrides?.ogImage || siteConfig.ogImage,
    ogType: overrides?.ogType || "website",
    noIndex: overrides?.noIndex ?? false,
    canonicalUrl,
  };
}

/**
 * Generates structured JSON-LD Schema for rich Google search indexing.
 */
export function getPersonJSONLD(): JSONLDSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: PROFILE_CONFIG.headline,
    sameAs: Object.values(siteConfig.links).filter(Boolean) as string[],
  };
}

export default getDefaultSEO;
