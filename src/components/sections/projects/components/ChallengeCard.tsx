import * as React from "react";
import { ShieldAlert, BookOpen, Clock } from "lucide-react";

export interface ChallengeCardProps {
  challenges: string[];
  lessonsLearned: string[];
}

/**
 * Reusable ChallengeCard component for engineering case studies.
 * Pairs real technical hurdles with concrete architectural takeaways.
 */
export function ChallengeCard({ challenges, lessonsLearned }: ChallengeCardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Engineering Challenges Column */}
      <div className="space-y-2 rounded-xl border border-destructive/20 bg-destructive/5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-destructive" aria-hidden="true" />
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-destructive">
            // ENGINEERING CHALLENGES
          </h4>
        </div>
        <ul role="list" className="space-y-2">
          {challenges.map((challenge, idx) => {
            const isTbd = challenge.startsWith("TBD");
            return (
              <li
                key={`chal-${idx}`}
                className={`flex items-start gap-2 text-xs sm:text-sm ${
                  isTbd ? "text-muted-foreground/80 italic font-mono" : "text-foreground-muted"
                }`}
              >
                {isTbd ? (
                  <Clock
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning/70"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive"
                    aria-hidden="true"
                  />
                )}
                <span>{challenge}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Lessons Learned Column */}
      <div className="space-y-2 rounded-xl border border-success/20 bg-success/5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-success" aria-hidden="true" />
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-success">
            // LESSONS LEARNED
          </h4>
        </div>
        <ul role="list" className="space-y-2">
          {lessonsLearned.map((lesson, idx) => {
            const isTbd = lesson.startsWith("TBD");
            return (
              <li
                key={`lesson-${idx}`}
                className={`flex items-start gap-2 text-xs sm:text-sm ${
                  isTbd ? "text-muted-foreground/80 italic font-mono" : "text-foreground-muted"
                }`}
              >
                {isTbd ? (
                  <Clock
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning/70"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success"
                    aria-hidden="true"
                  />
                )}
                <span>{lesson}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ChallengeCard;
