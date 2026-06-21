import Image from "next/image";
import React from "react";
import ChatItem from "./ChatItem";

const ChatList = () => {
  // const users = new Array().fill((val)=> val * 10)
  const users = new Array(10).fill(1);

  return (
    <div className=" space-y-3">
      {users.map((user, index) => (
        <ChatItem key={index} />
      ))}
    </div>
  );
};

export default ChatList;
