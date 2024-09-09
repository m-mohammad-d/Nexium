import React, { useState, useEffect } from "react";
import AppListItem from "./AppListItem";
import DraggableWindow from "./DraggableWindow";

interface App {
  id: string;
  name: string;
  img: string;
  isInstalled: boolean;
}

const AppList: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  useEffect(() => {
    const storedApps: App[] = JSON.parse(localStorage.getItem("apps") || "[]");
    setApps(storedApps.filter((app) => app.isInstalled));
  }, []);

  const handleDelete = (id: string) => {
    const updatedApps = apps.map((app) =>
      app.id === id ? { ...app, isInstalled: false } : app
    );
    setApps(updatedApps);
    localStorage.setItem("apps", JSON.stringify(updatedApps));
    setSelectedAppId(null); // Hide the delete button after deletion
  };

  return (
    <DraggableWindow title="App List">
      <div className="h-full w-full text-gray-400 overflow-y-auto bg-gray-700/90">
        <ul className="flex flex-wrap p-3">
          {apps.map((app) => (
            <AppListItem
              key={app.id}
              app={app}
              onDelete={handleDelete}
              isSelected={app.id === selectedAppId}
              onClick={() => setSelectedAppId(app.id)}
            />
          ))}
        </ul>
      </div>
    </DraggableWindow>
  );
};

export default AppList;
