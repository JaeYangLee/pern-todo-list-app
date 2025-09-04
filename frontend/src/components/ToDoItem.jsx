import React from "react";

function ToDoItem() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-32">
        <p>Example Task</p>
        <section>
          <button>Edit</button>
          <button>Delete</button>
        </section>
      </div>
    </>
  );
}

export default ToDoItem;
