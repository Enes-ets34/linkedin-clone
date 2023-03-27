const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Post = require("../models/Post");
const { sendNotification } = require("../helpers/libraries/sendNotification");
const getAllPosts = asyncErrorWrapper(async (req, res, next) => {
  const posts = await Post.find()
    .populate({ path: "comments", populate: "user" })
    .populate({
      path: "user",
      populate: "company",
    })
    .sort("-created_at");
  res.send({
    success: true,
    posts,
  });
});
const filterPosts = asyncErrorWrapper(async (req, res, next) => {
  const keywords = req.query.keywords;

  const posts = await Post.find({
    $or: [
      { title: { $regex: keywords, $options: "i" } },
      { content: { $regex: keywords, $options: "i" } },
    ],
  })
    .populate({ path: "comments", populate: "user" })
    .populate({
      path: "user",
      populate: "company",
    })
    .sort("-created_at");
  res.send({
    success: true,
    posts,
  });
});
const getSinglePost = asyncErrorWrapper(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate("user");
  res.send({
    success: true,
    post,
  });
});
const newPost = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;

  const post = await (
    await Post.create({ ...userData, user: req.user.id })
  ).populate("user");
  res.send({
    success: true,
    post,
  });
});
const deletePost = asyncErrorWrapper(async (req, res, next) => {
  await Post.findOneAndDelete({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    message: "Deleted...",
  });
});
const likePost = asyncErrorWrapper(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.likes.includes(req.user.id)) {
    return next(new CustomError("You Are Already Like This Post.", 400));
  }
  post.likes.push(req.user.id);
  await post.save();

  if (req.user.id !== post.user._id.toString()) {
    await sendNotification({
      message: `gönderinizi beğendi.`,
      sender: req.user.id,
      receiver: post.user._id,
    });
  }
  return res.status(200).json({
    success: true,
    post,
  });
});
const undoLikePost = asyncErrorWrapper(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user.id)) {
    return next(new CustomError("You Can Not Undo Like For This Post.", 400));
  }
  post.likes.pull(req.user.id);
  await post.save();
  return res.status(200).json({
    success: true,
    post,
  });
});
const updatePost = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      ...userData,
      updated_at: Date.now(),
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({
    success: true,
    post,
  });
});
module.exports = {
  getAllPosts,
  newPost,
  getSinglePost,
  deletePost,
  updatePost,
  likePost,
  undoLikePost,
  filterPosts,
};
