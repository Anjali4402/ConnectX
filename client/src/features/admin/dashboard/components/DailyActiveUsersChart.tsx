"use client";
import React, { useState } from "react";

const DailyActiveUsersChart = () => {
  const [activeTab, setActiveTab] = useState<"Day" | "Week" | "Month">("Day");

  return (
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
  );
};

export default DailyActiveUsersChart;
