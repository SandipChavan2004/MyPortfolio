import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
    {
        id: '01',
        title: 'Smart Village Mart',
        category: 'Full-Stack E-commerce',
        description:
            'A full-stack e-commerce platform connecting rural shopkeepers with customers to digitize local businesses. Features product listings, cart management, and order tracking.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/SandipChavan2004/smart_village_mart.git',
        image: '/assets/svm.jpeg',
        accent: '#6366f1',
    },
    {
        id: '02',
        title: 'Rudra — AI Voice Assistant',
        category: 'AI / Python',
        description:
            'An AI-powered virtual voice assistant inspired by Alexa & Google Assistant. Understands natural language, performs intelligent web searches, and interacts through real-time speech.',
        tech: ['Python', 'Pyttsx3', 'SpeechRecognition', 'OpenAI API', 'ElevenLabs'],
        link: 'https://github.com/SandipChavan2004/Rudra-AI-Voice-Assistant-Python-.git',
        image: 'https://img.freepik.com/premium-photo/3d-ai-assistant-icon-artificial-intelligence-virtual-helper-logo-illustration_762678-40617.jpg',
        accent: '#ec4899',
    },
    {
        id: '03',
        title: 'TLUG — Club Website',
        category: 'Community Platform',
        description:
            'A comprehensive community website for the TKIET Linux User Group. Serves as the digital hub for members, events, announcements, member profiles, and photo galleries.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js'],
        link: 'https://github.com/SandipChavan2004/TLUG.git',
        image: '/assets/tlug.jpeg',
        accent: '#06b6d4',
    },
    {
        id: '04',
        title: 'Portfolio Website',
        category: 'Personal Project',
        description:
            'A modern, responsive portfolio with stunning animations, glassmorphism effects, and a space-themed dark design — the very site you are viewing right now.',
        tech: ['React', 'Vite', 'GSAP', 'CSS3', 'JavaScript'],
        link: '#',
        image: '/assets/portfolio.jpeg',
        accent: '#10b981',
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.12 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            {/* ── Section Header ── */}
            <div className="projects-header">
                <p className="projects-eyebrow">Selected Work</p>
                <h2 className="projects-title" data-text="Projects">
                    Featured Projects
                </h2>
                <p className="projects-lead">
                    A collection of things I've built — from full-stack platforms to AI tools.
                </p>
                <div className="projects-line" />
            </div>

            {/* ── Card Grid ── */}
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <article
                        key={project.id}
                        className="proj-card"
                        ref={(el) => (cardRefs.current[i] = el)}
                        style={{ '--accent': project.accent, animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Image */}
                        <div className="proj-image-wrap">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="proj-image"
                            />
                            <div
                                className="proj-image-overlay"
                                style={{ background: project.accent }}
                            />
                            <span className="proj-id">{project.id}</span>
                        </div>

                        {/* Body */}
                        <div className="proj-body">
                            <div className="proj-meta">
                                <span className="proj-category">{project.category}</span>
                            </div>

                            <h3 className="proj-title">{project.title}</h3>
                            <p className="proj-desc">{project.description}</p>

                            {/* Tech tags */}
                            <ul className="proj-tech">
                                {project.tech.map((t) => (
                                    <li key={t} className="proj-tech-tag">
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-link"
                            >
                                <span>View on GitHub</span>
                                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>

                        {/* Hover glow */}
                        <div className="proj-glow" />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
