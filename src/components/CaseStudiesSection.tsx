import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { PageView } from '../types';

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  category: string;
  services: string;
  tagline: string;
  icon: string;
  accentColor: string;
  heroMetrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  execution: {
    shoots: string;
    reels: string;
    creatives: string;
    campaigns: string;
  };
  results: {
    metric: string;
    growth: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const allCaseStudies: CaseStudyItem[] = [
  {
    id: 'sanghvi-jewellers',
    client: 'Sanghvi Jewellers',
    industry: 'Fine Jewellery & Bridal Luxury',
    category: 'Jewellery',
    services: 'Branding • Content Strategy • Reels • Meta Ads • WhatsApp CRM',
    tagline: 'How We Scaled Walk-In Showroom Inquiries and High-Ticket Bridal Sales',
    icon: '💎',
    accentColor: '#D6336C',
    heroMetrics: [
      { label: 'Total Reach', value: '3.4M+' },
      { label: 'Walk-In Leads', value: '+310%' },
      { label: 'Blended ROAS', value: '6.4x' }
    ],
    challenge: 'A 28-year-old heritage jewellery showroom had massive local trust but zero digital momentum. Their existing social media looked outdated with static stock photos that failed to capture the intricate craftsmanship of their uncut polki and bridal diamond collections. Competitors were eating into their younger bride demographic.',
    approach: [
      'Visual Identity Refresh: Redesigned the digital brand palette with royal velvet tones, minimalist luxury typography, and macro-focus jewelry guidelines.',
      'High-Gloss 4K Video Shoots: Produced 4K macro reels showing light reflections on diamonds, bridal jewelry try-ons, and behind-the-scenes karigar craftsmanship.',
      'Pin-Code Targeted Meta Ads: Built hyper-targeted Meta Advantage+ campaigns targeting affluent pin codes within a 25km radius and NRI wedding planners.',
      'Automated WhatsApp VIP Catalog: Created an instant WhatsApp catalog where prospective brides could schedule private showroom trials.'
    ],
    execution: {
      shoots: '8 On-Location Editorial Shoots',
      reels: '48 High-Retention Instagram Reels',
      creatives: '120+ High-Definition Catalog Assets',
      campaigns: '14 Hyper-Targeted Meta & Google Campaigns'
    },
    results: [
      { metric: 'Organic & Paid Reach', growth: '+420%', description: 'Reached over 3.4M high-intent jewellery shoppers across target cities.' },
      { metric: 'Instagram Engagement', growth: '+280%', description: 'Reels averaged 85K+ views each with high bookmark and share ratios.' },
      { metric: 'Showroom Walk-Ins', growth: '+310%', description: 'Customers regularly visited the showroom with saved reels on their phones.' },
      { metric: 'Blended Ad Return (ROAS)', growth: '6.4x', description: 'Generated over ₹1.2 Cr in attributable high-ticket bridal jewelry sales.' }
    ],
    testimonial: {
      quote: 'BeeSocial transformed how our collection is perceived by the new generation. Walk-in brides now come in with specific reel screenshots asking for exact designs.',
      author: 'Rajesh Sanghvi',
      role: 'Managing Director, Sanghvi Jewellers'
    }
  },
  {
    id: 'urban-nest-interiors',
    client: 'UrbanNest Interiors',
    industry: 'Luxury Architecture & Interiors',
    category: 'Real Estate & Interiors',
    services: 'Project Video Shoots • Reels • Meta Ads • Web Portfolio',
    tagline: 'Generating ₹1.8 Cr+ in Signed Turnkey Interior Contracts in 90 Days',
    icon: '🪑',
    accentColor: '#3B82F6',
    heroMetrics: [
      { label: 'Contract Value', value: '₹1.8Cr+' },
      { label: 'Qualified Leads', value: '140+' },
      { label: 'Cost Per Lead', value: '-45%' }
    ],
    challenge: 'UrbanNest delivered stunning ₹40L–₹1Cr residential turnkey projects, but had zero digital presence. They relied solely on word-of-mouth referrals, leaving their design team with unpredictable quarterly revenue.',
    approach: [
      'Cinematic Architectural Walkthroughs: Filmed completed luxury villas and penthouses using gimbal tracking, ambient lighting, and voiceover walkthroughs.',
      'Client Reaction Storytelling: Documented raw homeowner reactions during the project handover, establishing immediate authenticity.',
      'Meta Lead Gen Funnels: Deployed quiz-based lead forms ("Calculate Your Home Interior Cost in 60 Seconds") targeted at new possession residential complexes.',
      'Fast-Loading 3D Portfolio Page: Built a conversion-optimized web portfolio that converts social media visitors into scheduled design consultations.'
    ],
    execution: {
      shoots: '6 Completed Villa & Penthouse Shoots',
      reels: '32 Cinematic Walkthrough Reels',
      creatives: '60+ Architectural Showcase Creatives',
      campaigns: '8 Targeted Meta Lead Generation Funnels'
    },
    results: [
      { metric: 'High-Ticket Inquiries', growth: '140+', description: 'Direct consultations booked by owners of 3BHK, 4BHK and luxury villas.' },
      { metric: 'Instagram Saves & Shares', growth: '24,000+', description: 'Walkthrough reels became viral inspiration for homeowners in the city.' },
      { metric: 'Cost Per Lead (CPL)', growth: '-45%', description: 'Dropped customer acquisition cost from ₹2,400 to ₹1,320 per verified lead.' },
      { metric: 'Signed Project Revenue', growth: '₹1.8 Cr+', description: 'Closed 7 major residential turnkey interior projects in under 3 months.' }
    ],
    testimonial: {
      quote: 'The video reels BeeSocial produced gave us the aesthetic of a top-tier architectural studio. Serious homeowners started calling us within weeks of going live.',
      author: 'Karan Malhotra',
      role: 'Co-Founder, UrbanNest Interiors'
    }
  },
  {
    id: 'metro-heart-hospital',
    client: 'Metro Heart Hospital',
    industry: 'Healthcare & Cardiac Care',
    category: 'Healthcare',
    services: 'Doctor Video Series • Local SEO • Meta Ad Campaigns • Google Business',
    tagline: 'Booking Cardiac OPD Consultations 3 Weeks in Advance Through Doctor Authority',
    icon: '🏥',
    accentColor: '#10B981',
    heroMetrics: [
      { label: 'OPD Queue', value: '3 Wks Full' },
      { label: 'Patient Reach', value: '2.1M+' },
      { label: 'Google Rating', value: '4.9 ★' }
    ],
    challenge: 'A multi-specialty cardiac hospital was struggling to communicate the superiority of their new robotic surgery wing. Patients were unaware of the minimal downtime and perceived the hospital as traditional rather than cutting-edge.',
    approach: [
      'Doctor Q&A Reel Engine: Filmed chief cardiac surgeons answering common patient anxieties (e.g., "When should you actually worry about chest discomfort?").',
      'Patient Recovery Stories: Highlighted real patient recovery journeys without medical jargon, focusing on family peace of mind and quality of life.',
      'Localized Emergency Care Search Ads: Set up high-intent Google Search and local Map Pack optimization for critical cardiovascular queries.',
      'Preventative Checkup Packages: Packaged and advertised comprehensive annual heart screening plans for corporate professionals aged 35+.'
    ],
    execution: {
      shoots: '12 In-Hospital Doctor Filming Sessions',
      reels: '44 Medical Awareness Reels',
      creatives: '90+ Health Infographics & Preventive Guides',
      campaigns: '12 Targeted Health Awareness Ad Funnels'
    },
    results: [
      { metric: 'OPD Advance Bookings', growth: '3 Weeks', description: 'Senior cardiologists OPD slots consistently filled 3 weeks ahead of schedule.' },
      { metric: 'Unique Citizens Reached', growth: '2.1M+', description: 'Built dominant regional healthcare authority across 3 target districts.' },
      { metric: 'Health Checkup Conversions', growth: '+340%', description: 'Sold over 1,200 executive heart checkup packages via digital channels.' },
      { metric: 'Google Reviews & Rating', growth: '4.9 ★ (650+)', description: 'Transformed online hospital reputation into the highest rated in the region.' }
    ],
    testimonial: {
      quote: 'Medical marketing requires absolute precision and ethics. BeeSocial understood this completely and established our doctors as the most trusted voices in the city.',
      author: 'Dr. Rajesh Mehta',
      role: 'Director, Metro Heart Hospital'
    }
  },
  {
    id: 'crave-cloud-kitchen',
    client: 'Crave Cloud Kitchens',
    industry: 'Food, Dining & Cloud Kitchens',
    category: 'Food & Hospitality',
    services: 'Food Photography • Viral Reels • Meta Ads • Swiggy/Zomato Scaling',
    tagline: 'Doubling Weekend Order Volumes and Slashing Cost-Per-Order by 42%',
    icon: '🍽️',
    accentColor: '#F59E0B',
    heroMetrics: [
      { label: 'Order Volume', value: '2.4x' },
      { label: 'Direct Web Orders', value: '+160%' },
      { label: 'Cost Per Order', value: '-42%' }
    ],
    challenge: 'A gourmet burger and cloud kitchen brand was paying 28–32% aggregator commissions and suffering from low weekday order velocity and high customer churn.',
    approach: [
      'Sensory Food ASMR Video: Shot sizzle reels, cheese pulls, and slow-motion sauce drizzles that stop users scrolling immediately during meal times.',
      'Geo-Fenced Hunger Window Ads: Programmed Meta ads to fire exclusively during 12 PM–3 PM and 7 PM–11 PM within a 7km kitchen radius.',
      'Direct Web Ordering WhatsApp Flow: Built a zero-commission WhatsApp menu ordering flow with exclusive weekend bundle discounts.',
      'Food Creator Tasting Evenings: Hosted micro food influencers for authentic unboxing and review content.'
    ],
    execution: {
      shoots: '5 Dark Kitchen Studio Food Shoots',
      reels: '36 High-Appetite Video Reels',
      creatives: '80+ Dynamic Menu & Promo Creatives',
      campaigns: '16 Time-Targeted Meta & Delivery Ads'
    },
    results: [
      { metric: 'Weekend Order Volume', growth: '2.4x', description: 'Doubled total food orders delivered on Friday, Saturday, and Sunday nights.' },
      { metric: 'Direct Web Orders', growth: '+160%', description: 'Shifted 35% of total order volume to direct zero-commission ordering channels.' },
      { metric: 'Cost Per Order (CPO)', growth: '-42%', description: 'Lowered blended customer acquisition cost per food delivery order to ₹38.' },
      { metric: 'Return On Ad Spend (ROAS)', growth: '5.2x', description: 'Generated consistent daily revenue spikes with predictable ad spend.' }
    ],
    testimonial: {
      quote: 'Our kitchen bays are packed every weekend now. The festival campaign BeeSocial ran was our highest grossing weekend since inception.',
      author: 'Rohan Desai',
      role: 'Founder, Crave Cloud Kitchen'
    }
  },
  {
    id: 'bloom-salon-spa',
    client: 'Bloom Salon & Luxury Spa',
    industry: 'Beauty, Wellness & Bridal',
    category: 'Beauty & Wellness',
    services: 'Bridal Campaigns • Influencer Collabs • Social Media Management',
    tagline: '100% Bridal Calendar Booked Out 2 Months in Advance via Video Transformations',
    icon: '✨',
    accentColor: '#EC4899',
    heroMetrics: [
      { label: 'Bridal Slots', value: '100% Booked' },
      { label: 'Repeat Clients', value: '+55%' },
      { label: 'Campaign ROAS', value: '7.8x' }
    ],
    challenge: 'A boutique luxury salon struggled with empty weekday appointment slots and highly unpredictable wedding season bookings due to intense local price competition.',
    approach: [
      'Before/After Transformation Reels: Highlighting bridal hair, HD airbrush makeup, and skincare glow without deceptive beauty filters.',
      'Pamper Day Creator Collabs: Invited lifestyle influencers for bridal trial sessions, producing authentic testimonial stories.',
      'Automated WhatsApp Re-engagement: Triggered personalized hair treatment and facial reminder offers every 28 days for existing clients.',
      'Weekday Happy Hour Packages: Created and advertised targeted weekday relaxation bundles to boost off-peak chair occupancy.'
    ],
    execution: {
      shoots: '8 Bridal Transformation Shoots',
      reels: '32 Aesthetic Hair & Makeup Reels',
      creatives: '50+ Price Menu & Service Creatives',
      campaigns: '10 Local Radius Meta Ad Funnels'
    },
    results: [
      { metric: 'Bridal Season Capacity', growth: '100%', description: 'All premium bridal makeup slots fully booked 60 days before wedding season.' },
      { metric: 'Client Repeat Rate', growth: '+55%', description: 'Automated WhatsApp CRM brought back over half of one-time visitors.' },
      { metric: 'Video Views', growth: '1.8M+', description: 'Transformation series garnered massive organic local viewership and shares.' },
      { metric: 'Ad ROI', growth: '7.8x', description: 'Delivered extraordinary profit margins on bridal package bookings.' }
    ],
    testimonial: {
      quote: 'BeeSocial completely transformed our booking dynamics. We went from stressing about wedding season to having a waitlist of brides.',
      author: 'Sneha Kapoor',
      role: 'Owner, Bloom Salon & Spa'
    }
  },
  {
    id: 'edvantage-coaching',
    client: 'EdVantage Academy',
    industry: 'Education & Competitive Test Prep',
    category: 'Education',
    services: 'Student Success Stories • Meta & Google Ads • Admission Landing Page',
    tagline: 'Enrolling 320+ Confirmed Students in 45 Days with 8.5x ROI on Marketing Spend',
    icon: '🎓',
    accentColor: '#8B5CF6',
    heroMetrics: [
      { label: 'Admissions', value: '320+ Enrolled' },
      { label: 'Cost Per Lead', value: '-48%' },
      { label: 'Marketing ROI', value: '8.5x' }
    ],
    challenge: 'Annual admission windows were chaotic and high-stress. Offline seminar attendance was dropping and competitors were flooding Google Ads with aggressive bidding.',
    approach: [
      'Topper & Parent Video Proof: Filmed authentic interviews with rank holders and their parents sharing their exact study routine and faculty support.',
      'Scholarship Test Landing Page: Built an ultra-fast, mobile-friendly registration page for the annual talent search scholarship examination.',
      'Parent-Targeted Retargeting: Re-engaged parents who visited the fee page with faculty credential highlights and success rate statistics.',
      'SMS & WhatsApp Lead Nurturing: Sent instant automated brochures, sample papers, and counseling booking links to every inquiry.'
    ],
    execution: {
      shoots: '4 Campus & Classroom Shoots',
      reels: '24 Academic Tip & Success Reels',
      creatives: '70+ Result Announcements & Scholarship Banners',
      campaigns: '10 High-Intent Google & Meta Ad Funnels'
    },
    results: [
      { metric: 'Verified Applications', growth: '850+', description: 'Qualified student inquiries received across NEET & JEE prep programs.' },
      { metric: 'Confirmed Admissions', growth: '320+', description: 'Filled classroom batch capacity weeks before offline entrance test dates.' },
      { metric: 'Cost Per Lead (CPL)', growth: '-48%', description: 'Reduced cost per inquiry from ₹620 to ₹320 through smart ad targeting.' },
      { metric: 'Overall Campaign ROI', growth: '8.5x', description: 'Generated the highest admission revenue in the institution’s 8-year history.' }
    ],
    testimonial: {
      quote: 'Admission season used to be stressful and unpredictable. With BeeSocial, our batches filled up before our offline seminars even began.',
      author: 'Amit Verma',
      role: 'CEO, EdVantage Academy'
    }
  }
];

interface CaseStudiesSectionProps {
  onNavigate?: (page: PageView) => void;
  backgroundColor?: string;
  isStandalonePage?: boolean;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate, backgroundColor, isStandalonePage = false }) => {
  const reveal = useScrollReveal();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Jewellery', 'Real Estate & Interiors', 'Healthcare', 'Food & Hospitality', 'Beauty & Wellness', 'Education'];

  const filteredStudies = activeCategory === 'All'
    ? allCaseStudies
    : allCaseStudies.filter(c => c.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const displayedStudies = isStandalonePage ? filteredStudies : allCaseStudies.slice(0, 3);

  return (
    <section style={{ padding: isStandalonePage ? '4rem 0 6rem 0' : '6rem 0', backgroundColor: backgroundColor || 'var(--bg-card)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">REAL CLIENT TRANSFORMATIONS</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Work That Speaks for Itself.
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Instead of simply saying "we manage social media," here is how we help ambitious brands build their digital presence, capture attention, and drive measurable revenue.
          </p>
        </div>

        {/* Category Filter Tabs (visible on standalone page or full view) */}
        {isStandalonePage && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: activeCategory === cat ? '1.5px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-main)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeCategory === cat ? '0 6px 18px rgba(214, 51, 108, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Case Studies Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1150px',
          margin: '0 auto 3rem auto'
        }}>
          {displayedStudies.map((cs, idx) => (
            <div
              key={cs.id}
              ref={reveal}
              className={`card-shimmer scroll-delay-${(idx % 3) + 1}`}
              onClick={() => setSelectedCaseStudy(cs)}
              style={{
                background: 'var(--bg-main)',
                border: '1.5px solid var(--border-color-subtle)',
                borderTop: `4px solid ${cs.accentColor || 'var(--primary)'}`,
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(214, 51, 108, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(214, 51, 108, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--border-color-subtle)';
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: `${cs.accentColor}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem'
                }}>
                  {cs.icon}
                </div>
                <span style={{
                  fontSize: '0.725rem',
                  fontWeight: 800,
                  color: cs.accentColor,
                  background: `${cs.accentColor}12`,
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  letterSpacing: '0.04em'
                }}>
                  {cs.industry}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.4rem' }}>
                {cs.client}
              </h3>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.02em' }}>
                {cs.services}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.5rem', flexGrow: 0 }}>
                {cs.tagline}
              </p>

              {/* 3 Metric Pills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                padding: '0.9rem',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color-subtle)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {cs.heroMetrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.1rem' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge Snippet */}
              <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                  The Challenge
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {cs.challenge}
                </p>
              </div>

              {/* Interactive CTA Link */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.875rem'
              }}>
                <span>View Full Case Study</span>
                <span style={{ fontSize: '1.1rem', transition: 'transform 0.2s ease' }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button on Homepage */}
        {!isStandalonePage && onNavigate && (
          <div ref={reveal} className="scroll-delay-3" style={{ textAlign: 'center' }}>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('case-studies')}
              style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}
            >
              Explore All Case Studies →
            </button>
          </div>
        )}

      </div>

      {/* FULL-SCREEN CASE STUDY POPUP MODAL */}
      {selectedCaseStudy && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedCaseStudy(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 999999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.5rem',
            overflowY: 'auto'
          }}
        >
          {/* Modal Container */}
          <div
            className="card-shimmer animate-fade-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-main)',
              borderRadius: '28px',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid var(--border-color-subtle)',
              borderTop: `6px solid ${selectedCaseStudy.accentColor || 'var(--primary)'}`,
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              padding: '2.5rem 2.25rem'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              style={{
                position: 'sticky',
                top: 0,
                float: 'right',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color-subtle)',
                color: 'var(--secondary)',
                fontSize: '1.25rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.style.color = 'var(--secondary)';
              }}
              aria-label="Close Case Study"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{selectedCaseStudy.icon}</span>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: selectedCaseStudy.accentColor,
                    background: `${selectedCaseStudy.accentColor}12`,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '999px',
                    letterSpacing: '0.04em'
                  }}>
                    {selectedCaseStudy.industry}
                  </span>
                </div>
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                {selectedCaseStudy.client}
              </h2>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem' }}>
                {selectedCaseStudy.services}
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--secondary)', fontWeight: 700, margin: 0 }}>
                {selectedCaseStudy.tagline}
              </p>
            </div>

            {/* Big 3 Hero Metric Callouts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-color-subtle)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              {selectedCaseStudy.heroMetrics.map((m, mIdx) => (
                <div key={mIdx} style={{ padding: '0.5rem' }}>
                  <div style={{ fontSize: '1.85rem', fontWeight: 900, color: selectedCaseStudy.accentColor, fontFamily: 'Outfit, sans-serif' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontWeight: 700, marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 1: THE CHALLENGE */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🎯</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                  The Challenge
                </h3>
              </div>
              <div style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(239, 68, 68, 0.04)',
                borderLeft: '4px solid #EF4444',
                borderRadius: '0 16px 16px 0',
                color: 'var(--text-main)',
                fontSize: '0.925rem',
                lineHeight: 1.65
              }}>
                {selectedCaseStudy.challenge}
              </div>
            </div>

            {/* SECTION 2: OUR STRATEGIC APPROACH */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🧠</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                  Our Strategic Approach
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedCaseStudy.approach.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.9rem 1.15rem',
                      background: 'var(--bg-card)',
                      borderRadius: '14px',
                      border: '1px solid var(--border-color-subtle)',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      color: 'var(--text-main)'
                    }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 900, flexShrink: 0 }}>0{sIdx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: CAMPAIGN EXECUTION NUMBERS */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🎬</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                  Campaign Execution Deliverables
                </h3>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '0.75rem'
              }}>
                <div style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-color-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>📸</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--secondary)' }}>{selectedCaseStudy.execution.shoots}</div>
                </div>
                <div style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-color-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>🎥</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--secondary)' }}>{selectedCaseStudy.execution.reels}</div>
                </div>
                <div style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-color-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>🎨</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--secondary)' }}>{selectedCaseStudy.execution.creatives}</div>
                </div>
                <div style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid var(--border-color-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>📢</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--secondary)' }}>{selectedCaseStudy.execution.campaigns}</div>
                </div>
              </div>
            </div>

            {/* SECTION 4: THE MEASURABLE RESULTS */}
            <div style={{ marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📈</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                  Measurable Business Impact
                </h3>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '0.85rem'
              }}>
                {selectedCaseStudy.results.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    style={{
                      padding: '1.15rem',
                      background: 'rgba(34, 197, 94, 0.04)',
                      border: '1px solid rgba(34, 197, 94, 0.18)',
                      borderRadius: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--secondary)' }}>{res.metric}</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#16A34A' }}>{res.growth}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: CLIENT TESTIMONIAL QUOTE */}
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(214, 51, 108, 0.08) 0%, rgba(214, 51, 108, 0.02) 100%)',
              border: '1.5px solid rgba(214, 51, 108, 0.25)',
              borderRadius: '20px',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary)', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 0.85rem 0' }}>
                “{selectedCaseStudy.testimonial.quote}”
              </p>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)' }}>
                {selectedCaseStudy.testimonial.author}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {selectedCaseStudy.testimonial.role}
              </div>
            </div>

            {/* MODAL FOOTER ACTIONS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
              >
                ← Back to Case Studies
              </button>

              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  if (onNavigate) onNavigate('contact');
                }}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
              >
                Get Similar Growth For Your Brand 🚀
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
export default CaseStudiesSection;
