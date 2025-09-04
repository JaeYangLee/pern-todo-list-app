import React from "react";

function ToDoForm() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-4 font-sans bg-gray-500 border-transparent rounded-2xl">
        <header className="p-2">
          <h1>PERN To Do List</h1>
        </header>
        <section className="flex flex-col items-center justify-center gap-2">
          <div>
            <input
              type="text"
              placeholder="Enter your task..."
              className="p-2 border-black border-1 rounded-2xl"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-4 p-2">
            <button className="px-2 border-black border-1 rounded-2xl">
              Add
            </button>
            <button className="px-2 border-black border-1 rounded-2xl">
              Clear
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ToDoForm;
