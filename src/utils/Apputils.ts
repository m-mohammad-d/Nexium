import { App } from "../types/AppTypes";

export const updateAppList = (
  apps: App[],
  id: number,
  status: boolean
): App[] => {
  return apps.map((app) =>
    app.id === id ? { ...app, isInstalled: status } : app
  );
};

export const saveAppsToLocalStorage = (apps: App[]): void => {
  localStorage.setItem("apps", JSON.stringify(apps));
};
