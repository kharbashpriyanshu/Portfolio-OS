import React from "react";
import { motion } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";

export function Terminal() {
  const { lines, input, setInput, submitCommand, handleKeyDown, terminalEndRef, isBooting } =
    useTerminal();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-[36rem] mx-auto overflow-hidden flex flex-col font-mono text-[13px] sm:text-sm group rounded-xl border border-white/10 bg-[#060913]/80 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,221,255,0.15)] ring-1 ring-primary/20 hover:shadow-[0_30px_60px_-15px_rgba(0,221,255,0.25)] transition-shadow duration-700"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none opacity-50" />
      {/* Top Bar */}
      <div className="relative flex items-center px-5 py-3.5 bg-black/40 border-b border-white/5 backdrop-blur-md">
        <div className="flex gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30 shadow-sm transition-transform hover:scale-110" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30 shadow-sm transition-transform hover:scale-110" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30 shadow-sm transition-transform hover:scale-110" />
        </div>
        <div className="mx-auto text-[11px] font-medium tracking-wider text-white/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>{" "}
          SOC-CONSOLE v2.4.1
        </div>
      </div>

      {/* Terminal Content */}
      <div className="relative p-6 h-[360px] md:h-[420px] overflow-y-auto flex flex-col gap-3.5 scrollbar-terminal">
        {lines.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap flex flex-col gap-1.5 leading-relaxed">
            {line.type === "input" ? (
              <div className="flex items-center gap-3 text-primary">
                <span className="font-bold text-cyber-emerald">root@soc ❯</span>
                <span className="text-white/90 tracking-wide">{line.content}</span>
              </div>
            ) : line.type === "boot" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyber-blue font-semibold ml-5"
              >
                [sys]: {line.content}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/70 ml-5"
              >
                {line.content}
              </motion.div>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={submitCommand}
          className="flex items-center gap-3 text-primary mt-2 min-w-0"
        >
          <span className="font-bold text-cyber-emerald shrink-0">root@soc ❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isBooting}
            className="flex-1 min-w-0 bg-transparent outline-none text-white/80 border-none focus:ring-0 p-0 m-0 caret-primary disabled:opacity-50 transition-colors tracking-wide"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
            placeholder={isBooting ? "Loading system components..." : ""}
          />
        </form>
        <div ref={terminalEndRef} />
      </div>
    </motion.div>
  );
}
