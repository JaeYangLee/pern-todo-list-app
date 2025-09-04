import React from "react";

function ToDoItem({ todos, onUpdate, onDelete }) {
  const handleEdit = () => {
    const newDescription = prompt("Edit task:", todo.description);
    if (newDescription) {
      onUpdate(todos.todo_id, newDescription);
    }
  };
  return (
    <>
      <li className="flex flex-row items-center justify-center gap-28">
        <span>{todos.description}</span>
        <section className="flex gap-2">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(todos.todo_id)}>Delete</button>
        </section>
      </li>
    </>
  );
}

export default ToDoItem;
