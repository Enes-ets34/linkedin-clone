const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const CryptoJS = require("crypto-js");


const getSingleUserById = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id }).populate("company")
  return res.status(200).json({
    success: true,
    user,
  });
});

const getSingleUserBySlug = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ slug: req.params.slug }).populate('company')
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
const editUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  return res.status(200).json({
    success: true,
    user,
  });
});
const updateUser = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  if (userData.password) {
    userData.password = CryptoJS.HmacSHA1(
      userData.password,
      process.env._SALTKEY
    ).toString();
  }
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      ...userData,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({
    success: true,
    user,
  });
});

module.exports = {
  getSingleUserBySlug,
  getSingleUserById,
  getAllUsers,
  updateUser,
  editUser,
};
