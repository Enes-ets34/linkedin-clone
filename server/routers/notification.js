const express = require("express");
const router = express.Router();
const {
  getNotificationsByUser,
  readNotification,
  deleteNotification,
} = require("../controllers/notificationController");
const {
  getAccessToRoute,
  getNotificationOwnerAccessToRoute,
} = require("../middlewares/authorization/auth");

router.get("/:id", getAccessToRoute, getNotificationsByUser);
router.get("/read/:id", getAccessToRoute, readNotification);
router.delete("/:id", getAccessToRoute, deleteNotification);

module.exports = router;
