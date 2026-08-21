import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface DigitalToolkitSectionProps {
  backgroundColor?: string;
}

const toolkitItems = [
  {
    icon: '📱',
    label: 'Social Media',
    services: ['Instagram Management', 'Facebook Strategy', 'Content Calendar Planning', 'Community Management', 'Account Growth']
  },
  {
    icon: '🎥',
    label: 'Reels',
    services: ['Reel Scripting & Ideation', 'Trending Audio Strategy', 'Professional Editing', 'Brand Storytelling Reels', 'AI-Powered Reels']
  },
  {
    icon: '📸',
    label: 'Photography',
    services: ['Product Photography', 'Brand Photography', 'Event Photography', 'Behind-the-Scenes', 'Lifestyle Shoots']
  },
  {
    icon: '🎨',
    label: 'Design',
    services: ['Social Media Creatives', 'Brochures & Catalogues', 'Presentations & Pitch Decks', 'Marketing Material', 'Brand Guidelines']
  },
  {
    icon: '📢',
    label: 'Ads',
    services: ['Meta Ads (Facebook & Instagram)', 'Google Ads & PPC', 'Lead Generation Campaigns', 'Retargeting', 'Campaign Strategy']
  },
  {
    icon: '🤝',
    label: 'Influencers',
    services: ['Influencer Discovery', 'Campaign Planning', 'Creator Collaborations', 'Campaign Management', 'Performance Reporting']
  },
  {
    icon: '✨',
    label: 'Branding',
    services: ['Logo Design', 'Visual Identity', 'Brand Strategy', 'Brand Guidelines', 'Packaging Design']
  },
  {
    icon: '🤖',
    label: 'AI Content',
    services: ['AI-Powered Visuals', 'AI Reel Concepts', 'Creative Ideation', 'Visual Storytelling', 'Automated Content']
  }
];

export const DigitalToolkitSection: React.FC<DigitalToolkitSectionProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">WHAT'S INCLUDED</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
            Your Digital Growth Toolkit
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Click any icon to explore the services included.
          </p>
        </div>

        {/* Icon Grid */}
        <div ref={reveal} className="scroll-delay-2" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem auto'
        }}>
          {toolkitItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => setActiveIdx(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '1rem 1.25rem',
                background: activeIdx === idx ? 'var(--primary)' : 'var(--bg-card)',
                color: activeIdx === idx ? '#FFF' : 'var(--secondary)',
                border: activeIdx === idx ? '2px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIdx === idx ? '0 8px 25px rgba(214, 51, 108, 0.2)' : 'var(--shadow-card)',
                minWidth: '90px',
                fontFamily: 'inherit',
                transform: activeIdx === idx ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.02em' }}>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div ref={reveal} className="scroll-delay-3" style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color-subtle)',
          borderTop: '4px solid var(--primary)',
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          boxShadow: 'var(--shadow-card)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>
            {toolkitItems[activeIdx].icon} {toolkitItems[activeIdx].label}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {toolkitItems[activeIdx].services.map(service => (
              <span
                key={service}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(214, 51, 108, 0.06)',
                  color: 'var(--secondary)',
                  borderRadius: '999px',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  border: '1px solid rgba(214, 51, 108, 0.12)'
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
