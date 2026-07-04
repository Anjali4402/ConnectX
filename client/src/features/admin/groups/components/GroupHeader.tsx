import { Plus } from "lucide-react";
import React, { Dispatch } from "react";

interface GroupHeaderProps {
  setShowAddForm: Dispatch<boolean>;
}

const GroupHeader = ({ setShowAddForm }: GroupHeaderProps) => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-on-surface">Group Management</h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Organize and monitor user permissions across the Aetheric network.
        </p>
      </div>
      <button
        onClick={() => setShowAddForm(true)}
        className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <Plus className="h-5 w-5" />
        New Group
      </button>
    </div>
  );
};

export default GroupHeader;
