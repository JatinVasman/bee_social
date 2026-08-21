import React from 'react';
import type { StatType } from './StatCardModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onOpenStrategyModal: () => void;
  onNavigateServices: () => void;
  onNavigatePortfolio: () => void;
  onOpenStatModal: (type: StatType) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenStrategyModal,
  onNavigatePortfolio,
  onOpenStatModal
}) => {
  const reveal = useScrollReveal();

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div ref={reveal} className="hero-tag">
            🐝 STRATEGY. CREATIVITY. GROWTH.
          </div>
          <h1 ref={reveal} className="hero-title scroll-delay-1">
            Your Brand. Our Creativity. <br />
            <span className="text-red">Real Growth.</span>
          </h1>
          <p ref={reveal} className="hero-subtext scroll-delay-2">
            BeeSocial is a creative branding and digital marketing agency helping businesses build a powerful online presence through strategy, content, design, social media and influencer marketing.
          </p>
          <div ref={reveal} className="hero-buttons scroll-delay-3">
            <button className="btn btn-primary" onClick={onOpenStrategyModal}>
              Get a Free Consultation
            </button>
            <button className="btn btn-secondary" onClick={onNavigatePortfolio}>
              View Our Work
            </button>
          </div>
        </div>

        {/* Hero Building Visual Container */}
        <div className="hero-building-wrapper">
          <img
            src="/hero_new.jpg"
            alt="BeeSocial Creative Agency"
            className="hero-building-img"
            fetchPriority="high"
            decoding="async"
            width="540"
            height="400"
          />

          {/* Floating Stat Card 1: Revenue (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-revenue"
            onClick={() => onOpenStatModal('revenue')}
            style={{ cursor: 'pointer' }}
            title="Click to view Revenue Breakdown"
          >
            <div className="hero-stat-icon-box">📈</div>
            <div>
              <div className="hero-stat-label">Client Revenue Gen</div>
              <div className="hero-stat-value">₹8.7M+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>

          {/* Floating Stat Card 2: Clicks (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-clicks"
            onClick={() => onOpenStatModal('clicks')}
            style={{ cursor: 'pointer' }}
            title="Click to view Click Analytics"
          >
            <div className="hero-stat-icon-box">⚡</div>
            <div>
              <div className="hero-stat-label">High-Intent Clicks</div>
              <div className="hero-stat-value">1.4M+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>

          {/* Floating Stat Card 3: Conversions (Clickable Pop-Up) */}
          <div
            className="hero-stat-card card-conversions"
            onClick={() => onOpenStatModal('conversions')}
            style={{ cursor: 'pointer' }}
            title="Click to view Conversion Rates"
          >
            <div className="hero-stat-icon-box">🎯</div>
            <div>
              <div className="hero-stat-label">Avg Return On Ad Spend</div>
              <div className="hero-stat-value">4.71x ROAS</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.2rem' }}>Click breakdown ➔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
