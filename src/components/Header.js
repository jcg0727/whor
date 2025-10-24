import React from 'react';
import '../styles/Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1 className="logo-text" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            WHOR
          </h1>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#shop" 
                className={`nav-link ${currentPage === 'shop' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('shop');
                }}
              >
                Shop
              </a>
            </li>
                <li className="nav-item">
                  <a href="#community" className="nav-link">Community</a>
                </li>
                <li className="nav-item">
                  <a
                    href="#project"
                    className={`nav-link ${currentPage === 'project' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('project');
                    }}
                  >
                    Project
                  </a>
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
