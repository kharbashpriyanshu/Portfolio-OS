import React from "react";
import { SEO } from "@/components/common/SEO";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { AboutMeSection } from "@/components/sections/about/AboutMeSection";
import { EngineeringJourneySection } from "@/components/sections/journey/EngineeringJourneySection";
import { FeaturedProjectsSection } from "@/components/sections/projects/FeaturedProjectsSection";
import { RecruiterMetricsSection } from "@/components/sections/metrics/RecruiterMetricsSection";

/**
 * HomePage root architectural shell.
 * Renders ONLY the authorized sections for Sprint 2.3:
 * 1. Hero Section (HeroSection)
 * 2. Recruiter Snapshot Metrics (RecruiterMetricsSection)
 * 3. About Me (AboutMeSection)
 * 4. Engineering Journey (EngineeringJourneySection)
 * 5. Featured Engineering Case Studies (FeaturedProjectsSection)
 */
export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <SEO />
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <RecruiterMetricsSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AboutMeSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <EngineeringJourneySection />
      </ErrorBoundary>
      <ErrorBoundary>
        <FeaturedProjectsSection />
      </ErrorBoundary>
    </div>
  );
}

export default HomePage;
