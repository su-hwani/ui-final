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
      className={`flex items-center justify-center pl-5 min-h-[44px] py-10 text-black text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 transition-colors duration-200 cursor-pointer ${
        isChatListVisible ? "hidden" : ""
      }`}
      onClick={handleButtonClick}
    >
      <BiArrowToRight className="h-5 w-5" />
    </div>
  );
};

export default ShowChatListButton;
