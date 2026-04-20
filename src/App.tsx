import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';

const roles = ['Full-Stack Web Developer', 'AI Enthusiast', 'Prompt Engineering Specialist', 'Fiverr Freelancer'];
const bioParts = [
  'I am Abdul Kareem Ajmal M, a dedicated tech enthusiast and final-year Computer Science student at Jamal Mohamed College. I have a deep-rooted passion for creating clean, efficient, and user-centric digital solutions. My journey in tech is driven by curiosity and a constant urge to learn new frameworks and tools.',
  'Currently, I am specializing in Full-Stack Web Development and AI Integration. My academic background has provided me with a strong foundation in Data Structures, SQL, and Python. I thrive in environments where I can bridge the gap between complex backend logic and intuitive frontend design.',
  'My dedication to continuous learning has led me to earn professional certifications from Google and Kaggle. I have mastered Python Programming and completed an intensive course in AI Agents, which allows me to build autonomous AI systems. I also take pride in my freelance work on Fiverr, where I provide high-quality Prompt Engineering and Graphic Design services.',
];
const skills = [
  'Website Development',
  'UI/UX Design',
  'Python',
  'HTML',
  'CSS',
  'Data Entry',
  'MS Packages',
  'Prompt Engineering',
  'AI Tools',
];
const certificates = [
  { title: 'Python Programming', issuer: 'Kaggle', subtitle: 'Professional proficiency in Python fundamentals' },
  { title: '5-Day AI Agents Intensive', issuer: 'Google & Kaggle', subtitle: 'Real-world autonomous agent design' },
  { title: 'AI Intensive Badge', issuer: 'Kaggle', subtitle: 'Advanced AI workflows and model integration' },
];

const contacts = [
  { label: 'Email', value: 'abdulkareemajmal12501@gmail.com', icon: 'mail', href: 'mailto:abdulkareemajmal12501@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/abdul-reem-ajmal-12b256335', icon: 'linkedin', href: 'https://linkedin.com/in/abdul-reem-ajmal-12b256335' },
  { label: 'Phone', value: '+91 63847 55690', icon: 'phone', href: 'tel:+916384755690' },
  { label: 'Location', value: 'Jamal Mohamed College, Trichy', icon: 'location', href: '#' },
  { label: 'GitHub', value: 'github.com/abdulkareemajmal12501-png', icon: 'github', href: 'https://github.com/abdulkareemajmal12501-png' },
  { label: 'Kaggle', value: 'kaggle.com/abdulkarimajmal', icon: 'kaggle', href: 'https://kaggle.com/abdulkarimajmal' },
  { label: 'Fiverr', value: 'fiverr.com/users/abdulkarimajmal', icon: 'fiverr', href: 'https://fiverr.com/users/abdulkarimajmal' },
];
const projects = [
  {
    title: 'Time Net Cafe Website',
    description: 'Developed a website for Time Net cafe, a Xerox shop, using AI and HTML to enhance online service discovery and contact flow.',
    technologies: 'AI, HTML',
    purpose: 'To enhance customer experience for Time Net cafe\'s online services, making it easy to contact the shop via a simple website.',
    href: 'https://sites.google.com/view/timenetcafeonlineservice24/home',
  },
  {
    title: 'Wanderlust Guide – Interactive Travel Portal',
    description: 'A modern, responsive travel web application designed to simplify trip planning and destination discovery with intuitive exploration features.',
    technologies: 'React.js, Tailwind CSS, Supabase, Netlify',
    purpose: 'To provide a centralized digital platform for travel enthusiasts to discover and plan journeys efficiently through an intuitive and visually engaging experience.',
    href: 'https://poetic-pothos-c3a312.netlify.app/',
  },
  {
    title: 'JMC-APP – UI/UX Design Framework',
    description: 'Comprehensive Figma prototype for a mobile application framework featuring modern UI/UX design principles for seamless user interactions.',
    technologies: 'Figma, UI/UX Design',
    purpose: 'To deliver a polished design system and interactive prototype for application development, emphasizing intuitive navigation and visual consistency.',
    href: 'https://www.figma.com/design/zFPlp8V2U25T5RgZMgqIgO/JMC-APP?node-id=2-919&t=qAuaQpngDm4JiWx1-1',
  },
];

function useTypewriter(lines: string[], speed = 35) {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    const timer = window.setTimeout(() => {
      setDisplayText((prev) => prev + line[currentChar]);
      setCurrentChar((prev) => prev + 1);
    }, speed);

    if (currentChar >= line.length) {
      window.clearTimeout(timer);
      const nextTimer = window.setTimeout(() => {
        setDisplayText((prev) => prev + '\n\n');
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 800);
      return () => window.clearTimeout(nextTimer);
    }

    return () => window.clearTimeout(timer);
  }, [currentChar, currentLine, lines, speed]);

  return displayText;
}

function clamp<T>(items: T[], value: number) {
  const index = value % items.length;
  return items[index];
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const typedBio = useTypewriter(bioParts);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3600);
    return () => window.clearInterval(interval);
  }, []);

  const currentRole = useMemo(() => roles[roleIndex], [roleIndex]);
  const visibleRole = `${currentRole}`;

  return (
    <div className="page-shell">
      <div className="background-glow" aria-hidden="true"></div>
      <MatrixRain />
      <header className="topbar">
        <a className="brand" href="#home">Abdul Kareem Ajmal</a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </nav>
        <div className="nav-actions">
          <a className="resume-pill" href="/resume.pdf" download>Resume</a>
          <button className="burger" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-fade">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="hero-grid"
          >
            <div className="hero-copy">
              <span className="eyebrow">Hello, I&apos;m Abdul Kareem Ajmal.</span>
              <h1>
                Building bright digital experiences for web and AI.
              </h1>
              <div className="typewriter-line">
                <span>Role: {visibleRole}</span>
                <span className="cursor" aria-hidden="true">|</span>
              </div>
              <p className="hero-blurb">
                I create neon-inspired, responsive portfolios and scalable applications that feel powerful, polished and light.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">Work With Me</a>
                <a className="btn btn-secondary" href="/resume.pdf" download>Download Resume</a>
                <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
              </div>
              <div className="quick-links">
                <a href="https://github.com/abdulkareemajmal12501-png" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://fiverr.com/users/abdulkarimajmal" target="_blank" rel="noreferrer">Fiverr</a>
              </div>
            </div>
            <motion.div
              className="hero-portrait"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <div className="ring-wrap" aria-hidden="true">
                <div className="neon-ring" />
                <div className="neon-ring inner" />
              </div>
              <div className="portrait-card">
                <img src="/profile.png" alt="Abdul Kareem Ajmal profile photo" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section section-fade">
          <div className="section-header">
            <span>About Me</span>
            <h2>Passion, learning, and modern tech craft.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <pre className="bio-text" aria-label="Biography text">{typedBio || 'Loading biography...' }</pre>
            </div>
            <div className="stat-cards">
              <article className="stat-card">
                <h3>Education</h3>
                <p>Final-year Computer Science student at Jamal Mohamed College.</p>
              </article>
              <article className="stat-card">
                <h3>Focus</h3>
                <p>Full-Stack Development, AI Integration, prompt engineering and design.</p>
              </article>
              <article className="stat-card">
                <h3>Passion</h3>
                <p>Crafting intuitive interfaces, clean code, and intelligent automation.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-fade">
          <div className="section-header">
            <span>Skills</span>
            <h2>Tools and strengths I bring to every project.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="skill-pill"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certificates" className="section section-fade">
          <div className="section-header">
            <span>Certificates</span>
            <h2>Verified achievements and AI credentials.</h2>
          </div>
          <div className="cert-grid">
            {certificates.map((cert) => (
              <motion.article
                key={cert.title}
                className="cert-card"
                whileHover={{ rotateX: 4, rotateY: 6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="cert-label">{cert.issuer}</div>
                <h3>{cert.title}</h3>
                <p>{cert.subtitle}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-fade">
          <div className="section-header">
            <span>Projects</span>
            <h2>Recent work and showcase highlights.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-field">
                  <strong>Technologies Used</strong>
                  <p>{project.technologies}</p>
                </div>
                <div className="project-field">
                  <strong>Purpose of Website</strong>
                  <p>{project.purpose}</p>
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">Live Website</a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-fade contact-section">
          <div className="section-header">
            <span>Contact</span>
            <h2>Reach out and connect on your favorite platform.</h2>
          </div>
          <motion.div
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {contacts.map((contact, index) => {
              return (
                <motion.a
                  key={contact.label}
                  className="contact-card"
                  data-platform={contact.icon}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 48,
                      scale: 0.85,
                      rotateZ: (index * 72)
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotateZ: 0,
                      transition: { 
                        type: "spring",
                        stiffness: 300 + (index * 20),
                        damping: 15 
                      } 
                    }
                  }}
                  whileHover={{ 
                    y: -14, 
                    scale: 1.06,
                    rotateZ: -10,
                    transition: { 
                      type: "spring", 
                      stiffness: 420,
                      damping: 18 
                    } 
                  }}
                  whileTap={{ 
                    scale: 0.94 
                  }}
                  transition={{ type: "spring" }}
                >
                  <div className="contact-icon" aria-hidden="true">
                    <img 
                      src={`/images/${contact.icon}.svg`} 
                      alt="" 
                      width="64" 
                      height="64" 
                    />
                  </div>

                  <h3>{contact.label}</h3>
                </motion.a>
              );
            })}
          </motion.div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-actions">
          <a className="resume-pill" href="/resume.pdf" download>Download Resume</a>
          <a className="resume-pill" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
        <p>© created by Abdul Kareem Ajmal M , contact if you want like this  </p>
      </footer>
    </div>
  );
}

export default App;
