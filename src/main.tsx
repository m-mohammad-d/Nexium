import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FileProvider } from "./context/FileContext";
import { WindowProvider } from "./context/WindowContext";
import "./index.css";
import { WallpaperProvider } from "./context/WallpaperContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowProvider>
      <FileProvider>
        <WallpaperProvider>
          <App />
        </WallpaperProvider>
      </FileProvider>
    </WindowProvider>
  </React.StrictMode>
);
