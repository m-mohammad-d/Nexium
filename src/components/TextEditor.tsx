import React, { useRef, useEffect } from "react";
import DraggableWindow from "./DraggableWindow";
import { useTextEditorContext } from "../context/textEditorContext";

const TextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { activeFileId } = useTextEditorContext();

  // Load saved content for the active file
  useEffect(() => {
    if (activeFileId && editorRef.current) {
      const files = JSON.parse(localStorage.getItem("files") || "[]");
      const file = files.find((f: { name: string }) => f.name === activeFileId);
      if (file) {
        editorRef.current.innerHTML = file.text || ""; // Load the content into the editor
      }
    }
  }, [activeFileId]);

  // Save content to localStorage
  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      const files = JSON.parse(localStorage.getItem("files") || "[]");
      const fileIndex = files.findIndex(
        (f: { name: string }) => f.name === activeFileId
      );
      if (fileIndex !== -1) {
        files[fileIndex].text = content; // Update the text content of the file
        localStorage.setItem("files", JSON.stringify(files)); // Save to local storage
        alert("Content saved!");
      }
    }
  };

  return (
    <DraggableWindow title="textEditor">
      <div className="h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-center text-3xl font-bold py-6">
          Advanced Text Editor
        </h1>
        <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div
            ref={editorRef}
            contentEditable
            className="min-h-[300px] p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
          ></div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </DraggableWindow>
  );
};

export default TextEditor;
