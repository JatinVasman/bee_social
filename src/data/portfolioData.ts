export interface SocialMediaProject {
  id: string;
  name: string;
  niche: string;
  handle: string;
  profileImage: string;
  cardImage: string;
  posts: string[];
  description: string;
  results: string;
}

export interface WebsiteProject {
  id: string;
  name: string;
  niche: string;
  url: string;
  displayUrl: string;
  previewImage: string;
  tags: string[];
  description: string;
  buttonBg?: string;
}

export const socialMediaProjects: SocialMediaProject[] = [
  {
    id: 'sacred',
    name: 'Sacred',
    niche: 'Spiritual & Puja Essentials',
    handle: 'sacred_spiritual',
    profileImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_1.jpg',
    description: 'Handcrafted Rudraksha collections, yantras, pooja essentials, and spiritual wellness reels built for digital growth.',
    results: '+320% increase in online orders and direct messages.',
    posts: []
  },
  {
    id: 'leaf-lore',
    name: 'Leaf & Lore',
    niche: 'Premium Tea & Rituals',
    handle: 'leafandlore',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_2.jpg',
    description: 'Slow morning tea rituals, organic blends showcases, health benefits carousel series, and aesthetic product storytelling.',
    results: '12.5x increase in website subscription conversions.',
    posts: []
  },
  {
    id: 'jewellery-classic',
    name: 'Jewellery',
    niche: 'Fine Jewelry & Diamonds',
    handle: 'jewellery_classic',
    profileImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_3.jpg',
    description: 'Luxury diamond bracelets, gold earrings, royal blue silk display aesthetics, and bridal campaign curations.',
    results: '15.8x ROAS on Meta ads and high-ticket customer generation.',
    posts: []
  },
  {
    id: 'events-weddings',
    name: 'Events',
    niche: 'Luxury Wedding Planning',
    handle: 'events_weddings',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_4.jpg',
    description: 'Behind-the-scenes wedding shoots, grand stage entry reels, guest review reels, and luxurious setup walkthroughs.',
    results: '+280% booking inquiries generated for the wedding season.',
    posts: []
  },
  {
    id: 'real-estate-paradise',
    name: 'Real Estate',
    niche: 'Luxury Housing & Gated Plots',
    handle: 'realestate_paradise',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_5.jpg',
    description: 'Paradise Estate plots launch, world-class amenities infographics, premium layout walkthroughs, and developer branding.',
    results: 'Sold out all premium plots phase 1 within 60 days.',
    posts: []
  },
  {
    id: 'gems-howlite',
    name: 'Gems',
    niche: 'Crystals & Sulemani Stones',
    handle: 'gems_howlite',
    profileImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_6.jpg',
    description: 'Howlite crystal bracelets, authentic Sulemani stone showcases, quartz carousels, and minimalist wellness aesthetics.',
    results: '+190% increase in website checkouts.',
    posts: []
  },
  {
    id: 'gems-larimar',
    name: 'Gems',
    niche: 'Rare Gemstones & Astrology',
    handle: 'gems_larimar',
    profileImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_7.jpg',
    description: 'Rare Larimar stone spotlights, Howlite crystal benefits series, astrologer compliance carousels, and quartz showcases.',
    results: '+240% inbound leads for astrology consultation services.',
    posts: []
  },
  {
    id: 'jewellery-elegance',
    name: 'Jewellery',
    niche: 'Traditional Bridal Ornaments',
    handle: 'jewellery_elegance',
    profileImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_8.jpg',
    description: 'Handcrafted gold necklaces, traditional bracelets, elegance and craftsmanship stories, and luxury product photography.',
    results: '14.2x ROAS generated on Meta Catalog campaigns.',
    posts: []
  },
  {
    id: 'jewellery-diamonds',
    name: 'Jewellery',
    niche: 'Premium Diamond Jewellery',
    handle: 'jewellery_diamonds',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_9.jpg',
    description: 'Diamond bangles, solitaire rings, emerald necklaces, and clean premium product showcases for modern brides.',
    results: '+310% offline store visit queries from Instagram DMs.',
    posts: []
  },
  {
    id: 'real-estate-ambar',
    name: 'Real Estate',
    niche: 'Premium Apartments & Homesty',
    handle: 'realestate_ambar',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_10.jpg',
    description: 'Ambar Parkview apartment renders, Happy House location maps, premium layout diagrams, and residential branding.',
    results: '+180% site visit bookings achieved within 45 days.',
    posts: []
  },
  {
    id: 'flourish-wellness',
    name: 'Flourish',
    niche: 'Mental Health & Wellness',
    handle: 'flourish_wellness',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_11.jpg',
    description: 'Confidentiality in therapy guides, grief has no timeline series, emotional exhaustion signs, and wellness care carousels.',
    results: '+320% increase in patient bookings and inquiries.',
    posts: []
  },
  {
    id: 'bahari-springrolls-dark',
    name: 'Food Items',
    niche: 'FMCG & Frozen Food Branding',
    handle: 'bahari_springrolls_dark',
    profileImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_12.jpg',
    description: 'Wood-fired gourmet spring rolls, crispy samosa sheet packaging showcases, and moody dark-themed food visuals.',
    results: '+210% retail distributor inquiries achieved.',
    posts: []
  },
  {
    id: 'bahari-momos-orange',
    name: 'Food Items',
    niche: 'Frozen Momos & Dumplings',
    handle: 'bahari_momos_orange',
    profileImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_13.jpg',
    description: 'Perfect lunch momo sets, workday fuel campaigns, family feast packaging designs, and high-impact street-style food graphics.',
    results: '+160% Zomato & Swiggy delivery conversion growth.',
    posts: []
  },
  {
    id: 'real-estate-abc',
    name: 'Real Estate',
    niche: 'Commercial Buildings & Developers',
    handle: 'realestate_abc',
    profileImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_14.jpg',
    description: 'ABC Prestige office architectural rendering, built for excellence features, commercial spaces design blueprints, and developer launches.',
    results: '+110% commercial lease requests generated.',
    posts: []
  },
  {
    id: 'bahari-springrolls-green',
    name: 'Food Items',
    niche: 'Gourmet Spring Rolls & Packaging',
    handle: 'bahari_springrolls_green',
    profileImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_15.jpg',
    description: 'Crispy vegetable spring rolls packing, street-style food model photos, fresh ingredient carousels, and hot plate serving designs.',
    results: '+270% increase in brand search impressions and retail demand.',
    posts: []
  },
  {
    id: 'spectrum-defence-academy',
    name: 'Academy',
    niche: 'NDA & Defence Coaching',
    handle: 'spectrum_defence_academy',
    profileImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_16.jpg',
    description: 'Spectrum Defence Academy: NDA vs CDS distinction carousels, current affairs updates, discipline motivational posts, and admissions banners.',
    results: '+180% increase in admissions and seminar inquiries.',
    posts: []
  },
  {
    id: 'sanghvi-jewellers-pink',
    name: 'Jewellery',
    niche: 'Premium Gold & Silver Ornaments',
    handle: 'sanghvijewellers_pink',
    profileImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_17.jpg',
    description: 'Royal pink suit lookbook, handcrafted earrings and gold ornaments, jewels that speak elegance, and luxury model photography.',
    results: '+240% footfall in offline showroom campaigns.',
    posts: []
  },
  {
    id: 'jewellery-elegance-diamond',
    name: 'Jewellery',
    niche: 'Luxury Diamond Sets',
    handle: 'jewellery_elegance_diamond',
    profileImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_18.jpg',
    description: 'Solitaire bridal rings, diamond necklaces, round arch graphic layouts, and high-fashion model shoots.',
    results: '14.5x ROAS achieved on luxury bridal collections.',
    posts: []
  },
  {
    id: 'jewellery-gold-cream',
    name: 'Jewellery',
    niche: 'Traditional Bridal Jewellery',
    handle: 'jewellery_gold_cream',
    profileImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_19.jpg',
    description: 'Temple gold sets, handcrafted bridal chokers, elegant design storytelling, and wedding season branding.',
    results: '+190% offline purchase bookings via social channels.',
    posts: []
  },
  {
    id: 'real-estate-aditya',
    name: 'Real Estate',
    niche: 'Construction & Architecture',
    handle: 'realestate_aditya',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_20.jpg',
    description: 'Aditya Constructions: building project showcases, construction mistake checklists, brick vs AAC block comparison posts, and developer branding.',
    results: '+210% inbound property building consult queries.',
    posts: []
  },
  {
    id: 'aurix-fragrances',
    name: 'Aurix',
    niche: 'Luxury Fragrance & Perfume',
    handle: 'aurix_fragrances',
    profileImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_21.jpg',
    description: 'Aurix luxury perfumes: ocean beach bottle setups, own your aura campaigns, dark theme luxury packaging, and minimalist style reels.',
    results: '+280% increase in checkout conversions.',
    posts: []
  },
  {
    id: 'ndecor-nbeyond',
    name: 'NdecorNbeyond',
    niche: 'Premium Interior Design',
    handle: 'ndecornbeyond',
    profileImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_22.jpg',
    description: 'Modern residential interior design showcases, catalog request carousels, comfort meets style bedrooms, and interior design specialist portfolios.',
    results: '+190% consultation inquiries generated.',
    posts: []
  },
  {
    id: 'real-estate-metrosquare',
    name: 'Real Estate',
    niche: 'Premium Apartments & Greater Noida',
    handle: 'realestate_metrosquare',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_23.jpg',
    description: 'Godrej Arden Greater Noida layouts, Verdantia Living smart apartments, elite homes locations, and premium builder launches.',
    results: '+140% site visits scheduled within 30 days.',
    posts: []
  },
  {
    id: 'heyharsh2026-branding',
    name: 'HeyHarsh2026',
    niche: 'SMM & Growth Consulting',
    handle: 'heyharsh2026',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_24.jpg',
    description: 'Personal branding advice: posting consistency rules, small business growth errors, logo vs brand identity guides, and agency life strategies.',
    results: '+340% inbound growth coaching calls scheduled.',
    posts: []
  },
  {
    id: 'vishwa-aahar-food',
    name: 'Food Items',
    niche: 'Indian Restaurant & Catering',
    handle: 'vishwa_aahar_food',
    profileImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_25.jpg',
    description: 'Vishwa Aahar menus: healthy traditional platters, authentic Indian breakfast lists, fresh aaloo puri posts, and home-style cooking branding.',
    results: '+220% increase in catering bookings and store footfall.',
    posts: []
  },
  {
    id: 'flourish-wellness-blue',
    name: 'Flourish',
    niche: 'Mental Health (Blue Series)',
    handle: 'flourish_blue',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_26.jpg',
    description: 'When love feels heavy instead of safe — sky blue mental wellness carousels, therapy FAQ posts, and mental growth tips.',
    results: '+250% patient inquiries.',
    posts: []
  },
  {
    id: 'automaven-smarthome',
    name: 'Automaven',
    niche: 'Smart Home & Automation',
    handle: 'automaven_in',
    profileImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_27.jpg',
    description: 'Unlock a smarter way to live: Smart IR universal remote features, Motion Sensor installations, Switch to Smart guides, and smart secure home posts.',
    results: '+190% increase in smart device purchases and inquiries.',
    posts: []
  },
  {
    id: 'bharat-battery-house',
    name: 'Bharat Battery',
    niche: 'Industrial & Car Batteries',
    handle: 'bharat_battery_house',
    profileImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_28.jpg',
    description: 'Power that never quits: Exide inverter battery deals, tired of power cuts campaigns, Exide battery key features, and lights gone solutions.',
    results: '+240% increase in offline distribution requests.',
    posts: []
  },
  {
    id: 'parshi-waffles',
    name: 'Parshi Waffles',
    niche: 'Gourmet Waffles & Desserts',
    handle: 'parshiwaffles',
    profileImage: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_29.jpg',
    description: 'Waffles like no other: rich chocolate ganache topping tutorials, waffle recipe stories, healthy and tasty waffle menus.',
    results: '+310% weekend walk-ins and delivery orders achieved.',
    posts: []
  },
  {
    id: 'trylokaa-saree',
    name: 'Trylokaa Saree',
    niche: 'Ethnic Saree Wear & Boutique',
    handle: 'trylokaa_saree',
    profileImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_30.jpg',
    description: 'Trylokaa handloom sarees: finest silk weaves, shop the look models showcases, new traditional arrivals, and design boutique branding.',
    results: '+180% increase in boutique inquiries and purchases.',
    posts: []
  },
  {
    id: 'flourish-wellness-purple',
    name: 'Flourish',
    niche: 'Mental Health (Purple Series)',
    handle: 'flourish_purple',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_31.jpg',
    description: 'Signs you may be emotionally exhausted, who can benefit from counselling, you don\'t need to have it all figured out, and therapy guides in a lavender colorway.',
    results: '+280% organic engagement and user reach.',
    posts: []
  },
  {
    id: 'design-build-dba',
    name: 'Design & Build',
    niche: 'Modern Vision & Architect',
    handle: 'design_build_dba',
    profileImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_32.jpg',
    description: 'DBA architectural designs: designing spaces, shaping dreams, landmarks not just buildings campaigns, and sustainable blueprints.',
    results: '+190% design consultation requests.',
    posts: []
  },
  {
    id: 'genix-fertility',
    name: 'Genix Fertility',
    niche: 'Medical Fertility Clinic',
    handle: 'genix_fertility',
    profileImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_33.jpg',
    description: 'Fertility clinic guidelines: lifestyle changes, egg health daily habits, and pregnancy advice posts.',
    results: '+240% increase in patient bookings.',
    posts: []
  },
  {
    id: 'rds-bundi-jewellers',
    name: 'RdsBundi',
    niche: 'Traditional Gold Jewellery',
    handle: 'rdsbundi_jewellers',
    profileImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_34.jpg',
    description: 'Swarngiri and Ramlal Jewellers: gold necklace collections, traditional bangles showcases, and wedding season lookbook curations.',
    results: '+170% offline showroom footfall and engagement.',
    posts: []
  },
  {
    id: 'techeye-secure',
    name: 'TechEye Secure',
    niche: 'Surveillance & HD Cameras',
    handle: 'techeyesecure',
    profileImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_35.jpg',
    description: 'HD & smart surveillance solutions, secure your space setups, hiring technician alerts, and holiday discounts.',
    results: '+210% increase in residential security system inquiries.',
    posts: []
  },
  {
    id: 'thefifthnote-perfumes',
    name: 'Thefifthnote',
    niche: 'Premium Fragrance & Perfume',
    handle: 'thefifthnote',
    profileImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_36.jpg',
    description: 'Thefifthnote: premium red-theme perfume aesthetics, Magnet Magic campaigns, beach release promotions, and special launch curations.',
    results: '+270% increase in checkout conversions.',
    posts: []
  },
  {
    id: 'growmate-stationery',
    name: 'GrowMate',
    niche: 'Stationery & Office Supplies',
    handle: 'growmate_jodhpur',
    profileImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_37.jpg',
    description: 'GrowMate: Jodhpur smart office supply logistics, stationery delivery app launch campaigns, before vs after views, and local merchant branding.',
    results: '+190% increase in merchant signups and app downloads.',
    posts: []
  },
  {
    id: 'elepha-footwear',
    name: 'Elepha',
    niche: 'Premium Sneakers & Streetwear',
    handle: 'elephawear',
    profileImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_38.jpg',
    description: 'Elepha streetwear sneakers: red and black high-contrast shoe catalog showcases, coolest sneakers releases, and new arrival graphics.',
    results: '12.8x ROAS generated on Meta Catalog conversion campaigns.',
    posts: []
  },
  {
    id: 'sindhu-enterprises-saree',
    name: 'Sindhu Enterprises',
    niche: 'Premium Banarasi & Silk Sarees',
    handle: 'sindhu_enterprises',
    profileImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_39.jpg',
    description: 'Sindhu Enterprises boutique saree collections: handloom grace, classic silk beauty showcases, model catalog lookbooks, and everyday royalty branding.',
    results: '+220% increase in customer WhatsApp inquiries and booking conversions.',
    posts: []
  },
  {
    id: 'flourish-wellness-green',
    name: 'Flourish',
    niche: 'Mental Health (Green Series)',
    handle: 'flourish_green',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_40.jpg',
    description: 'Grief has no timeline guides, you don\'t need to have it all figured out series, who can benefit from counselling posts, and therapy confidentiality carousels in an olive-green colorway.',
    results: '+310% increase in profile visits and brand engagement.',
    posts: []
  },
  {
    id: 'wappx-marketing',
    name: 'Wappx',
    niche: 'WhatsApp Marketing & Automation',
    handle: 'wappx_marketing',
    profileImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=200&q=80',
    cardImage: '/portfolio_cards/card_41.jpg',
    description: 'Wappx WhatsApp marketing: click-to-WhatsApp ad funnels, auto-reply chatbot setups, customer engagement dashboards, and lead nurturing solutions.',
    results: '+340% increase in customer conversion rates.',
    posts: []
  }
];

export const websiteProjects: WebsiteProject[] = [
  {
    id: 'vasoo-bamboo',
    name: 'Vasoo Bamboo Arts',
    niche: 'Sustainable E-Commerce',
    url: 'https://www.vasoobambooarts.in/',
    displayUrl: 'www.vasoobambooarts.in/',
    previewImage: '/portfolio_cards/web_preview_1.png',
    tags: ['E-commerce', 'Sustainable', 'D2C'],
    description: 'Sustainable handcrafted bamboo products e-commerce with rich product storytelling, artisan profiles, and seamless shopping experience for eco-conscious buyers.'
  },
  {
    id: 'vihaara',
    name: 'Vihaara',
    niche: 'Spiritual & Wellness',
    url: 'https://vihaara.org/',
    displayUrl: 'vihaara.org/',
    previewImage: '/portfolio_cards/web_preview_2.png',
    tags: ['Non-Profit', 'Wellness', 'Spiritual'],
    description: 'Spiritual wellness organisation website featuring meditation programs, retreats and community engagement — calm UI with serene typography and high credibility.'
  },
  {
    id: 'decorem',
    name: 'Decorem by Sonya Mehta',
    niche: 'Interior Design Studio',
    url: 'https://decorembysonyamehta.com/',
    displayUrl: 'decorembysonyamehta.com/',
    previewImage: '/portfolio_cards/web_preview_3.png',
    tags: ['Interior Design', 'Portfolio', 'Premium'],
    description: 'Premium interior design studio portfolio showcasing luxury residential projects, design philosophy and consultation booking with editorial-grade visual storytelling.'
  },
  {
    id: 'rahi-homes',
    name: 'Rahi Homes',
    niche: 'Real Estate & Living',
    url: 'https://rahihomeshostel.com/',
    displayUrl: 'rahihomeshostel.com/',
    previewImage: '/portfolio_cards/web_preview_4.png',
    tags: ['Real Estate', 'Property', 'Modern'],
    description: 'Premium real estate listings platform with property search, virtual tours, project showcases and lead capture — designed for modern home buyers in India.'
  },
  {
    id: 'daily-mob',
    name: 'Daily Mob Design',
    niche: 'Creative Design Agency',
    url: 'https://dailymobdesign.com/',
    displayUrl: 'dailymobdesign.com/',
    previewImage: '/portfolio_cards/web_preview_5.png',
    tags: ['Agency', 'Design', 'Portfolio'],
    description: 'Creative design agency portfolio site featuring case studies, services, and bold visual identity — built to convert visitors into design clients.'
  },
  {
    id: 'layers-clothing',
    name: 'Layers Clothing',
    niche: 'Fashion & Apparel',
    url: 'https://www.layersclothing.in/',
    displayUrl: 'www.layersclothing.in/',
    previewImage: '/portfolio_cards/web_preview_6.png',
    tags: ['E-commerce', 'Fashion', 'D2C'],
    description: 'Premium fashion e-commerce brand with curated collections, lookbook galleries, size guides and seamless checkout — built for modern Indian shoppers.'
  }
];
