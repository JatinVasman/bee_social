const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'public/domains';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// 66 distinct Unsplash image IDs matching each graphic design item
const itemMap = {
  // Standard Creatives (17 items)
  'poster-design': 'photo-1561070791-26c113006238',
  'flyer-design': 'photo-1502239608882-93b729c6af43',
  'pamphlet-design': 'photo-1626785774573-4b799315345d',
  'leaflet-design': 'photo-1586075010923-2dd4570fb338',
  'social-media-post-design': 'photo-1611162617213-7d7a39e9b1d7',
  'festival-post-design': 'photo-1513151233558-d860c5398176',
  'promotional-post-design': 'photo-1460925895917-afdab827c52f',
  'product-post-design': 'photo-1523275335684-37898b6baf30',
  'offer-post-design': 'photo-1555529669-e69e7aa0ba9a',
  'event-poster-design': 'photo-1492684223066-81342ee5ff30',
  'school-admission-creative': 'photo-1523050854058-8df90110c9f1',
  'food-promotion-poster': 'photo-1565299624946-b28f40a0ae38',
  'meta-ad-creative': 'photo-1542751371-adc38448a05e',
  'google-display-ad': 'photo-1563986768609-322da13575f3',
  'google-banner-ad': 'photo-1432888622747-4eb9a8efeb07',
  'whatsapp-marketing-creative': 'photo-1611746872915-64382b5c76da',
  'app-promotion-creative': 'photo-1512941937669-90a1b58e7e9c',

  // Structured Designs (9 items)
  'visiting-card-design': 'photo-1589030343991-69ea1433b941',
  'letterhead-design': 'photo-1616628188502-413f2fe46e5e',
  'id-card-design': 'photo-1590650046871-92c887180603',
  'certificate-design': 'photo-1579621970795-87faff37d16a',
  'quotation-design': 'photo-1554224155-8d04cb21cd6c',
  'carousel-design': 'photo-1600132806370-bf17e65e942f',
  'menu-card-design': 'photo-1590301157890-4810ed352733',
  'youtube-banner-design': 'photo-1611162616305-c69b3fa7fbe0',
  'event-invitation-design': 'photo-1515934751635-c81c6bc9a2d8',

  // Multi-Page Documents (9 items)
  'ppt-presentation-design': 'photo-1557804506-669a67965ba0',
  'investor-pitch-deck': 'photo-1551836022-d5d88e9218df',
  'sales-presentation': 'photo-1542744094-3a31f103e35f',
  'business-proposal-design': 'photo-1454165804606-c3d57bc86b40',
  'training-presentation': 'photo-1524178232363-1fb2b075b655',
  'catalogue-design': 'photo-1544716278-ca5e3f4abd8c',
  'school-magazine-design': 'photo-1506880018603-83d5b814b5a6',
  'prospectus-design': 'photo-1434030216411-0b793f4b4173',
  'annual-report-design': 'photo-1508824623134-cbf7a5c7a264',

  // Large-Format & Corporate Branding (13 items)
  'standee-design': 'photo-1594787318286-3d835c1d207f',
  'flex-banner-design': 'photo-1540575467063-178a50c2df87',
  'roll-up-banner-design': 'photo-1582139329536-e7284fece509',
  'hoarding-design': 'photo-1518005020951-eccb494ad742',
  'billboard-design': 'photo-1522071820081-009f0129c71c',
  'shop-branding-design': 'photo-1583847268964-b28dc8f51f92',
  'vehicle-branding-design': 'photo-1506015391300-4802dc74de2e',
  'wall-branding-design': 'photo-1497366216548-37526070297c',
  'product-packaging-design': 'photo-1607344645866-009c320c5ab8',
  'box-packaging-design': 'photo-1595079676339-1534801ad6cf',
  'company-profile-design': 'photo-1486406146926-c627a92ad1ab',
  'brand-guidelines': 'photo-1434626881859-194d67b2b86f',
  'logo-design': 'photo-1516321318423-f06f85e504b3',

  // Packaging & Product Design (4 items)
  'product-label-design': 'photo-1484980972926-edee96e0960d',
  'product-tag-design': 'photo-1556742049-0cfed4f6a45d',
  'shopping-bag-design': 'photo-1544816155-12df9643f363',
  'product-mockup-design': 'photo-1526170375885-4d8ecf77b99f',

  // Restaurant & Hospitality (4 items)
  'restaurant-menu-design': 'photo-1546069901-ba9599a7e63c',
  'room-service-menu-design': 'photo-1544025162-d76694265947',
  'hotel-brochure-design': 'photo-1566073771259-6a8506099945',
  'tent-card-design': 'photo-1613274554329-70f997f5789f',

  // Custom & Creative Services (10 items)
  'infographic-design': 'photo-1551288049-bebda4e38f71',
  'vector-tracing': 'photo-1579783902614-a3fb3927b6a5',
  'photo-retouching': 'photo-1522202176988-66273c2fd55f',
  'photo-manipulation': 'photo-1518770660439-4636190af475',
  'ai-image-enhancement': 'photo-1618005182384-a83a8bd57fbe',
  'merchandise-design': 'photo-1576566588028-4147f3842f27',
  't-shirt-design': 'photo-1521572267360-ee0c2909d518',
  'landing-page-graphics': 'photo-1507238691740-187a5b1d37b8',
  'custom-illustration': 'photo-1618005198143-e5283b519a7f',
  'custom-artwork': 'photo-1513364776144-60967b0f800f'
};

// Also add category defaults
const catMap = {
  'standard-creatives': 'photo-1618005182384-a83a8bd57fbe',
  'structured-designs': 'photo-1616628188502-413f2fe46e5e',
  'multi-page-documents': 'photo-1506880018603-83d5b814b5a6',
  'large-format-corporate-branding': 'photo-1594787318286-3d835c1d207f',
  'packaging-product-design': 'photo-1607344645866-009c320c5ab8',
  'restaurant-hospitality': 'photo-1613274554329-70f997f5789f',
  'custom-creative-services': 'photo-1579783902614-a3fb3927b6a5'
};

const allImages = { ...itemMap, ...catMap };
const entries = Object.entries(allImages);
let completed = 0;

function downloadNext() {
  if (completed >= entries.length) {
    console.log('All image downloads completed successfully!');
    process.exit(0);
  }
  
  const [name, id] = entries[completed];
  const url = 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=600&q=70';
  const dest = path.join(dir, name + '.jpg');
  
  // If file already exists and is not empty, skip downloading to save bandwidth
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`[${completed+1}/${entries.length}] Skipping existing: ${name}`);
    completed++;
    downloadNext();
    return;
  }

  const file = fs.createWriteStream(dest);
  
  https.get(url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`[${completed+1}/${entries.length}] Downloaded: ${name}`);
      completed++;
      setTimeout(downloadNext, 100); // 100ms throttle
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error('Error downloading:', name, err.message);
    completed++;
    downloadNext();
  });
}

downloadNext();
