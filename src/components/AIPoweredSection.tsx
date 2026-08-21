import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AIPoweredSectionProps {
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

export const AIPoweredSection: React.FC<AIPoweredSectionProps> = ({ onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  const capabilities = [
    'AI Content',
    'AI Reels',
    'Creative Concepts',
    'Visual Storytelling'
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient gradient */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div ref={reveal} className="section-tag" style={{ background: 'rgba(124, 58, 237, 0.08)', color: '#7C3AED' }}>FUTURE-READY</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>
            AI-Powered Creativity. <br />Human Strategy.
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            We use AI to accelerate content creation, ideation and visual storytelling — while keeping your brand strategy and creative direction human.
          </p>

          <div ref={reveal} className="scroll-delay-3" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {capabilities.map(cap => (
              <span
                key={cap}
                style={{
                  padding: '0.6rem 1.25rem',
                  background: 'rgba(124, 58, 237, 0.06)',
                  color: '#7C3AED',
                  border: '1px solid rgba(124, 58, 237, 0.15)',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 700
                }}
              >
                {cap}
              </span>
            ))}
          </div>

          {onOpenStrategyModal && (
            <div ref={reveal} className="scroll-delay-4">
              <button
                className="btn btn-primary"
                onClick={onOpenStrategyModal}
                style={{ background: '#7C3AED', borderColor: '#7C3AED' }}
              >
                Explore AI Solutions →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
