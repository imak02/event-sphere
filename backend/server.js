require("dotenv").config();
const express = require("express");
require("./database.js");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Event Sphere API listening on port ${port}`);
});
