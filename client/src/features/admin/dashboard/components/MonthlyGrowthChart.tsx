import React from "react";

const MonthlyGrowthChart = () => {
  return (
    <div className="glass-panel rounded-[2rem] p-8 space-y-6">
      <div>
        <h3 className="text-lg font-bold text-on-surface">Monthly Growth</h3>
        <p className="text-xs text-on-surface-variant">New user acquisition</p>
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
  );
};

export default MonthlyGrowthChart;
