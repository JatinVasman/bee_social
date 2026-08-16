import React from 'react';
import { LEGAL_SERVICES_DATA } from '../components/LegalSection';

interface LegalDetailsPageProps {
  serviceTitle: string;
  onNavigate: (page: any) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

export const LegalDetailsPage: React.FC<LegalDetailsPageProps> = ({
  serviceTitle,
  onNavigate
}) => {
  // Find the requested service by title, slug, or ID
  const cleanQuery = serviceTitle?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || '';
  const service = LEGAL_SERVICES_DATA.find(
    (s) => 
      s.title.toLowerCase() === serviceTitle?.toLowerCase() ||
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === cleanQuery
  );

  // Fallback if not found
  if (!service) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#F0F4F8', minHeight: '80vh' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
          Service Not Found
        </h2>
        <p style={{ color: '#64748B', marginBottom: '2rem' }}>
          The requested legal service could not be located.
        </p>
        <button
          onClick={() => onNavigate('legal')}
          className="btn btn-primary"
          style={{ padding: '0.85rem 2rem', borderRadius: '50px' }}
        >
          ← Back to Legal Directory
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F0F4F8', minHeight: '90vh', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb & Back button */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => onNavigate('legal')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FF4E27',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0
            }}
          >
            ← Back to Legal Directory
          </button>
        </div>

        {/* Main Service Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
          marginBottom: '2rem'
        }}>
          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 900,
              color: '#FF4E27',
              background: '#FFEBE7',
              padding: '0.25rem 0.75rem',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {service.category}
            </span>
            {service.subCategory && (
              <>
                <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>•</span>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#64748B'
                }}>
                  {service.subCategory}
                </span>
              </>
            )}
          </div>

          {/* Service Title */}
          <h1 style={{
            fontSize: '2.6rem',
            fontWeight: 900,
            color: '#0F172A',
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1.25rem',
            lineHeight: 1.15
          }}>
            {service.title}
          </h1>

          {/* Description Block */}
          <div style={{
            borderLeft: '4px solid #FF4E27',
            paddingLeft: '1.5rem',
            margin: '2rem 0',
            backgroundColor: '#FFFDFB'
          }}>
            <p style={{
              color: '#334155',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              fontWeight: 500,
              margin: 0
            }}>
              {service.explanation}
            </p>
          </div>

          {/* Grid: Deliverables & Process */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '2rem'
          }}>
            {/* Key Deliverables */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                📦 Key Deliverables
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingLeft: '1rem', margin: 0, fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} style={{ paddingLeft: '0.15rem' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Our Process */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                ⚙️ Execution Process
              </h4>
              <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingLeft: '1.15rem', margin: 0, fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                {service.process.map((step, idx) => (
                  <li key={idx} style={{ paddingLeft: '0.15rem' }}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Required Documents */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', fontFamily: 'Outfit, sans-serif', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              📄 Required Documents
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingLeft: '1rem', margin: 0, fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
              {service.documents.map((doc, idx) => (
                <li key={idx} style={{ paddingLeft: '0.15rem' }}>{doc}</li>
              ))}
            </ul>
          </div>



        </div>

      </div>
    </div>
  );
};
