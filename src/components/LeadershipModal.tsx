import React, { useEffect } from 'react';

export type LeaderPerson = 'founder' | 'harsh' | 'co-founder' | 'cofounder' | 'khwahish' | 'why-us' | 'team' | null;

interface LeadershipModalProps {
  person: LeaderPerson;
  onClose: () => void;
  onOpenStrategyModal?: (note?: string) => void;
  onNavigate?: (page: any, slug?: string) => void;
}

export const LeadershipModal: React.FC<LeadershipModalProps> = ({ person, onClose, onOpenStrategyModal: _onOpenStrategyModal, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (person) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [person, onClose]);

  if (!person) return null;

  const isFounder = person === 'founder' || person === 'harsh' || person === 'co-founder' || person === 'cofounder' || person === 'khwahish';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Leadership Modal">
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
      </div>
      <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>

        {isFounder && (
          <div>
            {/* Top Layout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
              
              {/* Left Column (Image & Quote & Stats) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Photo & Quote Container */}
                <div style={{ background: '#ECEFF4', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative Background circles */}
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(214, 51, 108, 0.08)' }} />
                  <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(214, 51, 108, 0.08)' }} />
                  
                  <img
                    src="/Siddhi.PNG"
                    alt="Siddhi - Founder"
                    style={{
                      width: '230px',
                      height: '300px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      objectPosition: 'center 18%',
                      border: '6px solid #FFF',
                      boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)',
                      margin: '0 auto 1.5rem auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--secondary)', lineHeight: 1.6, fontWeight: 500, margin: '0 0 0.5rem 0' }}>
                      "I believe great brands are built with creative clarity, thoughtful strategy, and authentic community engagement."
                    </p>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>— Siddhi</span>
                  </div>
                </div>

                {/* Stats Table Banner */}
                <div style={{ background: 'var(--secondary)', borderRadius: '24px', padding: '1.5rem', color: '#FFF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)' }}>100+</div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '2px' }}>Clients</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)' }}>250+</div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '2px' }}>Projects</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)' }}>3X</div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '2px' }}>Growth</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)' }}>5+</div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '2px' }}>Years</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)' }}>10+</div>
                      <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '2px' }}>Sectors</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', lineHeight: 1.4 }}>
                    Trusted by startups, businesses & established brands to drive meaningful growth.
                  </div>
                </div>

                {/* Mission, Vision, Values Stacked Vertically with pop-up animations */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.5rem' }}>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🎯</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Mission</h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                      To empower businesses with scroll-stopping creative content, strong branding, and strategic marketing that creates lasting value.
                    </p>
                  </div>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>👁️</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Vision</h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                      To be a premier creative and digital marketing partner celebrated for original storytelling, high engagement, and genuine impact.
                    </p>
                  </div>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🤝</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>Core Values</h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                      Creativity, Transparency, Excellence, Authenticity, and a dedicated focus on client success.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column (Bio, Areas of Expertise, My Journey) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.4rem', display: 'inline-block' }}>FOUNDER</span>
                  <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.2rem', lineHeight: 1.15 }}>Siddhi</h2>
                  <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Founder, BeeSocial</p>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.85rem', marginTop: '0.2rem', marginBottom: '0.8rem' }}>Creative Strategist & Social Growth Director</p>
                  <a
                    href="https://www.instagram.com/beesocial._"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'var(--secondary)',
                      color: '#FFFFFF',
                      padding: '0.45rem 1.25rem',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-raw, #D6336C)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                  >
                    Follow on Instagram 📸
                  </a>
                </div>

                <div style={{ width: '100%', height: '1.5px', background: '#E2E8F0' }} />

                <p style={{ color: '#334155', fontSize: '0.975rem', lineHeight: 1.75, margin: 0 }}>
                  Siddhi leads <strong>BeeSocial</strong> across brand strategy, digital marketing, social media, content direction, client partnerships, and day-to-day operations. From shaping scroll-stopping creative campaigns to architecting high-converting growth funnels, she seamlessly unites strategy, design excellence, and business acumen to help brands establish an unmistakable, high-impact digital presence.
                </p>

                {/* Purpose-Driven Leadership Callout */}
                <div style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)', border: '1px solid #FCD34D', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '0.925rem', marginBottom: '0.35rem', color: '#92400E' }}>
                    <span style={{ fontSize: '1.15rem' }}>🐝</span>
                    <span>Beyond Conventional Marketing</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, margin: 0, color: '#78350F' }}>
                    Her leadership goes far beyond marketing — she steers the agency’s vision, orchestrates end-to-end operations, and ensures every creative idea moves from concept to execution with clarity, purpose, and measurable impact.
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1rem' }}>Areas of Expertise</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📱</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>Social Media & Brand Strategy</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Viral reels, content calendars, and community building across platforms.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📢</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>Growth & Performance Marketing</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>ROI-focused paid campaigns across Meta, Google & YouTube.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🎨</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>Brand Design & Identity</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Crafting distinct visual identities, logos, and guidelines that stand out.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🔬</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>Content Direction & Hooks</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Scroll-stopping copy, creative angles, and narrative design.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>💻</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>Conversion Web Design</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Fast, responsive websites engineered to turn traffic into inquiries.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>⚙️</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--secondary)', margin: '0 0 0.15rem 0' }}>End-to-End Operations</h5>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>Orchestrating campaign timelines, client relations, and quality assurance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leadership Philosophy */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Leadership & Philosophy</h3>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 0.5rem 0' }}>
                    "At BeeSocial, we believe that modern marketing must do more than just look aesthetic — it must create authentic connections, engage dedicated communities, and drive meaningful business momentum."
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                    By pairing bold visual creativity with structured business thinking, Siddhi ensures that every client collaboration is backed by dedicated founder involvement and purposeful execution.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {person === 'why-us' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-tag">SCROLL. STOP. ENGAGE.</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0.5rem 0', fontFamily: 'Outfit, sans-serif' }}>Why Choose BeeSocial?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>4 Unique Pillars That Separate Us From Standard Agencies</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="modal-whyus-card animate-fade-slide delay-1" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>👑 1. Founder-Led Accounts</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Unlike typical agencies that hand your brand over to junior interns, BeeSocial guarantees that our founder Siddhi directly drives strategy, reviews creative output, and oversees campaign direction for every client.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-2" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--green-accent)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>🔓 2. Zero Lock-In Model</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  We reject rigid lock-in contracts that force lengthy commitments. Our model operates with flexibility, earning your business and trust month after month through tangible results.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-3" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>🎨 3. Creative First Standards</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  In a world of generic AI templates, we produce original, scroll-stopping content with compelling visual hooks and storytelling that make your brand stand out immediately.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-4" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>📊 4. Data Meets Design</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Great creative paired with thoughtful analytics. We track engagement, reach, and conversion metrics to make sure your marketing investment translates into real business growth.
                </p>
              </div>
            </div>

            {/* TACTICAL EXECUTION PHILOSOPHY */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--secondary)', textAlign: 'center' }}>
                Our 3-Stage Growth Framework
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div className="modal-stage-card animate-fade-slide delay-1" style={{ background: 'rgba(214, 51, 108, 0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 78, 39, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>🎯</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>01. Audience Discovery</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We analyze your market, competitors, and target demographics to identify the exact visual style and messaging that resonates.
                  </p>
                </div>

                <div className="modal-stage-card animate-fade-slide delay-2" style={{ background: '#EEF2FF', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>⚡</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>02. Content Creation</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We craft engaging visual creatives, reels, graphics, and direct-response copy that capture attention in seconds.
                  </p>
                </div>

                <div className="modal-stage-card animate-fade-slide delay-3" style={{ background: '#ECFDF5', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>📈</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--green-accent)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>03. Distribution & Scaling</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We amplify organic reach and targeted ad campaigns to consistently attract, engage, and convert qualified leads.
                  </p>
                </div>
              </div>
            </div>

            {/* HONEST COMPARISON TABLE */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="section-tag" style={{ color: 'var(--primary)', background: 'rgba(214, 51, 108, 0.08)' }}>HONEST COMPARISON</span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: 'var(--secondary)', margin: '0.4rem 0' }}>
                  BeeSocial vs Freelancers vs Big Agencies vs In-House
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>How the four options stack up — judge for yourself.</p>
              </div>

              <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--secondary)', color: '#FFFFFF' }}>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Aspect</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)' }}>BeeSocial</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Freelancers</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Big Agencies</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>In-House Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Cost Efficiency</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Flexible month-to-month plans</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-muted)' }}>✓ Low hourly rates</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ High retainer / lock-in</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ High salary overhead</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-subtle, #FFF0F2)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Expertise Breadth</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Full creative & digital stack</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Single skill set</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)' }}>✓ Full service</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Limited bandwidth</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Results Accountability</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Transparent reporting & ROI focus</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Varies widely</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Possible agency fluff</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Less marketing expertise</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-subtle, #FFF0F2)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Communication</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Direct access to founder & team</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Often less reliable</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Many layers</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ No strategy expert</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Personalization</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ High-touch, founder involvement</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)' }}>✓ Highly flexible</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Cookie-cutter</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Risk of groupthink</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-subtle, #FFF0F2)' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Focus on Growth</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Strategic, long-term growth mindset</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Short-term gigs</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Standardized claims</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Reactive / habitual</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <button
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 2.2rem', fontWeight: 800 }}
                  onClick={() => {
                    window.open('https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20BeeSocial%20services', '_blank');
                  }}
                >
                  Get in Touch ➔
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 2.2rem', fontWeight: 800, borderColor: 'var(--border-color)', color: 'var(--secondary)', backgroundColor: 'var(--bg-card)' }}
                  onClick={() => {
                    onClose();
                    if (onNavigate) {
                      onNavigate('portfolio');
                    }
                  }}
                >
                  See Our Work
                </button>
              </div>
            </div>
          </div>
        )}

        {person === 'team' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span className="section-tag">OUR CREATIVE TEAM</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '0.5rem 0' }}>Meet the Creative Minds at BeeSocial</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Full-spectrum social media and digital growth specialists</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/Siddhi.PNG" alt="Siddhi" style={{ width: '65px', height: '85px', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center 18%', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.1rem' }}>Siddhi</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>Founder</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Creative Strategy & Growth</div>
                </div>
              </div>

              <div 
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('service-details', 'social-media-marketing');
                }}
                style={{ 
                  background: 'var(--bg-subtle)', 
                  padding: '1.25rem', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>Social Media & Content Strategists ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Creators crafting viral reels, UGC campaigns, and high-engagement monthly calendars.</p>
              </div>

              <div 
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('service-details', 'paid-ads');
                }}
                style={{ 
                  background: 'var(--bg-subtle)', 
                  padding: '1.25rem', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>Media Buyers & Ad Specialists ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Meta Advantage+, Google Ads & YouTube specialists optimizing ROAS.</p>
              </div>

              <div 
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('service-details', 'seo');
                }}
                style={{ 
                  background: 'var(--bg-subtle)', 
                  padding: '1.25rem', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>SEO & Discovery Engineers ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Technical SEO & keyword experts ranking brands organically across search engines.</p>
              </div>

              <div 
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('service-details', 'web-development');
                }}
                style={{ 
                  background: 'var(--bg-subtle)', 
                  padding: '1.25rem', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>UI/UX & Web Developers ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>React & modern web developers creating high-conversion landing pages.</p>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>Dedicated Account Managers</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct communication leads providing regular updates and strategy calls.</p>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                window.open('https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20working%20with%20BeeSocial', '_blank');
              }}
            >
              Work With BeeSocial ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
