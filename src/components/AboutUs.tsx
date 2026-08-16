import React, { useState } from 'react';


interface AboutUsProps {
  onNavigate?: (page: any, slug?: string) => void;
  onOpenLeaderModal?: (person: 'founder' | 'harsh' | 'co-founder' | 'khwahish' | 'why-us' | 'team') => void;
  onOpenStrategyModal?: (note?: string) => void;
  onSelectLocation?: (locationName: string) => void;
  backgroundColor?: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({ 
  onNavigate,
  onOpenLeaderModal, 
  onOpenStrategyModal: _onOpenStrategyModal, 
  onSelectLocation: _onSelectLocation,
  backgroundColor
}) => {
  const [hoveredLeader, setHoveredLeader] = useState<'founder' | 'harsh' | 'co-founder' | 'khwahish' | null>(null);

  const coreServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      slug: 'seo',
      icon: '🔍',
      desc: 'Technical SEO, Generative Engine Optimization (GEO), and high-intent keyword ranking that drives predictable organic pipeline.'
    },
    {
      title: 'Performance Marketing & Paid Ads',
      slug: 'paid-ads',
      icon: '🎯',
      desc: 'High-ROAS Google Ads, Meta Advantage+ and YouTube campaigns engineered with continuous creative experimentation.'
    },
    {
      title: 'Social Media Marketing (SMM)',
      slug: 'social-media-marketing',
      icon: '📱',
      desc: 'Viral UGC reels, custom monthly content calendars, and community engagement designed for brand authority and inbound inquiries.'
    },
    {
      title: 'Conversion-First Web Development',
      slug: 'web-development',
      icon: '💻',
      desc: 'Ultra-fast, mobile-responsive web applications built with React, Next.js, and modern SEO architecture.'
    },
    {
      title: 'Brand Identity & Graphic Design',
      slug: 'branding',
      icon: '🎨',
      desc: 'Logos, packaging, pitch decks, and brand guideline systems that establish instant credibility and command higher margins.'
    },
    {
      title: 'B2B Lead Generation & Funnels',
      slug: 'lead-generation',
      icon: '⚡',
      desc: 'Account-based outbound campaigns, automated CRM integrations, and WhatsApp conversion funnels that fill sales calendars.'
    }
  ];

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
            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>👑</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Founder-Led Accounts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Senior founders Harsh Chaudhary (CEO) and Khwahish Sahai (Creative Director) directly manage and oversee your campaigns.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>🔓</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Zero Lock-In Contracts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                High accountability with flexible terms and zero restrictive long-term commitments. We earn your business every month.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>💳</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Post-Pay Flexibility</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Flexible milestone-based payment structures aligned directly with campaign execution and performance deliverables.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
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
                borderTop: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? '4px solid var(--primary)' : '4px solid var(--border-color)',
                borderRadius: '24px', 
                padding: '2rem 1.75rem', 
                display: 'flex', 
                gap: '1.75rem', 
                alignItems: 'center', 
                boxShadow: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? '0 20px 40px rgba(59, 130, 246, 0.08)' : 'var(--shadow-sm)', 
                cursor: 'pointer', 
                transform: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('founder'); }}
              onMouseEnter={() => setHoveredLeader('founder')}
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
                  border: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? '4px solid var(--primary)' : '3px solid var(--border-color)',
                  boxShadow: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? '0 8px 24px rgba(59, 130, 246, 0.2)' : 'var(--shadow-md)',
                  flexShrink: 0,
                  transform: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? 'scale(1.08) rotate(4deg)' : 'scale(1) rotate(0)',
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
                  transform: (hoveredLeader === 'founder' || hoveredLeader === 'harsh') ? 'translateX(6px)' : 'translateX(0)',
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
                border: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? '1px solid var(--green-accent)' : '1px solid var(--border-color)', 
                borderRadius: '24px', 
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.75rem', 
                boxShadow: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? '0 20px 40px rgba(16, 185, 129, 0.08)' : 'var(--shadow-sm)', 
                cursor: 'pointer', 
                transform: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('co-founder'); }}
              onMouseEnter={() => setHoveredLeader('co-founder')}
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
                  border: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? '4px solid var(--green-accent)' : '3px solid var(--border-color)',
                  boxShadow: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? '0 8px 24px rgba(16, 185, 129, 0.2)' : 'var(--shadow-md)',
                  flexShrink: 0,
                  transform: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? 'scale(1.08) rotate(-4deg)' : 'scale(1) rotate(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Khwahish Sahai</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--green-accent)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Co-Founder & Creative Director</div>
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
                  transform: (hoveredLeader === 'co-founder' || hoveredLeader === 'khwahish') ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}>
                  READ THEIR STORY →
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6. CORE GROWTH SERVICES & CAPABILITIES */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag">SERVICES & EXECUTION</span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900 }}>Our Core Growth Disciplines</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Click any capability to view full deliverables, workflows, and pricing</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
            {coreServices.map((srv, srvIdx) => (
              <div
                key={srvIdx}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('service-details', srv.slug);
                  } else {
                    window.location.href = `/services/${srv.slug}`;
                  }
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTop: '4px solid #FF4E27',
                  borderLeft: '1px solid #E2E8F0',
                  borderRight: '1px solid #E2E8F0',
                  borderBottom: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 78, 39, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{srv.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                  {srv.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 1.25rem 0', flexGrow: 1 }}>
                  {srv.desc}
                </p>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF4E27', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Explore Service & Plans</span>
                  <span>➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

