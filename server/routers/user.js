const express = require("express");
const router = express.Router();

const { getSingleUser,getAllUsers } = require("../controllers/userController");
const {
  checkUserExist,
} = require("../middlewares/database/databaseErrorHelpers");

router.get("/:id", checkUserExist, getSingleUser);
router.get("/", getAllUsers);

module.exports = router;
