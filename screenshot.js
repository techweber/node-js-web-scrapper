const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://yahoo.com');

  await page.screenshot({ path: 'yahoo.png' });

  await browser.close();
  
})();