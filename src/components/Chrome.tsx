import React from "react";
import DraggableWindow from "./DraggableWindow";

const Chrome: React.FC = () => {
  return (
    <DraggableWindow title="chrome">
      <iframe
        src="https://www.google.com/webhp?igu=1"
        title="Google Search"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
};

export default Chrome;
