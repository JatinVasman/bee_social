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

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Confirming Booking...' : 'Confirm Booking ➔'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
