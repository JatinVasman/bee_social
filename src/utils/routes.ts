import type { PageView } from '../types';

export interface RouteInfo {
  page: PageView;
  slug?: string;
}

// Service slug to ID and ID to canonical slug mapping
export const SERVICE_SLUG_TO_ID: Record<string, string> = {
  'social-media-marketing': '1',
  'smm': '1',
  'graphic-design': '2',
  'graphics': '2',
  'ugc-reels-creator-marketing': '3',
  'ugc-reels': '3',
  'creator-marketing': '3',
  'ugc': '3',
  'dashboard-kpi-systems': '4',
  'kpi-dashboards': '4',
  'dashboards': '4',
  'analytics': '4',
  'seo-services': '5',
  'seo': '5',
  'search-engine-optimization': '5',
  'google-ads-management': '6',
  'google-ads': '6',
  'ppc': '6',
  'paid-search': '6',
  'meta-ads-management': '7',
  'meta-ads': '7',
  'facebook-ads': '7',
  'instagram-ads': '7',
  'paid-ads': '7',
  'website-development': '8',
  'web-development': '8',
  'custom-web-apps': '8',
  'web-design': '8',
  'poster-design': '9',
  'posters': '9',
  'festival-posters': '9',
  'reels-video-production': '10',
  'reels-and-video-production': '10',
  'video-production': '10',
  'reels-production': '10',
  'reels': '10',
  'video-reels': '10',
  'video': '10',
  'e-commerce-marketing': '11',
  'ecommerce-marketing': '11',
  'ecommerce-scaling': '11',
  'e-commerce-scaling': '11',
  'lead-generation': '13',
  'b2b-lead-generation': '13',
  'performance-leads': '13',
  '12': '13',
  'content-marketing': '14',
  'content-engine': '14',
  'blogs-copywriting': '14',
  'local-seo': '15',
  'local-business-seo': '15',
  'gbp-optimization': '15',
  'whatsapp-marketing': '16',
  'whatsapp-api': '16',
  'whatsapp-automation': '16',
  'logo-branding': '17',
  'logo-and-branding': '17',
  'brand-identity-design': '17',
  'branding': '17',
  'logo-design': '17'
};

export const SERVICE_ID_TO_SLUG: Record<string, string> = {
  '1': 'social-media-marketing',
  '2': 'graphic-design',
  '3': 'ugc-reels-creator-marketing',
  '4': 'dashboard-kpi-systems',
  '5': 'seo-services',
  '6': 'google-ads-management',
  '7': 'meta-ads-management',
  '8': 'website-development',
  '9': 'poster-design',
  '10': 'reels-video-production',
  '11': 'e-commerce-marketing',
  '13': 'lead-generation',
  '14': 'content-marketing',
  '15': 'local-seo',
  '16': 'whatsapp-marketing',
  '17': 'logo-branding'
};

/**
 * Parses pathname and search parameters into a normalized PageView and slug
 */
export function parseRoute(pathname: string, search: string): RouteInfo {
  // 1. Check legacy query parameters for backwards compatibility
  const params = new URLSearchParams(search);
  const pageParam = params.get('page');
  const idParam = params.get('id') || params.get('service') || params.get('q');

  if (pageParam) {
    switch (pageParam) {
      case 'home':
        return { page: 'home' };
      case 'services':
        if (idParam) {
          const serviceId = SERVICE_SLUG_TO_ID[idParam.toLowerCase()] || idParam;
          return { page: 'service-details', slug: serviceId };
        }
        return { page: 'services' };
      case 'service-details':
        return { page: 'service-details', slug: idParam ? (SERVICE_SLUG_TO_ID[idParam.toLowerCase()] || idParam) : undefined };
      case 'blog':
      case 'blogs':
        return { page: 'blog' };
      case 'blog-post':
        return { page: 'blog-post', slug: idParam || undefined };
      case 'about':
        return { page: 'about' };
      case 'contact':
        return { page: 'contact' };
      case 'industries':
        return { page: 'industries', slug: idParam || undefined };
      case 'portfolio':
        return { page: 'portfolio' };
      case 'smm':
        return { page: 'smm' };
      case 'legal':
        return { page: 'home' };
      case 'legal-details':
        return { page: 'home' };
      case 'location':
        return { page: 'location', slug: idParam || undefined };
      case 'all-locations':
        return { page: 'all-locations' };
      case 'graphic-details':
        return { page: 'graphic-details', slug: idParam || undefined };
      case 'design-item':
        return { page: 'design-item', slug: idParam || undefined };
      default:
        return { page: pageParam as PageView, slug: idParam || undefined };
    }
  }

  // 2. Parse clean SEO path
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) {
    return { page: 'home' };
  }

  const rawSegments = cleanPath.split('/');
  const segments = rawSegments.map(s => decodeURIComponent(s).toLowerCase());
  const [first, ...rest] = segments;
  const second = rest.join('/');

  if (first === 'services' || first === 'service') {
    if (second) {
      const mappedId = SERVICE_SLUG_TO_ID[second] || second;
      return { page: 'service-details', slug: mappedId };
    }
    return { page: 'services' };
  }

  if (first === 'blogs' || first === 'blog') {
    if (second) {
      return { page: 'blog-post', slug: rawSegments.slice(1).join('/') };
    }
    return { page: 'blog' };
  }

  if (first === 'about' || first === 'about-us') {
    if (second) {
      return { page: 'about', slug: second };
    }
    return { page: 'about' };
  }

  if (first === 'contact' || first === 'contact-us') {
    return { page: 'contact' };
  }

  if (first === 'industries' || first === 'industry') {
    return { page: 'industries', slug: second || undefined };
  }

  if (first === 'portfolio' || first === 'our-work' || first === 'work') {
    return { page: 'portfolio' };
  }

  if (first === 'packages' || first === 'pricing') {
    return { page: 'packages' };
  }

  if (first === 'case-studies' || first === 'case-study') {
    return { page: 'case-studies' };
  }

  if (first === 'smm' || first === 'social-media-marketing') {
    return { page: 'smm' };
  }

  if (first === 'legal' || first === 'legal-details') {
    return { page: 'home' };
  }

  if (first === 'digital-marketing' || first === 'digital-marketing-agency' || first === 'digital-marketing-services') {
    if (second) {
      const city = second.replace(/^in\//, '').replace(/^in-/, '').replace(/^agency-in-/, '');
      return { page: 'location', slug: city };
    }
    return { page: 'all-locations' };
  }

  if (first.startsWith('digital-marketing-in-') || first.startsWith('digital-marketing-agency-in-')) {
    const city = first.replace(/^digital-marketing-agency-in-/, '').replace(/^digital-marketing-in-/, '');
    return { page: 'location', slug: city };
  }

  if (first === 'location' || first === 'locations') {
    if (second) {
      const city = second.replace(/^digital-marketing-agency-in-/, '').replace(/^digital-marketing-in-/, '').replace(/^digital-marketing-/, '');
      return { page: 'location', slug: city };
    }
    return { page: 'all-locations' };
  }

  if (first === 'all-locations') {
    return { page: 'all-locations' };
  }

  if (first === 'graphic-design' || first === 'graphic-details' || first === 'graphics') {
    if (second) {
      return { page: 'design-item', slug: second };
    }
    return { page: 'graphic-details' };
  }

  if (first === 'design-item') {
    return { page: 'design-item', slug: second };
  }

  return { page: 'home' };
}

/**
 * Returns the canonical clean SEO path for a given page and slug
 */
export function getRoutePath(page: PageView, slug?: string): string {
  switch (page) {
    case 'home':
      return '/';
    case 'services':
      return '/services';
    case 'service-details': {
      if (!slug) return '/services';
      const cleanSlug = SERVICE_ID_TO_SLUG[slug] || slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `/services/${cleanSlug}`;
    }
    case 'blog':
      return '/blogs';
    case 'blog-post':
      return slug ? `/blogs/${encodeURIComponent(slug)}` : '/blogs';
    case 'about': {
      if (!slug) return '/about';
      let cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (cleanSlug === 'siddhi' || cleanSlug === 'harsh' || cleanSlug === 'harsh-chaudhary') cleanSlug = 'founder';
      return `/about/${cleanSlug}`;
    }
    case 'contact':
      return '/contact';
    case 'industries': {
      if (!slug) return '/industries';
      let cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!cleanSlug.startsWith('marketing-for-') && !cleanSlug.startsWith('marketing-')) {
        cleanSlug = `marketing-for-${cleanSlug}`;
      }
      return `/industries/${cleanSlug}`;
    }
    case 'portfolio':
      return '/portfolio';
    case 'packages':
      return '/packages';
    case 'case-studies':
      return '/case-studies';
    case 'smm':
      return '/smm';

    case 'location': {
      if (!slug) return '/digital-marketing';
      const cleanSlug = slug.toLowerCase()
        .replace(/^digital-marketing-agency-in-/, '')
        .replace(/^digital-marketing-in-/, '')
        .replace(/^digital-marketing-/, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      return `/digital-marketing/${cleanSlug}`;
    }
    case 'all-locations':
      return '/digital-marketing';
    case 'graphic-details':
      return slug ? `/graphic-design#${encodeURIComponent(slug)}` : '/graphic-design';
    case 'design-item': {
      if (!slug) return '/graphic-design';
      const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `/graphic-design/${cleanSlug}`;
    }
    default:
      return '/';
  }
}
