import { test, expect } from '@playwright/test';
import { HomePage, ProductDetails } from '../pages/homePage';
import { Colors } from '../data/shared';
import { ExpectedText, Products, PromoBlockLinks } from '../data/homePage';

test.describe('Home page tests', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actual using image comparison but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(homePage.globalMessage).toBeVisible();
      await expect.soft(homePage.pageHeader).toBeVisible();
      await expect.soft(homePage.topNav).toBeVisible();
      await expect.soft(homePage.mainContent).toBeVisible();
      await expect.soft(homePage.contentHeading).toBeVisible();
      await expect.soft(homePage.productsGrid).toBeVisible();
      await expect.soft(homePage.pageFooter).toBeVisible();
      await expect.soft(homePage.copyrightFooter).toBeVisible();

      await expect.soft(homePage.promoBlock).toHaveCount(6);
      await expect.soft(homePage.productItem).toHaveCount(6);
    });

    test('Element styling', async () => {
      await expect.soft(homePage.mainContent).toHaveCSS('color', Colors.DarkGrey);
    });

    test('Text content of page elements', async () => {
      const promoBlocks = homePage.promoBlock;
      expect(await promoBlocks.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await promoBlocks.count()); i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveText(ExpectedText.PromoBlocks[i]);
      }
      await expect.soft(homePage.contentHeading).toHaveText(ExpectedText.ContentHeading);
    });

    test('Product item details', async () => {
      const productItems = homePage.productItem;
      expect(await productItems.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await productItems.count()); i++) {
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.Name)).toHaveText(
          Products[i].title,
        );
        if (Products[i].rating) {
          await expect.soft(homePage.getProductItemDetails(i, ProductDetails.Rating)).toHaveText(
            Products[i].rating!,
          );
        }
        if (Products[i].reviews) {
          await expect.soft(homePage.getProductItemDetails(i, ProductDetails.Reviews)).toHaveText(
            Products[i].reviews!,
          );
        }
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.Price)).toHaveText(
          Products[i].price,
        );
        if (Products[i].sizes) {
          const sizes = homePage.getProductItemDetails(i, ProductDetails.Sizes);
          expect(await sizes.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await sizes.count()); j++) {
            await expect.soft(sizes.nth(j)).toHaveText(Products[i].sizes![j]);
          }
        }
        if (Products[i].colors) {
          const colors = homePage.getProductItemDetails(i, ProductDetails.Colors);
          expect(await colors.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await colors.count()); j++) {
            await expect.soft(colors.nth(j)).toHaveCSS('background-color', Products[i].colors![j]);
          }
        }
        await productItems.nth(i).hover()
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.AddToCartButton)).toBeVisible()
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.AddToWishListButton)).toBeVisible()
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.AddToCompareButton)).toBeVisible()
      }
    });
  });

  test.describe('Visual tests', () => {
    test('Default page appearance', async ({page}) => {
      await expect(page).toHaveScreenshot('default.png', {
        fullPage: true,
        mask: [homePage.adsWidget],
        timeout: 20000,
      });
    });
  })

  test.describe('Link tests', () => { 
    test('Promo block links', async ({ baseURL }) => {
      const promoBlocks = homePage.promoBlock
      expect(await promoBlocks.count()).toBeGreaterThan(0)
      for (let i = 0; i < await promoBlocks.count(); i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveAttribute('href', `${baseURL}${PromoBlockLinks[i]}`);
      }
    })

    test('Product links', async ({ baseURL }) => {
      const products = homePage.productItem
      expect(await products.count()).toBeGreaterThan(0)
      for (let i = 0; i < await products.count(); i++) {
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.PhotoLink)).toHaveAttribute('href', `${baseURL}${Products[i].link}`);
        await expect.soft(homePage.getProductItemDetails(i, ProductDetails.NameLink)).toHaveAttribute('href', `${baseURL}${Products[i].link}`);
        if (Products[i].reviews) {
          await expect.soft(homePage.getProductItemDetails(i, ProductDetails.ReviewsLink)).toHaveAttribute('href', `${baseURL}${Products[i].link}#reviews`);
        } else {
          await expect.soft(homePage.getProductItemDetails(i, ProductDetails.ReviewsLink)).not.toBeVisible()
        }
      }
    })
  })
});
