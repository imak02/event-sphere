const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const errorHandler = require("../utils/errorHandler");

//Create a new user (Register a new user)
const register = async (req, res) => {
  try {
    const { name, email, username, phone, password } = req.body;

    if (!name || !email || !username || !phone || !password) {
      return res.status(400).send({
        success: false,
        message: "Incomplete registration data",
        data: null,
      });
    }

    const emailAlreadyExists = await User.exists({ email: email.trim() });
    if (emailAlreadyExists) {
      return res.status(400).send({
        success: false,
        message: "Email is already registered.",
        data: null,
      });
    }

    const usernameNotAvailable = await User.exists({
      username: username.trim(),
    });
    if (usernameNotAvailable) {
      return res.status(400).send({
        success: false,
        message: "Username is already taken.",
        data: null,
      });
    }

    const newUser = await User.create({
      name,
      username,
      email,
      password,
    });

    if (newUser) {
      return res.status(200).send({
        success: true,
        message: "User registered successfully. ",
        data: {
          name: newUser.name,
          username: newUser.username,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

module.exports = { register };
