import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQSectionProps {
  backgroundColor?: string;
}

const faqs = [
  {
    q: 'What does BeeSocial do?',
    a: 'We provide branding, social media management, content creation, graphic design, photography, videography, paid advertising and influencer marketing.'
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. Our packages are designed for growing businesses as well as established brands. We work with startups, SMEs and local businesses across industries.'
  },
  {
    q: 'Do you provide photography and videography?',
    a: 'Yes. We offer professional product, brand and event photography and videography — all in-house.'
  },
  {
    q: 'Do you manage Instagram accounts?',
    a: 'Yes. We handle strategy, content planning, creatives, reels, posting and complete account management.'
  },
  {
    q: 'Do you run Meta Ads?',
    a: 'Yes. We create and manage targeted advertising campaigns on Facebook and Instagram to drive leads, sales and brand awareness.'
  },
  {
    q: 'Do you work outside Pune?',
    a: 'Yes. We work with businesses Pan-India and also serve international clients remotely. On-location shoots are available across major Indian cities.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">FAQ</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              ref={reveal}
              className={`scroll-delay-${(idx % 3) + 1}`}
              style={{
                marginBottom: '0.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color-subtle)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--secondary)',
                  fontFamily: 'Outfit, sans-serif',
                  textAlign: 'left',
                  gap: '1rem'
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--primary)',
                  transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>

              <div style={{
                maxHeight: openIdx === idx ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease',
                padding: openIdx === idx ? '0 1.5rem 1.25rem 1.5rem' : '0 1.5rem 0 1.5rem'
              }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
