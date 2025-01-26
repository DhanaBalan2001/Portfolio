import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true });
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
 
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      link: 'mailto:dana7010276463@gmail.com',
      animation: { opacity: 1, x: 0 }
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/DhanaBalan2001',
      animation: { opacity: 1, x: 0 }
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/dhana-balan-k-759611250/',
      animation: { opacity: 1, x: 0 }
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    emailjs.sendForm(
      'service_la5oi1e',
      'template_k8go2aq',
      formRef.current,
      '7j8z5avTWJ3rbnKRt'
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    })
    .catch((error) => {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    });
  };

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Feel free to reach out - I'd love to hear from you!</p>
          </div>
          <Row className="contact-row justify-content-center align-items-center">
            <Col lg={12} md={12}>
              <div className="form-wrapper">
                <motion.form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={sendEmail}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <Row className="justify-content-center align-items-center input-row">
                    <Col md={6}>
                      <div className="form-group text-center input-wrapper">
                        <input
                          type="text"
                          className={`form-input text-center ${focused.name ? 'focused' : ''}`}
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          onFocus={() => handleFocus('name')}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group text-center input-wrapper">
                        <input
                          type="email"
                          className={`form-input text-center ${focused.email ? 'focused' : ''}`}
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          onFocus={() => handleFocus('email')}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="form-group text-center input-wrapper">
                    <input
                      type="text"
                      className={`form-input text-center ${focused.subject ? 'focused' : ''}`}
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      onFocus={() => handleFocus('subject')}
                      required
                    />
                  </div>
                  <div className="form-group text-center input-wrapper">
                    <textarea
                      className={`form-textarea text-center ${focused.message ? 'focused' : ''}`}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => handleFocus('message')}
                      required
                    ></textarea>
                  </div>
                  <div className="button-wrapper">
                    <motion.button
                      type="submit"
                      className={`submit-btn ${status.type}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={status.type === 'loading'}
                    >
                      {status.message || 'Send Message'}
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col xs={12}>
              <div className="bottom-icons-container">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bottom-icon-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="bottom-icon">
                      {info.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;