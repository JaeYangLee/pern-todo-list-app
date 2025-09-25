import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="list-disc flex flex-col items-center justify-between py-2 bg-[#ffedd6] border-transparent "></ul>
      {todos.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="flex flex-col items-center justify-center opacity-50">
            No tasks yet. <span>Add one to get started!</span>
          </p>
        </div>
      ) : (
        todos.map((todos) => (
          <ToDoItem
            key={todos.todo_id}
            todos={todos}
            onUpdate={onUpdate}
            onDelete={onDelete}
            className="z-50"
          />
        ))
      )}
    </>
  );
}

export default ToDoList;
