import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatItem = () => {
  return (
    <Link
      href={`/conversations/343434`}
      className="p-3 rounded-2xl bg-white/5 border border-white/10 flex gap-3 cursor-pointer group transition-all"
    >
      <div className="relative shrink-0">
        <Image
          alt="Sarah"
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
          data-alt="A portrait of a creative professional woman in a bright, modern studio. The lighting is warm and cinematic, featuring subtle purple rim lights that match the Electric Indigo brand color. The background is a clean, minimalist workspace with soft bokeh effects. She is smiling naturally, representing a friendly and productive communication environment."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJUeETfl2LR0hmbQwCFxMJx5A38JvrW05ilt5KdgobOp5YDoz6seGWhT7Bqki_Ox4L97MGmAHtYQlwvGcUe-yvoc3vUO6zFF8FZuk9iFCX5dHUDYBQMp5lSbZvh_8y3RyKSgZMyI3Ar3M46CqvxI7Ofz4owhe5hMBB2uBHIhj2IlzSVx84yQvQeG88QmO0JrvmRU7emoqae6W7cIccIVBpM9Fc1yOaG_kPH2HQtc7usb9B1SEXeD42PM2SBQTD7F9JD68zoNs0Ck"
        />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-0.5">
          <h3 className="font-headline-sm text-[15px] text-on-surface truncate">
            Sarah Jenkins
          </h3>
          <span className="text-[11px] text-on-surface-variant">12:45 PM</span>
        </div>
        <p className="text-body-md text-on-surface-variant truncate font-medium">
          I&apos;ve attached the final design specs for the Luminal project...
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <span className="text-[10px] font-bold text-on-primary">3</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
