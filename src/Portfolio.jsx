import React, { useState, useEffect} from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaCode, FaGraduationCap, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { FiDownload, FiMapPin, FiMail } from 'react-icons/fi';
import myimg from './nvspradeep.jpeg';
import asulogo from './ASU-logo.png';
import jntuklogo from './Jntuk-logo.png';
import asuimg from './asuimg.jpeg';
import CognizantLogo from './Cognizant-logo.jpeg';
import globallogo from './globalappslogo.jpeg';

const projects = [
  {
    title: 'Chatbot Flow Builder',
    description: 'Built a Chatbot Flow Builder using React, React Flow, and JavaScript with a drag-and-drop UI for designing chatbot logic. Managed code via GitHub and deployed seamlessly on Vercel, ensuring responsive design, smooth user experience, and clean code practices.',
    link: 'https://github.com/VenkataSaiPradeep/Chatbot-flow-builder',
    tech: ['React', 'JavaScript', 'React Flow', 'Vercel'],
  },
  {
    title: 'AI Resume Optimizer',
    description: 'Developed a full-stack AI-powered platform that analyzes resumes and provides career feedback, reducing review time by 90% through automated suggestions. Integrated GroqAPI to deliver personalized resume feedback aligned with job descriptions, increasing user satisfaction scores by 35%.',
    link: 'https://github.com/VenkataSaiPradeep/AI-Resume-Optimizer',
    tech: ['AI/ML', 'Full-Stack', 'GroqAPI', 'Python', 'React', 'LLM','RAG'],
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Implemented Machine Learning classification algorithms like Logistic Regression, Naive Bayes and Decision Tree using Python, achieving 90% accuracy. Optimized model training and evaluation using scikit-learn and pandas, reducing data preprocessing time by 40% and improving model inference speed by 30%.',
    link: 'https://github.com/VenkataSaiPradeep/Heart-Disease-Prediction-Using-Machine-Learning',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib'],
  },
];

const skills = [
  'HTML/CSS', 'React', 'Next.js', 'Python', 'FastAPI', 'C/C++', 'C#', 'Node.js',
  'Tailwind CSS', 'AWS', 'PostgreSQL', 'Django', 'Java', 'Spring Boot', 'Docker',
  'JavaScript', 'TypeScript', 'GraphQL', 'REST APIs', 'Git', 'MySQL', 'Agile',
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileNav(false);
  };

  return (
    <>
      {/* Fixed Top Navigation */}
      <nav className="top-nav">
        <button className="nav-toggle" onClick={() => setShowMobileNav(!showMobileNav)}>☰</button>
        <div className="nav-left">
          <span className="nav-brand"><a href="#about">Portfolio</a></span>
        </div>
        <div className="nav-right">
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme" className="theme-btn">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {showMobileNav && (
        <div className="mobile-nav show">
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      )}

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '70px' }}>
        {/* Theme Toggle */}
        <div className="toggle">
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* HERO */}
        <header className="hero" id='about'>
          <div className="about-wrapper">
            <div className="about-image-wrapper">
              <div className="floating-blobs">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="about-image">
              <img src={myimg} alt="Venkata Sai Pradeep Nagisetti" />
            </div>
            </div>
  
            <div className="about-content">
              <h1>
                Hi, I'm <span className="gradient-text">Venkata Sai Pradeep Nagisetti</span>
              </h1>
              <p className="subtitle">
                Software Engineer | Full-Stack Developer | Cloud Enthusiast
              </p>
              <p className="about-description">
                I'm a passionate software engineer with hands-on experience in building scalable web applications,
                designing robust system architectures, and optimizing performance. I specialize in crafting
                end-to-end solutions using technologies like <strong>React</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>,
                <strong> AWS</strong>, and <strong>PostgreSQL</strong>. I enjoy transforming ideas into
                impactful products, collaborating across teams, and continuously learning new technologies.
              </p>
              
              <a
                href="https://drive.google.com/file/d/1LbrYGzkMXPjuP45VpXr9UYYV3Zjhbh1X/view?usp=sharing"
                download
                className="download-btn"
              >
                <FiDownload style={{ marginRight: '8px' }} /> Download Resume
              </a>
              
              <div className="about-buttons">
                <a href="https://linkedin.com/in/venkata-sai-pradeep-n/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/VenkataSaiPradeep" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/nvsp/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="leetcode-icon"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <section>
            <h2><FaCode style={{ marginRight: '5px' }} />Skills & Technologies</h2>
            <div className="skills">
              {skills.map((skill, index) => (
                <div className="tag" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education">
            <h2><FaGraduationCap style={{ marginRight: '10px' }} />Education</h2>
            <div className="education-list">
              <div className="education-item">
                <div className="edu-logo">
                  <img src={asulogo} alt="Arizona State University Logo" />
                </div>
                <div className="edu-info">
                  <h4>Arizona State University | Tempe, AZ</h4>
                  <p className="degree-year">Master of Science in Computer Software Engineering | 2022 - 2024</p>
                  <p className="courses">
                    <strong>Relevant Courses:</strong> Advanced Data Structures & Algorithms, Foundations of Software Engineering, Mobile Systems
                  </p>
                </div>
              </div>

              <div className="education-item">
                <div className="edu-logo">
                  <img src={jntuklogo} alt="JNTUK University Logo" />
                </div>
                <div className="edu-info">
                  <h4>Jawaharlal Nehru Technological University | Kakinada, India</h4>
                  <p className="degree-year">Bachelor of Technology in Electronics and Communication Engineering | 2018 - 2022</p>
                  <p className="courses">
                    <strong>Relevant Courses:</strong> Data Structures & Algorithms, Object-Oriented Programming Through Java, Computer Programming Through C
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="timeline">
            <h2><FaBriefcase style={{ marginRight: '10px' }} />Experience</h2>
            {[
              {
                role: 'Software Developer',
                company: 'Global Apps Inc',
                location: 'Santa Clara, CA',
                duration: 'Mar 2025 – Present',
                logo: globallogo,
                bullets: [
                  'Designed and deployed scalable REST APIs using Python (FastAPI), optimizing algorithm performance and reducing API latency by 25% through asynchronous processing and data caching.',
                  'Collaborated with data scientists to productionize ML pipelines for user behavior analytics, boosting A/B test iteration speed by 40%.',
                  'Improved team collaboration by implementing efficient Git workflows, decreasing merge conflicts by 30%.',
                ],
              },
              {
                role: 'Software Engineer',
                company: 'Arizona State University',
                location: 'Tempe, AZ',
                duration: 'Aug 2024 – Mar 2025',
                logo: asuimg,
                bullets: [
                  'Built responsive user interfaces using React, Next.js, TypeScript, improving user engagement by 40%.',
                  'Designed custom search logic for educational content, reducing retrieval time by 60%.',
                  'Integrated Stripe API to enable subscription-based payments, increasing revenue by 25%.',
                  'Managed user authentication and data with Clerk and PostgreSQL, scaling to 500+ users.',
                ],
              },
              {
                role: 'Programmer Analyst Intern',
                company: 'Cognizant Technology Solutions',
                location: 'Remote, India',
                duration: 'Feb 2022 – July 2022',
                logo: CognizantLogo,
                bullets: [
                  'Developed a scalable Banking Management System using Java, meeting all functional and non-functional specifications.',
                  'Translated PDF-based requirements into modular OOP components, reducing manual error by 50%.',
                  'Delivered fully tested product demo with 100% pass rate on functional scenarios',
                ],
              },
            ].map((exp, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                {i % 2 !== 0 && <span className="timeline-dot" />}
                <div className="timeline-content">
                  <img src={exp.logo} alt={exp.company} className="exp-logo" />
                  <h3>{exp.role}</h3>
                  <div className="company">
                    {exp.company} • <FiMapPin style={{ display: 'inline', marginRight: '4px' }} />
                    {exp.location} • {exp.duration}
                  </div>
                  <ul>
                    {exp.bullets.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
                {i % 2 === 0 && <span className="timeline-dot" />}
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2><FaCode style={{ marginRight: '10px' }} />Featured Projects</h2>
            <div className="grid">
              {projects.map((proj, index) => (
                <div className="card" key={index}>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-tech" style={{ marginBottom: '1rem' }}>
                    {proj.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tag"
                        style={{ 
                          fontSize: '0.75rem', 
                          padding: '0.25rem 0.5rem', 
                          margin: '0.25rem 0.25rem 0.25rem 0',
                          display: 'inline-block'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={proj.link} className="btn" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ marginRight: '5px' }} />
                    View Code
                    <FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '0.8rem' }} />
                  </a>
                </div>
              ))}
            </div>
            <a href="https://github.com/VenkataSaiPradeep" className="download-btn" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ marginRight: '5px' }} />
                    More Projects
                    {/*<FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '0.8rem' }} />*/}
                  </a>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <h2><FiMail style={{ marginRight: '10px' }} />Let's Connect</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', opacity: '0.8' }}>
              Have a project in mind? Let's discuss how we can work together.
            </p>
            
            {/* Contact Form */}
            <div className="contact-form-box">
              {submitted && (
                <div className="success-message" style={{ 
                  padding: '1rem', 
                  marginBottom: '1rem', 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                  border: '1px solid rgba(34, 197, 94, 0.3)', 
                  borderRadius: '8px',
                  color: '#22c55e',
                  textAlign: 'center'
                }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form action="https://formspree.io/f/xpwqlkkg" method="POST" className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  name="name"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  required 
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                  name="message"
                  required 
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="made-with-love">
              Made with <span className="heart">❤️</span> by <strong>Venkata Sai Pradeep Nagisetti</strong>
            </div>
          </section>
        </header>
      </div>
    </>
  );
};

export default Portfolio;
