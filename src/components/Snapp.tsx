import DraggableWindow from "./DraggableWindow";

function Snapp() {
  return (
    <DraggableWindow title="snapp">
      <iframe
        src="https://app.snapp.taxi/"
        title="snapp"
        className="flex-1 w-full h-full border-none"
        style={{ minHeight: "0" }}
      />
    </DraggableWindow>
  );
}

export default Snapp;
