// ChatList.tsx

<<<<<<< Updated upstream
import React, { useState } from 'react';
import Chat from './Chat';
=======
import React, { useState } from "react";
import Chat from "./Chat";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import { TbMessageCirclePlus,TbMessageCircleX } from "react-icons/tb";
>>>>>>> Stashed changes

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<string[]>(['1번 채팅창']);
  const [selectedChat, setSelectedChat] = useState<string>('1번 채팅창');

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
<<<<<<< Updated upstream
    <div className="chat-list">
      <div className="chat-sidebar">
        
        <button className="chat-item" onClick={handleAddChat}><img className='addlogo' alt='채팅 추가'/></button>
        {chats.map((chatName) => (
          <div key={chatName} className="chat-item" onClick={() => handleChatClick(chatName)}>
            {chatName}
            <button onClick={() => handleRemoveChat(chatName)}><img className='deletelogo' alt='삭제'/></button>
          </div>
        ))}
      </div>
      {/* 윗부분 */}
      <div className="chat-content">
=======
    <div className="flex h-screen border-obzen-purple border-solid ">
      <div className="w-1/4 py-4 px-2 border-r  border-obzen-purple border-solid">
        <button className="mb-4 p-1 h-12 w-12 font-bold  align-middle text-obzen-purple border-solid border-2 border-obzen-purple  bg-white rounded-lg " onClick={handleAddChat}>
          <TbMessageCirclePlus  className="h-8 w-8 "/>
        </button>
        {chats.map((chatName) => (
          <div key={chatName} className={`p-2 hover:bg-violet-50 cursor-pointer  text-obzen-purple ${selectedChat === chatName ? 'bg-violet-100 rounded-lg' : 'bg-white rounded-lg'}`} onClick={() => handleChatClick(chatName)}>
            <text className="border-r font-bold align-middle text-lg ">{chatName}</text>
            <button className="ml-48 p-1 rounded-lg border-solid border-2 border-obzen-purple" onClick={() => handleRemoveChat(chatName)}>
              <TbMessageCircleX className="h-8 w-8"/>
            </button>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 ">
>>>>>>> Stashed changes
        {selectedChat && <Chat chatName={selectedChat} />}
      </div>
      {/* 윗부분 */}
    </div>
  );
};

export default ChatList;
