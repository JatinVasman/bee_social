import React, { useState } from 'react';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface SmmPageProps {
  onNavigate: (page: any) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

export const SmmPage: React.FC<SmmPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const smmPackages = [
    {
      name: 'Starter',
      price: '3,499',
      features: [
        '2 Social Platforms',
        '12 Posts/Month',
        '3 Reels Edited',
        '1 Festival Poster',
        'Monthly Report'
      ],
      badge: '',
      popular: false,
      whatsappText: 'Hi, I am interested in your services'
    },
    {
      name: 'Growth',
      price: '5,999',
      features: [
        '3 Social Platforms',
        '20 Posts/Month',
        '8 Reels Edited',
        '3 Festival Posters',
        'Meta Ads Setup',
        'Monthly Strategy Call'
      ],
      badge: 'MOST POPULAR',
      popular: true,
      whatsappText: 'Hi, I am interested in your services'
    },
    {
      name: 'Pro',
      price: '8,999',
      features: [
        '4 Social Platforms',
        '30 Posts/Month',
        '12 Reels Edited',
        '6 Festival Posters',
        'Full Meta Ads Management',
        'Google My Business',
        'Weekly Report'
      ],
      badge: 'BEST ROI',
      popular: false,
      whatsappText: 'Hi, I am interested in your services'
    }
  ];

  const partnershipTiers = [
    {
      tier: '3-4 Accounts',
      discount: '10% OFF',
      desc: 'Perfect for boutique agencies',
      tag: ''
    },
    {
      tier: '5-9 Accounts',
      discount: '15% OFF',
      desc: 'Mid-size agencies & resellers',
      tag: 'MOST POPULAR'
    },
    {
      tier: '10-49 Accounts',
      discount: '20% OFF',
      desc: 'Large agency portfolios',
      tag: 'BEST VALUE'
    },
    {
      tier: '50+ Accounts',
      discount: 'Custom',
      desc: 'Enterprise + dedicated manager',
      tag: 'ENTERPRISE'
    }
  ];

  const faqs = [
    {
      q: 'What makes BeeSocial different from other agencies?',
      a: 'We focus on pure results with no long-term lock-in retainer traps, and we provide transparent pay-per-performance execution led directly by founders.'
    },
    {
      q: 'How long before I see SMM results?',
      a: 'While organic SEO takes months, our SMM campaigns deliver high-quality engagement, viral reels, and targeted lead generation within 24 to 72 hours of ad campaigns going live.'
    },
    {
      q: 'Is there a lock-in contract?',
      a: 'Absolutely not. All our social media marketing packages are billed month-to-month. You are free to scale up, scale down, or cancel at any time with no penalties.'
    },
    {
      q: 'Is post-pay available at BeeSocial?',
      a: 'Yes, we offer pay-after-results or pay-per-outcome performance setups for qualified brands after aligning on upfront lead definitions and targets.'
    },
    {
      q: 'Do you offer B2B or agency discounts?',
      a: 'Yes! Our B2B & Agency Tiers provide up to 20% off for partners managing multiple client accounts under white-label execution.'
    },
    {
      q: 'Which package should I choose?',
      a: 'The Starter package is great for brand consistency, the Growth package is perfect for active lead generation, and the Pro package is designed for maximum market dominance.'
    }
  ];

  return (
    <div style={{
      padding: '3rem 0 6rem 0',
      background: 'linear-gradient(135deg, #FFF7F8 0%, #FFF0F2 50%, #FFFAFA 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background blur blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(214, 51, 108, 0.06) 0%, rgba(214, 51, 108, 0) 70%)', filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '15%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 158, 175, 0.08) 0%, rgba(255, 158, 175, 0) 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>

      <style>{`
        .smm-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .smm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 40px rgba(214, 51, 108, 0.08);
        }
        .smm-growth-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 45px rgba(214, 51, 108, 0.16) !important;
          border-color: var(--primary) !important;
        }
        .partnership-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .partnership-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.06);
          border-color: var(--primary) !important;
        }
        .faq-accordion-header {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.75rem;
          font-weight: 700;
          color: var(--secondary);
          transition: background-color 0.2s, color 0.2s;
        }
        .faq-accordion-header:hover {
          background-color: var(--bg-subtle, #FFF0F2);
          color: var(--primary);
        }
        .faq-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background-color: #FFFFFF;
        }
        .faq-accordion-content.open {
          max-height: 250px;
          padding: 1rem 1.75rem 1.5rem 1.75rem;
          border-top: 1px solid var(--border-color-subtle, #F0E4E8);
        }
        .btn-package {
          transition: all 0.3s ease;
        }
        .btn-package:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--secondary)' }} onClick={() => onNavigate('home')}>Home</span> / <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Social Media Marketing (SMM)</span>
        </div>

        {/* HEADER & SUBTITLE */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag" style={{ color: 'var(--primary)', background: 'rgba(214, 51, 108, 0.08)' }}>SMM HUB & CREATOR NETWORK</div>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
            Social Media Marketing & Viral Reach Engine
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
            Scale your brand's organic and paid presence across Instagram, Facebook, LinkedIn, YouTube, and UGC creator networks to convert followers into paying customers.
          </p>
        </div>

        {/* 1. PACKAGES & PAY-AS-YOU-GO SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — STRATEGY & SCOPE —
          </div>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
            Social Media Packages
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Tailored content creation, community growth, and viral reach campaigns.
          </p>
        </div>

        {/* CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1140px', margin: '0 auto 3rem auto', alignItems: 'stretch' }}>
          {smmPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={pkg.popular ? 'smm-card smm-growth-card' : 'smm-card'}
              style={{
                backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                color: pkg.popular ? '#FFFFFF' : 'var(--secondary)',
                border: pkg.popular ? '2px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                borderRadius: '28px',
                padding: '2.25rem 2rem 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                position: 'relative'
              }}
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--primary-raw, #D6336C)',
                    color: '#FFFFFF',
                    padding: '0.4rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 12px rgba(214, 51, 108, 0.20)'
                  }}
                >
                  {pkg.badge}
                </span>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? 'var(--primary-light, #FF9EAF)' : 'var(--primary-raw, #D6336C)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {pkg.name}
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.4rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                    Custom Plan
                  </span>
                  <span style={{ fontSize: '0.9rem', color: pkg.popular ? 'var(--text-muted)' : 'var(--text-muted)', marginLeft: '0.25rem', fontWeight: 600 }}>
                    
                  </span>
                </div>
              </div>

              {/* FEATURES LIST */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, fontSize: '0.95rem' }}>
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: pkg.popular ? 'var(--primary-light, #FF9EAF)' : 'var(--primary-raw, #D6336C)', fontWeight: 900 }}>✓</span>
                    <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* ACTION BUTTON -> REDIRECTS TO WHATSAPP */}
              <a
                href={`https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-package"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '1rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  backgroundColor: pkg.popular ? 'var(--primary-light, #FF9EAF)' : '#1A1311',
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

        {/* PAY AS YOU GO BOX CALLOUT */}
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto 5rem auto',
            background: 'linear-gradient(135deg, #FFF7F8 0%, #FFF0F2 100%)',
            border: '1px dashed rgba(214, 51, 108, 0.35)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px rgba(214, 51, 108, 0.04)'
          }}
        >
          <div style={{ fontSize: '0.725rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — PAY-AS-YOU-GO —
          </div>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. From single creative deliverables to full multi-platform management. <a href="https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
          </p>
        </div>

        {/* 2. PARTNERSHIPS SECTION: B2B & AGENCY TIERS */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — PARTNERSHIPS —
          </div>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
            B2B & Agency Tiers
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            White-label execution and volume pricing for agencies, resellers and enterprise teams.
          </p>
        </div>

        {/* B2B CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '1140px', margin: '0 auto 5.5rem auto' }}>
          {partnershipTiers.map((tier, idx) => (
            <div
              key={idx}
              className="partnership-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color-subtle)',
                borderRadius: '24px',
                padding: '2.25rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                position: 'relative'
              }}
            >
              {/* Floating badges */}
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

              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{tier.tier}</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'Outfit, serif', margin: '0.75rem 0' }}>{tier.discount}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{tier.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <WorkShowcaseMarquee />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* 3. FAQS SECTION: PRICING & PROCESS FAQS */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            — COMMON QUESTIONS —
          </div>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
            Pricing & Process FAQs
          </h2>
        </div>

        {/* FAQS ACCORDION CONTAINER */}
        <div style={{ maxWidth: '850px', margin: '0 auto 3rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color-subtle)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <div
                  className="faq-accordion-header"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-muted)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                    ＋
                  </span>
                </div>
                <div className={isOpen ? 'faq-accordion-content open' : 'faq-accordion-content'}>
                  <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* REQUEST A QUOTE BUTTON */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <a
            href="https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary-raw, #D6336C)',
              color: '#FFFFFF',
              padding: '1rem 2.5rem',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(217, 119, 6, 0.15)'
            }}
            className="btn-package"
          >
            Request a Quote →
          </a>
        </div>

        {/* SMM CREATIVE CTA BANNER */}
        <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary) 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag" style={{ background: 'rgba(214, 51, 108, 0.12)', color: 'var(--primary)', border: 'none', marginBottom: '0.75rem' }}>
              VIRAL GROWTH ENGINE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
              Ready to Dominate Social Media?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '1rem 2.2rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}
            >
              💬 Discuss SMM on WhatsApp
            </a>
            <button
              className="btn btn-outline-light"
              style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
              onClick={() => window.open('https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20call', '_blank')}
            >
              Book a Call ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
