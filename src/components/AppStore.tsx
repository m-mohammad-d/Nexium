import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import DraggableWindow from "./DraggableWindow";
import { App } from "../types/AppTypes";
import { updateAppList, saveAppsToLocalStorage } from "../utils/Apputils";

const defaultApps = [
  {
    id: 1,
    name: "Digikala",
    img: "dijikala",
    isInstalled: false,
  },
  {
    id: 2,
    name: "Balad",
    img: "balad",
    isInstalled: false,
  },
  {
    id: 3,
    name: "Snapp",
    img: "snap",
    isInstalled: false,
  },
  {
    id: 4,
    name: "Wikipedia",
    img: "wikipedia",
    isInstalled: false,
  },
  {
    id: 5,
    name: "googleMaps",
    img: "Maps",
    isInstalled: false,
  },
  {
    id: 6,
    name: "ticTocToe",
    img: "TicTocToe",
    isInstalled: false,
  },

];
const AppStore: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    const storedApps = localStorage.getItem("apps");
    if (storedApps) {
      setApps(JSON.parse(storedApps));
    } else {
      setApps(defaultApps);
      saveAppsToLocalStorage(defaultApps);
    }
  }, []);

  const handleInstall = (appId: number) => {
    const updatedApps = updateAppList(apps, appId, true);
    setApps(updatedApps);
    saveAppsToLocalStorage(updatedApps);

    window.dispatchEvent(
      new CustomEvent("appListUpdated", { detail: updatedApps })
    );
  };

  const handleUninstall = (appId: number) => {
    const updatedApps = updateAppList(apps, appId, false);
    setApps(updatedApps);
    saveAppsToLocalStorage(updatedApps);
    window.dispatchEvent(
      new CustomEvent("appListUpdated", { detail: updatedApps })
    );
  };

  return (
    <DraggableWindow title="App Store">
      <div className="p-4 bg-gray-900 min-h-screen">
        <header className="bg-gray-800 text-white p-4 rounded-t-lg">
          <h1 className="text-3xl font-bold">App Store</h1>
        </header>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onInstall={handleInstall}
              onUninstall={handleUninstall}
            />
          ))}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default AppStore;
