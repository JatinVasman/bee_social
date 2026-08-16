import React, { useState } from 'react';
import { WorkShowcaseMarquee } from './WorkShowcaseMarquee';
import { SERVICE_ID_TO_SLUG } from '../utils/routes';

export interface ComprehensiveServiceItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  longDescription?: string;
  pricing: string;
  whatWeDo: string[];
  deliverables: string[];
  painPoints: string[];
  faqs: { q: string; a: string }[];
  approach?: string;
  typicalResults?: string;
}

export interface PricingCategory {
  title: string;
  subtitle: string;
  items: { name: string; price: string }[];
}

export const serviceApproachResults: Record<string, { approach: string; typicalResults: string }> = {
  'Social Media Marketing': {
    approach: 'Content-first brand storytelling: we build custom visual grids, write direct-response copy, and schedule at peak-hour traffic slots.',
    typicalResults: 'Clients see an average of 40% organic follower growth and 2.5x increase in DM-to-lead conversion rates.'
  },
  'Graphic Design': {
    approach: 'Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.',
    typicalResults: 'Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.'
  },
  'UGC Reels & Creator Marketing': {
    approach: 'Story hook psychology: we script high-impact hooks, direct vetted creators, and edit with fast-paced retention editing styles.',
    typicalResults: 'UGC ads generate 4x higher CTR and up to 35% lower cost-per-acquisition compared to static graphics.'
  },
  'Dashboard & KPI Systems': {
    approach: 'Unified data architecture: we integrate GA4, Shopify, Meta Ads, and CRMs into a single interactive visualization.',
    typicalResults: 'Operational teams save 5+ hours weekly on manual reporting and gain absolute visibility into true blended ROAS.'
  },
  'SEO Services': {
    approach: 'Semantic relevance & speed: technical site audits combined with high-intent keyword maps and digital PR backlink outreach.',
    typicalResults: 'Predictable organic search traffic growth with 60% of target keywords reaching Page 1 of Google in 90 days.'
  },
  'Google Ads Management': {
    approach: 'Intent-driven bidding optimization: we write high-relevance search headlines and structure smart performance max funnels.',
    typicalResults: 'Higher click-through-rates (CTR) and an average of 3.8x return on ad spend (ROAS) across campaigns.'
  },
  'Meta Ads Management': {
    approach: 'Creative-led performance scaling: constant variations of visual creatives, high-retention video hooks, and custom lookalike segmentation.',
    typicalResults: 'Consistent, scalable lead flow and lower cost-per-lead (CPL) by up to 45% compared to baseline.'
  },
  'Website Development': {
    approach: 'Design for conversion first: clear CTAs, trust signals and sub-3-second loads — then layer in SEO architecture so the site earns traffic from day one.',
    typicalResults: 'Client websites average 90+ mobile speed scores and 2–3x enquiry rates vs. their old sites.'
  },
  'WhatsApp Marketing': {
    approach: 'Permission-based lifecycle flows: automated cart recovery alerts, broadcast lists, and interactive customer support chatbot nodes.',
    typicalResults: 'Average open rates of 95% and up to 15% recovery on abandoned carts without active manual intervention.'
  },
  'Email Marketing Funnels': {
    approach: 'Segmentation & value nurturing: automated customer onboarding sequences, seasonal promotions, and behavioral drip triggers.',
    typicalResults: 'Email channel revenue contribution increases to 20%+ of overall sales with zero media spend.'
  },
  'Influencer Marketing': {
    approach: 'Micro-influencer alignment: sourcing high-engagement creators in your niche and structuring performance-based commission campaigns.',
    typicalResults: 'Authentic brand endorsements yielding 3x social referral traffic spikes and increased brand search volume.'
  },
  'B2B Lead Generation': {
    approach: 'Account-based targeting: custom sales copywriting, automated LinkedIn sequences, and landing page asset downloads.',
    typicalResults: 'A predictable monthly pipeline of qualified corporate decision-makers booking directly on calendars.'
  },
  'E-commerce Scaling': {
    approach: 'Full-funnel monetization: landing page optimization, custom bundling offers, and high-frequency dynamic product retargeting.',
    typicalResults: 'E-commerce stores see 2.8x average growth in digital revenue and improved customer lifetime value (LTV).'
  },
  'Conversion Rate Optimization': {
    approach: 'Behavioral intelligence tracking: heatmaps, screen recordings, user friction analyses, and structured A/B testing of headers and CTAs.',
    typicalResults: 'Boost checkout and lead conversion rates by 20% to 50% without increasing advertising spend.'
  },
  'Local Business SEO': {
    approach: 'Geotargeted optimization: citation building, Google Business Profile local keyword mapping, and positive review generation systems.',
    typicalResults: 'Rank in the local top-3 map pack, driving up to 80% more local telephone calls and map direction requests.'
  },
  'AI Automation Systems': {
    approach: 'Process optimization: building custom OpenAI API middleware, auto-answering email ticket routines, and internal CRM integrations.',
    typicalResults: 'Reduce manual administrative tasks by 70%, boosting corporate operational response speeds.'
  },
  'Brand Identity Design': {
    approach: 'Strategic visual mapping: customer psychology profiling, custom typography logo guides, and full brand guideline systems.',
    typicalResults: 'Establish a premium market authority perception, enabling brands to justify 20% to 50% higher price points.'
  }
};

export const graphicDesignPricingData: PricingCategory[] = [
  {
    title: "Standard Creatives — ₹150 each",
    subtitle: "Single-page social & digital formats.",
    items: [
      { name: "Poster Design", price: "₹150" },
      { name: "Flyer Design", price: "₹150" },
      { name: "Pamphlet Design", price: "₹150" },
      { name: "Leaflet Design", price: "₹150" },
      { name: "Social Media Post Design", price: "₹150" },
      { name: "Festival Post Design", price: "₹150" },
      { name: "Promotional Post Design", price: "₹150" },
      { name: "Product Post Design", price: "₹150" },
      { name: "Offer Post Design", price: "₹150" },
      { name: "Event Poster Design", price: "₹150" },
      { name: "School Admission Creative", price: "₹150" },
      { name: "Food Promotion Poster", price: "₹150" },
      { name: "Meta Ad Creative", price: "₹150" },
      { name: "Google Display Ad", price: "₹150" },
      { name: "Google Banner Ad", price: "₹150" },
      { name: "WhatsApp Marketing Creative", price: "₹150" },
      { name: "App Promotion Creative", price: "₹150" }
    ]
  },
  {
    title: "Structured Designs — ₹280 each",
    subtitle: "Layout complexity — cards, certificates, menus.",
    items: [
      { name: "Visiting Card Design", price: "₹280" },
      { name: "Letterhead Design", price: "₹280" },
      { name: "ID Card Design", price: "₹280" },
      { name: "Certificate Design", price: "₹280" },
      { name: "Quotation Design", price: "₹280" },
      { name: "Carousel Design", price: "₹280" },
      { name: "Menu Card Design", price: "₹280" },
      { name: "YouTube Banner Design", price: "₹280" },
      { name: "Event Invitation Design", price: "₹280" }
    ]
  },
  {
    title: "Multi-Page Documents — ₹130 / page",
    subtitle: "Billed per page or per slide.",
    items: [
      { name: "PPT / Presentation Design", price: "₹130/slide" },
      { name: "Investor Pitch Deck", price: "₹130/slide" },
      { name: "Sales Presentation", price: "₹130/slide" },
      { name: "Business Proposal Design", price: "₹130/slide" },
      { name: "Training Presentation", price: "₹130/slide" },
      { name: "Catalogue Design", price: "₹130/page" },
      { name: "School Magazine Design", price: "₹130/page" },
      { name: "Prospectus Design", price: "₹130/page" },
      { name: "Annual Report Design", price: "Custom Quote" }
    ]
  },
  {
    title: "Large-Format & Corporate Branding — ₹499+",
    subtitle: "Outdoor, packaging & corporate identity.",
    items: [
      { name: "Standee Design", price: "₹649" },
      { name: "Flex Banner Design", price: "₹649" },
      { name: "Roll-Up Banner Design", price: "₹649" },
      { name: "Hoarding Design", price: "₹1,149" },
      { name: "Billboard Design", price: "₹1,149" },
      { name: "Shop Branding Design", price: "₹1,649 onwards" },
      { name: "Vehicle Branding Design", price: "₹1,149 onwards" },
      { name: "Wall Branding Design", price: "₹1,149 onwards" },
      { name: "Product Packaging Design", price: "₹1,649" },
      { name: "Box Packaging Design", price: "₹2,149" },
      { name: "Company Profile Design", price: "₹1,999 onwards" },
      { name: "Brand Guidelines", price: "₹2,999 onwards" },
      { name: "Logo Design", price: "₹850 – ₹3,500" }
    ]
  },
  {
    title: "Packaging & Product Design",
    subtitle: "Custom commercial packaging layouts.",
    items: [
      { name: "Product Label Design", price: "₹649" },
      { name: "Product Tag Design", price: "₹430" },
      { name: "Shopping Bag Design", price: "₹649" },
      { name: "Product Mockup Design", price: "₹430" }
    ]
  },
  {
    title: "Restaurant & Hospitality",
    subtitle: "Branding materials for dining and hotels.",
    items: [
      { name: "Restaurant Menu Design", price: "₹649" },
      { name: "Room Service Menu Design", price: "₹649" },
      { name: "Hotel Brochure Design", price: "₹1,149" },
      { name: "Tent Card Design", price: "₹430" }
    ]
  },
  {
    title: "Custom & Creative Services",
    subtitle: "Tailored creative illustrations and retouching.",
    items: [
      { name: "Infographic Design", price: "₹649" },
      { name: "Vector Tracing", price: "₹649" },
      { name: "Photo Retouching", price: "₹430" },
      { name: "Photo Manipulation", price: "₹649" },
      { name: "AI Image Enhancement", price: "₹150" },
      { name: "Merchandise Design", price: "₹649" },
      { name: "T-Shirt Design", price: "₹649" },
      { name: "Landing Page Graphics", price: "₹649" },
      { name: "Custom Illustration", price: "Custom Quote" },
      { name: "Custom Artwork", price: "Custom Quote" }
    ]
  }
];

const smmPackagesData = [
  {
    name: 'Starter',
    price: '3,499',
    features: [
      '2 Social Platforms',
      '12 Posts/Month',
      '3 Reels Edited',
      '1 Festival Poster',
      'Monthly Report'
    ],
    badge: '',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Growth',
    price: '5,999',
    features: [
      '3 Social Platforms',
      '20 Posts/Month',
      '8 Reels Edited',
      '3 Festival Posters',
      'Meta Ads Setup',
      'Monthly Strategy Call'
    ],
    badge: 'MOST POPULAR',
    popular: true,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Pro',
    price: '8,999',
    features: [
      '4 Social Platforms',
      '30 Posts/Month',
      '12 Reels Edited',
      '6 Festival Posters',
      'Full Meta Ads Management',
      'Google My Business',
      'Weekly Report'
    ],
    badge: 'BEST ROI',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  }
];

const partnershipTiersData = [
  {
    tier: '3-4 Accounts',
    discount: '10% OFF',
    desc: 'Perfect for boutique agencies',
    tag: ''
  },
  {
    tier: '5-9 Accounts',
    discount: '15% OFF',
    desc: 'Mid-size agencies & resellers',
    tag: 'MOST POPULAR'
  },
  {
    tier: '10-49 Accounts',
    discount: '20% OFF',
    desc: 'Large agency portfolios',
    tag: 'BEST VALUE'
  },
  {
    tier: '50+ Accounts',
    discount: 'Custom',
    desc: 'Enterprise + dedicated manager',
    tag: 'ENTERPRISE'
  }
];

const smmFaqsData = [
  {
    q: 'What makes Digital Digix different from other agencies?',
    a: 'We focus on pure results with no long-term lock-in retainer traps, and we provide transparent pay-per-performance execution led directly by founders.'
  },
  {
    q: 'How long before I see SMM results?',
    a: 'While organic SEO takes months, our SMM campaigns deliver high-quality engagement, viral reels, and targeted lead generation within 24 to 72 hours of ad campaigns going live.'
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'Absolutely not. All our social media marketing packages are billed month-to-month. You are free to scale up, scale down, or cancel at any time with no penalties.'
  },
  {
    q: 'Is post-pay available at Digital Digix?',
    a: 'Yes, we offer pay-after-results or pay-per-outcome performance setups for qualified brands after aligning on upfront lead definitions and targets.'
  },
  {
    q: 'Do you offer B2B or agency discounts?',
    a: 'Yes! Our B2B & Agency Tiers provide up to 20% off for partners managing multiple client accounts under white-label execution.'
  },
  {
    q: 'Which package should I choose?',
    a: 'The Starter package is great for brand consistency, the Growth package is perfect for active lead generation, and the Pro package is designed for maximum market dominance.'
  }
];

export const detailed17Services: ComprehensiveServiceItem[] = [
  {
    id: '1',
    title: 'Social Media Marketing',
    category: 'Social Growth',
    icon: '📱',
    description: 'Grow on Instagram, Facebook & LinkedIn with content calendars, posting and analytics.',
    longDescription: 'Supercharge your brand presence on Instagram, Facebook, and LinkedIn. We build custom monthly content calendars, write high-converting captions, design scroll-stopping graphics, produce viral reels hooks, and provide comprehensive monthly analytics reports to drive inbound customer leads and sales.',
    pricing: '₹3,499–₹8,999/mo',
    whatWeDo: [
      '360° Social Brand Strategy & Monthly Content Planning',
      'High-Engagement Graphic & Reel Content Production',
      'Community Engagement, Comment Moderation & Direct Message Leads',
      'Targeted Hashtag Research, Audience Profiling & Strategic Posting',
      'Monthly Data Analytics & Performance Optimization Audits',
      'Influencer Outreach, Brand Collaboration Setup & UGC Curation'
    ],
    deliverables: [
      '12-24 Custom Social Posts / Month',
      '4-8 Reels & Shorts Videos',
      'Hashtag & Bio Optimization',
      'Monthly PDF Analytics Report',
      'Dedicated WhatsApp Support Group'
    ],
    painPoints: [
      'Inconsistent posting schedule and fragmented brand voice',
      'Low organic reach, engagement rates, and follower growth stagnation',
      'Outdated visual aesthetic failing to attract high-value leads',
      'Lack of time to conceptualize, write, and schedule posts'
    ],
    faqs: [
      { q: 'Which platforms do you cover in Social Media Marketing?', a: 'We handle Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts.' },
      { q: 'Do I get to approve posts before they go live?', a: 'Yes, we provide a 14-day advance content calendar for your review and approval.' },
      { q: 'Do you create original graphics and copy?', a: '100%! All visuals, captions, hashtags, and video scripts are custom created for your brand.' },
      { q: 'Is community engagement included?', a: 'Yes, we actively monitor and reply to comments and DMs during business hours.' }
    ]
  },
  {
    id: '2',
    title: 'Graphic Design',
    category: 'Design & Branding',
    icon: '🎨',
    description: 'From social posts and logos to packaging, presentations and branding.',
    longDescription: 'Premium, custom visual assets tailored for B2B and D2C brands. We design social media ad creatives, corporate pitch decks, sales brochures, packaging labels, retail banners, and 3D product mockups with transparent, per-design pricing and ultra-fast 24-hour turnaround times.',
    pricing: '₹150 onwards',
    whatWeDo: [
      'Custom Social Media Posts, Stories & Ad Creatives',
      'Corporate Pitch Decks, Sales Brochures & Banners',
      'Product Packaging, Labels & Retail Display Designs',
      '3D Product Mockups & Large-Format Flex Printing Assets',
      'Infographic Layouts, Ebook Design & Custom Illustrations',
      'Corporate Stationary, Letterheads & Invoice Design Templates'
    ],
    deliverables: [
      'High-Res PNG/JPEG Files',
      'Print-Ready PDF (CMYK)',
      'Editable Vector Source Files (AI/PSD)',
      'Brand Color Palette Guide',
      'Fonts and Typography Package'
    ],
    painPoints: [
      'Amateur looking designs damaging brand credibility',
      'Slow designer turnaround delaying marketing campaigns',
      'High agency retainers eating into profit margins',
      'Fragmented visual styles across different company channels'
    ],
    faqs: [
      { q: 'How is graphic design priced?', a: 'We offer transparent per-design pricing. Standard formats are ₹150, structured designs are ₹280, and multi-page layouts are ₹130/page. No retainers or hidden fees.' },
      { q: 'Do you offer logo design?', a: 'Yes, we design professional, vector logos starting from ₹850 up to ₹3,500 depending on concepts and design drafts required.' },
      { q: 'How fast is delivery?', a: 'Standard social posts and ad creatives take 24–48 hours. Complex brochures, packaging layouts or multi-page pitch decks take 48–72 hours.' },
      { q: 'Do prices include revisions and final files?', a: 'Yes, all prices include minor revisions to ensure you are happy, and you receive print-ready PDFs as well as editable source files (AI/PSD).' },
      { q: 'Which industries do you design for?', a: 'We design for a wide array of industries including Healthcare, Restaurants & Hospitality, Real Estate, E-commerce, Education, and Professional Services.' }
    ]
  },
  {
    id: '3',
    title: 'UGC Reels & Creator Marketing',
    category: 'Viral Content',
    icon: '🎥',
    description: 'Authentic UGC-style reels — scripted, filmed, edited and posted directly.',
    longDescription: 'Connect with your target demographic through authentic User-Generated Content (UGC) videos. We source vetted models and creators from our in-house network of 250+ talent, write direct-response scripts using Problem-Agitate-Solve hooks, and manage the entire filming and post-production pipeline.',
    pricing: '₹2,100–₹5,100/campaign',
    whatWeDo: [
      'Vetted Creator Selection from 250+ UGC Creators',
      'Script Writing & Problem-Agitate-Solve Hook Creation',
      'Full UGC Reel Filming, Editing & Sound Design',
      'Spark Ad Whitelisting & Commercial Digital Usage Rights',
      'Unboxing, Product Review & Lifestyle Video Shoots',
      'Niche-Specific Model Casting (Fashion, Tech, Beauty, Health)'
    ],
    deliverables: [
      'Vetted Creator Selection',
      'Script Writing & Problem-Agitate-Solve Hooks',
      'Full UGC Reel Editing & Color Grade',
      'Spark Ad Commercial Usage Rights',
      'High-Resolution Raw Footage Files'
    ],
    painPoints: [
      'Ad fatigue on static graphic ads causing CPC surge',
      'Lack of customer trust and social proof',
      'High actor and studio fees for product shoots',
      'Difficulty managing and coordinating with multiple online creators'
    ],
    faqs: [
      { q: 'Who provides the creators?', a: 'We handle creator matching from our network of 250+ UGC creators.' },
      { q: 'Are ad commercial usage rights included?', a: 'Yes, full commercial digital ad rights are included.' },
      { q: 'Can we review and approve scripts beforehand?', a: 'Yes, you approve all scripts and hooks before creators film.' },
      { q: 'What is the average turnaround for UGC videos?', a: 'Filming, editing, and delivery take about 7 to 10 days.' }
    ]
  },
  {
    id: '4',
    title: 'Dashboard & KPI Systems',
    category: 'Data & Analytics',
    icon: '📊',
    description: 'Turn business data into clear insights, automated reports and real-time tracking.',
    longDescription: 'Stop guessing your return on ad spend (ROAS). We build custom Google Looker Studio and PowerBI dashboards integrating data from Meta, Google, Amazon, and CRM tools, providing automated daily WhatsApp summaries and real-time visibility into cost-per-lead and pipeline health.',
    pricing: '₹2,000–₹15,000',
    whatWeDo: [
      'Custom Google Looker Studio & PowerBI Dashboard Setup',
      'Multi-Channel Ad Spend & ROAS Integration (Meta, Google, Amazon)',
      'Automated Daily Email & WhatsApp Performance Summaries',
      'Sales Pipeline & CRM Lead Tracking Real-Time Connectors',
      'Inventory Tracking & Order Management Data Flows',
      'Custom Business Goal Setting & Alert Notifications'
    ],
    deliverables: [
      'Live Real-Time KPI Dashboard',
      'Automated Daily Executive Summaries',
      'Cost-Per-Lead & Profit Analytics',
      'Team Access Permissions',
      'Interactive Training Video tutorial'
    ],
    painPoints: [
      'No visibility into true return on marketing spend',
      'Manual Excel spreadsheet entry errors wasting hours of work',
      'Scattered data across multiple apps (Meta, Shopify, GA4)',
      'Inability to track sales representative response times'
    ],
    faqs: [
      { q: 'Can I view my dashboard on mobile?', a: 'Yes! Dashboards are 100% mobile responsive and update automatically.' },
      { q: 'Is my business data secure?', a: '100% secure. Data connectors use direct encrypted APIs with restricted access.' },
      { q: 'Which platforms can you connect to the dashboard?', a: 'We connect Shopify, Meta Ads, Google Ads, CRM tools, Amazon, and Google Sheets.' },
      { q: 'How often does the data update?', a: 'Data is refreshed automatically in real-time or every hour depending on the API restrictions.' }
    ]
  },
  {
    id: '5',
    title: 'SEO Services',
    category: 'Search Engine Rank',
    icon: '🔍',
    description: 'Rank at the top and get organic leads 24/7 with data-driven SEO.',
    longDescription: 'Dominate search engine results and acquire organic leads 24/7. Our white-hat SEO strategy includes full technical auditing, high-intent keyword mapping, core web vitals optimization, digital PR backlink building, and Google Search Console tracking for predictable traffic growth.',
    pricing: '₹4,000–₹12,000/mo',
    whatWeDo: [
      'Comprehensive Technical SEO & Site Architecture Audit',
      'High-Intent Commercial Keyword Research & Mapping',
      'High-Authority Backlink Acquisition & Digital PR',
      'On-Page Schema Markup & Core Web Vitals Optimization',
      'Competitor Keyword and Gap Analysis',
      'SEO Content Strategy & Copywriting Planning'
    ],
    deliverables: [
      'Monthly Keyword Rank Reports',
      'Technical Audit Action Plan',
      'High-DA Backlinks Acquisition',
      'SEO Optimized Content Writing',
      'SEO Competitor Comparison sheet'
    ],
    painPoints: [
      'Invisible on Google Search for high-intent queries',
      'High dependence on paid ads driving up marketing costs',
      'Competitors ranking higher on valuable search terms',
      'Broken site links, slow page load speeds, and indexing issues'
    ],
    faqs: [
      { q: 'How long until I see Page 1 rankings?', a: 'Initial keyword movement is visible in 60-90 days.' },
      { q: 'Do you guarantee #1 ranking on Google?', a: 'We follow white-hat SEO practices that consistently drive top 3 rankings.' },
      { q: 'Do you help write blog posts for SEO?', a: 'Yes, we produce SEO-optimized blogs targeting valuable search keywords.' },
      { q: 'Will SEO help my local map ranking?', a: 'Yes, SEO works in tandem with Google Business Profile optimizations to boost maps rankings.' }
    ]
  },
  {
    id: '6',
    title: 'Google Ads Management',
    category: 'Paid Search',
    icon: '🎯',
    description: 'Capture high-intent searches the moment customers look for you.',
    longDescription: 'Put your brand in front of customers actively searching for your services. We construct high-converting search, display, and Performance Max (PMax) campaigns, eliminate wasted budget using negative keyword lists, and establish accurate GA4 conversion tracking.',
    pricing: '18% of Monthly Ad Spend',
    whatWeDo: [
      'Search Campaign Bidding & Keyword Match Optimization',
      'Negative Keyword Filtering & Budget Waste Elimination',
      'GA4 Conversion Tracking & Revenue Attribution Setup',
      'Performance Max (PMax) & YouTube Video Ad Management',
      'Competitor Ad Spy Research & Bid Strategy Adjustments',
      'Landing Page Conversion Rate Auditing'
    ],
    deliverables: [
      'Google Search & Display Campaigns',
      'Conversion Tracking Setup',
      'Negative Keyword Audit',
      'Bi-Weekly Strategy Calls',
      'Monthly ROI Dashboard Access'
    ],
    painPoints: [
      'Wasted budget on irrelevant search clicks',
      'Low quality lead inquiries from display campaigns',
      'High cost per acquisition (CPA) eating margins',
      'Inability to track which search queries generate revenue'
    ],
    faqs: [
      { q: 'Is there a minimum ad budget requirement?', a: 'We manage accounts starting from ₹15,000/month ad spend.' },
      { q: 'Who owns the Google Ads account?', a: 'You retain 100% ownership of your Google Ads account.' },
      { q: 'What is the pricing model for Google Ads?', a: 'We charge a percentage of the monthly ad spend with zero lock-in contracts.' },
      { q: 'Do you create display ad graphics?', a: 'Yes, our in-house design team creates display banners and video ad assets.' }
    ]
  },
  {
    id: '7',
    title: 'Meta Ads Management',
    category: 'Social Acquisition',
    icon: '📣',
    description: 'Facebook & Instagram campaigns engineered for real leads.',
    longDescription: 'Scale your customer acquisition with data-driven Facebook and Instagram ad campaigns. We build custom and lookalike audience models, design high-converting visual ad creatives, write direct-response copy, implement Conversions API (CAPI), and configure retargeting funnels.',
    pricing: '15% of Ad Spend',
    whatWeDo: [
      'Laser-Focused Audience Profiling & Lookalike Audience Building',
      'High-Converting Ad Creative Design & Video Copywriting',
      'Meta Pixel & Conversions API (CAPI) Integration',
      'Multi-Stage Retargeting Funnel Architecture',
      'A/B Ad Placement & Budget Optimization Testing',
      'Instant Lead Form Optimization with Verification'
    ],
    deliverables: [
      'Meta Lead Gen Campaigns',
      'Custom Ad Creatives & Copies',
      'Pixel & CAPI Setup',
      'Weekly ROI Reporting',
      'Ad Account Security Audit'
    ],
    painPoints: [
      'High cost per lead (CPL) and ad fatigue',
      'Unqualified lead form spam wasting sales team time',
      'Ad account policy bans disrupting lead generation',
      'Inaccurate tracking and data loss post-iOS 14 update'
    ],
    faqs: [
      { q: 'Do you design the ad graphics and videos?', a: 'Yes! Creative design and copy are completely included.' },
      { q: 'How do you prevent bad leads?', a: 'We use custom screening questions and instant OTP verification.' },
      { q: 'What is the setup time for a new campaign?', a: 'We launch campaigns within 5 to 7 business days after strategy approval.' },
      { q: 'Do you assist with disabled ad account recovery?', a: 'Yes, we help submit official appeals and configure backup business managers.' }
    ]
  },
  {
    id: '8',
    title: 'Website Development',
    category: 'Web Engineering',
    icon: '💻',
    description: 'Modern, fast, SEO-ready websites with WhatsApp integration, SSL and support.',
    longDescription: 'Custom Next.js, React, and WordPress websites engineered for maximum speed, security, and search engine visibility. Includes mobile-first responsive design, direct WhatsApp instant lead chat integration, SSL security setup, and 1 full year of dedicated cloud hosting maintenance and tech support.',
    pricing: '₹6,500–₹18,000',
    whatWeDo: [
      'Custom Mobile-Responsive Next.js / WordPress Engineering',
      'High-Converting Landing Page Layouts & Copywriting',
      'WhatsApp Lead Chatbot & CRM Integration',
      'Speed Optimization & Core Web Vitals Audit (95+ Google Score)',
      'SSL Security, Domain Setup & 1-Year Cloud Hosting Maintenance',
      'Payment Gateway Integration (Razorpay, Stripe) & E-commerce Setup'
    ],
    deliverables: [
      'Custom Designed Website (1-10 Pages)',
      'WhatsApp Instant Lead Bot',
      'SSL Security Certificate',
      '1 Year Free Maintenance & Technical Support',
      'Full Admin CMS Access & Training Video'
    ],
    painPoints: [
      'Slow loading website speeds causing user drop-offs',
      'Non-mobile friendly layout alienating mobile traffic',
      'High developer costs & hidden post-launch maintenance fees',
      'Outdated design failing to generate direct business leads'
    ],
    faqs: [
      { q: 'Is hosting and domain included?', a: 'Yes, we include 1 year of SSL high-speed cloud hosting and domain setup.' },
      { q: 'Can I edit content myself later?', a: 'Yes, we provide an easy-to-use CMS dashboard and a 15-minute video tutorial.' },
      { q: 'How long does development take?', a: 'Single landing pages take 3-5 days. Full corporate sites take 7-14 days.' },
      { q: 'Is the website optimized for search engines?', a: 'Yes, we build every website with SEO-friendly semantic code, fast loading architecture, and meta tags.' }
    ]
  },
  {
    id: '9',
    title: 'Poster Design',
    category: 'Design & Branding',
    icon: '🖼️',
    description: 'Eye-catching social graphics, festival posters and print-ready creatives.',
    longDescription: 'Engage your audience during holidays and seasonal events with stunning festival posters, discount banners, promotional event flyers, and custom story overlays. We pre-schedule your yearly festival calendar and deliver high-resolution, print-ready files branded with your logo and colors.',
    pricing: 'From ₹149/design',
    whatWeDo: [
      'Indian & International Festival Creatives (Diwali, New Year, Eid, etc.)',
      'Promotional Discount & Seasonal Offer Banners',
      'Event & Conference Announcement Flyers',
      'Social Media Story & Reel Cover Posters',
      'Physical Banner & Billboard Large-Format Vector Designs',
      'Real Estate Project Launch & Coming Soon Posters'
    ],
    deliverables: [
      'High-Res Digital Files (RGB)',
      'Print-Ready PDF Files (CMYK)',
      'Festival Calendar Pre-Schedules',
      'Editable Source Files (PSD/AI/Canva)',
      'Custom Fonts/Branding Template'
    ],
    painPoints: [
      'Missing key festival marketing opportunities due to lack of assets',
      'Low resolution graphics pixelating when posted or printed',
      'High cost per design when working with freelance designers',
      'Inconsistent layout templates making the brand look unstructured'
    ],
    faqs: [
      { q: 'Can I order monthly bulk poster packs?', a: 'Yes, our monthly packages offer 15 to 30 posters at discounted rates.' },
      { q: 'Are posters customized with my brand logo?', a: 'Yes, every poster includes your logo, brand colors, phone number, and address.' },
      { q: 'Do you design physical posters for printing?', a: 'Yes, we design in CMYK format at 300 DPI for flawless printing resolution.' },
      { q: 'What is the turnaround time for festival creatives?', a: 'We typically deliver the entire monthly batch of festival posters 7 days in advance.' }
    ]
  },
  {
    id: '10',
    title: 'Reels & Video Production',
    category: 'Video & Reels',
    icon: '🎬',
    description: 'Scripting, editing, trending audio — reels that actually reach.',
    longDescription: 'High-impact vertical video production tailored for Instagram Reels, YouTube Shorts, and TikTok. We handle the entire creative pipeline including viral hook scripting, fast-paced transitions, custom dynamic caption animations, trending audio sync, and click-worthy cover thumbnails.',
    pricing: 'From ₹380/video',
    whatWeDo: [
      'Viral Hook Scriptwriting & Storyboarding',
      'Fast-Paced Motion Graphics & Caption Animation',
      'Trending Instagram & TikTok Audio Research',
      'Color Grading, Sound Design & Thumbnail Design',
      'Video Editing for Podcasts, Long-Form Vlogs & Ads',
      'Voiceover Scripting & Multi-Voice AI Integration'
    ],
    deliverables: [
      'Vertical 9:16 HD Reel Videos',
      'Animated Subtitles & Emoji Effects',
      'Trending Sound Track Files',
      'Custom Cover Thumbnail',
      'Raw Edited Project Files'
    ],
    painPoints: [
      'Low view counts and drop-offs in first 3 seconds',
      'Boring video edits lacking motion design and engaging sound',
      'No time to script videos or research topics',
      'High studio and equipment costs to film high-quality reels'
    ],
    faqs: [
      { q: 'Do I need to send raw video footage?', a: 'You can send raw phone videos, or we can use HD licensed stock video footage.' },
      { q: 'What is the video turnaround time?', a: 'Individual reels are delivered within 24 to 48 hours.' },
      { q: 'Do you help write the video scripts?', a: 'Yes, we draft engaging hook-oriented scripts matching your target niche.' },
      { q: 'Can you edit long-form videos like YouTube vlogs?', a: 'Yes, we edit long-form videos and slice them into multiple engaging short clips.' }
    ]
  },
  {
    id: '11',
    title: 'E-commerce Marketing',
    category: 'Ecommerce Growth',
    icon: '🛒',
    description: 'Full-funnel growth for online stores: catalog ads, retargeting & CRO.',
    longDescription: 'Accelerate your online store sales. We optimize Google Shopping feeds, run Advantage+ Catalog ads, configure automated abandoned cart email flows via Klaviyo, manage Amazon/Flipkart listings, and perform deep Conversion Rate Optimization (CRO) to maximize your average order value.',
    pricing: '₹8,000–₹20,000/mo',
    whatWeDo: [
      'Google Shopping & Advantage+ Catalog Ads Setup',
      'Klaviyo Email & SMS Abandoned Cart Automation Flows',
      'Amazon & Flipkart Marketplace SEO & Product Listing Optimization',
      'Conversion Rate Optimization (CRO) & Heatmap Audits',
      'Product Bundling & Upsell Strategy Execution',
      'Loyalty Program Design & Customer Retention Setup'
    ],
    deliverables: [
      'Shopping & Catalog Ad Setup',
      'Klaviyo Email Automations',
      'Marketplace Product SEO',
      'Monthly ROAS Dashboard',
      'Discount Codes & Campaign Strategy doc'
    ],
    painPoints: [
      'High cart abandonment rates on Shopify / WooCommerce',
      'Low ROAS on Meta ads and high customer acquisition cost (CAC)',
      'High customer acquisition cost (CAC) outstripping customer value',
      'Poor marketplace ranking on Amazon and Flipkart'
    ],
    faqs: [
      { q: 'What ROAS can I expect?', a: 'Our e-commerce campaigns average between 3.5x to 6.2x ROAS.' },
      { q: 'Do you work with Shopify and WooCommerce?', a: 'Yes, we are official partners for Shopify, WooCommerce, and Magento.' },
      { q: 'Do you set up email automations?', a: 'Yes, we set up abandoned cart, welcome series, and customer win-back flows.' },
      { q: 'Do you manage marketplace ads on Amazon?', a: 'Yes, we configure and optimize Amazon PPC campaigns and listings.' }
    ]
  },

  {
    id: '13',
    title: 'Lead Generation',
    category: 'Performance Leads',
    icon: '🧲',
    description: 'Performance-driven lead programs across Google, Meta & LinkedIn.',
    longDescription: "Unleash a predictable, high-quality lead flow. We build high-converting landing pages, deploy pay-per-click lead campaigns across Google, Meta, and LinkedIn, implement instant OTP phone verification, and sync screened, sales-ready prospects directly into your sales team's CRM.",
    pricing: 'Custom / Pay-per-lead',
    whatWeDo: [
      'High-Intent Lead Magnet Landing Page Design',
      'Multi-Channel PPC Ad Management (Google Search & Meta Ads)',
      'Lead Screening & Phone Number OTP Verification',
      'Real-Time CRM & WhatsApp Lead Sync',
      'Lead Qualification Quiz & Interactive Calculator Setup',
      'B2B Cold Email Outreach Strategy and Scripting'
    ],
    deliverables: [
      'High Converting Landing Page',
      'PPC Campaign Management',
      'Verified Qualified Leads',
      'Real-Time Lead Dashboard',
      'Automated Lead Routing Setup'
    ],
    painPoints: [
      'Unpredictable monthly lead pipeline causing sales anxiety',
      'High upfront agency retainers with zero guaranteed outcomes',
      'Fake phone numbers and email leads wasting sales time',
      'Extremely high Cost-Per-Lead (CPL) in competitive niches'
    ],
    faqs: [
      { q: 'How is lead quality verified?', a: 'We use OTP verification and mandatory screening questions.' },
      { q: 'Do I pay per lead or retainer?', a: 'We offer both performance pay-per-lead models and hybrid models.' },
      { q: 'Can you target specific B2B industries?', a: 'Yes, we construct targeted LinkedIn and Google search funnels for precise B2B demographics.' },
      { q: 'Do you help script our sales team follow-ups?', a: 'Yes, we provide instant WhatsApp and email copy scripts to boost lead conversion rates.' }
    ]
  },
  {
    id: '14',
    title: 'Content Marketing',
    category: 'Content Engine',
    icon: '✍️',
    description: 'SEO blogs, pillar guides and thought-leadership that build authority.',
    longDescription: 'Establish absolute authority in your industry. We perform competitor content gap analysis, write comprehensive 1,500+ word SEO blog posts and topic clusters, ghostwrite executive thought-leadership articles for LinkedIn/Medium, and design custom infographics to generate organic traffic.',
    pricing: '₹5,000–₹15,000/mo',
    whatWeDo: [
      'Topic Cluster Keyword Strategy & Competitor Gap Analysis',
      '1,500+ Word In-Depth SEO Blog Article Production',
      'Executive Thought Leadership Ghostwriting (LinkedIn / Medium)',
      'Custom Infographic & Visual Asset Design',
      'Ebook, Whitepaper, and Lead Magnet Writing',
      'Monthly Newsletter & Email Campaign Construction'
    ],
    deliverables: [
      '4-8 Long-Form SEO Articles',
      'Infographic Visual Assets',
      'Keyword Optimization Strategy',
      'Internal Linking Architecture',
      'Thought Leadership Post Package'
    ],
    painPoints: [
      'Lack of topical authority and brand credibility',
      'Low organic search traffic and high reliance on ads',
      'Inability to write expert, grammatically sound industry articles',
      'Inconsistent posting of written materials across media properties'
    ],
    faqs: [
      { q: 'Are articles written by expert human writers?', a: '100%! All articles are crafted by experienced industry copywriters.' },
      { q: 'Do you publish articles directly to my CMS?', a: 'Yes, we handle formatting, images, meta tags, and publishing.' },
      { q: 'How do you pick content topics?', a: 'We perform deep competitive gap analyses and target high-search-volume keywords.' },
      { q: 'Can content marketing generate direct sales leads?', a: 'Yes, by incorporating valuable lead magnets (ebooks, audits) directly inside articles.' }
    ]
  },
  {
    id: '15',
    title: 'Local SEO',
    category: 'Local Search',
    icon: '📍',
    description: 'Own the Google map pack: GBP optimisation, reviews and citations.',
    longDescription: 'Dominate local searches and drive foot traffic. We optimize and verify your Google Business Profile (GBP), build local citations across top directories, set up automated review generation funnels, and implement schema markup to boost maps ranking.',
    pricing: '₹3,500–₹9,000/mo',
    whatWeDo: [
      'Google Business Profile (GBP) Full Optimization & Verification',
      'Local Map-Pack Rank Boosting & Citation Building',
      'Automated Review Generation & Response Funnels',
      'Hyper-Local Service Page Schema Markup',
      'Local Directory Citation Audit and Indexing',
      'Geo-Targeted Content and Blog Strategy'
    ],
    deliverables: [
      'GBP Profile Optimization',
      '50+ Local Directory Citations',
      'Automated Review Link QR Code',
      'Monthly Map Rank Report',
      'Review Generation Strategy template'
    ],
    painPoints: [
      'Not showing up on Google Maps for local queries',
      'Competitors dominating local search map pack',
      'Negative Google reviews dragging down search placement',
      'Inconsistent name, address, phone number (NAP) data across directories'
    ],
    faqs: [
      { q: 'Will this increase phone calls and visits?', a: 'Yes, local map optimization directly boosts calls and direction requests.' },
      { q: 'Can you help reinstate suspended profiles?', a: 'Yes, we assist with Google Business Profile suspension appeals.' },
      { q: 'How long until local map rankings improve?', a: 'Maps listings typically start climbing search positions within 30 to 60 days.' },
      { q: 'Do you manage review responses?', a: 'Yes, we draft keyword-rich, professional replies to all customer reviews.' }
    ]
  },
  {
    id: '16',
    title: 'WhatsApp Marketing',
    category: 'Direct Marketing',
    icon: '💬',
    description: "India's most powerful channel — broadcasts, automation & catalogs.",
    longDescription: "Leverage India's highest engagement channel with 90%+ open rates. We register and set up Meta's official WhatsApp Cloud API, build automated product catalogs, configure abandoned cart reminders, and deploy targeted broadcast campaigns to re-engage past customers.",
    pricing: '₹2,500–₹6,000/mo',
    whatWeDo: [
      'Official Meta WhatsApp Business API Account Setup',
      'Targeted Broadcast Message Campaign Creation',
      'Interactive Product Catalog & Shopping Bot Setup',
      'Automated Abandoned Cart & Payment Reminder Flows',
      'Customer Support Ticketing and Routing Workflows',
      'Opt-In Lead Capture Forms & Growth Campaigns'
    ],
    deliverables: [
      'Official WhatsApp API Setup',
      'Broadcast Campaign Manager',
      'Interactive Product Catalog',
      'Automated Chatbot Workflows',
      'Meta WhatsApp Business Manager Setup'
    ],
    painPoints: [
      'Low email open rates (15-20%) hindering client communications',
      'Risk of phone bans using unverified software',
      'No automated customer support setup during weekends',
      'High cost per SMS with low response rates'
    ],
    faqs: [
      { q: 'Are broadcast messages safe from phone bans?', a: 'Yes, we use official Meta WhatsApp Cloud API avoiding bans.' },
      { q: 'Can customers place orders inside WhatsApp?', a: 'Yes, using WhatsApp Native Catalog Shopping.' },
      { q: 'Is there a setup charge for WhatsApp broadcast?', a: 'All setup features are included in our standard onboarding retainer.' },
      { q: 'Can we send media like images and PDFs in broadcasts?', a: 'Yes, WhatsApp API supports images, videos, documents, and interactive buttons.' }
    ]
  },
  {
    id: '17',
    title: 'Logo & Branding',
    category: 'Design & Branding',
    icon: '✒️',
    description: 'Memorable logos & brand identities. Vector files + guidelines included.',
    longDescription: 'Establish a world-class brand identity. We design 3-5 unique, commercial-copyright vector logo concepts, curate custom typography and color palettes, write comprehensive brand identity style guides, and package complete social media profile kits and corporate stationery.',
    pricing: '₹850–₹3,500',
    whatWeDo: [
      '3-5 Unique Vector Logo Concepts',
      'Brand Identity Style Guide (Typography, Palette, Usage Rules)',
      'Social Media Profile Kit (Avatar, Banners, Favicon)',
      'Business Card & Letterhead Stationery Designs',
      'Brand Voice and Positioning Strategy Development',
      'Merchandise and Promotional Item Mockups'
    ],
    deliverables: [
      '3-5 Unique Logo Concepts',
      'Full Brand Guidelines PDF',
      'Vector Files (AI, EPS, SVG, PDF)',
      'Social Media Branding Kit',
      'Corporate Stationery Assets'
    ],
    painPoints: [
      'Outdated clip-art logos making the brand look cheap',
      'No brand color consistency across website and print material',
      'Low resolution file formats causing blurriness on print signs',
      'Lack of clear brand guidelines resulting in fragmented marketing creatives'
    ],
    faqs: [
      { q: 'Do I own full legal copyright of the logo?', a: 'Yes, 100% full commercial copyright is transferred to you upon delivery.' },
      { q: 'What files will I receive?', a: 'You receive vector files (AI, EPS, SVG), high-res PNGs (transparent background), and PDFs.' },
      { q: 'How many design revisions are included?', a: 'We offer 3 complete rounds of design revisions on the chosen logo concept.' },
      { q: 'Can you help redesign an existing logo?', a: 'Yes, we offer modern brand modernization and logo refinement services.' }
    ]
  }
];

interface ServicesGridProps {
  onOpenStrategyModal: (serviceName?: string) => void;
  onNavigate?: (page: any, slug?: string) => void;
  backgroundColor?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onNavigate,
  backgroundColor
}) => {
  const [selectedService, setSelectedService] = useState<ComprehensiveServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewingSmmDetails, setViewingSmmDetails] = useState(false);
  const [openInlineSmmFaqIndex, setOpenInlineSmmFaqIndex] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        
        {viewingSmmDetails ? (
          <div>
            <button
              onClick={() => setViewingSmmDetails(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0F172A',
                backgroundColor: '#F1F5F9',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid #CBD5E1',
                marginBottom: '2rem',
                cursor: 'pointer'
              }}
            >
              ← Back to All Services
            </button>

            {/* FULL SMM DETAILS SECTION */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-tag" style={{ color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)' }}>SMM HUB & CREATOR NETWORK</div>
              <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
                Social Media Marketing & Viral Reach Engine
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
                Scale your brand's organic and paid presence across Instagram, Facebook, LinkedIn, YouTube, and UGC creator networks to convert followers into paying customers.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — TRANSPARENT VALUE —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Packages & Pay-As-You-Go
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                Flexible plans, no retainer traps. Only pay for outcomes that matter.
              </p>
            </div>

            {/* smm packages grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1140px', margin: '0 auto 3rem auto', alignItems: 'stretch' }} className="graphics-pricing-grid">
              {smmPackagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                    color: pkg.popular ? '#FFFFFF' : '#0F172A',
                    border: pkg.popular ? '2px solid #D97706' : '1px solid #E2E8F0',
                    borderRadius: '28px',
                    padding: '2.25rem 2rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {pkg.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#D97706',
                        color: '#FFFFFF',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        letterSpacing: '0.08em',
                        boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#E0B56C' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {pkg.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                        ₹{pkg.price}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: pkg.popular ? '#94A3B8' : '#64748B', marginLeft: '0.25rem', fontWeight: 600 }}>
                        /mo
                      </span>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, fontSize: '0.95rem' }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: pkg.popular ? '#E0B56C' : '#D97706', fontWeight: 900 }}>✓</span>
                        <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '999px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backgroundColor: pkg.popular ? '#E0B56C' : '#1A1311',
                      color: pkg.popular ? '#1A1311' : '#FFFFFF',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Get Started →
                  </a>
                </div>
              ))}
            </div>

            {/* SMM Pay-as-you-go box */}
            <div
              style={{
                maxWidth: '1140px',
                margin: '0 auto 5rem auto',
                background: 'linear-gradient(135deg, #F0F6FC 0%, #E3EBF4 100%)',
                border: '1px dashed rgba(59, 130, 246, 0.35)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.03)',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PAY-AS-YOU-GO —
              </div>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
              </p>
            </div>

            {/* B2B Reseller Tiers */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PARTNERSHIPS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                B2B & Agency Tiers
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                White-label execution and volume pricing for agencies, resellers and enterprise teams.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: '1140px', margin: '0 auto 5.5rem auto' }} className="graphics-pricing-grid">
              {partnershipTiersData.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '2.25rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                    position: 'relative'
                  }}
                >
                  {tier.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: tier.tag === 'MOST POPULAR' ? '#C2410C' : tier.tag === 'BEST VALUE' ? '#5B21B6' : '#B45309',
                        color: '#FFFFFF',
                        padding: '0.25rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.625rem',
                        fontWeight: 900,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tier.tag}
                    </span>
                  )}
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{tier.tier}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3B82F6', fontFamily: 'Outfit, serif', margin: '0.75rem 0' }}>{tier.discount}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* Work showcase marquee */}
            <div style={{ margin: '4rem 0' }}>
              <WorkShowcaseMarquee />
            </div>

            {/* SMM FAQs accordion */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — COMMON QUESTIONS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                Pricing & Process FAQs
              </h2>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto 5rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {smmFaqsData.map((faq, index) => {
                const isOpen = openInlineSmmFaqIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.03)' : 'none',
                      transition: 'box-shadow 0.3s ease'
                    }}
                  >
                    <div
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.75rem',
                        fontWeight: 700,
                        color: '#0F172A'
                      }}
                      onClick={() => setOpenInlineSmmFaqIndex(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#64748B', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                        ＋
                      </span>
                    </div>
                    {isOpen && (
                      <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid #F1F5F9', backgroundColor: '#FFFFFF' }}>
                        <p style={{ margin: 0, fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SMM CTA BANNER */}
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <div style={{ maxWidth: '640px' }}>
                <span className="section-tag" style={{ background: 'rgba(255,78,39,0.2)', color: '#FF4E27', border: 'none', marginBottom: '0.75rem' }}>
                  VIRAL GROWTH ENGINE
                </span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFF', marginBottom: '0.5rem' }}>
                  Ready to Dominate Social Media?
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '1rem 2.2rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}
                >
                  💬 Discuss SMM on WhatsApp
                </a>
                <button
                  className="btn btn-secondary"
                  style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)', padding: '1rem 2.2rem', fontSize: '1rem' }}
                  onClick={() => window.open('https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services', '_blank')}
                >
                  Book SMM Strategy Call ➔
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* HEADER & SUBTITLE MATCHING SCREENSHOT */}
            <div className="section-header services-section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
              <h2 className="services-heading" style={{ color: '#0F172A' }}>
                Services & Transparent Pricing
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                No lock-in contracts. No hidden fees. Click any service for the full breakdown: pain points, deliverables, approach and FAQs.
              </p>
            </div>

            {/* 17 SERVICE CARDS GRID MATCHING SCREENSHOT 1 & 2 EXACTLY */}
            <div className="responsive-4-grid" style={{ marginBottom: '2.5rem', maxWidth: '1100px', margin: '0 auto 2.5rem auto' }}>
              {detailed17Services.map((service) => (
                <div
                  key={service.id}
                  style={{
                    background: '#FFFFFF',
                    borderTop: '4px solid #FF4E27',
                    borderLeft: '1px solid #E2E8F0',
                    borderRight: '1px solid #E2E8F0',
                    borderBottom: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '1.5rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 25px rgba(11, 19, 42, 0.04)',
                    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.04)';
                  }}
                  onClick={() => {
                    const slug = SERVICE_ID_TO_SLUG[service.id] || service.id;
                    if (onNavigate) {
                      onNavigate('service-details', slug);
                    } else {
                      window.location.href = `/services/${slug}`;
                    }
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A', fontFamily: 'Outfit, serif', lineHeight: 1.25 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem', lineHeight: 1.45, flexGrow: 1 }}>
                    {service.description}
                  </p>

                  {/* PRICE TAG & FULL DETAILS LINK MATCHING SCREENSHOT */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: 'auto' }}>
                    <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: '#3B82F6' }}>
                      {service.pricing}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.05em' }}>
                      FULL DETAILS →
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VIEW ALL SERVICES & PRICING PILL BUTTON MATCHING SCREENSHOT */}
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('services');
                  } else {
                    window.location.href = '#services';
                  }
                }}
                style={{
                  backgroundColor: '#FDFBF7',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  borderRadius: '999px',
                  padding: '0.85rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F172A';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FDFBF7';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
              >
                View All Services & Pricing →
              </button>
            </div>
          </>
        )}



      </div>

      {/* SERVICE DEEP DIVE FULL PAGE VIEW */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          {/* STICKY TOP PAGE BAR */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#0F172A',
                backgroundColor: '#F1F5F9',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid #CBD5E1'
              }}
            >
              ← Back to All Services
            </button>
            <button
              onClick={() => setSelectedService(null)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A'
              }}
            >
              ✕
            </button>
          </div>

          <div className="modal-card" style={{ maxWidth: '1380px', padding: '3.5rem 2.5rem 6rem 2.5rem' }} onClick={(e) => e.stopPropagation()}>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{selectedService.icon}</div>
              <span className="section-tag">{selectedService.category}</span>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', margin: '0.4rem 0 0.5rem 0', fontWeight: 900, color: '#0F172A' }}>{selectedService.title}</h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
                {selectedService.longDescription || selectedService.description}
              </p>
              <div style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 900, color: '#D97706', marginTop: '0.75rem' }}>
                {selectedService.pricing}
              </div>
            </div>

            {selectedService.title === 'Social Media Marketing' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PACKAGES & PRICING</span>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '2.5rem' }}>
                  Social Media Marketing Packages
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {smmPackagesData.map((pkg, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: pkg.popular ? '#1A1311' : '#FFFFFF',
                        color: pkg.popular ? '#FFFFFF' : '#0F172A',
                        border: pkg.popular ? '2px solid #D97706' : '1px solid #E2E8F0',
                        borderRadius: '24px',
                        padding: '2rem 1.5rem 1.75rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: pkg.popular ? '0 15px 35px rgba(217, 119, 6, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.02)',
                        position: 'relative'
                      }}
                    >
                      {pkg.badge && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#D97706',
                            color: '#FFFFFF',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.65rem',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {pkg.badge}
                        </span>
                      )}

                      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#E0B56C' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                          {pkg.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginTop: '0.4rem' }}>
                          <span style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Outfit, serif' }}>
                            ₹{pkg.price}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: pkg.popular ? '#94A3B8' : '#64748B', marginLeft: '0.25rem', fontWeight: 600 }}>
                            /mo
                          </span>
                        </div>
                      </div>

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flex: 1, fontSize: '0.875rem' }}>
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: pkg.popular ? '#E0B56C' : '#D97706', fontWeight: 900 }}>✓</span>
                            <span style={{ color: pkg.popular ? '#E2E8F0' : '#475569', fontWeight: 500 }}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '0.85rem',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          backgroundColor: pkg.popular ? '#E0B56C' : '#1A1311',
                          color: pkg.popular ? '#1A1311' : '#FFFFFF',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Get Started →
                      </a>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    margin: '0 auto 4rem auto',
                    background: 'linear-gradient(135deg, #F0F6FC 0%, #E3EBF4 100%)',
                    border: '1px dashed rgba(59, 130, 246, 0.35)',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.03)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PAY-AS-YOU-GO —
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PARTNERSHIPS —
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                    B2B & Agency Tiers
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
                    White-label execution and volume pricing for agencies, resellers and enterprise teams.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', margin: '0 auto 4rem auto' }} className="graphics-pricing-grid">
                  {partnershipTiersData.map((tier, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '24px',
                        padding: '1.75rem 1.25rem',
                        textAlign: 'center',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      {tier.tag && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: tier.tag === 'MOST POPULAR' ? '#C2410C' : tier.tag === 'BEST VALUE' ? '#5B21B6' : '#B45309',
                            color: '#FFFFFF',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            fontSize: '0.575rem',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tier.tag}
                        </span>
                      )}
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>{tier.tier}</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3B82F6', fontFamily: 'Outfit, serif', margin: '0.5rem 0' }}>{tier.discount}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{tier.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedService.title === 'Graphic Design' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TRANSPARENT PRICING</span>
                  <span style={{ width: '50px', height: '1px', background: '#3B82F6', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Graphic Design Price List
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748B', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
                  Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change.
                </p>

                {/* Grid container */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {graphicDesignPricingData.map((cat, catIdx) => (
                    <div
                      key={catIdx}
                      style={{
                        background: '#FFFFFF',
                        borderTop: '4px solid #FF4E27',
                        borderLeft: '1px solid #E2E8F0',
                        borderRight: '1px solid #E2E8F0',
                        borderBottom: '1px solid #E2E8F0',
                        borderRadius: '20px',
                        padding: '1.5rem 1.25rem 1.75rem 1.25rem',
                        boxShadow: '0 8px 25px rgba(11, 19, 42, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.03)';
                      }}
                      onClick={() => {
                        const slug = cat.title.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                        if (onNavigate) {
                          onNavigate('graphic-details', slug);
                        } else {
                          window.location.href = `/graphic-design#${slug}`;
                        }
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.25rem 0', fontFamily: 'Outfit, sans-serif' }}>
                        {cat.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                        {cat.subtitle}
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {cat.items.map((item, itemIdx) => {
                          const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                          return (
                            <div
                              key={itemIdx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.81rem',
                                color: '#334155',
                                padding: '0.4rem 0.5rem',
                                borderBottom: '1px solid #F1F5F9',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F8FAFC';
                                e.currentTarget.style.textDecoration = 'underline';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.textDecoration = 'none';
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onNavigate) {
                                  onNavigate('design-item', slug);
                                } else {
                                  window.location.href = `/graphic-design/${slug}`;
                                }
                              }}>
                              <span style={{ fontWeight: 500, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                              <span style={{ fontWeight: 700, color: '#3B82F6', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}>{item.price}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', fontSize: '0.8rem', fontWeight: 800, color: '#FF4E27', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <span>View Explanation & Details</span>
                        <span style={{ fontSize: '0.9rem' }}>➔</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                  <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Our Approach
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                      Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.
                    </p>
                  </div>
                  <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Typical Results
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DELIVERABLES</span>
                  <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.25rem' }}>
                  What We Do
                </h3>

                {/* Grid of badges/pills layout */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                  {selectedService.whatWeDo.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#FFF1EE',
                        border: '1px solid rgba(255,78,39,0.2)',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '14px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#0F172A',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 2px 8px rgba(255,78,39,0.03)'
                      }}
                    >
                      <span style={{ color: '#D97706', fontWeight: 900 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                {serviceApproachResults[selectedService.title] && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Our Approach
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].approach}
                      </p>
                    </div>
                    <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Typical Results
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].typicalResults}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FAQS INTERACTIVE ACCORDION SECTION */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
                <span style={{ width: '50px', height: '1px', background: '#D97706', opacity: 0.6 }}></span>
              </div>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
                {selectedService.title} FAQs
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(selectedService.title === 'Social Media Marketing' ? smmFaqsData : selectedService.faqs).map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(11, 19, 42, 0.03)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        style={{
                          width: '100%',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span style={{ fontSize: '1.025rem', fontWeight: 800, color: '#0F172A' }}>
                          Q: {faq.q}
                        </span>
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#FF4E27' : '#F1F5F9',
                            color: isOpen ? '#FFFFFF' : '#475569',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: 800,
                            transition: 'all 0.25s ease',
                            marginLeft: '1rem',
                            flexShrink: 0
                          }}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.25rem 1.25rem 1.25rem',
                            color: '#475569',
                            fontSize: '0.925rem',
                            lineHeight: 1.6,
                            borderTop: '1px solid #F1F5F9',
                            marginTop: '-0.25rem',
                            paddingTop: '0.85rem'
                          }}
                        >
                          <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>Answer:</strong>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem' }}
              onClick={() => {
                setSelectedService(null);
                window.open(`https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services`, '_blank');
              }}
            >
              Get Started with {selectedService.title} ➔
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
