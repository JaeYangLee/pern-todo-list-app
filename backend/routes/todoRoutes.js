const todoController = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

// Defining routes

// Get all todos
router.get("/todos", todoController.getTodos);

// Add todos
router.get("/todos", todoController.addTodo);

// Update todos
router.get("/todos/:id", todoController.updateTodo);

// Delete todos
router.get("/todos/:id", todoController.deleteTodo);

module.exports = router;
