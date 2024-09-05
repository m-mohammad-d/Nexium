// TaskBar.tsx
import React from "react";

const TaskBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white h-12 px-4 fixed bottom-0 left-0 right-0">
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700">Finder</button>
        <button className="px-4 py-2 hover:bg-gray-700">Safari</button>
        <button className="px-4 py-2 hover:bg-gray-700">Mail</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700">Spotlight</button>
        <button className="px-4 py-2 hover:bg-gray-700">Launchpad</button>
      </div>
    </div>
  );
};

export default TaskBar;
