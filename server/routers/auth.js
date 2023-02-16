const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUser,
  logout,
  profileImageUpload,
  forgotPassword,
  resetPassword
} = require("../controllers/authController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const multer = require("../middlewares/libraries/multer");

router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.put("/resetpassword", resetPassword);
router.post("/login", login);
router.post("/register", register);
router.post("/forgotpassword", forgotPassword);
router.post(
  "/upload",
  [getAccessToRoute, multer.single("profile_image")],
  profileImageUpload
);

module.exports = router;
