import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const posts: BlogPost[] = [
  { id: '1', title: 'How AI Is Transforming SEO In 2024', category: 'SEO', excerpt: 'Discover how AI tools and automation are changing the way we optimize and rank websites on search engines & LLMs.', author: 'Rahul Sharma', date: 'Mar 12, 2024', readTime: '8 min read', featured: true },
  { id: '2', title: 'Google Ads Strategies That Maximize ROI', category: 'Marketing', excerpt: 'Proven bidding playbooks and conversion tracking optimization.', author: 'Ananya Verma', date: 'May 10, 2024', readTime: '6 min read' },
  { id: '3', title: '10 Social Media Trends to Watch in 2024', category: 'Social Media', excerpt: 'Short form video, UGC, and community monetization playbooks.', author: 'Karan Patel', date: 'May 8, 2024', readTime: '7 min read' },
  { id: '4', title: 'Branding Strategies for Modern Businesses', category: 'Branding', excerpt: 'Creating authentic brand stories that resonance across channels.', author: 'Priya Nair', date: 'May 5, 2024', readTime: '4 min read' },
];

export const BlogSection: React.FC = () => {
  const reveal = useScrollReveal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const featured = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const sidePosts = filteredPosts.filter(p => p.id !== featured?.id);

  return (
    <section id="blog" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div ref={reveal} className="section-tag">BLOG & INSIGHTS</div>
          <h2 ref={reveal} className="section-title scroll-delay-1">Latest Trends, Strategies & Insights</h2>
          <p ref={reveal} className="section-subtitle scroll-delay-2">Stay updated with the latest digital marketing trends and strategies.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '999px', padding: '0.45rem 1.1rem', width: '320px', boxShadow: 'var(--shadow-sm)' }}>
            🔍 <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ border: 'none', background: 'transparent', outline: 'none', paddingLeft: '0.5rem', width: '100%', fontSize: '0.875rem', color: 'var(--text-main)' }} />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'SEO', 'Marketing', 'Social Media', 'AI', 'Branding'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: activeCategory === cat ? '#FFF' : 'var(--text-muted)',
                  background: activeCategory === cat ? 'var(--primary-gradient)' : 'var(--bg-card)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border-color-subtle)',
                  boxShadow: activeCategory === cat ? 'var(--shadow-glow)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {featured ? (
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '2rem' }}>
            <div ref={reveal} className="card-shimmer scroll-delay-1" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderTop: '4px solid var(--primary)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ height: '260px', background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '3rem' }}>
                🔍 {featured.category}
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{featured.category}</span> • {featured.date} • {featured.readTime}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--secondary)' }}>{featured.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>By {featured.author}</span>
                  <button onClick={() => setSelectedPost(featured)} style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', cursor: 'pointer' }}>Read Article ➔</button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {sidePosts.map((p, idx) => (
                <div key={p.id} ref={reveal} className={`card-shimmer scroll-delay-${idx + 2}`} onClick={() => setSelectedPost(p)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderTop: '3px solid var(--primary)', borderRadius: '16px', padding: '1.25rem', display: 'flex', gap: '1rem', cursor: 'pointer', boxShadow: 'var(--shadow-card)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: 'rgba(214, 51, 108, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                    {p.category}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.date} • {p.readTime}</div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: '0.3rem 0', color: 'var(--secondary)' }}>{p.title}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>Read Article ➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No articles found for query.</div>
        )}
      </div>

      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-card animate-modal-enter" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '1.5rem' }} onClick={() => setSelectedPost(null)}>×</button>
            <span className="section-tag">{selectedPost.category}</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, margin: '0.5rem 0', color: 'var(--secondary)' }}>{selectedPost.title}</h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>By {selectedPost.author} • Published on {selectedPost.date} ({selectedPost.readTime})</div>
            <p style={{ lineHeight: 1.7, color: 'var(--text-main)', fontSize: '0.95rem' }}>
              {selectedPost.excerpt} Generative Search and LLM visibility require authoritative content clusters, technical core web vitals speed optimization, and multi-channel distribution strategies.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
