import { useEffect } from "react";
import type { SEOConfig } from "@/types";
import { getDefaultSEO, getPersonJSONLD } from "@/config/seo";

/**
 * Hook to dynamically update document title, canonical link, JSON-LD Schema, and SEO metadata tags.
 */
export function useSEO(config?: SEOConfig): void {
  useEffect(() => {
    const resolved = getDefaultSEO(config);

    // Update document title
    document.title = resolved.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", resolved.description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", resolved.keywords.join(", "));

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", resolved.canonicalUrl);

    // Update or inject JSON-LD Person Schema
    const jsonLdId = "portfolio-json-ld";
    let scriptJsonLd = document.getElementById(jsonLdId);
    if (!scriptJsonLd) {
      scriptJsonLd = document.createElement("script");
      scriptJsonLd.setAttribute("id", jsonLdId);
      scriptJsonLd.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptJsonLd);
    }
    scriptJsonLd.textContent = JSON.stringify(getPersonJSONLD());
  }, [config]);
}

export default useSEO;
