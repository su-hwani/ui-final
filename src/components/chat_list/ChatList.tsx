import React, { useState } from "react";
import ChatListItem from "./ChatListItem";
import AddChatButton from "./AddChatButton";
import ShowChatListButton from "./ShowChatListButton";

export default function ChatList() {
  const [chats, setChats] = useState<string[]>(["1번 채팅창"]);
  const [selectedChat, setSelectedChat] = useState<string>("1번 채팅창");
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isChatListVisible, setIsChatListVisible] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newChatName, setNewChatName] = useState<string>("");

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  const handleAddChat = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
    setNewChatName(""); // 입력 필드 초기화
  };

  // ~번 + 사용자가 재정의한 채팅방 이름 형식으로 저장
  /*
  const handleModalConfirm = () => {
    // 사용자가 입력한 값으로 채팅을 추가하고 모달을 닫기
    if (newChatName.trim() !== "") {
      const updatedChatName = `${chats.length + 1}번 ${newChatName}`;
      setChats((prevChats) => [...prevChats, updatedChatName]);
      setSelectedChat(updatedChatName);
    }
    setIsModalOpen(false); 
    setNewChatName(""); 
  }; */

  // 사용자가 재정의한 채팅방 이름만 저장
  const handleModalConfirm = () => {
    if (newChatName.trim() !== "") {
      setChats((prevChats) => [...prevChats, newChatName]);
      setSelectedChat(newChatName);
    }
    setIsModalOpen(false);
    setNewChatName("");
  };
  

  const handleFullScreenToggle = () => {
    setIsFullScreen((prevFullScreen) => !prevFullScreen);
  };

  const handleShowChatList = () => {
    setIsChatListVisible(true);
  };

  const handleRemoveChat = (chatName: string) => {
    const updatedChats = chats.filter((chat) => chat !== chatName);
    setChats(updatedChats);

    if (selectedChat === chatName) {
      setSelectedChat("");
    }
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
          {isModalOpen && (
            <>
              <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="fixed inset-0 bg-black opacity-40"></div> 
                <div className="bg-white p-4 rounded-lg shadow-lg relative z-20">
                  <input
                    type="text"
                    placeholder="새 채팅 이름 입력"
                    value={newChatName}
                    onChange={(e) => setNewChatName(e.target.value)}
                  />
                  <button onClick={handleModalConfirm}style={{ marginRight: '10px' }}>확인</button>
                  <button onClick={handleModalClose}>취소</button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
