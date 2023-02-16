const User = require("../../models/User");
const CustomError = require("../../helpers/error/CutomError");
const asyncErrorWrapper = require("express-async-handler");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    return next(new CustomError("There is no user such that id.", 400));
  }
  next()
});

module.exports = {
  checkUserExist,
};
