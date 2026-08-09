import React, { useState } from "react";
import env from "@/config/env";
import { motion } from "framer-motion";
import { Lock, User, Key, ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE_URL = env.apiBaseUrl || "";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch(`${BASE_URL}/api/v1/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        window.location.href = "/admin/inbox";
      } else {
        const data = await response.json();
        setError(data.detail || "Authentication failed");
      }
    } catch (err) {
      setError("Server connection failed. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark min-h-screen w-full flex items-center justify-center bg-background p-4 relative z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-[#060913] z-[-1]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-primary/20 bg-surface-card/60 backdrop-blur-xl p-8 shadow-[0_0_40px_-15px_rgba(0,221,255,0.2)]">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              PRIVATE SECURITY CONSOLE
            </h1>
            <p className="text-sm text-muted-foreground mt-1 font-mono uppercase tracking-widest">
              Contact Intelligence
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-background/50 border border-border-subtle focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-sm outline-none transition-all"
                  placeholder="admin"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-background/50 border border-border-subtle focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-sm outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button type="submit" variant="cyber" className="w-full mt-2 h-11" disabled={isLoading}>
              {isLoading ? "AUTHENTICATING..." : "AUTHENTICATE"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
