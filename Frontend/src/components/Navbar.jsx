import React from 'react';

const Navbar = ({ activeView, onViewChange }) => {
  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => onViewChange('login')}>
        <svg viewBox="0 0 40 40" width="40" height="40" style={{ overflow: 'visible' }}>
          {/* Main logo circle */}
          <circle cx="20" cy="20" r="16" fill="#000000" />
          
          {/* Inner isometric stairs/squares */}
          <rect x="11" y="21" width="6" height="6" fill="#FFFFFF" />
          <rect x="17" y="15" width="6" height="6" fill="#FFFFFF" />
          <rect x="23" y="9" width="6" height="6" fill="#FFFFFF" />
          
          {/* Tiny outer accent square */}
          <rect x="29" y="5" width="6" height="6" fill="#000000" />
        </svg>
      </div>

      <div className="nav-menu-wrapper">
        <div className="nav-links">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); onViewChange('login'); }}
            style={{ fontSize: '22px', fontWeight: '800', textTransform: 'none' }}
          >
            EasyHost
          </a>
        </div>
        <div className="nav-divider-line" />
      </div>

      {activeView === 'signup' ? (
        <button className="nav-btn" onClick={() => onViewChange('login')}>
          Log in
        </button>
      ) : (
        <button className="nav-btn" onClick={() => onViewChange('signup')}>
          Sign up
        </button>
      )}
    </nav>
  );
};

export default Navbar;
