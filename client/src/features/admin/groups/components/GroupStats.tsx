import { Palette, Terminal, ZapIcon } from "lucide-react";
import React from "react";

const GroupStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
          <Terminal className="w-30 h-30 text-primary" />
        </div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-primary-container/20 rounded-2xl text-primary">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded-md">
            +4% vs last week
          </span>
        </div>
        <p className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">
          Active Groups
        </p>
        <h3 className="text-4xl font-bold text-on-surface mt-1">1,284</h3>
      </div>

      <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
          <ZapIcon className="w-30 h-30" />
        </div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-[#b9c8de]/10 rounded-2xl text-[#b9c8de]">
            <Palette className="h-5 w-5" />
          </div>
          <span className="text-[#b9c8de] font-bold text-xs bg-white/5 px-2 py-1 rounded-md">
            Trending
          </span>
        </div>
        <p className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">
          New Groups Today
        </p>
        <h3 className="text-4xl font-bold text-on-surface mt-1">42</h3>
      </div>

      <div className="glass-panel p-6 rounded-3xl bg-primary-container/10 border-primary-container/20 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <p className="text-primary-container text-lg font-semibold mb-1">
          System Integrity
        </p>
        <div className="text-4xl font-bold text-on-background">99.9%</div>
        <p className="text-on-surface-variant text-xs mt-2">
          All sync protocols active
        </p>
      </div>
    </div>
  );
};

export default GroupStats;
