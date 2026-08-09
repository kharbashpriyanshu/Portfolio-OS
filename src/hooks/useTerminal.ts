import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "boot";
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: "Available Commands\nhelp\nwhoami\ncurrent\nprojects\nskills\nexperience\ncerts\ngithub\nlinkedin\nresume\ncontact\nroadmap\nclear",
  whoami:
    "Priyanshu Kharbash\nCybersecurity Engineering Student\nFocus: Security Engineering, Detection Engineering, Network Security, AppSec\nBuilding practical cybersecurity systems and security tooling.",
  skills:
    "> Programming: Python, C++, Java, JavaScript, TypeScript, HTML, CSS, SQL\n> Cybersecurity: Kali Linux, Wireshark, Nmap, Metasploit, Burp Suite, OWASP Top 10\n> Backend: FastAPI, Flask, REST APIs, SQLAlchemy\n> Databases: PostgreSQL, MySQL, SQLite, Firebase\n> DevOps/Tools: Git, GitHub, Docker, Linux",
  experience:
    "> Current: Ethical Hacking Intern @ iStudio Technologies (Jul 2026 – Present)\nFocus: Network Security, Penetration Testing Labs, Vulnerability Assessment\n\n> Past: Cyber Security Intern @ Codec Networks (Apr 2026 – May 2026)\nFocus: Nmap, Wireshark, Burp Suite, Metasploit",
  projects:
    "Engineering Projects\n\n01  LogSentry\n    AI-assisted SIEM / security analytics platform\n\n02  PortIntel\n    Intelligent Network Reconnaissance Framework\n\n03  Academic Resource Hub\n    Full-stack academic resource platform\n\n04  TraceZero\n    Windows system cleanup and privacy utility",
  certs:
    "> Google Cybersecurity Professional Certificate\n> CCEP Training (Red Team Leaders)\n> Database Management and SQL (Infosys Springboard)\n> MATLAB Workshop\n> Cyber Security Internship Certificate",
  resume: "> Opening resume...",
  github: "> Opening GitHub profile...",
  linkedin: "> Opening LinkedIn profile...",
  roadmap:
    "Engineering Roadmap\n\nCompleted\n• LogSentry\n• PortIntel\n• Academic Resource Hub\n• TraceZero\n\nPlanned\n• Backend Analytics Integration\n• Dynamic Contact System",
  current:
    "Current Focus\n• Cybersecurity Engineering\n• Detection Engineering\n• Network Security\n• Secure Backend Development\n• Application Security\n• Python-based Security Tooling",
  contact: "> Scrolling to Contact section...",
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

    // Handle side-effects
    setTimeout(() => {
      if (trimmedCmd === "github") {
        window.open("https://github.com/kharbashpriyanshu", "_blank");
      } else if (trimmedCmd === "linkedin") {
        window.open("https://www.linkedin.com/in/priyanshukharbash/", "_blank");
      } else if (trimmedCmd === "resume") {
        window.open(
          "https://drive.google.com/file/d/1Ct6UC6zFQBstbasyYEOmQ_oxBRLsdrmm/view?usp=drive_link",
          "_blank"
        );
      } else if (trimmedCmd === "contact") {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
