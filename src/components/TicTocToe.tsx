import { useRef, useState, ReactElement } from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";
import DraggableWindow from "./DraggableWindow";

type Player = "x" | "o" | "";
type BoardState = Player[];

function TicTocToe(): ReactElement {
  const [data, setData] = useState<BoardState>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [count, setCount] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const toggle = (index: number): void => {
    if (lock || data[index]) return;

    const newData: BoardState = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    if (checkWin(newData)) {
      setLock(true);
      const winner = newData[index];
      if (titleRef.current) {
        titleRef.current.innerHTML = `Congratulations: ${
          winner === "x" ? "X" : "O"
        } wins!`;
      }
    }
  };

  const checkWin = (data: BoardState): boolean => {
    const winPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some((pattern) => {
      const [a, b, c] = pattern;
      return data[a] && data[a] === data[b] && data[a] === data[c];
    });
  };

  const reset = (): void => {
    setLock(false);
    setCount(0);
    setData(["", "", "", "", "", "", "", "", ""]);
    if (titleRef.current) {
      titleRef.current.innerHTML = `Tic Tac Toe game in <span class="text-cyan-400">React</span>`;
    }
  };

  return (
    <DraggableWindow title="tic toc toe">
      <div className="flex flex-col items-center p-4">
        <h1
          className="text-white text-4xl mt-12 flex items-center justify-center"
          ref={titleRef}
        >
          Tic Tac Toe game in <span className="text-cyan-400 pl-2">React</span>
        </h1>
        <div className="grid grid-cols-3 gap-2 w-96 h-96 my-8">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-32 cursor-pointer rounded-lg bg-slate-600 border-4 border-gray-800"
              onClick={() => toggle(index)}
            >
              {value === "x" && <FaTimes size={60} className="text-white" />}
              {value === "o" && (
                <FaRegCircle size={60} className="text-white" />
              )}
            </div>
          ))}
        </div>
        <button
          className="w-52 h-20 bg-slate-700 text-cyan-400 text-2xl rounded-full mt-6 mb-12"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </DraggableWindow>
  );
}

export default TicTocToe;
