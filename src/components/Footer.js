import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">WHOR</h3>
            <p className="footer-description">
              질문과 대화로 사람 사이를 잇는 공간
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">메뉴</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About us</a></li>
              <li><a href="#shop" className="footer-link">Shop</a></li>
              <li><a href="#community" className="footer-link">Community</a></li>
              <li><a href="#project" className="footer-link">Project</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">고객지원</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">자주 묻는 질문</a></li>
              <li><a href="#" className="footer-link">문의하기</a></li>
              <li><a href="#" className="footer-link">이용약관</a></li>
              <li><a href="#" className="footer-link">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 WHOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
