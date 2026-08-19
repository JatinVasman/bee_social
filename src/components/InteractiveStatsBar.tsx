import React, { useState, useRef } from 'react';
import { domesticLocations, internationalLocations } from './Footer';

const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}> = ({ target, duration = 3500, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out cubic for smoother deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = eased * target;
      setCount(currentCount);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasStarted, target, duration]);

  const formatted = count.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <span ref={elementRef}>{formatted}{suffix}</span>;
};

interface InteractiveStatsBarProps {
  onSelectLocation?: (locationName: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

type ModalType = 'clients' | 'projects' | 'rating' | 'locations' | null;

export const InteractiveStatsBar: React.FC<InteractiveStatsBarProps> = ({
  onSelectLocation,
  onOpenStrategyModal
}) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [locationSearch, setLocationSearch] = useState('');

  const filteredDomestic = domesticLocations.filter((loc: string) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredInternational = internationalLocations.filter((loc: string) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const handleLocationClick = (loc: string) => {
    setActiveModal(null);
    if (onSelectLocation) {
      onSelectLocation(loc);
    }
  };

  return (
    <>
      {/* 4-COLUMN ANIMATED STATS BAR MATCHING SCREENSHOT 1 */}
      <div
        className="responsive-4-grid"
        style={{
          marginBottom: '4rem',
          background: 'var(--bg-card)',
          padding: '1.5rem 1.25rem',
          borderRadius: '20px',
          border: '1px solid var(--border-color-subtle)',
          boxShadow: 'var(--shadow-card)',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto 4rem auto'
        }}
      >
        {/* CARD 1: HAPPY CLIENTS */}
        <div
          onClick={() => setActiveModal('clients')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: 'rgba(214, 51, 108, 0.04)',
            border: '1px solid rgba(214, 51, 108, 0.10)',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 108, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1.15 }}>
            <AnimatedCounter target={2700} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Happy Clients
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Across 89 Industries
          </div>
        </div>

        {/* CARD 2: DELIVERED PROJECTS */}
        <div
          onClick={() => setActiveModal('projects')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: 'rgba(16, 185, 129, 0.04)',
            border: '1px solid rgba(16, 185, 129, 0.12)',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 108, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#10B981', lineHeight: 1.15 }}>
            <AnimatedCounter target={500} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Delivered Projects
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            100% Satisfaction Rate
          </div>
        </div>

        {/* CARD 3: CLIENT RATING */}
        <div
          onClick={() => setActiveModal('rating')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: 'rgba(214, 51, 108, 0.03)',
            border: '1px solid rgba(214, 51, 108, 0.08)',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 108, 0.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1.15 }}>
            <AnimatedCounter target={4.9} suffix="★" decimals={1} />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Client Rating
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Google & Clutch Verified
          </div>
        </div>

        {/* CARD 4: CITIES & INTERNATIONAL (ALL LOCATIONS POP-UP) */}
        <div
          onClick={() => setActiveModal('locations')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: 'rgba(139, 92, 246, 0.04)',
            border: '1px solid rgba(139, 92, 246, 0.10)',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 108, 0.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1.15 }}>
            <AnimatedCounter target={50} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Cities & International
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Noida, Delhi, USA, UK, Dubai
          </div>
        </div>
      </div>

      {/* MODAL 1: HAPPY CLIENTS BREAKDOWN */}
      {activeModal === 'clients' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(214, 51, 108, 0.04)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🤝</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>CLIENT TRUST</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>2,700+ Happy Clients</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              From high-growth D2C brands and dental clinics to real estate developers and edtech platforms across 89 industries, BeeSocial delivers founder-led performance marketing.
            </p>

            <div style={{ background: 'var(--bg-subtle, #FFF0F2)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color-subtle)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Top Client Verticals:</h4>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                <li>✓ Healthcare & Dental Clinics</li>
                <li>✓ Real Estate & Developers</li>
                <li>✓ E-Commerce & D2C Brands</li>
                <li>✓ Food & Hospitality</li>
                <li>✓ Education & Coaching</li>
                <li>✓ B2B SaaS & Tech</li>
              </ul>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('Client Growth Partnership');
              }}
            >
              Partner With BeeSocial ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: DELIVERED PROJECTS */}
      {activeModal === 'projects' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0FDF4', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🚀</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>PROJECT PORTFOLIO</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>500+ Delivered Projects</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Every project is engineered with high-converting web design, data science Meta & Google ad funnels, viral short video reels, and custom KPI dashboards.
            </p>

            <div style={{ background: 'var(--bg-subtle, #FFF0F2)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color-subtle)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Key Project Deliverables:</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#475569' }}>
                <li>✓ Full 17-Service Digital Marketing Matrix</li>
                <li>✓ High-converting Next.js / React Web Applications</li>
                <li>✓ 100% Commercial IP & Source Code Ownership</li>
              </ul>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', backgroundColor: '#10B981', borderColor: '#10B981' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('New Digital Project');
              }}
            >
              Start Your Project ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: CLIENT RATING */}
      {activeModal === 'rating' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(214, 51, 108, 0.04)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>⭐</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>VERIFIED RATINGS</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>4.9★ Overall Rating</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Ranked 4.9/5 across Google Business, Clutch, and independent review portals with zero lock-in contracts and 100% satisfaction guarantee.
            </p>

            <div style={{ background: 'var(--bg-subtle, #FFF0F2)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color-subtle)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Review Breakdown:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-color-subtle)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)' }}>4.9★</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Google Reviews</div>
                </div>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-color-subtle)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#10B981' }}>5.0★</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Clutch Verified</div>
                </div>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-color-subtle)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Satisfaction</div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', backgroundColor: 'var(--primary-raw, #D6336C)', borderColor: 'var(--primary)' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('Verified Growth Review');
              }}
            >
              Get Free Performance Audit ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 4: ALL 57 LOCATIONS FULL PAGE VIEW */}
      {activeModal === 'locations' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '1.5rem' }} onClick={() => setActiveModal(null)}>×</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F5F3FF', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>GLOBAL FOOTPRINT</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>50+ Cities & International Hubs</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Click any location below to open its dedicated digital marketing landing page:
            </p>

            {/* SEARCH INPUT FILTER */}
            <input
              type="text"
              placeholder="🔍 Search city or country (e.g., Lucknow, Mumbai, USA, Dubai)..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                outline: 'none',
                marginBottom: '1.75rem'
              }}
            />

            {/* DOMESTIC LOCATIONS PILLS */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.85rem' }}>
                🇮🇳 Domestic Locations ({filteredDomestic.length})
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredDomestic.map((loc: string) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: 'var(--bg-subtle, #FFF0F2)',
                      color: 'var(--secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '999px',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-subtle, #FFF0F2)';
                      e.currentTarget.style.color = 'var(--secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* INTERNATIONAL LOCATIONS PILLS */}
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.85rem' }}>
                🌐 International Locations ({filteredInternational.length})
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredInternational.map((loc: string) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: '#F5F3FF',
                      color: '#6D28D9',
                      border: '1px solid #DDD6FE',
                      borderRadius: '999px',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6D28D9';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#6D28D9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F5F3FF';
                      e.currentTarget.style.color = '#6D28D9';
                      e.currentTarget.style.borderColor = '#DDD6FE';
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
