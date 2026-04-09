import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [user] = useState({ name: 'Agam Tiwari', initials: 'AT'});

  return (
    <nav className="navbar professional-navbar">
      <div className="nav-group-left">
        <div className="nav-brand">
          <div className="brand-text">
            <span className="brand-name">RAILWAY ARENA</span>
            <span className="brand-slogan">BOOK YOUR JOURNEY</span>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/trains">Trains</Link>
          <Link to="/seats/:id">Seats</Link>
          <Link to="/passengers">Passenger Detail</Link>
        </div>
      </div>

      <div className="nav-group-right">
        <button className="icon-btn">
        </button>
        <button className="icon-btn has-badge">
          {user.notifications > 0 && <span className="notification-badge">{user.notifications}</span>}
        </button>
        <div className="user-profile">
          <div className="user-avatar">{user.initials}</div>
          <span className="user-name">{user.name}</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;