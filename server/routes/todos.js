const express = require("express");
const router = express.Router();
const pool = require("../database.js"); //assuming database.js exports a pool

// Creating POST Method (creates new todo)
router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body; // get description from request body

    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]); //Return the inserted row
  } catch (err) {
    console.error("Error saving todo!!!", err);
    res.status(500).send("Server Error!");
  }
});

// Creating GET Method (Displays or Read the todos)
router.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows); //return array of todos
  } catch (err) {
    console.error("Error fetching data!!!", err.message);
    res.status(500).send("Server Error!");
  }
});

// Creating PUT method (Updates or Edits todo)
router.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; //get id from URL
    const { description } = req.body; // get new description from body

    const updatedTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );

    res.json(updatedTodo.rows[0]);
  } catch (err) {
    console.error("Error fetching data!!!", err.message);
    res.status(500).send("Server Error!");
  }
});

// Creating DELETE method (removes or deletes todo)
router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todos WHERE todo_id = $1",
      [id]
    );

    if (deletedTodo.rowCount === 0) {
      return res.status(404).json({ message: "Todo not found!" });
    }

    res.status(200).json({ message: "Task Successfully Deleted!" });
  } catch (err) {
    console.error("Error Deleting Todo...", err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
