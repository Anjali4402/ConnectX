import React from "react";
import { CheckCircle2, Cpu } from "lucide-react";

const ServerHealth = () => {
  return (
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
  );
};

export default ServerHealth;
