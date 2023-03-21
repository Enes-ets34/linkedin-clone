const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  created_at: {
    type: String,
    default: new Date(Date.now()),
  },
  applicants: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
