import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface InfluencerSectionProps {
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

const pipeline = [
  { label: 'Discovery', icon: '🔍' },
  { label: 'Shortlisting', icon: '📋' },
  { label: 'Negotiation', icon: '🤝' },
  { label: 'Campaign', icon: '🎬' },
  { label: 'Reporting', icon: '📊' },
];

export const InfluencerSection: React.FC<InfluencerSectionProps> = ({ onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div ref={reveal} className="section-tag">INFLUENCER MARKETING</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>
            Put Your Brand in the Right Hands.
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            We connect brands with relevant creators and influencers to create authentic campaigns that reach the right audience.
          </p>

          {/* Pipeline Visual */}
          <div ref={reveal} className="scroll-delay-3" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            {pipeline.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color-subtle)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                  minWidth: '85px'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)' }}>{step.label}</span>
                </div>
                {idx < pipeline.length - 1 && (
                  <span style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 800 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {onOpenStrategyModal && (
            <div ref={reveal} className="scroll-delay-4">
              <button className="btn btn-primary" onClick={onOpenStrategyModal}>
                Plan an Influencer Campaign →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
