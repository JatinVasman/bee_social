import React, { useState } from 'react';
import { socialMediaProjects, type SocialMediaProject } from '../data/portfolioData';

interface PortfolioGalleryProps {
  onOpenStrategyModal: (note?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenStrategyModal }) => {
  const [selectedSocialProject, setSelectedSocialProject] = useState<SocialMediaProject | null>(null);

  return (
    <section id="gallery" style={{ padding: '5rem 0', backgroundColor: '#A8B4C3', position: 'relative', borderBottom: '1px solid #94A3B8' }}>
      <div className="container">
        
        {/* 1. HEADER MATCHING SCREENSHOT 1 EXACTLY */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.25rem auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <span style={{ width: '30px', height: '1.5px', background: '#D97706' }}></span>
            <span>THE WORK</span>
            <span style={{ width: '30px', height: '1.5px', background: '#D97706' }}></span>
          </div>

          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '3rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Our Portfolio
          </h2>

          <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.5, marginBottom: '0.2rem' }}>
            Real work for real brands across India — social media campaigns and live websites.
          </p>
          <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.5 }}>
            Every project: strategy first, polish always.
          </p>
        </div>

        {/* 3. SOCIAL MEDIA PROJECTS GRID (PURE CENTERED INNER MOBILE SCREEN MOCKUPS) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
          {socialMediaProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedSocialProject(project)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '1.25rem 1rem 1.25rem 1rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
              }}
              >
                {/* TOP BRAND TITLE & NICHE */}
                <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
                  <h3
                    style={{
                      fontFamily: 'Outfit, serif',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      margin: '0 0 0.15rem 0',
                      lineHeight: 1.2
                    }}
                  >
                    {project.name}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                    {project.niche}
                  </div>
                </div>

                {/* CENTERED INNER MOBILE PHONE SCREEN MOCKUP */}
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.25rem'
                  }}
                >
                  <img
                    src={project.cardImage}
                    alt={project.name}
                    style={{
                      width: '100%',
                      maxWidth: '240px',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.07)',
                      border: '1px solid #E2E8F0',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        {/* 5. BOTTOM CTA SECTION MATCHING USER SCREENSHOT EXACTLY (COMPACT & SMALLER) */}
        <div style={{ marginTop: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              backgroundColor: '#1E1815',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              maxWidth: '850px',
              width: '100%',
              textAlign: 'center',
              borderTop: '3px solid #D97706',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              <span style={{ width: '30px', height: '1.5px', background: '#D97706' }}></span>
              <span>YOUR PROJECT NEXT?</span>
              <span style={{ width: '30px', height: '1.5px', background: '#D97706' }}></span>
            </div>

            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
              Let's add your brand to this gallery
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto 1.75rem auto', lineHeight: 1.5 }}>
              Social media glow-up or brand-new website — premium, transparent, on time.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20starting%20a%20project%20with%20Digital%20Digix', '_blank')}
                style={{
                  backgroundColor: '#E0B56C',
                  color: '#1E1815',
                  padding: '0.65rem 1.75rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(224, 181, 108, 0.25)',
                  transition: 'transform 0.25s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Start a Project ➔
              </button>

              <button
                onClick={() => onOpenStrategyModal('Portfolio Gallery CTA - View Services')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.75rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                View Services
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 6. FULL PAGE INTERACTIVE MODAL FOR SOCIAL MEDIA PROJECTS */}
      {selectedSocialProject && (
        <div className="modal-overlay" onClick={() => setSelectedSocialProject(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setSelectedSocialProject(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
              ← Back to Portfolio
            </button>
            <button onClick={() => setSelectedSocialProject(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
          </div>

          <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-tag" style={{ background: '#FFF1EE', color: '#D97706', border: '1px solid #FFEBE6' }}>{selectedSocialProject.niche}</span>
              <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.2rem', fontWeight: 900, color: '#0F172A', margin: '0.4rem 0' }}>
                {selectedSocialProject.name}
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
                {selectedSocialProject.description}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <img src={selectedSocialProject.cardImage} alt={selectedSocialProject.name} style={{ maxWidth: '450px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Verified Campaign Impact</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D97706', marginTop: '0.25rem' }}>{selectedSocialProject.results}</div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '1.1rem', backgroundColor: '#1E1815', borderColor: '#1E1815' }}
              onClick={() => {
                const name = selectedSocialProject.name;
                setSelectedSocialProject(null);
                onOpenStrategyModal(`Social Media Campaign: ${name}`);
              }}
            >
              Get Custom Social Media Strategy For Your Brand 🚀
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
