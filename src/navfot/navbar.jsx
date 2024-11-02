import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="navbar-logo-text">KombingFresh</span>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <div className="navbar-search-input-container">
            <input
              type="text"
              placeholder="Pencarian"
              className="navbar-search-input"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="navbar-search-icon w-6 h-6"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="navbar-icons">
          <button className="navbar-icon-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="navbar-icon-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
              />
            </svg>
          </button>
          
          {/* User Profile */}
          <div className="navbar-profile">
            <div className="navbar-profile-image">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="navbar-profile-text">
              <p className="text-sm font-medium">Hijau Mandala</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;