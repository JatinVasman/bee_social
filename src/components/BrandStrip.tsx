import React from 'react';

export const BrandStrip: React.FC = () => {
  return (
    <section className="brand-strip-section" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        <div className="brand-strip-logos">
          <div className="brand-logo-item">🔍 Google</div>
          <div className="brand-logo-item">♾️ Meta</div>
          <div className="brand-logo-item">📦 amazon</div>
          <div className="brand-logo-item">🟠 HubSpot</div>
          <div className="brand-logo-item">💻 Microsoft</div>
        </div>
      </div>
    </section>
  );
};
