import React, { useState } from "react";
import { App } from "../types/AppTypes";

interface AppListItemProps {
  app: App;
  onDelete?: (id: number) => void;
  isSelected?: boolean;
  onClick: () => void;
  isDefault?: boolean; // Add isDefault prop
}

const AppListItem: React.FC<AppListItemProps> = ({
  app,
  onDelete,
  onClick,
  isDefault = false, // Default to false
}) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDelete(true);
    onClick(); // Optional: Select the item when right-clicked
  };

  return (
    <li className="p-3">
      <button
        className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100 relative"
        onClick={onClick}
        onContextMenu={handleContextMenu} // Handle right-click
      >
        <img
          src={`/public/appicon/${app.img}.png`}
          alt={app.name}
          className="w-10 h-10 rounded-md"
        />
        <span className="text-gray-400 mt-2">{app.name}</span>
        {!isDefault && showDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDelete(false); // Hide the delete button after clicking
              onDelete?.(app.id || 0);
            }}
            className="absolute -bottom-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-600"
          >
            Delete
          </button>
        )}
      </button>
    </li>
  );
};

export default AppListItem;
