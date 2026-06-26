import React from 'react';
import logoImage from '../assets/logo.png';

const Navbar = ({ activeView, onViewChange }) => {
  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => onViewChange('login')}>
        <img src={logoImage} alt="EasyHost Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
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
