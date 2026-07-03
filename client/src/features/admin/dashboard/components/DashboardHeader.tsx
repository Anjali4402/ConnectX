import { Download } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
