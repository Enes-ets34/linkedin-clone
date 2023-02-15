const express = require("express");
const router = express.Router();
const { login, register, getUser,logout } = require("../controllers/authController");
const {getAccessToRoute} = require("../middlewares/authorization/auth");

router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/register", register);

module.exports = router;
