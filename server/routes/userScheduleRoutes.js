const express = require('express');
const router = express.Router();

const userScheduleController = require('../controllers/userScheduleController');

router.post("/users/:id/schedule", userScheduleController.addUserScheduleEvent);
router.get("/users/:id/schedule", userScheduleController.getIndividualUserSchedule);
router.get("/users/:id/schedule/:sid", userScheduleController.getUserScheduleEventById);
router.put("/users/:id/schedule/:sid", userScheduleController.updateUserScheduleEvent);
router.delete("/users/:id/schedule/:sid", userScheduleController.deleteUserScheduleEvent);

module.exports = router;