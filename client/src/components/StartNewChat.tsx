"use client";
import { X } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface StartNewChatProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials?: string;
  status: "online" | "offline" | "away";
  selected?: boolean;
}

interface UserListProps {
  users: User[];
  onUserSelect?: (userId: string) => void;
}

const UserList = ({ users, onUserSelect, selectedUser }: UserListProps) => {
  return (
    <div className="p-6 pb-2 space-y-2">
      {/* Search Bar */}
      <div className="relative group">
        <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors h-5 w-5" />
        <Input
          className="w-full bg-surface-container-lowest border-none rounded-2xl py-5 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/30 transition-all shadow-inner"
          placeholder="Search contacts by name or email..."
          type="text"
        />
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto max-h-[400px] p-2 px-6 space-y-4">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserSelect?.(user.id)}
            className={cn(
              "w-full flex items-center gap-4 p-3 rounded-2xl text-left group transition-all border border-transparent cursor-pointer",
              //   user.selected
              user.id === selectedUser?.id
                ? "bg-primary/10 border-primary/20"
                : "hover:bg-white/5",
            )}
          >
            <div className="relative">
              {/* Avatar */}
              {user.avatar ? (
                <Image
                  className={cn(
                    "w-12 h-12 rounded-full object-cover transition-all",
                    user.id === selectedUser?.id
                      ? "ring-2 ring-primary"
                      : "ring-2 ring-white/10 group-hover:ring-primary/50",
                  )}
                  src={user.avatar}
                  alt={user.name}
                  width={48}
                  height={48}
                />
              ) : (
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-bold text-on-primary transition-all",
                    "bg-gradient-to-tr from-tertiary to-primary",
                    user.id === selectedUser?.id
                      ? "ring-2 ring-primary"
                      : "ring-2 ring-white/10 group-hover:ring-primary/50",
                  )}
                >
                  {user.initials}
                </div>
              )}

              {/* Status Indicator */}
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#111c2d]",
                  user.status === "online" && "bg-green-500",
                  user.status === "away" && "bg-yellow-500",
                  user.status === "offline" && "bg-surface-variant",
                )}
              />
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-on-surface truncate">
                {user.name}
              </h4>
              <p className="text-sm font-medium text-on-surface-variant truncate">
                {user.role}
              </p>
            </div>

            {/* Selection Indicator */}
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all",
                user.id === selectedUser?.id
                  ? "bg-primary shadow-[0_0_10px_rgba(128,131,255,0.4)]"
                  : "border border-white/20 group-hover:border-primary group-hover:bg-primary",
              )}
            >
              <FaCheck
                className={cn(
                  "text-[12px] transition-all",
                  user.id === selectedUser?.id
                    ? "text-on-primary"
                    : "text-transparent group-hover:text-on-primary",
                )}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Example usage with sample data
const UserListExample = () => {
  const [users, setUsers] = React.useState<User[]>([
    {
      id: "1",
      name: "Elena Vance",
      role: "Product Designer @ ConnectX",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6oWVq4tWUOP__iYphfo2B26vQMCN9J38DFq2K3WSbJRDcWIHJDajM1zo1zVOpKJi1xKJ1tDw-rcaAcICKzGnjXqZDEM1FVRcoEmHEZFqwEE5ctjGEInF1V5Zgopl7HfVmMGBBt1FP-cy4gfI51uUTkxeOYwiX6ngtmk4_mA0SOzMsvKGV4msQ2lpA5_MbWQlV5eBGyDbYe5CZuyPFLLrV92diu7sovYkFhwzx8Cd3wbKpBTYeoih3Y7WXKLGiGUOG3UNnH6CMPso",
      status: "online",
      selected: false,
    },
    {
      id: "2",
      name: "Marcus Chen",
      role: "Lead Developer",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwD3LFr-AfAnoW0KE8-MaRIYycmGfEfW8aci-deWQS29Sj5PuRfpvDwCI6VW3-3IBkA_AXoeHEwEy9dZnFVgJEAv_t7WYY5MJ1wsLdc9V4H5cJtAWpRzb24sbbL8aGMDRaitswLA-6xZx1ZD_kxAS-rj3958SDdph1fUhjz3SFiz87kLPDb6gU6DTgqkfhmGLbmtHiyEpbEpg7_v_kK5F2YdpYTR5c0XKexlQ4Y8db2vCVZr0ICpkQWVA0I0GUblCTlSfII9PYHw",
      status: "online",
      selected: true,
    },
    {
      id: "3",
      name: "Sarah Kalsen",
      role: "Marketing Specialist",
      initials: "SK",
      status: "away",
      selected: false,
    },
    {
      id: "4",
      name: "Julian Rossi",
      role: "Backend Engineer",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCosZjT9z22qn55lIwOPz9CyML9cvNZMNaEDBjJYnUfGCX09zy0sb2AhUaDnPMtdwv58VkWb5gE6WPxsnKQgXKxylVi9EhkDye7oEQKs31jf3ZNuRu9FnK5xnLVhm8rPQ-tHj9DPlYSWm8sODbiZW0Be6Svf8sDeM04PqOxS_KDvO8zV-8oeTSsvfEYs71LL7INpWohdyHPJKk2xseBjAuaBCvzusgI2o-0XTtv32vrAXoa57zC8fhXRe-tPQZFnUMyAb0QCshOMyU",
      status: "online",
      selected: false,
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelect = (userId: string) => {
    const selectUser = users.find((user) => user.id === userId);

    setSelectedUser(selectUser);
  };

  return (
    <UserList
      users={users}
      onUserSelect={handleUserSelect}
      selectedUser={selectedUser}
    />
  );
};

const StartNewChat = ({ setOpen }: StartNewChatProps) => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col h-[80vh]">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-white/5">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">New Message</h2>
          <p className="text-base text-on-surface">
            Select a contact to start chatting
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full hover:bg-white/10 text-on-surface-variant active:scale-95 transition-all cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollabel content */}
      <div className="flex-1 overflow-y-auto space-y-8">
        <UserListExample />
      </div>

      {/* Footer Actions */}
      <div className="px-8 py-4 border-t border-white/5 flex justify-end gap-4">
        <Button
          variant="ghost"
          className="px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-on-surface font-semibold active:scale-95  cursor-pointer"
        >
          Cancel
        </Button>
        <Button className="cursor-pointer px-6 py-5 rounded-2xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2">
          <IoMdSend className="size-5" />

          <span>Start Chat</span>
        </Button>
      </div>
    </div>
  );
};

export default StartNewChat;
