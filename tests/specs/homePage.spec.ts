import { test, expect } from '@playwright/test';
import { HomePage, ProductDetails } from '../pages/homePage';
import { Colors } from '../data/shared';
import { ExpectedText, ProductItemDetails } from '../data/homePage';

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
      await expect(homePage.globalMessage).toBeVisible();
      await expect(homePage.pageHeader).toBeVisible();
      await expect(homePage.topNav).toBeVisible();
      await expect(homePage.mainContent).toBeVisible();
      await expect(homePage.contentHeading).toBeVisible();
      await expect(homePage.productsGrid).toBeVisible();
      await expect(homePage.pageFooter).toBeVisible();
      await expect(homePage.copyrightFooter).toBeVisible();

      await expect(homePage.promoBlock).toHaveCount(6);
      await expect(homePage.productItem).toHaveCount(6);
    });

    test('Element styling', async () => {
      await expect(homePage.mainContent).toHaveCSS('color', Colors.DarkGrey);
    });

    test('Text content of page elements', async () => {
      const promoBlocks = homePage.promoBlock;
      expect(await promoBlocks.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await promoBlocks.count()); i++) {
        await expect(promoBlocks.nth(i)).toHaveText(ExpectedText.PromoBlocks[i]);
      }
      await expect(homePage.contentHeading).toHaveText(ExpectedText.ContentHeading);
    });

    test('Product item details', async () => {
      const productItems = homePage.productItem;
      expect(await productItems.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await productItems.count()); i++) {
        await expect(homePage.getProductItemDetails(i, ProductDetails.Name)).toHaveText(
          ProductItemDetails.Products[i].title,
        );
        if (ProductItemDetails.Products[i].rating) {
          await expect(homePage.getProductItemDetails(i, ProductDetails.Rating)).toHaveText(
            ProductItemDetails.Products[i].rating!,
          );
        }
        if (ProductItemDetails.Products[i].reviews) {
          await expect(homePage.getProductItemDetails(i, ProductDetails.Reviews)).toHaveText(
            ProductItemDetails.Products[i].reviews!,
          );
        }
        await expect(homePage.getProductItemDetails(i, ProductDetails.Price)).toHaveText(
          ProductItemDetails.Products[i].price,
        );
        if (ProductItemDetails.Products[i].sizes) {
          const sizes = homePage.getProductItemDetails(i, ProductDetails.Sizes);
          expect(await sizes.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await sizes.count()); j++) {
            await expect(sizes.nth(j)).toHaveText(ProductItemDetails.Products[i].sizes![j]);
          }
        }
        if (ProductItemDetails.Products[i].colors) {
          const colors = homePage.getProductItemDetails(i, ProductDetails.Colors);
          expect(await colors.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await colors.count()); j++) {
            await expect(colors.nth(j)).toHaveCSS('background-color', ProductItemDetails.Products[i].colors![j]);
          }
        }
      }
    });

    test('Visual test', async () => {
      await expect(homePage.mainContent).toHaveScreenshot('mainContent.png', {
        mask: [homePage.adsWidget],
        timeout: 10000,
      });
    });
  });
});
