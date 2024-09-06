import React from "react";
import DockItem from "./DockItem";

interface DockProps {
  onOpen: (windowName: string) => void; // تابعی برای باز کردن پنجره
}

const Dock: React.FC<DockProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center py-2 px-4">
      <div
        className="flex items-center space-x-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-full px-4 py-2"
        style={{
          boxShadow:
            "0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "80px",
        }}
      >
        <DockItem
          icon="/icons/finder.webp"
          label="Finder"
          onClick={() => onOpen("finder")}
        />
        <DockItem
          icon="/icons/settings.webp"
          label="Settings"
          onClick={() => onOpen("settings")}
        />
        <DockItem
          icon="/icons/chrome.webp"
          label="Chrome"
          onClick={() => onOpen("chrome")}
        />
        <DockItem
          icon="/icons/calendar.webp"
          label="Calendar"
          onClick={() => onOpen("calendar")}
        />
        <DockItem
          icon="/icons/calculator.webp"
          label="Calculator"
          onClick={() => onOpen("calculator")}
        />
        <DockItem
          icon="/icons/photos.webp"
          label="Photos"
          onClick={() => onOpen("photos")}
        />
        <DockItem
          icon="/icons/trash.webp"
          label="Trash"
          onClick={() => onOpen("trash")}
        />
      </div>
    </div>
  );
};

export default Dock;
