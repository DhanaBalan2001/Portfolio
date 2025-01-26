import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaBootstrap, FaGithub, FaCode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiJsonwebtokens, SiNpm, SiPostman, SiAuth0, SiNetlify, SiRender } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const leftSkills = [
    { id: 1, name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { id: 2, name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { id: 3, name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { id: 4, name: 'CSS3', icon: <FaCss3 />, color: '#1572B6' },
    { id: 5, name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { id: 6, name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { id: 7, name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
    { id: 8, name: 'npm', icon: <SiNpm />, color: '#CB3837' },
    { id: 9, name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' }
  ];

  const rightSkills = [
    { id: 10, name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { id: 11, name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { id: 12, name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    { id: 13, name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { id: 14, name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
    { id: 15, name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { id: 16, name: 'RESTful API', icon: <SiPostman />, color: '#FF6C37' },
    { id: 17, name: 'OAuth', icon: <SiAuth0 />, color: '#EB5424' },
    { id: 18, name: 'Render', icon: <SiRender />, color: '#46E3B7' }
  ];

  const SkillCard = ({ skill }) => (
    <Col xs={6} sm={4}>
      <motion.div
        className={`skill-card ${isDarkMode ? 'dark' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: skill.id * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <div className="skill-name">
          <h3>{skill.name}</h3>
        </div>
      </motion.div>
    </Col>
  );

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? 'dark' : ''}`}>
      <Container fluid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="skills-content">
            <h2 className="skill-title">Technical Skills</h2>
            <h2 className="skill-subtitle">Powering Innovation with Modern Tech Stack</h2>
            <Row className="justify-content-center">
              <Col md={6}>
                <Row className="g-3">
                  {leftSkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </Row>
              </Col>
              <Col md={6}>
                <Row className="g-3">
                  {rightSkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;