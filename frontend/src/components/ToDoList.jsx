import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="list-disc flex flex-col items-center justify-between py-2 bg-[#ffedd6] border-transparent "></ul>
      {todos.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="flex flex-col items-center justify-center select-none opacity-20 lg:text-2xl xl:text-3xl">
            You’ve got nothing here…
            <span>except free time</span>
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
