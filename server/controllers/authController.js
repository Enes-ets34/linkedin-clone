const CustomError = require("../helpers/error/CutomError");
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInput } = require("../helpers/input/inputHelpers");
const comparePassword = require("../helpers/authorization/comparePassoword");
const sendEmail = require("../helpers/libraries/sendEmail");

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
const profileImageUpload = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      profile_image: req.savedImage,
    },
    { new: true, runValidators: true }
  );
  res.json({
    success: true,
    message: "Image Uploaded Successfully",
    data: user,
  });
});
//Forgot Password
const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;
  const user = await User.findOne({ email: resetEmail });
  if (!user) {
    return next(new CustomError("There No User with that this email.", 400));
  }
  const resetPasswordToken = user.getResetPasswordTokenFromUser();
  const resetPasswordUrl = `http://localhost:3000/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`;

  const emailTemplate = `
  <h3>Reset Password</h3>
  <p>This <a href='${resetPasswordUrl}' target='_blank'>link </a> will expire 1 hour.</p>
  `;
  try {
    await sendEmail({
      from: process.env.SMTP_MAIL,
      to: resetEmail,
      subject: "Reset your password.",
      html: emailTemplate,
    });
    res.json({
      success: true,
      message: "Token sent to your email",
    });
  } catch (error) {
    user.reset_password_token = undefined;
    user.reset_password_expire = undefined;
    return next(new CustomError(error, 500));
  }
  await user.save();
});
const resetPassword = asyncErrorWrapper(async (req, res, next) => {
  const { resetPasswordToken } = req.query;
  const userPassword = req.body.password;
  if (!resetPasswordToken) {
    return next(new CustomError("please provide a valid token.", 400));
  }
  let user = await User.findOne({
    reset_password_token: resetPasswordToken,
    reset_password_expire: {
      $gt: Date.now(),
    },
  });
  user.password = userPassword;
  user.reset_password_expire = undefined;
  user.reset_password_token = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "OK",
  });
});

module.exports = {
  register,
  login,
  getUser,
  logout,
  profileImageUpload,
  forgotPassword,
  resetPassword,
};
