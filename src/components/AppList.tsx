import React, { useState, useEffect, useContext } from "react";
import AppListItem from "./AppListItem";
import DraggableWindow from "./DraggableWindow";
import { App } from "../types/AppTypes";
import { saveAppsToLocalStorage, updateAppList } from "../utils/Apputils";
import { WindowContext } from "../context/WindowContext";

const defaultApp = [
  { name: "sourceCode", img: "github" },
  { name: "Contact Me", img: "telegram" },
  { name: "Wallpaper", img: "ventora" },
];

// Define the custom event type for app list updates
export interface AppListUpdatedEvent extends CustomEvent {
  detail: App[];
}

const AppList: React.FC = () => {
  const { toggleWindow } = useContext(WindowContext);

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

  const handleOpenWindow = (appName: string) => {
    toggleWindow(appName); // Pass the app name to the onOpen callback
  };

  return (
    <DraggableWindow title="appList">
      <div className="h-full w-full text-gray-400 overflow-y-auto">
        <ul className="flex flex-wrap p-3">
          <AppListItem
            app={defaultApp[0]}
            onClick={() => {
              window.open("https://github.com/m-mohammad-d/Nexium");
            }}
          />
          <AppListItem
            app={defaultApp[1]}
            onClick={() => {
              window.open("https://t.me/silver_shade1");
            }}
          />
          <AppListItem
            app={defaultApp[2]}
            onClick={() => {
              handleOpenWindow("Wallpaper");
            }}
          />
          {apps.map((app) => (
            <AppListItem
              key={app.id}
              app={app}
              onDelete={handleDelete}
              isSelected={app.id === selectedAppId}
              onClick={() => {
                setSelectedAppId(app.id || 0);
                handleOpenWindow(app.name); // Pass the app's name to handleOpenWindow
              }}
            />
          ))}
        </ul>
      </div>
    </DraggableWindow>
  );
};

export default AppList;
