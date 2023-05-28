const { response } = require("express");
const Event = require("../models/Event");
const errorHandler = require("../utils/errorHandler");
const { eventMulterStorage, multerFilter } = require("../utils/imageHandler");
const multer = require("multer");
const User = require("../models/User");

//File Upload logic
const upload = multer({
  dest: "uploads/event",
  storage: eventMulterStorage,
  fileFilter: multerFilter,
  //If you want to limit file size, use this
  //   limits: {
  //     fileSize: 1024 * 1024,
  //   },
});
const uploadEventImage = upload.single("image");

const eventImageMiddleware = async (req, res, next) => {
  uploadEventImage(req, res, (error) => {
    if (error) {
      return errorHandler({ message: error.message, res });
    }
    next();
  });
};

//Add a new event
const addEvent = async (req, res) => {
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

    const { title, details, date, location, capacity, category, organizer } =
      req.body;
    if (
      !title ||
      !details ||
      !date ||
      !location ||
      !capacity ||
      !category ||
      !organizer
    ) {
      return res.status(400).send({
        success: false,
        message: "Insufficient details",
        data: null,
      });
    }

    const newEvent = await Event.create({
      title,
      details,
      category,
      capacity,
      image: req.file ? `/${req.file.path}` : null,
      date,
      location,
      organizer,
    });

    if (newEvent) {
      return res.status(200).send({
        success: true,
        message: "Event added successfully",
        data: newEvent,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get specific event
const getEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const foundEvent = await Event.findById(eventId);

    if (!foundEvent) {
      return res.status(400).send({
        success: false,
        message: "No event was found for given id",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "Event fetched successfully",
      data: foundEvent,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Get All Events
const getAllEvents = async (req, res) => {
  try {
    const category = req.query.cat;
    if (category) {
      const events = await Event.find({ category: category });
      if (!events) {
        return res.status(400).send({
          success: false,
          message: "There are no events available.",
          data: null,
        });
      }

      return res.status(200).send({
        success: true,
        message: "All events fetched successfully",
        data: events,
      });
    }
    const events = await Event.find();
    if (!events) {
      return res.status(400).send({
        success: false,
        message: "There are no events available.",
        data: null,
      });
    }

    return res.status(200).send({
      success: true,
      message: "All events fetched successfully",
      data: events,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Update event
const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const { title, details, date, location, capacity, category } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title,
        details,
        date,
        image: req.file && `/${req.file.path}`,
        location,
        capacity,
        category,
        organizer,
      },
      { new: true }
    );

    if (updatedEvent) {
      return res.status(200).send({
        success: true,
        message: "Event updated successfully",
        data: updatedEvent,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Delete event
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const deleted = await Event.findByIdAndDelete(eventId);

    if (deleted) {
      return res.status(200).send({
        success: true,
        message: "Event deleted successfully",
        data: null,
      });
    }
  } catch (error) {
    errorHandler({ error, res });
  }
};

//Add user to event
const admitUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const eventId = req.params.eventId;

    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "Unauthorized request",
        data: null,
      });
    }

    const foundEvent = await Event.findById(eventId);

    if (foundEvent.users.includes(userId)) {
      return res.status(400).send({
        success: false,
        message: "You have already admitted to this event. Visit other events.",
        data: null,
      });
    }

    if (foundEvent.users.length >= foundEvent.capacity) {
      return res.status(400).send({
        success: false,
        message: "The event is already full. Please try other events",
        data: null,
      });
    }

    foundEvent.users.push(userId);

    const foundUser = await User.findById(userId);
    foundUser.events.push(eventId);

    foundUser.save();
    foundEvent.save();

    return res.status(200).send({
      success: true,
      message: "Admitted to the event successfully",
      data: foundEvent,
    });
  } catch (error) {
    errorHandler({ error, res });
  }
};

module.exports = {
  eventImageMiddleware,
  addEvent,
  getEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  admitUser,
};
