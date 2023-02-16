const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/User");
const CustomError = require("../helpers/error/CutomError");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    user,
  });
});
const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find();
  return res.status(200).json({
    success: true,
    users,
  });
});

module.exports = {
  getSingleUser,
  getAllUsers,
};
