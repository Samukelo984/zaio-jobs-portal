const express = require("express");
const router = express.Router();

// CONTROLLER IMPORTS
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/JobController");

// ROUTES
router.get("/", getJobs);
router.get("/:id", getJob);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
