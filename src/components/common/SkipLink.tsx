import React from "react";

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

/**
 * WCAG 2.1 AAA Compliant Skip-to-Content link for keyboard navigation accessibility.
 * Visually hidden until focused via Tab key.
 */
export function SkipLink({
  targetId = "main-content",
  label = "Skip to main content",
}: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.tabIndex = -1;
      targetElement.focus({ preventScroll: false });
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      {label}
    </a>
  );
}

export default SkipLink;
