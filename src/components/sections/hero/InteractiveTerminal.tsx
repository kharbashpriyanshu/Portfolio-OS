import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/navigation";

export interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

/**
 * Authentic, professional interactive cybersecurity CLI terminal.
 * Implements real command parsing, command history navigation (Up/Down arrow),
 * and truthful security engineering outputs without fake breach theatricality.
 */
export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: "init-1",
      command: "whoami",
      output: (
        <div className="space-y-1 text-sm text-foreground-muted">
          <p className="font-bold text-foreground text-base">Priyanshu Kharbash</p>
          <p className="font-mono text-primary font-medium">Cyber Security Engineer</p>
          <p className="text-foreground-muted">Building AI-powered Security Platforms</p>
          <p className="text-xs text-muted-foreground pt-1">
            Type <span className="font-mono text-primary">help</span> to view available commands.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandQueue, setCommandQueue] = useState<string[]>(["whoami"]);

  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on history change
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCommand: string) => {
    const cmd = rawCommand.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const newId = `cmd-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    let outputContent: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputContent = (
          <div className="space-y-1.5 text-sm text-foreground-muted">
            <p className="font-semibold text-foreground">Available Commands:</p>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <li>
                <span className="font-mono font-medium text-primary">whoami</span> — Display
                professional identity
              </li>
              <li>
                <span className="font-mono font-medium text-primary">skills</span> — List core
                security competencies
              </li>
              <li>
                <span className="font-mono font-medium text-primary">projects</span> — Inspect
                security engineering audits
              </li>
              <li>
                <span className="font-mono font-medium text-primary">contact</span> — Show official
                verification links
              </li>
              <li>
                <span className="font-mono font-medium text-primary">resume</span> — Get direct
                resume download link
              </li>
              <li>
                <span className="font-mono font-medium text-primary">clear</span> — Clear terminal
                console
              </li>
              <li>
                <span className="font-mono font-medium text-primary">help</span> — Display this
                command index
              </li>
            </ul>
          </div>
        );
        break;

      case "whoami":
        outputContent = (
          <div className="space-y-1 text-sm text-foreground-muted">
            <p className="font-bold text-foreground text-base">Priyanshu Kharbash</p>
            <p className="font-mono text-primary font-medium">Cyber Security Engineer</p>
            <p className="text-foreground-muted">Building AI-powered Security Platforms</p>
          </div>
        );
        break;

      case "skills":
        outputContent = (
          <div className="space-y-2 text-sm text-foreground-muted">
            <div>
              <p className="font-semibold text-foreground">Offensive & Defensive Capabilities:</p>
              <p className="font-mono text-xs text-primary">
                Penetration Testing, CVE Discovery, Web Application Security, Digital Forensics
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Blue Team & SOC Engineering:</p>
              <p className="font-mono text-xs text-success">
                SIEM Automation, Threat Hunting, Linux Kernel Hardening, Incident Response
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">AI Security & Software Development:</p>
              <p className="font-mono text-xs text-info">
                Python, TypeScript, React 19, Pydantic, LLM Security, Dependency Injection
              </p>
            </div>
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className="space-y-1.5 text-sm text-foreground-muted">
            <p className="font-semibold text-foreground">
              Featured Intelligence & Security Projects:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium text-foreground">PortIntel v2.0:</span> Reconnaissance
                &amp; VAPT Intelligence Framework with NVD authentication and CVSS 3.1 scoring.
              </li>
              <li>
                <span className="font-medium text-foreground">LogSentry v1.0:</span> AI-Powered SOC
                Incident Response Platform with Gemini real-time log analysis.
              </li>
              <li>
                <span className="font-medium text-foreground">AudioFusion:</span> Windows Desktop
                Application Security &amp; Clean Architecture service container.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Scroll down to the Projects section to inspect architecture diagrams and repositories.
            </p>
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className="space-y-1.5 text-sm text-foreground-muted">
            <p className="font-semibold text-foreground">Official Verification Channels:</p>
            <p>
              GitHub:{" "}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-primary underline-offset-4 hover:underline"
              >
                {SOCIAL_LINKS.github}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-primary underline-offset-4 hover:underline"
              >
                {SOCIAL_LINKS.linkedin}
              </a>
            </p>
          </div>
        );
        break;

      case "resume":
        outputContent = (
          <div className="space-y-1 text-sm text-foreground-muted">
            <p className="font-semibold text-foreground">Professional Resume:</p>
            <p>
              Official resume PDF available for download at:{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-primary underline-offset-4 hover:underline"
              >
                /resume.pdf
              </a>
            </p>
          </div>
        );
        break;

      default:
        outputContent = (
          <div className="text-sm text-destructive">
            Command not recognized: <span className="font-mono font-medium">{rawCommand}</span>.
            Type <span className="font-mono text-primary">help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { id: newId, command: rawCommand, output: outputContent }]);
    setCommandQueue((prev) => [...prev, rawCommand]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandQueue.length > 0) {
        const nextIndex =
          historyIndex === -1 ? commandQueue.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandQueue[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandQueue.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandQueue[nextIndex] || "");
        }
      }
    }
  };

  return (
    <div
      role="region"
      aria-label="Interactive cybersecurity verification terminal"
      className="card-cyber flex flex-col rounded-xl border border-border/80 bg-surface-card/90 shadow-2xl transition-all duration-300"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-surface-elevated/70 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-warning/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-success/80" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
            <TerminalIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            soc-terminal@priyanshu:~
          </span>
        </div>
        <button
          onClick={() => {
            setHistory([]);
            setInput("");
          }}
          className="inline-flex items-center gap-1 rounded px-2 py-0.5 font-mono text-2xs text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          title="Clear console output"
          aria-label="Clear console output"
        >
          <Trash2 className="h-3 w-3" aria-hidden="true" />
          <span>clear</span>
        </button>
      </div>

      {/* Console Output Screen */}
      <div
        role="presentation"
        className="flex max-h-[340px] min-h-[260px] flex-col overflow-y-auto p-4 font-mono sm:p-5"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-primary font-semibold">priyanshu@soc:~#</span>
                <span className="text-foreground">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-primary/20">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div className="mt-4 flex items-center gap-2 pt-2 border-t border-border/40">
          <span className="font-mono text-xs font-semibold text-primary">priyanshu@soc:~#</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g., help, whoami, skills)..."
              aria-label="Terminal command input"
              className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <button
            onClick={() => executeCommand(input)}
            className="hidden sm:inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-mono text-xs font-medium text-primary hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            aria-label="Execute command"
          >
            <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
            <span>run</span>
          </button>
        </div>
        <div ref={consoleEndRef} />
      </div>
    </div>
  );
}

export default InteractiveTerminal;
