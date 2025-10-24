import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1 className="logo-text">WHOR</h1>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a href="#shop" className="nav-link">Shop</a>
            </li>
            <li className="nav-item">
              <a href="#community" className="nav-link">Community</a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">Project</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
