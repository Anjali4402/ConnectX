import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowOutward, MdOutlineCall } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidMessageDots } from "react-icons/bi";
import React, { Dispatch } from "react";

interface ChatHeaderProps {
  setOpenChatInfo: Dispatch<boolean>;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ setOpenChatInfo }) => {
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

        <div className="w-fit">
          <div className="flex justify-between items-start w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none w-full group/trigger cursor-pointer">
                <div className=" cursor-pointer hidden md:flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <MoreVertical className="h-5 w-5 text-on-surface-variant group-hover/trigger:text-gray-900" />
                </div>
                <Button
                  variant="outline"
                  className="cursor-pointer md:hidden w-full border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 shadow-sm"
                >
                  More Actions
                  <IoIosArrowDown className="ml-1" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-52 shadow-xl border-gray-200/80 bg-white/95 backdrop-blur-sm"
              >
                <DropdownMenuItem
                  onClick={() => setOpenChatInfo(true)}
                  className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50 transition-colors py-2.5"
                >
                  <MdOutlineArrowOutward className="mr-2 h-4 w-4 text-blue-600" />
                  <span className="font-medium">Contact Info</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile action buttons */}
          <div className="md:hidden w-full flex items-center gap-2.5 pt-1">
            <Button
              asChild
              className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-200"
            >
              <a
              // href={`tel:+${rider.phoneNumber}`}
              >
                <PiPhoneCallFill className="mr-1.5" />
                Call
              </a>
            </Button>
            <Button
              asChild
              className="flex-1 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md shadow-purple-200/50 hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-200"
            >
              <a
              // href={`sms:+${rider.phoneNumber}`}
              >
                <BiSolidMessageDots className="mr-1.5" />
                Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
