import React from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "./config";

interface DesktopNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function DesktopNav({ activeSection, setActiveSection }: DesktopNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setActiveSection(targetId);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        // Offset for the fixed navbar
        const offsetPosition = element.offsetTop - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");

        return (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isActive ? "text-primary-foreground" : "text-foreground-muted hover:text-foreground"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 z-[-1] bg-primary rounded-full shadow-[0_0_15px_rgba(0,221,255,0.3)]"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
