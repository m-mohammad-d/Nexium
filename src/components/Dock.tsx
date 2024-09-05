import React from 'react';
import DockItem from './DockItem';

const Dock: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center py-2 px-4">
      <div
        className="flex items-center space-x-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-full px-4 py-2"
        style={{
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
          height: '80px',
        }}
      >
        <DockItem icon="/icons/finder.webp" label="Finder" />
        <DockItem icon="/icons/setting.webp" label="Settings" />
        <DockItem icon="/icons/chrome.webp" label="Chrome" />
        <DockItem icon="/icons/calender.webp" label="Calendar" />
        <DockItem icon="/icons/app-store.webp" label="App Store" />
        <DockItem icon="/icons/gallary.webp" label="Photos" />
        <DockItem icon="/icons/trash.webp" label="Trash" />
      </div>
    </div>
  );
};

export default Dock;
