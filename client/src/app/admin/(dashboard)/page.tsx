"use client";

import DashboardHeader from "@/features/admin/dashboard/components/DashboardHeader";
import StatsCards from "@/features/admin/dashboard/components/StatsCards";
import MonthlyGrowthChart from "@/features/admin/dashboard/components/MonthlyGrowthChart";
import LiveMessageStream from "@/features/admin/dashboard/components/LiveMessageStream";
import ServerHealth from "@/features/admin/dashboard/components/ServerHealth";
import DailyActiveUsersChart from "@/features/admin/dashboard/components/DailyActiveUsersChart";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <DashboardHeader />

      {/* Stats Cards Bento Grid */}
      <StatsCards />

      {/* Charts & Growth Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Active Users Line Chart */}
        <DailyActiveUsersChart />

        {/* Growth Bar Chart */}
        <MonthlyGrowthChart />
      </section>

      {/* Live Stream & Health */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Message Stream */}
        <LiveMessageStream />

        {/* Server Status Health Cards */}
        <ServerHealth />
      </section>
    </div>
  );
}
