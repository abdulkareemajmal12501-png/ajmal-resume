import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    { name: 'Website Development', category: 'Frontend', logo: '/images/skills/website.svg' },
    { name: 'UI/UX Design', category: 'Frontend', logo: '/images/skills/uiux.svg' },
    { name: 'HTML', category: 'Frontend', logo: '/images/skills/html.svg' },
    { name: 'CSS', category: 'Frontend', logo: '/images/skills/css.svg' },
    { name: 'Python', category: 'Backend', logo: '/images/skills/python.svg' },
    { name: 'Node.js', category: 'Backend', logo: '/images/skills/nodejs.svg' },
    { name: 'Supabase', category: 'Backend', logo: '/images/skills/supabase.svg' },
    { name: 'MS Packages', category: 'Tools', logo: '/images/skills/mspackages.svg' },
    { name: 'Git', category: 'Tools', logo: '/images/skills/git.svg' },
    { name: 'GitHub', category: 'Tools', logo: '/images/skills/github.svg' },
    { name: 'VS Code', category: 'Tools', logo: '/images/skills/vscode.svg' },
    { name: 'Data Entry', category: 'AI & Other', logo: '/images/skills/dataentry.svg' },
    { name: 'Prompt Engineering', category: 'AI & Other', logo: '/images/skills/prompt.svg' },
    { name: 'AI Tools', category: 'AI & Other', logo: '/images/skills/ai.svg' },
];
const certificates = [
    { title: 'Python Programming', issuer: 'Kaggle', subtitle: 'Professional proficiency in Python fundamentals' },
    { title: '5-Day AI Agents Intensive', issuer: 'Google & Kaggle', subtitle: 'Real-world autonomous agent design' },
    { title: 'AI Intensive Badge', issuer: 'Kaggle', subtitle: 'Advanced AI workflows and model integration' },
];
const contacts = [
    { label: 'Email', icon: 'mail', href: 'mailto:abdulkareemajmal12501@gmail.com' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/abdul-reem-ajmal-12b256335' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/abdulkareemajmal12501-png' },
    { label: 'Kaggle', icon: 'kaggle', href: 'https://www.kaggle.com/abdulkarimajmal' },
    { label: 'Fiverr', icon: 'fiverr', href: 'https://fiverr.com/users/abdulkarimajmal' },
];
const skillColorMap = {
    Frontend: '#00f6ff',
    Backend: '#a78bfa',
    Tools: '#f472b6',
    'AI & Other': '#34d399',
};
const contactColorMap = {
    mail: '#00f6ff',
    linkedin: '#0ea5e9',
    phone: '#10b981',
    location: '#f59e0b',
    github: '#8b5cf6',
    kaggle: '#20beff',
    fiverr: '#f97316',
};
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
        codeHref: 'https://github.com/abdulkareemajmal12501-png/wanderlustguidewebsite',
    },
    {
        title: 'JMC-APP – UI/UX Design Framework',
        description: 'Comprehensive Figma prototype for a mobile application framework featuring modern UI/UX design principles for seamless user interactions.',
        technologies: 'Figma, UI/UX Design',
        purpose: 'To deliver a polished design system and interactive prototype for application development, emphasizing intuitive navigation and visual consistency.',
        href: 'https://www.figma.com/design/zFPlp8V2U25T5RgZMgqIgO/JMC-APP?node-id=2-919&t=qAuaQpngDm4JiWx1-1',
    },
    {
        title: 'Gesturecargame',
        description: 'A browser-based jumping game controlled using hand gestures via webcam.',
        technologies: 'HTML, CSS, JavaScript, MediaPipe',
        purpose: 'To create an interactive browser game that uses hand gestures via webcam input, demonstrating real-time computer vision using MediaPipe.',
        href: 'https://guesturejumpgame.netlify.app/',
        codeHref: 'https://github.com/abdulkareemajmal12501-png/gesture-car-game',
    },
];
function useTypewriter(lines, speed = 35) {
    const [displayText, setDisplayText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    useEffect(() => {
        if (currentLine >= lines.length)
            return;
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
function clamp(items, value) {
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
    return (_jsxs("div", { className: "page-shell", children: [_jsx("div", { className: "background-glow", "aria-hidden": "true" }), _jsx(MatrixRain, {}), _jsxs("header", { className: "topbar", children: [_jsx("a", { className: "brand", href: "#home", children: "Abdul Kareem Ajmal" }), _jsxs("nav", { className: `nav-links ${menuOpen ? 'open' : ''}`, "aria-label": "Main navigation", children: [_jsx("a", { href: "#home", onClick: () => setMenuOpen(false), children: "Home" }), _jsx("a", { href: "#about", onClick: () => setMenuOpen(false), children: "About" }), _jsx("a", { href: "#skills", onClick: () => setMenuOpen(false), children: "Skills" }), _jsx("a", { href: "#certificates", onClick: () => setMenuOpen(false), children: "Certificates" }), _jsx("a", { href: "#contact", onClick: () => setMenuOpen(false), children: "Contact" }), _jsx("a", { href: "#projects", onClick: () => setMenuOpen(false), children: "Projects" })] }), _jsxs("div", { className: "nav-actions", children: [_jsx("a", { className: "resume-pill", href: "/resume.pdf", download: true, children: "Resume" }), _jsxs("button", { className: "burger", onClick: () => setMenuOpen((prev) => !prev), "aria-label": "Toggle menu", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] })] }), _jsxs("main", { children: [_jsx("section", { id: "home", className: "hero section-fade", children: _jsxs(motion.div, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: 'easeOut' }, className: "hero-grid", children: [_jsxs("div", { className: "hero-copy", children: [_jsx("span", { className: "eyebrow", children: "Hello, I'm Abdul Kareem Ajmal." }), _jsx("h1", { children: "Building bright digital experiences for web and AI." }), _jsxs("div", { className: "typewriter-line", children: [_jsxs("span", { children: ["Role: ", visibleRole] }), _jsx("span", { className: "cursor", "aria-hidden": "true", children: "|" })] }), _jsx("p", { className: "hero-blurb", children: "I create neon-inspired, responsive portfolios and scalable applications that feel powerful, polished and light." }), _jsxs("div", { className: "hero-actions", children: [_jsx("a", { className: "btn btn-primary", href: "#projects", children: "Work With Me" }), _jsx("a", { className: "btn btn-secondary", href: "/resume.pdf", download: true, children: "Download Resume" }), _jsx("a", { className: "btn btn-secondary", href: "/resume.pdf", target: "_blank", rel: "noreferrer", children: "View Resume" })] }), _jsxs("div", { className: "quick-links", children: [_jsx("a", { href: "https://github.com/abdulkareemajmal12501-png", target: "_blank", rel: "noreferrer", children: "GitHub" }), _jsx("a", { href: "https://fiverr.com/users/abdulkarimajmal", target: "_blank", rel: "noreferrer", children: "Fiverr" })] })] }), _jsxs(motion.div, { className: "hero-portrait", initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.1, ease: 'easeOut' }, children: [_jsxs("div", { className: "ring-wrap", "aria-hidden": "true", children: [_jsx("div", { className: "neon-ring" }), _jsx("div", { className: "neon-ring inner" })] }), _jsx("div", { className: "portrait-card", children: _jsx("img", { src: "/profile.png", alt: "Abdul Kareem Ajmal profile photo" }) })] })] }) }), _jsxs("section", { id: "about", className: "section section-fade", children: [_jsxs("div", { className: "section-header", children: [_jsx("span", { children: "About Me" }), _jsx("h2", { children: "Passion, learning, and modern tech craft." })] }), _jsxs("div", { className: "about-grid", children: [_jsx("div", { className: "about-copy", children: _jsx("pre", { className: "bio-text", "aria-label": "Biography text", children: typedBio || 'Loading biography...' }) }), _jsxs("div", { className: "stat-cards", children: [_jsxs("article", { className: "stat-card", children: [_jsx("h3", { children: "Education" }), _jsx("p", { children: "Final-year Computer Science student at Jamal Mohamed College." })] }), _jsxs("article", { className: "stat-card", children: [_jsx("h3", { children: "Focus" }), _jsx("p", { children: "Full-Stack Development, AI Integration, prompt engineering and design." })] }), _jsxs("article", { className: "stat-card", children: [_jsx("h3", { children: "Passion" }), _jsx("p", { children: "Crafting intuitive interfaces, clean code, and intelligent automation." })] })] })] })] }), _jsxs("section", { id: "skills", className: "section section-fade", children: [_jsxs("div", { className: "section-header", children: [_jsx("span", { children: "Skills" }), _jsx("h2", { children: "Tools and strengths I bring to every project." })] }), _jsx("div", { className: "skill-groups", children: ['Frontend', 'Backend', 'Tools', 'AI & Other'].map((category) => (_jsxs("div", { className: "skill-group", children: [_jsx("h3", { className: "skill-category-title", children: category }), _jsx("div", { className: "skill-grid", children: skills
                                                .filter((skill) => skill.category === category)
                                                .map((skill) => (_jsxs(motion.div, { className: "skill-pill", style: { '--skill-color': skillColorMap[skill.category] }, whileHover: { y: -6, scale: 1.03 }, transition: { type: 'spring', stiffness: 260, damping: 18 }, children: [_jsx("img", { className: "skill-logo", src: skill.logo, alt: skill.name }), skill.name] }, skill.name))) })] }, category))) })] }), _jsxs("section", { id: "certificates", className: "section section-fade", children: [_jsxs("div", { className: "section-header", children: [_jsx("span", { children: "Certificates" }), _jsx("h2", { children: "Verified achievements and AI credentials." })] }), _jsx("div", { className: "cert-grid", children: certificates.map((cert) => (_jsxs(motion.article, { className: "cert-card", whileHover: { rotateX: 4, rotateY: 6, scale: 1.02 }, transition: { duration: 0.25 }, children: [_jsx("div", { className: "cert-label", children: cert.issuer }), _jsx("h3", { children: cert.title }), _jsx("p", { children: cert.subtitle })] }, cert.title))) })] }), _jsxs("section", { id: "projects", className: "section section-fade", children: [_jsxs("div", { className: "section-header", children: [_jsx("span", { children: "Projects" }), _jsx("h2", { children: "Recent work and showcase highlights." })] }), _jsx("div", { className: "project-grid", children: projects.map((project) => (_jsxs(motion.article, { className: "project-card", whileHover: { y: -6 }, transition: { duration: 0.2 }, children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.description }), _jsxs("div", { className: "project-field", children: [_jsx("strong", { children: "Technologies Used" }), _jsx("p", { children: project.technologies })] }), _jsxs("div", { className: "project-field", children: [_jsx("strong", { children: "Purpose of Website" }), _jsx("p", { children: project.purpose })] }), _jsxs("div", { className: "project-links", children: [_jsx("a", { href: project.href, target: "_blank", rel: "noreferrer", children: "Live Demo" }), 'codeHref' in project && project.codeHref && (_jsx("a", { href: project.codeHref, target: "_blank", rel: "noreferrer", children: "View Code" }))] })] }, project.title))) })] }), _jsxs("section", { id: "contact", className: "section section-fade contact-section", children: [_jsxs("div", { className: "section-header", children: [_jsx("span", { children: "Contact" }), _jsx("h2", { children: "Reach out and connect on your favorite platform." })] }), _jsx(motion.div, { className: "contact-grid", initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-120px" }, variants: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.15
                                        }
                                    }
                                }, children: contacts.map((contact, index) => {
                                    return (_jsxs(motion.a, { className: "contact-card", style: { '--contact-color': contactColorMap[contact.icon] }, "data-platform": contact.icon, href: contact.href, target: "_blank", rel: "noreferrer", variants: {
                                            hidden: {
                                                opacity: 0
                                            },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeInOut",
                                                    delay: index * 0.08
                                                }
                                            }
                                        }, whileHover: {
                                            y: -16,
                                            scale: 1.08,
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 22
                                            }
                                        }, whileTap: {
                                            scale: 0.96
                                        }, transition: { type: "spring" }, children: [_jsxs("div", { className: "contact-icon-wrap", "aria-hidden": "true", children: [_jsx("div", { className: "contact-icon-ring outer" }), _jsx("div", { className: "contact-icon-ring inner" }), _jsx("div", { className: "contact-icon", children: _jsx("img", { src: `/images/${contact.icon}.svg`, alt: "", width: "64", height: "64" }) })] }), _jsx("h3", { children: contact.label })] }, contact.label));
                                }) })] })] }), _jsxs("footer", { className: "footer", children: [_jsxs("div", { className: "footer-actions", children: [_jsx("a", { className: "resume-pill", href: "/resume.pdf", download: true, children: "Download Resume" }), _jsx("a", { className: "resume-pill", href: "/resume.pdf", target: "_blank", rel: "noreferrer", children: "View Resume" })] }), _jsx("p", { children: "\u00A9 created by Abdul Kareem Ajmal M , contact if you want like this  " })] })] }));
}
export default App;
