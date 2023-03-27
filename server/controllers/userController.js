const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const Experience = require("../models/Experience");
const { sendNotification } = require("../helpers/libraries/sendNotification");

const getSingleUserBySlug = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ slug: req.params.slug })
    .populate("company")
    .populate({
      path: "experiences",
      populate: "company",
    });
  // Send notification to user
  if (user._id !== req.user.id) {
    await sendNotification({
      message: `profilinizi görüntüledi..`,
      sender: req.user.id,
      receiver: user._id,
    });
  }
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
  delete userData.password;
  const user = await User.findOneAndUpdate(
    { _id: req.user.id },
    { ...userData },
    {
      new: true,
      runValidators: true,
    }
  )
    .populate({
      path: "experiences",
      populate: "company",
    })
    .populate({ path: "company", model: "Company" });

  return res.status(200).json({
    success: true,
    user,
  });
});
const addExperience = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.id });
  const userData = req.body;
  const experience = await Experience.create({
    ...userData,
    user: req.user.id,
  });
  await experience.populate("company");
  user.experiences.push(experience);
  await user.save();
  return res.status(200).json({
    success: true,
    user,
    experience,
  });
});
const deleteExperience = asyncErrorWrapper(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (JSON.parse(JSON.stringify(experience.user)) !== req.user.id) {
    return next(
      new CustomError("You Can Not Delete Experience For This Experience.", 400)
    );
  }
  user.experiences.pull(experience);
  await Experience.findByIdAndDelete(experience._id);
  await user.save();
  return res.status(200).json({
    success: true,
    user,
  });
});
const updateExperience = asyncErrorWrapper(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (JSON.parse(JSON.stringify(experience.user)) !== req.user.id) {
    return next(
      new CustomError("You Can Not Update Experience For This Experience.", 400)
    );
  }
  await experience.updateOne({ ...req.body });
  await experience.save();
  return res.status(200).json({
    success: true,
    user,
    experience,
  });
});

module.exports = {
  getSingleUserBySlug,
  getAllUsers,
  updateUser,
  editUser,
  addExperience,
  deleteExperience,
  updateExperience,
};
