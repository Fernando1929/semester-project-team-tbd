const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.post("/teams", teamController.addTeam);
router.get("/teams", teamController.getAllTeams);
router.get("/teams/:tid", teamController.getTeamById);
router.put("/teams/:tid", teamController.updateTeam);
router.delete("/teams/:tid", teamController.deleteTeam);

module.exports = router;