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
  removeFile: (id: number) => void;
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
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  const removeFile = (id: number) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.id !== id);
      localStorage.setItem("files", JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  };

  return (
    <FileContext.Provider
      value={{ files, activeImage, setFiles, setActiveImage, removeFile }}
    >
      {children}
    </FileContext.Provider>
  );
};
