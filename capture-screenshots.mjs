import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
];

const executablePath = chromePaths.find(p => fs.existsSync(p));

async function run() {
  if (!executablePath) {
    console.error('No Chrome or Edge found!');
    process.exit(1);
  }
  console.log('Using browser at:', executablePath);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to https://johnnyburkecatering.com/ ...');
  await page.goto('https://johnnyburkecatering.com/', { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait extra 3 seconds for images and fonts to finish rendering
  await new Promise(r => setTimeout(r, 3000));

  const outDir = path.resolve('public', 'inspiration');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Full page screenshot
  console.log('Capturing full page screenshot...');
  const fullPagePath = path.join(outDir, 'johnnyburke-fullpage.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Full page saved to:', fullPagePath);

  // 2. Viewport / Hero screenshot
  const heroPath = path.join(outDir, 'johnnyburke-hero.png');
  await page.screenshot({ path: heroPath });
  console.log('Hero viewport saved to:', heroPath);

  // Also take section-by-section screenshots to show high-resolution details of each section!
  // Scroll and capture
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total page height:', scrollHeight);

  let currentY = 0;
  let index = 1;
  const viewportHeight = 850;

  while (currentY < scrollHeight) {
    await page.evaluate((y) => window.scrollTo(0, y), currentY);
    await new Promise(r => setTimeout(r, 800));
    const sectionPath = path.join(outDir, `johnnyburke-section-${index}.png`);
    await page.screenshot({ path: sectionPath });
    console.log(`Saved section ${index} at Y=${currentY}`);
    currentY += viewportHeight;
    index++;
  }

  await browser.close();
  console.log('Finished capturing all screenshots successfully!');
}

run().catch(err => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
