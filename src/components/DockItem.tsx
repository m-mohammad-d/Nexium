import React from "react";

interface DockItemProps {
  icon: string; // URL یا مسیر به آیکون
  label: string;
  onClick: () => void; // تابعی که هنگام کلیک بر روی آیکون اجرا می‌شود
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, onClick }) => (
  <div
    className="relative flex flex-col items-center group cursor-pointer"
    role="button"
    aria-label={label}
    onClick={onClick}
  >
    <div
      className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg shadow-lg group-hover:shadow-2xl transition-transform transform group-hover:scale-125 group-hover:translate-y-[-10%]"
      style={{
        transition:
          "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        transformOrigin: "center bottom",
      }}
    >
      <img src={icon} alt={label} className="w-12 h-12 object-contain" />
    </div>
    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm border border-gray-600 rounded-md text-xs px-2 py-1 text-white">
      {label}
    </span>
  </div>
);

export default DockItem;
