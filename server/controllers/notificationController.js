const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Notification = require("../models/Notification");

const getNotificationsByUser = asyncErrorWrapper(async (req, res, next) => {
  const notifications = await Notification.find({
    receiver:req.user.id
  }).populate("sender").sort("-created_at")
  return res.status(200).json({
    success: true,
    notifications,
  });
});
const readNotification = asyncErrorWrapper(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);
  notification.read = true;
  await notification.save();
  return res.status(200).json({
    success: true,
    notification,
  });
});
const deleteNotification = asyncErrorWrapper(async (req, res, next) => {
  const notification = await Notification.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});

module.exports = {
  getNotificationsByUser,
  readNotification,
  deleteNotification,
};
