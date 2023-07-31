// ChatList.tsx

import React, { useState } from "react";
import Chat from "./Chat";

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = () => {
    const newChatName = `${chats.length + 1}번 채팅창`; //채팅 제목 넣는 곳 -> 따로 받으면 될 듯
    setChats((prevChats) => [...prevChats, newChatName]);
  };

  const handleRemoveChat = (chatName: string) => {
    setChats((prevChats) => prevChats.filter((chat) => chat !== chatName));
    setSelectedChat(chatName);
  };

  return (
    <div className="chat-list">
      <div className="chat-sidebar">
        <button className="chat-item" onClick={handleAddChat}>
          <img className="addlogo" alt="채팅 추가" />
        </button>
        {chats.map((chatName) => (
          <div
            key={chatName}
            className="chat-item"
            onClick={() => handleChatClick(chatName)}
          >
            {chatName}
            <button onClick={() => handleRemoveChat(chatName)}>
              <img className="deletelogo" alt="삭제" />
            </button>
          </div>
        ))}
      </div>
      <div className="chat-content">
        {selectedChat && <Chat chatName={selectedChat} />}
      </div>
    </div>
  );
};

export default ChatList;
