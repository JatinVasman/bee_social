import { Jimp } from 'jimp';

const files = [
  'C:/Users/Lenovo/.gemini/antigravity/brain/f8393ccc-41aa-4c28-aec1-1bd8aadb4d15/.user_uploaded/media_1786218345868.png',
  'C:/Users/Lenovo/.gemini/antigravity/brain/f8393ccc-41aa-4c28-aec1-1bd8aadb4d15/.user_uploaded/media_1786218467892.png',
  'C:/Users/Lenovo/.gemini/antigravity/brain/f8393ccc-41aa-4c28-aec1-1bd8aadb4d15/.user_uploaded/media_1786218485284.png'
];

async function main() {
  for (const file of files) {
    const img = await Jimp.read(file);
    const w = img.bitmap.width;
    const h = img.bitmap.height;

    // Scan vertical center of the center phone (x around 512, which is w/2)
    // Find where the grid of posts starts and ends.
    // The posts are colored, while the header is white/light.
    const centerX = 512;
    let gridTop = -1;
    let gridBottom = -1;
    for (let y = 100; y < h - 10; y++) {
      const color = img.getPixelColor(centerX, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;

      // Check if it's a colored pixel (not white card background, not light gray separator)
      const isCardBg = r > 245 && g > 245 && b > 245;
      if (!isCardBg) {
        if (gridTop === -1) gridTop = y;
        gridBottom = y;
      }
    }

    console.log(`File: ${file}`);
    console.log(`Center column y-scan: top=${gridTop}, bottom=${gridBottom}, height=${gridBottom - gridTop + 1}`);
  }
}

main();
