import React from "react";
import { motion } from "framer-motion";

export function NavLogo() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.a
      href="#home"
      onClick={handleScrollToTop}
      className="relative z-50 text-xl font-bold font-heading tracking-tighter hover:text-primary transition-colors flex items-center gap-1 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Home"
    >
      PK<span className="text-primary text-2xl leading-none">.</span>
    </motion.a>
  );
}
