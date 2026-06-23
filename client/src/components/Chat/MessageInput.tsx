import React from "react";
import { IoSend } from "react-icons/io5";
import { MdAddCircleOutline, MdMood } from "react-icons/md";
import { Button } from "../ui/button";

const MessageInput = () => {
  return (
    <div className="absolutebottom-0left-0 w-full px-4 pb-4 bg-linear-to-t from-background via-background to-transparent pt-12s">
      <div className="mx-auto bg-surface-container-high/80 backdrop-blur-xl border border-white/5 rounded-2xl p-2 flex items-center space-x-2 shadow-2xl">
        <button className="p-2 text-on-surface-variant hover:bg-white/10 rounded-xl transition-all">
          <MdAddCircleOutline className="size-6" />
        </button>
        <input
          className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface text-body-md placeholder:text-on-surface-variant/40 outline-none"
          placeholder="Type a message to Design Team..."
          type="text"
        />
        <div className="flex items-center space-x-1">
          <Button
            size="icon-lg"
            className="cursor-pointer text-on-surface-variant hover:bg-white/10 rounded-xl transition-all"
            variant="link"
          >
            <MdMood className="size-6" />
          </Button>

          <Button
            size="icon-lg"
            className="bg-primary cursor-pointer text-on-primary rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <IoSend className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
