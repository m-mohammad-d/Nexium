import DraggableWindow from "./DraggableWindow";

function Wikipedia() {
  return (
    <DraggableWindow title="wikipedia">
      <iframe
        src="https://www.wikipedia.org/"
        title="wikipedia"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
}

export default Wikipedia;
