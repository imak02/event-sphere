require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
require("./database/database");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("The server for EventSphere is up and running...");
});

//Uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//User Routes
app.use("/user", userRoutes);

//Event Routes
app.use("/event", eventRoutes);

//Message Routes
app.use("/message", messageRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
