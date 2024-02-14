const express = require("express");
const t_router = express.Router();
const {
  createSchedule,
  getschdeule,
  getSingleapply,

  deleteschdule,
} = require("../controllers/TrainingSchedule");

t_router.post("/", createSchedule);
t_router.get("/", getschdeule);
t_router.get("/:id", getSingleapply);

t_router.delete("/:id", deleteschdule);

module.exports = t_router;