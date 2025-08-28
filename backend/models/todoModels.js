const pool = require("../db");

//Model methods

//Get all todos
const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result.rows; //return arrays of todos
};

//Add a todo
const addTodo = async (description) => {
  const result = await pool.query(
    "INSERT INTO todos (description) VALUES ($1) RETURNING *",
    [description]
  );
  return result.rows[0];
};

//Update a todo
const updateTodo = async (id, description) => {
  const result = await pool.query(
    "UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, id]
  );
  return results.rows[0]; // return updated todo
};

//Delete a todo
const deleteTodo = async (id) => {
  const result = await pool.query(
    "DELETE FROM todos WHERE todo_id = $1 RETURNING *"
  );
  return result.rows[0]; //return deleted todo
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
