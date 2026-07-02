"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ModalLayout } from "./ui/shared/ModalLayout";
import ProfileManagement from "@/features/settings/ProfileManagement";

const UserInfo = ({ role }: { role: "admin" | "user" }) => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  return (
    <>
      <div className="pt-4 pb-1 border-t border-white/5 px-2">
        <div className="flex items-center gap-3 p-2 bg-white/5 rounded-full ">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQkjY3wR3_MobHadKfV7Td3YKkcV4pCYlobnz56Qp8IC999yjUS_u2jD7wBarNP-lJ9VpYS-RRB_O8fjVk72USwpRdCnYxn4Wi7vb-TZ4KLCAi_vwgQc739ZQC5ZWGJeN1zVmdncUzr3FZqHKv-JgnHKmnW_9vNE_HIi5eAtnOLvDb_jZRgvpCp23soIGA_zIj4NWQWy2rr5_mWTQtzvJHxnS72ws7RoPTsPv338c3PVMRYMxBJv843eK9igj2BQP3TLbbLtUW_GI"
            width={40}
            height={40}
            className="rounded-full border-2 border-primary/20 "
            alt="Picture of the author"
          />

          <div className="flex-1 overflow-hidden">
            <p className="text-sm text-on-surface truncate">Alex Rivera</p>
            <p className="text-[10px] text-on-surface-variant truncate">
              alex@luminal.io
            </p>
          </div>
          {role === "user" ? (
            <button
              onClick={() => setIsEditProfile(true)}
              className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              {/* <span className="material-symbols-outlined text-[20px]">logout</span> */}
              <FaExpandAlt className=" size-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                window.location.href = "/admin/login";
              }}
              className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <FiLogOut className=" size-4" />
            </button>
          )}
        </div>
      </div>

      <ModalLayout open={isEditProfile} setOpen={setIsEditProfile}>
        <ProfileManagement />
      </ModalLayout>
    </>
  );
};

export default UserInfo;
