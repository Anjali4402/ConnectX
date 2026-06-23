import React from "react";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

const NoChatSelected = () => {
  return (
    <div className="relative z-10 text-center max-w-md px-8">
      <div className="w-24 h-24 rounded-[32px] bg-surface-container-high/40 backdrop-blur-xl border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl">
        <MdOutlineChatBubbleOutline className="size-12 animate-pulse text-primary" />
      </div>
      <h2 className="font-display-lg text-[32px] text-on-surface mb-3 tracking-tight">
        Select a conversation
      </h2>
      <p className="font-body-lg text-on-surface-variant leading-relaxed">
        Choose a chat from the sidebar to start messaging. Your communication
        hub is ready for high-performance interaction.
      </p>
    </div>
  );
};

export default NoChatSelected;
