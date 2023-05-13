const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const errorHandler = require("../utils/errorHandler");

//Create a new user (Register a new user)
const register = async (req, res) => {
  try {
    const { name, email, username, phone, password1: password } = req.body;

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
      phone,
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

//Login User
const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      return res.status(400).send({
        success: false,
        message: "Incomplete information",
        data: null,
      });
    }

    const foundUser = await User.findOne({
      $or: [{ email: user }, { username: user }],
    }).select(["username", "email", "password"]);

    if (!foundUser) {
      return res.status(400).send({
        success: false,
        message: "User does not exist.",
        data: null,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send({
        success: false,
        message: "Invalid credentials",
        data: null,
      });
    }

    const token = foundUser.generateToken();

    return res.status(200).send({
      success: true,
      message: "Login Successful",
      data: { userName: foundUser.userName, email: foundUser.email, token },
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get a user with userid
const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return res.status(400).send({
        success: false,
        message: "The requested user does not exist.",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      data: foundUser,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get current logged in user
const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;

    const userId = user._id;

    const currentUser = await User.findById(userId);

    // const currentUser = await User.findOne({
    //   _id: mongoose.Types.ObjectId(userId.toString()),
    // });

    if (!currentUser) {
      return res.status(400).send({
        success: false,
        message: "The requested user does not exist",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "The requested user was found",
      data: currentUser,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).send({
        success: false,
        message: "There are no users available",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "All users fetched successfully",
      data: users,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

module.exports = { register, login, getUser, getCurrentUser, getAllUsers };
