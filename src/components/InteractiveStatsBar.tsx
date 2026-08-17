import React, { useState } from 'react';
import { domesticLocations, internationalLocations } from './Footer';

const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}> = ({ target, duration = 3500, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * target;
      setCount(currentCount);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [target, duration]);

  const formatted = count.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <>{formatted}{suffix}</>;
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
          background: '#FFFFFF',
          padding: '1.5rem 1.25rem',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 35px rgba(11, 19, 42, 0.05)',
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
            backgroundColor: '#FFF8F6',
            border: '1px solid #FFEBE5',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 78, 39, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#FF4E27', lineHeight: 1.15 }}>
            <AnimatedCounter target={2700} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Happy Clients
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
            Across 89 Industries
          </div>
        </div>

        {/* CARD 2: DELIVERED PROJECTS */}
        <div
          onClick={() => setActiveModal('projects')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#F0FDF4',
            border: '1px solid #DCFCE7',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#10B981', lineHeight: 1.15 }}>
            <AnimatedCounter target={500} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Delivered Projects
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
            100% Satisfaction Rate
          </div>
        </div>

        {/* CARD 3: CLIENT RATING */}
        <div
          onClick={() => setActiveModal('rating')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #DBEAFE',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#3B82F6', lineHeight: 1.15 }}>
            <AnimatedCounter target={4.9} suffix="★" decimals={1} />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Client Rating
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
            Google & Clutch Verified
          </div>
        </div>

        {/* CARD 4: CITIES & INTERNATIONAL (ALL LOCATIONS POP-UP) */}
        <div
          onClick={() => setActiveModal('locations')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#F5F3FF',
            border: '1px solid #DDD6FE',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#8B5CF6', lineHeight: 1.15 }}>
            <AnimatedCounter target={50} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Cities & International
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
            Noida, Delhi, USA, UK, Dubai
          </div>
        </div>
      </div>

      {/* MODAL 1: HAPPY CLIENTS BREAKDOWN */}
      {activeModal === 'clients' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFF8F6', color: '#FF4E27', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🤝</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>CLIENT TRUST</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>2,700+ Happy Clients</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              From high-growth D2C brands and dental clinics to real estate developers and edtech platforms across 89 industries, BeeSocial delivers founder-led performance marketing.
            </p>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Top Client Verticals:</h4>
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
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0FDF4', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🚀</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>PROJECT PORTFOLIO</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>500+ Delivered Projects</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Every project is engineered with high-converting web design, data science Meta & Google ad funnels, viral short video reels, and custom KPI dashboards.
            </p>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Key Project Deliverables:</h4>
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
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>⭐</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>VERIFIED RATINGS</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>4.9★ Overall Rating</h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Ranked 4.9/5 across Google Business, Clutch, and independent review portals with zero lock-in contracts and 100% satisfaction guarantee.
            </p>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '16px', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Review Breakdown:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#3B82F6' }}>4.9★</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Google Reviews</div>
                </div>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#10B981' }}>5.0★</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Clutch Verified</div>
                </div>
                <div style={{ background: '#FFF', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FF4E27' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Satisfaction</div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', backgroundColor: '#3B82F6', borderColor: '#3B82F6' }}
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
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '1.5rem' }} onClick={() => setActiveModal(null)}>×</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F5F3FF', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>GLOBAL FOOTPRINT</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A' }}>50+ Cities & International Hubs</h3>
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
                border: '1px solid #CBD5E1',
                fontSize: '0.9rem',
                outline: 'none',
                marginBottom: '1.75rem'
              }}
            />

            {/* DOMESTIC LOCATIONS PILLS */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.85rem' }}>
                🇮🇳 Domestic Locations ({filteredDomestic.length})
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredDomestic.map((loc: string) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: '#F8FAFC',
                      color: '#0F172A',
                      border: '1px solid #CBD5E1',
                      borderRadius: '999px',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#8B5CF6';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#8B5CF6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = '#0F172A';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* INTERNATIONAL LOCATIONS PILLS */}
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.85rem' }}>
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
