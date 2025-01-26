import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './about.css';

const About = () => {
  const { isDarkMode } = useTheme();
  const timeline = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      date: "2019 - 2023",
      title: "Bachelor's in Electronics and Communication",
      location: "Kathir College of Engineering, Anna University",
      description: "CGPA: 8/10"
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      date: "2023",
      title: "IOT Intern",
      location: "PoFiTechnologies",
      description: "Worked on real-world projects using IOT"
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      date: "2024",
      title: "Full Stack Development Course",
      location: "GUVI GEEKS NETWORK PRIVATE LIMITED",
      description: "Built 3 end-to-end web applications using MERN stack"
    },
    {
      id: 4,
      icon: <FaCertificate />,
      date: "2024",
      title: "Web Development Certification",
      location: "GUVI GEEK NETWORK PRIVATE LIMITED",
      description: "Completed intensive MERN stack training"
    },
  ];

  return (
    <div id="about" className={`about ${isDarkMode ? 'dark' : ''}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="row justify-content-center"
        >
          <div className="about-col-12">
            <h2 className="section-title text-center mb-2">About Me</h2>
            <div className="section-subtitle text-center mb-5">My Journey So Far</div>
          </div>
          <div className="col-12 col-md-8">
            <div className="timeline">
              {timeline.map((item) => (
                <motion.div
                  key={item.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                >
                  <div className="d-flex p-3">
                    <div className="timeline-icon me-3">
                      {item.icon}
                    </div>
                    <div className="about-timeline-content">
                      <div className="text-muted small">{item.date}</div>
                      <h5 className="mt-1 mb-2">{item.title}</h5>
                      <div className="text-secondary small mb-1">{item.location}</div>
                      <div className="about-small">{item.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;