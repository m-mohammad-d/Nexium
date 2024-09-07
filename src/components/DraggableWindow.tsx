import React, { useState, useRef, MouseEvent } from "react";
import MenuBarApp from "./MenuBarApp";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
}

const DraggableWindow: React.FC<WindowProps> = ({
  title,
  children,
  initialPosition = { x: 300, y: 300 },
}) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>(
    initialPosition
  );
  const windowRef = useRef<HTMLDivElement | null>(null);

  const handleFullScreenToggle = () => {
    setIsFullScreen((prev) => {
      if (prev) {
        setPosition(initialPosition);
      } else {
        setPosition({ x: 0, y: 0 });
      }
      return !prev;
    });
  };

  const handleClose = () => {
    if (windowRef.current) {
      windowRef.current.style.display = "none";
    }
  };

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (windowRef.current) {
      setIsDragging(true);
      setIsFullScreen(false)

      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = windowRef.current.getBoundingClientRect().left;
      const startTop = windowRef.current.getBoundingClientRect().top;

      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && windowRef.current) {
          setPosition({
            x: e.clientX - startX + startLeft,
            y: e.clientY - startY + startTop,
          });
        }
      };

      const handleMouseUp = () => {
        if (isDragging) {
          setIsDragging(false);
        }
        document.removeEventListener(
          "mousemove",
          handleMouseMove as unknown as EventListener
        );
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListener
      );
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-200 rounded-xl shadow-lg flex flex-col ${
        isFullScreen ? "w-full h-full" : "w-[800px] h-[600px]"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "width 0.3s ease-in-out, height 0.3s ease",
      }}
    >
      <MenuBarApp
        title={title}
        onClose={handleClose}
        onMinimize={() =>
          console.log("Minimize functionality not implemented yet.")
        }
        onMaximize={handleFullScreenToggle}
        onDragStart={handleDragStart}
      />
      {children}
    </div>
  );
};

export default DraggableWindow;
