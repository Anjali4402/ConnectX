import React from "react";
import { Shield } from "lucide-react";

const SecurityStatus = () => {
  return (
    <div className="relative w-full h-48 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center group border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      <div className="relative z-10 text-center space-y-2">
        <div className="flex justify-center mb-2">
          <Shield className="w-8 h-8 text-blue-400" />
        </div>
        <p className="text-xs text-blue-400 tracking-[0.2em] uppercase">
          Security Status
        </p>
        <h4 className="text-2xl font-semibold text-white">
          End-to-End Encrypted
        </h4>
        <p className="text-base text-gray-400">
          Your profile data and messages are protected by Luminal Shield.
        </p>
      </div>
    </div>
  );
};

export default SecurityStatus;
