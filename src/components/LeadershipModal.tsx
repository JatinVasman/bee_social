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

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Leadership Modal">
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
      </div>
      <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>

        {(person === 'founder' || person === 'harsh') && (
          <div>
            {/* Top Layout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
              
              {/* Left Column (Image & Quote & Stats) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Photo & Quote Container */}
                <div style={{ background: '#ECEFF4', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative Background circles */}
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)' }} />
                  <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)' }} />
                  
                  <img
                    src="/harsh_chaudhary.png"
                    alt="Harsh Chaudhary"
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '6px solid #FFF',
                      boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
                      margin: '0 auto 1.5rem auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: '#1E293B', lineHeight: 1.6, fontWeight: 500, margin: '0 0 0.5rem 0' }}>
                      "I believe great brands are built with clarity, strategy, and consistency — not luck."
                    </p>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>— Harsh</span>
                  </div>
                </div>

                {/* Stats Table Banner */}
                <div style={{ background: '#0F172A', borderRadius: '24px', padding: '1.5rem', color: '#FFF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6' }}>100+</div>
                      <div style={{ fontSize: '0.625rem', color: '#94A3B8', marginTop: '2px' }}>Clients</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6' }}>250+</div>
                      <div style={{ fontSize: '0.625rem', color: '#94A3B8', marginTop: '2px' }}>Projects</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6' }}>3X</div>
                      <div style={{ fontSize: '0.625rem', color: '#94A3B8', marginTop: '2px' }}>Growth</div>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6' }}>5+</div>
                      <div style={{ fontSize: '0.625rem', color: '#94A3B8', marginTop: '2px' }}>Years</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#3B82F6' }}>10+</div>
                      <div style={{ fontSize: '0.625rem', color: '#94A3B8', marginTop: '2px' }}>Sectors</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', textAlign: 'center', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', lineHeight: 1.4 }}>
                    Trusted by startups, SMEs & established brands across healthcare, real estate, education & more.
                  </div>
                </div>

                {/* Mission, Vision, Values Stacked Vertically with pop-up animations */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.5rem' }}>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🎯</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Mission</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      To empower businesses with smart strategies, strong branding, and performance-driven marketing that creates long-term value.
                    </p>
                  </div>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>👁️</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Vision</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      To be a global digital growth partner known for clarity, results, and building brands that truly make a difference.
                    </p>
                  </div>
                  <div className="modal-info-box">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🤝</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>Core Values</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      Integrity, Transparency, Excellence, Accountability, and a relentless focus on delivering real results.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column (Bio, Areas of Expertise, My Journey) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.4rem', display: 'inline-block' }}>FOUNDER & CEO</span>
                  <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.2rem', lineHeight: 1.15 }}>Harsh Chaudhary</h2>
                  <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Founder & CEO, Digital Digix & Digital Digix</p>
                  <p style={{ color: '#64748B', fontWeight: 500, fontSize: '0.85rem', marginTop: '0.2rem', marginBottom: '0.8rem' }}>Growth Strategist & Performance Marketing Architect</p>
                  <a
                    href="https://www.linkedin.com/in/heyharsh2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#0F172A',
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
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077B5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  >
                    Connect on LinkedIn
                  </a>
                </div>

                <div style={{ width: '100%', height: '1.5px', background: '#E2E8F0' }} />

                <p style={{ color: '#334155', fontSize: '0.975rem', lineHeight: 1.7, margin: 0 }}>
                  Harsh Chaudhary is the Founder & CEO of Digital Digix, a results-driven digital marketing and branding agency helping businesses build a powerful presence and achieve measurable growth. With a strong passion for strategy, creativity, and data, he has helped 100+ businesses clarify their brand, connect with the right audience, and scale consistently through performance marketing and content systems that actually work.
                </p>

                {/* Areas of Expertise */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Areas of Expertise</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📢</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Performance Marketing</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>ROI-focused campaigns across Google, Meta, LinkedIn & more.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📈</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Growth Strategy & Consulting</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Data-driven strategies tailored for sustainable and scalable growth.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🛡️</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Brand Strategy & Positioning</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Crafting strong brand identities that stand out and create trust.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🔬</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Analytics & Data Insights</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Turning complex data sets into actionable insights that drive profitable decisions.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>✍️</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Content Strategy & Marketing</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Building content systems that attract, engage, and convert target audiences.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>👥</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Team Leadership & Execution</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Leading a skilled team with a culture of performance, learning, and ownership.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Journey */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>My Journey</h3>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 0.5rem 0' }}>
                    My journey started with a simple belief — digital should create real impact, not just vanity metrics. Over the years, I've worked with brands across different industries, helping them grow from zero to measurable success through the right mix of strategy, creativity, and execution.
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                    Digital Digix is not just my company — it's my mission to empower businesses with the right digital systems, so they can grow with confidence and clarity.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {(person === 'co-founder' || person === 'cofounder' || person === 'khwahish') && (
          <div>
            {/* Top Layout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
              
              {/* Left Column (Image & Quote & Stats) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Photo & Quote Container */}
                <div style={{ background: '#ECEFF4', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative Background circles */}
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)' }} />
                  <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)' }} />
                  
                  <img
                    src="/khwahish_sahai.png"
                    alt="Khwahish Sahai"
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '6px solid #FFF',
                      boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
                      margin: '0 auto 1.5rem auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: '#1E293B', lineHeight: 1.6, fontWeight: 500, margin: '0 0 0.5rem 0' }}>
                      "I believe premium design and visual storytelling are the ultimate hooks that turn casual scrollers into loyal customers."
                    </p>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--green-accent)' }}>— Khwahish</span>
                  </div>
                </div>

                {/* Mission, Vision, Values Stacked Vertically with green pop-up hover effects */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.5rem' }}>
                  <div className="modal-info-box modal-info-box-green">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🎯</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Mission</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      To design scroll-stopping visual identities and UI/UX assets that help small businesses stand out and command authority.
                    </p>
                  </div>
                  <div className="modal-info-box modal-info-box-green">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>👁️</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>My Vision</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      To build a world-class creative hub where visual design and performance marketing merge to deliver massive client ROI.
                    </p>
                  </div>
                  <div className="modal-info-box modal-info-box-green">
                    <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.3rem' }}>🤝</span>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>Core Values</h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>
                      Aesthetic Originality, Attention to Detail, Performance Alignment, Open Collaboration, and Creative Excellence.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column (Bio, Areas of Expertise, My Journey) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.4rem', display: 'inline-block', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--green-accent)' }}>CO-FOUNDER & CREATIVE DIRECTOR</span>
                  <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.2rem', lineHeight: 1.15 }}>Khwahish Sahai</h2>
                  <p style={{ color: 'var(--green-accent)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Co-Founder & Creative Director, Digital Digix</p>
                  <p style={{ color: '#64748B', fontWeight: 500, fontSize: '0.85rem', marginTop: '0.2rem', marginBottom: '0.8rem' }}>Brand Storytelling & Visual UX Director</p>
                  <a
                    href="https://www.linkedin.com/in/khwahish-sahai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#0F172A',
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
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077B5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  >
                    Connect on LinkedIn
                  </a>
                </div>

                <div style={{ width: '100%', height: '1.5px', background: '#E2E8F0' }} />

                <p style={{ color: '#334155', fontSize: '0.975rem', lineHeight: 1.7, margin: 0 }}>
                  Khwahish Sahai is the Co-Founder & Creative Director of Digital Digix. She directs brand design, UI/UX aesthetics, video storytelling, and visual creative direction. Khwahish ensures every single client campaign captures audience attention instantly with scroll-stopping ad creatives, custom vector illustrations, premium landing page UI layouts, and compelling brand positionings.
                </p>

                {/* Areas of Expertise */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Areas of Expertise</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🎨</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Brand Design & Positioning</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Designing cohesive logos, typography, visual guidelines, and branding kits.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📱</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>UI/UX & Web Aesthetics</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Crafting high-converting, responsive, mobile-first website interfaces in Figma.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>✍️</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Creative Copy & Hooks</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Writing compelling, scroll-stopping copy tailored for high engagement.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>📸</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Social Grid Aesthetics</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Building visual frameworks and grids that tell a brand story on Instagram.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>🎥</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Video Direction & Hooks</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Directing high-impact video ads, reels hooks, and post-production assets.</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.25rem' }}>👩‍🎨</span>
                      <div>
                        <h5 style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A', margin: '0 0 0.15rem 0' }}>Creative Team Leadership</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, lineHeight: 1.45 }}>Managing our team of certified graphic designers, editors, and UI architects.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* My Journey */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>My Journey</h3>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 0.5rem 0' }}>
                    My journey in creative direction began with a simple belief — design shouldn't just look pretty; it must achieve a commercial purpose. Over the years, I've designed identities for startup brands and large businesses, combining visual excellence with direct-response optimization.
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                    At Digital Digix, I guide our design team to make sure every logo, ad frame, and web template commands authority and captures attention instantly.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {person === 'why-us' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-tag">SEEN. HEARD. CHOSEN.</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0.5rem 0', fontFamily: 'Outfit, sans-serif' }}>Why Choose Digital Digix?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>4 Unique Pillars That Separate Us From Standard Agencies</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="modal-whyus-card animate-fade-slide delay-1" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>👑 1. Founder-Led Accounts</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Unlike typical agencies that hand your brand over to junior interns, Digital Digix guarantees that senior founders Harsh Chaudhary (CEO) and Khwahish Sahai (Creative Director) directly drive strategy, review ad creatives, audit campaigns, and lead weekly performance calls for peak execution standard.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-2" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--green-accent)', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>🔓 2. Zero Lock-In Model</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  We reject standard lock-in contracts that force you to commit to 6 or 12 months before seeing a single dollar of return. Our model operates on a flexible, month-to-month structure, giving you freedom to scale up or down as market conditions dictate. We earn your business and trust every month.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-3" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: '#3B82F6', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>💳 3. Post-Pay Flexibility</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  To align our financial incentives directly with your business growth, we offer flexible post-pay payment structures and milestone checkpoints. Rather than demanding massive upfront retainers, payments are tied directly to campaign execution, verification, and transparent delivery milestones.
                </p>
              </div>

              <div className="modal-whyus-card animate-fade-slide delay-4" style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: '#8B5CF6', marginBottom: '0.6rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>📊 4. Data Science Meets Design</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  A beautiful ad is useless if it doesn't convert, and a data-driven campaign fails if the creative design is weak. We bridge this gap by uniting conversion-first design psychology with real-time KPI and revenue dashboards, giving you 100% transparent visibility into your ROAS, CPA, and profitability.
                </p>
              </div>
            </div>

            {/* TACTICAL EXECUTION PHILOSOPHY */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--secondary)', textAlign: 'center' }}>
                Our 3-Stage Scalability Engine
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div className="modal-stage-card animate-fade-slide delay-1" style={{ background: '#FFF1EE', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 78, 39, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>🎯</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>01. Audience Intelligence</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We perform deep competitor analysis, customer avatar profiling, and keyword intent mapping to identify high-value buyers before launching campaigns.
                  </p>
                </div>

                <div className="modal-stage-card animate-fade-slide delay-2" style={{ background: '#EEF2FF', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>⚡</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#3B82F6', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>02. Creative Amplification</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We design conversion-first visual creatives, produce native user-generated content, and write psychology-driven copy that captures attention in under 3 seconds.
                  </p>
                </div>

                <div className="modal-stage-card animate-fade-slide delay-3" style={{ background: '#ECFDF5', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>📈</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--green-accent)', marginBottom: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>03. Conversion Engineering</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    We build lightning-fast web pages, implement custom WhatsApp chatbot lead routing, and set up CRM flows to convert clicks into sales-ready leads.
                  </p>
                </div>
              </div>
            </div>

            {/* HONEST COMPARISON TABLE */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="section-tag" style={{ color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)' }}>HONEST COMPARISON</span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: 'var(--secondary)', margin: '0.4rem 0' }}>
                  Digital Digix vs Freelancers vs Big Agencies vs In-House
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>How the four paths really stack up — judge for yourself.</p>
              </div>

              <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Aspect</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3B82F6' }}>Digital Digix</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8' }}>Freelancers</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8' }}>Big Agencies</th>
                      <th style={{ padding: '1rem 1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8' }}>In-House Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#FFFFFF' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Cost Efficiency</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Scalable pay-as-you-go plans (min. ₹2,000)</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-muted)' }}>✓ Low hourly rates</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ High retainer / lock-in</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ High salary overhead</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#F8FAFC' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Expertise Breadth</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Full team (SEO, dev, design, ads)</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Single skill set</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)' }}>✓ Full service</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Limited bandwidth</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#FFFFFF' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Results Accountability</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Transparent dashboards, ROI focus</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Varies widely</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Possible agency fluff</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Less marketing expertise</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#F8FAFC' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Communication</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ Direct access to founders / project leads</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Often less reliable</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Many layers</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ No strategy expert</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#FFFFFF' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>Personalization</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)', fontWeight: 600 }}>✓ High-touch, founder involvement</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--green-accent)' }}>✓ Highly flexible</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#EF4444' }}>✕ Cookie-cutter</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#F59E0B' }}>⚠ Risk of groupthink</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: '#F8FAFC' }}>
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
                    window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20Digital%20Digix%20services', '_blank');
                  }}
                >
                  Get a Quote ➔
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 2.2rem', fontWeight: 800, borderColor: '#CBD5E1', color: 'var(--secondary)', backgroundColor: '#FFFFFF' }}
                  onClick={() => {
                    onClose();
                    if (onNavigate) {
                      onNavigate('portfolio');
                    }
                  }}
                >
                  See the Proof
                </button>
              </div>
            </div>
          </div>
        )}

        {person === 'team' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span className="section-tag">OUR GLOBAL CREW</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '0.5rem 0' }}>Meet Our 250+ Growth Specialists</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Full-spectrum digital agency talent serving 2,700+ clients across 89 industries</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/harsh_chaudhary.png" alt="Harsh Chaudhary" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.1rem' }}>Harsh Chaudhary</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>Founder & CEO</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Performance Architecture</div>
                </div>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/khwahish_sahai.png" alt="Khwahish Sahai" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: 'var(--green-accent)', marginBottom: '0.1rem' }}>Khwahish Sahai</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>Co-Founder & Creative Director</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Brand Storytelling & UX</div>
                </div>
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
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>Media Buyers & Ad Strategists ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Certified Google Ads, Meta Advantage+, & LinkedIn B2B PPC specialists managing multi-million budgets.</p>
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
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>SEO & GEO Engineers ➔</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Technical SEO architects & Generative Engine Optimization (GEO) experts ranking brands on ChatGPT & Perplexity.</p>
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
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>React, Next.js, & Shopify engineers creating lightning-fast conversion-focused web applications.</p>
              </div>

              <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--secondary)' }}>24/7 Account Managers</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dedicated communication leads providing weekly live reporting, WhatsApp updates, and strategy calls.</p>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20working%20with%20the%20Digital%20Digix%20growth%20team', '_blank');
              }}
            >
              Work With Our 250+ Growth Team ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
