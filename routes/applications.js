const express = require('express');
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.post('/', upload.single('resume'), async (req, res) => {
  const { jobId, name, email } = req.body;
  const newApp = new Application({
    jobId,
    name,
    email,
    resume: req.file.path
  });
  const savedApp = await newApp.save();
  res.status(201).json(savedApp);
});

router.get('/', async (req, res) => {
  const apps = await Application.find().populate('jobId');
  res.json(apps);
});

module.exports = router;