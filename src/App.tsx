import React, { useState } from "react";
import Dock from "./components/Dock";
import Calculator from "./components/Calculator";
import Chrome from "./components/Chrome";
import MenuBar from "./components/MenuBar";
import Calendar from "./components/Calendar";
import AppStore from "./components/AppStore";

const App: React.FC = () => {
  const [windows, setWindows] = useState<{ [key: string]: boolean }>({
    calculator: false,
    chrome: false,
  });

  const toggleWindow = (windowName: string) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/bg-1.jpg)` }}
    >
      {/* Menu Bar */}
      <div className="absolute top-0 left-0 w-full">
        <MenuBar />
      </div>

      {/* Conditional rendering of windows */}
      {windows.calculator && <Calculator />}
      {windows.chrome && <Chrome />}
      {windows.calendar && <Calendar />}
      {windows.appStore && <AppStore />}

      {/* Dock */}
      <Dock onOpen={toggleWindow} />
    </div>
  );
};

export default App;
