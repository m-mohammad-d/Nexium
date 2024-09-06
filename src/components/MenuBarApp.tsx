import React, { MouseEvent } from "react";
import { IoClose } from "react-icons/io5";
import { MdOpenInFull, MdOutlineMinimize } from "react-icons/md";

interface MenuBarAppProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onDragStart: (e: MouseEvent<HTMLDivElement>) => void;
}

const MenuBarApp: React.FC<MenuBarAppProps> = ({
  title,
  onClose,
  onMinimize,
  onMaximize,
  onDragStart,
}) => {
  return (
    <div
      className="bg-gray-100 text-black p-2 flex justify-between items-center rounded-t-xl relative cursor-move"
      onMouseDown={onDragStart}
    >
      <div className="flex space-x-2 ml-3">
        <button
          onClick={onClose}
          className="w-5 h-5 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center"
          aria-label="Close"
        >
          <IoClose size={10} />
        </button>
        <button
          onClick={onMinimize}
          className="w-5 h-5 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center"
          aria-label="Minimize"
        >
          <MdOutlineMinimize size={10} />
        </button>
        <button
          onClick={onMaximize}
          className="w-5 h-5 bg-green-500 rounded-full hover:bg-green-600 flex items-center justify-center transition-colors"
          aria-label="Maximize"
        >
          <MdOpenInFull size={10} />
        </button>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 select-none">
        {title}
      </div>
      <div className="mr-3"></div>
    </div>
  );
};

export default MenuBarApp;
