import React from "react";
import { useWallpaper } from "../context/WallpaperContext";
import DraggableWindow from "./DraggableWindow";

const images = [
    "bg-1", 
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
    "bg-9",
    "bg-10",
];

const Wallpaper: React.FC = () => {
  const { setBackground } = useWallpaper();

  const changeBackground = (image: string) => {
    setBackground(image);
  };

  return (
    <DraggableWindow title="Wallpaper">
      <div className="p-4 h-full">
        <h2 className="text-lg font-semibold mb-4">Select Background</h2>
        <div className="grid grid-cols-6 gap-6">
          {images.map((image) => (
            <div
              key={image}
              className="cursor-pointer"
              onClick={() => changeBackground(image)}
            >
              <img
                src={`public/background/${image}.jpg`} // Replace with the actual path to your images
                alt={image}
                className="h-24 w-24 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default Wallpaper;
