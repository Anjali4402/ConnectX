"use client";

import React, { useState } from "react";

import UserHeader from "./UserHeader";
import { User, UserStatus } from "../types";
import { initialUsers } from "../data";
import UserStats from "./UserStats";
import UserTable from "./UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [statusFilter, setStatusFilter] = useState<UserStatus>("all");

  const handleToggleBlock = (userId: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            status: user.status === "banned" ? "active" : "banned",
          };
        }
        return user;
      }),
    );
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  return (
    <section className="max-w-7xl mx-auto space-y-8">
      {/* Content Header & Actions */}
      <UserHeader
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Quick Stats Bento Row */}
      <UserStats />

      <UserTable
        users={users}
        statusFilter={statusFilter}
        handleToggleBlock={handleToggleBlock}
        handleDeleteUser={handleDeleteUser}
      />

      {/* Background Decorative Blur Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[20%] w-100 h-100 bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default UserManagement;
