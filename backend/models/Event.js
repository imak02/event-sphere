const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  details: { type: String },
  image: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  category: {
    type: String,
    enum: ["business", "sports", "technology", "education", "entertainment"],
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  organizer: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
