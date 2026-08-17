import React, { useEffect } from 'react';
import type { PageView } from '../types';
import { graphicDesignPricingData } from '../components/ServicesGrid';

interface GraphicDetailPageProps {
  categoryId: string; // The URL slug to auto-scroll to, e.g. "standard-creatives"
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

const explanationData: Record<string, { desc: string; turnaround: string; formats: string; useCase: string }> = {
  'standard-creatives': {
    desc: 'Bespoke single-page visual content optimized for digital feed layouts and standard local prints. Features clean typography, premium assets, and high impact design.',
    turnaround: '24–48 Hours',
    formats: 'JPG, PNG, PDF, RAW Source Files',
    useCase: 'Best for daily social media posts, festival greetings, simple flyers, digital ads, and announcement posters.'
  },
  'structured-designs': {
    desc: 'Complex single-page layouts requiring precise alignment, grid system planning, custom margins, and clean data tables.',
    turnaround: '48 Hours',
    formats: 'AI, EPS, PDF, Print-Ready Bleed Layouts',
    useCase: 'Best for business stationery, visiting cards, ID cards, official print certificates, quotations, and banners.'
  },
  'multi-page-documents': {
    desc: 'Multi-slide presentations, catalogs, annual reports, and brochures designed with layout styling and visual consistency.',
    turnaround: '3–5 Business Days',
    formats: 'PPTX, Keynote, PDF, vector source files',
    useCase: 'Best for pitch decks, sales catalogs, school magazines, training decks, and business proposals.'
  },
  'large-format-corporate-branding': {
    desc: 'High-resolution outdoor vector designs and corporate branding guidelines designed to scale without quality loss.',
    turnaround: '3–5 Business Days',
    formats: 'AI, EPS, SVG, High-Res Print PDFs',
    useCase: 'Best for billboards, shop branding, standees, company profiles, vehicle wraps, and logo design.'
  },
  'packaging-product-design': {
    desc: 'Commercial packaging templates, custom labels, product tag layouts, and realistic 3D mockup renders.',
    turnaround: '3–4 Business Days',
    formats: 'AI, Die-cut PDFs, 3D Mockup Renders',
    useCase: 'Best for D2C product packaging, retail box designs, jar/bottle labels, and shopping bags.'
  },
  'restaurant-hospitality': {
    desc: 'Appetizing themed menu layouts, digital TV menu boards, room service directories, and promotional tent cards.',
    turnaround: '2–3 Business Days',
    formats: 'AI, Print PDFs, Digital PDF Brochures',
    useCase: 'Best for restaurants, cafes, fine dining, bistros, hotels, and resorts.'
  },
  'custom-creative-services': {
    desc: 'Custom vector tracing, detailed infographic layouts, photographic retouching, merchandise styling, and AI-augmented enhancement.',
    turnaround: '2–4 Business Days',
    formats: 'PSD, AI, PNG, Custom formats',
    useCase: 'Best for complex custom illustrations, custom clothing/T-shirts, hero graphic assets, and photo manipulation.'
  }
};

export const GraphicDetailPage: React.FC<GraphicDetailPageProps> = ({ categoryId, onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  
  useEffect(() => {
    // Scroll to the active target element after page load
    if (categoryId) {
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoryId]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2.5rem 0 7rem 0' }}>
      <div className="container" style={{ maxWidth: '1380px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> /{' '}
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('services')}>Services</span> /{' '}
          <span style={{ color: '#0F172A', fontWeight: 700 }}>Graphic Design Deliverables</span>
        </div>

        {/* Back / Close button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => {
              // If this tab was opened via window.open(), close it to return to original tab
              if (window.opener && !window.opener.closed) {
                window.close();
              } else {
                onNavigate('services');
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#0F172A',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              padding: '0.6rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            ← Close & Go Back
          </button>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag" style={{ background: '#FFF1EE', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
            TRANSPARENT VALUE
          </span>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.1 }}>
            Graphic Design Catalog
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#64748B', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse explanations, deliverable lists, turnaround times, and specifications across each of our professional design domains.
          </p>
        </div>

        {/* Sticky/Quick Navigation Pills */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.75rem', 
          justifyContent: 'center', 
          marginBottom: '4.5rem',
          position: 'sticky',
          top: '80px',
          zIndex: 10,
          backgroundColor: 'rgba(253, 251, 247, 0.9)',
          padding: '0.75rem 0',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #E2E8F0'
        }}>
          {graphicDesignPricingData.map((cat, idx) => {
            const slug = cat.title.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            const isActive = categoryId === slug;
            return (
              <button
                key={idx}
                onClick={() => handleScrollToSection(slug)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #FF4E27' : '1px solid #E2E8F0',
                  backgroundColor: isActive ? '#FF4E27' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* All Domains List - One-by-One Stacking */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '5.5rem' }}>
          {graphicDesignPricingData.map((cat, idx) => {
            const slug = cat.title.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            const explanation = explanationData[slug] || {
              desc: cat.subtitle,
              turnaround: '48 Hours',
              formats: 'AI, EPS, PDF, JPG, PNG',
              useCase: 'Custom digital and print creatives.'
            };

            return (
              <div 
                key={idx} 
                id={slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '3rem',
                  background: '#FFFFFF',
                  borderTop: '4px solid #FF4E27',
                  borderLeft: '1px solid #E2E8F0',
                  borderRight: '1px solid #E2E8F0',
                  borderBottom: '1px solid #E2E8F0',
                  borderRadius: '24px',
                  padding: '3rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                  scrollMarginTop: '160px' // accounts for the sticky nav bar
                }}
                className="graphics-info-blocks"
              >
                
                {/* Domain Explanation Details */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎨</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      DESIGN DOMAIN {idx + 1}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                    {cat.title}
                  </h2>

                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                    {explanation.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem', marginTop: 'auto', borderTop: '1px solid #F1F5F9', paddingTop: '1.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Turnaround</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem' }}>{explanation.turnaround}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Deliverable formats</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem', lineHeight: 1.4 }}>{explanation.formats}</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                      <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Primary use-cases</div>
                      <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{explanation.useCase}</div>
                    </div>
                  </div>
                </div>

                {/* Price Table list */}
                <div style={{ 
                  background: '#F8FAFC', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '20px', 
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                    Deliverable Price List
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1, marginBottom: '2rem' }}>
                    {cat.items.map((item, itemIdx) => {
                      const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                      return (
                        <div
                          key={itemIdx}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.84rem',
                            color: '#334155',
                            padding: '0.4rem 0.5rem',
                            borderBottom: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#E2E8F0';
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('design-item', slug);
                          }}
                        >
                          <span style={{ fontWeight: 600, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                          <span style={{ fontWeight: 800, color: '#3B82F6', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}></span>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href={`https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1.2,
                        textAlign: 'center',
                        backgroundColor: '#D97706',
                        color: '#FFFFFF',
                        padding: '0.75rem',
                        borderRadius: '999px',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 10px rgba(217, 119, 6, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      WhatsApp Order 💬
                    </a>
                    <button
                      onClick={() => window.open(`https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20a%20design%20project%20for%20${encodeURIComponent(cat.title)}`, '_blank')}
                      style={{
                        flex: 1,
                        backgroundColor: '#0F172A',
                        color: '#FFFFFF',
                        padding: '0.75rem',
                        borderRadius: '999px',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      Custom Quote →
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global CTA Consultation Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
          borderRadius: '28px', 
          padding: '3.5rem 3rem', 
          color: '#FFF', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '2rem', 
          boxShadow: 'var(--shadow-lg)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
              TRANSPARENT CREATIVE ENGINE
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Need a Custom Design Proposal?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Request dedicated creative support or book a monthly design retainer package with zero lock-in contracts. Custom proposals ready within 24h.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              Chat on WhatsApp 💬
            </a>
            <button
              className="btn btn-secondary"
              style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '0.9rem 1.8rem' }}
              onClick={() => window.open('https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20a%20custom%20graphic%20design%20partnership', '_blank')}
            >
              Book Custom Quote ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
