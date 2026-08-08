import { useState, useMemo } from "react";
import { CERTIFICATIONS_DATA } from "./certifications-config";
import { CertificationFilterType } from "./types";

export function useCertifications() {
  const [activeFilter, setActiveFilter] = useState<CertificationFilterType>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return CERTIFICATIONS_DATA;
    if (activeFilter === "Featured") return CERTIFICATIONS_DATA.filter((item) => item.featured);

    return CERTIFICATIONS_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
  };
}
