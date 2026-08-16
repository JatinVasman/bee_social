import React, { useState, useEffect } from 'react';
import type { Currency, PageView } from '../types';
import type { LeaderPerson } from './LeadershipModal';

interface HeaderProps {
  activePage: PageView;
  onNavigate: (page: PageView, slug?: string) => void;
  currency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
  onOpenStrategyModal: () => void;
  onOpenLeaderModal: (person: LeaderPerson) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenStrategyModal,
  onOpenLeaderModal: _onOpenLeaderModal,
}) => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle scrolled background state
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMobileNav = (page: PageView, slug?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, slug);
  };

  return (
    <div className={`header-wrapper ${isScrolled ? 'header-wrapper--scrolled' : ''} ${isVisible ? 'header-wrapper--visible' : 'header-wrapper--hidden'}`}>
      <header className="header">
        <div className="header-container">
          {/* OFFICIAL DIGITAL DIGIX LOGO */}
          <div className="logo" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }}>
            <img
              src="/digital_digix_logo.png"
              alt="Digital Digix Logo"
              width="38"
              height="38"
              decoding="async"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.02em', color: 'var(--secondary)', whiteSpace: 'nowrap' }}>
              Digital Digix
            </span>
          </div>

          {/* Navigation Track (Desktop Only) */}
          <nav className="nav-menu desktop-nav-only">
            <button
              onClick={() => onNavigate('home')}
              className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>

            {/* ABOUT ▾ DROPDOWN MENU */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                onClick={() => {
                  setIsAboutDropdownOpen(false);
                  onNavigate('about');
                }}
                className={`nav-link-item ${activePage === 'about' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}
                title="Click to view About Us Page"
              >
                About ▾
              </button>

              {/* Dropdown Menu Card with seamless top hover bridge */}
              {isAboutDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.45rem',
                    zIndex: 1100
                  }}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <div
                    style={{
                      width: '260px',
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(11, 19, 42, 0.15)',
                      border: '1px solid #E2E8F0',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem'
                    }}
                  >
                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF1EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      About Digital Digix
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'founder');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#475569',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF1EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Founder — <strong>Harsh Chaudhary</strong>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'co-founder');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#475569',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF1EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Co-Founder — <strong>Khwahish Sahai</strong>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'why-us');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#475569',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF1EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Why Digital Digix
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'team');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#475569',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFF1EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Our Team
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('services')}
              className={`nav-link-item ${activePage === 'services' ? 'active' : ''}`}
            >
              Services
            </button>

            <button
              onClick={() => onNavigate('industries')}
              className={`nav-link-item ${activePage === 'industries' ? 'active' : ''}`}
            >
              Industries
            </button>

            <button
              onClick={() => onNavigate('legal')}
              className={`nav-link-item ${activePage === 'legal' ? 'active' : ''}`}
            >
              Legal
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className={`nav-link-item ${activePage === 'portfolio' ? 'active' : ''}`}
            >
              Our Work
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`nav-link-item ${activePage === 'blog' ? 'active' : ''}`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate('smm')}
              className={`nav-link-item ${activePage === 'smm' ? 'active' : ''}`}
            >
              SMM
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`nav-link-item ${activePage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>


            {/* MOBILE HAMBURGER MENU BUTTON (STRICTLY MOBILE PHONES <= 768px) */}
            {isMobileScreen && (
              <button
                className="mobile-menu-trigger"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Drawer"
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* MOBILE SIDE SLIDE-OVER NAVIGATION DRAWER (EXACTLY MATCHING SCREENSHOT 1) */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer-overlay">
            {/* Dark translucent backdrop on left side */}
            <div className="mobile-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Cream / White Slide-Over Panel on right side */}
            <div className="mobile-drawer-panel animate-slide-left">
              {/* Drawer Top Header */}
              <div className="mobile-drawer-header">
                <h3 className="mobile-drawer-title">Navigation</h3>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Navigation"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Menu Items */}
              <div className="mobile-drawer-body">
                <button
                  className={`mobile-drawer-link ${activePage === 'home' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('home')}
                >
                  <span>Home</span>
                </button>

                <div className="mobile-drawer-link-group">
                  <button
                    className={`mobile-drawer-link ${activePage === 'about' ? 'active' : ''}`}
                    onClick={() => {
                      setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    }}
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>About</span>
                    <span style={{ fontSize: '0.75rem' }}>{isAboutDropdownOpen ? '▲' : '▾'}</span>
                  </button>

                  {isAboutDropdownOpen && (
                    <div className="mobile-drawer-sublinks">
                      <button onClick={() => handleMobileNav('about')}>About Digital Digix</button>
                      <button onClick={() => handleMobileNav('about', 'founder')}>Founder — Harsh Chaudhary</button>
                      <button onClick={() => handleMobileNav('about', 'co-founder')}>Co-Founder — Khwahish Sahai</button>
                      <button onClick={() => handleMobileNav('about', 'why-us')}>Why Digital Digix</button>
                      <button onClick={() => handleMobileNav('about', 'team')}>Our Team</button>
                    </div>
                  )}
                </div>

                <button
                  className={`mobile-drawer-link ${activePage === 'services' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('services')}
                >
                  <span>Services</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'portfolio' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('portfolio')}
                >
                  <span>Portfolio</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'industries' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('industries')}
                >
                  <span>Industries</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'legal' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('legal')}
                >
                  <span>Legal & Transparency</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'blog' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('blog')}
                >
                  <span>Blog</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'smm' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('smm')}
                >
                  <span>SMM</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('contact')}
                >
                  <span>Contact</span>
                </button>
              </div>

              {/* Drawer Bottom CTA Button matching Screenshot 1 */}
              <div className="mobile-drawer-footer">
                <button
                  className="mobile-drawer-cta-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenStrategyModal();
                  }}
                >
                  Book Strategy Call ➔
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
