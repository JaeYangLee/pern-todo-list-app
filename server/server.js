//Basic Server file for PERN Stack
const express = require("express");
const cors = require("cors");
//PostGreSQL pool for database
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(500, () => {
  console.log("Server running on http://localhost:500");
});

//Connect to PostGreSQL database
const pool = new Pool({
  user: "jianlee",
  host: "localhost",
  database: "pern_todo",
  password: "",
  port: 5432,
});

modules.export = pool;
