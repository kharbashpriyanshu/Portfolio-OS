import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./config";

import { ThemeToggle } from "@/components/ui/theme-toggle";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function MobileNav({ isOpen, setIsOpen, activeSection, setActiveSection }: MobileNavProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    setIsOpen(false);

    setTimeout(() => {
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 300); // Wait for menu close animation
  };

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 relative z-50 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-20 z-50 rounded-2xl bg-surface-card border border-border-subtle shadow-glass-lg overflow-hidden flex flex-col p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground-muted">Menu</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full bg-surface-elevated"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col space-y-2 mt-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                      className={`px-4 py-3 rounded-xl text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,221,255,0.1)]"
                          : "text-foreground-muted hover:text-foreground hover:bg-surface-elevated"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
