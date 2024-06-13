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

      test('Product details', async () => {
        const breadcrumbsExpectedText = `Home  ${Products[product].name}`;
        await expect.soft(productPage.breadcrumbsContainer).toHaveText(breadcrumbsExpectedText);
        await expect.soft(productPage.productName).toHaveText(Products[product].name);
        await expect.soft(productPage.reviews).toHaveText(Products[product].reviews);
        if (Products[product].rating) {
          await expect.soft(productPage.rating).toHaveAttribute('title', Products[product].rating!);
        }
        if (Products[product].reviews) {
          await expect.soft(productPage.reviews).toHaveText(Products[product].reviews!);
        }
        await expect.soft(productPage.price).toHaveText(Products[product].price);
        const availability = Products[product].inStock ? 'In stock' : 'Out of stock';
        await expect.soft(productPage.availability).toHaveText(availability);
        await expect.soft(productPage.sku).toHaveText(Products[product].sku);
        if (Products[product].sizes) {
          await expect.soft(productPage.sizeSwatch).toHaveCount(Products[product].sizes!.length);
          for (let j = 0; j < Products[product].sizes!.length; j++) {
            await expect.soft(productPage.sizeSwatch.nth(j)).toHaveText(Products[product].sizes![j]);
          }
        }
        if (Products[product].colors) {
          await expect.soft(productPage.colorSwatch).toHaveCount(Products[product].colors!.length);
          for (let j = 0; j < Products[product].colors!.length; j++) {
            await expect
              .soft(productPage.colorSwatch.nth(j))
              .toHaveCSS('background-color', Products[product].colors![j]);
          }
        }
      });
    });
  });
}
