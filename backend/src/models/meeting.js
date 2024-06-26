const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: String }],
});

module.exports = mongoose.model('Meeting', MeetingSchema);
