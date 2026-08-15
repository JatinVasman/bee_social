import React, { useState } from 'react';
import type { Currency } from '../types';

interface PricingProps {
  currency: Currency;
  onOpenStrategyModal: (planName: string) => void;
}

const rates: Record<Currency, number> = { INR: 1, USD: 0.012, EUR: 0.011 };
const symbols: Record<Currency, string> = { INR: '₹', USD: '$', EUR: '€' };

export const PricingSection: React.FC<PricingProps> = ({ currency, onOpenStrategyModal }) => {
  const [isQuarterly, setIsQuarterly] = useState(false);

  const rate = rates[currency];
  const sym = symbols[currency];
  const discount = isQuarterly ? 0.8 : 1.0;

  const starterVal = Math.round(24999 * rate * discount);
  const growthVal = Math.round(49999 * rate * discount);
  const enterpriseVal = Math.round(99999 * rate * discount);

  const periodText = isQuarterly ? '/month (billed quarterly)' : '/month';

  return (
    <section id="pricing" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">PRICING PLANS</div>
          <h2 className="section-title">Flexible Plans For Every Stage Of Your Business Growth</h2>
          <p className="section-subtitle">Transparent pricing tailored to scale your brand's digital presence.</p>
        </div>

        {/* Toggle Switch */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <span style={{ fontWeight: 600, color: !isQuarterly ? 'var(--secondary)' : 'var(--text-muted)' }}>Monthly</span>
          <label style={{ position: 'relative', display: 'inline-block', width: '54px', height: '28px' }}>
            <input type="checkbox" checked={isQuarterly} onChange={(e) => setIsQuarterly(e.target.checked)} style={{ opacity: 0, width: 0, height: 0 }} />
            <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: isQuarterly ? 'var(--primary)' : 'var(--border-color)', transition: '.4s', borderRadius: '34px' }}>
              <span style={{ position: 'absolute', content: '""', height: '20px', width: '20px', left: isQuarterly ? '28px' : '4px', bottom: '4px', backgroundColor: 'white', transition: '.4s', borderRadius: '50%' }} />
            </span>
          </label>
          <span style={{ fontWeight: 600, color: isQuarterly ? 'var(--secondary)' : 'var(--text-muted)' }}>
            Quarterly <span style={{ background: '#DC2626', color: '#FFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '999px' }}>Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3 style={{ fontSize: '1.25rem' }}>Starter</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Perfect for small businesses starting out.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <span style={{ fontFamily: 'Outfit', fontSize: '2.75rem', fontWeight: 800, color: 'var(--secondary)' }}>{sym}{starterVal.toLocaleString()}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{periodText}</span>
            </div>
            <ul style={{ margin: '1.5rem 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
              <li>✓ SEO Optimization</li>
              <li>✓ Social Media Management</li>
              <li>✓ Monthly Reporting</li>
              <li>✓ Email Support</li>
            </ul>
            <button className="btn btn-secondary" onClick={() => onOpenStrategyModal('Starter Plan')}>Get Started</button>
          </div>

          {/* Growth Plan (Popular) */}
          <div className="pricing-card popular">
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-gradient)', color: '#FFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 1rem', borderRadius: '999px' }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>Growth</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>For growing businesses looking to scale revenue.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <span style={{ fontFamily: 'Outfit', fontSize: '2.75rem', fontWeight: 800, color: 'var(--secondary)' }}>{sym}{growthVal.toLocaleString()}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{periodText}</span>
            </div>
            <ul style={{ margin: '1.5rem 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
              <li>✓ Everything in Starter</li>
              <li>✓ Performance Marketing (Google/Meta)</li>
              <li>✓ Advanced GA4 Reporting</li>
              <li>✓ Priority Support & Dedicated Manager</li>
            </ul>
            <button className="btn btn-primary" onClick={() => onOpenStrategyModal('Growth Plan')}>Get Started</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <h3 style={{ fontSize: '1.25rem' }}>Enterprise</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>For large scale brands & multi-channel dominance.</p>
            <div style={{ margin: '1.5rem 0' }}>
              <span style={{ fontFamily: 'Outfit', fontSize: '2.75rem', fontWeight: 800, color: 'var(--secondary)' }}>{sym}{enterpriseVal.toLocaleString()}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{periodText}</span>
            </div>
            <ul style={{ margin: '1.5rem 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
              <li>✓ Everything in Growth</li>
              <li>✓ Marketing Automation & AI Workflows</li>
              <li>✓ Custom Growth Strategy</li>
              <li>✓ Dedicated Squad & Daily Communication</li>
            </ul>
            <button className="btn btn-secondary" onClick={() => onOpenStrategyModal('Enterprise Plan')}>Get Started</button>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Need a custom plan? <a href="#contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contact us</a> for a tailored solution.
        </p>
      </div>
    </section>
  );
};
