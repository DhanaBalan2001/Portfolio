import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import './projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "React Price Card",
      description: "Responsive Price Card component built with React, showcasing pricing tiers and features dynamically.",
      imageUrl: "/assets/images/image 1.jpg",      
      techStack: ["React", "CSS3", "Bootstrap", "JavaScript", "HTML5"],
      liveLink: "https://elaborate-longma-d61b6f.netlify.app/",
      codeLink: "https://github.com/DhanaBalan2001/Pricecard",
      category: "frontend"
    },
    {
      title: "React Context API",
      description: "React app using Context API for a shopping cart, enabling real-time updates to product quantities and total amount with interactive controls.",
      imageUrl: "/assets/images/image 2.jpg",
      techStack: ["React", "API Integration", "CSS", "HTML", "JavaScript"],
      liveLink: "https://remarkable-quokka-5d5c13.netlify.app/",
      codeLink: "https://github.com/DhanaBalan2001/React-UseContext-Task",
      category: "frontend"
    },
    {
      title: "Hall Booking",
      description: "Node.js and Express Hall Booking API manages room bookings, prevents double-booking, tracks history, and provides endpoints for room creation and availability.",
      imageUrl: "/assets/images/image 5.jpg",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://hall-booking-fbxi.onrender.com/",
      codeLink: "https://github.com/DhanaBalan2001/Hall-Booking",
      category: "backend"
    },
    {
      title: "Node File System",
      description: "Node.js RESTful API using Express.js to create and retrieve timestamped text files with scalable, modular, and robust practices.",
      imageUrl: "/assets/images/image 4.png",
      techStack: ["Node.js", "Express", "Postman"],
      liveLink: "https://cms-demo.com",
      codeLink: "https://github.com/DhanaBalan2001/Nodejs-filesystem",
      category: "backend"
    },
    {
      title: "Hotel Booking Web Application",
      description: "Developed a hotel booking web application enabling seamless room reservations, availability checks, and user-friendly management.",
      imageUrl: "/assets/images/image 3.jpg",
      techStack: ["HTML","CSS","JavaScript","Bootstrap","React", "Node.js","Express.js","JWT", "MongoDB", "Stripe"],
      liveLink: "https://astounding-florentine-9fd2a8.netlify.app/",
      codeLink: ["https://github.com/DhanaBalan2001/Hotel-Booking-App-Frontend","https://github.com/DhanaBalan2001/Hotel-Booking-App-Backend"],
      category: "fullstack"
    },
    {
      title: "Restaurant Management Web Application",
      description: "Created a restaurant management web application for efficient table reservations, menu handling, and order tracking.",
      imageUrl: "/assets/images/image 6.png",
      techStack: ["HTML","CSS","JavaScript","Bootstrap","React", "Node.js","Express.js","JWT", "MongoDB", "Socket.io"],
      liveLink: "voluble-cendol-68fbbc.netlify.app",
      codeLink: "https://github.com/DhanaBalan2001/Restaurant-Management-Frontend",
      category: "fullstack"
    },
    {
      title: "Blog Web Application",
      description: "A modern React-based frontend for a Blog platform that enables users to connect, share content, and interact with each other.",
      imageUrl: "/assets/images/image 7.jpg",
      techStack: ["HTML","CSS","JavaScript","Bootstrap","React", "Node.js","Express.js","JWT", "MongoDB"],
      liveLink: "voluble-cendol-68fbbc.netlify.app",
      codeLink: "https://github.com/DhanaBalan2001/Restaurant-Management-Frontend",
      category: "fullstack"
    },
    {
      title: "Expense Tracker Web Application",
      description: "Developed a Financial Management System using MERN stack for expense tracking, budgeting, and financial analytics.",
      imageUrl: "/assets/images/image 8.png",
      techStack: ["HTML","CSS","JavaScript","Bootstrap","React", "Node.js","Express.js","JWT", "MongoDB"],
      liveLink: "spectacular-cannoli-29ddb1.netlify.app",
      codeLink: "https://github.com/DhanaBalan2001/Expense-Tracker-Frontend",
      category: "fullstack"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className={`projects-container ${isDarkMode ? 'dark' : ''}`}>
        <div className="projects-header">
          <div>
            <motion.h1
              className="projects-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h1>     
            <motion.p
              className="projects-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Turning Ideas into Reality | Explore My Latest Digital Creations
            </motion.p>
          </div>
          <div className="custom-select">
            <button
              className="select-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
            {isDropdownOpen && (
              <div className="select-options">
                <div className="option" onClick={() => {setFilter('all'); setIsDropdownOpen(false)}}>All</div>
                <div className="option" onClick={() => {setFilter('frontend'); setIsDropdownOpen(false)}}>Frontend</div>
                <div className="option" onClick={() => {setFilter('backend'); setIsDropdownOpen(false)}}>Backend</div>
                <div className="option" onClick={() => {setFilter('fullstack'); setIsDropdownOpen(false)}}>Full Stack</div>
              </div>
            )}
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
                loading="lazy"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={typeof project.codeLink === 'string' ? project.codeLink : project.codeLink[0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;