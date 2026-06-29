import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdAddAPhoto, MdOutlineEdit } from "react-icons/md";
import Image from "next/image";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

interface CreateUpdateGroupProps {
  // setOpen: (vals: boolean) => Dispatch<SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUpdateGroup = ({ setOpen }: CreateUpdateGroupProps) => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col h-[80vh]">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-white/5">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">
            Create New Group
          </h2>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full hover:bg-white/10 text-on-surface-variant active:scale-95 transition-all cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 overflow-y-auto py-8 px-12 space-y-8">
        {/* Group Identity Section */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Upload Group Image */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-3xl bg-surface-container-highest border-2 border-dashed border-outline-variant flex items-center justify-center transition-all group-hover:border-primary">
                <MdAddAPhoto className="size-8 text-on-surface-variant hover:text-primary transition-colors" />
                {/* Preview Overlay (Hidden) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-3xl">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Upload
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg active-glow">
                <MdOutlineEdit className="size-4" />
              </div>
            </div>
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-tighter">
              Group Icon
            </span>
          </div>

          {/* Name & Description */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="groupName"
                className="text-sm font-medium text-primary ml-1"
              >
                Group Name
              </Label>
              <Input
                id="groupName"
                className="bg-surface-container-lowest border-white/10 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="e.g. Design Sync 2026"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-on-surface-variant ml-1"
              >
                Description (Optional)
              </Label>
              <Textarea
                id="description"
                className="bg-surface-container-lowest border-white/10 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="What is this group about?"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Contact List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-on-surface">
              Select Members
            </h3>
            <span className="px-3 py-1 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface-variant">
              3 Selected
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <IoSearch className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
            <Input
              className="bg-surface-container-high/50 border-none pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/20"
              placeholder="Search contacts..."
              type="text"
            />
          </div>

          {/* List */}
          <div className="space-y-2 mt-4">
            {/* Contact Item 1 - Alex Rivera */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLb20W1Di8vY6MlC_G9CJ2ChQa9nvVnmD7xvQQG1coXscfNyQent6qBxGp2ZG7s94QEHVBps9cDmPjXeW-wyhAm9VdyB8Z1OEjYd4yH_TAIGPxNeczQgeuQvlIffzWR7zF06xI0pIUUHxoOV_HFIo1j6qoS4jOimtdYMgg6KFk1SyZuOdLn1zJVefMCECMpL9EGI7JlXf0MSbaH99ZCPEayvjx2vQOUrb0US27yW-VE3DXknUXQ8WXp8CUar7HJILs6PTsqpUC2z4"
                    alt="Close-up portrait of a professional male designer with glasses in a modern office, soft atmospheric lighting, cinematic depth of field, high-end photography style, cool color palette."
                    width={44}
                    height={44}
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-container"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-on-surface">
                    Alex Rivera
                  </div>
                  <div className="text-xs font-medium text-on-surface-variant">
                    Lead Product Designer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Checkbox className="size-4 bg-white" defaultChecked />
              </div>
            </label>

            {/* Contact Item 2 - Sarah Chen */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    className="w-11 h-11 rounded-full object-cover border-2 border-transparent"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQeD7NT3X9y-1tOWFZX_uFfixWwIHfhHm3zZaCsgHp6uF6I3NM-2fmc6mp6BYiRbHcPWjiRQDxUF1b7DDMn7CLAZ2HPwbaG4nba8p8tSDS73d_maAAsnfH1rw7aCZ0qsRwouAKMZPApufuijtWbpXQqvIehyQgQZc8nxwm4onhTyQ53dfvnge843ovXi9lSWKXIJA9u-Pw9CcaL4is2eztRxdLIrwjnHXO_IlR63JTnaxCUkSfLD6Kt1og5ZgyzlErWKbXn2u21M"
                    alt="Elegant portrait of a woman with a creative professional look, standing in a studio with soft teal and violet rim lighting, high-contrast aesthetic, sharp focus, vibrant and clean."
                    width={44}
                    height={44}
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-500 rounded-full border-2 border-surface-container"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-on-surface">
                    Sarah Chen
                  </div>
                  <div className="text-xs font-medium text-on-surface-variant">
                    Senior Engineer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Checkbox className="size-4 bg-white" defaultChecked />
              </div>
            </label>

            {/* Contact Item 3 - Jordan Miller */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                    JM
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-container"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-on-surface">
                    Jordan Miller
                  </div>
                  <div className="text-xs font-medium text-on-surface-variant">
                    Marketing Lead
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Checkbox className="size-4 bg-white" defaultChecked />
              </div>
            </label>

            {/* Contact Item 4 - David Park (Unselected) */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    className="w-11 h-11 rounded-full object-cover border-2 border-transparent"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxDGs0tnglv9WvHVzgtOJUHUNzP5GN356Z62JGqGhAmXBjIVXIRNlZJowkgL_ADynk4GuC4vm_BpzSNDxH_zey2kTC8LD0f_CLYxHPYGndWkCoy34FWcXhRnKVLg4X1Ztlst8OEyRgO3E-5lWnkqsipLvO5cRQQ_ET4KDMsrY495uBfmYQrNsHldpuV71GSx49LkCRZlp1iwT15T4B_7-dPxVUfnypqY58qhO9SMRYZVvGRJN4KTUGHDjy3vTYRiwIl2RNG_2IbQ"
                    alt="Portrait of a young tech professional man in a minimalist workspace, natural sunlight coming through a window, soft shadows, high-end photography, realistic textures and tones."
                    width={44}
                    height={44}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-on-surface">
                    David Park
                  </div>
                  <div className="text-xs font-medium text-on-surface-variant">
                    Frontend Developer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Checkbox className="size-4 bg-white" />
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-8 border-t border-white/5 flex justify-end gap-4">
        <Button
          variant="ghost"
          className="px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-on-surface font-semibold active:scale-95  cursor-pointer"
        >
          Cancel
        </Button>
        <Button className="cursor-pointer px-6 py-5 rounded-2xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2">
          <span>Create Group</span>
          <FaArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default CreateUpdateGroup;
