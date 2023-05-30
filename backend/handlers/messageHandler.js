const Event = require("../models/Event");
const errorHandler = require("../utils/errorHandler");
const Message = require("../models/Message");
const User = require("../models/User");

//Add a new message
const addMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).send({
        success: false,
        message: "Insufficient details",
        data: null,
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      phone,
      message,
    });

    if (newMessage) {
      return res.status(200).send({
        success: true,
        message: "Message sent successfully",
        data: newMessage,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get specific message
const getMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const foundMessage = await Message.findById(messageId);

    if (!foundMessage) {
      return res.status(400).send({
        success: false,
        message: "No message was found for given id",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "Message fetched successfully",
      data: foundMessage,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get All Messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (!messages) {
      return res.status(400).send({
        success: false,
        message: "There are no messages available.",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "All messages fetched successfully",
      data: messages,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Update message
const updateMessage = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (user.role !== "ADMIN") {
      return res.status(400).send({
        success: false,
        message: "Unauthorized request",
        data: null,
      });
    }

    const messageId = req.params.messageId;
    const { name, email, phone, message } = req.body;

    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      {
        name,
        email,
        phone,
        message,
      },
      { new: true }
    );

    if (updatedMessage) {
      return res.status(200).send({
        success: true,
        message: "Message updated successfully",
        data: updatedMessage,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Delete message
const deleteMessage = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (user.role !== "ADMIN") {
      return res.status(400).send({
        success: false,
        message: "Unauthorized request",
        data: null,
      });
    }
    const messageId = req.params.messageId;

    const deleted = await Message.findByIdAndDelete(messageId);

    if (deleted) {
      return res.status(200).send({
        success: true,
        message: "Message deleted successfully",
        data: null,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

module.exports = {
  addMessage,
  getMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
};
