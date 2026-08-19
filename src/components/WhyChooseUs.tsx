import React from 'react';
import { InteractiveStatsBar } from './InteractiveStatsBar';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  const reveal = useScrollReveal();

  return (
    <>
      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <div ref={reveal} className="section-tag">WHY BEESOCIAL</div>
            <h2 ref={reveal} className="scroll-delay-1">Creative First. Results Always.</h2>
            <p ref={reveal} className="section-subtitle scroll-delay-2">
              We blend creative storytelling with strategic marketing to help your brand connect, engage, and grow.
            </p>
          </div>

          <div className="features-pill-grid">
            <div ref={reveal} className="feature-pill-card card-shimmer scroll-delay-1">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>⚡</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Fast Execution</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Campaigns launched and optimized in 24-48 hours.</p>
            </div>
            <div ref={reveal} className="feature-pill-card card-shimmer scroll-delay-2">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>📊</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Live Dashboards</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Real-time transparency on ad spend, leads and ROAS.</p>
            </div>
            <div ref={reveal} className="feature-pill-card card-shimmer scroll-delay-3">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>👑</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Founder Led</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Senior leadership directly involved in your strategy.</p>
            </div>
            <div ref={reveal} className="feature-pill-card card-shimmer scroll-delay-4">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>🎓</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Expert Team</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Certified professionals passionate about your growth.</p>
            </div>
            <div ref={reveal} className="feature-pill-card card-shimmer scroll-delay-5">
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
