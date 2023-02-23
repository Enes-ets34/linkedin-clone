const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  addNewComment,
  updateComment,
  deleteComment,
  likeComment,
  undoLikeComment,
} = require("../controllers/commentController.js");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {
  getCommentOwnerAccessToRoute,
} = require("../middlewares/authorization/auth");

router.post("/", getAccessToRoute, addNewComment);
router.put(
  "/:comment_id/update",
  [getAccessToRoute, getCommentOwnerAccessToRoute],
  updateComment
);
router.delete(
  "/:comment_id/delete",
  [getAccessToRoute, getCommentOwnerAccessToRoute],
  deleteComment
);
router.post(
  "/:comment_id/like",
  getAccessToRoute,
  likeComment
);
router.post(
  "/:comment_id/undo-like",
  getAccessToRoute,
  undoLikeComment
);

module.exports = router;
