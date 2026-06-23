import Image from "next/image";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdLink, IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  MdLogout,
  MdModeEdit,
  MdMoreHoriz,
  MdOutlineGroup,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface ChatInfoProps {
  setOpen: (value: boolean) => void;
}

const ChatInfo: React.FC<ChatInfoProps> = ({ setOpen }) => {
  return (
    <div className=" backdrop-blur-2xl border-r border-white/5 p-0 h-screen overflow-hidden flex flex-col">
      <header className="border-b border-white/5 p-3">
        <div className="flex items-center justify-between gap-2 ml-4 text-primary ">
          <RxCross2
            onClick={() => {
              setOpen(false);
            }}
            className="size-5 cursor-pointer"
          />

          <span className="text-lg text-primary tracking-tighter font-bold">
            Contact Info
          </span>

          <MdModeEdit className="size-5" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="">
          <aside className="glass-panel-2 hidden lg:flex flex-col overflow-y-auto">
            <div className="p-6 border-b border-white/5 text-center">
              <Image
                alt="Design Team"
                width={96}
                height={96}
                className="rounded-3xl mx-auto mb-4 shadow-xl border-2 border-primary/20"
                data-alt="Detailed group avatar for a creative team, stylized as a 3D isometric composition of design tools like styluses and geometric blocks in a monochromatic palette with indigo highlights."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDemA_qAJsSaaM8ci_2ZsihanMolYQuA7QsahqecGN_2cYKqoBKZwUdBauv2uFGxSKb5hQh4XEHKRhHPdPmQ4n8MuVLDbaA7Mr_8wly0Q29TGpAWy5irj65NR3xTJIeO7cff3wjawMlww-Wb6cDF4wu3vFX20f-0BmqDXmsZY9hXON-5Z6a73uw7GSBWVye9QsfwEFtyJh-ikQQrN1uh7iPY1gyP1iH1aDdG3m5H-pQvd_fmb2pHt_w8c2x4-dAD7A_bg87pNbY51w"
              />
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Design Team
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Official ConnectX Creative Group
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <button className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
                    <IoMdNotificationsOutline className="size-5" />
                  </div>
                  <span className="text-[10px] font-medium text-on-surface-variant">
                    Mute
                  </span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
                    <IoSearch className="size-5" />
                  </div>
                  <span className="text-[10px] font-medium text-on-surface-variant">
                    Find
                  </span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
                    <MdMoreHoriz className="size-5" />
                  </div>
                  <span className="text-[10px] font-medium text-on-surface-variant">
                    More
                  </span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Shared Media
                </h4>
                <button className="text-primary text-xs font-semibold hover:underline">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-20 relative w-full">
                  <Image
                    className=" object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    fill
                    alt="image-2"
                    data-alt="High-resolution close-up of a futuristic UI dashboard with glassmorphic cards and glowing data visualizations in shades of blue and deep slate."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Qv5FVdAZReqBW0gNSZRFT0fCF5U60bQkdhLypABqzX8orlo4oLqd5kA7rky1UXbnajDnlz9Igl8F5gbjrfFxi8CQV-9uyIgHQ8OOltonR2ihVDgaFsu7b7dbzXDaKTxYLFJPY6b12QXsG7uBCkPqfMT5ihJYNuzP1gh0jkIXvnwjPtql6SvIIQ0cztoobXrf_zgomRnHuRXZt6mNz7DEbSjLmGYn9buAAiXwq_u9mfp27xdwBdWsBchNIANoyeD--IJ4M7frnlI"
                  />
                </div>
                <div className="h-20 relative w-full">
                  <Image
                    className=" object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    fill
                    alt="image-2"
                    data-alt="Cinematic shot of a minimalist workstation with a large monitor displaying high-end creative software, soft neon lighting reflecting off brushed aluminum surfaces."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_n9B8apwpROwMHPWcNBMvuafgcABYsWPW53eRbb541r-LGLjTTwN0CFkEw9Up4fr98UXV7fUIO_Wsr9P2Rxt7WDABOSWf36VCQAZkaCVjb4lanW-YaaZ7X7J-UTvxqho_cDQdDaGr-J78u6drpSaYLcF0YkP1KEBJp36l8SYDr9DQ-XS1i8gu_Qw1tKVUzzw7jEyogGuqYuabW_XynHskafJhW1TMoaeiDCllOs_0Fbepv-rgggsy_5B1lKObXIGFMCQi7OO4g_g"
                  />
                </div>
                <div className="h-20 relative w-full">
                  <Image
                    className=" object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    fill
                    alt="image-2"
                    data-alt="A clean, minimalist developer workspace at night, featuring a mechanical keyboard with indigo backlight and a dual-monitor setup showing lines of code and design systems."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUIaa5LN5YOMUhTRfngUp0h108N79gTyp5RJtZ4iGoaGE4fdv-DIYkPHNwufi46fFG0F9uURBSRVVDNCE9r3KbKASFaooL9BobJGKmIG33BJb8Ih03TdKzolXyj0HZbCe99yVqp5FyqdtGJJPKfLXeMpcqIBcnE4vyAQiLOyT1UKI3Y7ang09KyXyo4CsXce6lbK37R1jST2cJ7YQFjEBmkF1oVwWPkW_ISrXUHvhNwuBxEtrD-A8IU_QOOs5z552_GIfoY1W2WEA"
                  />
                </div>
                <div className="h-20 relative w-full">
                  <Image
                    className=" object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    fill
                    alt="image-2"
                    data-alt="Vibrant abstract 3D artwork with fluid ribbons of purple and electric indigo weaving through a dark, foggy digital space, emphasizing motion and depth."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVxlu-6Tv9W8smDXu50EoqGRB6huku9HIr4fEUdtV1CHgAcyBDstF9FEAmzW75dhaeG_0KqbLyA21vp5Wm5adoEfJHP-x13uNOywxbtmp9cuFpYiQR1e_jHSUG-dYw8miUnj5QLI0D9HDMIkI2sDLIP08syOC9E5-h-NYvt5K1jp9vczM7nm0luke7lmpXGnzWZ11X8_f9NDRMuJkqpB3uxao14_Adox_nliwfyYDyKrpxJTkZ0syaGUMkizsSeKglECMxyAE6D5M"
                  />
                </div>

                <div className="w-full h-20 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white/5 cursor-pointer">
                  <span className="text-xs font-bold">+14</span>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between text-on-surface group">
                <div className="flex items-center space-x-3">
                  <MdOutlineGroup className="text-on-surface size-6" />
                  <span className="text-body-md font-medium">Members</span>
                </div>
                <span className="text-xs text-on-surface-variant">12</span>
              </button>
              <button className="w-full flex items-center justify-between text-on-surface group">
                <div className="flex items-center space-x-3">
                  <FaRegFileAlt className="text-on-surface size-5" />
                  <span className="text-body-md font-medium">Shared Files</span>
                </div>
                <span className="text-xs text-on-surface-variant">42</span>
              </button>
              <button className="w-full flex items-center justify-between text-on-surface group">
                <div className="flex items-center space-x-3">
                  <IoMdLink className="text-on-surface size-5" />
                  <span className="text-body-md font-medium">Shared Links</span>
                </div>
                <span className="text-xs text-on-surface-variant">108</span>
              </button>
            </div>
            <div className="mt-auto p-6 border-t border-white/5">
              <button className="cursor-pointer w-full py-3 flex items-center justify-center space-x-2 text-error hover:bg-error/10 rounded-xl transition-all font-medium text-body-md">
                <MdLogout className="size-5" />
                <span>Leave Group</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
