"use client";
import { Terminal } from "lucide-react";
import React, { useState, useEffect } from "react";
import { LogEntry } from "../types";
import { initialLogs } from "../data";

const SystemLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

  // Simulated scrolling system logs
  useEffect(() => {
    const timer = setInterval(() => {
      const timeStr =
        new Date().toLocaleTimeString("en-GB", { hour12: false }) +
        "." +
        Math.floor(Math.random() * 999)
          .toString()
          .padStart(3, "0");
      const logTags = [
        { tag: "MODERATION_AGENT", color: "text-primary" },
        { tag: "GATEWAY", color: "text-secondary" },
        { tag: "STORAGE", color: "text-tertiary" },
        { tag: "FIREWALL", color: "text-error" },
      ];
      const selected = logTags[Math.floor(Math.random() * logTags.length)];
      const newLog: LogEntry = {
        time: timeStr,
        tag: selected.tag,
        color: selected.color,
        content: `Incoming secure packet analyzed from Edge_Node_${Math.floor(Math.random() * 99) + 1}.`,
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 14)]);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:col-span-2 glass-panel rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold flex items-center gap-2 text-on-surface">
          <Terminal className="h-5 w-5 text-primary" />
          Live System Logs
        </h3>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-error/10 text-error text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>{" "}
            ERROR
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
            CONNECTED
          </div>
        </div>
      </div>
      <div className="space-y-3 font-mono text-[11px] h-48 overflow-y-auto custom-scrollbar pr-2">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`flex gap-4 p-2 rounded hover:bg-white/3 transition-opacity duration-500 ${
              log.tag === "CRITICAL_ALERT"
                ? "bg-error/5 border-l border-error/20"
                : ""
            }`}
          >
            <span className="text-on-surface-variant/40 whitespace-nowrap">
              {log.time}
            </span>
            <span className={`${log.color} font-semibold`}>[{log.tag}]</span>
            <span className="text-on-surface-variant">{log.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemLogs;
