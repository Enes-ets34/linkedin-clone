const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Company = require("../models/Company");

const addNewCompany = asyncErrorWrapper(async (req, res, next) => {
  const userData = req.body;
  const company = await Company.create({
    ...userData,
  });
  return res.status(200).json({
    success: true,
    company,
  });
});
const deleteCompany = asyncErrorWrapper(async (req, res, next) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Deleted Successfully...",
  });
});
const getAllCompanies = asyncErrorWrapper(async (req, res, next) => {
  const query = Company.find()

  if (req.query.search) {
    const searchObject = {};
    const regex = new RegExp(req.query.search.trim(), "i");
    searchObject["name"] = regex;
    query.where(searchObject)
  }

  const companies = await query.populate({
    path: "employees",
    model: "User",
    populate: {
      path: "company",
      model: "User",
    },
  }).exec()

  return res.status(200).json({
    success: true,
    companies,
  });
});

const getSingleCompany = asyncErrorWrapper(async (req, res, next) => {
  const company = await Company.findOne({ slug: req.params.slug });
  return res.status(200).json({
    success: true,
    company,
  });
});

module.exports = {
  addNewCompany,
  deleteCompany,
  getAllCompanies,
  getSingleCompany,
};
