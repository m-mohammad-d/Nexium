import React, { useState, useEffect } from "react";
import { FaBatteryFull, FaSearch, FaBell, FaWifi } from "react-icons/fa"; // Importing FontAwesome icons

type MenuItems = {
  [key: string]: string[];
};

const MenuBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleString()
  );

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const menuItems: MenuItems = {
    finder: ["About Finder", "Preferences...", "Empty Trash"],
    file: ["New Window", "Open", "Close"],
    edit: ["Undo", "Redo", "Cut", "Copy", "Paste"],
    view: ["Show All Tabs", "Enter Full Screen", "Zoom"],
    go: ["Back", "Forward", "Recent Folders"],
    window: ["Minimize", "Zoom", "Move to Trash"],
    help: ["Search", "Help Center", "Contact Support"],
  };

  return (
    <div className="flex justify-between items-center backdrop-blur-md bg-white/30 shadow-md text-black py-1 px-4">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-lg cursor-pointer"></span>
        {Object.keys(menuItems).map((key) => (
          <div key={key} className="relative">
            <button
              className="hover:bg-white/20 px-2 rounded"
              onClick={() => toggleMenu(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
            {openMenu === key && (
              <div className="absolute left-0 mt-1 w-48 bg-white/90 backdrop-blur-md shadow-lg rounded-lg">
                <ul className="py-1">
                  {menuItems[key].map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <span className="hover:bg-white/20 px-2 rounded">
          <FaBatteryFull />
        </span>
        <span className="hover:bg-white/20 px-2 rounded">
          <FaWifi />
        </span>
        <span className="hover:bg-white/20 px-2 rounded">
          <FaSearch />
        </span>
        <span className="hover:bg-white/20 px-2 rounded">
          <FaBell />
        </span>
        <span className="hover:bg-white/20 px-2 rounded">{currentTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;
