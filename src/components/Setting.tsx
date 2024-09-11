import React, { useState } from "react";
import DraggableWindow from "./DraggableWindow";

const SettingsMenu: React.FC = () => {
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleFontSizeChange = (size: "small" | "medium" | "large") => {
    setFontSize(size);
    document.documentElement.style.fontSize =
      size === "small" ? "12px" : size === "medium" ? "16px" : "20px";
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const clearCache = () => {
    localStorage.clear();
    alert("Cache cleared");
  };

  return (
    <DraggableWindow
      title="settings"
    >
      <ul className="py-3 px-5">
        <li className="flex justify-between items-center border-b border-black/25 py-2 last:border-0">
          <span className="block text-sm">Font Size</span>
          <div className="flex flex-col space-y-2">
            {["small", "medium", "large"].map((size) => (
              <button
                key={size}
                onClick={() =>
                  handleFontSizeChange(size as "small" | "medium" | "large")
                }
                className={`py-2 px-4 rounded ${
                  fontSize === size
                    ? "bg-blue-500 text-white"
                    : "bg-gray-600 text-gray-300"
                } hover:bg-blue-400`}
              >
                {size}
              </button>
            ))}
          </div>
        </li>

        <li className="flex justify-between items-center border-b border-black/25 py-2 last:border-0">
          <span className="block text-sm">Full Screen</span>
          <button
            onClick={toggleFullScreen}
            className="w-20 relative h-8 border-2 rounded-full bg-black/25 border-white/10"
          >
            <span
              className={`w-6 h-6 absolute top-1/2 transition-all -translate-y-1/2 -translate-x-7 rounded-full bg-white/10 left-8 ${
                isFullScreen ? "translate-x-0" : ""
              }`}
            />
          </button>
        </li>

        <li className="flex justify-between items-center border-b border-black/25 py-2 last:border-0">
          <span className="block text-sm">Clear Cache</span>
          <button
            onClick={clearCache}
            className="flex justify-center items-center py-1 px-3 rounded-md transition-colors bg-red-500/50 hover:text-gray-300 text-gray-400"
          >
            Clear Cache
          </button>
        </li>
      </ul>
    </DraggableWindow>
  );
};

export default SettingsMenu;
