const todoModel = require("../models/todoModels");

const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.getAllTodos();
    res.json(todos);
  } catch (err) {
    console.error("Error Fetching Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

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

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await todoModel.updateTodo(id, description);

    if (!updatedTodo) {
      return res.status(400).json({ message: "Todo not found..." });
    }

    res.json(updatedTodo);
  } catch (err) {
    console.error("Error Updating Todos:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoModel.deleteTodo(id);

    if (!deletedTodo) {
      return res.status(400).json({ message: "Todo not found..." });
    } else {
      return res.status(200).json({ message: "Todo deleted..." });
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
