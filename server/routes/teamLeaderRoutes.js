const express = require('express');
const router = express.Router();

const teamLeaderController = require('../controllers/teamLeaderController');

router.post("/teams/:tid/team_leader", teamLeaderController.addTeamLeader);
// router.get("/teams/:tid/team_leader", teamLeaderController.getAllTeamLeaders);
router.get("/teams/:tid/team_leader", teamLeaderController.getUserIdByTeamLeader);
router.get("/teams/team_leader/:tlid", teamLeaderController.getTeamLeaderByUserId);
router.put("/teams/:tid/team_leader/:tlid", teamLeaderController.updateTeamLeader);
router.delete("/teams/:tid/team_leader/:tlid", teamLeaderController.deleteTeamLeader);

module.exports = router;