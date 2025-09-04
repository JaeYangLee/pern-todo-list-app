import React from "react";

function ToDoItem() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-28">
        <p>Example Task</p>
        <section className="flex gap-2">
          <button>Edit</button>
          <button>Delete</button>
        </section>
      </div>
    </>
  );
}

export default ToDoItem;
