import React, { useState, useEffect } from 'react';
import type { Currency, PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { InteractiveStatsBar } from './components/InteractiveStatsBar';
import { ClientVoices } from './components/ClientVoices';
import { FloatingSocials } from './components/FloatingSocials';
import { WorkShowcaseMarquee } from './components/WorkShowcaseMarquee';

// New sections from client brief
import { OneAgencySection } from './components/OneAgencySection';
import { ProcessSection } from './components/ProcessSection';
import { PackagesSection } from './components/PackagesSection';
import { DigitalToolkitSection } from './components/DigitalToolkitSection';
import { AIPoweredSection } from './components/AIPoweredSection';
import { InfluencerSection } from './components/InfluencerSection';
import { IndustriesShowcase } from './components/IndustriesShowcase';
import { FAQSection } from './components/FAQSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ClientLogosCarousel } from './components/ClientLogosCarousel';
import { LeadMagnetSection } from './components/LeadMagnetSection';

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
import { IndustriesPage, all89IndustriesList } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LocationPage } from './pages/LocationPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GraphicDetailPage } from './pages/GraphicDetailPage';
import { GraphicItemDetailPage } from './pages/GraphicItemDetailPage';
import { LocationsDirectoryPage } from './pages/LocationsDirectoryPage';

import { parseRoute, getRoutePath, SERVICE_SLUG_TO_ID } from './utils/routes';
import { ALL_BLOGS } from './data/blogData';
import { detailed17Services } from './components/ServicesGrid';

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
  const [selectedLocation, setSelectedLocation] = useState<string>('Mumbai');

  // Selected Blog Slug for blog post page
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('');

  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('');
  const [selectedGraphicCat, setSelectedGraphicCat] = useState<string>('');
  const [selectedDesignItem, setSelectedDesignItem] = useState<string>('');

  useEffect(() => {
    const syncRoute = () => {
      const { page, slug } = parseRoute(window.location.pathname, window.location.search);
      
      if (page === 'blog-post' && slug) {
        setSelectedBlogSlug(slug);
      } else if (page === 'service-details' && slug) {
        setSelectedServiceId(slug);
      } else if (page === 'industries') {
        setSelectedIndustryId(slug || '');
      } else if (page === 'about') {
        if (slug) {
          const lower = slug.toLowerCase();
          if (lower.includes('founder') || lower.includes('siddhi')) {
            setActiveLeaderModal('founder');
          } else if (lower.includes('why') || lower.includes('diff')) {
            setActiveLeaderModal('why-us');
          } else if (lower.includes('team') || lower.includes('crew') || lower.includes('specialist')) {
            setActiveLeaderModal('team');
          } else {
            setActiveLeaderModal(null);
          }
        } else {
          setActiveLeaderModal(null);
        }
      } else if (page === 'graphic-details' && slug) {
        setSelectedGraphicCat(slug);
      } else if (page === 'design-item' && slug) {
        setSelectedDesignItem(slug);
      } else if (page === 'location' && slug) {
        setSelectedLocation(slug);
      }
      
      setActivePage(page);

      // Upgrade legacy query params (?page=...) to clean SEO paths
      if (window.location.search.includes('page=')) {
        const cleanPath = getRoutePath(page, slug);
        window.history.replaceState(null, '', cleanPath);
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  // Dynamic SEO Metadata Manager
  useEffect(() => {
    let title = 'BeeSocial — Strategy. Creativity. Growth.';
    let description = 'BeeSocial is a creative branding and digital marketing agency helping businesses build a powerful online presence through strategy, content, design, social media and influencer marketing.';

    switch (activePage) {
      case 'services':
        title = 'Social Media & Digital Marketing Services — SMM, Ads & Design | BeeSocial';
        description = 'Explore full-suite social media and digital marketing services: Content Creation, Social Media Management, Paid Ads, Web Development, and Brand Design.';
        break;
      case 'industries': {
        if (selectedIndustryId) {
          const raw = decodeURIComponent(selectedIndustryId).toLowerCase().trim();
          const clean = raw
            .replace(/^marketing-for-/i, '')
            .replace(/^marketing-to-/i, '')
            .replace(/^marketing-for\s+/i, '')
            .replace(/^marketing\s+for\s+/i, '')
            .replace(/^marketing-/i, '')
            .replace(/^marketing\s+/i, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');

          const cleanPlural = clean.endsWith('s') ? clean : `${clean}s`;
          const cleanSingular = clean.replace(/s$/, '');

          const matched = all89IndustriesList.find(i => {
            const itemCleanId = i.id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            const itemCleanName = i.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return itemCleanId === clean ||
                   itemCleanName === clean ||
                   itemCleanId === cleanPlural ||
                   itemCleanId === cleanSingular ||
                   itemCleanName === cleanPlural ||
                   itemCleanName === cleanSingular;
          });

          const matchedCategory = all89IndustriesList.find(i => 
            i.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === clean
          );

          if (matched) {
            title = `Digital Marketing for ${matched.name} (${matched.category}) — Growth Strategy & ROI | BeeSocial`;
            description = matched.overview || `Scale your ${matched.name} business with BeeSocial. High-ROI customer acquisition, local SEO, Meta Ads, and automated WhatsApp CRM funnels tailored for ${matched.name}.`;
          } else if (matchedCategory) {
            title = `Digital Marketing for ${matchedCategory.category} — Growth Strategy & ROI | BeeSocial`;
            description = `Tailored digital marketing, performance advertising, and customer acquisition playbooks for ${matchedCategory.category} businesses across India by BeeSocial.`;
          } else {
            const prettyName = clean.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            title = `Digital Marketing for ${prettyName} — Growth Strategy & Playbooks | BeeSocial`;
            description = `Tailored digital marketing and customer acquisition systems engineered for ${prettyName}. SEO, performance ads, and conversion funnels by BeeSocial.`;
          }
        } else {
          title = 'Industry-Specific Social Media & Marketing Solutions | BeeSocial';
          description = 'Tailored social media marketing and digital growth strategies customized for 89+ industries including Healthcare, Real Estate, E-Commerce, Education, and more.';
        }
        break;
      }
      case 'portfolio':
        title = 'Our Work — Creative Portfolio & Case Studies | BeeSocial';
        description = 'Discover real-world creative campaigns, social media transformations, and brand growth results delivered by BeeSocial.';
        break;
      case 'packages':
        title = 'Marketing Packages & Pricing — Starting ₹15,999/month | BeeSocial';
        description = 'Simple, transparent and scalable digital marketing packages for businesses at every growth stage. Starting from ₹15,999/month.';
        break;
      case 'case-studies':
        title = 'Case Studies — Real Results for Real Brands | BeeSocial';
        description = 'See how BeeSocial has helped brands build their digital presence with strategy, content, design and marketing campaigns.';
        break;
      case 'blog':
        title = 'Social Media Marketing & Digital Growth Insights | BeeSocial Blog';
        description = 'Read expert articles and guides on social media strategy, content creation, paid media, brand building, and digital marketing trends.';
        break;
      case 'blog-post': {
        const blog = ALL_BLOGS.find(b => 
          b.slug === selectedBlogSlug || 
          b.slug === decodeURIComponent(selectedBlogSlug || '') ||
          b.slug.toLowerCase() === selectedBlogSlug?.toLowerCase()
        );
        if (blog) {
          title = `${blog.title} | BeeSocial Blog`;
          description = blog.excerpt || description;
        } else {
          title = 'Blog Post & Growth Insights | BeeSocial';
        }
        break;
      }
      case 'service-details': {
        const normalizedId = SERVICE_SLUG_TO_ID[selectedServiceId?.toLowerCase() || ''] || selectedServiceId;
        const service = detailed17Services.find(s => 
          s.id === normalizedId || 
          s.id === selectedServiceId || 
          s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === selectedServiceId?.toLowerCase()
        );
        if (service) {
          title = `${service.title} Services — Strategy, Pricing & Deliverables | BeeSocial`;
          description = service.longDescription || service.description || description;
        } else {
          title = 'Services & Capabilities | BeeSocial';
        }
        break;
      }
      case 'graphic-details':
        title = 'Graphic Design Services & Creative Pricing | BeeSocial';
        description = 'Explore professional graphic design services: social media posts, pitch decks, packaging, brochures, logos, and branding with 24-hour turnaround.';
        break;
      case 'design-item':
        title = `Graphic Design for ${selectedDesignItem.replace(/-/g, ' ')} | BeeSocial`;
        description = `Professional custom design services for ${selectedDesignItem.replace(/-/g, ' ')}. High-resolution vector files, print-ready PDFs, and fast turnaround.`;
        break;
      case 'location':
        title = `Social Media & Digital Marketing Agency in ${selectedLocation} | BeeSocial`;
        description = `Social media marketing, content creation, and digital growth services for businesses in ${selectedLocation} and surrounding regions.`;
        break;
      case 'all-locations':
        title = 'Locations & Service Areas | BeeSocial';
        description = 'Explore BeeSocial service locations across India and internationally.';
        break;
      case 'smm':
        title = 'Social Media Marketing (SMM) & Content Strategy | BeeSocial';
        description = 'Full-funnel organic and paid social media management for Instagram, LinkedIn, YouTube, and Facebook designed to build brand authority and generate engagement.';
        break;
      case 'about':
        title = 'About BeeSocial — Our Story, Mission & Creative Vision';
        description = 'Learn about BeeSocial, our creative approach to social media marketing, and the team behind impactful brand transformations.';
        break;
      case 'contact':
        title = 'Contact BeeSocial — Let\'s Build Something People Remember';
        description = 'Get in touch with BeeSocial to discuss your branding and digital marketing goals. We\'d love to hear from you.';
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

    // Compute clean canonical URL
    const activeSlug = activePage === 'blog-post' ? selectedBlogSlug :
      activePage === 'service-details' ? selectedServiceId :
      activePage === 'location' ? selectedLocation :
      activePage === 'graphic-details' ? selectedGraphicCat :
      activePage === 'design-item' ? selectedDesignItem :
      activePage === 'industries' ? selectedIndustryId : undefined;

    const cleanPath = getRoutePath(activePage, activeSlug);
    const canonicalUrl = cleanPath === '/' ? '/' : cleanPath;

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Update Twitter Card tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', canonicalUrl);
  }, [activePage, selectedLocation, selectedBlogSlug, selectedServiceId, selectedGraphicCat, selectedDesignItem, selectedIndustryId]);

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
    if (page === 'industries') {
      setSelectedIndustryId(slug || '');
    }
    if (page === 'graphic-details' && slug) {
      setSelectedGraphicCat(slug);
    }
    if (page === 'design-item' && slug) {
      setSelectedDesignItem(slug);
    }
    if (page === 'location' && slug) {
      setSelectedLocation(slug);
    }
    if (page === 'about') {
      if (slug) {
        const lower = slug.toLowerCase();
        if (lower.includes('founder') || lower.includes('siddhi')) {
          setActiveLeaderModal('founder');
        } else if (lower.includes('why') || lower.includes('diff')) {
          setActiveLeaderModal('why-us');
        } else if (lower.includes('team') || lower.includes('crew') || lower.includes('specialist')) {
          setActiveLeaderModal('team');
        } else {
          setActiveLeaderModal(null);
        }
      } else {
        setActiveLeaderModal(null);
      }
    }

    const cleanPath = getRoutePath(page, slug);
    window.history.pushState(null, '', cleanPath);
    
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLocation = (loc: string) => {
    setSelectedLocation(loc);
    setActivePage('location');
    const cleanPath = getRoutePath('location', loc);
    window.history.pushState(null, '', cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStrategyModal = (note?: string) => {
    setStrategyModalNote(note || '');
    setIsStrategyModalOpen(true);
  };

  const handleOpenLeaderModal = (person: LeaderPerson) => {
    setActiveLeaderModal(person);
    setActivePage('about');
    const cleanPath = person ? getRoutePath('about', person) : '/about';
    window.history.pushState(null, '', cleanPath);
  };

  const handleCloseLeaderModal = () => {
    setActiveLeaderModal(null);
    if (activePage === 'about') {
      window.history.pushState(null, '', '/about');
    } else {
      window.history.pushState(null, '', getRoutePath(activePage));
    }
  };

  // Suppress unused variable warnings
  void currency;
  void setCurrency;
  void handleThemeToggle;
  void isSearchModalOpen;

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
        onOpenLeaderModal={handleOpenLeaderModal}
      />

      {/* MAIN ROUTER BODY */}
      <main>
        {activePage === 'home' && (
          <>
            {/* 1. HERO */}
            <Hero
              onOpenStatModal={setActiveStatModal}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              onNavigateServices={() => handleNavigate('services')}
              onNavigatePortfolio={() => handleNavigate('portfolio')}
            />

            {/* 2. TRUST BAR */}
            <div style={{ backgroundColor: 'var(--bg-main)', paddingTop: '4rem', paddingBottom: '2rem' }}>
              <InteractiveStatsBar
                onSelectLocation={handleSelectLocation}
                onOpenStrategyModal={handleOpenStrategyModal}
              />
            </div>

            {/* 3. ABOUT BEESOCIAL */}
            <AboutUs
              onNavigate={handleNavigate}
              onOpenLeaderModal={handleOpenLeaderModal}
              onOpenStrategyModal={handleOpenStrategyModal}
              onSelectLocation={handleSelectLocation}
              backgroundColor="var(--bg-card)"
            />

            {/* 4. SERVICES GRID */}
            <ServicesGrid
              onOpenStrategyModal={handleOpenStrategyModal}
              onNavigate={handleNavigate}
              backgroundColor="var(--bg-main)"
            />

            {/* 5. WHY BEESOCIAL */}
            <WhyChooseUs
              onSelectLocation={handleSelectLocation}
              onOpenStrategyModal={handleOpenStrategyModal}
              backgroundColor="var(--bg-card)"
            />

            {/* 6. ONE AGENCY. EVERY TOUCHPOINT. */}
            <OneAgencySection
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-main)"
            />

            {/* 7. PORTFOLIO / WORK SHOWCASE */}
            <WorkShowcaseMarquee />

            {/* 8. CASE STUDIES */}
            <CaseStudiesSection
              onNavigate={handleNavigate}
              backgroundColor="var(--bg-card)"
            />

            {/* 9. PROCESS — FROM IDEA TO IMPACT */}
            <ProcessSection backgroundColor="var(--bg-main)" />

            {/* 10. PACKAGES */}
            <PackagesSection
              onNavigate={handleNavigate}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-card)"
            />

            {/* 11. DIGITAL GROWTH TOOLKIT */}
            <DigitalToolkitSection backgroundColor="var(--bg-main)" />

            {/* 12. AI-POWERED CREATIVITY */}
            <AIPoweredSection
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-card)"
            />

            {/* 13. INFLUENCER MARKETING */}
            <InfluencerSection
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-main)"
            />

            {/* 14. TESTIMONIALS */}
            <ClientVoices backgroundColor="var(--bg-card)" />

            {/* 15. CLIENT LOGOS */}
            <ClientLogosCarousel backgroundColor="var(--bg-main)" />

            {/* 16. INDUSTRIES SHOWCASE */}
            <IndustriesShowcase
              onNavigate={handleNavigate}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-card)"
            />

            {/* 17. FAQ */}
            <FAQSection backgroundColor="var(--bg-main)" />

            {/* 18. CONTACT SECTION */}
            <ContactSection
              backgroundColor="var(--bg-card)"
              onOpenStrategyModal={handleOpenStrategyModal}
            />

            {/* 19. LEAD MAGNET — FREE BRAND AUDIT */}
            <LeadMagnetSection
              onOpenStrategyModal={() => handleOpenStrategyModal()}
              backgroundColor="var(--bg-main)"
            />
          </>
        )}

        {activePage === 'about' && (
          <AboutUs
            onNavigate={handleNavigate}
            onOpenLeaderModal={handleOpenLeaderModal}
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
            industryId={selectedIndustryId}
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'packages' && (
          <>
            <PackagesSection
              onNavigate={handleNavigate}
              onOpenStrategyModal={() => handleOpenStrategyModal()}
            />
            <FAQSection backgroundColor="var(--bg-main)" />
            <ContactSection
              backgroundColor="var(--bg-card)"
              onOpenStrategyModal={handleOpenStrategyModal}
            />
          </>
        )}

        {activePage === 'case-studies' && (
          <>
            <CaseStudiesSection
              onNavigate={handleNavigate}
              backgroundColor="var(--bg-main)"
              isStandalonePage={true}
            />
            <ClientVoices backgroundColor="var(--bg-card)" />
            <ContactSection onOpenStrategyModal={handleOpenStrategyModal} />
          </>
        )}

        {activePage === 'smm' && (
          <SmmPage
            onNavigate={handleNavigate}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactSection onOpenStrategyModal={handleOpenStrategyModal} />
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
        onOpenStrategyModal={handleOpenStrategyModal}
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
        onClose={handleCloseLeaderModal}
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
