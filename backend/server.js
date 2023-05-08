require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./database/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("The server for EventSphere is up and running...");
});

//User Routes
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
