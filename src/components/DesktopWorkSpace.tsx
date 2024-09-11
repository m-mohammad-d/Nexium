import React, { useState, useEffect, useRef, useContext } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { WindowContext } from "../context/WindowContext";

interface DesktopWorkSpaceProps {
  onSetFormType: (formType: string) => void;
}

const DesktopWorkSpace: React.FC<DesktopWorkSpaceProps> = ({
  onSetFormType,
}) => {
  const { toggleWindow } = useContext(WindowContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAddClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionClick = (option: string) => {
    onSetFormType(option);
    toggleWindow("addForm");
    setIsMenuOpen(false); // Close the menu after an option is clicked
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
      </ul>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-12 left-3 bg-white border border-gray-300 rounded-lg shadow-lg w-48 overflow-hidden transition-transform transform scale-100 origin-top-left"
        >
          <ul className="text-gray-800">
            <li className="border-b border-gray-300 last:border-0">
              <button
                onClick={() => handleMenuOptionClick("Add Folder")}
                className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
              >
                Add Folder
              </button>
            </li>
            <li className="border-b border-gray-300 last:border-0">
              <button
                onClick={() => handleMenuOptionClick("Add Image")}
                className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
              >
                Add Image
              </button>
            </li>
            <li className="border-b border-gray-300 last:border-0">
              <button
                onClick={() => handleMenuOptionClick("Add Text")}
                className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
              >
                Add Text
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* Render the form based on the selected option */}
    </div>
  );
};

export default DesktopWorkSpace;
