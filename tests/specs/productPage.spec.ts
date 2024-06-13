import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { ProductPage, ReviewDetails } from '../pages/productPage';
import { Products } from '../data/productPage';

const mediaDir = '/pub/media/catalog/product/cache/[0-9a-f]+';

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

      test('Product details', async ({ baseURL }) => {
        const breadcrumbsExpectedText = `Home  ${Products[product].name}`;
        await expect.soft(productPage.breadcrumbsContainer).toHaveText(breadcrumbsExpectedText);

        if (Products[product].images) {
          const mediaDir = `${baseURL}/pub/media/catalog/product/cache/[0-9a-f]+`;
          await expect
            .soft(productPage.productImage)
            .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images.default));
          await expect.soft(productPage.productThumbnail).toHaveCount(Products[product].images.thumbnails.length);
          for (let i = 0; i < Products[product].images.thumbnails.length; i++) {
            await expect
              .soft(productPage.productThumbnail.nth(i))
              .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images.thumbnails[i]));
          }
        }

        await expect.soft(productPage.productName).toHaveText(Products[product].name);
        await expect.soft(productPage.reviews).toHaveText(Products[product].reviews);
        if (Products[product].rating) {
          await expect.soft(productPage.rating).toHaveAttribute('title', Products[product].rating!);
        }
        if (Products[product].reviewDetails) {
          await expect.soft(productPage.reviews).toHaveText(`${Products[product].reviewDetails.length} Reviews`);
        }
        await expect.soft(productPage.price).toHaveText(Products[product].price);
        const availability = Products[product].inStock ? 'In stock' : 'Out of stock';
        await expect.soft(productPage.availability).toHaveText(availability);
        await expect.soft(productPage.sku).toHaveText(Products[product].sku);
        if (Products[product].sizes) {
          await expect.soft(productPage.sizeSwatch).toHaveCount(Products[product].sizes!.length);
          for (let i = 0; i < Products[product].sizes!.length; i++) {
            await expect.soft(productPage.sizeSwatch.nth(i)).toHaveText(Products[product].sizes![i]);
          }
        }
        if (Products[product].colors) {
          await expect.soft(productPage.colorSwatch).toHaveCount(Products[product].colors!.length);
          for (let i = 0; i < Products[product].colors!.length; i++) {
            await expect
              .soft(productPage.colorSwatch.nth(i))
              .toHaveCSS('background-color', Products[product].colors![i]);
          }
        }
        await expect.soft(productPage.quantityInput).toHaveValue('1');

        if (Products[product].description) {
          await expect.soft(productPage.description).toHaveText(Products[product].description, { useInnerText: true });
        }
        if (Products[product].additionalInfo) {
          await expect.soft(productPage.additionalInfo).toHaveText(Products[product].additionalInfo);
        }
        if (Products[product].reviewDetails) {
          // Reviews only loaded when tab selected
          await productPage.reviewsTab.click();
          await expect(productPage.review).toHaveCount(Products[product].reviewDetails.length);
          for (let i = 0; i < Products[product].reviewDetails.length; i++) {
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.title))
              .toHaveText(Products[product].reviewDetails[i].title);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.rating))
              .toHaveText(Products[product].reviewDetails[i].rating, { useInnerText: true });
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.description))
              .toHaveText(Products[product].reviewDetails[i].reviewText);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.reviewer))
              .toHaveText(Products[product].reviewDetails[i].reviewer);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.date))
              .toHaveText(Products[product].reviewDetails[i].date);
          }
        }
      });
    });
  });
}
