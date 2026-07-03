import { Download, Filter } from "lucide-react";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-on-surface">
          Message Monitoring
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Real-time analysis and message moderation overview.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg glass-panel hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2 text-on-surface">
          <Filter className="h-4 w-4" /> Filter
        </button>
        <button className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all text-sm font-medium flex items-center gap-2">
          <Download className="h-4 w-4" /> Export Logs
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
