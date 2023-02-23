const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
    minlength: [10, "Please Provide A Content min lenth 6"],
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  media: {
    type: String,
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  comments:[
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    }
  ]
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
