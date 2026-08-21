import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProcessSectionProps {
  backgroundColor?: string;
}

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Understand your business.', icon: '🔍' },
  { num: '02', title: 'Strategise', desc: 'Create the right growth strategy.', icon: '🧠' },
  { num: '03', title: 'Create', desc: 'Produce your content and brand assets.', icon: '🎨' },
  { num: '04', title: 'Launch', desc: 'Publish campaigns and activate marketing.', icon: '🚀' },
  { num: '05', title: 'Optimise', desc: 'Track performance and improve.', icon: '📊' },
  { num: '06', title: 'Grow', desc: 'Scale what works.', icon: '📈' },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <div ref={reveal} className="section-tag">OUR PROCESS</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
            From Idea to Impact
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            A proven process that turns your brand vision into measurable digital growth.
          </p>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '40px',
            bottom: '40px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--primary), rgba(214, 51, 108, 0.15))',
            zIndex: 0
          }} />

          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              ref={reveal}
              className={`scroll-delay-${(idx % 3) + 1}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: idx < processSteps.length - 1 ? '2.5rem' : '0',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Step Number Circle */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--primary)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 800,
                flexShrink: 0,
                boxShadow: '0 4px 15px rgba(214, 51, 108, 0.25)'
              }}>
                {step.icon}
              </div>

              {/* Step Content Card */}
              <div
                className="card-shimmer"
                style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color-subtle)',
                  borderRadius: '16px',
                  padding: '1.5rem 1.75rem',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>{step.num}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
