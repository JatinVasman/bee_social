import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  // Sliding pill indicator state
  const navMenuRef = useRef<HTMLElement>(null);
  const navItemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [indicatorReady, setIndicatorReady] = useState(false);

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update sliding indicator position when active page changes
  const updateIndicator = useCallback(() => {
    const activeEl = navItemRefs.current.get(activePage);
    const menuEl = navMenuRef.current;
    if (activeEl && menuEl) {
      const menuRect = menuEl.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - menuRect.left,
        width: itemRect.width,
      });
      setIndicatorReady(true);
    }
  }, [activePage]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Small delay to ensure layout is ready on first mount
  useEffect(() => {
    const timer = setTimeout(updateIndicator, 100);
    return () => clearTimeout(timer);
  }, [updateIndicator]);

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
          {/* OFFICIAL BEESOCIAL LOGO */}
          <div className="logo" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <img
              src="/bee_social_logo.png"
              alt="BeeSocial"
              decoding="async"
              style={{
                height: '46px',
                width: 'auto',
                maxHeight: '46px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Navigation Track (Desktop Only) */}
          <nav className="nav-menu desktop-nav-only" ref={navMenuRef as React.RefObject<HTMLElement>}>
            {/* Sliding pill indicator */}
            {indicatorReady && (
              <div
                className="nav-active-indicator"
                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              />
            )}

            <button
              ref={(el) => { if (el) navItemRefs.current.set('home', el); }}
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
                ref={(el) => { if (el) navItemRefs.current.set('about', el); }}
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
                      background: 'var(--bg-card)',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(214, 51, 108, 0.12)',
                      border: '1px solid var(--border-color-subtle)',
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(214, 51, 108, 0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      About BeeSocial
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(214, 51, 108, 0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Founder — <strong>Siddhi</strong>
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(214, 51, 108, 0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Why BeeSocial
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
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(214, 51, 108, 0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Our Team
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('services', el); }}
              onClick={() => onNavigate('services')}
              className={`nav-link-item ${activePage === 'services' ? 'active' : ''}`}
            >
              Services
            </button>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('industries', el); }}
              onClick={() => onNavigate('industries')}
              className={`nav-link-item ${activePage === 'industries' ? 'active' : ''}`}
            >
              Industries
            </button>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('portfolio', el); }}
              onClick={() => onNavigate('portfolio')}
              className={`nav-link-item ${activePage === 'portfolio' ? 'active' : ''}`}
            >
              Our Work
            </button>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('blog', el); }}
              onClick={() => onNavigate('blog')}
              className={`nav-link-item ${activePage === 'blog' ? 'active' : ''}`}
            >
              Blog
            </button>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('smm', el); }}
              onClick={() => onNavigate('smm')}
              className={`nav-link-item ${activePage === 'smm' ? 'active' : ''}`}
            >
              SMM
            </button>

            <button
              ref={(el) => { if (el) navItemRefs.current.set('contact', el); }}
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

        {/* MOBILE SIDE SLIDE-OVER NAVIGATION DRAWER */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer-overlay">
            {/* Dark translucent backdrop on left side */}
            <div className="mobile-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Cream / White Slide-Over Panel on right side */}
            <div className="mobile-drawer-panel animate-slide-left">
              {/* Drawer Top Header */}
              <div className="mobile-drawer-header">
                <img
                  src="/bee_social_logo.png"
                  alt="BeeSocial"
                  style={{ height: '36px', width: 'auto', display: 'block' }}
                />
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
                  className={`mobile-drawer-link drawer-stagger-1 ${activePage === 'home' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('home')}
                >
                  <span>Home</span>
                </button>

                <div className="mobile-drawer-link-group drawer-stagger-2">
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
                      <button onClick={() => handleMobileNav('about')}>About BeeSocial</button>
                      <button onClick={() => handleMobileNav('about', 'founder')}>Founder — Siddhi</button>
                      <button onClick={() => handleMobileNav('about', 'why-us')}>Why BeeSocial</button>
                      <button onClick={() => handleMobileNav('about', 'team')}>Our Team</button>
                    </div>
                  )}
                </div>

                <button
                  className={`mobile-drawer-link drawer-stagger-3 ${activePage === 'services' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('services')}
                >
                  <span>Services</span>
                </button>

                <button
                  className={`mobile-drawer-link drawer-stagger-4 ${activePage === 'portfolio' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('portfolio')}
                >
                  <span>Portfolio</span>
                </button>

                <button
                  className={`mobile-drawer-link drawer-stagger-5 ${activePage === 'industries' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('industries')}
                >
                  <span>Industries</span>
                </button>

                <button
                  className={`mobile-drawer-link drawer-stagger-6 ${activePage === 'blog' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('blog')}
                >
                  <span>Blog</span>
                </button>

                <button
                  className={`mobile-drawer-link drawer-stagger-7 ${activePage === 'smm' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('smm')}
                >
                  <span>SMM</span>
                </button>

                <button
                  className={`mobile-drawer-link drawer-stagger-7 ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('contact')}
                >
                  <span>Contact</span>
                </button>
              </div>

              {/* Drawer Bottom CTA Button matching Screenshot 1 */}
              <div className="mobile-drawer-footer">
                <button
                  className="mobile-drawer-cta-btn drawer-cta-animate"
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
