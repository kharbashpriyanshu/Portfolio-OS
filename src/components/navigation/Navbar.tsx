import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { useScroll } from "@/hooks/useScroll";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const { scrolled, activeSection, setActiveSection } = useScroll(40);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 pointer-events-none">
      <motion.div
        layout
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-[0.16,1,0.3,1] pointer-events-auto origin-top ${
          scrolled
            ? "max-w-4xl bg-surface-card/70 backdrop-blur-lg border border-border-subtle shadow-glass-lg rounded-full px-6 py-3"
            : "max-w-7xl bg-transparent border-transparent px-2 py-2"
        }`}
      >
        <NavLogo />

        <DesktopNav activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <MobileNav
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
