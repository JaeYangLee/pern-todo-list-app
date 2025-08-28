const todoModel = require("../models/todoModels");

//Controller Methods

//Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.getAllTodos();
    res.json(todos);
  } catch (err) {
    console.error("Error Fetching Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

//Add a new todo
const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await todoModel.addTodo(description);
    res.json(newTodo);
  } catch (err) {
    console.error("Error Adding Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

//Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await todoModel.updateTodo(id, description);

    if (!updateTodo) {
      return res.status(400).json({ message: "Todo not found..." });
    }

    res.json(updateTodo);
  } catch (err) {
    console.error("Error Updating Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

//Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoModel.deleteTodo(id);

    if (!deletedTodo) {
      return res.status(400).json({ message: "Todo not found..." });
    }
  } catch (err) {
    console.error("Error Deleting Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
