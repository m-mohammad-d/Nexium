import React, { useState, useEffect } from "react";
import DraggableWindow from "./DraggableWindow";

const generateCards = () => {
  const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
  const cards = [...numbers, ...numbers].sort(() => Math.random() - 0.5);
  return cards;
};

const MemoryGame: React.FC = () => {
  const [cards] = useState<number[]>(generateCards());
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices]);

  const handleClick = (index: number) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) return;
    setFlippedIndices((prev) => [...prev, index]);
  };

  const isFlipped = (index: number) =>
    flippedIndices.includes(index) || matchedIndices.includes(index);

  return (
    <DraggableWindow title="memory game">
        <h1 className="text-center text-3xl my-4">welcome to memory game</h1>
      <div className="grid grid-cols-4 gap-2 p-4 max-w-md mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center cursor-pointer ${
              isFlipped(index) ? "bg-gray-300" : "bg-blue-500"
            }`}
            onClick={() => handleClick(index)}
          >
            {isFlipped(index) ? card : "?"}
          </div>
        ))}
      </div>
    </DraggableWindow>
  );
};

export default MemoryGame;
