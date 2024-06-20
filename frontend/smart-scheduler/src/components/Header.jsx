import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Smart Scheduler</div>
      <nav className="nav">
        <a href="/dashboard" className="nav-link">Dashboard</a>
        <a href="/profile" className="nav-link">Profile</a>
        <a href="/logout" className="nav-link">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
