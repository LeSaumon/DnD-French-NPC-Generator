import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

export const getData = async (selector: string): Promise<string[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.WEBSITE_URL);
  // Getting data from DOM elements
  const description = await page.$$eval(selector, (values) => {
    return values
      .filter((value) => value.innerText !== '#')
      .map((value) => value.innerText);
  });
  await browser.close();
  return description.slice(0, 3);
};
