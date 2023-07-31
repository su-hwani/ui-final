import React, { useState } from 'react';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import './App.css';

function App() {
  const chatList = ['Chat 1', 'Chat 2', 'Chat 3', 'Chat 4'];

  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const handleChatClick = (chatName: string) => {
    setSelectedChat(chatName);
  };

  return (
    <div className="App">
      <ChatList chats={chatList} handleChatClick={handleChatClick} />
      <div className="chat-content">
        <header>
          <h1>채팅 홈페이지</h1>
        </header>
        <main>
          {selectedChat && <Chat chatName={selectedChat} />}
        </main>
      </div>
    </div>
  );
}

export default App;
