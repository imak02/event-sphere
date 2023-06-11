const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUser,
  getCurrentUser,
  getAllUsers,
  updateUser,
  userImageMiddleware,
} = require("../handlers/userHandler");
const { checkAuth } = require("../middlewares/checkAuth");

//User Registration Route
router.post("/register", register);

//User Login Route
router.post("/login", login);

//Get current User
router.get("/current-user", checkAuth, getCurrentUser);

//Get all users
router.get("/all", getAllUsers);

//Get specific User
router.get("/:userId", getUser);

//Update User
router.put("/update", checkAuth, userImageMiddleware, updateUser);

module.exports = router;
