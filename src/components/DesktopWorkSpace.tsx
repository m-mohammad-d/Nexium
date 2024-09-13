import React, { useRef, useEffect, useContext, useState } from "react";
import { BsPlusCircleDotted, BsTrash } from "react-icons/bs";
import { WindowContext } from "../context/WindowContext";
import { FileContext } from "../context/FileContext";
import { useTextEditorContext } from "../context/textEditorContext";
import AddMenuOptions from "./AddMenuOptions";

interface DesktopWorkSpaceProps {
  onSetFormType: (formType: string) => void;
}

const DesktopWorkSpace: React.FC<DesktopWorkSpaceProps> = ({
  onSetFormType,
}) => {
  const { toggleWindow } = useContext(WindowContext)!;
  const { files, setActiveImage, removeFile } = useContext(FileContext)!;
  const { setActiveFileId } = useTextEditorContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAddClick = () => setIsMenuOpen((prev) => !prev);

  const handleMenuOptionClick = (option: string) => {
    onSetFormType(option);
    toggleWindow("addForm");
    setIsMenuOpen(false);
  };

  const handleImageView = (image: string) => {
    setActiveImage(image);
    toggleWindow("imageViewer");
    setIsMenuOpen(false);
  };

  const handleTextFileClick = (fileName: string) => {
    setActiveFileId(fileName);
    toggleWindow("textEditor");
  };

  const handleDeleteClick = (id: number) => {
    removeFile(id); // Call removeFile function
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <ul className="flex flex-wrap px-3">
        <li className="p-3">
          <button
            onClick={handleAddClick}
            className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100"
          >
            <BsPlusCircleDotted className="w-12 h-12 text-white" />
            <span className="text-xs mt-1.5 text-white">Add</span>
          </button>
        </li>
        {files.map((file) => (
          <li key={file.id} className="p-3 relative">
            {file.type === "Image" && file.src ? (
              <button
                onClick={() => handleImageView(file.src || "")}
                className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100"
              >
                <img
                  src={file.src}
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-xs mt-1.5 text-white">{file.name}</span>
              </button>
            ) : file.type === "Folder" ? (
              <button className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100">
                <img
                  src="/icons/Folder.png"
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-xs mt-1.5 text-white">{file.name}</span>
              </button>
            ) : file.type === "Text" ? (
              <button
                onClick={() => handleTextFileClick(file.name)}
                className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100"
              >
                <img
                  src="/icons/note.png"
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-xs mt-1.5 text-white">{file.name}</span>
              </button>
            ) : null}
            <button
              onClick={() => handleDeleteClick(file.id)}
              className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-700"
            >
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>
      {isMenuOpen && (
        <div ref={menuRef}>
          <AddMenuOptions onMenuOptionClick={handleMenuOptionClick} />
        </div>
      )}
    </div>
  );
};

export default DesktopWorkSpace;
