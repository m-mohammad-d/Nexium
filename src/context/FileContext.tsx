import React, { createContext, useState, useEffect, ReactNode } from "react";

interface FileItem {
  id: number;
  name: string;
  type: string;
  src?: string; // URL for image files
}

interface FileContextType {
  files: FileItem[];
  activeImage: string | null;
  setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  setActiveImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FileContext = createContext<FileContextType | undefined>(
  undefined
);

interface FileProviderProps {
  children: ReactNode;
}

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("files", JSON.stringify(files));
    }
  }, [files]);

  return (
    <FileContext.Provider
      value={{ files, activeImage, setFiles, setActiveImage }}
    >
      {children}
    </FileContext.Provider>
  );
};
