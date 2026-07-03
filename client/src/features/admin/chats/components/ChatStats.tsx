import {
  MessageSquare,
  Flag,
  Terminal,
  History,
  Timer,
  AlertTriangle,
} from "lucide-react";

const ChatStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Stat Card 1: Total Messages */}
      <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">
              Total Messages
            </p>
            <h3 className="text-3xl font-bold mt-2 text-on-surface">128,492</h3>
          </div>
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>{" "}
          +12% from last week
        </div>
      </div>

      {/* Stat Card 2: Flagged Messages (Critical) */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-error relative overflow-hidden group">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">
              Flagged Messages
            </p>
            <h3 className="text-3xl font-bold mt-2 text-error">142</h3>
          </div>
          <div className="bg-error/10 p-2 rounded-xl text-error">
            <Flag className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-error font-medium">
          <AlertTriangle className="h-4 w-4 text-error" /> 24 pending review
        </div>
      </div>

      {/* Stat Card 3: System Logs */}
      <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">
              System Logs
            </p>
            <h3 className="text-3xl font-bold mt-2 text-on-surface">1,024</h3>
          </div>
          <div className="bg-[#b9c8de]/10 p-2 rounded-xl text-[#b9c8de]">
            <Terminal className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant font-medium">
          <History className="h-4 w-4" /> Updated 2m ago
        </div>
      </div>

      {/* Stat Card 4: Moderation Speed */}
      <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">
              Resolution Time
            </p>
            <h3 className="text-3xl font-bold mt-2 text-on-surface">1.2h</h3>
          </div>
          <div className="bg-[#bec6e0]/10 p-2 rounded-xl text-[#bec6e0]">
            <Timer className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
          <span className="h-2 w-2 rounded-full bg-green-400"></span> -15m from
          avg
        </div>
      </div>
    </div>
  );
};

export default ChatStats;
