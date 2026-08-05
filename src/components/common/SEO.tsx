import React from "react";
import type { SEOConfig } from "@/types";
import { useSEO } from "@/hooks/useSEO";

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

/**
 * Declarative SEO component that synchronizes document title and metadata tags.
 */
export function SEO({ children, ...config }: SEOProps) {
  useSEO(config);
  return <>{children}</>;
}

export default SEO;
