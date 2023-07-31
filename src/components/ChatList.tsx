import React from 'react';
import '../ChatList.css';

interface ChatListProps {
  chats: string[];
  handleChatClick: (chatName: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, handleChatClick }) => {
  return (
    <div className="chat-list-container">
      <h2>채팅 목록</h2>
      <ul className="chat-list">
        {chats.map((chatName) => (
          <li
            key={chatName}
            className="chat-list-item"
            onClick={() => handleChatClick(chatName)}
          >
            {chatName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
