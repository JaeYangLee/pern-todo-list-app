import React, { useState } from "react";

function ToDoForm({ onAdd }) {
  const [description, setDescription] = useState("");

  // Add todo
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
      <div className="flex flex-col items-center justify-center w-full px-4 font-sans bg-gray-500 border-transparent rounded-2xl">
        <header className="p-2">
          <h1>PERN To Do List</h1>
        </header>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your task..."
              className="p-2 bg-white border-black border-1 rounded-2xl"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-4 p-2">
            <button
              type="submit"
              className="px-2 border-black border-1 rounded-2xl"
            >
              Add
            </button>
            <button
              onClick={handleResetInput}
              className="px-2 border-black border-1 rounded-2xl"
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
