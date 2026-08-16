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
    <footer style={{ background: '#110D0C', color: '#F1F5F9', paddingTop: '5rem', paddingBottom: '3rem', borderTop: '1px solid #261F1C' }}>
      <div className="container">
        
        {/* MAIN FOOTER GRID */}
        <div className="footer-main-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.5fr', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/digital_digix_logo.png"
                alt="Digital Digix Logo"
                width="42"
                height="42"
                loading="lazy"
                decoding="async"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#FFFFFF' }}>
                Digital Digix
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Seen. Heard. Chosen. India's leading performance digital agency delivering data-driven ROI with zero lock-in contracts and founder-led execution.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Home</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('about')}>About Us</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('portfolio')}>Our Work</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('blog')}>Blog Articles</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('smm')}>Social Growth (SMM)</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>SEO Services</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>Google Ads (PPC)</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>Meta Ads</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('smm')}>SMM Growth</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>Custom Web App</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('services')}>Graphic Design</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFF', marginBottom: '1.25rem' }}>Direct Contact</h4>
            <div style={{ fontSize: '0.875rem', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>📍 Noida, Delhi NCR, India & Global</div>
              <div>📞 +91 85869 89832</div>
              <div>✉️ <a href="mailto:contact.digitaldigix@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>contact.digitaldigix@gmail.com</a></div>
              <a
                href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D97706', fontWeight: 700, textDecoration: 'none', marginTop: '0.5rem' }}
              >
                Chat on WhatsApp 💬 →
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: '#261F1C', margin: '3rem 0' }}></div>

        {/* DOMESTIC & INTERNATIONAL LOCATIONS SECTION (EXACT 2 SECTIONS MATCHING SCREENSHOT) */}
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
                    e.currentTarget.style.backgroundColor = '#D97706';
                    e.currentTarget.style.color = '#0F172A';
                    e.currentTarget.style.borderColor = '#D97706';
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
                    e.currentTarget.style.backgroundColor = '#D97706';
                    e.currentTarget.style.color = '#0F172A';
                    e.currentTarget.style.borderColor = '#D97706';
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
                backgroundColor: 'rgba(255, 78, 39, 0.1)',
                color: '#FF4E27',
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
                e.currentTarget.style.backgroundColor = '#FF4E27';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 78, 39, 0.1)';
                e.currentTarget.style.color = '#FF4E27';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>📍 View Complete 500+ Domestic & International Locations Directory (Tier 2, Tier 3 & Tier 4 Coverage)</span>
              <span>➔</span>
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR: ALL RIGHTS TO DIGITAL DIGIX */}
        <div style={{ height: '1px', background: '#261F1C', margin: '3rem 0 1.5rem 0' }}></div>
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#94A3B8' }}>
          © 2012 <a href="https://digitaldigix.com" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', fontWeight: 800, textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Digital Digix</a>. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
