import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FileProvider } from "./context/FileContext";
import { WindowProvider } from "./context/WindowContext";
import "./index.css";
import { WallpaperProvider } from "./context/WallpaperContext";
import { TextEditorProvider } from "./context/textEditorContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowProvider>
      <FileProvider>
        <WallpaperProvider>
          <TextEditorProvider>
            <App />
          </TextEditorProvider>
        </WallpaperProvider>
      </FileProvider>
    </WindowProvider>
  </React.StrictMode>
);
