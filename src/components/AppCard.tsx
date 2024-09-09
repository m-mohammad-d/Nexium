import React from "react";
import { App } from "../types/AppTypes";
import { FaTrashAlt, FaDownload } from "react-icons/fa";

interface AppCardProps {
  app: App;
  onInstall: (appId: number) => void;
  onUninstall: (appId: number) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onInstall, onUninstall }) => (
  <li className="flex justify-between items-center p-3 m-2 rounded-md bg-gray-800">
    <div className="flex items-center">
      <img
        src={`public/appicon/${app.img}.png`}
        alt={app.name}
        className="w-12 h-12 rounded-md border-2 border-gray-600 object-cover"
      />
      <span className="text-sm text-white ml-3">{app.name}</span>
    </div>
    <ul className="flex">
      {!app.isInstalled ? (
        <li className="px-1">
          <button
            onClick={() => onInstall(app.id)}
            className="flex justify-center items-center py-1 px-3 rounded-md transition-colors bg-green-500 hover:bg-green-600 text-white"
          >
            <FaDownload className="mr-1" /> Install
          </button>
        </li>
      ) : (
        <li className="px-1">
          <button
            onClick={() => onUninstall(app.id)}
            className="flex justify-center items-center py-1 px-3 rounded-md transition-colors bg-red-500 hover:bg-red-600 text-white"
          >
            <FaTrashAlt className="mr-1" /> Uninstall
          </button>
        </li>
      )}
    </ul>
  </li>
);

export default AppCard;
