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
      <li className="flex flex-row justify-between w-full p-2 py-4 text-sm border-black border-b-1 lg:text-lg ">
        <section className="flex gap-2 items-center justify-center">
          <input
            type="checkbox"
            className="peer appearance-none w-4 h-4 border-2 rounded checked:bg-[#82ddad]"
          />
          <span className="truncate w-[50vw] peer-checked:line-through">
            {todos.description}
          </span>
        </section>
        <section className="flex gap-2">
          <button
            onClick={handleEdit}
            className="px-2 border-black border-1 bg-[#99b7dd] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#7a92b1]"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todos.todo_id)}
            className="px-2 border-black border-1 bg-[#E97A54] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#ba6243]"
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}

export default ToDoItem;
