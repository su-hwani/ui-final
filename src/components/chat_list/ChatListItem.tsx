import React from "react";
import { BiComment, BiTrash } from "react-icons/bi";

interface ChatListItemProps {
  chatName: string;
  isSelected: boolean;
  onChatClick: (chatName: string) => void;
  onTrashClick: (chatName: string) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatName, isSelected, onChatClick, onTrashClick }) => {
  return (
    <div
      role="button" // Use role="button" to indicate it's an interactive element
      className={`flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 hover:bg-list-selected group ${isSelected ? "bg-list-selected rounded-lg" : "bg-list-background rounded-lg"}`}
      onClick={() => onChatClick(chatName)}
      style={{ marginBottom: "8px" }} // Add margin to the bottom of each item
    >
      {/* 말풍선 아이콘 */}
      <BiComment className="h-4 w-4 text-white opacity-50 mr-2" />
      {/* 채팅 이름 */}
      <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative text-gray-300">
        {chatName}
        <div className='absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l ${isSelected ? "from-list-selected rounded-lg" : "from-list-background rounded-lg"}'></div>
      </div>
      {/* 휴지통 아이콘 */}
      <div className="absolute flex right-1 z-10 text-gray-300 visible mr-2">
        <button className="p-1 hover:text-white" onClick={(e) => { e.stopPropagation(); onTrashClick(chatName); }}>
          <BiTrash className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatListItem;
