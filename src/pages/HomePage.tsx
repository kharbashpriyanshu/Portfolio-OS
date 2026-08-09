import React, { Suspense, lazy } from "react";
import { SEO } from "@/components/common/SEO";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { SectionSkeleton } from "@/components/common/SectionSkeleton";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { MissionControlSection } from "@/components/sections/about/MissionControlSection";
import { RecruiterMetricsSection } from "@/components/sections/metrics/RecruiterMetricsSection";
import { SkillsIntelligenceSection } from "@/components/sections/skills/SkillsIntelligenceSection";

// Lazy Load Below-the-fold sections
const ProfessionalJourney = lazy(() =>
  import("@/components/sections/journey/ProfessionalJourney").then((module) => ({
    default: module.ProfessionalJourney,
  }))
);
const ProjectsCommandCenter = lazy(() =>
  import("@/components/sections/projects/ProjectsCommandCenter").then((module) => ({
    default: module.ProjectsCommandCenter,
  }))
);
const CertificationsHub = lazy(() =>
  import("@/components/sections/certifications").then((module) => ({
    default: module.CertificationsHub,
  }))
);
const ContactSection = lazy(() =>
  import("@/components/sections/contact").then((module) => ({ default: module.ContactSection }))
);

/**
 * HomePage root architectural shell.
 * Renders ONLY the authorized sections for Sprint 2.3:
 * 1. Hero Section (HeroSection)
 * 2. Recruiter Snapshot Metrics (RecruiterMetricsSection)
 * 3. Mission Control (MissionControlSection)
 * 4. Skills Intelligence (SkillsIntelligenceSection)
 * 5. Professional Journey (ProfessionalJourney) - Lazy Loaded
 * 6. Projects Command Center (ProjectsCommandCenter) - Lazy Loaded
 * 7. Certifications & Achievements Hub (CertificationsHub) - Lazy Loaded
 * 8. Contact Experience (ContactSection) - Lazy Loaded
 */
export function HomePage() {
  return (
    <div className="flex flex-col w-full gap-8 md:gap-16 lg:gap-24 pb-20 lg:pb-32">
      <SEO />
      <ErrorBoundary variant="section">
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <RecruiterMetricsSection />
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <MissionControlSection />
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <SkillsIntelligenceSection />
      </ErrorBoundary>

      <ErrorBoundary variant="section">
        <Suspense fallback={<SectionSkeleton />}>
          <ProfessionalJourney />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsCommandCenter />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <Suspense fallback={<SectionSkeleton />}>
          <CertificationsHub />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary variant="section">
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default HomePage;
