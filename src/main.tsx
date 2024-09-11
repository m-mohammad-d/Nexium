import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FileProvider } from "./context/FileContext"; 
import { WindowProvider } from "./context/WindowContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowProvider>
      <FileProvider>
        <App />
      </FileProvider>
    </WindowProvider>
  </React.StrictMode>
);
