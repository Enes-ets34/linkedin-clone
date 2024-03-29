const Post = require("../../models/Post");
const Comment = require("../../models/Comment");
const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const Job = require("../../models/Job");
const Notification = require("../../models/Notification");

const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");
const asyncErrorWrapper = require("express-async-handler");

const getAccessToRoute = asyncErrorWrapper(async (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    return next(new CustomError("You are not auth. for this route.", 401));
  }
  const access_token = getAccessTokenFromHeader(req);
  jwt.verify(access_token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      next(new CustomError("You are not auth. for this route.", 403));
    } else {
      req.user = {
        id: decoded.id,
        full_name: decoded.full_name,
      };
    }
    next();
  });
});
const getPostOwnerAccessToRoute = asyncErrorWrapper(async (req, res, next) => {
  const userId = req.user.id;
  const postId = req.params.id;
  const post = await Post.findById(postId);

  if (post.user.toString() !== userId) {
    return next(new CustomError("Only Post owner can do this.", 403));
  }
  next();
});
const getJobOwnerAccessToRoute = asyncErrorWrapper(async (req, res, next) => {
  const userId = req.user.id;
  const jobId = req.params.id;
  const job = await Job.findById(jobId);
  console.log("job :>> ", job);
  if (job.user.toString() !== userId) {
    return next(new CustomError("Only Job owner can do this.", 403));
  }
  next();
});
const getCommentOwnerAccessToRoute = asyncErrorWrapper(
  async (req, res, next) => {
    const userId = req.user.id;
    const commentId = req.params.comment_id;
    const comment = await Comment.findById(commentId);

    if (comment.user.toString() !== userId) {
      return next(new CustomError("Only Comment owner can do this.", 403));
    }
    next();
  }
);
const getNotificationOwnerAccessToRoute = asyncErrorWrapper(
  async (req, res, next) => {
    const userId = req.user.id;
    const notificationId = req.params.id;
    const notification = await Notification.findById(notificationId);

    if (notification.receiver.toString() !== userId) {
      return next(new CustomError("Only Notification receiver can do this.", 403));
    }
    next();
  }
);

module.exports = {
  getAccessToRoute,
  getPostOwnerAccessToRoute,
  getCommentOwnerAccessToRoute,
  getJobOwnerAccessToRoute,
  getNotificationOwnerAccessToRoute
};
