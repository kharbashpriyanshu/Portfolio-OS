import { useState, useEffect } from "react";

export function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar appearance
      setScrolled(window.scrollY > threshold);

      // Determine active section based on intersection
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if current scroll position is within the section bounds, with some offset for navbar height
        if (
          window.scrollY >= sectionTop - 120 &&
          window.scrollY < sectionTop + sectionHeight - 120
        ) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, activeSection, setActiveSection };
}
