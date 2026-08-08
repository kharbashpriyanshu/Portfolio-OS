import React from "react";
import { motion } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";

export function Terminal() {
  const { lines, input, setInput, submitCommand, handleKeyDown, terminalEndRef, isBooting } =
    useTerminal();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card w-full max-w-lg mx-auto overflow-hidden flex flex-col font-mono text-sm group"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Top Bar */}
      <div className="flex items-center px-4 py-3 bg-surface-elevated/50 border-b border-border-subtle backdrop-blur-sm">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-warning/80" />
          <div className="w-3 h-3 rounded-full bg-success/80" />
        </div>
        <div className="mx-auto text-xs text-foreground-muted flex items-center gap-2">
          <span className="text-cyber-emerald">●</span> guest@portfolio-os ~ zsh
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-64 md:h-80 overflow-y-auto flex flex-col gap-2 custom-scrollbar">
        {lines.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap flex flex-col gap-1">
            {line.type === "input" ? (
              <div className="flex items-center gap-2 text-cyber-emerald">
                <span>❯</span>
                <span className="text-foreground">{line.content}</span>
              </div>
            ) : line.type === "boot" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyber-blue font-semibold ml-4"
              >
                [sys]: {line.content}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-foreground-muted ml-4"
              >
                {line.content}
              </motion.div>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <form onSubmit={submitCommand} className="flex items-center gap-2 text-cyber-emerald mt-2">
          <span>❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isBooting}
            className="flex-1 bg-transparent outline-none text-foreground border-none focus:ring-0 p-0 m-0 caret-cyber-emerald disabled:opacity-50"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
            placeholder={isBooting ? "Loading system..." : ""}
          />
        </form>
        <div ref={terminalEndRef} />
      </div>
    </motion.div>
  );
}
