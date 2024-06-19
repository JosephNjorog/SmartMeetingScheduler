const express = require("express");
const router = express.Router();
const MeetingController = require("../controllers/MeetingController");

router.post("/meetings", MeetingController.createMeeting);
router.get("/meetings", MeetingController.getMeetings);

module.exports = router;
