import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import myimg from './nvspradeep.jpeg';
import asulogo from './ASU-logo.png';
import jntuklogo from './Jntuk-logo.png';
import asuimg from './asuimg.jpeg';
import CognizantLogo from './Cognizant-logo.jpeg';
import globallogo from './globalappslogo.jpeg';
import { FiDownload } from 'react-icons/fi';

const projects = [
  {
    title: 'Chatbot Flow Builder',
    description: 'Built a Chatbot Flow Builder using React, React Flow, and JavaScript with a drag-and-drop UI for designing chatbot logic. Managed code via GitHub and deployed seamlessly on Vercel, ensuring responsive design, smooth user experience, and clean code practices.',
    link: 'https://github.com/VenkataSaiPradeep/Chatbot-flow-builder',
  },
  {
    title: 'AI Resume Optimizer',
    description: 'Developed a full-stack AI-powered platform that analyzes resumes and provides career feedback, reducing review time by 90% through automated suggestions.Integrated GroqAPI to deliver personalized resume feedback aligned with job descriptions, increasing user satisfaction scores by 35%.',
    link: 'https://github.com/VenkataSaiPradeep/AI-Resume-Optimizer',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Implemented Machine Learning classification algorithms like Logistic Regression, Naive Bayes and Decision Tree using Python, achieving 90% accuracy. Optimized model training and evaluation using scikit-learn and pandas, reducing data preprocessing time by 40% and improving model inference speed by 30%.',
    link: 'https://github.com/VenkataSaiPradeep/Heart-Disease-Prediction-Using-Machine-Learning',
  },
];

const skills = [
  'HTML/CSS',
  'React',
  'Next.js',
  'Python',
  'FastAPI',
  'C/C++',
  'C#',
  'Node.js',
  'Tailwind CSS',
  'AWS',
  'PostgreSQL',
  'Django',
  'Java',
  'Spring Boot',
  'Docker',
  'JavaScript',
  'TypeScript',
  'GraphQL',
  'REST APIs',
  'Git',
  'My SQL',
  'Agile',
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      {/* Fixed Top Navigation */}
      <nav className="top-nav">
        <button className="nav-toggle" onClick={() => setShowMobileNav(!showMobileNav)}>☰
        </button>
       <div className="nav-left">
          <span className="nav-brand"><a href="#">Portfolio</a></span>
       </div>
       <div className="nav-right">
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme" className="theme-btn">
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  </div>
      </nav>
      {showMobileNav && (
  <div className="mobile-nav show">
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
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
    <div className="about-image">
      <img src={myimg} alt="Venkata Sai Pradeep Nagisetti" />
    </div>
    <div className="about-content">
      <h3>
        Hi, I'm <span className="gradient-text">Venkata Sai Pradeep Nagisetti</span>
      </h3>
      <p className="subtitle">
        Software Engineer | Full-Stack Developer | Cloud Enthusiast
      </p>
      <p className="about-description">
        I'm a passionate software engineer with hands-on experience in building scalable web applications,
        designing robust system architectures, and optimizing performance. I specialize in crafting
        end-to-end solutions using technologies like <strong>React</strong>, <strong>Python</strong>, <strong>TypeScript</strong>,
        <strong> AWS</strong>, and <strong>PostgreSQL</strong>. I enjoy transforming ideas into
        impactful products, collaborating across teams, and continuously learning new technologies.
      </p>
       {/* HERO 
      <div className="about-highlights">
        <div>
          <h4>💻 1+ Years of Experience</h4>
          <p>Delivering full-stack solutions across diverse industries</p>
        </div>
        <div>
          <h4>🚀 Performance Optimization</h4>
          <p>Improved system efficiency, saving $3M+ annually</p>
        </div>
        <div>
          <h4>🌐 Cloud Native</h4>
          <p>Built and deployed applications using AWS & Docker</p>
        </div>
      </div>
       */}
      <a
        href="https://drive.google.com/file/d/1LbrYGzkMXPjuP45VpXr9UYYV3Zjhbh1X/view?usp=sharing"
        download
        className="download-btn"
      >
        <FiDownload style={{ marginRight: '8px' }} /> Download Resume
      </a>
    <div className="about-buttons">
      <a href="https://linkedin.com/in/venkata-sai-pradeep-n/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <FaLinkedin /></a>
    <a href="https://github.com/VenkataSaiPradeep" target="_blank" rel="noopener noreferrer" title="GitHub">
    <FaGithub /></a>
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
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div className="tag" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </section>
          <section id="education">
            <h2>Education</h2>
            <div className="education-list">
    <div className="education-item">
      <div className="edu-logo">
        <img
          src={asulogo}
          alt="University Logo"
        />
      </div>
      <div className="edu-info">
        <h4>Arizona State University | Tempe, AZ</h4>
        <p className="degree-year">Master of Science in Computer Software Engineeering | 2022 - 2024</p>
        <p className="courses">
          Relevant Courses: Advanced Data Structures & Algorithms, Foundations of Software Engineering, Mobile Systems
        </p>
      </div>
    </div>

    <div className="education-item">
      <div className="edu-logo">
        <img
          src={jntuklogo}
          alt="Tech University Logo"
        />
      </div>
      <div className="edu-info">
        <h4>Jawaharlal Nehru Technological University | Kakinada, India</h4>
        <p className="degree-year">Bachelor of Technology in Electronics and Communication Engineering | 2018 - 2022</p>
        <p className="courses">
          Relevant Courses: Machine Learning, Deep Learning, Natural Language Processing, Data Mining
        </p>
      </div>
    </div>
  </div>
          </section>
<section id="experience" className="timeline">
  <h2>Experience</h2>
  {[
    {
       role: 'Software Developer : SantaClara, CA',
      company: 'Global Apps Inc',
      duration: 'Mar 2025 – Present',
      logo:  globallogo,
      bullets: [
        'Designed and deployed scalable REST APIs using Python (FastAPI), optimizing algorithm performance and reducing API latency by 25% through asynchronous processing and data caching.',
        'Collaborated with data scientists to productionize ML pipelines for user behavior analytics, boosting A/B test iteration speed by 40%.',
        'Improved team collaboration by implementing efficient Git workflows, decreasing merge conflicts by 30%.',
      ],
    },
    {
      role: 'Software Engineer : Tempe, AZ',
      company: 'Arizona State University',
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
       role: 'Programmer Analyst Intern : Remote, India',
      company: 'Cognizant Technology Solutions',
      duration: 'Feb 2022 – July 2022',
      logo: CognizantLogo,
      bullets: [
        'Developed a scalable Banking Management System using Java, meeting all functional and non-functional spefications.',
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
        <div className="company">{exp.company} • {exp.duration}</div>
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
<section id="projects">
    <h2>Projects</h2>
          <div className="grid">
            {projects.map((proj, index) => (
              <div className="card" key={index}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} className="btn">View Code</a>
              </div>
            ))}
          </div>
</section>
<section id="contact">
  <h2>Let’s Connect</h2>
  {/* Contact Form */}
      <div className="contact-form-box">
        {submitted && (
              <div className="success-message">✅ Message sent successfully!</div>
            )}
        <form action="https://formspree.io/f/xpwqlkkg" method="POST" className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
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
