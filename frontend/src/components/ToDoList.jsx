import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="flex flex-col items-center justify-between w-screen h-full p-2 bg-gray-200 border-transparent rounded-2xl">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.todo_id}
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
