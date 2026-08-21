import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { PageView } from '../types';

interface PackagesSectionProps {
  onNavigate?: (page: PageView) => void;
  onOpenStrategyModal?: () => void;
  backgroundColor?: string;
}

const packages = [
  {
    name: 'Starter',
    subtitle: 'Essential Digital Foundation',
    tagline: 'For businesses starting their digital journey and building brand consistency.',
    icon: '🌱',
    price: '₹15,999',
    period: '/ month',
    color: 'rgba(34, 197, 94, 0.08)',
    borderColor: 'rgba(34, 197, 94, 0.25)',
    popular: false,
    features: [
      '12 Curated Social Media Posts / Month',
      '4 High-Retention Reels / Month',
      'Grid & Profile Aesthetic Optimization',
      'Hashtag Strategy & Caption Copywriting',
      'Monthly Growth & Performance Report'
    ]
  },
  {
    name: 'Growth',
    subtitle: 'Aggressive Visibility & Inquiries',
    tagline: 'For brands looking to build consistency, engagement, and reliable inbound leads.',
    icon: '🚀',
    price: '₹29,999',
    period: '/ month',
    color: 'rgba(214, 51, 108, 0.08)',
    borderColor: 'var(--primary)',
    popular: true,
    features: [
      '20 High-Impact Social Creatives / Month',
      '8 Edited 4K Video Reels / Month',
      'Meta Paid Ads Setup & Management',
      'Community Management & DM Responses',
      'WhatsApp Automation & Lead Nurturing',
      'Bi-Weekly Strategic Review & Analytics'
    ]
  },
  {
    name: 'Scale',
    subtitle: 'Full-Suite Brand Dominance',
    tagline: 'For businesses ready for aggressive digital growth and market leadership.',
    icon: '⚡',
    price: '₹49,999',
    period: '/ month',
    color: 'rgba(124, 58, 237, 0.08)',
    borderColor: 'rgba(124, 58, 237, 0.25)',
    popular: false,
    features: [
      'Complete Omnichannel Content Engine',
      '12–16 Premium Shoots & Reels / Month',
      'Full Performance Marketing (Meta + Google Ads)',
      'Creator & Influencer Campaign Management',
      'Dedicated Creative Director & Priority Support',
      'Real-Time Live KPI Dashboard'
    ]
  }
];

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onNavigate, onOpenStrategyModal, backgroundColor }) => {
  const reveal = useScrollReveal();

  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-card)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div ref={reveal} className="section-tag">PACKAGES</div>
          <h2 ref={reveal} className="scroll-delay-1" style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '0.75rem' }}>
            Simple. Transparent. Scalable.
          </h2>
          <p ref={reveal} className="scroll-delay-2" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Flexible growth tiers built specifically for startups, SMEs, and established local brands.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2rem',
          maxWidth: '1050px',
          margin: '0 auto 3.5rem auto',
          alignItems: 'stretch'
        }}>
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              ref={reveal}
              className={`card-shimmer scroll-delay-${idx + 1}`}
              style={{
                background: 'var(--bg-main)',
                border: pkg.popular ? '2px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                borderRadius: '24px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: pkg.popular ? '0 15px 45px rgba(214, 51, 108, 0.16)' : 'var(--shadow-card)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = pkg.popular
                  ? '0 20px 50px rgba(214, 51, 108, 0.22)'
                  : '0 15px 35px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = pkg.popular
                  ? '0 15px 45px rgba(214, 51, 108, 0.16)'
                  : 'var(--shadow-card)';
              }}
            >
              {/* Badge Area (Fixed height for consistent card alignment) */}
              <div style={{ minHeight: '28px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {pkg.popular ? (
                  <span style={{
                    background: 'var(--primary)',
                    color: '#FFFFFF',
                    fontSize: '0.725rem',
                    fontWeight: 800,
                    padding: '0.35rem 1rem',
                    borderRadius: '999px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(214, 51, 108, 0.35)'
                  }}>
                    ★ Most Popular Plan
                  </span>
                ) : (
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {pkg.subtitle}
                  </span>
                )}
              </div>

              {/* Icon & Title */}
              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{pkg.icon}</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                  {pkg.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '0.5rem', minHeight: '40px' }}>
                  {pkg.tagline}
                </p>
              </div>

              {/* Features List */}
              <div style={{
                margin: '1rem 0 1.5rem 0',
                padding: '1.25rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color-subtle)',
                flexGrow: 1
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  What's Included:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.825rem', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.4 }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 900, flexShrink: 0 }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <button
                className={pkg.popular ? 'btn btn-primary' : 'btn btn-secondary'}
                onClick={() => {
                  if (onOpenStrategyModal) onOpenStrategyModal();
                  else if (onNavigate) onNavigate('contact');
                }}
                style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '0.925rem' }}
              >
                {pkg.popular ? 'Choose Growth Plan ➔' : `Get Started with ${pkg.name} ➔`}
              </button>
            </div>
          ))}
        </div>

        {/* Starting Price Banner & Navigation */}
        <div ref={reveal} className="scroll-delay-3" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--bg-main)',
            border: '1.5px solid var(--border-color-subtle)',
            borderRadius: '999px',
            padding: '0.65rem 1.75rem',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-card)'
          }}>
            <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Customized solutions available</span>
            <span style={{ color: 'var(--border-color-subtle)' }}>|</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>
              Starting from <strong style={{ color: 'var(--primary)' }}>₹15,999/month</strong>
            </span>
          </div>

          <div>
            {onOpenStrategyModal && (
              <button
                className="btn btn-primary"
                onClick={onOpenStrategyModal}
                style={{ fontSize: '1rem', padding: '0.85rem 2.25rem' }}
              >
                Book a Free Strategy Consultation 🚀
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PackagesSection;
