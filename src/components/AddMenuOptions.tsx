// components/AddMenuOptions.tsx
import React from "react";

interface AddMenuOptionsProps {
  onMenuOptionClick: (option: string) => void;
}

const AddMenuOptions: React.FC<AddMenuOptionsProps> = ({
  onMenuOptionClick,
}) => {
  return (
    <div className="absolute top-12 left-3 bg-white border border-gray-300 rounded-lg shadow-lg w-48 overflow-hidden transition-transform transform scale-100 origin-top-left">
      <ul className="text-gray-800">
        <li className="border-b border-gray-300 last:border-0">
          <button
            onClick={() => onMenuOptionClick("Folder")}
            className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
          >
            Add Folder
          </button>
        </li>
        <li className="border-b border-gray-300 last:border-0">
          <button
            onClick={() => onMenuOptionClick("Image")}
            className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
          >
            Add Image
          </button>
        </li>
        <li className="border-b border-gray-300 last:border-0">
          <button
            onClick={() => onMenuOptionClick("Text")}
            className="text-sm p-2 hover:bg-gray-200 block text-center w-full"
          >
            Add Text
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AddMenuOptions;
