import { FaPlus, FaTrash, FaComment } from "react-icons/fa";
import { useState } from "react";

export default function ChatList() {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = () => {
    const newChatName = `${chats.length + 1}번 채팅창`;
    setChats((prevChats) => [...prevChats, newChatName]);
    setSelectedChat(newChatName); // 새로 추가된 채팅으로 자동 선택
  };

  const handleRemoveChat = (chatName: string) => {
    const updatedChats = chats.filter((chat) => chat !== chatName);
    setChats(updatedChats);

    // 삭제한 채팅이 선택되어 있었다면 선택 해제
    if (selectedChat === chatName) {
      setSelectedChat("");
    }
  };

  return (
    <div className="overflow-auto w-1/4 py-4 px-4 border-r border-default-border bg-list-background">
      <button
        className="mb-4 p-2 h-12 w-16 font-bold text-white border-solid border border-0.2 border-white bg-list-background rounded-lg"
        onClick={handleAddChat}
      >
        <FaPlus className="h-6 w-6" />
        <span className="text-white">New chat</span>
      </button>
      {chats.map((chatName) => (
        <div
          key={chatName}
          className={`p-2 h-14 flex items-center justify-between hover:bg-list-selected cursor-pointer ${
            selectedChat === chatName
              ? "bg-list-selected rounded-lg"
              : "bg-list-background rounded-lg"
          } border-r`}
          onClick={() => handleChatClick(chatName)}
        >
          <div className="flex items-center space-x-2">
            <FaComment className="h-5 w-5 text-white" />
            <span className="font-bold text-lg text-white">
              {chatName}
            </span>
          </div>
          <button
            className={`p-2 rounded-full bg-list-background`}
            onClick={() => handleRemoveChat(chatName)}
          >
            <FaTrash className="h-4 w-4 text-white" />
          </button>
        </div>
      ))}
    </div>
  );
}
