import { useEffect, useState } from "react";
import axios from "axios";
import ToDoFooter from "./components/ToDoFooter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  //fetch todos when component loads
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todo:", err.message);
    }
  };

  // Add a todo
  const addTodo = async (description) => {
    try {
      const res = await axios.post("http://localhost:5000/todos", {
        description,
      });
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error("Error adding todo:", err.message);
    }
  };

  // Update a todo
  const updateTodo = async (id, description) => {
    try {
      const res = await axios.put(`http://localhost:5000/todos/${id}`, {
        description,
      });
      setTodos(todos.map((todo) => (todo.todo_id === id ? res.data : todo)));
    } catch (err) {
      console.error("Error updating todo:", err.message);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter((todos) => todos.todo_id !== id));
    } catch (err) {
      console.error("Error Deleting Todo:", err.message);
    }
  };
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#ffedd6]">
        <ToDoForm onAdd={addTodo} />
        <ToDoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </main>
      <ToDoFooter />
    </>
  );
}

export default App;
