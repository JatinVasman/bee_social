import React, { useState } from 'react';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface LocationPageProps {
  locationName: string;
  onNavigate: (page: any) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ locationName, onNavigate, onOpenStrategyModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const isInternational = ['USA', 'Australia', 'UK', 'Canada', 'Dubai'].includes(locationName);
  const regionTag = isInternational ? 'INTERNATIONAL · DIGITAL MARKETING' : 'INDIA · DIGITAL MARKETING';

  const faqs = [
    {
      q: `Do you offer digital marketing services in ${locationName}?`,
      a: `Yes! Digital Digix provides full-spectrum performance marketing, SEO, Meta ads, Google ads, social media management, and custom web design directly for businesses operating in ${locationName}.`
    },
    {
      q: `How much does digital marketing cost in ${locationName}?`,
      a: `Our services start from ₹150 for graphic designs up to transparent monthly performance retainers tailored to your specific budget and growth goals in ${locationName}.`
    },
    {
      q: `Which industries do you work with in ${locationName}?`,
      a: `We work across 89+ industries in ${locationName} including e-commerce, real estate, healthcare, education, local services, B2B SaaS, and hospitality.`
    },
    {
      q: `How soon can we start?`,
      a: `We can launch your ${locationName} campaign within 24–48 hours after our initial strategy onboarding session.`
    }
  ];

  return (
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* 1. BREADCRUMB */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: '#3B82F6' }} onClick={() => onNavigate('home')}>Home</span> / <span className="active" style={{ color: '#0F172A' }}>Digital Marketing in {locationName}</span>
        </div>

        {/* 2. TOP SUMMARY NOTIFICATION BOX (MATCHING SCREENSHOT 2) */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
            Digital Marketing Services in {locationName} | Digital Digix
          </h3>
          <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
            Looking for a results-driven digital marketing agency in {locationName}? Digital Digix offers SEO, social media, Google & Meta ads, web design and graphic design for businesses in {locationName}. Get a free quote on WhatsApp.
          </p>
        </div>

        {/* 3. MAIN HERO BANNER (MATCHING SCREENSHOT 2) */}
        <div className="responsive-hero-card" style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '4rem', boxShadow: '0 15px 35px rgba(11,19,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '30px', height: '1px', background: '#3B82F6' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {regionTag}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Digital Marketing Services in {locationName}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '820px', marginBottom: '2rem' }}>
            Digital Digix is a founder-led digital marketing agency helping businesses in {locationName} grow online with SEO, Google & Meta ads, social media, websites and graphic design. We combine local market understanding with proven, data-driven execution — so your brand in {locationName} gets found, gets leads and gets results.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              Get a Free {locationName} Quote →
            </a>
            <button
              onClick={() => onOpenStrategyModal(`Digital Marketing Strategy Session in ${locationName}`)}
              className="btn"
              style={{ backgroundColor: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem' }}
            >
              Book Strategy Session
            </button>
          </div>
        </div>

        {/* 4. "WHAT WE OFFER" SECTION (MATCHING SCREENSHOT 3) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>
              Our Digital Marketing Services in {locationName}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
              Full-service growth for {locationName} businesses — every channel, one accountable team.
            </p>
          </div>

          {/* 6 SERVICE CARDS WITH ORANGE TOP BORDER */}
          <div className="responsive-3-grid" style={{ gap: '1.75rem' }}>
            
            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Search Engine Optimisation (SEO)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Rank your {locationName} business at the top of Google and capture high-intent local searches.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Google Ads (PPC)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                High-intent Search, Display & YouTube campaigns engineered for ROI in the {locationName} market.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Meta Ads (Facebook & Instagram)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Targeted social campaigns that turn {locationName} audiences into real leads.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📣</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Social Media Marketing</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Content, reels and community management that grow your {locationName} brand.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Website Design & Development</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Fast, SEO-ready, mobile-first websites built to convert {locationName} visitors.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderTop: '4px solid #FF4E27', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎨</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Graphic Design & Branding</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Posters, logos, packaging and brand identity — from ₹150 per design.
              </p>
            </div>

          </div>
        </div>

        {/* 5. "WHY [LOCATION] BUSINESSES CHOOSE US" SECTION (MATCHING SCREENSHOT 4) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WHY DIGITAL DIGIX</span>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: '#0F172A' }}>
              Why {locationName} Businesses Choose Us
            </h2>
          </div>

          {/* 4 CARDS WITH CREAM BACKGROUND MATCHING SCREENSHOT 4 */}
          <div className="responsive-3-grid" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Local Insight, National Strength</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                We tailor every campaign to {locationName}'s local search behaviour, competition and customer intent.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Transparent Pricing</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Clear, scope-based pricing with no hidden charges — from graphic design at ₹150 to full monthly retainers.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Founder-Led Delivery</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                A hands-on, founder-led team that treats your business as our own. You always know who is driving your project.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '350px' }}>
            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>Measurable ROI</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Data-driven work with live dashboards and monthly reports — every rupee mapped to a result.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WorkShowcaseMarquee locationName={locationName} />

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        {/* 6. "DIGITAL MARKETING IN [LOCATION] — FAQS" SECTION (MATCHING SCREENSHOT 5) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
              <span style={{ width: '40px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: '#0F172A' }}>
              Digital Marketing in {locationName} — FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', color: '#64748B', fontWeight: 700 }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. BLACK CTA BOX AT BOTTOM (MATCHING SCREENSHOT 5) */}
        <div style={{ background: '#181311', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: 'center', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Grow your business in {locationName}
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', marginBottom: '2rem' }}>
            Free audit and strategy session — we respond within 2 hours.
          </p>

          <a
            href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: '#3B82F6', color: '#0F172A', padding: '0.9rem 2.2rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}
          >
            Start on WhatsApp →
          </a>
        </div>

      </div>
    </div>
  );
};
