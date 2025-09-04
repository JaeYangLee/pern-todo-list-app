const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Enable CORS
app.use(cors());

//Middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/todos", todoRoutes);

module.exports = app;
