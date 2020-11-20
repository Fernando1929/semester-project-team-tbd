const express = require('express');
const router = express.Router();

const meetingOptionsController = require('../controllers/meetingOptionsController');

router.post("/teams/:tid/meeting_options", meetingOptionsController.addMeetingOption);
router.get("/teams/:tid/meeting_options", meetingOptionsController.getAllMeetingOptionsByTeamId);
router.get("/teams/:tid/meeting_options/:mid", meetingOptionsController.getMeetingOptionByOptIdAndTeamId);
router.put("/teams/:tid/meeting_options/:mid", meetingOptionsController.updateMeetingOption);
router.put("/teams/:tid/meeting_options/:mid/votes", meetingOptionsController.updateMeetingVoteCount);
router.delete("/teams/:tid/meeting_options/:mid", meetingOptionsController.deleteMeetingOption);
router.delete("/teams/:tid/meeting_options", meetingOptionsController.deleteAllMeetingOptionsByTeam);

module.exports = router;