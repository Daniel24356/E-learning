import React from 'react';
import './Dashboard.css';
import { FaUser, FaCogs, FaHome, FaGraduationCap, FaCertificate, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Company Name</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><FaUser /> Manage Employees</li>
            <li><FaCogs /> Course Settings</li>
            <li className="active"><FaHome /> Dashboard</li>
            <li><FaGraduationCap /> My Trainings</li>
            <li><FaCertificate /> Certificates</li>
            <li><FaUserCircle /> Profile</li>
            <li><FaCogs /> Settings</li>
            <li><FaSignOutAlt /> Log Out</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Hello Nasir, <span className="highlight">Good evening</span></h1>
          <div className="profile">
            <img src="https://via.placeholder.com/40" alt="Profile" />
            <span>Dennis Diaz</span>
          </div>
        </header>
        <section className="content">
          <p>Here is the update for company.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
