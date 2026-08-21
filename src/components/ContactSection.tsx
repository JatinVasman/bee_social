import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactSectionProps {
  backgroundColor?: string;
}

const industryOptions = [
  'Jewellery & Luxury',
  'Real Estate',
  'Furniture & Interiors',
  'Food & Hospitality',
  'Construction',
  'Retail & Lifestyle',
  'Professional Services',
  'Education',
  'Healthcare',
  'Events & Weddings',
  'Other'
];

const helpOptions = [
  'Branding & Identity',
  'Social Media Management',
  'Content Creation (Reels, Photography)',
  'Performance Marketing (Ads)',
  'Graphic Design',
  'Influencer Marketing',
  'Complete Digital Growth',
  'Other'
];

const budgetOptions = [
  '₹15K - ₹30K',
  '₹30K - ₹50K',
  '₹50K - ₹1L',
  '₹1L+',
  'Not sure yet'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    helpWith: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const res = await sendEmail({
      formType: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Business: ${formData.businessName}\nIndustry: ${formData.industry}\nHelp With: ${formData.helpWith}\nBudget: ${formData.budget}\n\n${formData.message}`,
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', businessName: '', email: '', phone: '', industry: '', helpWith: '', budget: '', message: '' });
      }, 6000);
    } else {
      setErrorMsg(res.message || 'Failed to send message. Please try again.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    border: '1px solid var(--border-color-subtle)',
    borderRadius: '12px',
    background: 'var(--bg-subtle)',
    outline: 'none',
    color: 'var(--text-main)',
    fontSize: '0.9rem',
    fontFamily: 'inherit'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '0.4rem',
    color: 'var(--secondary)'
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', backgroundColor: backgroundColor || 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <div ref={reveal} className="section-tag">GET IN TOUCH</div>
          <h2 ref={reveal} className="section-title scroll-delay-1">Let's Build Something People Remember.</h2>
          <p ref={reveal} className="section-subtitle scroll-delay-2">Have a business that deserves more attention? Let's talk.</p>
        </div>

        <div className="contact-grid">
          <div ref={reveal} className="card-shimmer scroll-delay-1" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderTop: '4px solid var(--primary)', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-card)' }}>
            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--green-accent)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉 Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you, {formData.name || 'friend'}! Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
                    {errorMsg}
                  </div>
                )}

                {/* Row: Name + Business Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Business Name</label>
                    <input type="text" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your business name" style={inputStyle} />
                  </div>
                </div>

                {/* Row: Phone + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>

                {/* Row: Industry + Budget */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Industry</label>
                    <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select your industry</option>
                      {industryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Monthly Marketing Budget</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select budget range</option>
                      {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                </div>

                {/* Help With */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>What do you need help with?</label>
                  <select value={formData.helpWith} onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a service</option>
                    {helpOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Your Message (Optional)</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your brand goals..." style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1, fontSize: '1rem', padding: '0.9rem' }}>
                  {loading ? 'Sending...' : "Let's Grow My Brand 🚀"}
                </button>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div ref={reveal} className="scroll-delay-2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '14px', padding: '1.25rem', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📞</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Us</div>
                <a href="tel:+917020800621" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>+91 70208 00621</a>
              </div>
            </div>

            <div ref={reveal} className="scroll-delay-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '14px', padding: '1.25rem', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>✉️</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Us</div>
                <a href="mailto:hello.thebeesocial@gmail.com" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>hello.thebeesocial@gmail.com</a>
              </div>
            </div>

            <div ref={reveal} className="scroll-delay-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '14px', padding: '1.25rem', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontWeight: 700, color: 'var(--secondary)' }}>Pune, Maharashtra</div>
              </div>
            </div>

            <div ref={reveal} className="scroll-delay-5" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color-subtle)', borderRadius: '14px', padding: '1.25rem', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📱</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Follow Us</div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  <a href="https://www.instagram.com/beesocial._" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem' }}>Instagram (@beesocial._)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
