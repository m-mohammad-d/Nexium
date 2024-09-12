import React, { useContext, useCallback } from "react";
import { FileContext } from "../context/FileContext";
import DraggableWindow from "./DraggableWindow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
      <div className="p-4 bg-gray-900/90 text-white h-full flex flex-col rounded-md shadow-lg">
        <div className="flex-grow h-96 overflow-hidden flex items-center justify-center bg-black/60 rounded-md mb-4">
          {activeImage ? (
            <img
              className="object-cover object-center max-h-full transition-transform duration-300 hover:scale-105 shadow-lg rounded-md"
              src={activeImage}
              alt="Active View"
            />
          ) : (
            <p className="text-center text-gray-400">No image selected</p>
          )}
        </div>
        <div className="my-8">
          <Swiper spaceBetween={15} slidesPerView={10} className="p-6">
            {files
              .filter((file) => file.type === "Image")
              .map((file) => (
                <SwiperSlide key={file.id}>
                  <img
                    onClick={() => handleImageClick(file.src || "")}
                    src={file.src || ""}
                    className="h-20 w-24 cursor-pointer rounded-lg object-cover object-center border-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-110"
                    alt={`gallery-image-${file.id}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </DraggableWindow>
  );
};

export default ImageViewer;
