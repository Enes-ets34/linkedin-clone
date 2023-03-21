const express = require("express");
const router = express.Router();

const auth = require("./auth");
const post = require("./post");
const user = require("./user");
const company = require("./company");
const  search  = require("./search");
const  job  = require("./job");

router.use("/auth", auth);

router.use("/post", post);

router.use("/users", user);

router.use("/company", company);

router.use("/search", search);

router.use("/job", job);

module.exports = router;
