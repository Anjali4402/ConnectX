"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const navigationOption = ["all", "unread", "group", "archived"];

const NavigationBar = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  return (
    <nav className="grid grid-cols-4 bg-surface-container-highest/40 p-1 rounded-xl">
      {navigationOption.map((option, index) => (
        <Button
          key={index}
          onClick={() => setSelectedOption(option)}
          size="lg"
          className={` text-xs capitalize gap-0 font-semibold
            flex-1 py-2 px-1 cursor-pointer
            ${option === selectedOption ? "bg-primary text-on-primary " : "bg-transparent hover:bg-primary/20 text-on-surface-variant hover:text-on-surface"}
            rounded-md transition-all
             `}
        >
          {option}
        </Button>
      ))}
    </nav>
  );
};

{
  /* <span className="bg-primary-container/40 text-[9px] px-1 rounded-full"
                >12</span
              > */
}

export default NavigationBar;
