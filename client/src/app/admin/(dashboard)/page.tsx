"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Network,
  MessageSquare,
  Zap,
  Download,
  Reply,
  CheckCircle2,
  Cpu,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

interface FeedMessage {
  id: string;
  name: string;
  avatar: string;
  time: string;
  text: string;
  category?: string;
  isNew?: boolean;
}

const initialFeed: FeedMessage[] = [
  {
    id: "1",
    name: "Alex Chen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Dlg4t5_9UwQSbK-Lna3oWyqJ4Pb0Io5bLAjLcxPWcULnUUR0SX68NARB9IcfB2qWNVi5Tb-5vze_X-zqoBi-nRQvJaAcr0TUTk2BUfBwSxvjyCueMo5PHuk9mHHOPWdSZY6n0VOQ2HBh-HHALB0D5Dj1HfdPcF2bCGc_0_rq64zOZSL169Jz5CT_wEfKUxWkMLk-_2NPNn0Dc-jjYfhG9sZ6dWDwAYs-cpSfkfxuZe4-wOZCDDMRGNHhYeHgfyY63Kw0leJf2sE",
    time: "Just now",
    text: "The latest integration update is working perfectly on the mobile client.",
    category: "Feedback",
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvygviTOowpU9nnbSBonlRF2Yr_T01ai4kzSPTlowLpWBEVLBoVT8mAVgEy3RUFQhg-kEplD62Vtz4bEKV7Vw2vHJW60y7zthsebeeYSeJX0499H7IWhYJFLXhgTDXnZcYf-_WuQNz5ZIZNAFnixjM_cjigS9Yfm-87DYsf-FlT5a3AbOaVumAZkq1-1yh2ftzE08RS6-F_M7tuX-VCLfLBsD8v4tW47E79stvpNeoTCOcszWjwUa2Iabe73mF5m-fxkmHZ5JLAI0",
    time: "2 mins ago",
    text: "Is anyone else seeing a delay in the webgl rendering on the analytics tab?",
  },
  {
    id: "3",
    name: "Mark Thompson",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjmLm7UL_Fl_WLoMQfVtI2puN8ra5WwsmHDDRP7dm1whC7dZ8uhZoICms7c0PsZg8R_nrNw4ShELZCwUbGT0AZjFS4eFbMTUlZ_LKIang5HFT_pkWiwqehpxJEkOktTxdaOUvBM358B1cuJviLlWWGK4b3aZ312lBT08IalDXFdGxImuTxyl8NpI3bE4gZb00U4cA0JGmlkSlq5xVo9js_S2ys8dLaCvseDF0DjhVj2ttuJamweWGP6zDT9vJufPxeg8RscdvyOi4",
    time: "15 mins ago",
    text: "Confirmed the server migration completed at 02:00 UTC.",
  },
];

const names = [
  "Jordan Smith",
  "Taylor Reed",
  "Casey Blake",
  "Morgan Lee",
  "Dana White",
  "Robin Banks",
];
const msgs = [
  "New order from Region A processed successfully.",
  "Help desk ticket #1203 closed.",
  "System maintenance scheduled for 04:00 AM.",
  "Performance spikes detected in the North node.",
  "Connection latency dropped below 5ms worldwide.",
  "API gateway scaling event triggered successfully.",
];

export default function AdminDashboardPage() {
  const [feed, setFeed] = useState<FeedMessage[]>(initialFeed);
  const [activeTab, setActiveTab] = useState<"Day" | "Week" | "Month">("Day");

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
    <div className="space-y-6">
      {/* Header Section */}
      <section className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-on-surface leading-tight">
            Dashboard
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Welcome back, system overview is healthy.
          </p>
        </div>
        <div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </section>

      {/* Stats Cards Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Total Users */}
        <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:border-primary/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Users className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
              +12%
            </span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container font-bold">
              Total Users
            </p>
            <p className="text-2xl font-bold text-on-surface">12,842</p>
          </div>
        </div>

        {/* Today's Orders */}
        <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:border-primary/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
              +5.4%
            </span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container font-bold">
              Today&apos;s Orders
            </p>
            <p className="text-2xl font-bold text-on-surface">432</p>
          </div>
        </div>

        {/* Total Groups */}
        <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:border-primary/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Network className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-on-surface-variant bg-white/5 px-2 py-0.5 rounded-full">
              Static
            </span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container font-bold">
              Total Groups
            </p>
            <p className="text-2xl font-bold text-on-surface">156</p>
          </div>
        </div>

        {/* Total Messages */}
        <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between hover:border-primary/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <MessageSquare className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
              +21%
            </span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container font-bold">
              Total Messages
            </p>
            <p className="text-2xl font-bold text-on-surface">1.2M</p>
          </div>
        </div>

        {/* Messages Today (Live Highlight) */}
        <div className="glass-panel p-5 rounded-3xl flex flex-col justify-between border-primary/40 bg-primary/5 group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-0.5 rounded-full animate-pulse">
              Live
            </span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container font-bold">
              Messages Today
            </p>
            <p className="text-2xl font-bold text-on-surface">24,591</p>
          </div>
        </div>
      </section>

      {/* Charts & Growth Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Active Users Line Chart */}
        <div className="lg:col-span-2 glass-panel rounded-[2rem] p-8 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-on-surface">
                Daily Active Users
              </h3>
              <p className="text-xs text-on-surface-variant">
                Real-time engagement trend
              </p>
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1 rounded-full border border-white/5">
              {(["Day", "Week", "Month"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-primary-container/20 text-[#c0c1ff]"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 relative flex items-end justify-between gap-1 mt-4">
            {/* Grid Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              <div className="border-b border-white w-full h-0"></div>
              <div className="border-b border-white w-full h-0"></div>
              <div className="border-b border-white w-full h-0"></div>
              <div className="border-b border-white w-full h-0"></div>
            </div>
            {/* SVG Chart Overlay */}
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 40"
            >
              <path
                d="M0,35 Q10,32 20,25 T40,15 T60,20 T80,5 T100,10"
                fill="none"
                stroke="#c0c1ff"
                strokeWidth="1.5"
              ></path>
              <path
                d="M0,35 Q10,32 20,25 T40,15 T60,20 T80,5 T100,10 V40 H0 Z"
                fill="url(#indigo-grad)"
                opacity="0.1"
              ></path>
              <defs>
                <linearGradient id="indigo-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8083ff"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 w-full flex justify-between px-1 text-[9px] text-on-secondary-container font-bold uppercase tracking-tighter">
              <span>00:00</span>
              <span>04:00</span>
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>

        {/* Growth Bar Chart */}
        <div className="glass-panel rounded-[2rem] p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-on-surface">
              Monthly Growth
            </h3>
            <p className="text-xs text-on-surface-variant">
              New user acquisition
            </p>
          </div>
          <div className="flex items-end justify-between h-64 gap-2">
            <div className="flex-1 bg-white/5 rounded-t-lg group relative h-[40%] hover:bg-primary/20 transition-all cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] text-primary font-bold">
                1.2k
              </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-t-lg group relative h-[60%] hover:bg-primary/20 transition-all cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] text-primary font-bold">
                1.8k
              </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-t-lg group relative h-[55%] hover:bg-primary/20 transition-all cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] text-primary font-bold">
                1.6k
              </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-t-lg group relative h-[85%] hover:bg-primary/20 transition-all cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] text-primary font-bold">
                2.4k
              </div>
            </div>
            <div className="flex-1 bg-primary/40 rounded-t-lg group relative h-[95%] shadow-lg shadow-primary/20 cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-primary font-bold">
                2.9k
              </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-t-lg group relative h-[70%] hover:bg-primary/20 transition-all cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] text-primary font-bold">
                2.1k
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-on-secondary-container uppercase pt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </section>

      {/* Live Stream & Health */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Message Stream */}
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

        {/* Server Status Health Cards */}
        <div className="glass-panel rounded-[2rem] p-8 space-y-6 flex flex-col justify-between overflow-hidden relative">
          <div>
            <h3 className="text-lg font-bold text-on-surface">Server Health</h3>
            <div className="mt-6 space-y-6">
              {/* CPU */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
                  <span>Core CPU</span>
                  <span className="text-primary">24%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
              {/* Memory */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
                  <span>Memory Load</span>
                  <span className="text-primary-container">68%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-container rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
              {/* Latency */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-on-secondary-container">
                  <span>Database Latency</span>
                  <span className="text-emerald-400">12ms</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400/60 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface flex items-center gap-1.5">
                  All nodes online
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 fill-current" />
                </p>
                <p className="text-[10px] text-on-surface-variant">
                  Global uptime: 99.98%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
