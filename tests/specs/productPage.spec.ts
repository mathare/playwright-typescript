import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { ProductPage, ReviewDetails } from '../pages/productPage';
import { Products, SimilarProducts } from '../data/productPage';
import { ProductItemElements } from '../pages/components/productItem';

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
        await expect.soft(productPage.imageCarousel).toBeVisible();
        await expect.soft(productPage.productInfo).toBeVisible();
        await expect.soft(productPage.addToCartButton).toBeVisible();
        await expect.soft(productPage.addToWishlistButton).toBeVisible();
        await expect.soft(productPage.addToCompareButton).toBeVisible();
        await expect.soft(productPage.secondaryInfo).toBeVisible();
        await expect.soft(productPage.similarProductsGrid).toBeVisible();
        await expect.soft(productPage.pageFooter.footer).toBeVisible();
        await expect.soft(productPage.pageFooter.copyrightFooter).toBeVisible();
      });

      test('Product details', async ({ baseURL }) => {
        // The breadcrumbs will vary depending on the route taken to the page but by navigating to the product page
        // directly the breadcrumbs will always be Home > {Product Name}
        const breadcrumbsExpectedText = `Home  ${Products[product].name}`;
        await expect.soft(productPage.breadcrumbsContainer).toHaveText(breadcrumbsExpectedText);

        await expect.soft(productPage.productName).toHaveText(Products[product].name);
        if (Products[product].reviews) {
          await expect.soft(productPage.reviews).toHaveText(Products[product].reviews!);
        }
        if (Products[product].rating) {
          await expect.soft(productPage.rating).toHaveAttribute('title', Products[product].rating!);
        }
        if (Products[product].reviewDetails) {
          await expect.soft(productPage.reviews).toHaveText(`${Products[product].reviewDetails!.length} Reviews`);
        }
        await expect.soft(productPage.price).toHaveText(Products[product].price);
        const availability = Products[product].inStock ? 'In stock' : 'Out of stock';
        await expect.soft(productPage.availability).toHaveText(availability);
        await expect.soft(productPage.sku).toHaveText(Products[product].sku!);

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
          await expect.soft(productPage.description).toHaveText(Products[product].description!, { useInnerText: true });
        }
        if (Products[product].additionalInfo) {
          await expect.soft(productPage.additionalInfo).toHaveText(Products[product].additionalInfo!);
        }
        if (Products[product].reviewDetails) {
          // Reviews only loaded when tab selected
          await productPage.reviewsTab.click();
          await expect(productPage.review).toHaveCount(Products[product].reviewDetails!.length);
          for (let i = 0; i < Products[product].reviewDetails!.length; i++) {
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.title))
              .toHaveText(Products[product].reviewDetails![i].title);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.rating))
              .toHaveText(Products[product].reviewDetails![i].rating, { useInnerText: true });
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.description))
              .toHaveText(Products[product].reviewDetails![i].reviewText);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.reviewer))
              .toHaveText(Products[product].reviewDetails![i].reviewer);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.date))
              .toHaveText(Products[product].reviewDetails![i].date);
          }
        }

        if (SimilarProducts[product]) {
          const similarProductItems = productPage.similarProductItem;
          await expect.soft(similarProductItems).toHaveCount(SimilarProducts[product].length);
          for (let i = 0; i < SimilarProducts[product].length; i++) {
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.Name))
              .toHaveText(SimilarProducts[product][i].name);
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.Price).first())
              .toHaveText(SimilarProducts[product][i].price);
          }
        }
      });

      test('Product images', async ({ baseURL }, testInfo) => {
        testInfo.skip(!Products[product].images, 'Product has no images defined');
        const mediaDir = `${baseURL}/pub/media/catalog/product/cache/[0-9a-f]+`;
        await expect
          .soft(productPage.productImage)
          .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images!.default));
        await expect.soft(productPage.productThumbnail).toHaveCount(Products[product].images!.thumbnails.length);
        for (let i = 0; i < Products[product].images!.thumbnails.length; i++) {
          await expect
            .soft(productPage.productThumbnail.nth(i))
            .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images!.thumbnails[i]));
        }
        if (Products[product].images!.sizes) {
          for (let i = 0; i < Products[product].sizes!.length; i++) {
            await productPage.sizeSwatch.nth(i).click();
            const imageSrc = Array.isArray(Products[product].images!.sizes)
              ? new RegExp(mediaDir + Products[product].images!.sizes[i])
              : new RegExp(mediaDir + Products[product].images!.sizes);
            await expect.soft(productPage.productImage).toHaveAttribute('src', imageSrc);
          }
          await productPage.sizeSwatch.first().click();
        }
        if (Products[product].images!.colors) {
          for (let i = 0; i < Products[product].colors!.length; i++) {
            await productPage.colorSwatch.nth(i).click();
            const imageSrc = new RegExp(mediaDir + Products[product].images!.colors[i]);
            await expect.soft(productPage.productImage).toHaveAttribute('src', imageSrc);
          }
        }
      });

      test('Product info tabs', async () => {
        // Description/details tab selected by default
        await expect.soft(productPage.descriptionTab).toHaveClass(/active/);
        await expect.soft(productPage.descriptionTab).toHaveAttribute('aria-expanded', 'true');
        await expect.soft(productPage.additionalInfoTab).not.toHaveClass(/active/);
        await expect.soft(productPage.additionalInfoTab).toHaveAttribute('aria-expanded', 'false');
        await expect.soft(productPage.reviewsTab).not.toHaveClass(/active/);
        await expect.soft(productPage.reviewsTab).toHaveAttribute('aria-expanded', 'false');

        const tabs = [productPage.additionalInfoTab, productPage.reviewsTab, productPage.descriptionTab];
        for (let i = 0; i < tabs.length; i++) {
          await tabs[i].click();
          for (let j = 0; j < tabs.length; j++) {
            if (i === j) {
              await expect.soft(tabs[j]).toHaveClass(/active/);
            } else {
              await expect.soft(tabs[j]).not.toHaveClass(/active/);
            }
            await expect.soft(tabs[j]).toHaveAttribute('aria-expanded', (i === j).toString());
          }
        }
      });
    });

    test.describe('Link tests', () => {
      // I have chosen to omit the breadcrumbs link test for individual product pages as such a test would be of low
      // value since the breadcrumbs can vary depending on the route taken to the product page, although as these
      // tests navigate to the product page directly the breadcrumbs are always Home > {Product Name}. I could verify
      // the Home breadcrumb link is correct but is it worth it?

      test('Product details links', async ({ baseURL }) => {
        if (Products[product].reviews) {
          await expect.soft(productPage.reviews).toHaveAttribute('href', `${baseURL}${Products[product].link}#reviews`);
        } else {
          await expect.soft(productPage.reviews).not.toBeVisible();
        }
        await expect
          .soft(productPage.addReview)
          .toHaveAttribute('href', `${baseURL}${Products[product].link}#review-form`);
        // The tab links don't include the product page URL in the href attribute for some reason
        await expect.soft(productPage.getTabLink(productPage.descriptionTab)).toHaveAttribute('href', '#description');
        await expect.soft(productPage.getTabLink(productPage.additionalInfoTab)).toHaveAttribute('href', '#additional');
        await expect.soft(productPage.getTabLink(productPage.reviewsTab)).toHaveAttribute('href', '#reviews');
      });

      test('Similar product item links', async ({ baseURL }) => {
        if (SimilarProducts[product]) {
          for (let i = 0; i < SimilarProducts[product].length; i++) {
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.PhotoLink))
              .toHaveAttribute('href', `${baseURL}${SimilarProducts[product][i].link}`);
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.NameLink))
              .toHaveAttribute('href', `${baseURL}${SimilarProducts[product][i].link}`);
          }
        }
      });
    });
  });
}
