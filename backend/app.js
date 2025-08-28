const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", todoRoutes);

//Health check route or the Home page
app.use("/", (req, res) => {
  res.send("To do API is running!");
});

module.exports = app;
