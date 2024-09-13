import React, { useContext, MouseEvent, useState } from "react";
import { useWallpaper } from "./context/WallpaperContext"; // Import the hook
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
import DesktopWorkSpace from "./components/DesktopWorkSpace";
import Dock from "./components/Dock";
import AddForm from "./components/AddForm";
import { WindowContext } from "./context/WindowContext";
import ImageViewer from "./components/ImageViewer";
import Wallpaper from "./components/Wallpaper";
import TextEditor from "./components/TextEditor";

const App: React.FC = () => {
  const [formType, setFormType] = useState<string | null>(null);
  const { windows, contextMenu, setContextMenu, toggleWindow } =
    useContext(WindowContext);
  const { background } = useWallpaper(); // Use the context

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleOptionClick = (option: string) => {
    if (option === "openNewWindow") {
      const currentUrl = window.location.href;
      window.open(currentUrl, "_blank");
    } else if (option === "refresh") {
      location.reload();
    } else if (option === "settings") {
      toggleWindow("settings");
    } else if (option === "Full Screen") {
      document.documentElement.requestFullscreen();
    } else if (option === "exit") {
      window.close();
    }
    console.log(option);
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  const handleClick = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/background/${background}.jpg)` }} // Use background from context
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      {/* Menu Bar */}
      <div className="w-full">
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
      {windows.imageViewer && <ImageViewer />}
      {windows.Wallpaper && <Wallpaper />}
      {windows.textEditor && <TextEditor />}
      {windows.addForm && <AddForm formType={formType || ""} />}
      {windows.appList && <AppList />}

      <DesktopWorkSpace onSetFormType={setFormType} />
      <Dock />

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
