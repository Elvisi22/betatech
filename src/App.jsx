import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDna, FaMicroscope, FaFlask, FaAtom, FaRocket, FaBrain, FaBars, FaTimes } from 'react-icons/fa';
import { GiDna2, GiChemicalDrop } from 'react-icons/gi';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <FaDna />,
      title: 'Genetic Engineering',
      description: 'Cutting-edge gene editing and CRISPR technologies for advanced therapeutic solutions.',
      color: '#00d4ff'
    },
    {
      icon: <FaMicroscope />,
      title: 'Research & Development',
      description: 'State-of-the-art laboratory facilities for breakthrough betatechconsulting innovations.',
      color: '#ff0080'
    },
    {
      icon: <FaFlask />,
      title: 'Molecular Biology',
      description: 'Advanced molecular analysis and protein engineering for medical breakthroughs.',
      color: '#00ff88'
    },
    {
      icon: <FaAtom />,
      title: 'Nanotechnology',
      description: 'Precision nanoscale engineering for targeted drug delivery systems.',
      color: '#ffd700'
    },
    {
      icon: <FaBrain />,
      title: 'Bioinformatics',
      description: 'AI-powered data analysis for genomic research and personalized medicine.',
      color: '#ff6b6b'
    },
    {
      icon: <GiChemicalDrop />,
      title: 'Biochemistry',
      description: 'Innovative chemical processes for sustainable betatechconsulting solutions.',
      color: '#a78bfa'
    }
  ];

  return (
    <div className="app">
      {/* Navigation Menu */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
          >
            <GiDna2 className="nav-logo-icon" />
            <span>Beta <span className="gradient-text">Tech Consulting</span></span>
          </motion.div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a>
            <a href="#careers" onClick={() => setIsMenuOpen(false)}>Careers</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <motion.button 
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      {/* Animated Background */}
      <div className="bg-gradient"></div>
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.div
            className="logo-container"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <GiDna2 className="logo-icon" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Beta <span className="gradient-text">Tech Consulting</span>
          </motion.h1>
          
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Pioneering the Future of Technology Consulting
          </motion.p>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p>Transforming science into solutions through innovation, research, and cutting-edge technology.</p>
          </motion.div>

          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="button-icon" />
            Explore Our Solutions
          </motion.button>
        </motion.div>

        {/* Animated DNA Helix */}
        <div className="dna-helix">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="dna-strand"
              animate={{
                rotate: 360,
                y: [0, 20, 0]
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, delay: i * 0.2 }
              }}
              style={{ top: `${i * 10}%` }}
            />
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="services">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="gradient-text">Expertise</span>
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 60px ${service.color}40`
              }}
            >
              <motion.div
                className="service-icon"
                style={{ color: service.color }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.div
                className="card-glow"
                style={{ background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <motion.div
          className="stats-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Research Projects' },
            { number: '98%', label: 'Success Rate' },
            { number: '50+', label: 'Countries Served' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Beta Tech Consulting</h3>
            <p>Innovating for a better tomorrow through advanced technology consulting solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@betatechconsulting.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Location: Innovation District</p>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Beta Tech Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
