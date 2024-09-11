import React, { useContext, useCallback } from "react";
import { FileContext } from "../context/FileContext";
import DraggableWindow from "./DraggableWindow";

const ImageViewer: React.FC = () => {
  const { files, activeImage, setActiveImage } = useContext(FileContext)!;

  // Memoizing handleImageClick to avoid unnecessary re-renders
  const handleImageClick = useCallback(
    (src: string) => {
      if (src) setActiveImage(src);
    },
    [setActiveImage]
  );

  return (
    <DraggableWindow title="imageViewer">
      <div className="p-4 bg-gray-900/90 text-white h-full flex flex-col">
        <div className="flex-grow overflow-hidden flex items-center justify-center">
          {activeImage ? (
            <img
              className="w-96 h-96 object-cover object-center shadow-lg" // Fixed width and height for the active image
              src={activeImage}
              alt="Active View"
            />
          ) : (
            <p>No image selected</p>
          )}
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2 overflow-auto">
          {files
            .filter((file) => file.type === "Image")
            .map((file) => (
              <div key={file.id} className="relative">
                <img
                  onClick={() => handleImageClick(file.src || "")}
                  src={file.src || ""}
                  className="h-20 w-24 max-w-full cursor-pointer rounded-lg object-cover object-center border-2 border-transparent hover:border-blue-500 transition duration-300"
                  alt={`gallery-image-${file.id}`}
                />
              </div>
            ))}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default ImageViewer;
