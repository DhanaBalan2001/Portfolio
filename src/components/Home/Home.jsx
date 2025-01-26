import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Home = () => {
  const { isDarkMode } = useTheme();

  const handleResumeClick = () => {
    window.open('/assets/Resume.pdf', '_blank');
  };

  return (
    <motion.div 
      className="home-container container-fluid" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="row min-vh-100 align-items-center">
        <motion.div 
          className="home-content col-lg-7 col-md-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="home-heading">
            <motion.h1
              className="display-4 fw-bold"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 120 }}
            >
              Hi, I'm <motion.span
                whileHover={{ scale: 1.2, color: isDarkMode ? "#ffffff" : "#000000" }}
                transition={{ duration: 0.3 }}
                animate={{ rotate: [0, 5, -5, 0] }}
              >
                {'<'}Dhana Balan K{'/>'}
              </motion.span>
            </motion.h1>
            
            <motion.h2
              className="h2 mb-4"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 120 }}
            >
              Junior Web Developer
            </motion.h2>
            
            <div className="subtitle-container">
              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                "Junior Web Developer | Skilled in crafting responsive MERN stack applications."
              </motion.p>
            </div>
          </div>
          
          <motion.div 
            className="home-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button 
              onClick={handleResumeClick}
              className="btn btn-primary btn-lg me-3"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(0,0,0,0.2)" }}
              whileTap={{ scale: 0.9 }}
            >
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="home-image col-lg-5 col-md-12 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="/assets/images/image 9.png" 
            alt="Profile"
            className="profile-image img-fluid"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;