import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhyChooseUsProps {
  onSelectLocation?: (locationName: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
  backgroundColor?: string;
}

const reasons = [
  {
    icon: '🐝',
    title: 'Everything Under One Roof',
    desc: 'Strategy, branding, content, design and marketing — without managing multiple agencies.'
  },
  {
    icon: '🎯',
    title: 'Strategy Before Content',
    desc: "We don't just post. We understand your audience, positioning and business goals."
  },
  {
    icon: '🎥',
    title: 'Content That Looks Premium',
    desc: 'Professional photography, videography, reels and AI-powered content.'
  },
  {
    icon: '📈',
    title: 'Growth-Focused Marketing',
    desc: 'Creative campaigns backed by performance data.'
  },
  {
    icon: '💰',
    title: 'Agency Quality. Sensible Pricing.',
    desc: 'Premium-looking work without unnecessary agency overheads.'
  },
  {
    icon: '🤝',
    title: 'Built for Growing Businesses',
    desc: 'Our packages are designed specifically for startups, SMEs and established local brands.'
  }
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  onSelectLocation: _onSelectLocation, 
  onOpenStrategyModal: _onOpenStrategyModal,
  backgroundColor
}) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <div ref={reveal} className="section-tag">WHY BEESOCIAL</div>
          <h2 ref={reveal} className="scroll-delay-1">Why Brands Choose BeeSocial</h2>
          <p ref={reveal} className="section-subtitle scroll-delay-2">
            Here's what makes us different from every other agency out there.
          </p>
        </div>

        <div className="features-pill-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
          {reasons.map((r, idx) => (
            <div
              key={idx}
              ref={reveal}
              className={`feature-pill-card card-shimmer scroll-delay-${(idx % 3) + 1}`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color-subtle)',
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{r.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>{r.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
