"use client";

import React, { useState, useEffect } from "react";
import { 
  Filter, 
  Download, 
  MessageSquare, 
  Flag, 
  Terminal, 
  History, 
  Timer, 
  Shield, 
  ChevronLeft, 
  ChevronRight,
  AlertTriangle,
  Users
} from "lucide-react";

interface MessageStream {
  id: string;
  sender: {
    name: string;
    id: string;
    avatar?: string;
  };
  receiver: {
    name: string;
    isGroup: boolean;
  };
  text: string;
  status: "SAFE" | "SUSPICIOUS" | "SYSTEM";
  time: string;
}

interface LogEntry {
  time: string;
  tag: string;
  color: string;
  content: string;
}

interface ModItem {
  id: string;
  type: string;
  risk: "High Risk" | "Medium" | "Low";
  title: string;
  snippet: string;
}

const initialMessages: MessageStream[] = [
  {
    id: "1",
    sender: {
      name: "Elena Vance",
      id: "#4920",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPPFWqxKLj-7RDX0RkTkBxgQG7wTU6p7hk4KvEWhlfCAiMkoUMbDlKgraif7dX-YuhRV0_yJ8A61dERW70qf06PGxm78ExCfh70LDZtSX-jqWXeSwDlnNLvDy4oafYXGDnrrBy1ocRmxp19c_x_jsX0cHDAp00a1EhdXiOMi2hCzBlUulW2mNxGkw6_hx1avI2Gdo_cZWDT8XVKWjvc9TUHtPfFq1Z7cjLr79EKwaeDnqvJXnseFvIYAil4lOZFdKGX2bX6nNEwM"
    },
    receiver: {
      name: "John Doe",
      isGroup: false
    },
    text: "I've shared the encrypted credentials in the secure vault...",
    status: "SAFE",
    time: "Just now"
  },
  {
    id: "2",
    sender: {
      name: "S. Young",
      id: "#8812"
    },
    receiver: {
      name: "Marcus Wei",
      isGroup: false
    },
    text: "URGENT: Requesting unauthorized bypass for node #229...",
    status: "SUSPICIOUS",
    time: "12m ago"
  },
  {
    id: "3",
    sender: {
      name: "Sarah K.",
      id: "#1109"
    },
    receiver: {
      name: "Team Alpha",
      isGroup: true
    },
    text: "The deployment for the Aetheric cluster is complete.",
    status: "SYSTEM",
    time: "45m ago"
  },
  {
    id: "4",
    sender: {
      name: "Leila Omar",
      id: "#5521",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIBnhXnaHictwly0ZdI4BC85t3A7870dAQT47H9_HCEdmL3d2TqBLI9GpjuaYlBq-CiE9tZkYNqMCHqK6UdT4ARqEyemVhp-2WPyE5cB16f3BP8b5gwOcvYipJIeLptxigNSQZ2UB3gDu9OXR3H5RCr9ivb6p_6e1gIesfTJobi7ru92Di53XtqNeOOQUjhbxiirBoScqORJBTvbuo90NDgM5IRnpCLubFaGKqeI1Bj3x9NgO8hePdLCx2AFWBpcZhvbEc_9EH4uA"
    },
    receiver: {
      name: "Rick Sanchez",
      isGroup: false
    },
    text: "Can we schedule a sync for the new UI redesign?",
    status: "SAFE",
    time: "1h ago"
  }
];

const initialLogs: LogEntry[] = [
  { time: "14:22:01.032", tag: "MODERATION_AGENT", color: "text-primary", content: "Scanned packet ID_39221: No policy violations found." },
  { time: "14:22:05.118", tag: "CRITICAL_ALERT", color: "text-error", content: "Bypass attempt detected by user #8812 in Private Channel B." },
  { time: "14:22:12.449", tag: "GATEWAY", color: "text-secondary", content: "User Elena Vance connected via TLS 1.3 (Node: EU-West-1)" },
  { time: "14:22:15.891", tag: "HEARTBEAT", color: "text-on-surface-variant/60", content: "Shard 04 active, latency 22ms." },
  { time: "14:22:20.001", tag: "MODERATION_AGENT", color: "text-primary", content: "Sentiment analysis complete for Thread_Alpha: Positive (0.88)" }
];

const initialModQueue: ModItem[] = [
  {
    id: "m1",
    type: "Spam Filter",
    risk: "High Risk",
    title: "Repeated crypto link detection",
    snippet: '"Join our new airdrop now! Free tokens..."'
  },
  {
    id: "m2",
    type: "Conduct Policy",
    risk: "Medium",
    title: "Potential aggressive language",
    snippet: '"I don\'t think you understand how this works..."'
  }
];

export default function AdminMessageManagementPage() {
  const [messages, setMessages] = useState<MessageStream[]>(initialMessages);
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [modQueue, setModQueue] = useState<ModItem[]>(initialModQueue);
  const [searchQuery, setSearchQuery] = useState("");
  const [monitorMode, setMonitorMode] = useState<"live" | "historical">("live");

  // Simulated scrolling system logs
  useEffect(() => {
    const timer = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString("en-GB", { hour12: false }) + "." + Math.floor(Math.random() * 999).toString().padStart(3, "0");
      const logTags = [
        { tag: "MODERATION_AGENT", color: "text-primary" },
        { tag: "GATEWAY", color: "text-secondary" },
        { tag: "STORAGE", color: "text-tertiary" },
        { tag: "FIREWALL", color: "text-error" }
      ];
      const selected = logTags[Math.floor(Math.random() * logTags.length)];
      const newLog: LogEntry = {
        time: timeStr,
        tag: selected.tag,
        color: selected.color,
        content: `Incoming secure packet analyzed from Edge_Node_${Math.floor(Math.random() * 99) + 1}.`
      };

      setLogs(prev => [newLog, ...prev.slice(0, 14)]);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleToggleStatus = (id: string) => {
    setMessages(prev => 
      prev.map(msg => {
        if (msg.id === id) {
          const nextStatus = msg.status === "SUSPICIOUS" ? "SAFE" : "SUSPICIOUS";
          return { ...msg, status: nextStatus };
        }
        return msg;
      })
    );
  };

  const handleResolveModItem = (id: string) => {
    setModQueue(prev => prev.filter(item => item.id !== id));
  };

  const filteredMessages = messages.filter(msg => 
    msg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.receiver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-on-surface">Message Monitoring</h2>
          <p className="text-sm text-on-surface-variant mt-1">Real-time analysis and message moderation overview.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg glass-panel hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2 text-on-surface">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all text-sm font-medium flex items-center gap-2">
            <Download className="h-4 w-4" /> Export Logs
          </button>
        </div>
      </div>

      {/* Bento Grid for Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Stat Card 1: Total Messages */}
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-[#adb4ce] uppercase tracking-wider">Total Messages</p>
              <h3 className="text-3xl font-bold mt-2 text-on-surface">128,492</h3>
            </div>
            <div className="bg-primary/10 p-2 rounded-xl text-primary">
              <MessageSquare className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span> +12% from last week
          </div>
        </div>

        {/* Stat Card 2: Flagged Messages (Critical) */}
        <div className="glass-panel rounded-2xl p-6 border-l-4 border-error relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-[#adb4ce] uppercase tracking-wider">Flagged Messages</p>
              <h3 className="text-3xl font-bold mt-2 text-error">142</h3>
            </div>
            <div className="bg-error/10 p-2 rounded-xl text-error">
              <Flag className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-error font-medium">
            <AlertTriangle className="h-4 w-4 text-error" /> 24 pending review
          </div>
        </div>

        {/* Stat Card 3: System Logs */}
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-[#adb4ce] uppercase tracking-wider">System Logs</p>
              <h3 className="text-3xl font-bold mt-2 text-on-surface">1,024</h3>
            </div>
            <div className="bg-[#b9c8de]/10 p-2 rounded-xl text-[#b9c8de]">
              <Terminal className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant font-medium">
            <History className="h-4 w-4" /> Updated 2m ago
          </div>
        </div>

        {/* Stat Card 4: Moderation Speed */}
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-[#adb4ce] uppercase tracking-wider">Resolution Time</p>
              <h3 className="text-3xl font-bold mt-2 text-on-surface">1.2h</h3>
            </div>
            <div className="bg-[#bec6e0]/10 p-2 rounded-xl text-[#bec6e0]">
              <Timer className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-green-400"></span> -15m from avg
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#152031]/10">
          <h3 className="text-lg font-semibold text-on-surface">Message Streams</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => setMonitorMode("live")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                monitorMode === "live" 
                  ? "bg-primary/20 text-primary border-primary/20" 
                  : "bg-white/5 text-on-surface-variant border-white/5 hover:bg-white/10"
              }`}
            >
              Live Monitor
            </button>
            <button 
              onClick={() => setMonitorMode("historical")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                monitorMode === "historical" 
                  ? "bg-primary/20 text-primary border-primary/20" 
                  : "bg-white/5 text-on-surface-variant border-white/5 hover:bg-white/10"
              }`}
            >
              Historical
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f2a3c]/30 text-on-surface-variant text-xs uppercase tracking-widest font-semibold">
                <th className="px-6 py-4">Sender</th>
                <th className="px-6 py-4">Receiver</th>
                <th className="px-6 py-4">Message snippet</th>
                <th className="px-6 py-4 text-center">Flags</th>
                <th className="px-6 py-4 text-right">Time</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`group transition-all ${
                      msg.status === "SUSPICIOUS" ? "bg-error/5" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {msg.sender.avatar ? (
                          <div 
                            className="w-8 h-8 rounded-full bg-cover bg-center ring-1 ring-white/10 flex-shrink-0"
                            style={{ backgroundImage: `url('${msg.sender.avatar}')` }}
                          ></div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-[10px] font-bold text-on-error flex-shrink-0">
                            {msg.sender.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-on-surface">{msg.sender.name}</div>
                          <div className="text-[10px] text-on-surface-variant">ID: {msg.sender.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {msg.receiver.isGroup ? (
                          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                            <Users className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#1c2b3c] flex items-center justify-center text-[10px] font-semibold text-[#c0c1ff]">
                            {msg.receiver.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <span className="text-on-surface">{msg.receiver.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className={`truncate font-light ${msg.status === "SUSPICIOUS" ? "text-error font-medium" : "text-on-surface-variant"}`}>
                        {msg.text}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {msg.status === "SAFE" && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400">SAFE</span>
                      )}
                      {msg.status === "SYSTEM" && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-on-surface-variant">SYSTEM</span>
                      )}
                      {msg.status === "SUSPICIOUS" && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error animate-pulse">SUSPICIOUS</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right text-xs text-on-surface-variant">{msg.time}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleToggleStatus(msg.id)}
                        className={`p-2 rounded-lg transition-all ${
                          msg.status === "SUSPICIOUS" 
                            ? "bg-error/10 text-error hover:bg-error/20" 
                            : "opacity-0 group-hover:opacity-100 hover:bg-white/5 text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        <Shield className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-on-surface-variant">No messages found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-xs">
          <span className="text-on-surface-variant">Showing 1-{filteredMessages.length} of {messages.length} messages</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary disabled:opacity-30" disabled>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary text-xs">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary text-xs">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Live System Logs & Moderation Queue Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live System Logs */}
        <div className="lg:col-span-2 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold flex items-center gap-2 text-on-surface">
              <Terminal className="h-5 w-5 text-primary" />
              Live System Logs
            </h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-error/10 text-error text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> ERROR
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> CONNECTED
              </div>
            </div>
          </div>
          <div className="space-y-3 font-mono text-[11px] h-48 overflow-y-auto custom-scrollbar pr-2">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={`flex gap-4 p-2 rounded hover:bg-white/[0.03] transition-opacity duration-500 ${
                  log.tag === "CRITICAL_ALERT" ? "bg-error/5 border-l border-error/20" : ""
                }`}
              >
                <span className="text-on-surface-variant/40 whitespace-nowrap">{log.time}</span>
                <span className={`${log.color} font-semibold`}>[{log.tag}]</span>
                <span className="text-on-surface-variant">{log.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moderation Queue */}
        <div className="glass-panel rounded-3xl p-6 flex flex-col">
          <h3 className="font-semibold mb-6 flex items-center gap-2 text-on-surface">
            <AlertTriangle className="h-5 w-5 text-error" />
            Moderation Queue
          </h3>
          <div className="space-y-4 flex-1">
            {modQueue.length > 0 ? (
              modQueue.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => handleResolveModItem(item.id)}
                  title="Click to resolve issue"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-error/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-wider">{item.type}</span>
                    <span className={`text-[10px] font-semibold ${item.risk === "High Risk" ? "text-error" : "text-primary"}`}>{item.risk}</span>
                  </div>
                  <p className="text-xs text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-[10px] text-on-surface-variant italic">{item.snippet}</p>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-on-surface-variant">
                Moderation queue is empty. Good job!
              </div>
            )}
          </div>
          <button className="w-full mt-6 py-2 rounded-xl bg-[#1f2a3c] text-xs font-semibold hover:bg-white/10 transition-all border border-white/5 text-on-surface">
            View All Queued ({modQueue.length * 12})
          </button>
        </div>
      </div>
    </section>
  );
}
