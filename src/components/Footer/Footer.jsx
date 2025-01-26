import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';
import './footer.css';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <Container className="d-flex justify-content-center align-items-center">
        <div className="footer-content">
          <p className="footer-text">© {currentYear} Dhana Balan K. All rights reserved.</p>
          <p className="footer-text">Built with React & ❤️</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;