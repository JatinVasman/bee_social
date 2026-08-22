import React, { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ClientLogosCarouselProps {
  backgroundColor?: string;
}

// Actual client logos from /public/logos
const clientLogos = [
  {
    src: '/logos/Baarat Swagat Theme Rajasthani Royal Fiesta.pdf.png',
    alt: 'Baarat Swagat — Rajasthani Royal Fiesta',
  },
  {
    src: '/logos/Black Circle Modern Nails Studio Logo.png',
    alt: 'The Nail Storiess by Sejal Bafna',
  },
  {
    src: '/logos/Black Minimalist Initial Font BE Logo.png',
    alt: 'New Sai Sagar Novelties',
  },
  {
    src: '/logos/Happy Nest Ventures .png',
    alt: 'Happy Nest Ventures',
  },
  {
    src: '/logos/WhatsApp Image 2026-08-22 at 11.51.49.jpeg',
    alt: 'NuTree Veda',
  },
];

export const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({ backgroundColor }) => {
  const reveal = useScrollReveal();
  const [selectedLogo, setSelectedLogo] = useState<{ src: string; alt: string } | null>(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedLogo(null);
  }, []);

  useEffect(() => {
    if (selectedLogo) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedLogo, handleKeyDown]);

  // Triple the logos for seamless infinite scroll
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <>
      <section
        id="client-logos-carousel"
        style={{
          padding: '4rem 0',
          backgroundColor: backgroundColor || 'var(--bg-main)',
          overflow: 'hidden',
          borderTop: '1px solid var(--border-color-subtle)',
          borderBottom: '1px solid var(--border-color-subtle)',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div ref={reveal} className="section-tag">OUR CLIENTS</div>
          <h2
            ref={reveal}
            className="scroll-delay-1"
            style={{
              fontSize: '2rem',
              fontWeight: 900,
              color: 'var(--secondary)',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            Brands We've Worked With
          </h2>
        </div>

        {/* Scrolling Logo Strip */}
        <div className="marquee-container">
          <div
            className="marquee-track-left"
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {repeatedLogos.map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                onClick={() => setSelectedLogo(logo)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  width: '200px',
                  height: '140px',
                  padding: '1rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-color-subtle)',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) scale(1.03)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '8px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedLogo && (
        <div
          onClick={() => setSelectedLogo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            animation: 'logoLightboxFadeIn 0.25s ease-out',
            padding: '2rem',
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedLogo(null); }}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 300,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.25)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.6)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'none';
            }}
          >
            ✕
          </button>

          {/* Logo Content Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem',
              maxWidth: '600px',
              maxHeight: '80vh',
              width: '90vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              boxShadow: '0 25px 80px rgba(0,0,0,0.3)',
              animation: 'logoLightboxScaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <img
              src={selectedLogo.src}
              alt={selectedLogo.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '60vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '12px',
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1a1a2e',
                fontFamily: 'Outfit, sans-serif',
                textAlign: 'center',
                letterSpacing: '0.02em',
              }}
            >
              {selectedLogo.alt}
            </p>
          </div>
        </div>
      )}

      {/* Lightbox Keyframe Animations */}
      <style>{`
        @keyframes logoLightboxFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes logoLightboxScaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};
