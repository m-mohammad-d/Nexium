import React from "react";
import MenuBar from "./components/MenuBar";

const App: React.FC = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/bg-1.jpg)` }}
    >
      <MenuBar />
    </div>
  );
};

export default App;
