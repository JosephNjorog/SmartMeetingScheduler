import React from 'react';
import './MeetingList.css';

const MeetingList = ({ meetings }) => {
  return (
    <div className="meeting-list">
      <h2 className="list-header">Scheduled Meetings</h2>
      {meetings.map((meeting) => (
        <div key={meeting.id} className="meeting-item">
          <h3>{meeting.title}</h3>
          <p>{meeting.date} at {meeting.time}</p>
          <p>{meeting.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MeetingList;
