import { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo/Brand */}
                <div className="header-brand">
                    <button 
                        className="brand-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="brand-icon">🖥️</span>
                        <span className="brand-text">Isak</span>
                    </button>
                </div>

                {/* Desktop Navigation - 1040px 미만에서만 표시 */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id} className="nav-item">
                                <button 
                                    className="nav-link"
                                    onClick={() => handleMenuClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {menuItems.map((item) => (
                        <li key={item.id} className="mobile-nav-item">
                            <button 
                                className="mobile-nav-link"
                                onClick={() => handleMenuClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-menu-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </header>
    );
};