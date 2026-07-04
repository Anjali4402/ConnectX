"use client";
import {
  //   Filter,
  //   UserPlus,
  Edit,
  Ban,
  Trash2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";
import { User, UserStatus } from "../types";

interface UserTableProps {
  users: User[];
  statusFilter: UserStatus;
  handleToggleBlock: (userId: string) => void;
  handleDeleteUser: (userId: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  statusFilter,
  handleToggleBlock,
  handleDeleteUser,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {/* Inner search bar for table filter */}
      <div className="relative max-w-md group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-surface-container-low/50 border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
          placeholder="Filter users by name, email or username..."
        />
      </div>

      {/* User Table Container */}
      <div className="relative overflow-hidden glass-panel rounded-3xl border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/40 text-on-surface-variant border-b border-white/5 text-xs font-semibold uppercase tracking-wider">
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
                  <tr
                    key={user.id}
                    className="group hover:bg-white/2 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full relative overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors ">
                          <Image
                            className=" object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                            fill
                            data-alt="High-resolution close-up of a futuristic UI dashboard with glassmorphic cards and glowing data visualizations in shades of blue and deep slate."
                            src={user.avatar}
                            alt={user.name}
                          />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-on-surface">
                            {user.name}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {user.email}
                          </p>
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
                        {user.status === "active" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            <span className="text-green-400">Active</span>
                          </>
                        )}
                        {user.status === "offline" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-on-surface-variant/40"></span>
                            <span className="text-on-surface-variant">
                              Offline
                            </span>
                          </>
                        )}
                        {user.status === "banned" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-error"></span>
                            <span className="text-error">Banned</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleToggleBlock(user.id)}
                          title={
                            user.status === "banned" ? "Unban User" : "Ban User"
                          }
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                            user.status === "banned"
                              ? "bg-primary-container text-on-primary-container hover:brightness-110"
                              : "bg-white/5 hover:bg-secondary-container/50 hover:text-secondary"
                          }`}
                        >
                          {user.status === "banned" ? (
                            <RotateCcw className="h-4 w-4" />
                          ) : (
                            <Ban className="h-4 w-4" />
                          )}
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
                  <td
                    colSpan={5}
                    className="text-center py-10 text-on-surface-variant text-sm"
                  >
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
            Showing{" "}
            <span className="text-on-surface font-semibold">
              1 to {filteredUsers.length}
            </span>{" "}
            of{" "}
            <span className="text-on-surface font-semibold">
              {users.length}
            </span>{" "}
            users
          </p>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-on-surface-variant disabled:opacity-30"
              disabled
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary text-sm font-semibold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">
              3
            </button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-semibold">
              312
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-on-surface-variant">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
