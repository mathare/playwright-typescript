import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import ProductPage from '../pages/productPage';
import { Products } from '../data/productPage';

dotenv.config();
const products = process.env.TEST_MODE === 'full' ? Object.keys(Products) : ['RadiantTee'];
for (const product of products) {
  test.describe(`${product} page tests`, () => {
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
      productPage = new ProductPage(page);
      await productPage.open(Products[product].link);
    });

    test.describe('Appearance tests', () => {
      // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
      // The tests could be combined but I have split them here to make them easier to read and maintain

      test('Main page elements displayed', async () => {
        await expect.soft(productPage.globalMessage).toBeVisible();
        await expect.soft(productPage.pageHeader.header).toBeVisible();
        await expect.soft(productPage.pageHeader.topnav).toBeVisible();
        await expect.soft(productPage.breadcrumbsContainer).toBeVisible();

        await expect.soft(productPage.pageFooter.footer).toBeVisible();
        await expect.soft(productPage.pageFooter.copyrightFooter).toBeVisible();
      });
    });
  });
}
