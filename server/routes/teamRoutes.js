const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');
const teamMembershipController = require('../controllers/teamMembershipController');

router.post("/teams", teamController.addTeam);
router.get("/teams", teamController.getAllTeams);
router.get("/teams/:tid", teamController.getTeamById);
router.put("/teams/:tid", teamController.updateTeam);
router.delete("/teams/:tid", teamController.deleteTeam);

router.post("/teams/:tid/team_membership", teamMembershipController.addTeamMembership);

//Testing
router.get("/teams/user/:id", teamController.getTeamsByUserId);


module.exports = router;