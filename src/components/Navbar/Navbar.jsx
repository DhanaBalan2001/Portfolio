import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { FaRocket, FaUserAstronaut, FaLaptopCode, FaProjectDiagram, FaMedal, FaPaperPlane, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand>
          <div className="navbar-brand">
            <span className="short-name">{'<DB/>'}</span>
            <span className="full-name">{'<Dhana Balan/>'}</span>
          </div>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}><FaRocket className="me-1" />Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}><FaUserAstronaut className="me-1" />About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')}><FaLaptopCode className="me-1" />Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}><FaProjectDiagram className="me-1" />Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('certificates')}><FaMedal className="me-1" />Certificates</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}><FaPaperPlane className="me-1" />Contact</Nav.Link>
          </Nav>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;