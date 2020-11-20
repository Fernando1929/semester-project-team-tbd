const express = require('express');
const router = express.Router();

const teamScheduleController = require('../controllers/teamScheduleController');

router.post("/teams/:tid/schedule", teamScheduleController.addTeamScheduleEvent);
router.get("/teams/:tid/schedule", teamScheduleController.getIndividualTeamSchedule);
router.get("/teams/:tid/schedule/:sid", teamScheduleController.getTeamScheduleEventById);
router.put("/teams/:tid/schedule/:sid", teamScheduleController.updateTeamScheduleEvent);
router.delete("/teams/:tid/schedule/:sid", teamScheduleController.deleteTeamScheduleEvent);

module.exports = router;