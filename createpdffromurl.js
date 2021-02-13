const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://yahoo.com',{waitUntil: 'networkidle2'});

  await page.pdf({ path: 'yahoo.pdf', format: 'A4' });

  await browser.close();

})();