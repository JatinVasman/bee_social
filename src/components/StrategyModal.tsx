import React, { useState, useEffect } from 'react';
import { sendEmail } from '../utils/emailService';

interface StrategyModalProps {
  isOpen: boolean;
  planName?: string;
  onClose: () => void;
}

const ALL_SERVICES = [
  'Social Media Marketing',
  'Graphic Design & Branding',
  'UGC Reels & Creator Marketing',
  'Meta Ads (Facebook & Instagram)',
  'Google Ads & PPC',
  'SEO & AI Search Optimization',
  'Website Development',
  'Dashboard & KPI Systems',
  'WhatsApp Automation',
  'Poster & Marketing Creatives',
  'Reels & Video Production',
  'E-commerce Marketing & Scaling',
  'B2B Lead Generation',
  'Content Marketing & Copywriting',
  'Local SEO & Google Maps',
  'Logo & Visual Identity',
  'Complete Digital Growth (Full-Suite)',
  'Other / Custom Scope'
];

const GROWTH_GOALS = [
  'Scale Inbound Leads & Customer Inquiries',
  '3x-5x Paid Ad ROAS & Lower Acquisition Cost',
  'Viral Social Media Reach & Follower Growth',
  'Modern Website Redesign & Conversion Optimization',
  'Top-3 Google Search & Local SEO Rankings',
  'Consistent High-Volume Creative Content',
  'E-commerce Revenue Scaling',
  'Complete 360° Digital Agency Partnership'
];

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, planName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessOrWebsite: '',
    service: ALL_SERVICES[0],
    growthGoal: GROWTH_GOALS[0],
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [sendMethod, setSendMethod] = useState<'email' | 'whatsapp'>('email');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // If a plan or service name is passed, pre-select it
  useEffect(() => {
    if (planName) {
      const match = ALL_SERVICES.find(s =>
        planName.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(planName.toLowerCase())
      );
      if (match) {
        setFormData(prev => ({ ...prev, service: match }));
      } else {
        setFormData(prev => ({ ...prev, service: planName }));
      }
    }
  }, [planName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const emailPayload = {
      formType: 'strategy' as const,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.businessOrWebsite,
      growthGoal: formData.growthGoal,
      planName: planName || formData.service,
      selectedServices: [formData.service],
      message: formData.message,
    };

    if (sendMethod === 'whatsapp') {
      const lines = [
        `*🚀 New Strategy Call Booking — BeeSocial*`,
        ``,
        `*Name:* ${formData.name}`,
        `*Phone:* ${formData.phone}`,
        `*Email:* ${formData.email}`,
        formData.businessOrWebsite ? `*Business/Website:* ${formData.businessOrWebsite}` : '',
        `*Service Needed:* ${formData.service}`,
        `*Goal:* ${formData.growthGoal}`,
        formData.message ? `*Note:* ${formData.message}` : '',
      ].filter(Boolean).join('\n');

      const whatsappUrl = `https://wa.me/917020800621?text=${encodeURIComponent(lines)}`;
      window.open(whatsappUrl, '_blank');

      // Dispatch to email inbox in background so no leads are lost
      sendEmail(emailPayload).catch(err => console.warn('Background email sync error:', err));

      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
        onClose();
      }, 4000);
      return;
    }

    // Direct Email Dispatch (Resend backend)
    const res = await sendEmail(emailPayload);

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
        onClose();
      }, 4000);
    } else {
      setErrorMsg(res.message || 'Failed to submit request. Please try again or reach out on WhatsApp.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessOrWebsite: '',
      service: ALL_SERVICES[0],
      growthGoal: GROWTH_GOALS[0],
      message: ''
    });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 0.9rem',
    borderRadius: '10px',
    border: '1px solid var(--border-color-subtle)',
    background: 'var(--bg-subtle)',
    color: 'var(--text-main)',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    marginBottom: '0.35rem',
    color: 'var(--secondary)'
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book Strategy Call">
      {/* Sticky Top Bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color-subtle)',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: 'blur(10px)'
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to Main Page"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--secondary)',
            backgroundColor: 'var(--bg-subtle)',
            padding: '0.45rem 1rem',
            borderRadius: '999px',
            border: '1px solid var(--border-color)',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 800,
            color: 'var(--secondary)',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      </div>

      {/* Modal Card */}
      <div
        className="modal-card"
        style={{
          maxWidth: '580px',
          padding: '2rem 1.5rem 4rem 1.5rem',
          minHeight: 'auto',
          margin: '0 auto',
          background: 'var(--bg-main)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'var(--bg-badge)',
              color: 'var(--primary)',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
              border: '1px solid var(--border-color-subtle)'
            }}
          >
            ⚡ Free 30-Min Strategy Call
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--secondary)' }}>
            {planName ? `Book: ${planName}` : 'Book Your Strategy Call'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
            Get a tailored digital growth audit and 90-day roadmap for your brand.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-color-subtle)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.12)',
                color: 'var(--green-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.25rem auto'
              }}
            >
              ✓
            </div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)' }}>
              🎉 Request Sent Successfully!
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.name}</strong>! We’ve received your details and will reach out to <strong>{formData.email}</strong> within 24 hours with your strategy roadmap.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.75rem', borderRadius: '10px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color-subtle)',
              borderRadius: '20px',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {errorMsg && (
              <div
                style={{
                  marginBottom: '1.25rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  color: '#ef4444',
                  fontSize: '0.85rem'
                }}
              >
                {errorMsg}
              </div>
            )}

            {/* Row 1: Name + Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2: Email + Brand/Website */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Business / Website</label>
                <input
                  type="text"
                  placeholder="Brand name or URL"
                  value={formData.businessOrWebsite}
                  onChange={(e) => setFormData({ ...formData, businessOrWebsite: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Service Selection (All 17 Services) */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Service You Need Help With *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {ALL_SERVICES.map(srv => (
                  <option key={srv} value={srv}>{srv}</option>
                ))}
              </select>
            </div>

            {/* Primary Goal */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Primary Growth Goal</label>
              <select
                value={formData.growthGoal}
                onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {GROWTH_GOALS.map(goal => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>

            {/* Optional Note */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Brief Message / Goals (Optional)</label>
              <textarea
                rows={2}
                placeholder="Tell us about your target audience or key challenges..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, minHeight: '65px', resize: 'vertical' }}
              />
            </div>

            {/* Method Toggle: Email vs WhatsApp */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <button
                type="button"
                onClick={() => setSendMethod('email')}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '10px',
                  border: sendMethod === 'email' ? '2px solid var(--primary)' : '1px solid var(--border-color-subtle)',
                  background: sendMethod === 'email' ? 'var(--bg-badge)' : 'var(--bg-subtle)',
                  color: sendMethod === 'email' ? 'var(--primary)' : 'var(--text-muted)',
                  fontWeight: sendMethod === 'email' ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit'
                }}
              >
                ✉️ Send via Email
              </button>

              <button
                type="button"
                onClick={() => setSendMethod('whatsapp')}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '10px',
                  border: sendMethod === 'whatsapp' ? '2px solid #25D366' : '1px solid var(--border-color-subtle)',
                  background: sendMethod === 'whatsapp' ? 'rgba(37, 211, 102, 0.1)' : 'var(--bg-subtle)',
                  color: sendMethod === 'whatsapp' ? '#25D366' : 'var(--text-muted)',
                  fontWeight: sendMethod === 'whatsapp' ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit'
                }}
              >
                💬 Connect on WhatsApp
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.98rem',
                fontWeight: 700,
                borderRadius: '10px',
                opacity: loading ? 0.75 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                background: sendMethod === 'whatsapp' ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' : undefined,
                borderColor: sendMethod === 'whatsapp' ? '#25D366' : undefined,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              {loading ? (
                'Sending Request...'
              ) : sendMethod === 'whatsapp' ? (
                'Open WhatsApp & Book Call 💬'
              ) : (
                'Book Free Strategy Call ➔'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
