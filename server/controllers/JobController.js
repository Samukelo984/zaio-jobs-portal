// IMPORT MODEL
const JobModel = require("../models/JobModel");

// GET ALL JOBS
const getJobs = async (req, res) => {
  const jobs = await JobModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(jobs);
};
// GET A JOB
const getJob = async (req, res) => {
  const { id } = req.params;

  try {
    const singleJob = await JobModel.findOne(id);

    if (!singleJob) {
      res.status(400).json({ error: "No such job found" });
    }
    res.status(200).json(singleJob);
  } catch (error) {
    res.status(400).json({ error: "An unforseen error occured" });
  }
};
// CREATE A JOB
const createJob = async (req, res) => {
  const {
    title,
    salary,
    benefits,
    location,
    stack,
    stacktwo,
    stackthree,
    stackfour,
    stackfive,
    description,
    responsibilities,
    experience,
    education,
    skills,
  } = req.body;

  try {
    const newJobPost = await JobModel.create({
      salary,
      benefits,
      location,
      stack,
      stacktwo,
      stackthree,
      stackfour,
      stackfive,
      description,
      responsibilities,
      experience,
      education,
      skills,
    });
    res.status(200).json(newJobPost);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create a new Job, check for bugs" });
  }
};

// UPDATE A JOB
const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await JobModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updatedJob) {
    res.status(404).json({ error: "Failed to update Job" });
  }

  res.status(200).json(updatedJob);
};
// DELETE A JOB
const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findOneAndDelete({ _id: id });

  if (!job) {
    res.status(404).json({ error: "Could not delete job" });
  }
  res.status(200).json(job);
};

module.exports = { getJobs, getJob, createJob, updateJob, deleteJob };
