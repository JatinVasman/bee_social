import React, { useState, useMemo } from 'react';
import type { PageView } from '../types';
import { ALL_BLOGS } from '../data/blogData';

interface BlogPageProps {
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

// Diamond icon for card banners
const DiamondIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="bv-card-diamond">
    <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="white" fillOpacity="0.85"/>
  </svg>
);

// Hospital / category icons map
const CATEGORY_ICONS: Record<string, string> = {
  'Hospitals': '🏥',
  'Clinics': '🏥',
  'Diagnostic Centers': '🔬',
  'Gyms': '💪',
  'Fitness Centers': '💪',
  'Yoga Studios': '🧘',
  'Spas & Wellness': '✨',
  'Pharmaceutical Companies': '💊',
  'Medical Equipment Suppliers': '🩺',
  'CA Firms': '📊',
  'Accounting Firms': '📊',
  'Law Firms': '⚖️',
  'IT Companies': '💻',
  'SaaS Companies': '☁️',
  'FinTech Startups': '💳',
  'Banks': '🏦',
  'Insurance Companies': '🛡️',
  'Restaurants': '🍽️',
  'Cafes': '☕',
  'Hotels': '🏨',
  'Resorts': '🌴',
  'Fashion Brands': '👗',
  'Jewelry Stores': '💎',
  'Beauty & Cosmetics': '💄',
  'Schools': '🏫',
  'Colleges': '🎓',
  'Universities': '🏛️',
  'Coaching Institutes': '📚',
  'EdTech Companies': '🖥️',
  'Solar Companies': '☀️',
  'Renewable Energy': '🌱',
  'Logistics Companies': '🚚',
  'Construction Companies': '🏗️',
  'Property Consultants': '🏠',
  'Agriculture Companies': '🌾',
  'NGOs': '🤝',
  'Non-Profit Organizations': '🤝',
  'Tour Operators': '✈️',
  'Travel Agencies': '🌍',
  'Wedding Planners': '💒',
  'SEO': '🔍',
  'AI Search': '🤖',
  'WhatsApp': '💬',
  'Paid Ads': '📢',
  'Dashboards': '📈',
  'Instagram': '📸',
  'YouTube': '▶️',
  'CRO': '🎯',
  'Lead Generation': '⚡',
  'Performance Marketing': '🚀',
  'Social Media': '📱',
  'Reputation Management': '⭐',
  'Branding': '🎨',
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenStrategyModal }) => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) {
      return [...ALL_BLOGS].sort((a, b) => {
        const aPillar = a.isPillar ? 0 : 1;
        const bPillar = b.isPillar ? 0 : 1;
        return aPillar - bPillar;
      });
    }

    const list = ALL_BLOGS.filter(b => {
      return (
        b.title.toLowerCase().includes(q) ||
        (b.keyword || '').toLowerCase().includes(q) ||
        (b.keyword2 || '').toLowerCase().includes(q) ||
        (b.category || '').toLowerCase().includes(q) ||
        (b.sector || '').toLowerCase().includes(q) ||
        (b.excerpt || '').toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    return [...list].sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(q) ? 1 : 0;
      const bTitleMatch = b.title.toLowerCase().includes(q) ? 1 : 0;
      if (bTitleMatch !== aTitleMatch) return bTitleMatch - aTitleMatch;

      const aKwMatch = (a.keyword || '').toLowerCase().includes(q) ? 1 : 0;
      const bKwMatch = (b.keyword || '').toLowerCase().includes(q) ? 1 : 0;
      if (bKwMatch !== aKwMatch) return bKwMatch - aKwMatch;

      const aPillar = a.isPillar ? 0 : 1;
      const bPillar = b.isPillar ? 0 : 1;
      return aPillar - bPillar;
    });
  }, [search]);

  const getCategoryIcon = (cat: string) => CATEGORY_ICONS[cat] || '◆';

  return (
    <div className="bv-blog-page">

      {/* === HERO SECTION === */}
      <section className="bv-hero">
        <p className="bv-hero-eyebrow">— INSIGHTS —</p>
        <h1 className="bv-hero-title">The Digital Digix Blog</h1>
        <p className="bv-hero-sub">
          {ALL_BLOGS.length}+ SEO articles and pillar guides across services and industries —<br />
          written for humans, structured for Google and AI search.
        </p>

        {/* Search Bar */}
        <div className="bv-search-wrap">
          <div className="bv-search-inner">
            <svg className="bv-search-ico" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.75" stroke="#9ca3af" strokeWidth="1.5"/>
              <path d="M13 13l3.5 3.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              id="blog-search-input"
              type="text"
              placeholder="Search articles, industries, or keywords..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bv-search-input"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            {search && (
              <button className="bv-search-clear" onClick={() => setSearch('')} aria-label="Clear">✕</button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="bv-results-count">
          SHOWING {filtered.length} OF {ALL_BLOGS.length} ARTICLES
          {search ? ' — SEARCH ACTIVE' : ''}
        </p>
      </section>

      {/* === BLOG GRID (BV Card Style) === */}
      <section className="bv-grid-section">
        <div className="bv-grid">
          {filtered.length > 0 ? (
            filtered.map((blog) => {
              const bannerGrad = blog.imageColor || `linear-gradient(135deg, #c0392b 0%, #e67e22 100%)`;
              const catIcon = getCategoryIcon(blog.category);
              return (
                <article
                  key={blog.slug}
                  className="bv-card"
                  onClick={() => onNavigate('blog-post', blog.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && onNavigate('blog-post', blog.slug)}
                >
                  {/* Gradient Banner with icon */}
                  <div className="bv-card-banner" style={{ background: bannerGrad }}>
                    {blog.isPillar && <span className="bv-card-pillar-badge">PILLAR</span>}
                    {typeof catIcon === 'string' && catIcon.length <= 2 ? (
                      <span className="bv-card-banner-icon">{catIcon}</span>
                    ) : (
                      <DiamondIcon />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="bv-card-body">
                    {/* Meta row */}
                    <div className="bv-card-meta">
                      <span className="bv-card-date">🗓 {blog.date}</span>
                      <span className="bv-card-sep">·</span>
                      <span className="bv-card-time">⏱ {blog.readTime} read</span>
                      {blog.wordCount && (
                        <>
                          <span className="bv-card-sep">·</span>
                          <span className="bv-card-words">{blog.wordCount}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="bv-card-title">{blog.title}</h2>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="bv-card-excerpt">{blog.excerpt}</p>
                    )}

                    {/* Tags + Read button */}
                    <div className="bv-card-footer">
                      <div className="bv-card-tags">
                        <span className="bv-card-tag bv-card-tag--cat">{blog.category}</span>
                        {blog.keyword && (
                          <span className="bv-card-tag bv-card-tag--kw">{blog.keyword}</span>
                        )}
                      </div>
                      <span className="bv-card-read">READ →</span>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="bv-no-results">
              <p className="bv-no-r-icon">🔍</p>
              <h3>No articles found</h3>
              <p>Try a different search term or keyword.</p>
              <button className="bv-no-r-btn" onClick={() => setSearch('')}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* === CTA BANNER === */}
      <section className="bv-cta-section">
        <div className="bv-cta-inner">
          <span className="bv-cta-badge">📞 Free Consultation</span>
          <h2>Need a Digital Marketing Strategy for Your Business?</h2>
          <p>Talk to our experts — 30-min free strategy session. No lock-in. Post-pay available. 2,700+ clients across 89+ industries.</p>
          <div className="bv-cta-btns">
            <button className="bv-btn bv-btn-primary" onClick={() => onOpenStrategyModal('Blog Page CTA')}>
              Get Free Strategy Call
            </button>
            <a className="bv-btn bv-btn-outline" href="tel:+918586989832">
              📞 +91 85869 89832
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
