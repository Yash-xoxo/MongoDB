const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find().sort({ postedAt: -1 });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  const savedJob = await newJob.save();
  res.status(201).json(savedJob);
});

module.exports = router;