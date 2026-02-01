// Skrypt do optymalizacji logo używając sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = 'assets/images/logo-kod-dla-dzieci.png';
const outputDir = 'assets/images';

// Rozmiary do utworzenia
const sizes = [
  { name: 'logo-32x32.png', width: 32, height: 32 },
  { name: 'logo-120x120.png', width: 120, height: 120 },
  { name: 'logo-150x150.png', width: 150, height: 150 },
  { name: 'logo-192x192.png', width: 192, height: 192 },
  { name: 'logo-512x512.png', width: 512, height: 512 },
];

async function optimizeLogo() {
  console.log('Optymalizacja logo...\n');
  
  const originalSize = fs.statSync(inputFile).size / 1024;
  console.log(`Oryginał: ${originalSize.toFixed(1)}KB\n`);

  let totalSize = 0;

  for (const size of sizes) {
    const outputPath = path.join(outputDir, size.name);
    
    await sharp(inputFile)
      .resize(size.width, size.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png({ 
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true
      })
      .toFile(outputPath);

    const fileSize = fs.statSync(outputPath).size / 1024;
    totalSize += fileSize;
    console.log(`✓ ${size.name}: ${size.width}x${size.height} - ${fileSize.toFixed(1)}KB`);
  }

  console.log(`\nSuma nowych plików: ${totalSize.toFixed(1)}KB`);
  console.log(`Oszczędność: ${(originalSize * 4 - totalSize).toFixed(1)}KB (${((1 - totalSize / (originalSize * 4)) * 100).toFixed(1)}%)`);
}

optimizeLogo().catch(console.error);
