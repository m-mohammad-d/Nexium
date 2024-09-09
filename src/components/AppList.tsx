import React, { useState, useEffect } from "react";
import AppListItem from "./AppListItem";
import DraggableWindow from "./DraggableWindow";
import { App } from "../types/AppTypes";
import { updateAppList, saveAppsToLocalStorage } from "../utils/Apputils";

const AppList: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedAppId, setSelectedAppId] = useState<number | null>(null);

  useEffect(() => {
    const storedApps: App[] = JSON.parse(localStorage.getItem("apps") || "[]");
    setApps(storedApps.filter((app) => app.isInstalled));
  }, []);

  const handleDelete = (id: number) => {
    const updatedApps = updateAppList(apps, id, false);
    setApps(updatedApps);
    saveAppsToLocalStorage(updatedApps);
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
