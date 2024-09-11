// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WindowProvider } from "./context/WindowContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>
);
