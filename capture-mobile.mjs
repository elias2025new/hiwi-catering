import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  // iPhone 14 / standard modern mobile viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  await page.goto('https://johnnyburkecatering.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));

  const outDir = path.resolve('public', 'inspiration');
  const mobileFull = path.join(outDir, 'johnnyburke-mobile-full.png');
  await page.screenshot({ path: mobileFull, fullPage: true });
  console.log('Saved mobile fullpage screenshot to:', mobileFull);

  const mobileHero = path.join(outDir, 'johnnyburke-mobile-hero.png');
  await page.screenshot({ path: mobileHero });
  console.log('Saved mobile hero screenshot to:', mobileHero);

  // Click hamburger menu to see how mobile nav opens
  const menuBtn = await page.$('.elementor-menu-toggle, [aria-label="Menu"], button.navbar-toggler, .hamburger, .menu-toggle');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 1000));
    const mobileMenu = path.join(outDir, 'johnnyburke-mobile-menu-open.png');
    await page.screenshot({ path: mobileMenu });
    console.log('Saved mobile menu open to:', mobileMenu);
  }

  await browser.close();
}

run().catch(console.error);
