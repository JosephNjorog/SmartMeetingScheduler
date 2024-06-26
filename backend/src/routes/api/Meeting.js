const express = require('express');
const router = express.Router();
const MeetingController = require('../../controllers/MeetingController');

router.post('/', MeetingController.createMeeting);
router.get('/', MeetingController.getMeetings);
router.put('/:id', MeetingController.updateMeeting);
router.delete('/:id', MeetingController.deleteMeeting);

module.exports = router;
