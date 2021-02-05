const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');
const teamMembershipController = require('../controllers/teamMembershipController');

router.post("/teams", teamController.addTeam);
router.get("/teams", teamController.getAllTeams);
router.get("/teams/:tid", teamController.getTeamById);
router.get("/teams/:tid/allinfo", teamController.getTeamAllInfo);
router.put("/teams/:tid", teamController.updateTeam);
router.delete("/teams/:tid", teamController.deleteTeam);

router.post("/teams/:tid/team_membership", teamMembershipController.addTeamMembership);
router.delete("/teams/:tid/team_membership/:tmid", teamMembershipController.deleteTeamMembership);

//Testing
router.get("/teams/user/:id", teamController.getTeamsByUserId);
router.get("/teams/user/:id/recent", teamController.getMostRecentTeamsByUserId);

module.exports = router;