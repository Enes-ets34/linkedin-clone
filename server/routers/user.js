const express = require("express");
const router = express.Router();

const {
  getSingleUserBySlug,
  getAllUsers,
  updateUser,
  editUser,
  addExperience,
  deleteExperience,
  updateExperience,
} = require("../controllers/userController");
const {
  checkUserExist,
} = require("../middlewares/database/databaseErrorHelpers");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

router.get("/:slug", [checkUserExist,getAccessToRoute], getSingleUserBySlug);
router.get("/edit/:id", getAccessToRoute, editUser);
router.get("/", getAllUsers);
router.put("/update", getAccessToRoute, updateUser);
// /users/experience
router.post("/experience", getAccessToRoute, addExperience);
router.delete("/experience/:id", getAccessToRoute, deleteExperience);
router.put("/experience/:id", getAccessToRoute, updateExperience);

module.exports = router;
