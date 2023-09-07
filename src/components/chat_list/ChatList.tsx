import React, { useState } from "react";
import ChatListItem from "./ChatListItem";
import AddChatButton from "./AddChatButton";

export default function ChatList({
  isChatListVisible, // isChatListVisible를 props로 받음
  onChatListToggle, // onChatListToggle을 props로 받음
}: {
  isChatListVisible: boolean;
  onChatListToggle: () => void;
}) {
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
    <div className={`overflow-auto w-1/5 py-4 px-2 border-r border-default-border bg-list-background ${!isChatListVisible ? 'hidden' : ''}`}>
      <AddChatButton onAddChat={handleAddChat} onChatListToggle={onChatListToggle} isChatListVisible={isChatListVisible} />
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
