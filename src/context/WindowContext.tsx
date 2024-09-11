// context/WindowContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface ContextProps {
  windows: { [key: string]: boolean };
  toggleWindow: (windowName: string) => void;
  contextMenu: { visible: boolean; x: number; y: number };
  setContextMenu: (contextMenu: {
    visible: boolean;
    x: number;
    y: number;
  }) => void;
}

const defaultContextValue: ContextProps = {
  windows: {},
  toggleWindow: () => {},
  contextMenu: { visible: false, x: 0, y: 0 },
  setContextMenu: () => {},
};

export const WindowContext = createContext<ContextProps>(defaultContextValue);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    addForm: false,
    settings: false,
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

  return (
    <WindowContext.Provider
      value={{
        windows,
        toggleWindow,
        contextMenu,
        setContextMenu,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
