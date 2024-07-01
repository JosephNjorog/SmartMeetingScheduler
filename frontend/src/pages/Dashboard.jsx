import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetings, createMeeting, deleteMeeting } from '../store/actions/meetingActions';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MeetingForm from '../components/MeetingForm';
import MeetingList from '../components/MeetingList';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings.meetings);

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);

  const handleCreateMeeting = (meeting) => {
    dispatch(createMeeting(meeting));
  };

  const handleDeleteMeeting = (id) => {
    dispatch(deleteMeeting(id));
  };

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="main-content">
        <MeetingForm onSubmit={handleCreateMeeting} />
        <MeetingList meetings={meetings} onDelete={handleDeleteMeeting} />
      </div>
    </div>
  );
};

export default Dashboard;
