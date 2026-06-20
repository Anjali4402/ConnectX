import { Edit, User } from "lucide-react";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";

import React from "react";
import { Button } from "./ui/button";

const ChatInitiateBtn = () => {
  return (
    <div className="flex gap-3">
      <Button
        className="bg-primary  text-on-primary roundeds font-bold shadow-[0_0_15px_rgba(128,131,255,0.4)] active:scale-95 duration-200 "
        size="lg"
      >
        <IoPersonAddSharp className="size-4" />

        <span className="text-label-md truncate">New Chat</span>
      </Button>
      <Button
        className="bg-surface-container-highest/40 text-on-surface font-bold border border-white/10 hover:bg-white/10 active:scale-95 duration-200"
        size="lg"
      >
        <MdGroupAdd className="size-4" />

        <span className="font-label-md text-label-md truncate">New Group</span>
      </Button>
    </div>
  );
};

export default ChatInitiateBtn;
