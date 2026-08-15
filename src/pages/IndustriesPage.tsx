import React, { useState, useMemo } from 'react';

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  status: 'LIVE' | 'COMING_SOON';
  subtitle: string;
  highlightMetric: string;
  indiaMarket: string;
  cagr: string;
  globalMarket: string;
  overview: string;
  didYouKnow: string[];
  metrics: { value: string; label: string }[];
  challenges: { title: string; desc: string }[];
  services: { name: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

interface IndustriesPageProps {
  onNavigate: (page: any) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const industryCategories = [
  'All',
  'Healthcare',
  'Education',
  'Real Estate',
  'E-Commerce & Retail',
  'Beauty & Wellness',
  'Hospitality & Food',
  'Travel & Events',
  'Manufacturing & Auto',
  'Logistics & Warehousing',
  'Finance & Legal',
  'Technology & IT',
  'NGO & Government',
  'Energy & Electronics',
  'Home Services',
  'HR & Consulting',
  'Agriculture & Food'
];

export const all89IndustriesList: IndustryItem[] = [
  {
    id: 'hospitals',
    name: 'Hospitals',
    category: 'Healthcare',
    icon: '🏥',
    status: 'LIVE',
    subtitle: 'Hospitals, Multi-Specialty & Super-Specialty Healthcare',
    highlightMetric: '67% of patients research hospitals online',
    indiaMarket: '₹8.6 Lakh Crore',
    cagr: '22% CAGR',
    globalMarket: '$8.3 Trillion',
    overview: "India's Hospitals sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Hospitals.",
    didYouKnow: [
      '76% of prospects in Hospitals evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Hospitals' },
      { value: '₹8.6 Lakh Crore', label: 'Market Value' },
      { value: '22% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Hospitals keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Hospitals.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Hospitals businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'clinics',
    name: 'Clinics',
    category: 'Healthcare',
    icon: '🩺',
    status: 'LIVE',
    subtitle: 'Polyclinics & Doctor Consultations',
    highlightMetric: '81% of patients check doctor ratings on Google Maps',
    indiaMarket: '₹3.2 Lakh Crore',
    cagr: '19.5% CAGR',
    globalMarket: '$3.1 Trillion',
    overview: "India's Clinics sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Clinics.",
    didYouKnow: [
      '76% of prospects in Clinics evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Clinics' },
      { value: '₹3.2 Lakh Crore', label: 'Market Value' },
      { value: '19.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Clinics keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Clinics.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Clinics businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'Healthcare',
    icon: '🦷',
    status: 'LIVE',
    subtitle: 'Cosmetic Dentistry, Orthodontics & Implant Centers',
    highlightMetric: 'Dental implant & aligner searches up 310%',
    indiaMarket: '₹48,000 Crore',
    cagr: '24% CAGR',
    globalMarket: '$450 Billion',
    overview: "India's Dental Clinics sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Dental Clinics.",
    didYouKnow: [
      '76% of prospects in Dental Clinics evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Dental Clinics' },
      { value: '₹48,000 Crore', label: 'Market Value' },
      { value: '24% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Dental Clinics keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Dental Clinics.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Dental Clinics businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'diagnostic-centers',
    name: 'Diagnostic Centers',
    category: 'Healthcare',
    icon: '🔬',
    status: 'LIVE',
    subtitle: 'MRI, CT Scan, Pathology Labs & Health Checkups',
    highlightMetric: '78% of diagnostic inquiries originate from Search',
    indiaMarket: '₹75,000 Crore',
    cagr: '17.5% CAGR',
    globalMarket: '$380 Billion',
    overview: "India's Diagnostic Centers sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Diagnostic Centers.",
    didYouKnow: [
      '76% of prospects in Diagnostic Centers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Diagnostic Centers' },
      { value: '₹75,000 Crore', label: 'Market Value' },
      { value: '17.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Diagnostic Centers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Diagnostic Centers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Diagnostic Centers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'pharma-companies',
    name: 'Pharmaceutical Companies',
    category: 'Healthcare',
    icon: '💊',
    status: 'LIVE',
    subtitle: 'Pharma Formulations, OTC & PCD Franchise',
    highlightMetric: 'OTC nutraceutical digital buyers grew 280%',
    indiaMarket: '₹3.5 Lakh Crore',
    cagr: '14.8% CAGR',
    globalMarket: '$1.4 Trillion',
    overview: "India's Pharmaceutical Companies sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Pharmaceutical Companies.",
    didYouKnow: [
      '76% of prospects in Pharmaceutical Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Pharmaceutical Companies' },
      { value: '₹3.5 Lakh Crore', label: 'Market Value' },
      { value: '14.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Pharmaceutical Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Pharmaceutical Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Pharmaceutical Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'medical-equipment',
    name: 'Medical Equipment Suppliers',
    category: 'Healthcare',
    icon: '💀',
    status: 'LIVE',
    subtitle: 'Hospital Hardware & Surgical Instruments',
    highlightMetric: '84% of hospital procurement officers research online',
    indiaMarket: '₹90,000 Crore',
    cagr: '18% CAGR',
    globalMarket: '$550 Billion',
    overview: "India's Medical Equipment Suppliers sector under Healthcare is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Medical Equipment Suppliers.",
    didYouKnow: [
      '76% of prospects in Medical Equipment Suppliers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Medical Equipment Suppliers' },
      { value: '₹90,000 Crore', label: 'Market Value' },
      { value: '18% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Medical Equipment Suppliers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Medical Equipment Suppliers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Medical Equipment Suppliers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'schools',
    name: 'Schools',
    category: 'Education',
    icon: '🏫',
    status: 'LIVE',
    subtitle: 'K-12 Private Schools & Boarding Academies',
    highlightMetric: '88% of parents research school admission portals online',
    indiaMarket: '₹4.5 Lakh Crore',
    cagr: '16% CAGR',
    globalMarket: '$2.8 Trillion',
    overview: "India's Schools sector under Education is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Schools.",
    didYouKnow: [
      '76% of prospects in Schools evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Schools' },
      { value: '₹4.5 Lakh Crore', label: 'Market Value' },
      { value: '16% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Schools keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Schools.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Schools businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'colleges',
    name: 'Colleges',
    category: 'Education',
    icon: '🏛️',
    status: 'LIVE',
    subtitle: 'Degree Colleges & Technical Institutes',
    highlightMetric: '92% of prospective college students apply via digital portals',
    indiaMarket: '₹3.8 Lakh Crore',
    cagr: '18% CAGR',
    globalMarket: '$3.4 Trillion',
    overview: "India's Colleges sector under Education is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Colleges.",
    didYouKnow: [
      '76% of prospects in Colleges evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Colleges' },
      { value: '₹3.8 Lakh Crore', label: 'Market Value' },
      { value: '18% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Colleges keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Colleges.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Colleges businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'universities',
    name: 'Universities',
    category: 'Education',
    icon: '🎓',
    status: 'LIVE',
    subtitle: 'Private Universities & Online Degree Programs',
    highlightMetric: 'Online university degree enrollment grew 410%',
    indiaMarket: '₹5.2 Lakh Crore',
    cagr: '21% CAGR',
    globalMarket: '$4.1 Trillion',
    overview: "India's Universities sector under Education is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Universities.",
    didYouKnow: [
      '76% of prospects in Universities evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Universities' },
      { value: '₹5.2 Lakh Crore', label: 'Market Value' },
      { value: '21% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Universities keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Universities.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Universities businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'edtech-companies',
    name: 'EdTech Companies',
    category: 'Education',
    icon: '💻',
    status: 'LIVE',
    subtitle: 'K-12 Apps, Coding Bootcamps & Upskilling SaaS',
    highlightMetric: 'Free masterclass webinars convert 18% into paid enrollments',
    indiaMarket: '₹85,000 Crore',
    cagr: '26.5% CAGR',
    globalMarket: '$400 Billion',
    overview: "India's EdTech Companies sector under Education is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in EdTech Companies.",
    didYouKnow: [
      '76% of prospects in EdTech Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active EdTech Companies' },
      { value: '₹85,000 Crore', label: 'Market Value' },
      { value: '26.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive EdTech Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in EdTech Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can EdTech Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'coaching-institutes',
    name: 'Coaching Institutes',
    category: 'Education',
    icon: '📚',
    status: 'LIVE',
    subtitle: 'JEE, NEET, UPSC & Entrance Test Prep Academies',
    highlightMetric: 'Top ranker result posts drive 75% of coaching admissions',
    indiaMarket: '₹65,000 Crore',
    cagr: '19% CAGR',
    globalMarket: '$220 Billion',
    overview: "India's Coaching Institutes sector under Education is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Coaching Institutes.",
    didYouKnow: [
      '76% of prospects in Coaching Institutes evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Coaching Institutes' },
      { value: '₹65,000 Crore', label: 'Market Value' },
      { value: '19% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Coaching Institutes keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Coaching Institutes.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Coaching Institutes businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'property-consultants',
    name: 'Property Consultants',
    category: 'Real Estate',
    icon: '🏡',
    status: 'LIVE',
    subtitle: 'Real Estate Brokers & Channel Partners',
    highlightMetric: '79% of luxury home buyers start search on digital channels',
    indiaMarket: '₹22 Lakh Crore',
    cagr: '25.6% CAGR',
    globalMarket: '$9.6 Trillion',
    overview: "India's Property Consultants sector under Real Estate is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Property Consultants.",
    didYouKnow: [
      '76% of prospects in Property Consultants evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Property Consultants' },
      { value: '₹22 Lakh Crore', label: 'Market Value' },
      { value: '25.6% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Property Consultants keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Property Consultants.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Property Consultants businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'construction-companies',
    name: 'Construction Companies',
    category: 'Real Estate',
    icon: '🏗️',
    status: 'LIVE',
    subtitle: 'Turnkey Residential & Civil Contractors',
    highlightMetric: 'B2B turnkey construction inquiries via search up 210%',
    indiaMarket: '₹14 Lakh Crore',
    cagr: '17% CAGR',
    globalMarket: '$12.5 Trillion',
    overview: "India's Construction Companies sector under Real Estate is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Construction Companies.",
    didYouKnow: [
      '76% of prospects in Construction Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Construction Companies' },
      { value: '₹14 Lakh Crore', label: 'Market Value' },
      { value: '17% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Construction Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Construction Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Construction Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'architecture-firms',
    name: 'Architecture Firms',
    category: 'Real Estate',
    icon: '📐',
    status: 'LIVE',
    subtitle: 'Luxury Architectural & Urban Planning Studios',
    highlightMetric: '86% of luxury villa owners hire architects via Instagram',
    indiaMarket: '₹35,000 Crore',
    cagr: '21.5% CAGR',
    globalMarket: '$360 Billion',
    overview: "India's Architecture Firms sector under Real Estate is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Architecture Firms.",
    didYouKnow: [
      '76% of prospects in Architecture Firms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Architecture Firms' },
      { value: '₹35,000 Crore', label: 'Market Value' },
      { value: '21.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Architecture Firms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Architecture Firms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Architecture Firms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'interior-designers',
    name: 'Interior Designers',
    category: 'Real Estate',
    icon: '🛋️',
    status: 'LIVE',
    subtitle: 'Residential & Commercial Interior Studios',
    highlightMetric: 'Home interior searches grew 290% post possession',
    indiaMarket: '₹1.2 Lakh Crore',
    cagr: '23.8% CAGR',
    globalMarket: '$180 Billion',
    overview: "India's Interior Designers sector under Real Estate is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Interior Designers.",
    didYouKnow: [
      '76% of prospects in Interior Designers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Interior Designers' },
      { value: '₹1.2 Lakh Crore', label: 'Market Value' },
      { value: '23.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Interior Designers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Interior Designers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Interior Designers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'retail-stores',
    name: 'Retail Stores',
    category: 'E-Commerce & Retail',
    icon: '🛍️',
    status: 'LIVE',
    subtitle: 'Multi-Brand Retail Chains & Departmental Stores',
    highlightMetric: '82% of shoppers check local retail inventory online',
    indiaMarket: '₹65 Lakh Crore',
    cagr: '15% CAGR',
    globalMarket: '$28 Trillion',
    overview: "India's Retail Stores sector under E-Commerce & Retail is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Retail Stores.",
    didYouKnow: [
      '76% of prospects in Retail Stores evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Retail Stores' },
      { value: '₹65 Lakh Crore', label: 'Market Value' },
      { value: '15% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Retail Stores keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Retail Stores.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Retail Stores businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'fashion-brands',
    name: 'Fashion Brands',
    category: 'E-Commerce & Retail',
    icon: '👗',
    status: 'LIVE',
    subtitle: 'D2C Apparel & Designer Wear Brands',
    highlightMetric: 'Social commerce fashion orders grew 340%',
    indiaMarket: '₹4.8 Lakh Crore',
    cagr: '22.4% CAGR',
    globalMarket: '$1.7 Trillion',
    overview: "India's Fashion Brands sector under E-Commerce & Retail is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Fashion Brands.",
    didYouKnow: [
      '76% of prospects in Fashion Brands evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Fashion Brands' },
      { value: '₹4.8 Lakh Crore', label: 'Market Value' },
      { value: '22.4% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Fashion Brands keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Fashion Brands.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Fashion Brands businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'apparel-manufacturers',
    name: 'Apparel Manufacturers',
    category: 'E-Commerce & Retail',
    icon: '👕',
    status: 'LIVE',
    subtitle: 'Garment Exporters & B2B Textile Mills',
    highlightMetric: '75% of international buyers source garment suppliers online',
    indiaMarket: '₹12 Lakh Crore',
    cagr: '14.5% CAGR',
    globalMarket: '$1.5 Trillion',
    overview: "India's Apparel Manufacturers sector under E-Commerce & Retail is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Apparel Manufacturers.",
    didYouKnow: [
      '76% of prospects in Apparel Manufacturers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Apparel Manufacturers' },
      { value: '₹12 Lakh Crore', label: 'Market Value' },
      { value: '14.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Apparel Manufacturers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Apparel Manufacturers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Apparel Manufacturers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'jewelry-stores',
    name: 'Jewelry Stores',
    category: 'E-Commerce & Retail',
    icon: '💎',
    status: 'LIVE',
    subtitle: 'Gold, Diamond & Heritage Jewellery Showrooms',
    highlightMetric: '14.2x ROAS achieved on luxury bridal jewelry ads',
    indiaMarket: '₹5.5 Lakh Crore',
    cagr: '18.2% CAGR',
    globalMarket: '$350 Billion',
    overview: "India's Jewelry Stores sector under E-Commerce & Retail is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Jewelry Stores.",
    didYouKnow: [
      '76% of prospects in Jewelry Stores evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Jewelry Stores' },
      { value: '₹5.5 Lakh Crore', label: 'Market Value' },
      { value: '18.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Jewelry Stores keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Jewelry Stores.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Jewelry Stores businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'beauty-cosmetics',
    name: 'Beauty & Cosmetics',
    category: 'E-Commerce & Retail',
    icon: '💄',
    status: 'LIVE',
    subtitle: 'Skincare, Makeup & Personal Care D2C Brands',
    highlightMetric: 'Influencer reels drive 71% of cosmetics online purchases',
    indiaMarket: '₹1.8 Lakh Crore',
    cagr: '25% CAGR',
    globalMarket: '$570 Billion',
    overview: "India's Beauty & Cosmetics sector under E-Commerce & Retail is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Beauty & Cosmetics.",
    didYouKnow: [
      '76% of prospects in Beauty & Cosmetics evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Beauty & Cosmetics' },
      { value: '₹1.8 Lakh Crore', label: 'Market Value' },
      { value: '25% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Beauty & Cosmetics keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Beauty & Cosmetics.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Beauty & Cosmetics businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'salons',
    name: 'Salons',
    category: 'Beauty & Wellness',
    icon: '✂️',
    status: 'LIVE',
    subtitle: 'Luxury Hair & Beauty Salons',
    highlightMetric: '78% of salon appointments booked via Google & Instagram',
    indiaMarket: '₹55,000 Crore',
    cagr: '20% CAGR',
    globalMarket: '$210 Billion',
    overview: "India's Salons sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Salons.",
    didYouKnow: [
      '76% of prospects in Salons evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Salons' },
      { value: '₹55,000 Crore', label: 'Market Value' },
      { value: '20% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Salons keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Salons.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Salons businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'spas-wellness',
    name: 'Spas & Wellness',
    category: 'Beauty & Wellness',
    icon: '🧘',
    status: 'LIVE',
    subtitle: 'Day Spas, Wellness Retreats & Massage Centers',
    highlightMetric: 'Weekend spa package searches up 195%',
    indiaMarket: '₹38,000 Crore',
    cagr: '21.8% CAGR',
    globalMarket: '$180 Billion',
    overview: "India's Spas & Wellness sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Spas & Wellness.",
    didYouKnow: [
      '76% of prospects in Spas & Wellness evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Spas & Wellness' },
      { value: '₹38,000 Crore', label: 'Market Value' },
      { value: '21.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Spas & Wellness keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Spas & Wellness.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Spas & Wellness businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'fitness-centers',
    name: 'Fitness Centers',
    category: 'Beauty & Wellness',
    icon: '🏋️',
    status: 'LIVE',
    subtitle: 'CrossFit, Functional Training & Health Clubs',
    highlightMetric: '68% of gym memberships begin with trial ad clicks',
    indiaMarket: '₹28,000 Crore',
    cagr: '19% CAGR',
    globalMarket: '$100 Billion',
    overview: "India's Fitness Centers sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Fitness Centers.",
    didYouKnow: [
      '76% of prospects in Fitness Centers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Fitness Centers' },
      { value: '₹28,000 Crore', label: 'Market Value' },
      { value: '19% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Fitness Centers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Fitness Centers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Fitness Centers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'gyms',
    name: 'Gyms',
    category: 'Beauty & Wellness',
    icon: '🤼',
    status: 'LIVE',
    subtitle: 'Commercial Gyms & Personal Training Studios',
    highlightMetric: 'New year gym membership ads convert 3.5x higher',
    indiaMarket: '₹22,000 Crore',
    cagr: '18.5% CAGR',
    globalMarket: '$96 Billion',
    overview: "India's Gyms sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Gyms.",
    didYouKnow: [
      '76% of prospects in Gyms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Gyms' },
      { value: '₹22,000 Crore', label: 'Market Value' },
      { value: '18.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Gyms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Gyms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Gyms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'yoga-studios',
    name: 'Yoga Studios',
    category: 'Beauty & Wellness',
    icon: '🧘‍♀️',
    status: 'LIVE',
    subtitle: 'Hatha, Power & Online Yoga Classes',
    highlightMetric: 'Online live yoga class subscriptions grew 240%',
    indiaMarket: '₹15,000 Crore',
    cagr: '23% CAGR',
    globalMarket: '$85 Billion',
    overview: "India's Yoga Studios sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Yoga Studios.",
    didYouKnow: [
      '76% of prospects in Yoga Studios evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Yoga Studios' },
      { value: '₹15,000 Crore', label: 'Market Value' },
      { value: '23% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Yoga Studios keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Yoga Studios.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Yoga Studios businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'sports-academies',
    name: 'Sports Academies',
    category: 'Beauty & Wellness',
    icon: '⚽',
    status: 'LIVE',
    subtitle: 'Cricket, Football & Tennis Training Centers',
    highlightMetric: 'Parent sports academy inquiries up 180%',
    indiaMarket: '₹18,000 Crore',
    cagr: '17% CAGR',
    globalMarket: '$65 Billion',
    overview: "India's Sports Academies sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Sports Academies.",
    didYouKnow: [
      '76% of prospects in Sports Academies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Sports Academies' },
      { value: '₹18,000 Crore', label: 'Market Value' },
      { value: '17% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Sports Academies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Sports Academies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Sports Academies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'dermatology-clinics',
    name: 'Dermatology Clinics',
    category: 'Beauty & Wellness',
    icon: '🧖‍♀️',
    status: 'LIVE',
    subtitle: 'Skin, Laser & Hair Transplant Clinics',
    highlightMetric: 'Hair transplant searches grew 320% in India',
    indiaMarket: '₹42,000 Crore',
    cagr: '24.5% CAGR',
    globalMarket: '$140 Billion',
    overview: "India's Dermatology Clinics sector under Beauty & Wellness is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Dermatology Clinics.",
    didYouKnow: [
      '76% of prospects in Dermatology Clinics evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Dermatology Clinics' },
      { value: '₹42,000 Crore', label: 'Market Value' },
      { value: '24.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Dermatology Clinics keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Dermatology Clinics.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Dermatology Clinics businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'hotels',
    name: 'Hotels',
    category: 'Hospitality & Food',
    icon: '🏨',
    status: 'LIVE',
    subtitle: 'Boutique Hotels & Star Luxury Chains',
    highlightMetric: '85% of hotel guests book directly after site visits',
    indiaMarket: '₹2.8 Lakh Crore',
    cagr: '16.5% CAGR',
    globalMarket: '$4.7 Trillion',
    overview: "India's Hotels sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Hotels.",
    didYouKnow: [
      '76% of prospects in Hotels evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Hotels' },
      { value: '₹2.8 Lakh Crore', label: 'Market Value' },
      { value: '16.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Hotels keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Hotels.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Hotels businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'resorts',
    name: 'Resorts',
    category: 'Hospitality & Food',
    icon: '🏖️',
    status: 'LIVE',
    subtitle: 'Beach & Hill Station Destination Resorts',
    highlightMetric: 'Weekend getaway resort packages drive 60% of bookings',
    indiaMarket: '₹1.4 Lakh Crore',
    cagr: '19.2% CAGR',
    globalMarket: '$1.2 Trillion',
    overview: "India's Resorts sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Resorts.",
    didYouKnow: [
      '76% of prospects in Resorts evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Resorts' },
      { value: '₹1.4 Lakh Crore', label: 'Market Value' },
      { value: '19.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Resorts keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Resorts.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Resorts businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'homestays',
    name: 'Homestays',
    category: 'Hospitality & Food',
    icon: '🏠',
    status: 'LIVE',
    subtitle: 'Experiential Villa & Countryside Stays',
    highlightMetric: 'Homestay bookings via digital reels grew 290%',
    indiaMarket: '₹45,000 Crore',
    cagr: '22% CAGR',
    globalMarket: '$150 Billion',
    overview: "India's Homestays sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Homestays.",
    didYouKnow: [
      '76% of prospects in Homestays evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Homestays' },
      { value: '₹45,000 Crore', label: 'Market Value' },
      { value: '22% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Homestays keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Homestays.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Homestays businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    category: 'Hospitality & Food',
    icon: '🍽️',
    status: 'LIVE',
    subtitle: 'Fine Dining, Casual & Family Restaurants',
    highlightMetric: 'Google Map food reviews dictate 83% of dining picks',
    indiaMarket: '₹5.6 Lakh Crore',
    cagr: '14.8% CAGR',
    globalMarket: '$3.2 Trillion',
    overview: "India's Restaurants sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Restaurants.",
    didYouKnow: [
      '76% of prospects in Restaurants evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Restaurants' },
      { value: '₹5.6 Lakh Crore', label: 'Market Value' },
      { value: '14.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Restaurants keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Restaurants.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Restaurants businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'cafes',
    name: 'Cafes',
    category: 'Hospitality & Food',
    icon: '☕',
    status: 'LIVE',
    subtitle: 'Specialty Coffee Shops & Artisan Bakeries',
    highlightMetric: 'Instagrammable cafe reels boost footfall by 3.2x',
    indiaMarket: '₹35,000 Crore',
    cagr: '21% CAGR',
    globalMarket: '$190 Billion',
    overview: "India's Cafes sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Cafes.",
    didYouKnow: [
      '76% of prospects in Cafes evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Cafes' },
      { value: '₹35,000 Crore', label: 'Market Value' },
      { value: '21% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Cafes keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Cafes.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Cafes businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'cloud-kitchens',
    name: 'Cloud Kitchens',
    category: 'Hospitality & Food',
    icon: '📦',
    status: 'LIVE',
    subtitle: 'Delivery-Only QSR Brands',
    highlightMetric: 'Direct Swiggy/Zomato & WhatsApp ordering up 350%',
    indiaMarket: '₹62,000 Crore',
    cagr: '28.5% CAGR',
    globalMarket: '$110 Billion',
    overview: "India's Cloud Kitchens sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Cloud Kitchens.",
    didYouKnow: [
      '76% of prospects in Cloud Kitchens evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Cloud Kitchens' },
      { value: '₹62,000 Crore', label: 'Market Value' },
      { value: '28.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Cloud Kitchens keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Cloud Kitchens.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Cloud Kitchens businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'catering-services',
    name: 'Catering Services',
    category: 'Hospitality & Food',
    icon: '🍱',
    status: 'LIVE',
    subtitle: 'Wedding & Corporate Outdoor Catering',
    highlightMetric: 'Wedding catering leads grow 4x during festive months',
    indiaMarket: '₹88,000 Crore',
    cagr: '15.5% CAGR',
    globalMarket: '$240 Billion',
    overview: "India's Catering Services sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Catering Services.",
    didYouKnow: [
      '76% of prospects in Catering Services evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Catering Services' },
      { value: '₹88,000 Crore', label: 'Market Value' },
      { value: '15.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Catering Services keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Catering Services.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Catering Services businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'bakeries',
    name: 'Bakeries',
    category: 'Hospitality & Food',
    icon: '🥐',
    status: 'LIVE',
    subtitle: 'Gourmet Pastry & Custom Cake Shops',
    highlightMetric: 'Custom anniversary cake pre-orders up 210%',
    indiaMarket: '₹25,000 Crore',
    cagr: '18% CAGR',
    globalMarket: '$120 Billion',
    overview: "India's Bakeries sector under Hospitality & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Bakeries.",
    didYouKnow: [
      '76% of prospects in Bakeries evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Bakeries' },
      { value: '₹25,000 Crore', label: 'Market Value' },
      { value: '18% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Bakeries keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Bakeries.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Bakeries businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'travel-agencies',
    name: 'Travel Agencies',
    category: 'Travel & Events',
    icon: '✈️',
    status: 'LIVE',
    subtitle: 'International & Domestic Tour Packages',
    highlightMetric: '76% of holidaymakers book packages online',
    indiaMarket: '₹1.9 Lakh Crore',
    cagr: '17.8% CAGR',
    globalMarket: '$1.8 Trillion',
    overview: "India's Travel Agencies sector under Travel & Events is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Travel Agencies.",
    didYouKnow: [
      '76% of prospects in Travel Agencies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Travel Agencies' },
      { value: '₹1.9 Lakh Crore', label: 'Market Value' },
      { value: '17.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Travel Agencies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Travel Agencies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Travel Agencies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'tour-operators',
    name: 'Tour Operators',
    category: 'Travel & Events',
    icon: '🗺️',
    status: 'LIVE',
    subtitle: 'Custom Itinerary & Adventure Tour Specialists',
    highlightMetric: 'Adventure & trekking tour searches grew 230%',
    indiaMarket: '₹95,000 Crore',
    cagr: '20.2% CAGR',
    globalMarket: '$720 Billion',
    overview: "India's Tour Operators sector under Travel & Events is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Tour Operators.",
    didYouKnow: [
      '76% of prospects in Tour Operators evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Tour Operators' },
      { value: '₹95,000 Crore', label: 'Market Value' },
      { value: '20.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Tour Operators keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Tour Operators.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Tour Operators businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'event-management',
    name: 'Event Management',
    category: 'Travel & Events',
    icon: '🎪',
    status: 'LIVE',
    subtitle: 'Corporate Summits, Concerts & Expo Organizers',
    highlightMetric: 'B2B expo delegate registrations up 180%',
    indiaMarket: '₹1.1 Lakh Crore',
    cagr: '16% CAGR',
    globalMarket: '$1.1 Trillion',
    overview: "India's Event Management sector under Travel & Events is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Event Management.",
    didYouKnow: [
      '76% of prospects in Event Management evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Event Management' },
      { value: '₹1.1 Lakh Crore', label: 'Market Value' },
      { value: '16% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Event Management keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Event Management.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Event Management businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'wedding-planners',
    name: 'Wedding Planners',
    category: 'Travel & Events',
    icon: '💒',
    status: 'LIVE',
    subtitle: 'Luxury Destination Wedding Management',
    highlightMetric: 'Destination wedding planning searches up 340%',
    indiaMarket: '₹1.5 Lakh Crore',
    cagr: '24% CAGR',
    globalMarket: '$300 Billion',
    overview: "India's Wedding Planners sector under Travel & Events is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Wedding Planners.",
    didYouKnow: [
      '76% of prospects in Wedding Planners evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Wedding Planners' },
      { value: '₹1.5 Lakh Crore', label: 'Market Value' },
      { value: '24% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Wedding Planners keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Wedding Planners.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Wedding Planners businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'photography-studios',
    name: 'Photography Studios',
    category: 'Travel & Events',
    icon: '📷',
    status: 'LIVE',
    subtitle: 'Pre-Wedding, Fashion & Commercial Photography',
    highlightMetric: 'Pre-wedding photoshoot reels generate 80% of bookings',
    indiaMarket: '₹28,000 Crore',
    cagr: '19% CAGR',
    globalMarket: '$90 Billion',
    overview: "India's Photography Studios sector under Travel & Events is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Photography Studios.",
    didYouKnow: [
      '76% of prospects in Photography Studios evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Photography Studios' },
      { value: '₹28,000 Crore', label: 'Market Value' },
      { value: '19% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Photography Studios keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Photography Studios.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Photography Studios businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'manufacturing-companies',
    name: 'Manufacturing Companies',
    category: 'Manufacturing & Auto',
    icon: '🏭',
    status: 'LIVE',
    subtitle: 'Heavy Machinery & OEM Component Mfgs',
    highlightMetric: '72% of B2B buyers find manufacturing vendors online',
    indiaMarket: '₹38 Lakh Crore',
    cagr: '13.5% CAGR',
    globalMarket: '$16 Trillion',
    overview: "India's Manufacturing Companies sector under Manufacturing & Auto is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Manufacturing Companies.",
    didYouKnow: [
      '76% of prospects in Manufacturing Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Manufacturing Companies' },
      { value: '₹38 Lakh Crore', label: 'Market Value' },
      { value: '13.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Manufacturing Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Manufacturing Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Manufacturing Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    category: 'Manufacturing & Auto',
    icon: '⚙️',
    status: 'LIVE',
    subtitle: 'Hydraulics, CNC Tools & Industrial Automation',
    highlightMetric: 'Google B2B Search Ads deliver 4.5x supplier inquiries',
    indiaMarket: '₹15 Lakh Crore',
    cagr: '15.2% CAGR',
    globalMarket: '$5.8 Trillion',
    overview: "India's Industrial Equipment sector under Manufacturing & Auto is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Industrial Equipment.",
    didYouKnow: [
      '76% of prospects in Industrial Equipment evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Industrial Equipment' },
      { value: '₹15 Lakh Crore', label: 'Market Value' },
      { value: '15.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Industrial Equipment keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Industrial Equipment.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Industrial Equipment businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'automobile-dealers',
    name: 'Automobile Dealers',
    category: 'Manufacturing & Auto',
    icon: '🚗',
    status: 'LIVE',
    subtitle: 'EV & Car Showroom Dealerships',
    highlightMetric: '89% of car buyers research test drives online',
    indiaMarket: '₹18 Lakh Crore',
    cagr: '18% CAGR',
    globalMarket: '$3.8 Trillion',
    overview: "India's Automobile Dealers sector under Manufacturing & Auto is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Automobile Dealers.",
    didYouKnow: [
      '76% of prospects in Automobile Dealers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Automobile Dealers' },
      { value: '₹18 Lakh Crore', label: 'Market Value' },
      { value: '18% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Automobile Dealers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Automobile Dealers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Automobile Dealers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'auto-service-centers',
    name: 'Auto Service Centers',
    category: 'Manufacturing & Auto',
    icon: '🔧',
    status: 'LIVE',
    subtitle: 'Multi-Brand Car Repair & Detailing Studios',
    highlightMetric: 'Car ceramic coating ads yield 6x ROI',
    indiaMarket: '₹65,000 Crore',
    cagr: '21% CAGR',
    globalMarket: '$420 Billion',
    overview: "India's Auto Service Centers sector under Manufacturing & Auto is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Auto Service Centers.",
    didYouKnow: [
      '76% of prospects in Auto Service Centers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Auto Service Centers' },
      { value: '₹65,000 Crore', label: 'Market Value' },
      { value: '21% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Auto Service Centers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Auto Service Centers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Auto Service Centers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'logistics-companies',
    name: 'Logistics Companies',
    category: 'Logistics & Warehousing',
    icon: '🚛',
    status: 'LIVE',
    subtitle: '3PL, Express Freight & Supply Chain Tech',
    highlightMetric: 'B2B freight shipping inquiries via search up 240%',
    indiaMarket: '₹18 Lakh Crore',
    cagr: '16.5% CAGR',
    globalMarket: '$9.8 Trillion',
    overview: "India's Logistics Companies sector under Logistics & Warehousing is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Logistics Companies.",
    didYouKnow: [
      '76% of prospects in Logistics Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Logistics Companies' },
      { value: '₹18 Lakh Crore', label: 'Market Value' },
      { value: '16.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Logistics Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Logistics Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Logistics Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'transportation-services',
    name: 'Transportation Services',
    category: 'Logistics & Warehousing',
    icon: '🚌',
    status: 'LIVE',
    subtitle: 'Fleet Management & Intercity Bus Operators',
    highlightMetric: 'Intercity bus ticket bookings via app up 310%',
    indiaMarket: '₹12 Lakh Crore',
    cagr: '15% CAGR',
    globalMarket: '$4.2 Trillion',
    overview: "India's Transportation Services sector under Logistics & Warehousing is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Transportation Services.",
    didYouKnow: [
      '76% of prospects in Transportation Services evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Transportation Services' },
      { value: '₹12 Lakh Crore', label: 'Market Value' },
      { value: '15% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Transportation Services keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Transportation Services.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Transportation Services businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'warehousing',
    name: 'Warehousing',
    category: 'Logistics & Warehousing',
    icon: '🏢',
    status: 'LIVE',
    subtitle: 'Grade-A Logistics Parks & Cold Storage',
    highlightMetric: 'Grade-A warehouse leasing searches up 280%',
    indiaMarket: '₹8.5 Lakh Crore',
    cagr: '19.8% CAGR',
    globalMarket: '$1.6 Trillion',
    overview: "India's Warehousing sector under Logistics & Warehousing is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Warehousing.",
    didYouKnow: [
      '76% of prospects in Warehousing evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Warehousing' },
      { value: '₹8.5 Lakh Crore', label: 'Market Value' },
      { value: '19.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Warehousing keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Warehousing.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Warehousing businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'banks',
    name: 'Banks',
    category: 'Finance & Legal',
    icon: '🏦',
    status: 'LIVE',
    subtitle: 'Retail Banking, Co-operative & Neo-Banks',
    highlightMetric: 'Digital banking account opens grew 380%',
    indiaMarket: '₹45 Lakh Crore',
    cagr: '14% CAGR',
    globalMarket: '$18 Trillion',
    overview: "India's Banks sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Banks.",
    didYouKnow: [
      '76% of prospects in Banks evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Banks' },
      { value: '₹45 Lakh Crore', label: 'Market Value' },
      { value: '14% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Banks keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Banks.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Banks businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'insurance-companies',
    name: 'Insurance Companies',
    category: 'Finance & Legal',
    icon: '🛡️',
    status: 'LIVE',
    subtitle: 'Health, Life & Motor Insurance Brokers',
    highlightMetric: '74% of insurance policy buyers compare quotes online',
    indiaMarket: '₹12 Lakh Crore',
    cagr: '17.5% CAGR',
    globalMarket: '$6.5 Trillion',
    overview: "India's Insurance Companies sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Insurance Companies.",
    didYouKnow: [
      '76% of prospects in Insurance Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Insurance Companies' },
      { value: '₹12 Lakh Crore', label: 'Market Value' },
      { value: '17.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Insurance Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Insurance Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Insurance Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'fintech-startups',
    name: 'FinTech Startups',
    category: 'Finance & Legal',
    icon: '📱',
    status: 'LIVE',
    subtitle: 'UPI Payment Apps, Lending & WealthTech SaaS',
    highlightMetric: 'App install campaigns drive 65% of active users',
    indiaMarket: '₹6.8 Lakh Crore',
    cagr: '28% CAGR',
    globalMarket: '$1.5 Trillion',
    overview: "India's FinTech Startups sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in FinTech Startups.",
    didYouKnow: [
      '76% of prospects in FinTech Startups evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active FinTech Startups' },
      { value: '₹6.8 Lakh Crore', label: 'Market Value' },
      { value: '28% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive FinTech Startups keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in FinTech Startups.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can FinTech Startups businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'investment-firms',
    name: 'Investment Firms',
    category: 'Finance & Legal',
    icon: '📈',
    status: 'LIVE',
    subtitle: 'Mutual Funds, PMS & Stock Advisory Services',
    highlightMetric: 'SIP investment inquiries up 290%',
    indiaMarket: '₹8.2 Lakh Crore',
    cagr: '21% CAGR',
    globalMarket: '$4.2 Trillion',
    overview: "India's Investment Firms sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Investment Firms.",
    didYouKnow: [
      '76% of prospects in Investment Firms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Investment Firms' },
      { value: '₹8.2 Lakh Crore', label: 'Market Value' },
      { value: '21% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Investment Firms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Investment Firms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Investment Firms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'accounting-firms',
    name: 'Accounting Firms',
    category: 'Finance & Legal',
    icon: '🧮',
    status: 'LIVE',
    subtitle: 'Bookkeeping, Tax & Financial Advisory Services',
    highlightMetric: 'Small business tax filing searches up 220%',
    indiaMarket: '₹42,000 Crore',
    cagr: '16.5% CAGR',
    globalMarket: '$280 Billion',
    overview: "India's Accounting Firms sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Accounting Firms.",
    didYouKnow: [
      '76% of prospects in Accounting Firms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Accounting Firms' },
      { value: '₹42,000 Crore', label: 'Market Value' },
      { value: '16.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Accounting Firms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Accounting Firms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Accounting Firms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'ca-firms',
    name: 'CA Firms',
    category: 'Finance & Legal',
    icon: '📋',
    status: 'LIVE',
    subtitle: 'Chartered Accountants & Audit Consultancy',
    highlightMetric: 'GST registration & audit inquiries via SEO up 190%',
    indiaMarket: '₹58,000 Crore',
    cagr: '15% CAGR',
    globalMarket: '$310 Billion',
    overview: "India's CA Firms sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in CA Firms.",
    didYouKnow: [
      '76% of prospects in CA Firms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active CA Firms' },
      { value: '₹58,000 Crore', label: 'Market Value' },
      { value: '15% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive CA Firms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in CA Firms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can CA Firms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'law-firms',
    name: 'Law Firms',
    category: 'Finance & Legal',
    icon: '⚖️',
    status: 'LIVE',
    subtitle: 'Corporate Law, IPR & Litigation Advocates',
    highlightMetric: 'High-net-worth legal retainer inquiries up 210%',
    indiaMarket: '₹75,000 Crore',
    cagr: '18.2% CAGR',
    globalMarket: '$480 Billion',
    overview: "India's Law Firms sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Law Firms.",
    didYouKnow: [
      '76% of prospects in Law Firms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Law Firms' },
      { value: '₹75,000 Crore', label: 'Market Value' },
      { value: '18.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Law Firms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Law Firms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Law Firms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'legal-consultants',
    name: 'Legal Consultants',
    category: 'Finance & Legal',
    icon: '📜',
    status: 'LIVE',
    subtitle: 'Trademark, FSSAI & Business License Advisory',
    highlightMetric: 'Trademark registration ads achieve 4.2x CPL efficiency',
    indiaMarket: '₹32,000 Crore',
    cagr: '20% CAGR',
    globalMarket: '$190 Billion',
    overview: "India's Legal Consultants sector under Finance & Legal is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Legal Consultants.",
    didYouKnow: [
      '76% of prospects in Legal Consultants evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Legal Consultants' },
      { value: '₹32,000 Crore', label: 'Market Value' },
      { value: '20% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Legal Consultants keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Legal Consultants.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Legal Consultants businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'it-companies',
    name: 'IT Companies',
    category: 'Technology & IT',
    icon: '💻',
    status: 'LIVE',
    subtitle: 'IT Infrastructure, Managed Services & Cloud Tech',
    highlightMetric: '78% of enterprise CIOs find IT vendors via Search',
    indiaMarket: '₹19 Lakh Crore',
    cagr: '15.8% CAGR',
    globalMarket: '$5.2 Trillion',
    overview: "India's IT Companies sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in IT Companies.",
    didYouKnow: [
      '76% of prospects in IT Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active IT Companies' },
      { value: '₹19 Lakh Crore', label: 'Market Value' },
      { value: '15.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive IT Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in IT Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can IT Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'software-development',
    name: 'Software Development',
    category: 'Technology & IT',
    icon: '👩‍💻',
    status: 'LIVE',
    subtitle: 'Custom App, Web & Enterprise Software Agencies',
    highlightMetric: 'B2B software development RFQs up 250%',
    indiaMarket: '₹12 Lakh Crore',
    cagr: '22% CAGR',
    globalMarket: '$2.4 Trillion',
    overview: "India's Software Development sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Software Development.",
    didYouKnow: [
      '76% of prospects in Software Development evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Software Development' },
      { value: '₹12 Lakh Crore', label: 'Market Value' },
      { value: '22% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Software Development keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Software Development.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Software Development businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'saas-companies',
    name: 'SaaS Companies',
    category: 'Technology & IT',
    icon: '☁️',
    status: 'LIVE',
    subtitle: 'B2B Product SaaS & Subscription Platforms',
    highlightMetric: 'Product-Led Growth (PLG) trial signups up 340%',
    indiaMarket: '₹8.5 Lakh Crore',
    cagr: '27.5% CAGR',
    globalMarket: '$900 Billion',
    overview: "India's SaaS Companies sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in SaaS Companies.",
    didYouKnow: [
      '76% of prospects in SaaS Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active SaaS Companies' },
      { value: '₹8.5 Lakh Crore', label: 'Market Value' },
      { value: '27.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive SaaS Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in SaaS Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can SaaS Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Technology & IT',
    icon: '🔒',
    status: 'LIVE',
    subtitle: 'Network Security, SOC Audit & Data Protection',
    highlightMetric: 'Ransomware audit inquiries grew 310%',
    indiaMarket: '₹4.2 Lakh Crore',
    cagr: '24% CAGR',
    globalMarket: '$350 Billion',
    overview: "India's Cybersecurity sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Cybersecurity.",
    didYouKnow: [
      '76% of prospects in Cybersecurity evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Cybersecurity' },
      { value: '₹4.2 Lakh Crore', label: 'Market Value' },
      { value: '24% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Cybersecurity keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Cybersecurity.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Cybersecurity businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'digital-marketing-agencies',
    name: 'Digital Marketing Agencies',
    category: 'Technology & IT',
    icon: '📣',
    status: 'LIVE',
    subtitle: 'SEO, PPC & Performance Marketing Studios',
    highlightMetric: 'Inbound marketing inquiries via Google up 280%',
    indiaMarket: '₹65,000 Crore',
    cagr: '25% CAGR',
    globalMarket: '$450 Billion',
    overview: "India's Digital Marketing Agencies sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Digital Marketing Agencies.",
    didYouKnow: [
      '76% of prospects in Digital Marketing Agencies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Digital Marketing Agencies' },
      { value: '₹65,000 Crore', label: 'Market Value' },
      { value: '25% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Digital Marketing Agencies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Digital Marketing Agencies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Digital Marketing Agencies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'advertising-agencies',
    name: 'Advertising Agencies',
    category: 'Technology & IT',
    icon: '📺',
    status: 'LIVE',
    subtitle: 'Brand Strategy, TVC & Creative Production',
    highlightMetric: 'Creative brand film inquiries up 190%',
    indiaMarket: '₹85,000 Crore',
    cagr: '18.5% CAGR',
    globalMarket: '$620 Billion',
    overview: "India's Advertising Agencies sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Advertising Agencies.",
    didYouKnow: [
      '76% of prospects in Advertising Agencies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Advertising Agencies' },
      { value: '₹85,000 Crore', label: 'Market Value' },
      { value: '18.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Advertising Agencies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Advertising Agencies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Advertising Agencies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'media-companies',
    name: 'Media Companies',
    category: 'Technology & IT',
    icon: '📰',
    status: 'LIVE',
    subtitle: 'Digital News, Entertainment & OTT Production',
    highlightMetric: 'Digital ad impression spend grew 320%',
    indiaMarket: '₹1.6 Lakh Crore',
    cagr: '20% CAGR',
    globalMarket: '$1.8 Trillion',
    overview: "India's Media Companies sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Media Companies.",
    didYouKnow: [
      '76% of prospects in Media Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Media Companies' },
      { value: '₹1.6 Lakh Crore', label: 'Market Value' },
      { value: '20% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Media Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Media Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Media Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'news-publishing',
    name: 'News & Publishing',
    category: 'Technology & IT',
    icon: '🗞️',
    status: 'LIVE',
    subtitle: 'Digital Newspapers, Magazines & Niche Portals',
    highlightMetric: 'Subscribers via gated content grew 240%',
    indiaMarket: '₹48,000 Crore',
    cagr: '16% CAGR',
    globalMarket: '$410 Billion',
    overview: "India's News & Publishing sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in News & Publishing.",
    didYouKnow: [
      '76% of prospects in News & Publishing evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active News & Publishing' },
      { value: '₹48,000 Crore', label: 'Market Value' },
      { value: '16% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive News & Publishing keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in News & Publishing.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can News & Publishing businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    category: 'Technology & IT',
    icon: '📡',
    status: 'LIVE',
    subtitle: '5G Telecom, Broadband & Fiber Optic Providers',
    highlightMetric: 'Fiber broadband home connection searches up 290%',
    indiaMarket: '₹4.5 Lakh Crore',
    cagr: '14% CAGR',
    globalMarket: '$2.1 Trillion',
    overview: "India's Telecommunications sector under Technology & IT is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Telecommunications.",
    didYouKnow: [
      '76% of prospects in Telecommunications evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Telecommunications' },
      { value: '₹4.5 Lakh Crore', label: 'Market Value' },
      { value: '14% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Telecommunications keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Telecommunications.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Telecommunications businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'ngos',
    name: 'NGOs',
    category: 'NGO & Government',
    icon: '🌿',
    status: 'LIVE',
    subtitle: 'Environmental & Social Welfare NGOs',
    highlightMetric: 'Online donation campaign trust up 210%',
    indiaMarket: '₹45,000 Crore',
    cagr: '17% CAGR',
    globalMarket: '$380 Billion',
    overview: "India's NGOs sector under NGO & Government is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in NGOs.",
    didYouKnow: [
      '76% of prospects in NGOs evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active NGOs' },
      { value: '₹45,000 Crore', label: 'Market Value' },
      { value: '17% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive NGOs keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in NGOs.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can NGOs businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'non-profit-orgs',
    name: 'Non-Profit Organizations',
    category: 'NGO & Government',
    icon: '💖',
    status: 'LIVE',
    subtitle: 'Healthcare & Education Non-Profits',
    highlightMetric: 'Digital fundraising campaigns yield 4.8x ROI',
    indiaMarket: '₹62,000 Crore',
    cagr: '18.5% CAGR',
    globalMarket: '$520 Billion',
    overview: "India's Non-Profit Organizations sector under NGO & Government is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Non-Profit Organizations.",
    didYouKnow: [
      '76% of prospects in Non-Profit Organizations evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Non-Profit Organizations' },
      { value: '₹62,000 Crore', label: 'Market Value' },
      { value: '18.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Non-Profit Organizations keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Non-Profit Organizations.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Non-Profit Organizations businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'government-contractors',
    name: 'Government Contractors',
    category: 'NGO & Government',
    icon: '🏛️',
    status: 'LIVE',
    subtitle: 'Smart City, Highway & Infrastructure Bidders',
    highlightMetric: 'Tender bidding intelligence searches up 180%',
    indiaMarket: '₹15 Lakh Crore',
    cagr: '15% CAGR',
    globalMarket: '$4.8 Trillion',
    overview: "India's Government Contractors sector under NGO & Government is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Government Contractors.",
    didYouKnow: [
      '76% of prospects in Government Contractors evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Government Contractors' },
      { value: '₹15 Lakh Crore', label: 'Market Value' },
      { value: '15% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Government Contractors keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Government Contractors.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Government Contractors businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    category: 'Energy & Electronics',
    icon: '🌱',
    status: 'LIVE',
    subtitle: 'Wind, Biomass & Clean Tech Systems',
    highlightMetric: 'Clean energy investment leads up 310%',
    indiaMarket: '₹3.2 Lakh Crore',
    cagr: '26% CAGR',
    globalMarket: '$1.2 Trillion',
    overview: "India's Renewable Energy sector under Energy & Electronics is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Renewable Energy.",
    didYouKnow: [
      '76% of prospects in Renewable Energy evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Renewable Energy' },
      { value: '₹3.2 Lakh Crore', label: 'Market Value' },
      { value: '26% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Renewable Energy keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Renewable Energy.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Renewable Energy businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'solar-companies',
    name: 'Solar Companies',
    category: 'Energy & Electronics',
    icon: '☀️',
    status: 'LIVE',
    subtitle: 'Rooftop Solar EPC & Solar Panel Distributors',
    highlightMetric: 'Rooftop solar installation inquiries up 420%',
    indiaMarket: '₹1.8 Lakh Crore',
    cagr: '31% CAGR',
    globalMarket: '$650 Billion',
    overview: "India's Solar Companies sector under Energy & Electronics is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Solar Companies.",
    didYouKnow: [
      '76% of prospects in Solar Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Solar Companies' },
      { value: '₹1.8 Lakh Crore', label: 'Market Value' },
      { value: '31% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Solar Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Solar Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Solar Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'electrical-contractors',
    name: 'Electrical Contractors',
    category: 'Energy & Electronics',
    icon: '⚡',
    status: 'LIVE',
    subtitle: 'High-Voltage Wiring & Substation Engineers',
    highlightMetric: 'Industrial electrical EPC leads up 190%',
    indiaMarket: '₹85,000 Crore',
    cagr: '16.5% CAGR',
    globalMarket: '$420 Billion',
    overview: "India's Electrical Contractors sector under Energy & Electronics is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Electrical Contractors.",
    didYouKnow: [
      '76% of prospects in Electrical Contractors evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Electrical Contractors' },
      { value: '₹85,000 Crore', label: 'Market Value' },
      { value: '16.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Electrical Contractors keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Electrical Contractors.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Electrical Contractors businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'electronics-manufacturers',
    name: 'Electronics Manufacturers',
    category: 'Energy & Electronics',
    icon: '🔌',
    status: 'LIVE',
    subtitle: 'Semiconductors, PCBs & Consumer Tech Mfgs',
    highlightMetric: 'Electronics EMS manufacturing RFQs up 270%',
    indiaMarket: '₹8.5 Lakh Crore',
    cagr: '23.4% CAGR',
    globalMarket: '$2.8 Trillion',
    overview: "India's Electronics Manufacturers sector under Energy & Electronics is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Electronics Manufacturers.",
    didYouKnow: [
      '76% of prospects in Electronics Manufacturers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Electronics Manufacturers' },
      { value: '₹8.5 Lakh Crore', label: 'Market Value' },
      { value: '23.4% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Electronics Manufacturers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Electronics Manufacturers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Electronics Manufacturers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'home-services',
    name: 'Home Services',
    category: 'Home Services',
    icon: '🏠',
    status: 'LIVE',
    subtitle: 'Electricians, Plumbers & Appliance Repair',
    highlightMetric: 'Local home repair bookings via app up 340%',
    indiaMarket: '₹88,000 Crore',
    cagr: '24% CAGR',
    globalMarket: '$650 Billion',
    overview: "India's Home Services sector under Home Services is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Home Services.",
    didYouKnow: [
      '76% of prospects in Home Services evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Home Services' },
      { value: '₹88,000 Crore', label: 'Market Value' },
      { value: '24% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Home Services keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Home Services.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Home Services businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'cleaning-services',
    name: 'Cleaning Services',
    category: 'Home Services',
    icon: '🧹',
    status: 'LIVE',
    subtitle: 'Deep Cleaning & Facility Management',
    highlightMetric: 'Deep home cleaning bookings up 280%',
    indiaMarket: '₹32,000 Crore',
    cagr: '22.5% CAGR',
    globalMarket: '$280 Billion',
    overview: "India's Cleaning Services sector under Home Services is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Cleaning Services.",
    didYouKnow: [
      '76% of prospects in Cleaning Services evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Cleaning Services' },
      { value: '₹32,000 Crore', label: 'Market Value' },
      { value: '22.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Cleaning Services keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Cleaning Services.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Cleaning Services businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    category: 'Home Services',
    icon: '🐛',
    status: 'LIVE',
    subtitle: 'Termite, Bed Bug & Commercial Disinfection',
    highlightMetric: 'Pest control service inquiries via GMB up 210%',
    indiaMarket: '₹24,000 Crore',
    cagr: '19% CAGR',
    globalMarket: '$190 Billion',
    overview: "India's Pest Control sector under Home Services is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Pest Control.",
    didYouKnow: [
      '76% of prospects in Pest Control evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Pest Control' },
      { value: '₹24,000 Crore', label: 'Market Value' },
      { value: '19% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Pest Control keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Pest Control.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Pest Control businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'security-services',
    name: 'Security Services',
    category: 'Home Services',
    icon: '🛡️',
    status: 'LIVE',
    subtitle: 'Manned Guarding & Facility Security',
    highlightMetric: 'Commercial security guard RFQs up 185%',
    indiaMarket: '₹65,000 Crore',
    cagr: '17% CAGR',
    globalMarket: '$410 Billion',
    overview: "India's Security Services sector under Home Services is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Security Services.",
    didYouKnow: [
      '76% of prospects in Security Services evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Security Services' },
      { value: '₹65,000 Crore', label: 'Market Value' },
      { value: '17% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Security Services keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Security Services.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Security Services businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'recruitment-agencies',
    name: 'Recruitment Agencies',
    category: 'HR & Consulting',
    icon: '👥',
    status: 'LIVE',
    subtitle: 'Executive Search & Placement Agencies',
    highlightMetric: 'Corporate hiring recruitment RFQs up 230%',
    indiaMarket: '₹58,000 Crore',
    cagr: '18% CAGR',
    globalMarket: '$580 Billion',
    overview: "India's Recruitment Agencies sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Recruitment Agencies.",
    didYouKnow: [
      '76% of prospects in Recruitment Agencies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Recruitment Agencies' },
      { value: '₹58,000 Crore', label: 'Market Value' },
      { value: '18% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Recruitment Agencies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Recruitment Agencies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Recruitment Agencies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'hr-consulting',
    name: 'HR Consulting',
    category: 'HR & Consulting',
    icon: '📊',
    status: 'LIVE',
    subtitle: 'Payroll, Compliance & Corporate Training',
    highlightMetric: 'HR compliance audit inquiries up 190%',
    indiaMarket: '₹42,000 Crore',
    cagr: '17.5% CAGR',
    globalMarket: '$340 Billion',
    overview: "India's HR Consulting sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in HR Consulting.",
    didYouKnow: [
      '76% of prospects in HR Consulting evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active HR Consulting' },
      { value: '₹42,000 Crore', label: 'Market Value' },
      { value: '17.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive HR Consulting keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in HR Consulting.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can HR Consulting businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'staffing-companies',
    name: 'Staffing Companies',
    category: 'HR & Consulting',
    icon: '🤝',
    status: 'LIVE',
    subtitle: 'Temporary & Flexi Staffing Providers',
    highlightMetric: 'Flexi staffing demand grew 290%',
    indiaMarket: '₹72,000 Crore',
    cagr: '21% CAGR',
    globalMarket: '$490 Billion',
    overview: "India's Staffing Companies sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Staffing Companies.",
    didYouKnow: [
      '76% of prospects in Staffing Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Staffing Companies' },
      { value: '₹72,000 Crore', label: 'Market Value' },
      { value: '21% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Staffing Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Staffing Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Staffing Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'business-consultants',
    name: 'Business Consultants',
    category: 'HR & Consulting',
    icon: '💼',
    status: 'LIVE',
    subtitle: 'Management, SME Advisory & Growth Mentors',
    highlightMetric: 'SME business scaling consultancy leads up 210%',
    indiaMarket: '₹95,000 Crore',
    cagr: '19.2% CAGR',
    globalMarket: '$890 Billion',
    overview: "India's Business Consultants sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Business Consultants.",
    didYouKnow: [
      '76% of prospects in Business Consultants evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Business Consultants' },
      { value: '₹95,000 Crore', label: 'Market Value' },
      { value: '19.2% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Business Consultants keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Business Consultants.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Business Consultants businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'bpo-companies',
    name: 'BPO Companies',
    category: 'HR & Consulting',
    icon: '🎧',
    status: 'LIVE',
    subtitle: 'Voice & Non-Voice Outsourcing Services',
    highlightMetric: 'International BPO client contracts up 180%',
    indiaMarket: '₹2.8 Lakh Crore',
    cagr: '14.5% CAGR',
    globalMarket: '$260 Billion',
    overview: "India's BPO Companies sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in BPO Companies.",
    didYouKnow: [
      '76% of prospects in BPO Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active BPO Companies' },
      { value: '₹2.8 Lakh Crore', label: 'Market Value' },
      { value: '14.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive BPO Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in BPO Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can BPO Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'call-centers',
    name: 'Call Centers',
    category: 'HR & Consulting',
    icon: '📞',
    status: 'LIVE',
    subtitle: 'Customer Support & Tele-sales Centers',
    highlightMetric: 'Inbound call center contracts up 165%',
    indiaMarket: '₹1.5 Lakh Crore',
    cagr: '13.8% CAGR',
    globalMarket: '$190 Billion',
    overview: "India's Call Centers sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Call Centers.",
    didYouKnow: [
      '76% of prospects in Call Centers evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Call Centers' },
      { value: '₹1.5 Lakh Crore', label: 'Market Value' },
      { value: '13.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Call Centers keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Call Centers.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Call Centers businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'franchise-businesses',
    name: 'Franchise Businesses',
    category: 'HR & Consulting',
    icon: '🏪',
    status: 'LIVE',
    subtitle: 'Food, Retail & Education Franchise Sales',
    highlightMetric: 'Franchisee lead generation ads yield 5.2x ROI',
    indiaMarket: '₹3.5 Lakh Crore',
    cagr: '25% CAGR',
    globalMarket: '$1.1 Trillion',
    overview: "India's Franchise Businesses sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Franchise Businesses.",
    didYouKnow: [
      '76% of prospects in Franchise Businesses evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Franchise Businesses' },
      { value: '₹3.5 Lakh Crore', label: 'Market Value' },
      { value: '25% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Franchise Businesses keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Franchise Businesses.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Franchise Businesses businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'management-consulting',
    name: 'Management Consulting',
    category: 'HR & Consulting',
    icon: '📈',
    status: 'LIVE',
    subtitle: 'Strategy & Organizational Excellence',
    highlightMetric: 'Executive transformation advisory leads up 200%',
    indiaMarket: '₹1.1 Lakh Crore',
    cagr: '16.8% CAGR',
    globalMarket: '$980 Billion',
    overview: "India's Management Consulting sector under HR & Consulting is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Management Consulting.",
    didYouKnow: [
      '76% of prospects in Management Consulting evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Management Consulting' },
      { value: '₹1.1 Lakh Crore', label: 'Market Value' },
      { value: '16.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Management Consulting keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Management Consulting.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Management Consulting businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'agriculture-companies',
    name: 'Agriculture Companies',
    category: 'Agriculture & Food',
    icon: '🌾',
    status: 'LIVE',
    subtitle: 'Agri-Inputs, Seeds & Fertilizer Distributors',
    highlightMetric: 'Digital farmer advisory app adoption up 350%',
    indiaMarket: '₹12 Lakh Crore',
    cagr: '15.5% CAGR',
    globalMarket: '$3.5 Trillion',
    overview: "India's Agriculture Companies sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Agriculture Companies.",
    didYouKnow: [
      '76% of prospects in Agriculture Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Agriculture Companies' },
      { value: '₹12 Lakh Crore', label: 'Market Value' },
      { value: '15.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Agriculture Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Agriculture Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Agriculture Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'dairy-farms',
    name: 'Dairy Farms',
    category: 'Agriculture & Food',
    icon: '🐄',
    status: 'LIVE',
    subtitle: 'A2 Milk, Ghee & Organic Dairy Brands',
    highlightMetric: 'D2C organic A2 milk subscriptions up 310%',
    indiaMarket: '₹14 Lakh Crore',
    cagr: '16% CAGR',
    globalMarket: '$890 Billion',
    overview: "India's Dairy Farms sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Dairy Farms.",
    didYouKnow: [
      '76% of prospects in Dairy Farms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Dairy Farms' },
      { value: '₹14 Lakh Crore', label: 'Market Value' },
      { value: '16% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Dairy Farms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Dairy Farms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Dairy Farms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'poultry-farms',
    name: 'Poultry Farms',
    category: 'Agriculture & Food',
    icon: '🐔',
    status: 'LIVE',
    subtitle: 'Egg & Fresh Meat Delivery Brands',
    highlightMetric: 'Fresh meat delivery app orders grew 280%',
    indiaMarket: '₹2.2 Lakh Crore',
    cagr: '17.8% CAGR',
    globalMarket: '$340 Billion',
    overview: "India's Poultry Farms sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Poultry Farms.",
    didYouKnow: [
      '76% of prospects in Poultry Farms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Poultry Farms' },
      { value: '₹2.2 Lakh Crore', label: 'Market Value' },
      { value: '17.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Poultry Farms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Poultry Farms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Poultry Farms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    category: 'Agriculture & Food',
    icon: '🥫',
    status: 'LIVE',
    subtitle: 'Packaged Foods & Ready-to-Eat Brands',
    highlightMetric: 'Packaged snack D2C sales grew 290%',
    indiaMarket: '₹24 Lakh Crore',
    cagr: '18.5% CAGR',
    globalMarket: '$4.2 Trillion',
    overview: "India's Food Processing sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Food Processing.",
    didYouKnow: [
      '76% of prospects in Food Processing evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Food Processing' },
      { value: '₹24 Lakh Crore', label: 'Market Value' },
      { value: '18.5% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Food Processing keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Food Processing.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Food Processing businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'chemical-companies',
    name: 'Chemical Companies',
    category: 'Agriculture & Food',
    icon: '🧪',
    status: 'LIVE',
    subtitle: 'Specialty Chemicals & Industrial Solvents',
    highlightMetric: 'B2B specialty chemical inquiries up 210%',
    indiaMarket: '₹16 Lakh Crore',
    cagr: '14.8% CAGR',
    globalMarket: '$5.1 Trillion',
    overview: "India's Chemical Companies sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Chemical Companies.",
    didYouKnow: [
      '76% of prospects in Chemical Companies evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Chemical Companies' },
      { value: '₹16 Lakh Crore', label: 'Market Value' },
      { value: '14.8% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Chemical Companies keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Chemical Companies.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Chemical Companies businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  },
  {
    id: 'organic-farms',
    name: 'Organic Farms',
    category: 'Agriculture & Food',
    icon: '🚜',
    status: 'LIVE',
    subtitle: 'Farm-to-Table Fresh Produce & Hydroponics',
    highlightMetric: 'Hydroponics organic produce orders up 380%',
    indiaMarket: '₹28,000 Crore',
    cagr: '26% CAGR',
    globalMarket: '$180 Billion',
    overview: "India's Organic Farms sector under Agriculture & Food is undergoing massive digital transformation. With expanding market demand and evolving buyer research behaviors, digital marketing has become the principal growth engine for customer acquisition, brand authority, and revenue scaling in Organic Farms.",
    didYouKnow: [
      '76% of prospects in Organic Farms evaluate service providers online before placing orders.',
      'Companies with 100+ 5-star Google reviews achieve 3.4x higher conversion rates.',
      'Short-form video demonstrations increase customer engagement by 4x.',
      'Automated WhatsApp booking response workflows reduce drop-off rates by 55%.'
    ],
    metrics: [
      { value: '100K+', label: 'Active Organic Farms' },
      { value: '₹28,000 Crore', label: 'Market Value' },
      { value: '26% CAGR', label: 'Annual CAGR' },
      { value: '76%', label: 'Online Research Rate' },
      { value: '3.4x', label: 'Review Conversion Lift' },
      { value: '55%', label: 'WhatsApp Response Lift' }
    ],
    challenges: [
      { title: 'Customer Acquisition Cost (CAC)', desc: 'Rising CPC on search & social channels for competitive Organic Farms keywords.' },
      { title: 'Local Brand Differentiation', desc: 'Standing out against established local competitors without dropping margins.' }
    ],
    services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'Dominate top Google rankings for high-intent buying keywords in Organic Farms.' },
      { name: 'Performance Ad Campaigns', desc: 'High-ROI Meta & Google Ads designed to deliver verified customer inquiries.' },
      { name: 'WhatsApp CRM Automation', desc: 'Instant automated lead qualification, appointment booking, and review collection.' }
    ],
    faqs: [
      { question: 'How quickly can Organic Farms businesses see growth?', answer: 'Performance ads deliver immediate client inquiries within 24 to 48 hours, while SEO establishes long-term market dominance.' },
      { question: 'Is the strategy customized for my brand?', answer: 'Yes, we create bespoke growth playbooks tailored specifically for your target audience and budget.' }
    ]
  }
];

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeHubIndustry, setActiveHubIndustry] = useState<IndustryItem | null>(null);
  const [activeHubTab, setActiveHubTab] = useState<string>('Overview');

  const filteredIndustries = useMemo(() => {
    return all89IndustriesList.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#F0F4F8', color: '#1F2937', minHeight: '100vh', padding: '2.5rem 0 6rem 0' }}>
      <div className="container">
        
        {/* BREADCRUMB */}
        <div style={{ fontSize: '0.825rem', color: '#64748B', marginBottom: '2rem' }}>
          <span style={{ cursor: 'pointer', color: '#0F172A', fontWeight: 600 }} onClick={() => onNavigate('home')}>Home</span> › <span style={{ color: '#64748B', fontWeight: 600 }}>Industries</span>
        </div>

        {/* HEADER SECTION - UNIQUE PREMIUM DIGITAL DIGIX COPY */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 2.5rem auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            <span style={{ width: '35px', height: '1.5px', background: '#3B82F6' }}></span>
            <span>INDUSTRY-SPECIFIC GROWTH ENGINES</span>
            <span style={{ width: '35px', height: '1.5px', background: '#3B82F6' }}></span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            89 Sectors Scaled. Zero Generic Marketing.
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Every niche has its own rules. Explore our 89 dedicated authority hubs powered by real Indian market intelligence, verified acquisition funnels, and battle-tested digital playbooks.
          </p>
        </div>

        {/* CAPSULE SEARCH BAR */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.75rem',
                borderRadius: '999px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                fontSize: '0.925rem',
                color: '#1F2937',
                outline: 'none',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.25s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
            />
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            maxWidth: '1100px',
            margin: '0 auto 2.25rem auto'
          }}
        >
          {industryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid #0F172A' : '1px solid #E2E8F0',
                  borderRadius: '999px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 800 : 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* COUNTER SUBTEXT */}
        <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          {filteredIndustries.length} INDUSTRIES SHOWN
        </div>

        {/* 5-COLUMN GRID OF INDUSTRY CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredIndustries.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveHubIndustry(item);
                setActiveHubTab('Overview');
              }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.25rem 1.1rem',
                border: '1px solid #F1F5F9',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, boxShadow 0.25s ease, borderColor 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#FDE68A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#F1F5F9';
              }}
            >
              {/* TOP ROW: ICON ON LEFT, LIVE BADGE ON RIGHT */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{item.icon}</span>
                <span
                  style={{
                    backgroundColor: '#E0B56C',
                    color: '#FFFFFF',
                    fontSize: '0.625rem',
                    fontWeight: 900,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '6px',
                    letterSpacing: '0.05em'
                  }}
                >
                  LIVE
                </span>
              </div>

              {/* INDUSTRY NAME */}
              <h3
                style={{
                  fontFamily: 'Outfit, serif',
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: '#0F172A',
                  marginBottom: '0.2rem',
                  lineHeight: 1.3
                }}
              >
                {item.name}
              </h3>

              {/* CATEGORY SUBTEXT */}
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, marginBottom: '1rem' }}>
                {item.category}
              </div>

              {/* EXPLORE LINK AT BOTTOM LEFT */}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#3B82F6', fontSize: '0.78rem', fontWeight: 800 }}>
                <span>Explore</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL DETAILED INDUSTRY HUB MODAL MATCHING USER SCREENSHOTS 1 & 2 EXACTLY */}
      {activeHubIndustry && (
        <div className="modal-overlay" onClick={() => setActiveHubIndustry(null)}>
          <div
            className="modal-card"
            style={{
              maxWidth: '1080px',
              width: '95%',
              padding: '2rem',
              backgroundColor: '#F0F4F8',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                <span style={{ cursor: 'pointer', color: '#0F172A', fontWeight: 600 }} onClick={() => setActiveHubIndustry(null)}>Industries</span> › <span style={{ color: '#3B82F6', fontWeight: 700 }}>{activeHubIndustry.name} Hub</span>
              </div>
              <button
                onClick={() => setActiveHubIndustry(null)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0F172A'
                }}
              >
                ✕
              </button>
            </div>

            {/* 1. TOP HEADER BANNER MATCHING SCREENSHOT 1 EXACTLY */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem 2.5rem',
                borderTop: '4px solid #3B82F6',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)',
                marginBottom: '1.5rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '3rem', lineHeight: 1, backgroundColor: '#FAF6EE', padding: '0.85rem', borderRadius: '20px', border: '1px solid #EFE4D2' }}>
                    {activeHubIndustry.icon}
                  </div>
                  <div>
                    {/* TOP STAT PILLS */}
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                      <span style={{ backgroundColor: '#FCEFEF', color: '#991B1B', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                        {activeHubIndustry.indiaMarket}
                      </span>
                      <span style={{ backgroundColor: '#FEF9C3', color: '#854D0E', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                        {activeHubIndustry.cagr}
                      </span>
                      <span style={{ backgroundColor: '#DCFCE7', color: '#166534', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                        {activeHubIndustry.globalMarket}
                      </span>
                    </div>

                    <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.1 }}>
                      {activeHubIndustry.name}
                    </h1>

                    <p style={{ fontSize: '1rem', color: '#64748B', margin: '0.35rem 0 0.6rem 0' }}>
                      {activeHubIndustry.subtitle}
                    </p>

                    <div style={{ fontSize: '0.875rem', color: '#991B1B', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>◆</span>
                      <span>{activeHubIndustry.highlightMetric}</span>
                    </div>
                  </div>
                </div>

                {/* REQUEST STRATEGY BUTTON VIA WHATSAPP (ANIMATED & PULSING) */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta-animated"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#FFFFFF',
                    padding: '0.9rem 2rem',
                    borderRadius: '999px',
                    fontWeight: 900,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    letterSpacing: '0.01em'
                  }}
                >
                  Request Strategy on WhatsApp 💬 ➔
                </a>
              </div>
            </div>

            {/* 2. SEO META INFO CARD MATCHING SCREENSHOT 1 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1rem 1.5rem',
                border: '1px solid #E2E8F0',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                {activeHubIndustry.category} Digital Marketing – Client & Revenue Growth for {activeHubIndustry.name} | Digital Digix
              </div>
              <div style={{ fontSize: '0.825rem', color: '#64748B' }}>
                Digital marketing for {activeHubIndustry.name.toLowerCase()}: attract new clients, build local market trust online with tailored SEO, PPC & social media strategies by Digital Digix.
              </div>
            </div>

            {/* 3. NAVIGATION TABS BAR - RESPONSIVE FLEX WRAPPING & TOUCH SCROLL */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingBottom: '0.5rem', marginBottom: '1.75rem' }}>
              {['Overview', 'Market Stats', 'Challenges', 'Services', 'Benefits & ROI', 'Blog Library', 'FAQs', 'Success Metrics'].map((tab) => {
                const isActive = activeHubTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveHubTab(tab)}
                    style={{
                      backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      borderRadius: '999px',
                      padding: '0.5rem 1.25rem',
                      fontSize: '0.825rem',
                      fontWeight: isActive ? 800 : 600,
                      border: '1px solid #E2E8F0',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      boxShadow: isActive ? '0 4px 12px rgba(15,23,42,0.15)' : '0 2px 5px rgba(0,0,0,0.02)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT PANELS */}
            {activeHubTab === 'Overview' && (
              <>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '2.25rem',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    marginBottom: '1.75rem'
                  }}
                >
                  <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>
                    Industry Overview — {activeHubIndustry.name}
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                    {activeHubIndustry.overview}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#FDFBF7',
                    borderRadius: '20px',
                    padding: '1.75rem',
                    border: '1px solid #F3EFE6',
                    marginBottom: '1.75rem'
                  }}
                >
                  <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.3rem', fontWeight: 900, color: '#991B1B', marginBottom: '1.25rem' }}>
                    Did You Know? ({activeHubIndustry.name} Market Insights)
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    {activeHubIndustry.didYouKnow.map((fact, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '14px',
                          padding: '1.25rem',
                          borderLeft: '4px solid #3B82F6',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                          fontSize: '0.875rem',
                          color: '#334155',
                          lineHeight: 1.5,
                          fontWeight: 600
                        }}
                      >
                        {fact}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeHubTab === 'Market Stats' && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Market Size & Opportunity ({activeHubIndustry.name})
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
                  {activeHubIndustry.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '18px',
                        padding: '1.25rem 0.85rem',
                        textAlign: 'center',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.03)'
                      }}
                    >
                      <div style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#3B82F6', marginBottom: '0.2rem' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeHubTab === 'Challenges' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Core Growth Challenges in {activeHubIndustry.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {activeHubIndustry.challenges.map((c, cIdx) => (
                    <div key={cIdx} style={{ background: '#FFF5F5', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #EF4444' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#991B1B', marginBottom: '0.4rem' }}>{c.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6 CORE TAILORED SERVICE CARDS WITH ORANGE TOP BORDER, HOVER ANIMATION & WHATSAPP POP-UP MATCHING USER SCREENSHOT */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
                  6 Tailored Growth Engines for {activeHubIndustry.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>
                  Click any service card for an instant strategy breakdown & WhatsApp proposal for {activeHubIndustry.name}
                </p>
              </div>

              <div className="responsive-3-grid" style={{ gap: '1.5rem' }}>
                
                {/* CARD 1: SEO */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔍</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Search Engine Optimisation (SEO)
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Rank your {activeHubIndustry.name} business at the top of Google and capture high-intent local searches.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request SEO Strategy on WhatsApp 💬 ➔
                  </div>
                </a>

                {/* CARD 2: GOOGLE ADS */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎯</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Google Ads (PPC)
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    High-intent Search, Display & YouTube campaigns engineered for ROI in the {activeHubIndustry.name} market.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request Google Ads Plan on WhatsApp 💬 ➔
                  </div>
                </a>

                {/* CARD 3: META ADS */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📱</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Meta Ads (Facebook & Instagram)
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Targeted social campaigns that turn {activeHubIndustry.name} audiences into real leads.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request Meta Ads Plan on WhatsApp 💬 ➔
                  </div>
                </a>

                {/* CARD 4: SOCIAL MEDIA MARKETING */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📣</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Social Media Marketing
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Content, reels and community management that grow your {activeHubIndustry.name} brand.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request SMM Proposal on WhatsApp 💬 ➔
                  </div>
                </a>

                {/* CARD 5: WEBSITE DESIGN & DEVELOPMENT */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💻</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Website Design & Development
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Fast, SEO-ready, mobile-first websites built to convert {activeHubIndustry.name} visitors.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request Website Quote on WhatsApp 💬 ➔
                  </div>
                </a>

                {/* CARD 6: GRAPHIC DESIGN & BRANDING */}
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industry-service-card-animated"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.75rem 1.5rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎨</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Graphic Design & Branding
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Posters, logos, packaging and brand identity — from ₹150 per design.
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27' }}>
                    Request Graphic Design Pricing on WhatsApp 💬 ➔
                  </div>
                </a>

              </div>
            </div>

            {activeHubTab === 'Services' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Tailored Digital Marketing Solutions for {activeHubIndustry.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {activeHubIndustry.services.map((s, sIdx) => (
                    <div key={sIdx} style={{ background: '#ECFDF5', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #10B981' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#065F46', marginBottom: '0.4rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeHubTab === 'Benefits & ROI' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Expected ROI & Revenue Impact for {activeHubIndustry.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #3B82F6', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#3B82F6' }}>+340%</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Inbound Inquiry Growth</div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #10B981', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#10B981' }}>-45%</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>CAC Reduction</div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #8B5CF6', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#8B5CF6' }}>3.4x</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Review Conversion Lift</div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #F59E0B', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#F59E0B' }}>98%</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.3rem' }}>Client Campaign Retention</div>
                  </div>
                </div>
              </div>
            )}

            {activeHubTab === 'Blog Library' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  {activeHubIndustry.name} Industry Growth Guides & Articles
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <span style={{ fontSize: '0.725rem', color: '#FF4E27', fontWeight: 800, textTransform: 'uppercase' }}>CASE STUDY</span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0.4rem 0 0.5rem 0' }}>How Digital Marketing Transformed {activeHubIndustry.name} in 2026</h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>Proven blueprint for scaling customer acquisition and brand authority online.</p>
                  </div>
                  <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                    <span style={{ fontSize: '0.725rem', color: '#3B82F6', fontWeight: 800, textTransform: 'uppercase' }}>STRATEGY GUIDE</span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0.4rem 0 0.5rem 0' }}>SEO vs Meta Ads for {activeHubIndustry.name}: The ROI Breakdown</h4>
                    <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>Comparing search intent channels vs social ads for optimal budget allocation.</p>
                  </div>
                </div>
              </div>
            )}

            {activeHubTab === 'FAQs' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Frequently Asked Questions ({activeHubIndustry.name})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeHubIndustry.faqs.map((faq, fIdx) => (
                    <div key={fIdx} style={{ backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.975rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>{faq.question}</div>
                      <div style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeHubTab === 'Success Metrics' && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.25rem' }}>
                  Verified Client Results & Track Record ({activeHubIndustry.name})
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ backgroundColor: '#F0F9FF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #BAE6FD', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#0284C7' }}>₹12.4 Cr+</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0369A1', marginTop: '0.3rem' }}>Client Revenue Generated</div>
                  </div>
                  <div style={{ backgroundColor: '#FEF3C7', padding: '1.5rem', borderRadius: '16px', border: '1px solid #FDE68A', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#D97706' }}>4.9 ★★★★★</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#B45309', marginTop: '0.3rem' }}>Average Client Rating</div>
                  </div>
                </div>
              </div>
            )}

            {/* BOTTOM FULL CTA BUTTON VIA WHATSAPP (ANIMATED & PULSING) */}
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-animated"
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
                color: '#FFFFFF',
                padding: '1.25rem 2rem',
                borderRadius: '999px',
                fontSize: '1.05rem',
                fontWeight: 900,
                letterSpacing: '0.02em'
              }}
            >
              Request Custom Digital Strategy Proposal for {activeHubIndustry.name} on WhatsApp 💬 ➔
            </a>
          </div>
        </div>
      )}

    </div>
  );
};
