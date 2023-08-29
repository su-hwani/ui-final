import { useState } from "react";
import Graph from "./graph/Graph";
import ChatService from "../service/chat";
import NewChatForm from "./NewChatForm";
export default function Chats({ chatService }: { chatService: ChatService }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [showGraph, setShowGraph] = useState(false);
  const [isGraphLoading, setIsGraphLoading] = useState(false);

  const handleMessages = (newMessage: any) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleToggleGraph = () => {
    setShowGraph((prevState) => !prevState);
    setIsGraphLoading(true);

    setTimeout(() => {
      setIsGraphLoading(false);
    }, 1000);
  };

  return (
    <div className="flex-1 p-4">
      <div
        style={{ display: "flex", height: "90vh", backgroundColor: "white" }}
      >
        <div
          style={{ flex: 42, padding: "20px", borderRight: "1px solid #ccc" }}
        >
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
                        // onClick={handleSendMessage}
                        className="cursor-pointer underline text-sm"
                      >
                        선택하기
                      </span>
                    </div>
                  </div>
                )}
                {message.sender === "user" && (
                  <div className="bg-violet-100 text-black p-4 rounded-lg inline-block text-right">
                    {message.text}
                  </div>
                )}
              </div>
            ))}

            {/* {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 text-violet-400 animate-spin">
                  <FaCircleNotch />
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  Loading Message...
                </span>
              </div>
            ) : null} */}
          </div>
          <NewChatForm
            onQuestionClick={handleMessages}
            chatService={chatService}
          />
        </div>
        {showGraph && <Graph isGraphLoading={isGraphLoading} />}
      </div>
    </div>
  );
}
