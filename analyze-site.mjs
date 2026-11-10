import puppeteer from 'puppeteer-core';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://johnnyburkecatering.com/', { waitUntil: 'domcontentloaded' });

  const navItems = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('header nav a, .elementor-nav-menu a, nav a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href
    })).filter(a => a.text.length > 0);
  });

  const headings = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({
      tag: h.tagName,
      text: h.innerText.trim()
    })).filter(h => h.text.length > 0);
  });

  console.log('--- NAVIGATION ITEMS ---');
  console.log(JSON.stringify(navItems, null, 2));

  console.log('--- HEADINGS & SECTIONS ---');
  console.log(JSON.stringify(headings, null, 2));

  await browser.close();
}
run();
