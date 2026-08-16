import fs from 'fs';
import path from 'path';

const staticRoutes = [
  '',
  '/services',
  '/services/seo',
  '/services/social-media-marketing',
  '/services/paid-ads',
  '/services/google-ads',
  '/services/meta-ads',
  '/services/web-development',
  '/services/graphic-design',
  '/services/ugc-reels-creator-marketing',
  '/services/dashboard-kpi-systems',
  '/services/whatsapp-marketing',
  '/services/email-marketing',
  '/services/influencer-marketing',
  '/services/b2b-lead-generation',
  '/services/ecommerce-scaling',
  '/services/cro',
  '/services/local-seo',
  '/services/ai-automation-systems',
  '/services/brand-identity-design',
  '/blogs',
  '/about',
  '/contact',
  '/industries',
  '/portfolio',
  '/smm',
  '/legal',
  '/locations',
  '/graphic-design'
];

const urls = [];
staticRoutes.forEach(r => {
  urls.push({
    loc: 'https://digitaldigix.com' + r,
    changefreq: r === '' ? 'daily' : 'weekly',
    priority: r === '' ? '1.0' : (r.startsWith('/services') || r === '/blogs' ? '0.9' : '0.8')
  });
});

// Add all blog markdown files
const blogsDir = path.join(process.cwd(), 'public', 'blogs');
if (fs.existsSync(blogsDir)) {
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  files.forEach(f => {
    const slug = f.replace(/\.md$/, '');
    urls.push({
      loc: 'https://digitaldigix.com/blogs/' + encodeURIComponent(slug),
      changefreq: 'monthly',
      priority: '0.8'
    });
  });
}

// Add top locations
const topLocations = [
  'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'ahmedabad', 'pune', 'noida', 'gurgaon',
  'jaipur', 'dehradun', 'uttarakhand', 'chandigarh', 'lucknow', 'surat', 'indore', 'nagpur', 'kochi', 'coimbatore',
  'ghaziabad', 'faridabad', 'thane', 'navi-mumbai', 'bhopal', 'visakhapatnam', 'patna', 'bhubaneswar', 'vadodara',
  'rajkot', 'ludhiana', 'amritsar', 'kanpur', 'varanasi', 'agra', 'nashik', 'mysuru', 'mangalore', 'goa',
  'guwahati', 'raipur', 'ranchi', 'jodhpur', 'udaipur', 'vijayawada', 'thiruvananthapuram', 'madurai', 'meerut',
  'moradabad', 'prayagraj', 'jammu', 'gwalior', 'gorakhpur', 'ajmer', 'kota', 'jabalpur', 'solapur', 'kolhapur',
  'usa', 'australia', 'uk', 'canada', 'dubai', 'singapore', 'malaysia'
];

topLocations.forEach(loc => {
  urls.push({
    loc: 'https://digitaldigix.com/digital-marketing/' + loc,
    changefreq: 'monthly',
    priority: '0.7'
  });
});

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('Successfully generated public/sitemap.xml with ' + urls.length + ' clean path URLs');
