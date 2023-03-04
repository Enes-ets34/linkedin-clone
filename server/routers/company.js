const express = require("express");
const router = express.Router();
const {
  addNewCompany,
  deleteCompany,
  getAllCompanies,
  getSingleCompany
} = require("../controllers/companyController.js");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

router.get("/", getAllCompanies);
router.get("/:slug", getAccessToRoute, getSingleCompany);
router.post("/", getAccessToRoute, addNewCompany);
router.delete("/delete/:id", getAccessToRoute, deleteCompany);

module.exports = router;
