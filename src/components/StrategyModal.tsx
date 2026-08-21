import React, { useState, useEffect } from 'react';
import { sendEmail } from '../utils/emailService';

interface StrategyModalProps {
  isOpen: boolean;
  planName?: string;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, planName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    growthGoal: 'Scale Lead Generation'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (sendMethod === 'whatsapp') {
      const lines = [
        `Hi BeeSocial! I'd like to book a Strategy Call.`,
        ``,
        `*Plan:* ${planName || 'General Strategy Session'}`,
        `*Name:* ${formData.name}`,
        formData.email ? `*Email:* ${formData.email}` : '',
        formData.website ? `*Website/Phone:* ${formData.website}` : '',
        `*Growth Goal:* ${formData.growthGoal}`,
      ].filter(Boolean).join('\n');

      const whatsappUrl = `https://wa.me/917020800621?text=${encodeURIComponent(lines)}`;
      window.open(whatsappUrl, '_blank');

      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', website: '', growthGoal: 'Scale Lead Generation' });
        onClose();
      }, 4000);
      return;
    }

    const res = await sendEmail({
      formType: 'strategy',
      name: formData.name,
      email: formData.email,
      website: formData.website,
      growthGoal: formData.growthGoal,
      planName: planName || 'General Strategy Session',
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', website: '', growthGoal: 'Scale Lead Generation' });
        onClose();
      }, 4000);
    } else {
      setErrorMsg(res.message || 'Failed to submit booking. Please try again.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book Strategy Call">
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color-subtle)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} aria-label="Back to Main Page" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid var(--border-color)' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} aria-label="Close Strategy Modal" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>✕</button>
      </div>
      <div className="modal-card" style={{ maxWidth: '850px', padding: '3.5rem 2rem 6rem 2rem' }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          {planName ? `Book Strategy Call - ${planName}` : 'Book a Strategy Call'}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Speak with our senior growth strategists and receive a free digital audit roadmap.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--green-accent)' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀 Strategy Session Confirmed!</h4>
            <p style={{ color: 'var(--text-muted)' }}>We have received your request and sent confirmation details to {formData.email || 'your email'}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMsg && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
                {errorMsg}
              </div>
            )}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Your Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Work Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="john@company.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Business Website / Phone</label>
              <input type="text" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} required placeholder="https://yourcompany.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Primary Growth Goal</label>
              <select value={formData.growthGoal} onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-subtle)' }}>
                <option>Scale Lead Generation</option>
                <option>Improve ROAS / Paid Media</option>
                <option>SEO & AI Search Optimization</option>
                <option>Redesign Website</option>
              </select>
            </div>

            {/* Send Method Toggle */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>How would you like to connect?</label>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.4rem' }}>
                <button
                  type="button"
                  onClick={() => setSendMethod('whatsapp')}
                  style={{
                    flex: 1,
                    padding: '0.7rem 1rem',
                    borderRadius: '12px',
                    border: sendMethod === 'whatsapp' ? '2px solid #25D366' : '1px solid var(--border-color)',
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
                    fontFamily: 'inherit',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={sendMethod === 'whatsapp' ? '#25D366' : 'currentColor'}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                  {sendMethod === 'whatsapp' && (
                    <span style={{ fontSize: '0.6rem', background: '#25D366', color: '#fff', padding: '1px 5px', borderRadius: '999px', fontWeight: 700 }}>⚡ FAST</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSendMethod('email')}
                  style={{
                    flex: 1,
                    padding: '0.7rem 1rem',
                    borderRadius: '12px',
                    border: sendMethod === 'email' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
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
                marginTop: '0.5rem',
                opacity: loading ? 0.7 : 1,
                background: sendMethod === 'whatsapp' ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' : undefined,
                borderColor: sendMethod === 'whatsapp' ? '#25D366' : undefined,
              }}
            >
              {loading
                ? 'Confirming...'
                : sendMethod === 'whatsapp'
                  ? 'Book via WhatsApp 💬'
                  : 'Confirm Booking via Email ➔'
              }
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
