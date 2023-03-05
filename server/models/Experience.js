const mongoose = require("mongoose");

const { Schema } = mongoose;

const experienceSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    trim: true,
  },
  media: {
    type: String,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
