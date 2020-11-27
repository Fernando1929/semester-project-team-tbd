const express = require('express');
const router = express.Router();

const teamMemberController = require('../controllers/teamMembersController');

router.post("/teams/:tid/team_members", teamMemberController.addTeamMember);
router.get("/teams/:tid/team_members", teamMemberController.getAllTeamMembers);
router.get("/teams/:tid/team_members/absolute", teamMemberController.getAllMembersExceptLeaderByTeamId);
router.get("/teams/:tid/team_members/:tmid", teamMemberController.getTeamMemberByUserId);
router.put("/teams/:tid/team_members/:tmid", teamMemberController.updateTeamMember);
router.delete("/teams/team_members/:tmid", teamMemberController.deleteTeamMember);

module.exports = router;