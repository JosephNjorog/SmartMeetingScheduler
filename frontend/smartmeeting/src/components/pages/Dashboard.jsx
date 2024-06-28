import { useState } from 'react';
import Calendar from '../Calendar';
import MeetingForm from '../MeetingForm';
import MeetingList from '../MeetingList';
import Notification from '../Notification';
import './Dashboard.css';

const Dashboard = () => {
  const [meetings, setMeetings] = useState([]);
  const [notification, setNotification] = useState('');

  const handleAddMeeting = (meeting) => {
    setMeetings([...meetings, { ...meeting, id: Date.now() }]);
    setNotification('Meeting scheduled successfully!');
    setTimeout(() => setNotification(''), 3000);
  };

const handleDeleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
    setNotification('Meeting deleted successfully!');
    setTimeout(() => setNotification(''), 3000);
};

return (
    <div className="dashboard">
    <Notification message={notification} />
    <Calendar />
    <MeetingForm onSubmit={handleAddMeeting} />
    <MeetingList meetings={meetings} onDelete={handleDeleteMeeting} />
    </div>
  );
};

export default Dashboard;
