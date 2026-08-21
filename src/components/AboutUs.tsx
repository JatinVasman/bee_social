import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';


interface AboutUsProps {
  onNavigate?: (page: any, slug?: string) => void;
  onOpenLeaderModal?: (person: 'founder' | 'why-us' | 'team') => void;
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
  const reveal = useScrollReveal();
  const [hoveredLeader, setHoveredLeader] = useState<'founder' | null>(null);

  const coreServices = [
    {
      title: 'Social Media Marketing (SMM)',
      slug: 'social-media-marketing',
      icon: '📱',
      desc: 'Engaging content calendars, viral reels, community management, and organic growth strategies that build loyal audiences for your brand.'
    },
    {
      title: 'Performance Marketing & Paid Ads',
      slug: 'paid-ads',
      icon: '🎯',
      desc: 'High-ROAS Google Ads, Meta Advantage+ and YouTube campaigns designed to drive targeted traffic and quality leads.'
    },
    {
      title: 'Search Engine Optimization (SEO)',
      slug: 'seo',
      icon: '🔍',
      desc: 'Technical SEO, on-page optimization, and high-intent keyword ranking that drives predictable organic pipeline for your business.'
    },
    {
      title: 'Conversion-First Web Development',
      slug: 'web-development',
      icon: '💻',
      desc: 'Ultra-fast, mobile-responsive web applications built with modern architecture that turn visitors into customers.'
    },
    {
      title: 'Brand Identity & Graphic Design',
      slug: 'branding',
      icon: '🎨',
      desc: 'Logos, social media templates, pitch decks, and brand guideline systems that establish instant credibility and recognition.'
    },
    {
      title: 'Content Creation & UGC',
      slug: 'ugc-reels-creator-marketing',
      icon: '⚡',
      desc: 'Scroll-stopping reels, brand storytelling, creator collaborations, and UGC campaigns that capture attention and spark engagement.'
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* 1. HERO HEADER & TAGLINE */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div ref={reveal} className="section-tag" style={{ letterSpacing: '0.1em' }}>
            ABOUT BEESOCIAL
          </div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15 }}>
            We Make Brands <br />
            Impossible to Ignore. 🐝
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            At BeeSocial, we combine strategy, creativity and technology to help businesses grow in a crowded digital world. From your logo and brand identity to social media, professional photography, reels, paid advertising and influencer collaborations — we bring everything together under one roof.
          </p>
          {onNavigate && (
            <button
              ref={reveal}
              className="btn btn-primary scroll-delay-3"
              onClick={() => onNavigate('about')}
              style={{ marginTop: '1.5rem' }}
            >
              Know More About BeeSocial →
            </button>
          )}
        </div>

        {/* 4. OUR CORE VALUE PILLARS GRID */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span ref={reveal} className="section-tag">OUR DIFFERENTIATORS</span>
            <h3 ref={reveal} className="scroll-delay-1" style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif', color: 'var(--secondary)' }}>Core Value Pillars That Drive Results</h3>
          </div>

          <div className="responsive-4-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div ref={reveal} className="differentiator-card card-shimmer scroll-delay-1" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>👑</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Founder-Led Accounts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Our founder Siddhi directly oversees strategy and creative direction for every client account.
              </p>
            </div>

            <div ref={reveal} className="differentiator-card card-shimmer scroll-delay-2" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>🔓</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Zero Lock-In Contracts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                High accountability with flexible terms and zero restrictive long-term commitments. We earn your business every month.
              </p>
            </div>

            <div ref={reveal} className="differentiator-card card-shimmer scroll-delay-3" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>🎨</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Creative Excellence</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Every post, reel, and campaign is crafted with attention to detail that makes your brand impossible to scroll past.
              </p>
            </div>

            <div ref={reveal} className="differentiator-card card-shimmer scroll-delay-4" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>📊</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Data Meets Design</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                We track every metric that matters — reach, engagement, conversions — so your creative investment delivers real business results.
              </p>
            </div>
          </div>
        </div>

        {/* 5. LEADERSHIP SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span ref={reveal} className="section-tag">LEADERSHIP</span>
            <h3 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)' }}>Meet the Founder Behind BeeSocial</h3>
            <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Founder-led creative direction on every project</p>
          </div>

          <div ref={reveal} className="scroll-delay-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
            
            {/* SIDDHI - FOUNDER */}
            <div 
              className="card-shimmer"
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color-subtle)', 
                borderTop: '4px solid var(--primary)',
                borderRadius: '24px', 
                padding: '2rem 1.75rem', 
                display: 'flex', 
                gap: '1.75rem', 
                alignItems: 'center', 
                boxShadow: hoveredLeader === 'founder' ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', 
                cursor: 'pointer', 
                transform: hoveredLeader === 'founder' ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('founder'); }}
              onMouseEnter={() => setHoveredLeader('founder')}
              onMouseLeave={() => setHoveredLeader(null)}
            >
              <img
                src="/Siddhi.PNG"
                alt="Siddhi - Founder"
                width="120"
                height="160"
                loading="lazy"
                decoding="async"
                style={{
                  width: '120px',
                  height: '160px',
                  borderRadius: '18px',
                  objectFit: 'cover',
                  objectPosition: 'center 18%',
                  border: hoveredLeader === 'founder' ? '4px solid var(--primary)' : '3px solid var(--border-color-subtle)',
                  boxShadow: hoveredLeader === 'founder' ? '0 8px 24px rgba(214, 51, 108, 0.25)' : 'var(--shadow-card)',
                  flexShrink: 0,
                  transform: hoveredLeader === 'founder' ? 'scale(1.04) translateY(-2px)' : 'scale(1) translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Siddhi</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founder</div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: '0.2rem 0', minHeight: '3.4rem' }}>
                  Leading brand strategy, creative direction, and operations — uniting storytelling and business thinking to help brands build a high-impact digital presence. 🐝
                </p>
                <div style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800, 
                  fontSize: '0.78rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  transform: hoveredLeader === 'founder' ? 'translateX(6px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}>
                  LEARN MORE →
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6. CORE GROWTH SERVICES & CAPABILITIES */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span ref={reveal} className="section-tag">SERVICES & CAPABILITIES</span>
            <h3 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--secondary)' }}>What We Do Best</h3>
            <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Click any capability to view full details</p>
          </div>

          <div className="responsive-3-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
            {coreServices.map((srv, srvIdx) => (
              <div
                key={srvIdx}
                ref={reveal}
                className={`card-shimmer scroll-delay-${(srvIdx % 3) + 1}`}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('service-details', srv.slug);
                  } else {
                    window.location.href = `/services/${srv.slug}`;
                  }
                }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderTop: '4px solid var(--primary)',
                  borderLeft: '1px solid var(--border-color-subtle)',
                  borderRight: '1px solid var(--border-color-subtle)',
                  borderBottom: '1px solid var(--border-color-subtle)',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                  boxShadow: 'var(--shadow-card)',
                  cursor: 'pointer',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{srv.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                  {srv.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 1.25rem 0', flexGrow: 1 }}>
                  {srv.desc}
                </p>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Explore Service</span>
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

