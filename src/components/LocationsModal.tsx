import React, { useState, useEffect } from 'react';
import { ALL_STATE_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '../data/locationsData';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation?: (locationName: string) => void;
}

export const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('All');

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

  const handleCityClick = (city: string) => {
    if (onSelectLocation) {
      onSelectLocation(city);
    }
    onClose();
  };

  const filteredStates = ALL_STATE_LOCATIONS.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesState = item.state.toLowerCase().includes(query);
    const matchesTier2 = item.tier2.some(c => c.toLowerCase().includes(query));
    const matchesTier3 = item.tier3_4.some(c => c.toLowerCase().includes(query));
    return matchesState || matchesTier2 || matchesTier3;
  });

  const filteredIntl = TOP_FOOTER_INTERNATIONAL_LOCATIONS.filter(loc =>
    !searchQuery || loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }} role="dialog" aria-modal="true" aria-label="Locations Directory">
      <div
        className="modal-card"
        style={{
          maxWidth: '1200px',
          width: '95%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '24px',
          overflow: 'hidden',
          padding: 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div style={{ padding: '1.75rem 2.25rem', backgroundColor: 'var(--secondary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--secondary)' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
              PAN-INDIA & INTERNATIONAL COVERAGE
            </div>
            <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
              📍 Complete Locations Directory (Tier 1, 2, 3 & 4 Markets)
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          >
            ✕
          </button>
        </div>

        {/* SEARCH BAR & FILTER TABS */}
        <div style={{ padding: '1.25rem 2.25rem', backgroundColor: 'var(--bg-subtle, #FFF0F2)', borderBottom: '1px solid var(--border-color-subtle)', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <input
              type="text"
              placeholder="🔍 Search city or state (e.g. Gorakhpur, Kota, Kochi, USA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                borderRadius: '999px',
                border: '1.5px solid var(--border-color)',
                fontSize: '0.9rem',
                outline: 'none',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Tier 2 Metros', 'Tier 3 & 4 Cities', 'International'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: activeTab === tab ? 'var(--primary)' : '#FFFFFF',
                  color: activeTab === tab ? '#FFFFFF' : '#475569',
                  border: activeTab === tab ? 'none' : '1px solid var(--border-color)',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MODAL SCROLLABLE BODY */}
        <div style={{ padding: '2rem 2.25rem', overflowY: 'auto', flex: 1, backgroundColor: 'var(--bg-card)' }}>
          
          {/* INTERNATIONAL SECTION */}
          {(activeTab === 'All' || activeTab === 'International') && filteredIntl.length > 0 && (
            <div style={{ marginBottom: '2.5rem', backgroundColor: 'var(--bg-subtle, #FFF0F2)', padding: '1.5rem', borderRadius: '18px', border: '1px solid var(--border-color-subtle, #F0E4E8)' }}>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.25rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🌐 International Offices & Global Markets
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {filteredIntl.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleCityClick(loc)}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--primary)',
                      border: '1px solid var(--border-color-subtle, #F0E4E8)',
                      borderRadius: '999px',
                      padding: '0.45rem 1.25rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0284C7';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = '#0284C7';
                    }}
                  >
                    🌐 {loc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STATE-BY-STATE DOMESTIC LOCATIONS */}
          {(activeTab === 'All' || activeTab === 'Tier 2 Metros' || activeTab === 'Tier 3 & 4 Cities') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {filteredStates.map((stateData) => {
                const showTier2 = activeTab === 'All' || activeTab === 'Tier 2 Metros';
                const showTier3 = activeTab === 'All' || activeTab === 'Tier 3 & 4 Cities';

                const tier2List = stateData.tier2.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));
                const tier3List = stateData.tier3_4.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));

                if (!tier2List.length && !tier3List.length) return null;

                return (
                  <div
                    key={stateData.state}
                    style={{
                      backgroundColor: 'var(--bg-subtle, #FFF0F2)',
                      borderRadius: '20px',
                      padding: '1.75rem',
                      border: '1px solid var(--border-color-subtle)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color-subtle)' }}>
                      <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.35rem', fontWeight: 900, color: 'var(--secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📍</span>
                        <span>{stateData.state} Coverage</span>
                      </h3>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', backgroundColor: 'rgba(214, 51, 108, 0.08)', padding: '0.25rem 0.75rem', borderRadius: '999px' }}>
                        {stateData.tier2.length + stateData.tier3_4.length} Cities Covered
                      </span>
                    </div>

                    {/* TIER 2 CITIES */}
                    {showTier2 && tier2List.length > 0 && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                          TIER 2 MAJOR METRO HUBS
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                          {tier2List.map((city) => (
                            <button
                              key={city}
                              onClick={() => handleCityClick(city)}
                              style={{
                                backgroundColor: 'var(--bg-card)',
                                color: 'var(--secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '999px',
                                padding: '0.4rem 1.1rem',
                                fontSize: '0.825rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--primary)';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = 'var(--secondary)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                              }}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TIER 3 & 4 CITIES */}
                    {showTier3 && tier3List.length > 0 && (
                      <div>
                        <div style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                          TIER 3 & TIER 4 LOCAL MARKET COVERAGE
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                          {tier3List.map((city) => (
                            <button
                              key={city}
                              onClick={() => handleCityClick(city)}
                              style={{
                                backgroundColor: 'var(--bg-card)',
                                color: '#475569',
                                border: '1px solid var(--border-color-subtle)',
                                borderRadius: '999px',
                                padding: '0.35rem 0.9rem',
                                fontSize: '0.785rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--secondary)';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = 'var(--secondary)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = '#475569';
                                e.currentTarget.style.borderColor = '#E2E8F0';
                              }}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div style={{ padding: '1.25rem 2.25rem', backgroundColor: 'var(--bg-subtle, #FFF0F2)', borderTop: '1px solid var(--border-color-subtle)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Click any city above to open dedicated localized Digital Marketing & SMM strategies.
        </div>
      </div>
    </div>
  );
};
