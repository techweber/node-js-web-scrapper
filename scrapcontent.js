const puppeteer = require('puppeteer');
const fs = require('fs');

const url = process.argv[2];

console.log(url);

async function run() {

  const browser = await puppeteer.launch({
  	headless: true,
  	args: ["--no-sandbox","--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.goto( url ,{waitUntil: 'networkidle0'});

  const html = await page.content();

  // save our html in a file
  fs.writeFile("page.html", html, _=> console.log("HTML Saved."));

  await browser.close();
}

run();