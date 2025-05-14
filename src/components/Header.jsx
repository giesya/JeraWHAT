import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthButton = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (user) {
    return (
      <div className="nav__auth-buttons">
        <Link to="/analyze" className="button button--ghost">
          Analyze
        </Link>
        <div className="profile-dropdown">
          <button 
            className="profile-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i className='bx bx-user-circle'></i>
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="user-info">
                <p className="user-email">{user.email}</p>
              </div>
              <Link to="/history" className="dropdown-item">
                <i className='bx bx-history'></i> Riwayat Scan
              </Link>
              <button onClick={handleLogout} className="dropdown-item">
                <i className='bx bx-log-out'></i> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link to="/login" className="button button--ghost">
      Login
    </Link>
  );
};

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src="assets/img/logo.png" alt="" className="nav__logo-img" />
          JeraWHAT?!
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/habbit" className="nav__link">Habbit</Link>
            </li>
            <li className="nav__item">
              <Link to="/article" className="nav__link">Article</Link>
            </li>
            <AuthButton />
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
          <img src="assets/img/nav-img.png" alt="" className="nav__img" />
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header; 