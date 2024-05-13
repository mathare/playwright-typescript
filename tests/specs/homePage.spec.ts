import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ExpectedText, Products, PromoBlockLinks } from '../data/homePage';
import { Colors } from '../data/products';
import { ProductItemElements } from '../pages/components/productItem';

const Timeouts = {
  ImageLink: 10000,
  Visual: 20000,
};

test.describe('Home page tests', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(homePage.globalMessage).toBeVisible();
      await expect.soft(homePage.pageHeader.header).toBeVisible();
      await expect.soft(homePage.pageHeader.topnav).toBeVisible();
      await expect.soft(homePage.mainContent).toBeVisible();
      await expect.soft(homePage.contentHeading).toBeVisible();
      await expect.soft(homePage.productsGrid).toBeVisible();
      await expect.soft(homePage.pageFooter.footer).toBeVisible();
      await expect.soft(homePage.pageFooter.copyrightFooter).toBeVisible();

      await expect.soft(homePage.promoBlock).toHaveCount(6);
      await expect.soft(homePage.productItem).toHaveCount(6);
    });

    test('Element styling', async () => {
      await expect.soft(homePage.mainContent).toHaveCSS('color', Colors.DarkGrey);
    });

    test('Text content of page elements', async () => {
      const promoBlocks = homePage.promoBlock;
      await expect.soft(promoBlocks).toHaveCount(ExpectedText.PromoBlocks.length);
      for (let i = 0; i < ExpectedText.PromoBlocks.length; i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveText(ExpectedText.PromoBlocks[i]);
      }
      await expect.soft(homePage.contentHeading).toHaveText(ExpectedText.ContentHeading);
    });

    test('Product item details', async () => {
      const productItems = homePage.productItem;
      await expect.soft(productItems).toHaveCount(Products.length);
      for (let i = 0; i < Products.length; i++) {
        await expect.soft(homePage.getProductItemElement(i, ProductItemElements.Name)).toHaveText(Products[i].title);
        if (Products[i].rating) {
          await expect
            .soft(homePage.getProductItemElement(i, ProductItemElements.Rating))
            .toHaveText(Products[i].rating!);
        }
        if (Products[i].reviews) {
          await expect
            .soft(homePage.getProductItemElement(i, ProductItemElements.Reviews))
            .toHaveText(Products[i].reviews!);
        }
        await expect.soft(homePage.getProductItemElement(i, ProductItemElements.Price)).toHaveText(Products[i].price);
        if (Products[i].sizes) {
          const sizes = homePage.getProductItemElement(i, ProductItemElements.Sizes);
          await expect.soft(sizes).toHaveCount(Products[i].sizes!.length);
          for (let j = 0; j < Products[i].sizes!.length; j++) {
            await expect.soft(sizes.nth(j)).toHaveText(Products[i].sizes![j]);
          }
        }
        if (Products[i].colors) {
          const colors = homePage.getProductItemElement(i, ProductItemElements.Colors);
          await expect.soft(colors).toHaveCount(Products[i].colors!.length);
          for (let j = 0; j < Products[i].colors!.length; j++) {
            await expect.soft(colors.nth(j)).toHaveCSS('background-color', Products[i].colors![j]);
          }
        }
      }
    });
  });

  test.describe('Visual tests', () => {
    test('Default page appearance', async () => {
      await expect(homePage.mainContent).toHaveScreenshot('default.png', { timeout: Timeouts.Visual });
    });

    test('Product hover', async () => {
      await homePage.productItem.first().hover();
      await expect(homePage.productsGrid).toHaveScreenshot('productHover.png', { timeout: Timeouts.Visual });
    });

    // There is no need for visual testing of the product images for the various colour options as we can verify
    // the image src links for each option instead(below).This is a more efficient testing method as we don't have
    // to maintain the baseline images for all products in all colours across all supported browsers and platforms
  });

  test.describe('Link tests', () => {
    const mediaDir = '/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44';

    test('Promo block links', async ({ baseURL }) => {
      const promoBlocks = homePage.promoBlock;
      await expect.soft(promoBlocks).toHaveCount(PromoBlockLinks.length);
      for (let i = 0; i < PromoBlockLinks.length; i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveAttribute('href', `${baseURL}${PromoBlockLinks[i]}`);
      }
    });

    test('Product links', async ({ baseURL }) => {
      const products = homePage.productItem;
      await expect.soft(products).toHaveCount(Products.length);
      for (let i = 0; i < Products.length; i++) {
        await expect
          .soft(homePage.getProductItemElement(i, ProductItemElements.PhotoLink))
          .toHaveAttribute('href', `${baseURL}${Products[i].link}`);
        await expect
          .soft(homePage.getProductItemElement(i, ProductItemElements.NameLink))
          .toHaveAttribute('href', `${baseURL}${Products[i].link}`);
        if (Products[i].reviews) {
          await expect
            .soft(homePage.getProductItemElement(i, ProductItemElements.ReviewsLink))
            .toHaveAttribute('href', `${baseURL}${Products[i].link}#reviews`);
        } else {
          await expect.soft(homePage.getProductItemElement(i, ProductItemElements.ReviewsLink)).not.toBeVisible();
        }
      }
    });

    test('Default product image links', async ({ baseURL }) => {
      const products = homePage.productItem;
      await expect.soft(products).toHaveCount(Products.length);
      for (let i = 0; i < Products.length; i++) {
        const imageLink = `${baseURL}${mediaDir}${Products[i].images!.default}`;
        await expect
          .soft(homePage.getProductItemElement(i, ProductItemElements.Photo))
          .toHaveAttribute('src', imageLink);
      }
    });

    test('Product image links for all size options', async ({ baseURL }) => {
      const products = homePage.productItem;
      await expect.soft(products).toHaveCount(Products.length);
      for (let i = 0; i < Products.length; i++) {
        if (Products[i].sizes) {
          const sizes = homePage.getProductItemElement(i, ProductItemElements.Sizes);
          await expect.soft(sizes).toHaveCount(Products[i].sizes!.length);
          for (let j = 0; j < Products[i].sizes!.length; j++) {
            await sizes.nth(j).click();
            const imageLink = Array.isArray(Products[i].images!.sizes)
              ? `${baseURL}${mediaDir}${Products[i].images!.sizes[j]}`
              : `${baseURL}${mediaDir}${Products[i].images!.sizes}`;
            await expect
              .soft(homePage.getProductItemElement(i, ProductItemElements.Photo))
              .toHaveAttribute('src', imageLink, { timeout: Timeouts.ImageLink });
          }
        }
      }
    });

    test('Product image links for different color options', async ({ baseURL }) => {
      const products = homePage.productItem;
      await expect.soft(products).toHaveCount(Products.length);
      for (let i = 0; i < Products.length; i++) {
        if (Products[i].colors) {
          const colors = homePage.getProductItemElement(i, ProductItemElements.Colors);
          await expect.soft(colors).toHaveCount(Products[i].colors!.length);
          for (let j = 0; j < Products[i].colors!.length; j++) {
            await colors.nth(j).click();
            const imageLink = `${baseURL}${mediaDir}${Products[i].images!.colors[j]}`;
            await expect
              .soft(homePage.getProductItemElement(i, ProductItemElements.Photo))
              .toHaveAttribute('src', imageLink, { timeout: Timeouts.ImageLink });
          }
        }
      }
    });
  });
});
