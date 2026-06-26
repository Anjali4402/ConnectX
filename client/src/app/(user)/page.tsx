"use client";
// import ChatPage from "@/components/Chat/ChatPage";
import CreateUpdateGroup from "@/features/group/CreateUpdateGroup";
import StartNewChat from "@/components/StartNewChat";
import { ModalLayout } from "@/components/ui/shared/ModalLayout";
import { useState } from "react";

const Home = () => {
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [startNewChatModal, setStartNewChatModal] = useState(false);

  return (
    <div className="w-full h-full  flex justify-center  items-center">
      {/* <ChatPage /> */}
      <button
        onClick={() => {
          setOpenGroupModal(true);
        }}
      >
        Open Create Modal
      </button>

      <button
        onClick={() => {
          setStartNewChatModal(true);
        }}
      >
        Start new chat
      </button>

      <ModalLayout open={openGroupModal} setOpen={setOpenGroupModal}>
        <CreateUpdateGroup setOpen={setOpenGroupModal} />
      </ModalLayout>
      <ModalLayout open={startNewChatModal} setOpen={setStartNewChatModal}>
        <StartNewChat setOpen={setStartNewChatModal} />
      </ModalLayout>
    </div>
  );
};

export default Home;
