const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    stack: {
      type: Array,
      required: true,
    },
    stacktwo: {
      type: Array,
      required: true,
    },
    stackthree: {
      type: Array,
      required: true,
    },
    stackfour: {
      type: Array,
      required: false,
    },
    stackfive: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPost", JobSchema);
