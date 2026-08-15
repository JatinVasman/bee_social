import React, { useState } from 'react';
import type { BlueprintSearchItem } from '../types';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const blueprintItems: BlueprintSearchItem[] = [
  { title: 'SEO (Hub)', category: 'Service', desc: 'Technical, On-Page, Off-Page, Local, Enterprise, Schema, Core Web Vitals' },
  { title: 'AI Search & GEO (Hub)', category: 'Service', desc: 'AI Overviews, ChatGPT Visibility, Perplexity, Gemini, AEO, LLM Citations' },
  { title: 'Content Marketing (Hub)', category: 'Service', desc: 'Strategy, Blog Writing, Copywriting, Topic Clusters, Ebooks, Ghostwriting' },
  { title: 'PPC & Paid Media (Hub)', category: 'Service', desc: 'Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, Performance Max, Remarketing' },
  { title: 'Social Media (Hub)', category: 'Service', desc: 'Instagram, Facebook, TikTok, Influencer, UGC, Community Management' },
  { title: 'Web Design & Development (Hub)', category: 'Service', desc: 'Next.js, React, WordPress, Shopify, Custom Web Apps, Speed Optimization' },
  { title: 'Branding & Design (Hub)', category: 'Service', desc: 'Brand Strategy, Logo, Visual Identity, UI/UX, Motion Graphics, Packaging' },
  { title: 'Healthcare & Wellness', category: 'Industry', desc: 'Hospitals, Clinics, Dentists, Pharma, Telemedicine, Diagnostics' },
  { title: 'Education & EdTech', category: 'Industry', desc: 'Schools, Colleges, EdTech Platforms, Online Courses, Skill Development' },
  { title: 'Finance & Fintech', category: 'Industry', desc: 'Banks, NBFCs, Insurance, Fintech, Wealth Management, Crypto' },
  { title: 'Real Estate & Construction', category: 'Industry', desc: 'Developers, Property Management, Architecture, Co-Working, Infrastructure' },
  { title: 'Retail & Ecommerce', category: 'Industry', desc: 'Ecommerce Stores, Fashion, Electronics, Jewelry, D2C Brands' },
  { title: 'ROAS Calculator', category: 'Free Tool', desc: 'Calculate Return On Ad Spend, ROI percentage, and Net Profit' },
  { title: 'CPC Calculator', category: 'Free Tool', desc: 'Calculate Cost Per Click and estimated conversion thresholds' }
];

export const GlobalSearchModal: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matches = blueprintItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
      </div>
      <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🔍 Global Architecture Search</h3>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Services, Industries, Locations, Tools..."
          style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />

        <div style={{ marginTop: '1.5rem', maxHeight: '320px', overflowY: 'auto' }}>
          {matches.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '1rem' }}>No matching modules found in Master Blueprint.</div>
          ) : (
            matches.map((m, idx) => (
              <div
                key={idx}
                onClick={() => { alert(`Opening Blueprint Module: ${m.title}`); onClose(); }}
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', marginBottom: '0.75rem', cursor: 'pointer' }}
              >
                <span className="section-tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', marginBottom: '0.3rem' }}>{m.category}</span>
                <h4 style={{ fontSize: '1.05rem', margin: '0.2rem 0' }}>{m.title}</h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{m.desc}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
