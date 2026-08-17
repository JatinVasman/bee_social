export type PageView = 'home' | 'services' | 'smm' | 'industries' | 'portfolio' | 'blog' | 'blog-post' | 'about' | 'location' | 'all-locations' | 'contact' | 'service-details' | 'graphic-details' | 'design-item';

export type Currency = 'INR' | 'USD' | 'EUR';

export interface LocationData {
  name: string;
  type: 'domestic' | 'international';
  country: string;
}

export interface BlueprintSearchItem {
  title: string;
  category: string;
  desc: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  featured?: boolean;
}
