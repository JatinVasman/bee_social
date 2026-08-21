import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { PageView } from '../types';

interface IndustriesShowcaseProps {
  onNavigate?: (page: PageView, slug?: string) => void;
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

const industries = [
  { icon: '💎', name: 'Jewellery & Luxury' },
  { icon: '🏠', name: 'Real Estate' },
  { icon: '🪑', name: 'Furniture & Interiors' },
  { icon: '🍽️', name: 'Food & Hospitality' },
  { icon: '🏗️', name: 'Construction' },
  { icon: '🛍️', name: 'Retail & Lifestyle' },
  { icon: '💼', name: 'Professional Services' },
  { icon: '🎓', name: 'Education' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '✨', name: 'Events & Weddings' },
];

export const IndustriesShowcase: React.FC<IndustriesShowcaseProps> = ({ onNavigate, onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-card)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">INDUSTRIES</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
            We Create For Every Industry
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto 3rem auto'
        }}>
          {industries.map((ind, idx) => (
            <div
              key={ind.name}
              ref={reveal}
              className={`card-shimmer scroll-delay-${(idx % 3) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1.5rem 1rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color-subtle)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => {
                if (onNavigate) onNavigate('industries', ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--border-color-subtle)';
              }}
            >
              <span style={{ fontSize: '2rem' }}>{ind.icon}</span>
              <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--secondary)', textAlign: 'center', fontFamily: 'Outfit, sans-serif' }}>{ind.name}</span>
            </div>
          ))}
        </div>

        <div ref={reveal} className="scroll-delay-3" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Don't see your industry? <strong style={{ color: 'var(--secondary)' }}>Let's talk.</strong>
          </p>
          {onOpenStrategyModal && (
            <button className="btn btn-secondary" onClick={onOpenStrategyModal}>
              Get a Free Consultation
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
