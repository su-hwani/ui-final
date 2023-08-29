import React from "react";
import { BiArrowToRight } from "react-icons/bi";

interface ShowChatListButtonProps {
  onShowChatList: () => void;
  isChatListVisible: boolean; // 채팅 리스트 보임 여부를 전달받습니다.
}

const ShowChatListButton: React.FC<ShowChatListButtonProps> = ({ onShowChatList, isChatListVisible }) => {
  return (
    <div
      className={`flex items-center justify-center px-3 min-h-[44px] py-1 text-white text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-full transition-colors duration-200 cursor-pointer ${isChatListVisible ? "hidden" : ""}`}
      onClick={onShowChatList}
    >
      <BiArrowToRight className="h-5 w-5" />
      <span className="truncate">Show Chat List</span>
    </div>
  );
};

export default ShowChatListButton;
