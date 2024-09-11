import DraggableWindow from "./DraggableWindow";

function Balad() {
  return (
    <DraggableWindow title="Balad">
      <iframe
        src="https://balad.ir/"
        title="balad"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
}

export default Balad;
