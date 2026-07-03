"use client";
import { MoreHorizontal, Reply } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FeedMessage } from "../types";
import { initialFeed, msgs, names } from "../data";

const LiveMessageStream = () => {
  const [feed, setFeed] = useState<FeedMessage[]>(initialFeed);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.6) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
        const newMsg: FeedMessage = {
          id: Date.now().toString(),
          name: randomName,
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6UQ-GAtnBFA8_FAyQF_gjELYjxtR8xSO2RvJdLCaZ_hcsNv3JO2xk6iJeUzRwK98Ac9wt-Cu5r4mfGEb8OEIcZfm3gYQyxdzUOjF8ZKG8GFpMiH7FLphFtqNQ2De6CAUa5HPMjeq6Q0yTt3oeONtoGC4iF_lwHk65lm7OxV-VvhRZGBxVVwg7sgjrb7GUt7x1zJbPHzTgoNsmTE1Ink27fc2xIk_KoIURCn6KHI8jQfPxwJmAkYg4kjhIokvNu7Sg_dYXQhVXzk",
          time: "Just now",
          text: randomMsg,
          category: Math.random() > 0.5 ? "System" : undefined,
          isNew: true,
        };
        setFeed((prev) => [newMsg, ...prev.slice(0, 8)]);
      }
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:col-span-2 glass-panel rounded-[2rem] p-0 flex flex-col overflow-hidden h-112.5">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-[0_0_8px_#34d399]"></div>
          <h3 className="text-lg font-bold text-on-surface">
            Live Message Stream
          </h3>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-all">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {feed.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 group ${
              message.isNew
                ? "bg-primary/5 border-primary/20 animate-in fade-in zoom-in duration-500"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <div className="h-10 w-10 relative rounded-full border border-primary/30 p-0.5 shrink-0">
              <Image
                className=" object-cover rounded-full hover:scale-105 transition-transform cursor-pointer"
                fill
                src={message.avatar}
                alt={message.name}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-primary">
                  {message.name}
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  {message.time}
                </span>
              </div>
              <p className="text-sm text-on-surface font-light">
                {message.text}
              </p>
              <div className="mt-2 flex gap-2">
                {message.category && (
                  <span className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary-container rounded border border-primary/20 uppercase font-bold">
                    {message.category}
                  </span>
                )}
                <span className="text-[9px] px-2 py-0.5 bg-white/5 text-on-surface-variant rounded border border-white/10 uppercase font-bold">
                  ID: #{message.id.slice(-5)}
                </span>
              </div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-primary">
              <Reply className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMessageStream;
