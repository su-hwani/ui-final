import React from "react";
import { BiPlus } from "react-icons/bi";

interface AddChatButtonProps {
  onAddChat: () => void;
}

const AddChatButton: React.FC<AddChatButtonProps> = ({ onAddChat }) => {
  return (
    <div className="mb-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={onAddChat}
          className="flex items-center gap-2 px-3 min-h-[44px] py-1 text-white text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-full transition-colors duration-200 cursor-pointer"
        >
          <BiPlus className="h-5 w-5" />
          <span className="truncate">New chat</span>
        </button>
        {/* Delete button */}
        <button
          onClick={() => {} /* You can add a handler here */}
          className="flex items-center justify-center gap-2 px-3 min-h-[44px] py-1 text-white text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 transition-colors duration-200 cursor-pointer"
        >
          {/* Delete icon */}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6h18"></path>
            <path d="M16 3L21 8 8 21 3 21 3 16 16 3z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddChatButton;
