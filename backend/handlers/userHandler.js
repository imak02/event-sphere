const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const errorHandler = require("../utils/errorHandler");
const { request } = require("express");
const multer = require("multer");
const { profileMulterStorage } = require("../utils/imageHandler");
const { multerFilter } = require("../utils/imageHandler");

//File Upload logic
const upload = multer({
  dest: "uploads/user",
  storage: profileMulterStorage,
  fileFilter: multerFilter,
  //If you want to limit file size, use this
  //   limits: {
  //     fileSize: 1024 * 1024,
  //   },
});
const uploadUserImage = upload.single("image");

const userImageMiddleware = async (req, res, next) => {
  uploadUserImage(req, res, (error) => {
    if (error) {
      return errorHandler({ message: error.message, res });
    }
    next();
  });
};

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
    }).select(["username", "email", "password", "role"]);

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
      data: {
        userName: foundUser.userName,
        email: foundUser.email,
        role: foundUser.role,
        token,
      },
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

    const currentUser = await User.findById(userId).populate("events");

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

//Update User
const updateUser = async (req, res) => {
  try {
    const userId = req.user._id;

    const { name, email, username, phone } = req.body;

    const emailAlreadyExists = await User.findOne({ email: email.trim() });
    if (emailAlreadyExists) {
      if (emailAlreadyExists._id.toString() !== userId) {
        return res.status(400).send({
          success: false,
          message: "Email is already registered.",
          data: null,
        });
      }
    }

    const userNameNotAvailable = await User.findOne({
      userName: username.trim(),
    });
    if (userNameNotAvailable) {
      if (userNameNotAvailable._id.toString() !== userId) {
        return res.status(400).send({
          success: false,
          message: "Username is already taken.",
          data: null,
        });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        name,
        username,
        email,
        phone,
        profilePic: req.file && `${req.file.path}`,
      },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).send({
        success: true,
        message: "Profile updated successfully",
        data: updatedUser,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

module.exports = {
  register,
  login,
  getUser,
  getCurrentUser,
  getAllUsers,
  updateUser,
  userImageMiddleware,
};
