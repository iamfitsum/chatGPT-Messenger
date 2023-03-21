import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* TODO: New Chat */}
          <NewChat />

          <div>{/* TODO: Model Selection */}</div>

          {/* TODO: Map Through The Chat Rows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
