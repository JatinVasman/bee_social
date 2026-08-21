import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactSectionProps {
  backgroundColor?: string;
  onOpenStrategyModal?: (planName?: string) => void;
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
  'Social Media Marketing',
  'Graphic Design',
  'UGC Reels & Creator Marketing',
  'Dashboard & KPI Systems',
  'SEO Services',
  'Google Ads Management',
  'Meta Ads Management',
  'Website Development',
  'Poster Design',
  'Reels & Video Production',
  'E-commerce Marketing',
  'Lead Generation',
  'Content Marketing',
  'Local SEO',
  'WhatsApp Marketing',
  'Logo & Branding',
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

export const ContactSection: React.FC<ContactSectionProps> = ({ backgroundColor, onOpenStrategyModal }) => {
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
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (sendMethod === 'whatsapp') {
      const lines = [
        `Hi BeeSocial! I'd like to connect.`,
        ``,
        `*Name:* ${formData.name}`,
        formData.businessName ? `*Business:* ${formData.businessName}` : '',
        formData.phone ? `*Phone:* ${formData.phone}` : '',
        formData.email ? `*Email:* ${formData.email}` : '',
        formData.industry ? `*Industry:* ${formData.industry}` : '',
        formData.helpWith ? `*Need Help With:* ${formData.helpWith}` : '',
        formData.budget ? `*Budget:* ${formData.budget}` : '',
        formData.message ? `\n*Message:* ${formData.message}` : '',
      ].filter(Boolean).join('\n');

      const whatsappUrl = `https://wa.me/917020800621?text=${encodeURIComponent(lines)}`;
      window.open(whatsappUrl, '_blank');

      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', businessName: '', email: '', phone: '', industry: '', helpWith: '', budget: '', message: '' });
      }, 6000);
      return;
    }

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

                {/* Send Method Toggle */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>How would you like to reach us?</label>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.4rem' }}>
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: sendMethod === 'whatsapp' ? '2px solid #25D366' : '1px solid var(--border-color-subtle)',
                        background: sendMethod === 'whatsapp' ? 'rgba(37, 211, 102, 0.1)' : 'var(--bg-subtle)',
                        color: sendMethod === 'whatsapp' ? '#25D366' : 'var(--text-muted)',
                        fontWeight: sendMethod === 'whatsapp' ? 700 : 500,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.25s ease',
                        position: 'relative',
                        fontFamily: 'inherit',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={sendMethod === 'whatsapp' ? '#25D366' : 'currentColor'}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                      {sendMethod === 'whatsapp' && (
                        <span style={{ fontSize: '0.65rem', background: '#25D366', color: '#fff', padding: '1px 6px', borderRadius: '999px', fontWeight: 700, letterSpacing: '0.02em' }}>⚡ FAST</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSendMethod('email')}
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: sendMethod === 'email' ? '2px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                        background: sendMethod === 'email' ? 'var(--bg-badge)' : 'var(--bg-subtle)',
                        color: sendMethod === 'email' ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: sendMethod === 'email' ? 700 : 500,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.25s ease',
                        fontFamily: 'inherit',
                      }}
                    >
                      ✉️ Email
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{
                    width: '100%',
                    opacity: loading ? 0.7 : 1,
                    fontSize: '1rem',
                    padding: '0.9rem',
                    background: sendMethod === 'whatsapp' ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' : undefined,
                    borderColor: sendMethod === 'whatsapp' ? '#25D366' : undefined,
                  }}
                >
                  {loading
                    ? 'Sending...'
                    : sendMethod === 'whatsapp'
                      ? 'Send via WhatsApp 💬'
                      : "Send via Email 📧"
                  }
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
                <a
                  href="mailto:hello.thebeesocial@gmail.com"
                  onClick={(e) => {
                    if (onOpenStrategyModal) {
                      e.preventDefault();
                      onOpenStrategyModal('Email Inquiry from Contact Section');
                    }
                  }}
                  style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                >
                  hello.thebeesocial@gmail.com
                </a>
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
