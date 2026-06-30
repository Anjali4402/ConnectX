"use client";
import React, { useState } from "react";

const AccountSettings = () => {
  const [displayName, setDisplayName] = useState("Adrian Thorne");
  const [username, setUsername] = useState("adrian_thorne_ux");
  const [bio, setBio] = useState(
    "Design Lead specializing in high-performance communication tools. Currently building the future of messaging at Luminal.",
  );

  return (
    <div className="rounded-3xl p-8 shadow-sm bg-white/5 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold text-white">Account Settings</h3>
        <button className="text-blue-400 text-xs hover:underline">
          Save changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs text-gray-400">Display Name</label>
          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all text-white"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs text-gray-400">Username</label>
          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all text-white"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-xs text-gray-400">Bio</label>
          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all text-white resize-none"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
