const express = require("express");
const {
  getAllJobs,
  newJob,
  applyToJob,
  deleteJob,
  updateJob,
  getSingleJob,
} = require("../controllers/jobController");
const {
  getAccessToRoute,
  getJobOwnerAccessToRoute,
} = require("../middlewares/authorization/auth");

const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id", getSingleJob);
router.post("/", getAccessToRoute, newJob);
router.get("/apply/:id", getAccessToRoute, applyToJob);
router.delete("/:id", [getAccessToRoute, getJobOwnerAccessToRoute], deleteJob);
router.put("/:id", [getAccessToRoute, getJobOwnerAccessToRoute], updateJob);

module.exports = router;
