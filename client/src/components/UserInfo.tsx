import Image from "next/image";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const UserInfo = () => {
  return (
    <div className="p-4 border-t border-white/5">
      <div className="flex items-center gap-3 p-2 bg-white/5 rounded-full ">
        <Image
          //   src="/profile.png"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQkjY3wR3_MobHadKfV7Td3YKkcV4pCYlobnz56Qp8IC999yjUS_u2jD7wBarNP-lJ9VpYS-RRB_O8fjVk72USwpRdCnYxn4Wi7vb-TZ4KLCAi_vwgQc739ZQC5ZWGJeN1zVmdncUzr3FZqHKv-JgnHKmnW_9vNE_HIi5eAtnOLvDb_jZRgvpCp23soIGA_zIj4NWQWy2rr5_mWTQtzvJHxnS72ws7RoPTsPv338c3PVMRYMxBJv843eK9igj2BQP3TLbbLtUW_GI"
          width={40}
          height={40}
          className="rounded-full border-2 border-primary/20 "
          alt="Picture of the author"
        />
        {/* <img
              alt="Alex Rivera"
              className="w-10 h-10 rounded-full border-2 border-primary/20"
              data-alt="A professional studio portrait of a modern software designer with a friendly expression. The background is a soft, out-of-focus tech office with cool blue and purple lighting, consistent with a high-end digital communication platform aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQkjY3wR3_MobHadKfV7Td3YKkcV4pCYlobnz56Qp8IC999yjUS_u2jD7wBarNP-lJ9VpYS-RRB_O8fjVk72USwpRdCnYxn4Wi7vb-TZ4KLCAi_vwgQc739ZQC5ZWGJeN1zVmdncUzr3FZqHKv-JgnHKmnW_9vNE_HIi5eAtnOLvDb_jZRgvpCp23soIGA_zIj4NWQWy2rr5_mWTQtzvJHxnS72ws7RoPTsPv338c3PVMRYMxBJv843eK9igj2BQP3TLbbLtUW_GI"
            /> */}
        <div className="flex-1 overflow-hidden">
          <p className="font-label-md text-label-md text-on-surface truncate">
            Alex Rivera
          </p>
          <p className="text-[10px] text-on-surface-variant truncate">
            alex@luminal.io
          </p>
        </div>
        <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
          {/* <span className="material-symbols-outlined text-[20px]">logout</span> */}
          <FiLogOut className=" size-5" />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
