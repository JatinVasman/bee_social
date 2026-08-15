import React, { useState, useEffect } from 'react';
import type { Currency, PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LegalSection } from './components/LegalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { InteractiveStatsBar } from './components/InteractiveStatsBar';
import { ClientVoices } from './components/ClientVoices';
import { FloatingSocials } from './components/FloatingSocials';
import { WorkShowcaseMarquee } from './components/WorkShowcaseMarquee';

// Modals
import { StatCardModal } from './components/StatCardModal';
import type { StatType } from './components/StatCardModal';
import { LeadershipModal } from './components/LeadershipModal';
import type { LeaderPerson } from './components/LeadershipModal';
import { StrategyModal } from './components/StrategyModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LocationsModal } from './components/LocationsModal';

// Dedicated Pages
import { ServicesPage } from './pages/ServicesPage';
import { SmmPage } from './pages/SmmPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LocationPage } from './pages/LocationPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LegalDetailsPage } from './pages/LegalDetailsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GraphicDetailPage } from './pages/GraphicDetailPage';
import { GraphicItemDetailPage } from './pages/GraphicItemDetailPage';
import { LocationsDirectoryPage } from './pages/LocationsDirectoryPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Modals state
  const [activeStatModal, setActiveStatModal] = useState<StatType>(null);
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderPerson>(null);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [strategyModalNote, setStrategyModalNote] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  // Selected Location for location landing page
  const [selectedLocation, setSelectedLocation] = useState<string>('Lucknow');

  // Selected Blog Slug for blog post page
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('');

  // Legal section query pass-through state
  const [initialLegalQuery, setInitialLegalQuery] = useState('');
  const [initialLegalShowResults, setInitialLegalShowResults] = useState(false);
  const [selectedLegalServiceTitle, setSelectedLegalServiceTitle] = useState<string>('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedGraphicCat, setSelectedGraphicCat] = useState<string>('');
  const [selectedDesignItem, setSelectedDesignItem] = useState<string>('');

  useEffect(() => {
    const syncRoute = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') || 'home';
      const serviceId = params.get('id') || '';
      const serviceParam = params.get('service') || '';
      
      if (pageParam === 'legal-details') {
        setSelectedLegalServiceTitle(serviceId);
      } else if (pageParam === 'service-details') {
        setSelectedServiceId(serviceId);
      } else if (pageParam === 'graphic-details') {
        setSelectedGraphicCat(serviceId);
      } else if (pageParam === 'design-item') {
        setSelectedDesignItem(serviceId);
      }
      
      if (serviceParam) {
        setSelectedServiceId(serviceParam);
      } else {
        if (pageParam !== 'service-details') {
          setSelectedServiceId('');
        }
      }
      setActivePage(pageParam as PageView);
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  // Sync selectedServiceId modal changes to query parameters
  useEffect(() => {
    if (activePage === 'home' || activePage === 'services') {
      const params = new URLSearchParams(window.location.search);
      const currentService = params.get('service') || '';
      
      if (selectedServiceId !== currentService) {
        if (selectedServiceId) {
          params.set('service', selectedServiceId);
        } else {
          params.delete('service');
        }
        
        let newUrl = '/';
        if (activePage !== 'home') {
          newUrl = `/?page=${activePage}`;
          if (selectedServiceId) {
            newUrl += `&service=${encodeURIComponent(selectedServiceId)}`;
          }
        } else {
          if (selectedServiceId) {
            newUrl = `/?service=${encodeURIComponent(selectedServiceId)}`;
          }
        }
        window.history.pushState(null, '', newUrl);
      }
    }
  }, [selectedServiceId, activePage]);

  // Dynamic SEO Metadata Manager
  useEffect(() => {
    let title = 'Digital Digix — Performance Marketing, Generative Engine Optimization & Web Applications';
    let description = 'Digital Digix is India\'s leading digital growth agency specializing in Performance Marketing, Generative Engine Optimization (GEO/AEO), high-converting web applications, and B2B growth funnels.';

    switch (activePage) {
      case 'services':
        title = 'Digital Marketing & Software Services — SEO, GEO, Ads & Development | Digital Digix';
        description = 'Explore full-suite digital marketing services: Performance Marketing, Generative Engine Optimization (GEO), Google/Meta Ads, Custom Web Applications, and WhatsApp Automation.';
        break;
      case 'industries':
        title = '89+ Industry Digital Marketing & Growth Solutions | Digital Digix';
        description = 'Tailored digital marketing, SEO, and lead generation frameworks customized for 89+ industries including Healthcare, Real Estate, E-Commerce, Education, and Tech.';
        break;
      case 'portfolio':
        title = 'Client Case Studies & Verified Growth Results | Digital Digix';
        description = 'Discover real-world case studies and ROI metrics from 2,700+ clients scaled across SEO, Google Ads, Meta Ads, and bespoke software development.';
        break;
      case 'blog':
        title = 'Digital Marketing, SEO & Generative AI Insights Blog | Digital Digix';
        description = 'Read 564+ expert articles and pillar guides on SEO, AI search optimization (GEO/AEO), paid media scaling, and digital business strategies.';
        break;
      case 'location':
        title = `Digital Marketing & SEO Agency in ${selectedLocation} | Digital Digix`;
        description = `Local SEO, Performance Marketing, and Google Maps optimization services for businesses in ${selectedLocation} and surrounding regions.`;
        break;
      case 'all-locations':
        title = 'Global Locations & Digital Marketing Centers | Digital Digix';
        description = 'Explore Digital Digix domestic and international marketing offices serving clients across India, the Middle East, the UK, and North America.';
        break;
      case 'smm':
        title = 'Social Media Marketing (SMM) & Viral Reels Strategy | Digital Digix';
        description = 'Full-funnel organic and paid social media management for Instagram, LinkedIn, YouTube, and Facebook designed to build brand authority and generate leads.';
        break;
      case 'about':
        title = 'About Digital Digix — Leadership, Mission & AI-Powered Growth';
        description = 'Learn about Digital Digix leadership, engineering philosophy, and performance-first methodology driving 2,700+ successful brand transformations.';
        break;
      case 'contact':
        title = 'Contact Digital Digix — Free 30-Min Strategy Consultation';
        description = 'Schedule a free 30-minute growth strategy session with Digital Digix marketing experts. No lock-in contracts, post-pay options available.';
        break;
      case 'legal':
      case 'legal-details':
        title = 'Legal Marketing & Corporate Compliance Digital Solutions | Digital Digix';
        description = 'Specialized marketing, client acquisition funnels, and personal branding tailored for Law Firms, Advocates, and CA/CS professionals.';
        break;
      default:
        break;
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = window.location.href.split('#')[0];
    canonical.setAttribute('href', currentUrl);
  }, [activePage, selectedLocation]);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleNavigate = (page: PageView, slug?: string) => {
    if (page === 'blog-post' && slug) {
      setSelectedBlogSlug(slug);
    }
    if (page === 'service-details' && slug) {
      setSelectedServiceId(slug);
    }
    if (page === 'graphic-details' && slug) {
      setSelectedGraphicCat(slug);
    }
    if (page === 'design-item' && slug) {
      setSelectedDesignItem(slug);
    }
    if (page === 'legal') {
      setInitialLegalQuery('');
      setInitialLegalShowResults(false);
    }

    let newUrl = '/';
    if (page !== 'home') {
      newUrl = `/?page=${page}`;
      if (slug) {
        newUrl += `&id=${slug}`;
      }
    }
    window.history.pushState(null, '', newUrl);
    
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRedirectToLegal = (query?: string, showResults?: boolean) => {
    setInitialLegalQuery(query || '');
    setInitialLegalShowResults(showResults ?? true);
    setActivePage('legal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLocation = (loc: string) => {
    setSelectedLocation(loc);
    setActivePage('location');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStrategyModal = (note?: string) => {
    setStrategyModalNote(note || '');
    setIsStrategyModalOpen(true);
  };

  return (
    <div className="app-container" data-theme={theme}>
      {/* GLASSMORPHIC HEADER */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        onOpenStrategyModal={() => handleOpenStrategyModal()}
        onOpenLeaderModal={setActiveLeaderModal}
      />

      {/* MAIN ROUTER BODY */}
      <main>
        {activePage === 'home' && (
          <>
            <Hero
              onOpenStatModal={setActiveStatModal}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              onNavigateServices={() => handleNavigate('services')}
              onNavigatePortfolio={() => handleNavigate('portfolio')}
            />
            <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '4rem', paddingBottom: '2rem' }}>
              <InteractiveStatsBar
                onSelectLocation={handleSelectLocation}
                onOpenStrategyModal={handleOpenStrategyModal}
              />
            </div>
            <ServicesGrid
              onOpenStrategyModal={handleOpenStrategyModal}
              onNavigate={handleNavigate}
              backgroundColor="#FFFFFF"
            />
            <AboutUs
              onOpenLeaderModal={setActiveLeaderModal}
              onOpenStrategyModal={handleOpenStrategyModal}
              onSelectLocation={handleSelectLocation}
              backgroundColor="var(--bg-main)"
            />
            <ClientVoices backgroundColor="#FFFFFF" />
            <WorkShowcaseMarquee />
            <WhyChooseUs
              onSelectLocation={handleSelectLocation}
              onOpenStrategyModal={handleOpenStrategyModal}
              backgroundColor="var(--bg-main)"
            />
            <LegalSection 
              onOpenStrategyModal={handleOpenStrategyModal} 
              isHomepage={true}
              onRedirectToLegal={handleRedirectToLegal}
              backgroundColor="#F8FAFC"
            />
            <ContactSection backgroundColor="var(--bg-main)" />
          </>
        )}

        {activePage === 'about' && (
          <AboutUs
            onOpenLeaderModal={setActiveLeaderModal}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

         {activePage === 'legal' && (
           <LegalSection 
             onOpenStrategyModal={handleOpenStrategyModal} 
             isHomepage={false}
             initialQuery={initialLegalQuery}
             initialShowResults={initialLegalShowResults}
             backgroundColor="#F8FAFC"
           />
         )}

        {activePage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'smm' && (
          <SmmPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactSection />
        )}

        {activePage === 'location' && (
          <LocationPage
            locationName={selectedLocation}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'blog-post' && (
          <BlogPostPage
            slug={selectedBlogSlug}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'legal-details' && (
          <LegalDetailsPage
            serviceTitle={selectedLegalServiceTitle}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'service-details' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'graphic-details' && (
          <GraphicDetailPage
            categoryId={selectedGraphicCat}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'design-item' && (
          <GraphicItemDetailPage
            itemId={selectedDesignItem}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'all-locations' && (
          <LocationsDirectoryPage
            onNavigate={handleNavigate}
            onSelectLocation={handleSelectLocation}
          />
        )}
      </main>

      {/* FOOTER WITH DOMESTIC & INTERNATIONAL LOCATIONS */}
      <Footer
        onNavigate={handleNavigate}
        onSelectLocation={handleSelectLocation}
        onOpenLocationsModal={() => setIsLocationsModalOpen(true)}
      />

      {/* POP-UP MODALS */}
      <LocationsModal
        isOpen={isLocationsModalOpen}
        onClose={() => setIsLocationsModalOpen(false)}
        onSelectLocation={handleSelectLocation}
      />

      <StatCardModal
        statType={activeStatModal}
        onClose={() => setActiveStatModal(null)}
        onOpenStrategyModal={handleOpenStrategyModal}
      />

      <LeadershipModal
        person={activeLeaderModal}
        onClose={() => setActiveLeaderModal(null)}
        onOpenStrategyModal={handleOpenStrategyModal}
        onNavigate={handleNavigate}
      />

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        planName={strategyModalNote}
      />

      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Floating social media quick contact icons */}
      <FloatingSocials />
    </div>
  );
};
export default App;
