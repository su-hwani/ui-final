import React, { useState } from "react";
import ChatListItem from "./ChatListItem";
import AddChatButton from "./AddChatButton";
import ShowChatListButton from "./ShowChatListButton";

export default function ChatList() {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isChatListVisible, setIsChatListVisible] = useState<boolean>(true);

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

  const handleFullScreenToggle = () => {
    setIsFullScreen((prevFullScreen) => !prevFullScreen);
  };

  const handleShowChatList = () => {
    setIsChatListVisible(true);
  };
  
  return (
    <div className={`overflow-auto w-1/5 py-4 px-2 border-r border-default-border bg-list-background ${isFullScreen ? 'hidden' : ''}`}>
      <AddChatButton onAddChat={handleAddChat} onFullScreenToggle={handleFullScreenToggle} isFullScreen={isFullScreen} />
      {isChatListVisible && (
        <>
      <ShowChatListButton onShowChatList={handleShowChatList} isChatListVisible={isChatListVisible} />
          {chats.map((chatName) => (
            <ChatListItem
              key={chatName}
              chatName={chatName}
              isSelected={selectedChat === chatName}
              onChatClick={handleChatClick}
              onTrashClick={handleRemoveChat}
            />
          ))}
        </>
      )}
    </div>
  );
}  