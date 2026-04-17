import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'projects', label: 'Projects', num: '03' },
    { id: 'skills', label: 'Skills', num: '04' },
    { id: 'contact', label: 'Contact', num: '05' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Body scroll-lock
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const close = () => setMobileMenu(false);

    const goTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        close();
    };

    return (
        <>
            {/* ── Top navbar ── */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={() => goTo('home')}>
                        <span className="logo-text">SC</span>
                    </div>

                    {/* Desktop links */}
                    <div className="navbar-menu">
                        {NAV_ITEMS.map(({ id, label }) =>
                            id === 'contact'
                                ? <a key={id} className="nav-link contact-btn" onClick={() => goTo(id)}>{label}</a>
                                : <a key={id} className="nav-link" onClick={() => goTo(id)}>{label}</a>
                        )}
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenu(o => !o)}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="ham-bar" />
                        <span className="ham-bar" />
                        <span className="ham-bar" />
                    </button>
                </div>
            </nav>

            {/* ── Backdrop ── */}
            <div
                className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={close}
                aria-hidden="true"
            />

            {/* ── Drawer ── */}
            <aside className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Mobile navigation">
                {/* Decorative blobs */}
                <div className="drawer-blob drawer-blob--1" />
                <div className="drawer-blob drawer-blob--2" />

                {/* Header row inside drawer */}
                <div className="drawer-top">
                    <span className="drawer-logo">SC</span>
                    <button className="drawer-close" onClick={close} aria-label="Close menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <nav className="mobile-nav">
                    {NAV_ITEMS.map(({ id, label, num }, i) => (
                        <a
                            key={id}
                            className="mobile-nav-link"
                            style={{ '--i': i }}
                            onClick={() => goTo(id)}
                        >
                            <span className="mnl-num">{num}</span>
                            <span className="mnl-label">{label}</span>
                            <svg className="mnl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    ))}
                </nav>

                {/* Footer */}
                <div className="drawer-footer">
                    <p className="drawer-footer-label">Let's connect</p>
                    <div className="drawer-socials">
                        <a href="https://github.com/SandipChavan2004" target="_blank" rel="noopener noreferrer" className="dsocial-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sandip-chavan-2004/" target="_blank" rel="noopener noreferrer" className="dsocial-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="mailto:sandipchavan2004@gmail.com" className="dsocial-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
