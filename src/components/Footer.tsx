import React from 'react';
import type { PageView } from '../types';
import { TOP_FOOTER_DOMESTIC_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '../data/locationsData';

export const domesticLocations = TOP_FOOTER_DOMESTIC_LOCATIONS;
export const internationalLocations = TOP_FOOTER_INTERNATIONAL_LOCATIONS;

interface FooterProps {
  onNavigate: (page: PageView, slug?: string) => void;
  onSelectLocation?: (locationName: string) => void;
  onOpenLocationsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectLocation, onOpenLocationsModal: _onOpenLocationsModal }) => {
  const handleLocationClick = (loc: string) => {
    if (onSelectLocation) {
      onSelectLocation(loc);
    } else {
      onNavigate('location');
    }
  };

  return (
    <footer style={{ background: '#110D0C', color: 'var(--border-color-subtle, #F0E4E8)', paddingTop: '5rem', paddingBottom: '3rem', borderTop: '1px solid #261F1C' }}>
      <div className="container">
        
        {/* MAIN FOOTER GRID */}
        <div className="footer-main-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.5fr', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
              <img
                src="/bee_social_logo.png"
                alt="BeeSocial"
                loading="lazy"
                decoding="async"
                style={{
                  height: '52px',
                  width: 'auto',
                  maxHeight: '52px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Branding • Content • Social Media • Digital Growth
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, fontStyle: 'italic' }}>
              Let's grow your brand.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('about')}>About</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>Services</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('portfolio')}>Portfolio</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('packages')}>Packages</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('case-studies')}>Case Studies</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('blog')}>Blog</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>Contact</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Follow Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <li>
                <a href="https://www.instagram.com/beesocial._" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.4rem' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <span>📸</span>
                  <span>Instagram (@beesocial._)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Direct Contact</h4>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>📍 Pune, Maharashtra</div>
              <div>📞 <a href="tel:+917020800621" style={{ color: 'inherit', textDecoration: 'none' }}>+91 70208 00621</a></div>
              <div>✉️ <a href="mailto:hello.thebeesocial@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>hello.thebeesocial@gmail.com</a></div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: '#261F1C', margin: '3rem 0' }}></div>

        {/* DOMESTIC & INTERNATIONAL LOCATIONS SECTION */}
        <div>
          {/* SECTION 1: DOMESTIC LOCATIONS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontFamily: 'Outfit, serif', fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Our Services Are Available In Domestic Locations
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {TOP_FOOTER_DOMESTIC_LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationClick(loc)}
                  style={{
                    backgroundColor: '#1E1815',
                    color: '#E2E8F0',
                    border: '1px solid #382E2A',
                    borderRadius: '999px',
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-raw, #D6336C)';
                    e.currentTarget.style.color = 'var(--secondary)';
                    e.currentTarget.style.borderColor = 'var(--primary-raw, #D6336C)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1E1815';
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.borderColor = '#382E2A';
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2: INTERNATIONAL LOCATIONS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontFamily: 'Outfit, serif', fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Our Services Are Available In International Locations
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {TOP_FOOTER_INTERNATIONAL_LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationClick(loc)}
                  style={{
                    backgroundColor: '#1E1815',
                    color: '#E2E8F0',
                    border: '1px solid #382E2A',
                    borderRadius: '999px',
                    padding: '0.45rem 1.15rem',
                    fontSize: '0.825rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-raw, #D6336C)';
                    e.currentTarget.style.color = 'var(--secondary)';
                    e.currentTarget.style.borderColor = 'var(--primary-raw, #D6336C)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1E1815';
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.borderColor = '#382E2A';
                  }}
                >
                  🌐 {loc}
                </button>
              ))}
            </div>
          </div>

          {/* VIEW ALL 500+ LOCATIONS CTA BANNER */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => onNavigate('all-locations')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: 'rgba(214, 51, 108, 0.10)',
                color: 'var(--primary)',
                border: '1.5px solid rgba(255, 78, 39, 0.4)',
                padding: '0.95rem 2.25rem',
                borderRadius: '999px',
                fontSize: '0.95rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255, 78, 39, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(214, 51, 108, 0.10)';
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>📍 View Complete 500+ Domestic & International Locations Directory (Tier 2, Tier 3 & Tier 4 Coverage)</span>
              <span>➔</span>
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div style={{ height: '1px', background: '#261F1C', margin: '3rem 0 1.5rem 0' }}></div>
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} <a href="https://thebeesocial.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>BeeSocial</a>. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
