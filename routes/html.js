const router = require("express").Router();
const Workout = require("../models/workouts");
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  console.log(req.body);
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  console.log(req.body);
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
  console.log(req.body);
});

module.exports = router;
