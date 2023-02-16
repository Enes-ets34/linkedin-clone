const express = require("express");

const auth = require("./auth");
const post = require("./post");
const user = require("./user");

const router = express.Router();

router.use("/auth", auth);

router.use("/post", post);

router.use("/users", user);

module.exports = router;
