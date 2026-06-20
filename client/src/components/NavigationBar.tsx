import React from "react";

const NavigationBar = () => {
  return (
    <nav className="flex items-center gap-1 bg-surface-container-highest/40 p-1 rounded-xl mb-6">
      <button className="flex-1 py-2 px-1 bg-primary text-on-primary rounded-lg font-label-md text-[11px] transition-all">
        All
      </button>
      <button className="flex-1 py-2 px-1 text-on-surface-variant hover:text-on-surface font-label-md text-[11px] transition-all flex items-center justify-center gap-1">
        Unread
        {/* <span className="bg-primary-container/40 text-[9px] px-1 rounded-full"
                >12</span
              > */}
      </button>
      <button className="flex-1 py-2 px-1 text-on-surface-variant hover:text-on-surface font-label-md text-[11px] transition-all">
        Groups
      </button>
      <button className="flex-1 py-2 px-1 text-on-surface-variant hover:text-on-surface font-label-md text-[11px] transition-all">
        Archived
      </button>
    </nav>
  );
};

export default NavigationBar;
