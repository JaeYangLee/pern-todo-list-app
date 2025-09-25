const todoController = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

router.get("/", todoController.getTodos);

router.post("/", todoController.addTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
