import React from "react";
import { Users, ShoppingCart, Network, MessageSquare, Zap } from "lucide-react";

const StatsCards = () => {
  return (
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
  );
};

export default StatsCards;
