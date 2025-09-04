import React from "react";

function ToDoItem({ todos, onUpdate, onDelete }) {
  const handleEdit = () => {
    const newDescription = prompt("Edit task:", todos.description);
    if (newDescription) {
      onUpdate(todos.todo_id, newDescription);
    }
  };
  return (
    <>
      <li className="flex flex-row justify-between w-full p-2 py-4 text-sm border-black border-b-1">
        <span>{todos.description}</span>
        <section className="flex gap-2">
          <button
            onClick={handleEdit}
            className="px-2 border-black border-1 bg-[#99b7dd]"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todos.todo_id)}
            className="px-2 border-black border-1 bg-[#E97A54]"
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}

export default ToDoItem;
