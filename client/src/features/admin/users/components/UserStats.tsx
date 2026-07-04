import React from "react";

const UserStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="glass-panel p-5 rounded-2xl">
        <p className="text-xs text-on-secondary-container mb-2 font-bold uppercase tracking-wider">
          Total Users
        </p>
        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-on-surface">12,482</span>
          <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1.5">
            +4.2%
          </span>
        </div>
      </div>
      <div className="glass-panel p-5 rounded-2xl">
        <p className="text-xs text-on-secondary-container mb-2 font-bold uppercase tracking-wider">
          Active Now
        </p>
        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-on-surface">1,894</span>
          <div className="flex items-center gap-1 text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded mb-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>{" "}
            Live
          </div>
        </div>
      </div>
      <div className="glass-panel p-5 rounded-2xl">
        <p className="text-xs text-on-secondary-container mb-2 font-bold uppercase tracking-wider">
          Banned
        </p>
        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-on-surface">241</span>
          <span className="text-[10px] text-error bg-error/10 px-1.5 py-0.5 rounded mb-1.5">
            -2%
          </span>
        </div>
      </div>
      <div className="glass-panel p-5 rounded-2xl">
        <p className="text-xs text-on-secondary-container mb-2 font-bold uppercase tracking-wider">
          New Registrations
        </p>
        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-on-surface">48</span>
          <span className="text-[10px] text-on-surface-variant bg-white/5 px-1.5 py-0.5 rounded mb-1.5">
            Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
