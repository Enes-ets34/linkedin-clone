const CustomError = require("../helpers/error/CutomError");
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInput } = require("../helpers/input/inputHelpers");
const comparePassword = require("../helpers/authorization/comparePassoword");

const register = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const user = await User.create(userData);

  sendJwtToClient(user, res);
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  if (!validateUserInput(userData.email, userData.password)) {
    return next(new CustomError("Please Check Your Inputs.", 400));
  }
  const user = await User.findOne({ email: userData.email }).select(
    "+password"
  );
  if (!(comparePassword(userData.password) === user.password)) {
    return next(new CustomError("Please Check Your Password", 400));
  }

  sendJwtToClient(user, res);
});
const logout = asyncErrorWrapper(async (req, res, next) => {
  const { JWT_COOKIE_EXPIRE } = process.env;
  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged In Succesfully",
    });
});
const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
    },
  });
};

module.exports = {
  register,
  login,
  getUser,
  logout,
};
