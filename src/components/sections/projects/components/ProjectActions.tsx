import * as React from "react";
import { Github, ExternalLink, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectActionsProps {
  githubUrl: string;
  caseStudyUrl: string;
  demoUrl?: string;
  projectName: string;
}

/**
 * Reusable ProjectActions component rendering Case Study CTA, Demo button, and GitHub repository link.
 */
export function ProjectActions({
  githubUrl,
  caseStudyUrl,
  demoUrl,
  projectName,
}: ProjectActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/80">
      <Button
        variant="primary"
        size="md"
        asChild
        className="gap-2 shadow-cyber-cyan transition-transform duration-200 hover:-translate-y-0.5"
      >
        <a href={caseStudyUrl} aria-label={`View full case study for ${projectName}`}>
          <span>Case Study</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>

      {demoUrl && (
        <Button
          variant="outline"
          size="md"
          asChild
          className="gap-2 border-primary/50 bg-primary/10 text-primary hover:border-primary hover:bg-primary/20"
        >
          <a href={demoUrl} aria-label={`Launch live interactive demo for ${projectName}`}>
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        </Button>
      )}

      <Button
        variant="outline"
        size="md"
        asChild
        className="gap-2 border-border/80 bg-surface/50 hover:border-primary/50 hover:bg-surface-elevated"
      >
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View GitHub repository for ${projectName}`}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <span>GitHub</span>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}

export default ProjectActions;
