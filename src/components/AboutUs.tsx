import React, { useState } from 'react';


interface AboutUsProps {
  onOpenLeaderModal?: (person: 'harsh' | 'khwahish' | 'team') => void;
  onOpenStrategyModal?: (note?: string) => void;
  onSelectLocation?: (locationName: string) => void;
  backgroundColor?: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({ 
  onOpenLeaderModal, 
  onOpenStrategyModal: _onOpenStrategyModal, 
  onSelectLocation: _onSelectLocation,
  backgroundColor
}) => {
  const [hoveredLeader, setHoveredLeader] = useState<'harsh' | 'khwahish' | null>(null);

  return (
    <section id="about" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* 1. HERO HEADER & TAGLINE */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag" style={{ letterSpacing: '0.1em' }}>
            SEEN. HEARD. CHOSEN. — ABOUT DIGITAL DIGIX
          </div>
          <h2 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15 }}>
            We Don't Just Run Ads. <br />
            We Build Market Leaders.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Premium creative, data-driven performance, transparent pricing, and custom live growth dashboards. Founded on accountability, zero lock-in contracts, and founder-led execution.
          </p>
        </div>





        {/* 4. OUR CORE VALUE PILLARS GRID */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag">OUR DIFFERENTIATORS</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}>Core Value Pillars That Drive Results</h3>
          </div>

          <div className="responsive-4-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('team'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>👑</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Founder-Led Accounts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Senior founders Harsh Chaudhary (CEO) and Khwahish Sahai (Creative Director) directly manage and oversee your campaigns.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('team'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>🔓</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Zero Lock-In Contracts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                High accountability with flexible terms and zero restrictive long-term commitments. We earn your business every month.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('team'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>💳</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Post-Pay Flexibility</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Flexible milestone-based payment structures aligned directly with campaign execution and performance deliverables.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('team'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>📊</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Data Science Meets Design</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Custom real-time KPI and revenue dashboards giving you 100% complete transparency into ad spend, leads, and ROAS.
              </p>
            </div>
          </div>
        </div>


        {/* 5. LEADERSHIP SECTION (WITH REAL FOUNDER PHOTOS) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">EXECUTIVE LEADERSHIP</span>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Meet the Founders Behind Digital Digix</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Direct founder oversight on every client strategy</p>
          </div>

          <div className="responsive-2-grid" style={{ maxWidth: '980px', margin: '0 auto' }}>
            
            {/* HARSH CHAUDHARY - FOUNDER & CEO */}
            <div 
              style={{ 
                background: 'linear-gradient(145deg, var(--bg-card) 0%, rgba(59, 130, 246, 0.02) 100%)', 
                border: '1px solid var(--border-color)', 
                borderTop: hoveredLeader === 'harsh' ? '4px solid var(--primary)' : '4px solid var(--border-color)',
                borderRadius: '24px', 
                padding: '2rem 1.75rem', 
                display: 'flex', 
                gap: '1.75rem', 
                alignItems: 'center', 
                boxShadow: hoveredLeader === 'harsh' ? '0 20px 40px rgba(59, 130, 246, 0.08)' : 'var(--shadow-sm)', 
                cursor: 'pointer', 
                transform: hoveredLeader === 'harsh' ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('harsh'); }}
              onMouseEnter={() => setHoveredLeader('harsh')}
              onMouseLeave={() => setHoveredLeader(null)}
            >
              <img
                src="/harsh_chaudhary.png"
                alt="Harsh Chaudhary - Founder & CEO"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: hoveredLeader === 'harsh' ? '4px solid var(--primary)' : '3px solid var(--border-color)',
                  boxShadow: hoveredLeader === 'harsh' ? '0 8px 24px rgba(59, 130, 246, 0.2)' : 'var(--shadow-md)',
                  flexShrink: 0,
                  transform: hoveredLeader === 'harsh' ? 'scale(1.08) rotate(4deg)' : 'scale(1) rotate(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Harsh Chaudhary</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founder & CEO</div>
                  <a
                    href="https://www.linkedin.com/in/heyharsh2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077B5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  >
                    LinkedIn ↗
                  </a>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0.2rem 0', minHeight: '3.4rem' }}>
                  Performance marketing architecture, brand positioning, and B2B growth strategy — scaling brands across India.
                </p>
                <div style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.78rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  transform: hoveredLeader === 'harsh' ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}>
                  READ THEIR STORY →
                </div>
              </div>
            </div>

            {/* KHWAHISH SAHAI - CO-FOUNDER & CREATIVE DIRECTOR */}
            <div 
              className="leader-card" 
              style={{ 
                background: 'var(--bg-card)', 
                border: hoveredLeader === 'khwahish' ? '1px solid var(--green-accent)' : '1px solid var(--border-color)', 
                borderRadius: '24px', 
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.75rem', 
                boxShadow: hoveredLeader === 'khwahish' ? '0 20px 40px rgba(16, 185, 129, 0.08)' : 'var(--shadow-sm)', 
                cursor: 'pointer', 
                transform: hoveredLeader === 'khwahish' ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('khwahish'); }}
              onMouseEnter={() => setHoveredLeader('khwahish')}
              onMouseLeave={() => setHoveredLeader(null)}
            >
              <img
                src="/khwahish_sahai.png"
                alt="Khwahish Sahai - Co-Founder & Creative Director"
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: hoveredLeader === 'khwahish' ? '4px solid var(--green-accent)' : '3px solid var(--border-color)',
                  boxShadow: hoveredLeader === 'khwahish' ? '0 8px 24px rgba(16, 185, 129, 0.2)' : 'var(--shadow-md)',
                  flexShrink: 0,
                  transform: hoveredLeader === 'khwahish' ? 'scale(1.08) rotate(-4deg)' : 'scale(1) rotate(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Khwahish Sahai</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--green-accent)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Co-Founder & Creative Dir</div>
                  <a
                    href="https://www.linkedin.com/in/khwahish-sahai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077B5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  >
                    LinkedIn ↗
                  </a>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0.2rem 0', minHeight: '3.4rem' }}>
                  The premium creative standard behind every identity, campaign and conversion-first design.
                </p>
                <div style={{ 
                  color: 'var(--green-accent)', 
                  fontWeight: 800, 
                  fontSize: '0.78rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  transform: hoveredLeader === 'khwahish' ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}>
                  READ THEIR STORY →
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
};

