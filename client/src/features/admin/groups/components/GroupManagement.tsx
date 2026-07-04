"use client";

import React, { useState } from "react";
import GroupHeader from "@/features/admin/groups/components/GroupHeader";
import GroupTable from "@/features/admin/groups/components/GroupTable";
import GroupStats from "@/features/admin/groups/components/GroupStats";
import { Group } from "@/features/admin/groups/type";
import { initialGroups } from "@/features/admin/groups/data";

const GroupManagement = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    const newGroup: Group = {
      id: Date.now().toString(),
      name: newGroupName,
      description: newGroupDesc || "General Discussion",
      creator: {
        name: "Admin User",
      },
      members: 1,
      iconType: "terminal",
    };

    setGroups((prev) => [...prev, newGroup]);
    setNewGroupName("");
    setNewGroupDesc("");
    // setShowAddForm(false);
  };

  const handleDeleteGroup = (groupId: string) => {
    if (confirm("Are you sure you want to delete this group?")) {
      setGroups((prev) => prev.filter((g) => g.id !== groupId));
    }
  };

  return (
    <section className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <GroupHeader setShowAddForm={setShowAddForm} />

      {/* New Group Popover/Form */}
      {/* {showAddForm && (
        <div className="glass-panel p-6 rounded-3xl space-y-4 border border-[#8083ff]/30 bg-[#081425]/90 max-w-lg">
          <h3 className="text-lg font-bold text-primary">
            Create New Administrative Group
          </h3>
          <form onSubmit={handleCreateGroup} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-on-surface-variant font-bold mb-1">
                Group Name
              </label>
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                required
                placeholder="e.g. System Security"
                className="w-full bg-[#111c2d] border border-white/5 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-on-surface-variant font-bold mb-1">
                Description / Topic
              </label>
              <input
                type="text"
                value={newGroupDesc}
                onChange={(e) => setNewGroupDesc(e.target.value)}
                placeholder="e.g. Server firewall administration"
                className="w-full bg-[#111c2d] border border-white/5 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface"
              />
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm font-semibold rounded-xl text-on-surface"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-on-primary text-sm font-semibold rounded-xl"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )} */}

      {/* Overview Cards (Bento Style) */}
      <GroupStats />

      {/* Table Section */}
      <GroupTable groups={groups} handleDeleteGroup={handleDeleteGroup} />
    </section>
  );
};

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default GroupManagement;
