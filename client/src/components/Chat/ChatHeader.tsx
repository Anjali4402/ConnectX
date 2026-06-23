import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";

const ChatHeader = () => {
  return (
    <header className="h-16 flex justify-between items-center px-gutter bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/5 z-40 sticky top-0 px-4">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            alt="Group Avatar"
            className="rounded-full border border-primary/20"
            width={40}
            height={40}
            data-alt="A professional group chat avatar featuring a stylized composition of geometric shapes in electric indigo and slate, representing a cohesive design team in a high-tech minimalist digital environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmOK5xe7Phcl3fl_vQrdIWoTCEDq4--2HqjnykMrd_7oxoExCYsTDUn-aCLHkBPyT1G1kDymttBx3tJ1smgIvmbcawsHai-LAJVGtMdnhUx1IJGfi7vHtq4tTp-PbKoKh3FVr-cgaXSHLv8xPei-aTVsEJHN5MdwOtJA0nQZJRW1_siQTmLhswOi1oO-ldloSRhk4368-WUfWMWsWqm9VnAGAGCls53wQdhJQ8BHpbvtY0lrv4gWGsX30Qxz-LgnjDnnAjqjaDmXc"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></div>
        </div>
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
            Design Team
          </h2>
          <p className="text-xs text-on-surface-variant font-medium">
            12 Members • 4 Online
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 text-on-surface-variant hover:bg-white/10 rounded-full transition-colors active:scale-95 duration-200">
          <IoSearch className="size-5" />
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-white/10 rounded-full transition-colors active:scale-95 duration-200">
          <MdOutlineCall className="size-5" />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
