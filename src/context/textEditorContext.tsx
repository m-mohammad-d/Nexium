import React, { createContext, useState, useContext, ReactNode } from "react";

interface TextEditorContextType {
  activeFileId: string | null;
  setActiveFileId: React.Dispatch<React.SetStateAction<string | null>>;
}

const TextEditorContext = createContext<TextEditorContextType | undefined>(
  undefined
);

export const useTextEditorContext = () => {
  const context = useContext(TextEditorContext);
  if (!context) {
    throw new Error(
      "useTextEditorContext must be used within a TextEditorProvider"
    );
  }
  return context;
};

export const TextEditorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeFileId, setActiveFileId] = useState<string | null>(null);

  return (
    <TextEditorContext.Provider value={{ activeFileId, setActiveFileId }}>
      {children}
    </TextEditorContext.Provider>
  );
};
