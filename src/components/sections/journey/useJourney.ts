import { useState, useMemo } from "react";
import { JOURNEY_DATA } from "./journey-config";
import { JourneyFilterType, MilestoneType } from "./types";

// Map high-level filters to specific milestone types
const FILTER_MAPPING: Record<JourneyFilterType, MilestoneType[] | "All"> = {
  All: "All",
  Education: ["Education"],
  Internship: ["Internship"],
  Engineering: ["Engineering"],
  Learning: ["Learning"],
  Current: ["Current"],
};

export function useJourney() {
  const [activeFilter, setActiveFilter] = useState<JourneyFilterType>("All");

  const filteredMilestones = useMemo(() => {
    if (activeFilter === "All") return JOURNEY_DATA;

    const allowedTypes = FILTER_MAPPING[activeFilter as JourneyFilterType];
    if (!allowedTypes || allowedTypes === "All") return JOURNEY_DATA;

    return JOURNEY_DATA.filter((milestone) => allowedTypes.includes(milestone.type));
  }, [activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredMilestones,
  };
}
