import React, { useState } from "react";

function ToDoForm({ onAdd }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      return;
    }
    onAdd(description);
    setDescription("");
  };

  const handleResetInput = (e) => {
    setDescription("");
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start font-mono bg-[#ffedd6] border-b-1 border-black py-2 lg:p-3 xl:p-4">
        <header className="flex flex-col items-start justify-start p-2">
          <h1 className="text-2xl font-bold lg:text-5xl xl:text-5xl">
            TO DO LIST
          </h1>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-1">
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your task..."
              className="w-[60vw] text-sm px-2 py-1 bg-[#ffedd6] border-black border-1 xl:text-1xl xl:p-3"
            />
          </div>
          <div className="flex flex-row gap-4 px-2 py-2 text-sm">
            <button
              type="submit"
              className="px-2 text-sm border-black border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#ccbeab] lg:text-lg xl:text-1xl"
            >
              Add
            </button>
            <button
              onClick={handleResetInput}
              className="px-2 text-sm border-black border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#ccbeab] lg:text-lg xl:text-1xl"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ToDoForm;
