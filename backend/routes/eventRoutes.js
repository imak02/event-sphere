const express = require("express");
const {
  getAllEvents,
  eventImageMiddleware,
  addEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} = require("../handlers/eventHandler");
const { checkAuth } = require("../middlewares/checkAuth");
const router = express.Router();

//Add an event
router.post("/add", checkAuth, eventImageMiddleware, addEvent);

//Get all events
router.get("/all", getAllEvents);

//Get specific event
router.get("/:eventId", getEvent);

//Edit event
router.put("/:eventId", checkAuth, eventImageMiddleware, updateEvent);

//Delete event
router.delete("/:eventId", deleteEvent);

module.exports = router;
