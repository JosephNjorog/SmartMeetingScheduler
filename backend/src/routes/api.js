const express = require('express');
const router = express.Router();
const meetingRoutes = require('./api/meetings');
const userRoutes = require('./api/users');

router.use('/meetings', meetingRoutes);
router.use('/users', userRoutes);

module.exports = router;
