import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';

interface ContactSectionProps {
  backgroundColor?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ backgroundColor }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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
      message: formData.message,
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 6000);
    } else {
      setErrorMsg(res.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', backgroundColor: backgroundColor || 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">GET IN TOUCH</div>
          <h2 className="section-title">Let's Create Something Buzz-Worthy Together</h2>
          <p className="section-subtitle">Tell us about your brand and our creative team will get back to you within 24 hours.</p>
        </div>

        <div className="contact-grid">
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--green-accent)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉 Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you. Our team will contact you at {formData.email || 'your email'} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
                    {errorMsg}
                  </div>
                )}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Enter your name" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="Enter your email" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required placeholder="Enter your phone number" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Your Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Tell us about your brand..." style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none', minHeight: '120px' }} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending Message...' : 'Send Message ➔'}
                </button>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>✉️</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Us</div>
                <a href="mailto:hello.thebeesocial@gmail.com" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                  hello.thebeesocial@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📞</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Us</div>
                <a href="tel:+917020800621" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>+91 70208 00621</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📸</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instagram</div>
                <a href="https://www.instagram.com/beesocial._" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>@beesocial._</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Office</div>
                <div style={{ fontWeight: 700 }}>BeeSocial, India</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Working Hours: Mon - Sat: 9AM - 7PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
