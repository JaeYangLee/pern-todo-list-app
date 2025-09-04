import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="list-disc flex flex-col items-center justify-between py-2 bg-[#ffedd6] border-transparent ">
        {todos.map((todos) => (
          <ToDoItem
            key={todos.todo_id}
            todos={todos}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
