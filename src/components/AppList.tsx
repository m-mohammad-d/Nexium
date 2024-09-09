import React, { useState, useEffect } from "react";
import AppListItem from "./AppListItem";
import DraggableWindow from "./DraggableWindow";
import { App } from "../types/AppTypes";
import { saveAppsToLocalStorage, updateAppList } from "../utils/Apputils";

// TypeScript type for the CustomEvent detail
interface AppListUpdatedEvent extends CustomEvent {
  detail: App[];
}

const AppList: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedAppId, setSelectedAppId] = useState<number | null>(null);

  useEffect(() => {
    const updateAppListFromLocalStorage = () => {
      const storedApps: App[] = JSON.parse(
        localStorage.getItem("apps") || "[]"
      );
      setApps(storedApps.filter((app) => app.isInstalled));
    };

    // Initial load
    updateAppListFromLocalStorage();

    // Event listener for custom events
    const handleAppListUpdated = (e: Event) => {
      const customEvent = e as AppListUpdatedEvent;
      setApps(customEvent.detail.filter((app) => app.isInstalled));
    };

    window.addEventListener(
      "appListUpdated",
      handleAppListUpdated as EventListener
    );

    // Cleanup event listener
    return () => {
      window.removeEventListener(
        "appListUpdated",
        handleAppListUpdated as EventListener
      );
    };
  }, []);

  const handleDelete = (id: number) => {
    const storedApps: App[] = JSON.parse(localStorage.getItem("apps") || "[]");
    const updatedApps = updateAppList(storedApps, id, false);
    saveAppsToLocalStorage(updatedApps);
    setApps(updatedApps.filter((app) => app.isInstalled));
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
