import React from "react";
import DraggableWindow from "./DraggableWindow";

const GoogleMaps: React.FC = () => {
  return (
    <DraggableWindow title="googleMaps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44832922.905049495!2d-9.13772053917043!3d46.69814859164101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2snl!4v1725887892296!5m2!1sfa!2snl"
        title="Google maps"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
};

export default GoogleMaps;
