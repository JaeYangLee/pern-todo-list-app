const pool = require("../db");

const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result.rows;
};

const addTodo = async (description) => {
  const result = await pool.query(
    "INSERT INTO todos (description) VALUES ($1) RETURNING *",
    [description]
  );
  return result.rows[0];
};

const updateTodo = async (id, description) => {
  const result = await pool.query(
    "UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, id]
  );
  return result.rows[0];
};

const deleteTodo = async (id) => {
  const result = await pool.query(
    "DELETE FROM todos WHERE todo_id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
