import ModerationQueue from "@/features/admin/chats/components/ModerationQueue";
import SystemLogs from "@/features/admin/chats/components/SystemLogs";
import MessageStreamTable from "@/features/admin/chats/components/MessageStreamTable";
import ChatStats from "@/features/admin/chats/components/ChatStats";
import ChatHeader from "@/features/admin/chats/components/ChatHeader";

export default function AdminMessageManagementPage() {
  return (
    <section className="space-y-8">
      {/* Header Section */}
      <ChatHeader />

      {/* Bento Grid for Stats */}
      <ChatStats />

      {/* Table Section */}
      <MessageStreamTable />

      {/* Live System Logs & Moderation Queue Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live System Logs */}
        <SystemLogs />

        {/* Moderation Queue */}
        <ModerationQueue />
      </div>
    </section>
  );
}
