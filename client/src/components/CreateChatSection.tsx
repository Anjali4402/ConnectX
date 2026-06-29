"use client";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";

import { Button } from "./ui/button";
import { ModalLayout } from "./ui/shared/ModalLayout";
import CreateUpdateGroup from "@/features/group/CreateUpdateGroup";
import StartNewChat from "./StartNewChat";
import { useState } from "react";

const CreateChatSection = () => {
  const [isOpenNewChatModal, setIsOpenNewChatModal] = useState(false);
  const [isOpenCreateGroupModal, setIsOpenCreateGroupModal] = useState(false);

  return (
    <div className="flex gap-6 justify-around ">
      <Button
        className="cursor-pointer bg-primary flex-1 text-on-primary roundeds font-bold shadow-[0_0_15px_rgba(128,131,255,0.4)] active:scale-95 duration-200 "
        size="lg"
        // onClick={() => openNewChatToogle()}
        onClick={() => setIsOpenNewChatModal(true)}
      >
        <IoPersonAddSharp className="size-4" />

        <span className="text-label-md truncate">New Chat</span>
      </Button>
      <Button
        className="cursor-pointer bg-surface-container-highest/40 flex-1  text-on-surface font-bold border border-white/10 hover:bg-white/10 active:scale-95 duration-200"
        size="lg"
        onClick={() => {
          // openCreateGroupToogle();
          setIsOpenCreateGroupModal(true);
        }}
      >
        <MdGroupAdd className="size-4" />

        <span className="font-label-md text-label-md truncate">New Group</span>
      </Button>

      {/* Start New Chat Modal */}
      <ModalLayout open={isOpenNewChatModal} setOpen={setIsOpenNewChatModal}>
        <StartNewChat setOpen={setIsOpenNewChatModal} />
      </ModalLayout>

      {/* Create New Group */}
      <ModalLayout
        open={isOpenCreateGroupModal}
        setOpen={setIsOpenCreateGroupModal}
      >
        <CreateUpdateGroup setOpen={setIsOpenCreateGroupModal} />
      </ModalLayout>
    </div>
  );
};

export default CreateChatSection;
