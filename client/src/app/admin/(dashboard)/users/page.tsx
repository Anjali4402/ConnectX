"use client";

import React, { useState } from "react";
import { 
  Filter, 
  UserPlus, 
  Edit, 
  Ban, 
  Trash2, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Search
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  status: "Active" | "Offline" | "Banned";
  lastActive: string;
}

const initialUsers: User[] = [
  {
    id: "1",
    name: "Elara Vance",
    email: "elara.vance@aetheric.io",
    username: "@elarav",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuY99yTBphqPPs_342Jj7B0WX0sDY2fvYMyUlOZ1O0g61K2wCaFR4IbAPR6MIJ-K-0NgsCmlLrFSK5J1KyJJEJCalD3EzcSvRAFZwBtf0p9kimAQQwEl5Lw3eb2RhCL07dLq02IwzsG_2NjsvvXg-jfzagfpOUWkDxY1AXS2L1ebCRNvxZmvA2vstD8G_bWTDdOj8CAGTVCylMfGPgjVsd8Qio7iKyPq4Tco6SWAozSq_or_F1wx6wFmErP76wIqQkd8QC23RpiSA",
    status: "Active",
    lastActive: "2 mins ago"
  },
  {
    id: "2",
    name: "Julian Thorne",
    email: "j.thorne@design.com",
    username: "@jthorne_x",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpGaa9m6st9VlGvo0K4t_YGTt2zrDV_NOnxttv0-ZMEu_jP59UxVwesehAM1AypA4W6G6zGaMgcRUOUcN0i-Pt789PY2Hrrencj8e6sUEZOP9vnmhrZ_sCHhI78Nhg68VzpiVBAyM6J_alJudASY7y2B1yweepf1FpOH_aGwlRz5r75yY33un4oHRkSiOdqLPIh0i5IgOmmciTrPkuX376GK7Mm75wDQdDkpm6SBJ8M1RndI_pCFFYMjxBUwms5u1Ae1L2oGDTSpQ",
    status: "Offline",
    lastActive: "14 hours ago"
  },
  {
    id: "3",
    name: "Malachi Stark",
    email: "m.stark@security.net",
    username: "@stark_m",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIGUabM5MLz0HqD4CP2tDey7AAglcTIdiSQ9aYhQMOzEPGhAPMI45dns9fyLiMndvoCkfxJ-wEZJGRmo6RCnmAfKGEQMGG81eYbl7BiN34UEDW_aEg_sqwmOYscSRr20sx3Y3NPrMSAavLMkHrMNME5reeyaJWnip-jaLNWi7p1KmzSY1sGZSIucgAOtmd2N-cpfDQyQmBgms_6S6XYEQ3pIFuFSmeTcoWPJyN-WUsNOPB-bC86ega-Rtsd34oB_dvpP4IJosyY8w",
    status: "Banned",
    lastActive: "3 days ago"
  },
  {
    id: "4",
    name: "Sophia Reed",
    email: "sophia.reed@corp.io",
    username: "@sreed_exec",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgsHMNp0D0B6QgAZxxlQmToZiYMYtkKs5T70HmFX8kssKlkRdmKAu7MXKciosXNJEraZ2GSCi5DPWt8AlZfDoN9cMzdQkuqIGvai4S8b2QgaiCBbavG4uHB0SxfUqHCaZDSon0CSUojKSiMASTg5E7N9K51kZY7atQeLMa6nDxIGwChnOe07vMG-upuwUKQouEOiLbB_2_jKbBVjNiXW8s-ecG-KAU8vMe56R87nr-JaPVy6WDtqeQx2pKPV3JVCgNtr-xj7ZG5WQ",
    status: "Active",
    lastActive: "Just now"
  }
];

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Offline" | "Banned">("All");

  const handleToggleBlock = (userId: string) => {
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            status: user.status === "Banned" ? "Active" : "Banned"
          };
        }
        return user;
      })
    );
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || user.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <section className="max-w-7xl mx-auto space-y-8">
      {/* Content Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-on-surface mb-1">User Management</h2>
          <p className="text-on-surface-variant text-sm">Oversee system access and manage member permissions.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="pl-9 pr-8 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
            >
              <option value="All" className="bg-[#081425]">All Statuses</option>
              <option value="Active" className="bg-[#081425]">Active</option>
              <option value="Offline" className="bg-[#081425]">Offline</option>
              <option value="Banned" className="bg-[#081425]">Banned</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
            <UserPlus className="h-4 w-4" />
            Add New User
          </button>
        </div>
      </div>

      {/* Quick Stats Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl">
          <p className="text-xs text-[#adb4ce] mb-2 font-bold uppercase tracking-wider">Total Users</p>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-on-surface">12,482</span>
            <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1.5">+4.2%</span>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <p className="text-xs text-[#adb4ce] mb-2 font-bold uppercase tracking-wider">Active Now</p>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-on-surface">1,894</span>
            <div className="flex items-center gap-1 text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded mb-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span> Live
            </div>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <p className="text-xs text-[#adb4ce] mb-2 font-bold uppercase tracking-wider">Banned</p>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-on-surface">241</span>
            <span className="text-[10px] text-error bg-error/10 px-1.5 py-0.5 rounded mb-1.5">-2%</span>
          </div>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <p className="text-xs text-[#adb4ce] mb-2 font-bold uppercase tracking-wider">New Registrations</p>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-on-surface">48</span>
            <span className="text-[10px] text-on-surface-variant bg-white/5 px-1.5 py-0.5 rounded mb-1.5">Today</span>
          </div>
        </div>
      </div>

      {/* Inner search bar for table filter */}
      <div className="relative max-w-md group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#111c2d]/50 border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
          placeholder="Filter users by name, email or username..."
        />
      </div>

      {/* User Table Container */}
      <div className="relative overflow-hidden glass-panel rounded-3xl border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f2a3c]/40 text-on-surface-variant border-b border-white/5 text-xs font-semibold uppercase tracking-wider">
                <th className="px-6 py-5">User</th>
                <th className="px-6 py-5">Username</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Last Active</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                          <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{user.name}</p>
                          <p className="text-xs text-on-surface-variant">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-xs text-primary bg-primary/5 px-2 py-1 rounded">
                        {user.username}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        {user.status === "Active" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            <span className="text-green-400">Active</span>
                          </>
                        )}
                        {user.status === "Offline" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-on-surface-variant/40"></span>
                            <span className="text-on-surface-variant">Offline</span>
                          </>
                        )}
                        {user.status === "Banned" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-error"></span>
                            <span className="text-error">Banned</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{user.lastActive}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleToggleBlock(user.id)}
                          title={user.status === "Banned" ? "Unban User" : "Ban User"}
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                            user.status === "Banned" 
                              ? "bg-primary-container text-on-primary-container hover:brightness-110" 
                              : "bg-white/5 hover:bg-secondary-container/50 hover:text-secondary"
                          }`}
                        >
                          {user.status === "Banned" ? <RotateCcw className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="w-9 h-9 rounded-lg bg-white/5 hover:bg-error/20 hover:text-error flex items-center justify-center transition-all"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-on-surface-variant text-sm">
                    No users matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-surface-container/30 border-t border-white/5 gap-4">
          <p className="text-xs text-on-surface-variant">
            Showing <span className="text-on-surface font-semibold">1 to {filteredUsers.length}</span> of{" "}
            <span className="text-on-surface font-semibold">{users.length}</span> users
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-on-surface-variant disabled:opacity-30" disabled>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary text-sm font-semibold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">3</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">312</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-on-surface-variant">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[20%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
}
