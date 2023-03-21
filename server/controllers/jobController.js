const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const sendEmail = require("../helpers/libraries/sendEmail");
const Job = require("../models/Job");
const User = require("../models/User");

const getAllJobs = asyncErrorWrapper(async (req, res, next) => {
  const jobs = await Job.find().populate("company").populate("user");
  // .populate("applicants");
  return res.status(200).send({
    success: true,
    jobs,
  });
});
const getSingleJob = asyncErrorWrapper(async (req, res, next) => {
  const job = await Job.findById(req.params.id)
    .populate("user")
    .populate("company");
  return res.status(200).send({
    success: true,
    job,
  });
});
const newJob = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const job = await Job.create({ ...userData, user: req.user.id });
  return res.status(200).send({
    success: true,
    job,
  });
});
const deleteJob = asyncErrorWrapper(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  return res.status(200).send({
    success: true,
    message: "Job deleted successfully..",
  });
});
const updateJob = asyncErrorWrapper(async (req, res, next) => {
  const userData = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
  };
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    {
      ...userData,
      updated_at: Date.now(),
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).send({
    success: true,
    job,
  });
});
const applyToJob = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const job = await Job.findById(req.params.id).populate("user");
  const emailTemplate = `
  <h3>Job Apply</h3>
  <p>User:${user.full_name} was applied to your job.</p>
  `;
  try {
    if (job.applicants.includes(user.id)) {
      return next(new CustomError("You Are Already Applied This Job.", 400));
    }
    job.applicants.push(user);
    await job.save();
    await sendEmail({
      from: process.env.SMTP_MAIL,
      to: job.user.email,
      subject: "Job Apply",
      html: emailTemplate,
    });
    res.json({
      success: true,
      job,
    });
  } catch (error) {
    return next(new CustomError(error, 500));
  }
});
module.exports = {
  getAllJobs,
  newJob,
  applyToJob,
  deleteJob,
  updateJob,
  getSingleJob,
};
