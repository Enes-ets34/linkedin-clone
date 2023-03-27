const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    default: "default.png",
  },
  read: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: new Date(Date.now()),
  },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
