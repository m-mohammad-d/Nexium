// src/context/WallpaperContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WallpaperContextType {
  background: string;
  setBackground: (background: string) => void;
}

const WallpaperContext = createContext<WallpaperContextType | undefined>(
  undefined
);

export const WallpaperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [background, setBackground] = useState<string>(() => {
    const savedBackground = localStorage.getItem("backgroundImage");
    return (
      savedBackground || "bg-2"
    );
  });

  const saveBackground = (bg: string) => {
    localStorage.setItem("backgroundImage", bg);
    setBackground(bg);
  };

  return (
    <WallpaperContext.Provider
      value={{ background, setBackground: saveBackground }}
    >
      {children}
    </WallpaperContext.Provider>
  );
};

export const useWallpaper = () => {
  const context = useContext(WallpaperContext);
  if (context === undefined) {
    throw new Error("useWallpaper must be used within a WallpaperProvider");
  }
  return context;
};
