"use client";
import {
  Search,
  Trash2,
  Filter,
  Download,
  Terminal,
  Palette,
  Shield,
  Globe,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Group } from "../type";

interface GroupTableProps {
  groups: Group[];
  handleDeleteGroup: (groupId: string) => void;
}

const GroupTable: React.FC<GroupTableProps> = ({
  groups,
  handleDeleteGroup,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.creator.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleManageGroup = (groupName: string) => {
    alert(`Opening Management console for group: ${groupName}`);
  };

  return (
    <div className="glass-panel rounded-3xl overflow-hidden">
      <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-surface-container-low/30">
        <h4 className="text-lg font-bold text-on-surface">Groups Directory</h4>
        <div className="flex items-center gap-4">
          <div className="relative group max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groups..."
              className="bg-surface-container-low border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-on-surface"
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
            <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">
              Group Name
            </th>
            <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">
              Created By
            </th>
            <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5">
              Member Count
            </th>
            <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest border-b border-white/5 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <tr key={group.id} className="hover:bg-white/2 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/10">
                      {group.iconType === "terminal" && (
                        <Terminal className="h-5 w-5 text-primary" />
                      )}
                      {group.iconType === "palette" && (
                        <Palette className="h-5 w-5 text-[#b9c8de]" />
                      )}
                      {group.iconType === "security" && (
                        <Shield className="h-5 w-5 text-error" />
                      )}
                      {group.iconType === "global" && (
                        <Globe className="h-5 w-5 text-on-secondary-container" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{group.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    {group.creator.avatar ? (
                      <Image
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border border-white/20"
                        src={group.creator.avatar}
                        alt={group.creator.name}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {group.creator.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="text-on-surface">
                      {group.creator.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-on-surface">
                      {group.members}
                    </span>
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
              <td
                colSpan={4}
                className="text-center py-10 text-on-surface-variant"
              >
                No groups found matching your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Table Footer/Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-white/5 text-xs text-on-surface-variant">
        <p>
          Showing {filteredGroups.length} of {groups.length} groups
        </p>
        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 rounded-lg hover:bg-white/5 disabled:opacity-30 text-xs"
            disabled
          >
            Previous
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold text-xs">
              1
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-xs">
              2
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-xs">
              3
            </button>
          </div>
          <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors text-xs">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupTable;
