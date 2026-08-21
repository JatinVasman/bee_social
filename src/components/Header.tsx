import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { PageView } from '../types';

interface HeaderProps {
  activePage: PageView;
  onNavigate: (page: PageView, slug?: string) => void;
  currency?: string;
  onCurrencyChange?: (c: any) => void;
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
  onOpenStrategyModal: () => void;
  onOpenLeaderModal: (person: any) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenStrategyModal,
  onOpenLeaderModal: _onOpenLeaderModal,
}) => {
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

  // Client-specified nav: Home | About | Services | Work | Packages | Case Studies | Blog | Contact
  const navItems: { page: PageView; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'services', label: 'Services' },
    { page: 'portfolio', label: 'Work' },
    { page: 'packages', label: 'Packages' },
    { page: 'case-studies', label: 'Case Studies' },
    { page: 'blog', label: 'Blog' },
    { page: 'contact', label: 'Contact' },
  ];

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

            {navItems.map(item => (
              <button
                key={item.page}
                ref={(el) => { if (el) navItemRefs.current.set(item.page, el); }}
                onClick={() => onNavigate(item.page)}
                className={`nav-link-item ${activePage === item.page ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            {/* Desktop CTA Button */}
            {!isMobileScreen && (
              <button
                className="btn btn-primary"
                onClick={onOpenStrategyModal}
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem', borderRadius: '999px' }}
              >
                Get a Free Consultation
              </button>
            )}

            {/* MOBILE HAMBURGER MENU BUTTON */}
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
                {navItems.map((item, idx) => (
                  <button
                    key={item.page}
                    className={`mobile-drawer-link drawer-stagger-${idx + 1} ${activePage === item.page ? 'active' : ''}`}
                    onClick={() => handleMobileNav(item.page)}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Drawer Bottom CTA Button */}
              <div className="mobile-drawer-footer">
                <button
                  className="mobile-drawer-cta-btn drawer-cta-animate"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenStrategyModal();
                  }}
                >
                  Get a Free Consultation ➔
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
