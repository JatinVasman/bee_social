import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  category: string;
  rating: number;
}

const row1: Testimonial[] = [
  {
    name: 'Dr. Rajesh Mehta',
    role: 'Director',
    company: 'Metro Heart Hospital',
    quote: "Digital Digix transformed our digital presence completely. Our cardiac department is now fully booked 3 weeks in advance. The team's professionalism is unmatched.",
    category: 'Healthcare',
    rating: 5
  },
  {
    name: 'Rohan Desai',
    role: 'Founder',
    company: 'Crave Cloud Kitchen',
    quote: "Our weekend orders doubled within two months of their festival creatives and Meta Ads. The cost-per-order is the lowest we've ever seen.",
    category: 'Food & Restaurant',
    rating: 5
  },
  {
    name: 'Karan Malhotra',
    role: 'Co-founder',
    company: 'UrbanNest Interiors',
    quote: "The portfolio reels they produced made us look like a national brand. Premium leads started coming in almost immediately.",
    category: 'Interior Design',
    rating: 5
  },
  {
    name: 'Suresh Iyer',
    role: 'MD',
    company: 'Pinnacle Realtors',
    quote: "Lead quality is what sold me. Their site-visit campaigns bring serious buyers, not just clicks. ROI has been consistently strong.",
    category: 'Real Estate',
    rating: 5
  },
  {
    name: 'Arjun Reddy',
    role: 'Director',
    company: 'Apex Fitness Studios',
    quote: "Our membership enquiries tripled after the reels and local ads went live. The team genuinely cares about the numbers.",
    category: 'Fitness & Wellness',
    rating: 5
  },
  {
    name: 'Imran Qureshi',
    role: 'Owner',
    company: 'AutoShine Detailing',
    quote: "The WhatsApp marketing setup keeps our bays booked all week. Simple, affordable and it just works.",
    category: 'Automotive',
    rating: 5
  },
  {
    name: 'Amit Verma',
    role: 'CEO',
    company: 'EdVantage Coaching',
    quote: "From posters to a full website and Meta Ads — everything delivered on time, every time. The post-pay option showed real confidence in their own work.",
    category: 'Education',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'MD',
    company: 'Singh Realty Group',
    quote: "Professional, responsive and deeply invested in our growth. Their campaigns is far better than the agencies we've worked with before.",
    category: 'Real Estate',
    rating: 5
  }
];

const row2: Testimonial[] = [
  {
    name: 'Sneha Kapoor',
    role: 'Owner',
    company: 'Bloom Salon & Spa',
    quote: "Their KPI dashboard changed how we run the business. We finally see daily revenue, staff performance and repeat-client rates at a glance. Worth every rupee.",
    category: 'Wellness',
    rating: 5
  },
  {
    name: 'Dr. Kavita Rao',
    role: 'ENT Specialist',
    company: 'Hyderabad',
    quote: "The pre-monsoon campaign was perfectly timed. We were booked solid for two months. They understand Indian healthcare marketing deeply.",
    category: 'Clinics',
    rating: 5
  },
  {
    name: 'Anjali Nair',
    role: 'Director',
    company: 'BrightPath Academy',
    quote: "Admissions season used to be stressful. Now our enquiry forms fill up weeks in advance thanks to their landing pages and ad funnels.",
    category: 'Education',
    rating: 5
  },
  {
    name: 'Fatima Sheikh',
    role: 'Owner',
    company: 'Zariya Boutique',
    quote: "From a tiny Instagram page to a proper online store with daily orders — they handled design, ads and the website end to end.",
    category: 'Fashion & Retail',
    rating: 5
  },
  {
    name: 'Neha Joshi',
    role: 'Founder',
    company: 'GreenLeaf Organics',
    quote: "They turned our D2C brand around with sharp packaging design and retargeting ads. Repeat purchases are up 60% this quarter.",
    category: 'D2C & E-commerce',
    rating: 5
  },
  {
    name: 'Meera Pillai',
    role: 'Partner',
    company: 'Lex & Co. Advocates',
    quote: "Professional, discreet and effective. Our firm's credibility online now matches our reputation offline. Highly recommended.",
    category: 'Professional Services',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'SmileCraft Dental',
    quote: "One reel about our smile makeover package went viral and our cosmetic bookings have been full ever since. 13x ROI in the first month is extraordinary work.",
    category: 'Dental',
    rating: 5
  }
];

interface ClientVoicesProps {
  backgroundColor?: string;
}

export const ClientVoices: React.FC<ClientVoicesProps> = ({ backgroundColor }) => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-tag" style={{ color: '#D97706', background: 'rgba(217, 119, 6, 0.1)' }}>CLIENT VOICES</span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif', color: 'var(--secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
          Loved by Businesses Across India
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          Real words from the founders, doctors and directors we partner with.
        </p>
      </div>

      {/* TRACK 1 - SCROLLS LEFT */}
      <div className="marquee-container" style={{ marginBottom: '1.75rem' }}>
        <div className="marquee-track-left">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#D97706',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D97706',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2 - SCROLLS RIGHT */}
      <div className="marquee-container">
        <div className="marquee-track-right">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#D97706',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D97706',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
