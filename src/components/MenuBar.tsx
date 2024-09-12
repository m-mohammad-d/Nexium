import React, { useState, useEffect } from "react";

const MenuBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center backdrop-blur-md bg-gray-800/40 shadow-lg text-white py-1 px-6 rounded-md">
      {/* Menu Bar */}
      <div className="flex justify-between items-center w-full">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          <span className="Nexium text-lg font-bold">Nexium</span>
        </div>

        {/* Center */}
        <div className="flex items-center justify-center flex-grow">
          <span className="font-mono text-sm px-2 py-1 bg-gray-800/60 rounded-md cursor-pointer">
            {currentTime}
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <img
            src="/public/logo.png"
            className="font-bold h-10 w-10 text-xl cursor-pointer hover:text-gray-300 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
