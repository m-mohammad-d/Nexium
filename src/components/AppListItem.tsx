import React from "react";
import { App } from "../types/AppTypes";

interface AppListItemProps {
  app: App;
  onDelete: (id: number) => void;
  isSelected: boolean;
  onClick: () => void;
}

const AppListItem: React.FC<AppListItemProps> = ({
  app,
  onDelete,
  isSelected,
  onClick,
}) => (
  <li className="p-3">
    <button
      className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100 relative"
      onClick={onClick}
    >
      <img
        src={`public/appicon/${app.img}.png`}
        alt={app.name}
        className="w-10 h-10 rounded-md"
      />
      <span className="text-gray-400 mt-2">{app.name}</span>
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(app.id);
          }}
          className="absolute -bottom-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-600"
        >
          Delete
        </button>
      )}
    </button>
  </li>
);

export default AppListItem;
