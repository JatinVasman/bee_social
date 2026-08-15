import React from 'react';
import { InteractiveStatsBar } from './InteractiveStatsBar';

interface WhyChooseUsProps {
  onSelectLocation?: (locationName: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
  backgroundColor?: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  onSelectLocation, 
  onOpenStrategyModal,
  backgroundColor
}) => {
  return (
    <>


      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHY DIGITAL DIGIX</div>
            <h2>Built For Growth. Backed By Data.</h2>
            <p className="section-subtitle">
              We combine creative excellence with rigorous performance marketing to deliver measurable ROI.
            </p>
          </div>

          <div className="features-pill-grid">
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>⚡</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Fast Execution</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Campaigns launched and optimized in 24-48 hours.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>📊</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Live Dashboards</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Real-time transparency on ad spend, leads and ROAS.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>👑</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Founder Led</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Senior leadership directly involved in your strategy.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>🎓</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Expert Team</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Certified professionals passionate about your growth.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>🏆</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Result Focused</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>We deliver high-impact revenue performance.</p>
            </div>
          </div>

          {/* ANIMATED & INTERACTIVE STATS BAR MATCHING SCREENSHOT 1 & ALL LOCATIONS POP-UP */}
          <InteractiveStatsBar
            onSelectLocation={onSelectLocation}
            onOpenStrategyModal={onOpenStrategyModal}
          />
        </div>
      </section>
    </>
  );
};
