const puppeteer = require('puppeteer');
const fs = require('fs');
const tcpPortUsed = require('tcp-port-used');

async function print() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setUserAgent('puppeteer');
  await page.goto('http://localhost:3000');
  const pdf = await page.pdf({
    format: 'A4',
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: '0.4in',
      bottom: '0.4in',
      left: '0.4in',
      right: '0.4in',
    },
  });
  await browser.close();
  console.log('Generating the resume of PDF version...');
  fs.writeFile('.output/public/resume.pdf', pdf, () =>
    console.log('The Resume of PDF version generated successful')
  );
}

tcpPortUsed.waitUntilUsed(3000, 0, 1000 * 10).then(print);
