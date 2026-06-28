"use client";
import Image from "next/image";
import { Edit2 } from "lucide-react";

const ProfileHeader = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-end gap-8 pb-12 border-b border-white/5">
      <div className="relative group">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-white/5 p-2 shadow-2xl relative">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgiM2MrEB3tUIPm6haNeQay_of-QJW31GZVJOGklmDP4VApVyJzAMOr7b5UXFwh_0yb1GnxgPi1pMyKGN-0qwzxKvBA9FcMV05DjH0BlFbGnswp3TtAH2cNGtHMz8wYIz7pEKmOqwU_u4KGjK363Ud1zUFPVAX-4dK5R1CnNsBH4iLjpBTY0Ipb5nITsmU754n2fjj7mZjWRvEViy1NR8ojvm-n29g7ZiYGEe6P_AyzkNaBLdQFv1UMT61mN3pXw99xRmQKWgYr8"
              alt="A high-end professional headshot of a creative director in a minimalist studio environment"
              width={224}
              height={224}
              priority
            />
          </div>
          <button className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-90 duration-200">
            <Edit2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 text-center md:text-left">
        <div>
          <span className="text-blue-400 text-xs tracking-widest uppercase">
            Verified Account
          </span>
          <h1 className="text-4xl font-bold text-white">Adrian Thorne</h1>
          <p className="text-xl text-gray-400">@adrian_thorne_ux</p>
        </div>
        <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
          Design Lead specializing in high-performance communication tools.
          Currently building the future of messaging at Luminal. Nature lover,
          coffee enthusiast, and minimalist.
        </p>
      </div>
    </section>
  );
};

export default ProfileHeader;
