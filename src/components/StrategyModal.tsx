import React, { useState } from 'react';

interface StrategyModalProps {
  isOpen: boolean;
  planName?: string;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, planName, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
          ← Back to Main Page
        </button>
        <button onClick={onClose} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>✕</button>
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
            <p style={{ color: 'var(--text-muted)' }}>We have sent a calendar invitation and audit questionnaire to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Your Name</label>
              <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Work Email</label>
              <input type="email" required placeholder="john@company.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Business Website / Phone</label>
              <input type="text" required placeholder="https://yourcompany.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Primary Growth Goal</label>
              <select style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-subtle)' }}>
                <option>Scale Lead Generation</option>
                <option>Improve ROAS / Paid Media</option>
                <option>SEO & AI Search Optimization</option>
                <option>Redesign Website</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Confirm Booking ➔</button>
          </form>
        )}
      </div>
    </div>
  );
};
