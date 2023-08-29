import React, { useState } from "react";
import ChatListItem from "./ChatListItem";
import { BiComment } from "react-icons/bi";

export default function ChatList() {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = () => {
    const newChatName = `${chats.length + 1}번 채팅창`;
    setChats((prevChats) => [...prevChats, newChatName]);
    setSelectedChat(newChatName);
  };

  const handleRemoveChat = (chatName: string) => {
    const updatedChats = chats.filter((chat) => chat !== chatName);
    setChats(updatedChats);

    if (selectedChat === chatName) {
      setSelectedChat("");
    }
  };

  return (
    <div className="overflow-auto w-1/5 py-4 px-2 border-r border-default-border bg-list-background">
      <div className="mb-1 flex flex-row gap-2">
        <button
          onClick={handleAddChat}
          className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-grow overflow-hidden"
        >
          <BiComment className="h-4 w-4 shrink-0" />
          <span className="truncate">New chat</span>
        </button>
        <span className="" data-state="closed">
          <button
            onClick={() => {} /* You can add a handler here */}
            className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <span
              className="hidden"
              style={{
                position: "absolute",
                border: "0px",
                width: "1px",
                height: "1px",
                padding: "0px",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
            >
              Close sidebar
            </span>
          </button>
        </span>
      </div>
      {chats.map((chatName) => (
        <ChatListItem
          key={chatName}
          chatName={chatName}
          isSelected={selectedChat === chatName}
          onChatClick={handleChatClick}
          onTrashClick={handleRemoveChat}
        />
      ))}
    </div>
  );
}
