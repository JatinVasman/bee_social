import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OneAgencySectionProps {
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

const line1Touchpoints = [
  { label: 'Strategy', icon: '🧠', desc: 'Targeting & Market Fit' },
  { label: 'Branding', icon: '🎨', desc: 'Identity & Guidelines' },
  { label: 'Content', icon: '🎥', desc: 'Reels & Photography' },
  { label: 'Social Media', icon: '📱', desc: 'Organic Management' },
  { label: 'Ads', icon: '📢', desc: 'High-ROAS Meta & PPC' },
  { label: 'Influencers', icon: '🤝', desc: 'Creator Collabs' },
];

export const OneAgencySection: React.FC<OneAgencySectionProps> = ({ onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-card)', overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">YOUR COMPLETE GROWTH ENGINE</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            One Agency. Every Touchpoint.
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Instead of hiring: <span style={{ textDecoration: 'line-through', opacity: 0.75 }}>Designer + Photographer + Social Media Manager + Ads Agency + Influencer Agency…</span>
          </p>
          <div ref={reveal} className="scroll-delay-2" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(214, 51, 108, 0.08) 0%, rgba(214, 51, 108, 0.02) 100%)',
            border: '1px solid rgba(214, 51, 108, 0.25)',
            borderRadius: '999px',
            padding: '0.6rem 1.6rem',
            color: 'var(--secondary)',
            fontSize: '1.15rem',
            fontWeight: 800,
            fontFamily: 'Outfit, sans-serif'
          }}>
            🎯 Hire one team. BeeSocial handles your complete digital brand presence.
          </div>
        </div>

        {/* Visual Pipeline Container */}
        <div ref={reveal} className="scroll-delay-3" style={{ maxWidth: '1080px', margin: '0 auto 3.5rem auto' }}>
          
          {/* LINE 1: All 6 Core Touchpoints in ONE Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {line1Touchpoints.map((item, idx) => (
              <React.Fragment key={item.label}>
                <div
                  className="card-shimmer"
                  style={{
                    flex: '1 1 0',
                    minWidth: '130px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem 0.75rem',
                    background: 'var(--bg-main)',
                    borderRadius: '18px',
                    border: '1.5px solid var(--border-color-subtle)',
                    boxShadow: 'var(--shadow-card)',
                    textAlign: 'center',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(214, 51, 108, 0.14)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = 'var(--border-color-subtle)';
                  }}
                >
                  <span style={{ fontSize: '1.85rem', marginBottom: '0.4rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                    {item.desc}
                  </span>
                </div>

                {idx < line1Touchpoints.length - 1 && (
                  <span style={{
                    fontSize: '1.3rem',
                    color: 'var(--primary)',
                    fontWeight: 900,
                    flexShrink: 0,
                    opacity: 0.8
                  }}>
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* DOWNWARD CONNECTOR ARROW TO LINE 2 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1.25rem auto 1rem auto',
            color: 'var(--primary)'
          }}>
            <div style={{
              width: '2px',
              height: '24px',
              background: 'linear-gradient(180deg, rgba(214, 51, 108, 0.2) 0%, var(--primary) 100%)'
            }} />
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              lineHeight: 1,
              marginTop: '-4px'
            }}>
              ↓
            </div>
          </div>

          {/* LINE 2: Growth in the Second Line (Hero Result Destination) */}
          <div style={{ maxWidth: '580px', margin: '0 auto' }}>
            <div
              className="card-shimmer"
              style={{
                background: 'linear-gradient(135deg, var(--bg-main) 0%, rgba(214, 51, 108, 0.06) 100%)',
                border: '2px solid var(--primary)',
                borderRadius: '24px',
                padding: '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                boxShadow: '0 12px 35px rgba(214, 51, 108, 0.16)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(214, 51, 108, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(214, 51, 108, 0.16)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                flexShrink: 0,
                boxShadow: '0 6px 20px rgba(214, 51, 108, 0.35)'
              }}>
                🚀
              </div>
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  The Final Result
                </div>
                <div style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  color: 'var(--secondary)',
                  fontFamily: 'Outfit, sans-serif',
                  lineHeight: 1.2,
                  marginTop: '0.15rem'
                }}>
                  Growth & Scalable Revenue
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem'
                }}>
                  More visibility, high-intent customer leads & lasting brand authority.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        {onOpenStrategyModal && (
          <div ref={reveal} className="scroll-delay-4" style={{ textAlign: 'center' }}>
            <button className="btn btn-primary" onClick={onOpenStrategyModal}>
              Get a Free Consultation
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default OneAgencySection;
