import { Filter, UserPlus } from "lucide-react";
import React, { Dispatch } from "react";
import { UserStatus } from "../types";

interface UserHeaderProps {
  statusFilter: UserStatus;
  setStatusFilter: Dispatch<UserStatus>;
}

const UserHeader: React.FC<UserHeaderProps> = ({
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-bold text-on-surface mb-1">
          User Management
        </h2>
        <p className="text-on-surface-variant text-sm">
          Oversee system access and manage member permissions.
        </p>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as UserStatus)}
            className="pl-9 pr-8 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
          >
            <option value="all" className="bg-[#081425]">
              All Statuses
            </option>
            <option value="active" className="bg-[#081425]">
              Active
            </option>
            <option value="offline" className="bg-[#081425]">
              Offline
            </option>
            <option value="banned" className="bg-[#081425]">
              Banned
            </option>
          </select>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
          <UserPlus className="h-4 w-4" />
          Add New User
        </button>
      </div>
    </div>
  );
};

export default UserHeader;
