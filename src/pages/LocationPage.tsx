import React, { useState, useEffect } from 'react';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';

interface LocationPageProps {
  locationName: string;
  onNavigate: (page: any) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ locationName, onNavigate, onOpenStrategyModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Normalize location name to Title Case if slug passed (e.g. "delhi-ncr" -> "Delhi NCR")
  const cleanLocationRaw = (locationName || '')
    .replace(/^digital-marketing-agency-in-/i, '')
    .replace(/^digital-marketing-in-/i, '')
    .replace(/^digital-marketing-/i, '')
    .replace(/^location-/i, '')
    .trim();

  const displayName = cleanLocationRaw
    ? cleanLocationRaw
        .split('-')
        .map(w => w.toUpperCase() === 'NCR' || w.toUpperCase() === 'USA' || w.toUpperCase() === 'UK' ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'India';

  useEffect(() => {
    window.scrollTo(0, 0);

    const slug = displayName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const canonicalUrl = `/digital-marketing/${slug}`;
    const pageTitle = `Digital Marketing & SEO Agency in ${displayName} | BeeSocial`;
    const pageDesc = `Local SEO, Performance Marketing, and Google Maps optimization services for businesses in ${displayName} and surrounding regions.`;

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    // Dynamic LocalBusiness & Breadcrumb JSON-LD Schema
    const scriptId = 'location-page-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": `${canonicalUrl}#localbusiness`,
          "name": `BeeSocial - ${displayName}`,
          "url": canonicalUrl,
          "description": pageDesc,
          "telephone": "+917020800621",
          "areaServed": displayName,
          "provider": {
            "@type": "Organization",
            "name": "BeeSocial",
            "url": ""
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "/digital-marketing" },
            { "@type": "ListItem", "position": 3, "name": displayName, "item": canonicalUrl }
          ]
        }
      ]
    };
    script.text = JSON.stringify(schemaData);
  }, [displayName]);

  const isInternational = ['USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia'].includes(displayName);
  const regionTag = isInternational ? 'INTERNATIONAL · DIGITAL MARKETING' : 'INDIA · DIGITAL MARKETING';

  const faqs = [
    {
      q: `Do you offer digital marketing services in ${displayName}?`,
      a: `Yes! BeeSocial provides full-spectrum performance marketing, SEO, Meta ads, Google ads, social media management, and custom web design directly for businesses operating in ${displayName}.`
    },
    {
      q: `How much does digital marketing cost in ${displayName}?`,
      a: `Our services include high-impact social media management, creative design, and growth campaigns tailored to your specific budget and growth goals in ${displayName}.`
    },
    {
      q: `Which industries do you work with in ${displayName}?`,
      a: `We work across 89+ industries in ${displayName} including e-commerce, real estate, healthcare, education, local services, B2B SaaS, and hospitality.`
    },
    {
      q: `How soon can we start?`,
      a: `We can launch your ${displayName} campaign within 24–48 hours after our initial strategy onboarding session.`
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main, #FFF7F8)', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* 1. BREADCRUMB */}
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer', color: 'var(--primary)' }} onClick={() => onNavigate('home')}>Home</span> / <span className="active" style={{ color: 'var(--secondary)' }}>Digital Marketing in {displayName}</span>
        </div>

        {/* 2. TOP SUMMARY NOTIFICATION BOX (MATCHING SCREENSHOT 2) */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.4rem' }}>
            Digital Marketing Services in {displayName} | BeeSocial
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Looking for a results-driven digital marketing agency in {displayName}? BeeSocial offers SEO, social media, Google & Meta ads, web design and graphic design for businesses in {displayName}. Get a free quote on WhatsApp.
          </p>
        </div>

        {/* 3. MAIN HERO BANNER (MATCHING SCREENSHOT 2) */}
        <div className="responsive-hero-card" style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '4rem', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--primary)' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {regionTag}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: 'var(--secondary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Digital Marketing Services in {displayName}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '820px', marginBottom: '2rem' }}>
            BeeSocial is a founder-led digital marketing agency helping businesses in {displayName} grow online with SEO, Google & Meta ads, social media, websites and graphic design. We combine local market understanding with proven, data-driven execution — so your brand in {displayName} gets found, gets leads and gets results.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: 'var(--secondary)', color: '#FFFFFF', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              Get a Free {displayName} Quote →
            </a>
            <button
              onClick={() => onOpenStrategyModal(`Digital Marketing Strategy Session in ${displayName}`)}
              className="btn"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--secondary)', border: '1px solid var(--border-color)', padding: '0.9rem 1.8rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem' }}
            >
              Book Strategy Session
            </button>
          </div>
        </div>

        {/* 4. "WHAT WE OFFER" SECTION (MATCHING SCREENSHOT 3) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
              Our Digital Marketing Services in {displayName}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Full-service growth for {displayName} businesses — every channel, one accountable team.
            </p>
          </div>

          {/* 6 SERVICE CARDS WITH ORANGE TOP BORDER */}
          <div className="responsive-3-grid" style={{ gap: '1.75rem' }}>
            
            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Search Engine Optimisation (SEO)</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Rank your {displayName} business at the top of Google and capture high-intent local searches.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Google Ads (PPC)</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                High-intent Search, Display & YouTube campaigns engineered for ROI in the {displayName} market.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Meta Ads (Facebook & Instagram)</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Targeted social campaigns that turn {displayName} audiences into real leads.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>📣</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Social Media Marketing</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Content, reels and community management that grow your {displayName} brand.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Website Design & Development</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Fast, SEO-ready, mobile-first websites built to convert {displayName} visitors.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', borderTop: '4px solid var(--primary)', borderLeft: '1px solid var(--border-color-subtle)', borderRight: '1px solid var(--border-color-subtle)', borderBottom: '1px solid var(--border-color-subtle)', borderRadius: '18px', padding: '2rem 1.5rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎨</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>Graphic Design & Branding</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Posters, logos, packaging and brand identity — tailored to your brand aesthetic.
              </p>
            </div>

          </div>
        </div>

        {/* 5. "WHY [LOCATION] BUSINESSES CHOOSE US" SECTION (MATCHING SCREENSHOT 4) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WHY BeeSocial</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)' }}>
              Why {displayName} Businesses Choose Us
            </h2>
          </div>

          {/* 4 CARDS WITH CREAM BACKGROUND MATCHING SCREENSHOT 4 */}
          <div className="responsive-3-grid" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.6rem' }}>Local Insight, National Strength</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                We tailor every campaign to {displayName}'s local search behaviour, competition and customer intent.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.6rem' }}>Proven Performance</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Clear milestone-based execution with zero lock-in contracts and founder-led accountability.
              </p>
            </div>

            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.6rem' }}>Founder-Led Delivery</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                A hands-on, founder-led team that treats your business as our own. You always know who is driving your project.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '350px' }}>
            <div style={{ background: '#F8F6F0', borderRadius: '18px', padding: '2rem 1.75rem', border: '1px solid #EFECE6' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.6rem' }}>Measurable ROI</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Data-driven work with live dashboards and monthly reports — every rupee mapped to a result.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WorkShowcaseMarquee locationName={displayName} />

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        {/* 6. "DIGITAL MARKETING IN [LOCATION] — FAQS" SECTION (MATCHING SCREENSHOT 5) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.6 }}></span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)' }}>
              Digital Marketing in {displayName} — FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{ background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color-subtle)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--secondary)' }}>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 700 }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.925rem', lineHeight: 1.6, borderTop: '1px solid var(--border-color-subtle, #F0E4E8)', paddingTop: '0.85rem' }}>
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
            Grow your business in {displayName}
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Free audit and strategy session — we respond within 2 hours.
          </p>

          <a
            href={`https://wa.me/917020800621?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: 'var(--primary-raw, #D6336C)', color: 'var(--secondary)', padding: '0.9rem 2.2rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}
          >
            Start on WhatsApp →
          </a>
        </div>

      </div>
    </div>
  );
};
