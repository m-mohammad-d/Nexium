import React from "react";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";

const App: React.FC = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/bg-1.jpg)` }}
    >
      <MenuBar />
      <Dock />
    </div>
  );
};

export default App;
