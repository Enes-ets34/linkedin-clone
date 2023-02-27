const express = require("express");
const router = express.Router();

const {
  getSingleUserBySlug,
  getAllUsers,
  updateUser,
  editUser,
  
} = require("../controllers/userController");
const {
  checkUserExist,
} = require("../middlewares/database/databaseErrorHelpers");
const {getAccessToRoute} = require('../middlewares/authorization/auth')

router.get("/:slug", checkUserExist,getSingleUserBySlug);
router.get("/edit/:id", getAccessToRoute, editUser);
router.get("/", getAllUsers);
router.put("/update", getAccessToRoute, updateUser);

module.exports = router;
