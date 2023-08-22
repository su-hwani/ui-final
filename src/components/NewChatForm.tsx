import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatService from "../service/chat";

interface NewChatFormProps {
  onQuestionClick: (newMessage: any) => void;
  chatService: ChatService;
}

export default function NewChatForm({
  onQuestionClick,
  chatService,
}: NewChatFormProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const [inputText, setInputText] = useState("");
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(event.target.value);
  };
  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      //   setIsLoading(true);

      const userMessage = { sender: "user", text: inputText };
      onQuestionClick(userMessage);
      //   setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputText("");

      setTimeout(() => {
        const chatbotResponse = {
          sender: "chatbot",
          text: "I am a chatbot. You said: " + inputText,
        };
        onQuestionClick(chatbotResponse);
        // setMessages((prevMessages) => [...prevMessages, chatbotResponse]);
        // setIsLoading(false);
      }, 1000);
    }
  };
  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div className="mt-4 flex items-center justify-end">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyUp={handleEnterKeyPress}
        className={`flex-1 p-4 rounded-lg mr-2 border border-gray-500"}`}
      />
      <button
        onClick={handleSendMessage}
        className={`p-5 rounded-lg bg-white text-gray-400 border cursor-pointer border-border-gray-400 group hover:borde-violet-400 focus:border-gray-300 ${
          isButtonHovered ? "border-2" : "border-1"
        }`}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        <FaPaperPlane className={`text-gray-500 group-hover:text-violet-400`} />
      </button>
    </div>
  );
}
