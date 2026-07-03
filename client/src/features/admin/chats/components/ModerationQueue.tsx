"use client";
import { AlertTriangle } from "lucide-react";
import React, { useState } from "react";
import { ModItem } from "../types";
import { initialModQueue } from "../data";

const ModerationQueue = () => {
  const [modQueue, setModQueue] = useState<ModItem[]>(initialModQueue);

  const handleResolveModItem = (id: string) => {
    setModQueue((prev) => prev.filter((item) => item.id !== id));
  };

  return (
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
                <span className="text-[10px] uppercase font-bold text-on-surface-variant/40 tracking-wider">
                  {item.type}
                </span>
                <span
                  className={`text-[10px] font-semibold ${item.risk === "High Risk" ? "text-error" : "text-primary"}`}
                >
                  {item.risk}
                </span>
              </div>
              <p className="text-xs text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-[10px] text-on-surface-variant italic">
                {item.snippet}
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-on-surface-variant">
            Moderation queue is empty. Good job!
          </div>
        )}
      </div>
      <button className="w-full mt-6 py-2 rounded-xl bg-surface-container-high text-xs font-semibold hover:bg-white/10 transition-all border border-white/5 text-on-surface">
        View All Queued ({modQueue.length * 12})
      </button>
    </div>
  );
};

export default ModerationQueue;
