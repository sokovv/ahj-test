import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(60000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('valid card number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.form-group');
    const input = await form.$('[data-id=card-input]');
    await input.type('4111111111111111');
    const submit = await form.$('.card-submit');
    submit.click();
    await page.waitFor(' .valid');
  });

  test('invalid card number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.form-group');
    const input = await form.$('[data-id=card-input]');
    await input.type('41111111111111');
    const submit = await form.$('.card-submit');
    submit.click();
    await page.waitFor('.invalid');
  });
});