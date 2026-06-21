import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
  return (
    <div className="relative group mb-4">
      <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-on-surface-variant/40 size-5" />
      <input
        className="w-full bg-surface-container-highest/40 border-none rounded-xl py-2 pl-9 pr-4 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/40 text-on-surface-variant/40 text-sm"
        placeholder="Search conversations..."
        type="text"
      />
    </div>
  );
};

export default Searchbar;
