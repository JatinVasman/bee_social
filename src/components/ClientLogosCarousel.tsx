import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ClientLogosCarouselProps {
  backgroundColor?: string;
}

// Text-based brand names (replace with actual logo images when available)
const brandNames = [
  'Sanghvi Jewellers',
  'Metro Heart Hospital',
  'Crave Cloud Kitchen',
  'UrbanNest Interiors',
  'Pinnacle Realtors',
  'Apex Fitness Studios',
  'AutoShine Detailing',
  'EdVantage Coaching',
  'BrightPath Academy',
  'Zariya Boutique',
  'GreenLeaf Organics',
  'SmileCraft Dental',
  'Singh Realty Group',
  'Lex & Co. Advocates',
  'Bloom Salon & Spa'
];

export const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '4rem 0', backgroundColor: backgroundColor || 'var(--bg-main)', overflow: 'hidden', borderTop: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div ref={reveal} className="section-tag">OUR CLIENTS</div>
        <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
          Brands We've Worked With
        </h2>
      </div>

      {/* Scrolling Logo Strip */}
      <div className="marquee-container">
        <div className="marquee-track-left" style={{ display: 'flex', alignItems: 'center' }}>
          {[...brandNames, ...brandNames, ...brandNames].map((name, idx) => (
            <div
              key={`logo-${idx}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                marginRight: '1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color-subtle)',
                borderRadius: '12px',
                flexShrink: 0,
                minWidth: '180px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--secondary)',
                fontFamily: 'Outfit, sans-serif',
                whiteSpace: 'nowrap',
                opacity: 0.7
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
