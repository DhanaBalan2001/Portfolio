import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import './certificates.css';

const Certificates = () => {
  const { isDarkMode } = useTheme();

  const certificatesData = [
    {
      title: "Full Stack Web Development",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=kmsh63q03196877nx8",
      icon: <FaDatabase />
    },
    {
      title: " HTML5",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=88673hqo07b3vGO1H9",
      icon: <FaHtml5 />
    },
    {
      title: "CSS3",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=f77E3l4968hQU8130N",
      icon: <FaCss3Alt />
    },
    {
      title: "Bootstrap",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=6M10897xK1E3367Fd8",
      icon: <FaBootstrap />
    },
    {
      title: "JavaScript",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=e88A7H26D8137B3k90",
      icon: <FaJs />
    },
    {
      title: "React JS",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=38Pnf693g0768pH17N",
      icon: <FaReact />
    },
    {
      title: "MySQL",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=9378276h3kQ0Ka9C18",
      icon: <FaDatabase />
    },
    {
      title: "MongoDB",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=8938o0j1cL3Dg77z06",
      icon: <SiMongodb />
    },
    {
      title: "Node JS",
      issuer: "GUVI Geek Networks Private Limited",
      year: "2024",
      verificationLink: "https://www.guvi.in/verify-certificate?id=1393170M8mQ86z7FWH",
      icon: <FaNodeJs />
    }
  ];

  const CertificateCard = ({ cert }) => (
    <Col xs={12} sm={6} md={4} lg={3}>
      <motion.div
        className={`certificate-card ${isDarkMode ? 'dark' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="certificate-content">
          <div className="d-flex align-items-center gap-2">
            <span className="certificate-icon">{cert.icon}</span>
            <h3>{cert.title}</h3>
          </div>
          <p className="issuer">Issued by {cert.issuer}</p>
          <p className="year">Issued in {cert.year}</p>
          <a 
            href={cert.verificationLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="verify-button"
          >
            View Certificate
          </a>
        </div>
      </motion.div>
    </Col>
  );

  return (
    <section id="certificates" className={`certificates-section ${isDarkMode ? 'dark' : ''}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="certificates-content">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Here are my achievements and certifications</p>
            <Row className="g-4">
              {certificatesData.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </Row>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certificates;