import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LeadMagnetSectionProps {
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

export const LeadMagnetSection: React.FC<LeadMagnetSectionProps> = ({ onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: backgroundColor || 'var(--bg-card)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient decorative gradient */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214, 51, 108, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={reveal} style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          background: 'var(--bg-main)',
          border: '2px solid var(--primary)',
          borderRadius: '28px',
          padding: '3rem 2.5rem',
          boxShadow: '0 15px 40px rgba(214, 51, 108, 0.12)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎁</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.75rem' }}>
            Free 15-Minute Brand Audit
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            Send us your Instagram page and we'll tell you <strong style={{ color: 'var(--secondary)' }}>3 things you can improve</strong> — completely free.
          </p>

          {onOpenStrategyModal && (
            <button
              className="btn btn-primary"
              onClick={onOpenStrategyModal}
              style={{ fontSize: '1.05rem', padding: '0.85rem 2rem' }}
            >
              Claim Your Free Audit 🚀
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
