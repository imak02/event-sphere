const express = require("express");
const { checkAuth } = require("../middlewares/checkAuth");
const {
  addMessage,
  getAllMessages,
  getMessage,
  updateMessage,
  deleteMessage,
} = require("../handlers/messageHandler");
const router = express.Router();

//Add a message
router.post("/add", addMessage);

//Get all messages
router.get("/all", getAllMessages);

//Get specific message
router.get("/:messageId", getMessage);

//Edit message
router.put("/:messageId", checkAuth, updateMessage);

//Delete message
router.delete("/:messageId", checkAuth, deleteMessage);

module.exports = router;
