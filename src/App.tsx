import React, { useState, MouseEvent } from "react";
import Dock from "./components/Dock";
import Calculator from "./components/Calculator";
import Chrome from "./components/Chrome";
import MenuBar from "./components/MenuBar";
import Calendar from "./components/Calendar";
import AppStore from "./components/AppStore";
import AppList from "./components/AppList";
import GoogleMaps from "./components/GoogleMaps";
import Wikipedia from "./components/Wikipedia";
import Balad from "./components/Balad";
import Snapp from "./components/Snapp";
import TicTocToe from "./components/TicTocToe";
import MemoryGame from "./components/MemoryGame";
import DigiKala from "./components/DigiKala";
import TodoList from "./components/Todolist";
import ContextMenu from "./components/ContextMenu";
import SettingsMenu from "./components/Setting";

const App: React.FC = () => {
  const [windows, setWindows] = useState<{ [key: string]: boolean }>({
    calculator: false,
    chrome: false,
    calendar: false,
    appStore: false,
    appList: false,
    googleMaps: false,
    Wikipedia: false,
    Balad: false,
    Snapp: false,
    ticTocToe: false,
    momoryGame: false,
    Digikala: false,
    todoList: false,
  });

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });

  const toggleWindow = (windowName: string) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleOptionClick = (option: string) => {
    console.log(option);
    // Handle menu option clicks
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  const handleClick = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };
  console.log(windows);

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/bg-1.jpg)` }}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
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
      {windows.googleMaps && <GoogleMaps />}
      {windows.Wikipedia && <Wikipedia />}
      {windows.Balad && <Balad />}
      {windows.Snapp && <Snapp />}
      {windows.ticTocToe && <TicTocToe />}
      {windows.momoryGame && <MemoryGame />}
      {windows.Digikala && <DigiKala />}
      {windows.todoList && <TodoList />}
      {windows.settings && <SettingsMenu />}

      {windows.appList && <AppList onOpen={toggleWindow} />}

      {/* Dock */}
      <Dock onOpen={toggleWindow} />

      {/* Context Menu */}
      <ContextMenu
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
        onClose={() => setContextMenu({ visible: false, x: 0, y: 0 })}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default App;
