const User = require("../../models/User");

const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const mongoose = require("mongoose");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ _id: req.params.id }, { slug: req.params.slug }],
  });
  if (!user) {
    return next(new CustomError("There is no user such that id or name.", 400));
  }
  next();
});

module.exports = {
  checkUserExist,
};
