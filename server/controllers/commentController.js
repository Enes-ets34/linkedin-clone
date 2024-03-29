const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Comment = require("../models/Comment");
const { sendNotification } = require("../helpers/libraries/sendNotification");

const addNewComment = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const createdComment = await Comment.create({
    ...userData,
    post: req.params.post_id,
    user: req.user.id,
  });
  const comment = await Comment.findById(createdComment._id)
    .populate("user")
    .populate({
      path: "post",
      select: "user",
    });

  if (req.user.id !== comment.post.user) {
    await sendNotification({
      message: `gönderinize yorum yaptı.`,
      sender: req.user.id,
      receiver: comment.post.user,
    });
  }
  return res.status(200).json({
    success: true,
    comment,
  });
});
const updateComment = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const comment = await Comment.findByIdAndUpdate(
    req.params.comment_id,
    {
      ...userData,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  await comment.save();
  return res.status(200).json({
    success: true,
    comment,
  });
});
const deleteComment = asyncErrorWrapper(async (req, res, next) => {
  console.log("buraya geldi");
  await Comment.findByIdAndDelete(req.params.comment_id);
  return res.status(200).json({
    success: true,
    message: "Comment deleted successfully..",
  });
});
const likeComment = asyncErrorWrapper(async (req, res, next) => {
  const comment = await Comment.findById(req.params.comment_id);
  if (comment.likes.includes(req.user.id)) {
    return next(new CustomError("You Are Already Like This Comment.", 400));
  }
  comment.likes.push(req.user.id);
  await comment.save();
  return res.status(200).json({
    success: true,
    comment,
  });
});
const undoLikeComment = asyncErrorWrapper(async (req, res, next) => {
  const comment = await Comment.findById(req.params.comment_id);
  if (!comment.likes.includes(req.user.id)) {
    return next(
      new CustomError("You Can Not Undo Like For This comment.", 400)
    );
  }
  comment.likes.pull(req.user.id);
  await comment.save();
  return res.status(200).json({
    success: true,
    comment,
  });
});

module.exports = {
  addNewComment,
  updateComment,
  deleteComment,
  likeComment,
  undoLikeComment,
};
