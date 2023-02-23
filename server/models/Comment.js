const mongoose = require("mongoose");
const Post = require("./Post");
const { Schema } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
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
});
commentSchema.pre("validate", async function (next) {
  if (!this.isModified('user')) return next();
  try {
    const post = await Post.findById(this.post);
    post.comments.push(this._id);
    await post.save();
    next();
  } catch (error) {
    return next(error);
  }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
