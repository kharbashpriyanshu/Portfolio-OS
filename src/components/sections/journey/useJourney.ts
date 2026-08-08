import { useState, useMemo } from "react";
import { JOURNEY_DATA } from "./journey-config";
import { JourneyFilterType, MilestoneType } from "./types";

// Map high-level filters to specific milestone types
const FILTER_MAPPING: Record<JourneyFilterType, MilestoneType[] | "All"> = {
  All: "All",
  Education: ["Education"],
  Internship: ["Internship", "Leadership"],
  Projects: ["Project Milestone"],
  Hackathons: ["Hackathon"],
  Certifications: ["Certification"],
  Achievements: ["Achievement"],
  Research: ["Research"],
  "Future Goals": ["Future Goal"],
};

export function useJourney() {
  const [activeFilter, setActiveFilter] = useState<JourneyFilterType>("All");

  const filteredMilestones = useMemo(() => {
    if (activeFilter === "All") return JOURNEY_DATA;

    const allowedTypes = FILTER_MAPPING[activeFilter];
    if (allowedTypes === "All") return JOURNEY_DATA;

    return JOURNEY_DATA.filter((milestone) => allowedTypes.includes(milestone.type));
  }, [activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredMilestones,
  };
}
