import React from "react";


interface ChatProps {
  chatName: string;
}

const Chat: React.FC<ChatProps> = ({ chatName }) => {
  // 대화 내용을 가져오는 로직 구현
  const getChatMessages = (chatName: string): string[] => {
    // 채팅창 이름에 따라 해당 채팅의 대화 내용을 가져오는 로직을 구현
    // 예시로 간단히 임의의 대화 내용을 반환하도록 작성
    if (chatName === 'Chat 1') {
      return ['메시지 1', '메시지 2', '메시지 3'];
    } else if (chatName === 'Chat 2') {
      return ['메시지 A', '메시지 B', '메시지 C'];
    } else if (chatName === 'Chat 3') {
      return ['메시지 X', '메시지 Y', '메시지 Z'];
    } else if (chatName === 'Chat 4') {
      return ['메시지 가', '메시지 나', '메시지 다'];
    } else {
      return [];
    }
  };

  const chatMessages = getChatMessages(chatName);

  return (
    <div className="chat-container">
      <h2>{chatName} 대화 내용</h2>
      <ul>
        {chatMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;

