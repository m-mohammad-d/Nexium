import DraggableWindow from "./DraggableWindow";

function DigiKala() {
  return (
    <DraggableWindow title="digikala">
      <iframe
        src="https://www.digikala.com"
        title="Google Search"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
}

export default DigiKala;
