import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import DraggableWindow from "./DraggableWindow";
import { App } from "../types/AppTypes";
import { updateAppList, saveAppsToLocalStorage } from "../utils/Apputils";

const defaultApps = [
  {
    id: 1,
    name: "Telegram",
    img: "telegram",
    isInstalled: false,
  },
  {
    id: 2,
    name: "YouTube",
    img: "youtube",
    isInstalled: false,
  },
  {
    id: 3,
    name: "Instagram",
    img: "instagram",
    isInstalled: false,
  },
  {
    id: 4,
    name: "Digikala",
    img: "dijikala",
    isInstalled: false,
  },
  {
    id: 5,
    name: "Balad",
    img: "balad",
    isInstalled: false,
  },
  {
    id: 6,
    name: "Snapp",
    img: "snap",
    isInstalled: false,
  },
  {
    id: 7,
    name: "TikTok",
    img: "tikTok",
    isInstalled: false,
  },
  {
    id: 8,
    name: "X (Twitter)",
    img: "x",
    isInstalled: false,
  },
  {
    id: 9,
    name: "Wikipedia",
    img: "wikipedia",
    isInstalled: false,
  },
  {
    id: 10,
    name: "Reddit",
    img: "reddit",
    isInstalled: false,
  },
  {
    id: 11,
    name: "Amazon",
    img: "amazon",
    isInstalled: false,
  },
  {
    id: 12,
    name: "Netflix",
    img: "netflix",
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
  };

  const handleUninstall = (appId: number) => {
    const updatedApps = updateAppList(apps, appId, false);
    setApps(updatedApps);
    saveAppsToLocalStorage(updatedApps);
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
