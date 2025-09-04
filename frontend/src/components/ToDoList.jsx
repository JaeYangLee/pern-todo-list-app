import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-full p-2 bg-gray-200 border-transparent rounded-2xl">
        <ul>
          <li>
            <ToDoItem />
          </li>
          <li>
            <ToDoItem />
          </li>
          <li>
            <ToDoItem />
          </li>
          <li>
            <ToDoItem />
          </li>
          <li>
            <ToDoItem />
          </li>
          <li>
            <ToDoItem />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
