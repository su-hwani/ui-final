import React, { useState } from "react";
import Chat from "./Chat";
import { FaPlus, FaTrash } from "react-icons/fa";

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = () => {
    const newChatName = `${chats.length + 1}번 채팅창`;
    setChats((prevChats) => [...prevChats, newChatName]);
  };

  const handleRemoveChat = (chatName: string) => {
    setChats((prevChats) => prevChats.filter((chat) => chat !== chatName));
    setSelectedChat(chatName);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 py-4 px-4 border-r border-charcoal border-solid">
        <button
          className="mb-4 p-2 flex items-center justify-center font-bold text-charcoal border-solid border-2 border-charcoal bg-white rounded-lg w-full"
          onClick={handleAddChat}
        >
          <FaPlus className="h-5 w-5 mr-2" />
          채팅 추가
        </button>
        {chats.map((chatName) => (
          <div
            key={chatName}
            className={`p-2 flex items-center justify-between hover:bg-gray-100 cursor-pointer ${
              selectedChat === chatName
                ? "bg-gray-300 rounded-lg"
                : "rounded-lg"
            } border-r`}
            onClick={() => handleChatClick(chatName)}
          >
            <span className="font-bold text-lg text-gray">{chatName}</span>
            <button
              className="p-1 rounded-lg"
              onClick={() => handleRemoveChat(chatName)}
            >
              <FaTrash className="h-4 w-4 text-gray" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        {selectedChat && <Chat chatName={selectedChat} />}
      </div>
    </div>
  );
};

export default ChatList;
