import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDna, FaMicroscope, FaFlask, FaAtom, FaRocket, FaBrain, FaBars, FaTimes, FaWordpress, FaMobileAlt, FaPaintBrush, FaHeadset, FaBuilding, FaFileAlt, FaBullseye, FaShoppingCart, FaMagic } from 'react-icons/fa';
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
      icon: <FaWordpress />,
      title: 'WordPress Websites',
      description: 'Beta Tech Consulting service to design and develop WordPress websites is a collaborative process that involves an initial consultation to understand the client\'s goals and preferences, website design, development, testing, and launch. The team uses WordPress to create a responsive, scalable, and optimized website that reflects the client\'s brand and incorporates features as needed. Beta Tech Consulting also provides ongoing maintenance and support services to ensure that the website remains up-to-date and secure.',
      color: '#00d4ff'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile-Responsive Websites',
      description: 'Experts in designing and converting your key mobile audience. Our team of creatives will always consider the most optimal resolutions and device sizes for the design of your website interface. Mobile-first, tablet-responsive, and cross-browser tested is what you can expect from working with our expert web designers.',
      color: '#ff0080'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Custom Design',
      description: 'Tired of boring old themes applied for your company website? Our team will never start your project from any theme or previous website design. All designs crafted by Beta Tech Consulting are custom and unique. Stand apart from your competition with a custom bespoke website designed to tell your unique story.',
      color: '#00ff88'
    },
    {
      icon: <FaHeadset />,
      title: 'Website Support',
      description: 'Beta Tech Consulting offers website support and maintenance services, including updates and backups, security measures, hosting on our servers, and technical support. These services are designed to keep client websites up-to-date, secure, and running smoothly, while freeing clients from the hassle of managing their website themselves.',
      color: '#ffd700'
    },
    {
      icon: <FaBuilding />,
      title: 'Corporate Websites',
      description: 'Beta Tech Consulting service to design and develop corporate websites involves an initial consultation to understand the client\'s business goals and website requirements, website design that incorporates the client\'s brand elements and focuses on user experience, website development using WordPress and incorporation of necessary features, and content creation. The end result is a custom website that reflects the client\'s brand and meets their specific corporate needs.',
      color: '#ff6b6b'
    },
    {
      icon: <FaFileAlt />,
      title: 'Brochure Websites',
      description: 'Our brochure websites are classy, eye-catching, and speak to your customers. We design and develop responsive websites to feature your products and services in sync with the latest design trends, your brand, and your target audience.',
      color: '#a78bfa'
    },
    {
      icon: <FaBullseye />,
      title: 'Landing Pages',
      description: 'We craft stunning effective landing pages that have one goal in mind – bringing your CTA (Call to Action) to your customer. Conversion, testing, improvement. We learn and adapt to minimize distractions as we smoothly convert your viewers into your paying customers.',
      color: '#4ade80'
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Websites',
      description: 'With the growth of online shopping, e-commerce websites are in high demand. Businesses selling products or services can create a website to showcase their offerings and allow customers to purchase online.',
      color: '#f59e0b'
    },
    {
      icon: <FaMagic />,
      title: 'Animated Website',
      description: 'Experience the power of a dynamic online presence with Beta Tech Consulting Animated Websites. Our team of skilled designers and developers can help bring your website to life with stunning graphics and seamless animations that captivate your audience. By creating an engaging user experience, you can boost your brand\'s online presence, increase conversions, and stay ahead of the competition.',
      color: '#ec4899'
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
            <img src="/betatechlogo-removebg-preview.png" alt="Beta Tech Consulting" className="nav-logo-image" />
          </motion.div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#industries" onClick={() => setIsMenuOpen(false)}>Industries</a>
            <a href="#insights" onClick={() => setIsMenuOpen(false)}>Insights</a>
            <a href="#careers" onClick={() => setIsMenuOpen(false)}>Careers</a>
            <motion.button 
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
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
          <motion.blockquote
            className="hero-quote"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Best custom websites that drive business growth.
          </motion.blockquote>
          
          <motion.p
            className="quote-author"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
          </motion.p>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
    
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

      {/* Contact Section */}
      <section className="contact" id="contact">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Create Your New <span className="gradient-text">Project</span> with Beta Tech Consulting
          </motion.h2>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <motion.div
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  placeholder="Your name*"
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Your e-mail*"
                  required
                />
              </motion.div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Tell us about your project…"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">I'm interested in...</label>
              <div className="checkbox-grid">
                {[
                  'Branding',
                  'Web Design',
                  'Packaging',
                  'Graphic Design',
                  'UI/UX',
                  'Video Production',
                  'Experiential',
                  'Brand Assets',
                  'Decks'
                ].map((service, index) => (
                  <motion.label
                    key={index}
                    className="checkbox-label"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <input type="checkbox" value={service} />
                    <span className="checkbox-text">{service}</span>
                  </motion.label>
                ))}
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
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
            <p>Accelerating your grouth.</p>
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
          <p>&copy; 2025 Beta Tech Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
