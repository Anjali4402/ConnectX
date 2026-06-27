"use client";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";

import { Button } from "./ui/button";
import useAppStore from "@/store/app.store";

const CreateChatSection = () => {
  const { openCreateGroupToogle, openNewChatToogle } = useAppStore();

  return (
    <div className="flex gap-6 justify-around ">
      <Button
        className="bg-primary flex-1 text-on-primary roundeds font-bold shadow-[0_0_15px_rgba(128,131,255,0.4)] active:scale-95 duration-200 "
        size="lg"
        onClick={() => openNewChatToogle()}
      >
        <IoPersonAddSharp className="size-4" />

        <span className="text-label-md truncate">New Chat</span>
      </Button>
      <Button
        className="bg-surface-container-highest/40 flex-1  text-on-surface font-bold border border-white/10 hover:bg-white/10 active:scale-95 duration-200"
        size="lg"
        onClick={() => {
          openCreateGroupToogle();
        }}
      >
        <MdGroupAdd className="size-4" />

        <span className="font-label-md text-label-md truncate">New Group</span>
      </Button>
    </div>
  );
};

export default CreateChatSection;
