"use client";
// import ChatPage from "@/components/Chat/ChatPage";
import CreateUpdateGroup from "@/components/CreateUpdateGroup";
import { ModalLayout } from "@/components/ui/shared/ModalLayout";
import { useState } from "react";

const Home = () => {
  const [openGroupModal, setOpenGroupModal] = useState(false);

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

      <ModalLayout open={openGroupModal} setOpen={setOpenGroupModal}>
        <CreateUpdateGroup setOpen={setOpenGroupModal} />
      </ModalLayout>
    </div>
  );
};

export default Home;
