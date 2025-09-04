const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/todos", todoRoutes);

module.exports = app;
