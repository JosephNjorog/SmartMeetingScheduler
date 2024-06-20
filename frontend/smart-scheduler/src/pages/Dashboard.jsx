import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import MeetingList from '../components/MeetingList';
import ApiService from '../services/ApiService';
import './Dashboard.css';

const Dashboard = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    ApiService.getMeetings().then(data => setMeetings(data));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        <Calendar />
        <MeetingList meetings={meetings} />
      </div>
    </div>
  );
};

export default Dashboard;
