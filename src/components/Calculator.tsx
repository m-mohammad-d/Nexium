import React, { useState } from "react";
import DraggableWindow from "./DraggableWindow";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <DraggableWindow title="Calculator">
      <div className="flex-1 bg-white flex items-center justify-end text-2xl pr-4">
        {display || "0"}
      </div>
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "C",
          "0",
          "=",
          "+",
        ].map((button) => (
          <button
            key={button}
            className="bg-white p-4 rounded shadow text-xl hover:bg-gray-200"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </DraggableWindow>
  );
};

export default Calculator;
