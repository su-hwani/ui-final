import React from "react";
import { BiArrowToRight } from "react-icons/bi";


interface ShowChatListButtonProps {
  onShowChatList: () => void;
  isChatListVisible: boolean;
}

const ShowChatListButton: React.FC<ShowChatListButtonProps> = ({
  onShowChatList,
  isChatListVisible,
}) => {
  
  const handleButtonClick = () => {
    console.log("Button clicked");
    onShowChatList();
  };

  console.log(`isChatListVisible in ShowChatListButton: ${isChatListVisible}`);

  return (
    <div
      className={`flex items-center justify-center px-3 min-h-[44px] py-1 text-black text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-full transition-colors duration-200 cursor-pointer ${
        isChatListVisible ? "hidden" : ""
      }`}
      onClick={handleButtonClick}
    >
      <BiArrowToRight className="h-5 w-5" />
      <span className="truncate">Show Chat List</span>
    </div>
  );
};

export default ShowChatListButton;
