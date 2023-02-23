const express = require("express");
const router = express.Router();
const comment = require("./comment");
const {
  getAccessToRoute,
  getPostOwnerAccessToRoute,
} = require("../middlewares/authorization/auth");
const {
  getAllPosts,
  newPost,
  getSinglePost,
  deletePost,
  updatePost,
  likePost,
  undoLikePost,
} = require("../controllers/postController");

router.get("/", getAllPosts);
router.post("/new", getAccessToRoute, newPost);
router.get("/like/:id", getAccessToRoute, likePost);
router.get("/undo-like/:id", getAccessToRoute, undoLikePost);
router.get("/:id", getSinglePost);
router.delete(
  "/delete/:id",
  [getAccessToRoute, getPostOwnerAccessToRoute],
  deletePost
);

router.put(
  "/update/:id",
  [getAccessToRoute, getPostOwnerAccessToRoute],
  updatePost
);

router.use("/:post_id/comments", comment);

module.exports = router;
