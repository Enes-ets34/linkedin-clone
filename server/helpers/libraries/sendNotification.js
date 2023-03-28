const Notification = require("../../models/Notification");

const sendNotification = async (notificationObj) => {
  const notification = await Notification.create({
    ...notificationObj,
  });
};
module.exports = {
  sendNotification,
};
