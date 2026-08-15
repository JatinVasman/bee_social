import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { PageView } from '../types';
import { ALL_BLOGS } from '../data/blogData';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate, onOpenStrategyModal }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const blog = ALL_BLOGS.find(b => b.slug === slug);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const tryFetch = async () => {
      const paths = [
        `/blogs/${slug}.md`,
        `/blogs/${slug.replace(/^strategy\//, '')}.md`,
        `/blogs/strategy/${slug}.md`
      ];

      for (const path of paths) {
        try {
          const res = await fetch(path);
          if (res.ok) {
            const text = await res.text();
            if (text && text.trim().length > 0 && !text.trim().startsWith('<!DOCTYPE')) {
              let processedText = text;
              if (blog && text.startsWith('#')) {
                const firstNewLine = text.indexOf('\n');
                if (firstNewLine !== -1) {
                  processedText = `# ${blog.title}\n` + text.substring(firstNewLine + 1);
                }
              }
              setContent(processedText);
              setLoading(false);
              return;
            }
          }
        } catch {
          // Continue to next path
        }
      }

      // If markdown file wasn't found, generate rich fallback content from blog metadata
      if (blog) {
        const fallback = [
          `# ${blog.title}`,
          '',
          `## Executive Summary & Market Landscape`,
          '',
          `In 2026, ${blog.keyword || blog.title} has become a cornerstone of sustainable business scaling in India. As search behavior, AI discovery algorithms (GEO, AEO, ChatGPT, Perplexity), and paid media costs evolve rapidly, organizations that deploy a structured, multi-touch digital acquisition system consistently outperform competitors relying on fragmented, ad-hoc tactics.`,
          '',
          blog.excerpt || '',
          '',
          '---',
          '',
          `## 1. Why ${blog.keyword || blog.title} Is Mission-Critical in 2026`,
          '',
          `Modern buyer journeys in India are rarely linear. Whether dealing with high-ticket B2B contracts, direct-to-consumer purchases, or high-intent service bookings, potential clients conduct deep multi-channel evaluation before reaching out.`,
          '',
          `- **High-Intent Discovery**: Over 78% of decision-makers and high-value buyers research vendors via Google search, AI answer engines, and verified peer communities before initiating contact.`,
          `- **Speed-to-Lead Economics**: Studies show that responding to qualified enquiries within 60 seconds increases conversion rates by upwards of 391%.`,
          `- **Omnichannel Authority**: Blending targeted search visibility, paid search capture, and automated follow-ups lowers overall blended customer acquisition costs (CAC) by 35-50%.`,
          '',
          '---',
          '',
          `## 2. Core Strategic Pillars`,
          '',
          `### A. High-Converting Inbound Funnels`,
          `Landing pages and conversion funnels must eliminate cognitive friction with clear value propositions, fast loading speeds, and instant WhatsApp or direct consultation triggers.`,
          '',
          `### B. Topic Authority & AI Search Optimization`,
          `Structured content clusters, detailed service breakdowns, and schema markup allow search engines and AI models (ChatGPT, Gemini, Perplexity) to cite your brand as an authority.`,
          '',
          `### C. Speed-to-Lead Follow-Up Systems`,
          `Deploy automated WhatsApp Business API sequences and CRM integrations to nurture enquiries instantly and maximize closing rates.`,
          '',
          '---',
          '',
          `## Ready to Accelerate Your Growth?`,
          '',
          `At **Digital Digix**, we engineer end-to-end digital marketing and growth systems for 2,700+ businesses across 89+ industries. Schedule a free 30-minute strategic consultation with our growth specialists today to build your custom growth roadmap.`
        ].join('\n');

        setContent(fallback);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    };

    tryFetch();
  }, [slug, blog]);

  // Dynamic Article & Breadcrumb JSON-LD Schema
  useEffect(() => {
    if (!blog) return;

    const pageTitle = `${blog.title} | Digital Digix`;
    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && blog.excerpt) {
      metaDesc.setAttribute('content', blog.excerpt);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && blog.excerpt) ogDesc.setAttribute('content', blog.excerpt);

    // Inject Article Schema
    const scriptId = 'blog-post-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const postUrl = `https://digital-digix.vercel.app/?page=blog-post&id=${encodeURIComponent(blog.slug)}`;
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${postUrl}#article`,
          "isPartOf": {
            "@type": "WebPage",
            "@id": postUrl,
            "url": postUrl,
            "name": blog.title
          },
          "headline": blog.title,
          "description": blog.excerpt,
          "datePublished": blog.date || "2026-08-15",
          "dateModified": "2026-08-15",
          "author": {
            "@type": "Organization",
            "name": "Digital Digix",
            "url": "https://digital-digix.vercel.app"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Digital Digix",
            "logo": {
              "@type": "ImageObject",
              "url": "https://digital-digix.vercel.app/digital_digix_logo.png"
            }
          },
          "keywords": [blog.keyword, blog.keyword2, ...blog.tags].filter(Boolean).join(", ")
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${postUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://digital-digix.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://digital-digix.vercel.app/?page=blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": blog.title,
              "item": postUrl
            }
          ]
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [blog]);

  // Related blogs from same category, primary tag, or sector
  const related = blog
    ? ALL_BLOGS.filter(b => {
        if (b.slug === slug) return false;
        if (blog.category && (b.category === blog.category || b.tags[0] === blog.category)) return true;
        if (blog.tags[0] && (b.tags[0] === blog.tags[0] || b.category === blog.tags[0])) return true;
        if (blog.sector && b.sector === blog.sector) return true;
        return false;
      }).slice(0, 3)
    : [];

  return (
    <div className="blog-post-page">
      {/* Back Button */}
      <div className="bpp-nav">
        <button className="bpp-back-btn" onClick={() => onNavigate('blog')}>
          ← Back to Blog
        </button>
        {blog && <span className="bpp-sector-badge">{blog.sector}</span>}
      </div>

      <div className="bpp-layout">
        {/* Main Content */}
        <main className="bpp-main">
          {loading && (
            <div className="bpp-loading">
              <div className="bpp-spinner" />
              <p>Loading article...</p>
            </div>
          )}

          {error && (
            <div className="bpp-error">
              <span>⚠️</span>
              <h2>Article not found</h2>
              <p>This article could not be loaded.</p>
              <button onClick={() => onNavigate('blog')}>← Go back to Blog</button>
            </div>
          )}

          {!loading && !error && (
            <div className="bpp-content">
              {blog && (
                <div className="bpp-meta">
                  <span className="bpp-read-time">⏱ {blog.readTime} read</span>
                  <div className="bpp-tags">
                    {blog.tags.map(t => <span key={t} className="bpp-tag">#{t}</span>)}
                  </div>
                </div>
              )}
              <div className="bpp-markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="bpp-sidebar">
          {/* CTA Card */}
          <div className="bpp-cta-card">
            <div className="bpp-cta-icon">🚀</div>
            <h3>Free Strategy Session</h3>
            <p>Get a personalised digital marketing plan for your business. No lock-in. Post-pay available.</p>
            <button className="bpp-cta-btn" onClick={() => onOpenStrategyModal(blog?.title)}>
              Get Free Strategy Call
            </button>
            <a className="bpp-phone-link" href="tel:+918586989832">📞 +91 85869 89832</a>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="bpp-related">
              <h3>Related Articles</h3>
              {related.map(r => (
                <button
                  key={r.slug}
                  className="bpp-related-item"
                  onClick={() => onNavigate('blog-post', r.slug)}
                >
                  <span className="bri-title">{r.title}</span>
                  <span className="bri-time">⏱ {r.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {/* Quick Links */}
          <div className="bpp-quick-links">
            <h3>Quick Links</h3>
            <a href="tel:+918586989832" className="bql-link">📞 Call Us Now</a>
            <a href="https://digital-digix.vercel.app" target="_blank" rel="noreferrer" className="bql-link">🌐 Our Website</a>
            <button className="bql-link" onClick={() => onNavigate('blog')}>📚 All Blogs</button>
            <button className="bql-link" onClick={() => onNavigate('services')}>⚡ Our Services</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
