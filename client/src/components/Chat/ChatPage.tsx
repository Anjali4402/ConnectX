"use client";
import { useState } from "react";
import ChatInfo from "./ChatInfo";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import MessageInput from "./MessageInput";

const ChatPage = () => {
  const [openChatInfo, setOpenChatInfo] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden w-full ">
      <main className="flex flex-col flex-1 min-w-0 w-full ">
        <ChatHeader setOpenChatInfo={setOpenChatInfo} />
        <div className="flex-1 overflow-y-auto p-4">
          <ChatContent />
        </div>

        <MessageInput />
      </main>

      <aside
        className={`
          border-l shrink-0 overflow-hidden
          transition-all duration-300 ease-in-out
          ${openChatInfo ? "w-108" : "w-0"}
        `}
      >
        <ChatInfo setOpen={setOpenChatInfo} />
      </aside>
    </div>
  );
};

export default ChatPage;
