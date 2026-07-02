"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Network,
  MessageSquare,
  Search,
  Bell,
  HelpCircle,
} from "lucide-react";
import Logo from "@/components/ui/shared/Logo";
import UserInfo from "@/components/UserInfo";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Groups", href: "/admin/groups", icon: Network },
    { name: "Chats", href: "/admin/chats", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-70 h-screen fixed left-0 top-0 bg-[#081425]/80 backdrop-blur-xl space-y-4 border-r border-white/5 shadow-xl flex  flex-col z-50">
        <div className="border-b border-white/5 mb-s py-4 ">
          <Logo />
        </div>

        <nav className="flex-1 space-y-2 px-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-primary-container/15 text-[#c0c1ff] border-l-2 border-[#c0c1ff]"
                    : "text-on-surface-variant hover:text-[#d8e3fb] hover:bg-white/5"
                }`}
              >
                <Icon className="size-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <UserInfo role="admin" />
      </aside>

      {/* Main Content Area */}
      <div className="ml-70 min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center h-16 px-6 bg-[#081425]/50 backdrop-blur-md border-b border-white/5 shadow-sm sticky top-0 z-40">
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
              <input
                type="text"
                className="w-full bg-surface-container-low border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#c0c1ff]/30 transition-all placeholder:text-on-surface-variant/50 text-[#d8e3fb]"
                placeholder="Search data, users, messages..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-on-surface-variant hover:text-[#c0c1ff] transition-all">
              <Bell className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-on-surface-variant hover:text-[#c0c1ff] transition-all">
              <HelpCircle className="h-5 w-5" />
            </button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/5 text-[#d8e3fb]">
              <span className="text-xs font-semibold">Account</span>
              <div className="w-5 h-5 rounded-full bg-[#c0c1ff] flex items-center justify-center text-on-primary-fixed font-bold text-[10px]">
                A
              </div>
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
