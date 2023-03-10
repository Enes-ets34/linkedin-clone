const express = require("express");
const router = express.Router();
const {
 search
} = require("../controllers/searchController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");


router.get("/", getAccessToRoute, search);


module.exports = router;
