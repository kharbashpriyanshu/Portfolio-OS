import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "boot";
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: "Available Commands\nhelp\nwhoami\nprojects\nskills\nexperience\neducation\ncertifications\ncurrent\ngithub\nlinkedin\nresume\ncontact\nroadmap\nclear",
  whoami:
    "Name\nPriyanshu Kharbash\n\nRole\nCybersecurity Engineering Student\n\nCurrent Focus\nSecurity Engineering\nDetection Engineering\nNetwork Security\nSecure Software Development\n\nStatus\nOpen to Internship Opportunities",
  skills:
    "> Security: Threat Detection, VAPT, AppSec, OSINT\n> Backend: Python, FastAPI, PostgreSQL\n> Frontend: React, TypeScript, Tailwind\n> DevOps/Tools: Git, Docker, Linux",
  experience:
    "> 2026: Ethical Hacking Intern @ iStudio\n> 2026: Cyber Security Intern @ Codec Technologies",
  education: "> B.Tech Computer Science (Cyber Security) @ Rashtriya Raksha University",
  projects:
    "1. LogSentry - Commercial-Grade SIEM\n2. PortIntel - Automated Reconnaissance\n3. Academic Resource Hub\n4. Portfolio OS",
  certifications: "> Google Cybersecurity Foundations\n> CCEP (Red Team Leaders)",
  internship: "> Ethical Hacking Internship at iStudio\nFocus: VAPT, Securing Infrastructure",
  resume: "> Initializing secure download...\n> Click the 'Download Resume' button in the UI.",
  github: "> github.com/kharbashpriyanshu",
  linkedin: "> LinkedIn profile currently unavailable.",
  roadmap:
    "Engineering Roadmap\n\nCompleted\n• LogSentry\n• PortIntel\n• Academic Resource Hub\n\nPlanned\n• VisionShield X\n• NetGuardian AI\n• S.H.I.E.L.D.",
  current:
    "Current Internship\nEthical Hacking Intern\niStudio\n\nCurrent Project\nLogSentry\n\nCurrent Learning\nDetection Engineering\nNetwork Security\n\nCurrent Goal\nBuild production-ready cybersecurity solutions.",
  contact: "Email: kharbashpriyanshu@gmail.com\nGitHub: github.com/kharbashpriyanshu",
};

const BOOT_SEQUENCE = [
  "Initializing Portfolio OS...",
  "Loading Security Modules.................OK",
  "Loading Engineering Projects.............OK",
  "Loading Knowledge Base...................OK",
  "Loading Detection Engine.................OK",
  "Loading Portfolio........................OK",
  "System Status............................ONLINE",
  'Type "help" to begin.',
];

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Boot sequence effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < BOOT_SEQUENCE.length) {
        setLines((prev) => [
          ...prev,
          { id: `boot-${index}`, type: "boot", content: BOOT_SEQUENCE[index] },
        ]);
        index++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 400); // ms between boot lines

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current?.parentElement) {
      const parent = terminalEndRef.current.parentElement;
      parent.scrollTo({
        top: parent.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === "clear") {
      setLines([]);
      return;
    }

    const output =
      COMMANDS[trimmedCmd] ||
      `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;

    setLines((prev) => [
      ...prev,
      { id: Date.now().toString() + "-in", type: "input", content: cmd },
      { id: Date.now().toString() + "-out", type: "output", content: output },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIdx = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIdx);
        setInput(history[history.length - 1 - newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInput(history[history.length - 1 - newIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const submitCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isBooting) {
      handleCommand(input);
      setInput("");
    }
  };

  return {
    lines,
    input,
    setInput,
    submitCommand,
    handleKeyDown,
    terminalEndRef,
    isBooting,
  };
}
