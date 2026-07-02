"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Trash2, 
  Filter, 
  Download, 
  Terminal, 
  Palette, 
  Shield, 
  Globe 
} from "lucide-react";

interface Group {
  id: string;
  name: string;
  description: string;
  creator: {
    name: string;
    avatar?: string;
  };
  members: number;
  iconType: "terminal" | "palette" | "security" | "global";
}

const initialGroups: Group[] = [
  {
    id: "1",
    name: "Engineering Alpha",
    description: "Core Infrastructure",
    creator: {
      name: "Sarah Jenkins",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC760XM7xdH8K4cSvwpBInRTBfCASEt7VACERXXbZmIH49NLrR0m-iFjooB3vPwdCPx0w7RibMvrQXkx2cbD4QmsqyyfpcjuAyF2U5RMOXYvTOLJ5Pr05EkoNye4cqiuJGWl9Ij0eIKzGWFm4i3TyBDvXhs3bf6Ws4eDMqCH8Fdyyinwa3W-pNmabZSFWJQ7Tt0lQy0PJokhCREM1mp48ooS0y3WWdScZpFEtlEyV7--nM9dan5UvsK4cyx-DInu_KfhbgN-XIehnE"
    },
    members: 156,
    iconType: "terminal"
  },
  {
    id: "2",
    name: "Creative Studio",
    description: "UI/UX & Branding",
    creator: {
      name: "Marc Volkov",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5YYLsbkUK0e2NEPoIUpryoc5Op9YRDfJbw0OCoUon5APVVn3GtbKoJr4-QqoUIvjOqhbNLtXl9WQHSPoylDl1HvmMpOT4fWgSj4v3S_zC3Q_OW6jpNsyZ3mxuv8rmfBLD_Uo2vRR3lKWq7RMAzNMEyUFfirfR66jbnEFAHF6QO_IIlRSG4nMNQn5AsJ8LHhigEUyRpj783JfBX-vTq7IvCHPS88EWQFF0zxNTYnFL2UYoz0QM7v4J0fmHSpnlsJo9hhSfbHshfE8"
    },
    members: 42,
    iconType: "palette"
  },
  {
    id: "3",
    name: "Security Ops",
    description: "Intrusion Detection",
    creator: {
      name: "John Doe"
    },
    members: 89,
    iconType: "security"
  },
  {
    id: "4",
    name: "Global Marketing",
    description: "External Comms",
    creator: {
      name: "Elena Rodriguez",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB14zFowvYMIl5TDMLI3MJb496MYOnWyaKVPNpmKryps8ICE91NkFLLRj2ZO_5H_ZFURBTjss6fmxOPBlntXoGub1fifjfBWmrMzcGRYz1Z0yQlnsPW868bJmBMyo4j_zLdzz4cdUuiOxfAPhuSZh-qaORdonCQpbfzZ0FJFbynymHXu16TbBFeNeg9wuVc8iQq4tIVA0NllmRzWu6tNOmkuwE3cEO8zFhJzdfWKouTgOGO1xz2aC01dryjZCLmQy9JFQ6newJBUn8"
    },
    members: 312,
    iconType: "global"
  }
];

export default function AdminGroupManagementPage() {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");

  const handleManageGroup = (groupName: string) => {
    alert(`Opening Management console for group: ${groupName}`);
  };

  const handleDeleteGroup = (groupId: string) => {
    if (confirm("Are you sure you want to delete this group?")) {
      setGroups(prev => prev.filter(g => g.id !== groupId));
    }
  };

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    const newGroup: Group = {
      id: Date.now().toString(),
      name: newGroupName,
      description: newGroupDesc || "General Discussion",
      creator: {
        name: "Admin User"
      },
      members: 1,
      iconType: "terminal"
    };

    setGroups(prev => [...prev, newGroup]);
    setNewGroupName("");
    setNewGroupDesc("");
    setShowAddForm(false);
  };

  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-on-surface">Group Management</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Organize and monitor user permissions across the Aetheric network.
          </p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Plus className="h-5 w-5" />
          New Group
        </button>
      </div>

      {/* New Group Popover/Form */}
      {showAddForm && (
        <div className="glass-panel p-6 rounded-3xl space-y-4 border border-[#8083ff]/30 bg-[#081425]/90 max-w-lg">
          <h3 className="text-lg font-bold text-primary">Create New Administrative Group</h3>
          <form onSubmit={handleCreateGroup} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-on-surface-variant font-bold mb-1">Group Name</label>
              <input 
                type="text" 
                value={newGroupName}
                onChange={e => setNewGroupName(e.target.value)}
                required
                placeholder="e.g. System Security"
                className="w-full bg-[#111c2d] border border-white/5 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-on-surface-variant font-bold mb-1">Description / Topic</label>
              <input 
                type="text" 
                value={newGroupDesc}
                onChange={e => setNewGroupDesc(e.target.value)}
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
      )}

      {/* Overview Cards (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
            <Terminal className="w-[120px] h-[120px] text-primary" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary-container/20 rounded-2xl text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded-md">
              +4% vs last week
            </span>
          </div>
          <p className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">Active Groups</p>
          <h3 className="text-4xl font-bold text-on-surface mt-1">1,284</h3>
        </div>

        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
            <ZapIcon className="w-[120px] h-[120px]" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-[#b9c8de]/10 rounded-2xl text-[#b9c8de]">
              <Palette className="h-5 w-5" />
            </div>
            <span className="text-[#b9c8de] font-bold text-xs bg-white/5 px-2 py-1 rounded-md">Trending</span>
          </div>
          <p className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">New Groups Today</p>
          <h3 className="text-4xl font-bold text-on-surface mt-1">42</h3>
        </div>

        <div className="glass-panel p-6 rounded-3xl bg-primary-container/10 border-primary-container/20 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <p className="text-primary-container text-lg font-semibold mb-1">System Integrity</p>
          <div className="text-4xl font-bold text-on-background">99.9%</div>
          <p className="text-on-surface-variant text-xs mt-2">All sync protocols active</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="glass-panel rounded-3xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-surface-container-low/30">
          <h4 className="text-lg font-bold text-on-surface">Groups Directory</h4>
          <div className="flex items-center gap-4">
            <div className="relative group max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search groups..."
                className="bg-[#111c2d] border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-on-surface"
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-lg transition-colors">
                <Filter className="h-4 w-4" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-white/5 rounded-lg transition-colors">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/20">
              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">Group Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">Created By</th>
              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">Member Count</th>
              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredGroups.length > 0 ? (
              filteredGroups.map(group => (
                <tr key={group.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#152031] flex items-center justify-center border border-white/10">
                        {group.iconType === "terminal" && <Terminal className="h-5 w-5 text-primary" />}
                        {group.iconType === "palette" && <Palette className="h-5 w-5 text-[#b9c8de]" />}
                        {group.iconType === "security" && <Shield className="h-5 w-5 text-error" />}
                        {group.iconType === "global" && <Globe className="h-5 w-5 text-[#adb4ce]" />}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{group.name}</p>
                        <p className="text-xs text-on-surface-variant">{group.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {group.creator.avatar ? (
                        <img 
                          className="w-8 h-8 rounded-full border border-white/20" 
                          src={group.creator.avatar} 
                          alt={group.creator.name} 
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          {group.creator.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-on-surface">{group.creator.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-on-surface">{group.members}</span>
                      <div className="flex -space-x-2 ml-2">
                        <div className="w-6 h-6 rounded-full border border-[#081425] bg-primary text-[8px] flex items-center justify-center text-on-primary font-bold">
                          +{Math.max(1, group.members - 2)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-3">
                      <button 
                        onClick={() => handleManageGroup(group.name)}
                        className="text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors"
                      >
                        Manage
                      </button>
                      <button 
                        onClick={() => handleDeleteGroup(group.id)}
                        className="text-on-surface-variant hover:text-error hover:bg-error/10 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-10 text-on-surface-variant">
                  No groups found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Table Footer/Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-white/5 text-xs text-on-surface-variant">
          <p>Showing {filteredGroups.length} of {groups.length} groups</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 disabled:opacity-30 text-xs" disabled>
              Previous
            </button>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold text-xs">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-xs">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-xs">3</button>
            </div>
            <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors text-xs">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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
