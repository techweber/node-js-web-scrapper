const puppeteer = require('puppeteer');
const url = process.argv[2];

console.log(url);

async function run() {

  const browser = await puppeteer.launch({
  	headless: true,
  	args: ["--no-sandbox","--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.tracing.start({ path: 'trace.json' });

  await page.goto( url ,{waitUntil: 'networkidle0'});

  await page.tracing.stop();

  await browser.close();
}

run();