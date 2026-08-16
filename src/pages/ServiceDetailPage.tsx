import React, { useState, useEffect } from 'react';
import type { PageView } from '../types';
import { 
  detailed17Services, 
  graphicDesignPricingData, 
  serviceApproachResults 
} from '../components/ServicesGrid';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

const smmPackagesData = [
  {
    name: 'Starter SMM',
    price: '3,499',
    popular: false,
    badge: '',
    features: [
      '12 Social Media Creatives / mo',
      'Basic Reels (2 Templates / mo)',
      'Single Channel Management',
      'Basic Custom Caption Writing',
      'Hashtag Research & Strategy',
      'Monthly PDF Analytics Report',
      'Standard 3-Day Delivery Turnaround'
    ],
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Growth Booster',
    price: '5,999',
    popular: true,
    badge: 'MOST POPULAR',
    features: [
      '20 High-Converting Creatives / mo',
      '6 Viral Reels & Video Hooks / mo',
      'Dual-Channel Strategy (Insta + FB)',
      'SEO Caption Writing + CTA Strategy',
      'Competitor Monitoring & Auditing',
      'Growth Strategy Consultation Call',
      'Priority 48-Hour Execution Support'
    ],
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Pro Domination',
    price: '8,999',
    popular: false,
    badge: 'BEST VALUE',
    features: [
      '30 Bespoke Custom Creatives / mo',
      '12 High-Impact Reels & UGC Style',
      'Tri-Channel Domination (Insta, FB, LI)',
      'Bespoke Graphic Design & Illustration',
      'Active Community DM / Comment Management',
      'Weekly Ad Campaign Strategy Auditing',
      'Dedicated Social Account Manager'
    ],
    whatsappText: 'Hi, I am interested in your services'
  }
];

const partnershipTiersData = [
  { tier: 'TIER 1 RESELLER', discount: '10% OFF', desc: 'Starting 3+ Active Clients', tag: '' },
  { tier: 'TIER 2 PARTNER', discount: '20% OFF', desc: 'Starting 8+ Active Clients', tag: 'BEST VALUE' },
  { tier: 'TIER 3 STRATEGIC', discount: '30% OFF', desc: 'Starting 15+ Active Clients', tag: 'MOST POPULAR' },
  { tier: 'ENTERPRISE EXEC', discount: '40% OFF', desc: 'Starting 25+ Active Clients', tag: '' }
];

const smmFaqsData = [
  { q: 'Is there a minimum contract commitment?', a: 'No lock-ins. All our retainers and service packages operate on a rolling month-to-month commitment. You can cancel, downgrade or scale up at any time with 7 days notice.' },
  { q: 'Who designs the social posts and writes the copies?', a: 'All creatives, hooks and copy scripts are produced by our in-house copywriters and design specialists under senior marketing management guidance. Nothing is outsourced.' },
  { q: 'What is pay-as-you-go performance marketing?', a: 'If you prefer outcomes, we set up performance models where you pay per qualified lead generated, or purchase graphic assets individually (posters from ₹149, reels from ₹380, dashboards from ₹2000).' },
  { q: 'How long does onboarding take?', a: 'We can onboard your social channels and launch your first week content calendar within 48 hours of completing the strategy checklist and signing off on templates.' }
];

import { SERVICE_SLUG_TO_ID } from '../utils/routes';

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openInlineSmmFaqIndex, setOpenInlineSmmFaqIndex] = useState<number | null>(0);

  const normalizedId = SERVICE_SLUG_TO_ID[serviceId?.toLowerCase()] || serviceId;
  const selectedService = detailed17Services.find(s => 
    s.id === normalizedId ||
    s.id === serviceId ||
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === serviceId?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!selectedService) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#FDFBF7', minHeight: '80vh' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.5rem' }}>
            Service Not Found
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748B', marginBottom: '2rem' }}>
            The requested service link is invalid or has been moved.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate('services')}
            style={{ borderRadius: '999px', padding: '0.9rem 2.2rem' }}
          >
            Browse All Services
          </button>
        </div>
      </div>
    );
  }

  const isSmm = selectedService.title === 'Social Media Marketing';
  const isGraphicDesign = selectedService.title === 'Graphic Design';

  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> /{' '}
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('services')}>Services</span> /{' '}
          <span style={{ color: '#0F172A', fontWeight: 700 }}>{selectedService.title}</span>
        </div>

        {/* Back Button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => onNavigate('services')}
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
        <div style={{ 
          background: '#FFFFFF', 
          borderTop: '4px solid #FF4E27', 
          borderLeft: '1px solid #E2E8F0', 
          borderRight: '1px solid #E2E8F0', 
          borderBottom: '1px solid #E2E8F0', 
          borderRadius: '24px', 
          padding: '3.5rem 3rem', 
          marginBottom: '4rem', 
          boxShadow: '0 15px 35px rgba(11,19,42,0.05)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '30px', height: '1px', background: '#3B82F6' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {selectedService.category}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3.5rem' }}>{selectedService.icon}</div>
            <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, margin: 0 }}>
              {selectedService.title}
            </h1>
          </div>

          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, maxWidth: '820px', marginBottom: '2rem' }}>
            {selectedService.longDescription || selectedService.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid #F1F5F9', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Price Range</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 900, color: '#D97706', marginTop: '0.2rem' }}>
                {selectedService.pricing}
              </div>
            </div>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#D97706',
                  color: '#FFFFFF',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(217,119,6,0.15)',
                  transition: 'all 0.3s ease'
                }}
              >
                Chat on WhatsApp 💬
              </a>
              <button
                onClick={() => {
                  window.open(`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20growth%20call%20for%20${encodeURIComponent(selectedService.title)}`, '_blank');
                }}
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.9rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Book Growth Call →
              </button>
            </div>
          </div>
        </div>

        {/* Conditional layouts depending on domain type */}
        {isSmm ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — TRANSPARENT VALUE —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Packages & Pay-As-You-Go
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
                Flexible plans, no retainer traps. Only pay for outcomes that matter.
              </p>
            </div>

            {/* SMM Packages Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem', alignItems: 'stretch' }} className="graphics-pricing-grid">
              {smmPackagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                    color: pkg.popular ? '#FFFFFF' : '#0F172A',
                    border: pkg.popular ? '2px solid #D97706' : '1px solid #E2E8F0',
                    borderRadius: '28px',
                    padding: '2.25rem 2rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {pkg.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#D97706',
                        color: '#FFFFFF',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        letterSpacing: '0.08em',
                        boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#E0B56C' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {pkg.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                        ₹{pkg.price}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: pkg.popular ? '#94A3B8' : '#64748B', marginLeft: '0.25rem', fontWeight: 600 }}>
                        /mo
                      </span>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, fontSize: '0.95rem' }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: pkg.popular ? '#E0B56C' : '#D97706', fontWeight: 900 }}>✓</span>
                        <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '999px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backgroundColor: pkg.popular ? '#E0B56C' : '#1A1311',
                      color: pkg.popular ? '#1A1311' : '#FFFFFF',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Get Started →
                  </a>
                </div>
              ))}
            </div>

            {/* SMM Pay-as-you-go box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #F0F6FC 0%, #E3EBF4 100%)',
                border: '1px dashed rgba(59, 130, 246, 0.35)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.03)',
                textAlign: 'left',
                marginBottom: '5rem'
              }}
            >
              <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PAY-AS-YOU-GO —
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
              </p>
            </div>

            {/* B2B Reseller Tiers */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PARTNERSHIPS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                B2B & Agency Tiers
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
                White-label execution and volume pricing for agencies, resellers and enterprise teams.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '5.5rem' }} className="graphics-pricing-grid">
              {partnershipTiersData.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '2.25rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {tier.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: tier.tag === 'MOST POPULAR' ? '#C2410C' : tier.tag === 'BEST VALUE' ? '#5B21B6' : '#B45309',
                        color: '#FFFFFF',
                        padding: '0.25rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.625rem',
                        fontWeight: 900,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tier.tag}
                    </span>
                  )}
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{tier.tier}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3B82F6', fontFamily: 'Outfit, serif', margin: '0.75rem 0' }}>{tier.discount}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* Showcase Marquee */}
            <div style={{ margin: '4rem 0' }}>
              <WorkShowcaseMarquee />
            </div>

            {/* SMM FAQs accordion */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — COMMON QUESTIONS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Pricing & Process FAQs
              </h2>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {smmFaqsData.map((faq, index) => {
                const isOpen = openInlineSmmFaqIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                      transition: 'box-shadow 0.3s ease'
                    }}
                  >
                    <div
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.75rem',
                        fontWeight: 700,
                        color: '#0F172A'
                      }}
                      onClick={() => setOpenInlineSmmFaqIndex(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#64748B', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                        ＋
                      </span>
                    </div>
                    {isOpen && (
                      <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid #F1F5F9', backgroundColor: '#FFFFFF' }}>
                        <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : isGraphicDesign ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TRANSPARENT PRICING</span>
              <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '0.5rem' }}>
              Graphic Design Price List
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748B', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
              Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change.
            </p>

            {/* Grid container */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }} className="graphics-pricing-grid">
              {graphicDesignPricingData.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  style={{
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.5rem 1.25rem 1.75rem 1.25rem',
                    boxShadow: '0 8px 25px rgba(11, 19, 42, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.03)';
                  }}
                  onClick={() => {
                    const slug = cat.title.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                    onNavigate('graphic-details', slug);
                  }}
                >
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.25rem 0', fontFamily: 'Outfit, sans-serif' }}>
                    {cat.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                    {cat.subtitle}
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {cat.items.map((item, itemIdx) => {
                      const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                      return (
                        <div
                          key={itemIdx}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.81rem',
                            color: '#334155',
                            padding: '0.4rem 0.5rem',
                            borderBottom: '1px solid #F1F5F9',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC';
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
                          <span style={{ fontWeight: 500, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                          <span style={{ fontWeight: 700, color: '#3B82F6', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}>{item.price}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>View Explanation & Details</span>
                    <span style={{ fontSize: '0.9rem' }}>➔</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Approach / Typical Results blocks side-by-side */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  —— Our Approach
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.
                </p>
              </div>
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  —— Typical Results
                </div>
                <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                  Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* General Domain Detail Layout */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DELIVERABLES</span>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
              </div>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
                What We Offer & Deliver
              </h3>

              {/* Grid of badges/pills layout */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3.5rem', maxWidth: '900px', margin: '0 auto 3.5rem auto' }}>
                {selectedService.whatWeDo.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FFF1EE',
                      border: '1px solid rgba(255,78,39,0.2)',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '14px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 2px 8px rgba(255,78,39,0.03)'
                    }}
                  >
                    <span style={{ color: '#D97706', fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Our Approach / Typical Results blocks side-by-side */}
              {serviceApproachResults[selectedService.title] && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }} className="graphics-info-blocks">
                  <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.75rem 2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Our Approach
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                      {serviceApproachResults[selectedService.title].approach}
                    </p>
                  </div>
                  <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.75rem 2rem', color: '#FFF' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Typical Results
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      {serviceApproachResults[selectedService.title].typicalResults}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FAQs Section (For Non-SMM) */}
        {!isSmm && selectedService.faqs && selectedService.faqs.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
              <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
            </div>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
              {selectedService.title} FAQs
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '850px', margin: '0 auto' }}>
              {selectedService.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(11, 19, 42, 0.03)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{ fontSize: '1.025rem', fontWeight: 800, color: '#0F172A' }}>
                        Q: {faq.q}
                      </span>
                      <span
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? '#FF4E27' : '#F1F5F9',
                          color: isOpen ? '#FFFFFF' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: 800,
                          transition: 'all 0.25s ease',
                          marginLeft: '1rem',
                          flexShrink: 0
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.25rem 1.25rem 1.25rem',
                          color: '#475569',
                          fontSize: '0.925rem',
                          lineHeight: 1.6,
                          borderTop: '1px solid #F1F5F9',
                          marginTop: '-0.25rem',
                          paddingTop: '0.85rem'
                        }}
                      >
                        <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>Answer:</strong>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Consultation Banner */}
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
              TRANSPARENT GROWTH ENGINE
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Interested in a Custom Performance Campaign?
            </h3>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Book a zero-risk 30-minute strategy call with our founders. We provide custom proposals tailored to your budget with zero lock-in contracts.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20proposal%20for%20${encodeURIComponent(selectedService.title)}`}
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
              onClick={() => {
                window.open(`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20strategy%20call%20for%20${encodeURIComponent(selectedService.title)}`, '_blank');
              }}
            >
              Book Strategy Call ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
