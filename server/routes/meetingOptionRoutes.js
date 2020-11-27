const express = require('express');
const router = express.Router();

const meetingOptionsController = require('../controllers/meetingOptionsController');
const meetingOptionsVotesController = require('../controllers/meetingOptionVotesController');

router.post("/teams/:tid/meeting_options", meetingOptionsController.addMeetingOption);
router.get("/teams/:tid/meeting_options", meetingOptionsController.getAllMeetingOptionsByTeamId);
router.get("/teams/:tid/meeting_options/:mid", meetingOptionsController.getMeetingOptionByOptIdAndTeamId);
router.put("/teams/:tid/meeting_options/:mid", meetingOptionsController.updateMeetingOption);
router.put("/teams/:tid/meeting_options/:mid/votes", meetingOptionsController.updateMeetingVoteCount);
router.delete("/teams/:tid/meeting_options/:mid", meetingOptionsController.deleteMeetingOption);
router.delete("/teams/:tid/meeting_options", meetingOptionsController.deleteAllMeetingOptionsByTeam);


router.post("/vote/meeting_options", meetingOptionsVotesController.addMeetingOptionVote);
router.get("/vote/team/:tid/meeting_options/currentState", meetingOptionsVotesController.isVotingDone);
router.get("/vote/team/:tid/meeting_options/final", meetingOptionsController.getMeetingsWithMostVotes);
router.post("/vote/team/:tid/meeting_options/setevent", meetingOptionsVotesController.setEvent);

module.exports = router;