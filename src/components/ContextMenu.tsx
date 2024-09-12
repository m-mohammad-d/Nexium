import React from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  visible,
  onClose,
  onOptionClick,
}) => {
  if (!visible) return null;

  return (
    <div
      className="absolute bg-white text-gray-900 rounded shadow-lg border border-gray-300"
      style={{ top: y, left: x }}
      onClick={onClose}
    >
      <ul>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onOptionClick("openNewWindow")}
        >
          Open New Window
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onOptionClick("refresh")}
        >
          Refresh
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onOptionClick("settings")}
        >
          Settings
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onOptionClick("Full Screen")}
        >
          Full Screen
        </li>
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onOptionClick("exit")}
        >
          exit
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
