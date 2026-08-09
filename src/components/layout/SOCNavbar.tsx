import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { APP_OWNER } from "@/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * World-class sticky responsive SOC navigation bar.
 * Engineered for cybersecurity precision with glassmorphic styling,
 * active scroll elevation, and mobile navigation drawer.
 */
export function SOCNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/5 bg-background/40 backdrop-blur-2xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Logo & Authentic System Status */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Priyanshu Kharbash - Return to top"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold tracking-tight text-foreground sm:text-base">
              {APP_OWNER}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-2xs font-medium uppercase tracking-wider text-muted-foreground">
                SYSTEM: READY
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {MAIN_NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-500 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-primary/40 text-primary hover:border-primary hover:bg-primary/10"
          >
            <a
              href="https://drive.google.com/file/d/1Ct6UC6zFQBstbasyYEOmQ_oxBRLsdrmm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-md border border-border/80 bg-surface/50"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Glass Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/5 bg-background/60 backdrop-blur-3xl lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1 px-4 pb-6 pt-3 sm:px-6">
              {MAIN_NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-all duration-500 hover:bg-white/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-center border-primary/40 text-primary hover:border-primary hover:bg-primary/10"
                >
                  <a
                    href="https://drive.google.com/file/d/1Ct6UC6zFQBstbasyYEOmQ_oxBRLsdrmm/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SOCNavbar;
