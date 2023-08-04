import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Graph from "./Graph";

export default function Chat(chatName: any) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [inputText, setInputText] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const userMessage = { sender: "user", text: inputText };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputText("");

      setTimeout(() => {
        const chatbotResponse = {
          sender: "chatbot",
          text: "I am a chatbot. You said: " + inputText,
        };
        setMessages((prevMessages) => [...prevMessages, chatbotResponse]);
      }, 1000);
    }
  };

  // 엔터키로 입력 가능
  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleToggleGraph = () => {
    setShowGraph((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex", height: "90vh", backgroundColor: "white" }}>
      <div style={{ flex: 42, padding: "20px", borderRight: "1px solid #ccc" }}>
        <div
          style={{
            height: "580px",
            overflowY: "scroll",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            position: "relative",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`text-${
                message.sender === "user" ? "right" : "left"
              } mb-10`}
            >
              {message.sender === "chatbot" && (
            <div>
              <div className="bg-gray-200 text-black p-4 rounded-lg inline-flex items-center justify-end relative">
                {message.text}
              </div>
              {/* Move the buttons here, inside the chatbot message div */}
              <div className="mt-2 flex items-center">
                <span
                  onClick={handleToggleGraph}
                  className="cursor-pointer underline text-sm mr-2"
                >
                  상세보기
                </span>
                <span
                  onClick={handleSendMessage}
                  className="cursor-pointer underline text-sm"
                >
                  선택하기
                </span>
              </div>
            </div>
          )}
          {message.sender === "user" && (
            <div
              className="bg-violet-100 text-black p-4 rounded-lg inline-block text-right"
            >
              {message.text}
            </div>
          )}
            </div>
          ))}
        </div>
          <div className="mt-4 flex items-center justify-end">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleEnterKeyPress}
              className={`flex-1 p-4 rounded-lg mr-2 border default-border"}`}
            />
            <button
            onClick={handleSendMessage}
            className="p-5 rounded-lg bg-white text-gray-500 border cursor-pointer border-default-border focus:border-gray-400"
            style={{ borderWidth: "1px", borderColor: "#ccc" }} // Default border width and color
            onFocus={(e) => {
              e.currentTarget.style.borderWidth = "2px"; // Adjust border width on focus
              e.currentTarget.style.borderColor = "#ccc"; // You can change the color as well
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderWidth = "1px"; // Revert border width on blur
              e.currentTarget.style.borderColor = "#ccc"; // You can change the color as well
            }}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
      {showGraph && <Graph />}
    </div>
  );
}