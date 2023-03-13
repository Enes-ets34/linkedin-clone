const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Company = require("../models/Company");
const User = require("../models/User");

const search = asyncErrorWrapper(async (req, res, next) => {
  let company = {};
  let users = [];
  const query = Company.findOne();
  let searchObject = {};

  const regex = new RegExp(req.query.search.trim(), "i");
  if (req.query.search) {
    searchObject = {
      $or: [
        { name: regex },
        { employees: { $elemMatch: { full_name: regex } } },
      ],
    };
    query.where(searchObject);
    company = await query
      .populate({
        path: "employees",
        model: "User",
      })
      .exec();

    users = await User.find({
      $or: [{ full_name: regex }, { title: regex }, { about: regex }],
    }).populate("company");
  }

  return res.status(200).json({
    success: true,
    company,
    users,
  });
});

module.exports = {
  search,
};
