import React, { useState } from "react";
import Chat from "./Chat";
import { FaPlus, FaTrash, FaComment } from "react-icons/fa"; // Import the FaComment icon

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
          <FaPlus className="h-4 w-5 mr-2" />
          New chat
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
            <span className="flex items-center space-x-2">
            <FaComment className="h-5 w-5 text-gray pointer-events-none" />
              <span className="font-medium text-lg text-gray">{chatName}</span>
            </span>
            <button
              className="p-1 rounded-lg hover:text-gray-500"
              onClick={() => handleRemoveChat(chatName)}
            >
              <span className="text-xl">
                <FaTrash className="h-4 w-4 text-gray" />
              </span>
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
