import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  await new Promise(r => setTimeout(r, 1000));
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox']
  });

  const outDir = path.resolve('public', 'inspiration');

  // 1. Desktop
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3005/', { waitUntil: 'networkidle2' });
  await autoScroll(page);

  await page.screenshot({ path: path.join(outDir, 'our-site-desktop-hero.png') });
  await page.screenshot({ path: path.join(outDir, 'our-site-desktop-full.png'), fullPage: true });
  console.log('Saved desktop screenshots with all images loaded!');

  // 2. Mobile
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await mobilePage.goto('http://localhost:3005/', { waitUntil: 'networkidle2' });
  await autoScroll(mobilePage);

  await mobilePage.screenshot({ path: path.join(outDir, 'our-site-mobile-hero.png') });
  await mobilePage.screenshot({ path: path.join(outDir, 'our-site-mobile-full.png'), fullPage: true });

  const toggleBtn = await mobilePage.$('button[aria-label="Toggle Navigation Menu"]');
  if (toggleBtn) {
    await toggleBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await mobilePage.screenshot({ path: path.join(outDir, 'our-site-mobile-menu.png') });
  }
  console.log('Saved mobile screenshots with all images loaded!');

  await browser.close();
}

run().catch(console.error);
