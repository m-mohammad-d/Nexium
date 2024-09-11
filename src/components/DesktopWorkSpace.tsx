import React, { useState, useEffect, useRef, useContext } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { WindowContext } from "../context/WindowContext";
import AddMenuOptions from "./AddMenuOptions";

interface DesktopWorkSpaceProps {
  onSetFormType: (formType: string) => void;
}

interface FileItem {
  id: number;
  name: string;
  type: string;
  src?: string; // URL for image files
}

const DesktopWorkSpace: React.FC<DesktopWorkSpaceProps> = ({
  onSetFormType,
}) => {
  const { toggleWindow } = useContext(WindowContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAddClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionClick = (option: string) => {
    onSetFormType(option);
    toggleWindow("addForm");
    setIsMenuOpen(false); // Close the menu after an option is clicked
  };

  const handleClickOutside: EventListener = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Read files from localStorage
    const storedFiles: FileItem[] = JSON.parse(
      localStorage.getItem("files") || "[]"
    );
    setFiles(storedFiles);

    // Add event listener for click outside
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
          <li key={file.id} className="p-3">
            <button className="flex flex-col items-center transition-opacity opacity-80 hover:opacity-100">
              {file.type === "Image" && file.src ? (
                <img
                  src={file.src}
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              ) : file.type === "Folder" ? (
                <img src="public/icons/folder.png" alt="folder" />
              ) : file.type === "Text" ? (
                <img
                  src="public/icons/note.png"
                  alt="text"
                  className="w-16 h-16 object-cover rounded-md"
                />
              ) : null}
              <span className="text-xs mt-1.5 text-white">{file.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {isMenuOpen && (
        <div ref={menuRef}>
          <AddMenuOptions onMenuOptionClick={handleMenuOptionClick} />
        </div>
      )}
      {/* Render the form based on the selected option */}
    </div>
  );
};

export default DesktopWorkSpace;
