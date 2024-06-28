import './MeetingList.css';
import PropTypes from 'prop-types';

const MeetingList = ({ meetings, onDelete }) => (
  <ul className="meeting-list">
    {meetings.map((meeting) => (
      <li key={meeting.id}>
        <h3>{meeting.title}</h3>
        <p>{meeting.date} at {meeting.time}</p>
        <button onClick={() => onDelete(meeting.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

MeetingList.propTypes = {
  meetings: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MeetingList;
