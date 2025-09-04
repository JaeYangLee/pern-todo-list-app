const todoController = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

// Defining routes

// Get all todos
router.get("/", todoController.getTodos);

// Add todos
router.post("/", todoController.addTodo);

// Update todos
router.put("/:id", todoController.updateTodo);

// Delete todos
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
