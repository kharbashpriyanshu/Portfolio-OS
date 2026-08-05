import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  id: string;
  type: "input" | "output";
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: "Available commands:\n  help    - Show this message\n  whoami  - Display current user\n  skills  - List technical skills\n  projects- Show recent projects\n  resume  - Get resume link\n  contact - Show contact info\n  clear   - Clear terminal output",
  whoami: "guest@portfolio-os\nRole: Visitor",
  skills:
    "> Frontend: React, TypeScript, Next.js, TailwindCSS\n> Backend: Node.js, Python, Go\n> Security: Penetration Testing, OWASP, VAPT\n> Tools: Git, Docker, Linux",
  projects:
    "1. Portfolio OS - React, TypeScript, Tailwind\n2. PortIntel - Python, Security Intel\n3. LogSentry - Go, Log Analysis",
  resume: "Downloading resume.pdf...\nJust kidding, click the 'Download Resume' button!",
  contact:
    "Email: priyanshu@example.com\nGitHub: github.com/priyanshu\nLinkedIn: linkedin.com/in/priyanshu",
};

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "init",
      type: "output",
      content: "Portfolio OS v1.0 initialized.\nType 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

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

  const submitCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return {
    lines,
    input,
    setInput,
    submitCommand,
    terminalEndRef,
  };
}
