import React, { useEffect, useState } from "react";
import {
  Search,
  Mail,
  Trash2,
  CheckCircle,
  MailOpen,
  LogOut,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Navigate } from "react-router-dom";
import env from "@/config/env";

const BASE_URL = (env.apiBaseUrl || "").trim();
const ADMIN_LOGIN_PATH = "/admin/login";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface DashboardStats {
  total_messages: number;
  unread_messages: number;
  approved_senders: number;
  near_limit_senders: number;
}

interface ContactSender {
  id: number;
  normalized_email: string;
  message_count: number;
  approved: boolean;
  updated_at: string;
}

export function AdminInbox() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [senders, setSenders] = useState<ContactSender[]>([]);
  const [viewMode, setViewMode] = useState<"messages" | "senders">("messages");
  const [authState, setAuthState] = useState<"loading" | "authenticated" | "unauthenticated">(
    "loading"
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
    fetchStats();
    fetchSenders();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/admin/stats`);
      if (res.ok) setStats(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSenders = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/admin/senders`);
      if (res.ok) setSenders(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/admin/messages`);
      if (response.status === 401 || response.status === 403) {
        setAuthState("unauthenticated");
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
        setAuthState("authenticated");
      } else {
        console.error("Failed to fetch messages.");
        setAuthState("unauthenticated");
      }
    } catch (err) {
      console.error("Server connection failed.", err);
      setAuthState("unauthenticated");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch(`${BASE_URL}/api/v1/admin/logout`, { method: "POST" });
    navigate(ADMIN_LOGIN_PATH, { replace: true });
  };

  const markAsRead = async (id: number, is_read: boolean) => {
    try {
      await fetch(`${BASE_URL}/api/v1/admin/messages/${id}/read`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_read }),
      });
      setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, is_read } : msg)));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, is_read });
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const deleteMessage = async (id: number) => {
    if (!window.confirm("Delete this message permanently?")) return;
    try {
      await fetch(`${BASE_URL}/api/v1/admin/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error("Failed to delete message", err);
    }
  };

  const toggleSenderApproval = async (id: number, currentStatus: boolean) => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/admin/senders/${id}/approval`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: !currentStatus }),
      });
      if (res.ok) {
        setSenders((prev) =>
          prev.map((s) => (s.id === id ? { ...s, approved: !currentStatus } : s))
        );
        fetchStats();
      }
    } catch (err) {
      console.error("Failed to update sender", err);
    }
  };

  const filteredMessages = messages
    .filter((msg) => {
      if (filter === "unread") return !msg.is_read;
      if (filter === "read") return msg.is_read;
      return true;
    })
    .filter((msg) => {
      const q = searchQuery.toLowerCase();
      return (
        msg.name.toLowerCase().includes(q) ||
        msg.email.toLowerCase().includes(q) ||
        msg.subject.toLowerCase().includes(q)
      );
    });

  if (isLoading || authState === "loading") {
    return (
      <div className="dark min-h-screen flex items-center justify-center bg-background text-primary font-mono">
        <span className="animate-pulse">Loading secure inbox...</span>
      </div>
    );
  }

  if (authState === "unauthenticated") {
    return <Navigate to={ADMIN_LOGIN_PATH} replace />;
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col relative z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060913] to-background z-[-1]" />

      {/* Header */}
      <header className="border-b border-white/5 bg-surface/50 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="font-heading font-bold tracking-tight text-xl text-foreground">
            CONTACT INTELLIGENCE
          </h1>
          <p className="text-xs text-muted-foreground font-mono">Private Portfolio Inbox</p>
        </div>
        <div className="flex items-center gap-4">
          {stats && (
            <div className="hidden lg:flex gap-4 text-[11px] font-mono mr-4 bg-surface/30 px-4 py-2 rounded-md border border-white/5">
              <span className="text-foreground">
                Total Messages{" "}
                <span className="text-cyber-blue font-bold ml-1">{stats.total_messages}</span>
              </span>
              <span className="text-foreground">
                Unread{" "}
                <span className="text-cyber-amber font-bold ml-1">{stats.unread_messages}</span>
              </span>
              <span className="text-foreground">
                Approved Senders{" "}
                <span className="text-success font-bold ml-1">{stats.approved_senders}</span>
              </span>
              <span className="text-foreground">
                Near Limit{" "}
                <span className="text-destructive font-bold ml-1">{stats.near_limit_senders}</span>
              </span>
            </div>
          )}
          <div className="flex gap-2 mr-2">
            <Button
              variant={viewMode === "messages" ? "cyber" : "outline"}
              size="sm"
              onClick={() => setViewMode("messages")}
            >
              Messages
            </Button>
            <Button
              variant={viewMode === "senders" ? "cyber" : "outline"}
              size="sm"
              onClick={() => setViewMode("senders")}
            >
              Senders
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-red-500/30 text-red-500 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-7xl w-full mx-auto">
        {/* Left Sidebar / List */}
        <div
          className={`w-full md:w-[400px] border-r border-white/5 flex flex-col bg-surface/20 ${selectedMessage ? "hidden md:flex" : "flex"}`}
        >
          <div className="p-4 border-b border-white/5 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search intelligence..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-9 pr-4 rounded bg-background/50 border border-white/10 text-sm outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex gap-2">
              {(["all", "unread", "read"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 text-xs font-mono rounded ${filter === f ? "bg-primary/20 text-primary border border-primary/30" : "bg-surface border border-white/5 text-muted-foreground hover:text-foreground"}`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-terminal">
            {viewMode === "messages" ? (
              filteredMessages.length === 0 ? (
                <div className="p-8 text-center text-sm text-muted-foreground font-mono">
                  No communications found.
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedMessage(msg)}
                    className={`p-4 border-b border-white/5 cursor-pointer transition-colors ${selectedMessage?.id === msg.id ? "bg-primary/10 border-l-2 border-l-primary" : "hover:bg-white/5 border-l-2 border-l-transparent"}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span
                        className={`font-semibold text-sm truncate ${!msg.is_read ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {msg.name}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div
                      className={`text-sm truncate mb-2 ${!msg.is_read ? "text-foreground font-medium" : "text-muted-foreground"}`}
                    >
                      {msg.subject}
                    </div>
                    <div className="flex items-center gap-2">
                      {!msg.is_read ? (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono text-cyber-amber bg-cyber-amber/10 px-1.5 py-0.5 rounded">
                          Unread
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded">
                          Read
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )
            ) : (
              senders.map((sender) => (
                <div key={sender.id} className="p-4 border-b border-white/5 flex flex-col gap-2">
                  <span className="font-semibold text-sm text-foreground">
                    {sender.normalized_email}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">
                      Messages:{" "}
                      <span
                        className={
                          sender.message_count >= 8 && !sender.approved
                            ? "text-cyber-amber font-bold"
                            : ""
                        }
                      >
                        {sender.message_count} / 10
                      </span>
                    </span>
                    {sender.approved ? (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono text-success bg-success/10 px-1.5 py-0.5 rounded">
                        <CheckCircle className="w-3 h-3" /> Approved
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded">
                        Standard
                      </span>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-xs w-full"
                    onClick={() => toggleSenderApproval(sender.id, sender.approved)}
                  >
                    {sender.approved ? "Revoke Approval" : "Allow Further Messages"}
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Detail Pane */}
        <div
          className={`flex-1 flex flex-col bg-background/50 ${!selectedMessage ? "hidden md:flex" : "flex"}`}
        >
          {selectedMessage ? (
            <div className="flex flex-col h-full overflow-hidden">
              <div className="p-4 md:p-6 border-b border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="md:hidden text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-semibold text-foreground">
                      {selectedMessage.subject}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markAsRead(selectedMessage.id, !selectedMessage.is_read)}
                    >
                      {selectedMessage.is_read ? (
                        <Mail className="w-4 h-4" />
                      ) : (
                        <MailOpen className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-white/5">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{selectedMessage.name}</span>
                    <span className="text-sm text-muted-foreground">{selectedMessage.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(selectedMessage.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                {selectedMessage.message}
              </div>
              <div className="p-4 border-t border-white/5 bg-surface/30">
                <Button variant="cyber" asChild>
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
                  >
                    Reply via Email
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
              <Mail className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-mono text-sm">Select a message to view details</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
