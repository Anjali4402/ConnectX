"use client";
import React, { useState } from "react";
import { MessageStream } from "../types";
import { initialMessages } from "../data";
import { ChevronLeft, ChevronRight, Shield, Users } from "lucide-react";

const MessageStreamTable = () => {
  const [messages, setMessages] = useState<MessageStream[]>(initialMessages);

  const [searchQuery, setSearchQuery] = useState("");
  const [monitorMode, setMonitorMode] = useState<"live" | "historical">("live");

  const handleToggleStatus = (id: string) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === id) {
          const nextStatus =
            msg.status === "SUSPICIOUS" ? "SAFE" : "SUSPICIOUS";
          return { ...msg, status: nextStatus };
        }
        return msg;
      }),
    );
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.receiver.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#152031]/10">
        <h3 className="text-lg font-semibold text-on-surface">
          Message Streams
        </h3>
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
                    msg.status === "SUSPICIOUS"
                      ? "bg-error/5"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {msg.sender.avatar ? (
                        <div
                          className="w-8 h-8 rounded-full bg-cover bg-center ring-1 ring-white/10 flex-shrink-0"
                          style={{
                            backgroundImage: `url('${msg.sender.avatar}')`,
                          }}
                        ></div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-[10px] font-bold text-on-error flex-shrink-0">
                          {msg.sender.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-on-surface">
                          {msg.sender.name}
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          ID: {msg.sender.id}
                        </div>
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
                      <span className="text-on-surface">
                        {msg.receiver.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p
                      className={`truncate font-light ${msg.status === "SUSPICIOUS" ? "text-error font-medium" : "text-on-surface-variant"}`}
                    >
                      {msg.text}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {msg.status === "SAFE" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400">
                        SAFE
                      </span>
                    )}
                    {msg.status === "SYSTEM" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-on-surface-variant">
                        SYSTEM
                      </span>
                    )}
                    {msg.status === "SUSPICIOUS" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error animate-pulse">
                        SUSPICIOUS
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-on-surface-variant">
                    {msg.time}
                  </td>
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
                <td
                  colSpan={6}
                  className="text-center py-10 text-on-surface-variant"
                >
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-xs">
        <span className="text-on-surface-variant">
          Showing 1-{filteredMessages.length} of {messages.length} messages
        </span>
        <div className="flex gap-1">
          <button
            className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary disabled:opacity-30"
            disabled
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary text-xs">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary text-xs">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-white/5 text-on-surface-variant hover:text-primary">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageStreamTable;
