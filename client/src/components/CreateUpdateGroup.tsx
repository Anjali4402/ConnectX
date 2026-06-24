import { X } from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdAddAPhoto, MdOutlineEdit } from "react-icons/md";
import { Checkbox } from "./ui/checkbox";

const CreateUpdateGroup = ({ setOpen }) => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col h-[80vh]  ">
      {/* <!-- Header --> */}
      <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-white/5">
        <div>
          <h2 className="font-6headline-md text-headline-md text-on-surface">
            Create New Group
          </h2>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-full hover:bg-white/10 text-on-surface-variant active:scale-95 transition-all"
        >
          <X />
        </button>
      </div>
      {/* <!-- Content Scroll Area --> */}
      <div className="flex-1 overflow-y-auto py-8 px-12 space-y-8 ">
        {/* <!-- Group Identity Section --> */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* <!-- Upload Group Image --> */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-3xl bg-surface-container-highest border-2 border-dashed border-outline-variant flex items-center justify-center overflow-hiddensssss transition-all group-hover:border-primary">
                <MdAddAPhoto className="size-8  text-on-surface-variant hover:text-primary transition-colors" />
                {/* <!-- Preview Overlay (Hidden) --> */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Upload
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg active-glow">
                <MdOutlineEdit className="size-4" />
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
              Group Icon
            </span>
          </div>
          {/* <!-- Name & Description --> */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-primary ml-1">
                Group Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="e.g. Design Sync 2026"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">
                Description (Optional)
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="What is this group about?"
                // rows="2"
                rows={2}
              ></textarea>
            </div>
          </div>
        </div>
        {/* <!-- Contact List Section --> */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Select Members
            </h3>
            <span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-md text-label-md text-on-surface-variant">
              3 Selected
            </span>
          </div>
          {/* <!-- Search Bar --> */}
          <div className="relative">
            <IoSearch className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
            {/* <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
              search
            </span> */}
            <input
              className="w-full bg-surface-container-high/50 border-none rounded-xl pl-12 pr-4 py-3 text-body-md focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search contacts..."
              type="text"
            />
          </div>
          {/* <!-- List --> */}
          <div className="space-y-2 mt-4">
            {/* <!-- Contact Item --> */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                    data-alt="Close-up portrait of a professional male designer with glasses in a modern office, soft atmospheric lighting, cinematic depth of field, high-end photography style, cool color palette."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLb20W1Di8vY6MlC_G9CJ2ChQa9nvVnmD7xvQQG1coXscfNyQent6qBxGp2ZG7s94QEHVBps9cDmPjXeW-wyhAm9VdyB8Z1OEjYd4yH_TAIGPxNeczQgeuQvlIffzWR7zF06xI0pIUUHxoOV_HFIo1j6qoS4jOimtdYMgg6KFk1SyZuOdLn1zJVefMCECMpL9EGI7JlXf0MSbaH99ZCPEayvjx2vQOUrb0US27yW-VE3DXknUXQ8WXp8CUar7HJILs6PTsqpUC2z4"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#152031]"></div>
                </div>
                <div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold">
                    Alex Rivera
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Lead Product Designer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Checkbox className="size-4 bg-white " />

                {/* <input
                  //   checked=""
                  checked
                  className="w-6 h-6 rounded-lg bg-surface-container-highest border-white/10 text-primary focus:ring-offset-0 focus:ring-primary checked:bg-primary transition-all cursor-pointer"
                  type="checkbox"
                /> */}
              </div>
            </label>
            {/* <!-- Contact Item --> */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    className="w-11 h-11 rounded-full object-cover border-2 border-transparent"
                    data-alt="Elegant portrait of a woman with a creative professional look, standing in a studio with soft teal and violet rim lighting, high-contrast aesthetic, sharp focus, vibrant and clean."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQeD7NT3X9y-1tOWFZX_uFfixWwIHfhHm3zZaCsgHp6uF6I3NM-2fmc6mp6BYiRbHcPWjiRQDxUF1b7DDMn7CLAZ2HPwbaG4nba8p8tSDS73d_maAAsnfH1rw7aCZ0qsRwouAKMZPApufuijtWbpXQqvIehyQgQZc8nxwm4onhTyQ53dfvnge843ovXi9lSWKXIJA9u-Pw9CcaL4is2eztRxdLIrwjnHXO_IlR63JTnaxCUkSfLD6Kt1og5ZgyzlErWKbXn2u21M"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-500 rounded-full border-2 border-[#152031]"></div>
                </div>
                <div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold">
                    Sarah Chen
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Senior Engineer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <input
                  checked
                  className="w-6 h-6 rounded-lg bg-surface-container-highest border-white/10 text-primary focus:ring-offset-0 focus:ring-primary checked:bg-primary transition-all cursor-pointer"
                  type="checkbox"
                />
              </div>
            </label>
            {/* <!-- Contact Item --> */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                    JM
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#152031]"></div>
                </div>
                <div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold">
                    Jordan Miller
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Marketing Lead
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <input
                  checked
                  className="w-6 h-6 rounded-lg bg-surface-container-highest border-white/10 text-primary focus:ring-offset-0 focus:ring-primary checked:bg-primary transition-all cursor-pointer"
                  type="checkbox"
                />
              </div>
            </label>
            {/* <!-- Contact Item (Unselected) --> */}
            <label className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    className="w-11 h-11 rounded-full object-cover border-2 border-transparent"
                    data-alt="Portrait of a young tech professional man in a minimalist workspace, natural sunlight coming through a window, soft shadows, high-end photography, realistic textures and tones."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxDGs0tnglv9WvHVzgtOJUHUNzP5GN356Z62JGqGhAmXBjIVXIRNlZJowkgL_ADynk4GuC4vm_BpzSNDxH_zey2kTC8LD0f_CLYxHPYGndWkCoy34FWcXhRnKVLg4X1Ztlst8OEyRgO3E-5lWnkqsipLvO5cRQQ_ET4KDMsrY495uBfmYQrNsHldpuV71GSx49LkCRZlp1iwT15T4B_7-dPxVUfnypqY58qhO9SMRYZVvGRJN4KTUGHDjy3vTYRiwIl2RNG_2IbQ"
                  />
                </div>
                <div>
                  <div className="font-body-md text-body-md text-on-surface font-semibold">
                    David Park
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Frontend Developer
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <input
                  className="w-6 h-6 rounded-lg bg-surface-container-highest border-white/10 text-primary focus:ring-offset-0 focus:ring-primary checked:bg-primary transition-all cursor-pointer"
                  type="checkbox"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      {/* <!-- Footer Actions --> */}
      <div className="p-8 border-t border-white/5 flex gap-4">
        <button className="flex-1 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-on-surface font-semibold transition-all active:scale-95">
          Cancel
        </button>
        <button className="flex-[2] px-6 py-4 rounded-2xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2">
          <span>Create Group</span>
          {/* <span className="material-symbols-outlined">arrow_forward</span> */}
          <FaArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CreateUpdateGroup;
