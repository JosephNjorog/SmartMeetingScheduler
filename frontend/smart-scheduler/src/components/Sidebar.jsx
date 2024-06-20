import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <a href="/dashboard" className="sidebar-link">Dashboard</a>
        <a href="/calendar" className="sidebar-link">Calendar</a>
        <a href="/meetings" className="sidebar-link">Meetings</a>
        <a href="/settings" className="sidebar-link">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
