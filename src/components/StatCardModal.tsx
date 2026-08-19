import React from 'react';

export type StatType = 'revenue' | 'clicks' | 'conversions' | null;

interface StatCardModalProps {
  statType: StatType;
  onClose: () => void;
  onOpenStrategyModal: (goal?: string) => void;
}

export const StatCardModal: React.FC<StatCardModalProps> = ({ statType, onClose, onOpenStrategyModal }) => {
  if (!statType) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
      </div>
      <div className="modal-card" style={{ maxWidth: '950px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>

        {statType === 'revenue' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(214, 51, 108, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📈</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.2rem' }}>REVENUE PERFORMANCE</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>8.7M Client Revenue Breakdown</h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Through multi-channel performance marketing, technical SEO, and retargeting automation, our clients achieved <strong>₹8.7M+ in verified revenue</strong> with an average 4.71x ROAS.
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Top Revenue Channels:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>45%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Google Search Ads</div>
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, color: 'var(--green-accent)' }}>35%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Meta & Social Ads</div>
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>20%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Organic Search (SEO)</div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { onClose(); onOpenStrategyModal('Scale Client Revenue'); }}>
              Scale My Revenue & Audit ROAS ➔
            </button>
          </div>
        )}

        {statType === 'clicks' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(214, 51, 108, 0.04)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🖱️</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.2rem' }}>TRAFFIC & CTR ANALYTICS</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>324K High-Intent Clicks Delivered</h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              We generated over <strong>324,000 targeted clicks</strong> from qualified users actively searching for services in healthcare, tech, finance, and ecommerce.
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Traffic Quality Metrics:</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <li>✓ <strong>Average Click-Through Rate (CTR):</strong> 4.85% (Industry avg: 1.9%)</li>
                <li>✓ <strong>Search Intent Relevance:</strong> 94.2% Qualified Lead Quality</li>
                <li>✓ <strong>Page Load Speed Score:</strong> 98/100 Core Web Vitals</li>
              </ul>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { onClose(); onOpenStrategyModal('Drive High Intent Traffic'); }}>
              Boost Search Traffic & Clicks ➔
            </button>
          </div>
        )}

        {statType === 'conversions' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#ECFDF5', color: 'var(--green-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🎯</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.2rem' }}>CONVERSION FUNNEL</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>12.5K Verified Conversions</h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Our conversion rate optimization (CRO) engines turned traffic into <strong>12,500+ qualified leads, booked appointments, and ecommerce purchases</strong>.
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--secondary)' }}>Funnel Efficiency Metrics:</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <li>✓ <strong>Average Conversion Rate:</strong> 3.85% across funnels</li>
                <li>✓ <strong>Cart Abandonment Recovery:</strong> +42% Uplift with automated WhatsApp/Email</li>
                <li>✓ <strong>CRM Lead Qualification Speed:</strong> Sub-5 Minute Instant Sync</li>
              </ul>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { onClose(); onOpenStrategyModal('Optimize Conversion Rate'); }}>
              Optimize My Conversion Funnel ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
