import { test, expect } from '@playwright/test';
import { HomePage, ProductItemElements } from '../pages/homePage';
import { Colors } from '../data/shared';
import { ExpectedText, Products, PromoBlockLinks, SwatchOutlineStyles } from '../data/homePage';
import { rgbToHex } from '../helpers/colorUtils';

test.describe('Home page tests', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actual using image comparison but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain
    const swatchSelectedClass = /selected/;

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
          expect(await sizes.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await sizes.count()); j++) {
            await expect.soft(sizes.nth(j)).toHaveText(Products[i].sizes![j]);
          }
        }
        if (Products[i].colors) {
          const colors = homePage.getProductItemElement(i, ProductItemElements.Colors);
          expect(await colors.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await colors.count()); j++) {
            await expect.soft(colors.nth(j)).toHaveCSS('background-color', Products[i].colors![j]);
          }
        }
        await productItems.nth(i).hover();
        await expect.soft(homePage.getProductItemElement(i, ProductItemElements.AddToCartButton)).toBeVisible();
        await expect.soft(homePage.getProductItemElement(i, ProductItemElements.AddToWishListButton)).toBeVisible();
        await expect.soft(homePage.getProductItemElement(i, ProductItemElements.AddToCompareButton)).toBeVisible();
      }
    });

    test('Product swatch styling', async () => {
      // There is no need to test the swatches on all product items since they all use the same element
      // Similarly there is no need to test every size/colour swatch for a given product
      const sizes = homePage.getProductItemElement(0, ProductItemElements.Sizes);

      // Select
      await sizes.first().click();
      await expect.soft(sizes.first()).toHaveClass(swatchSelectedClass);
      await expect.soft(sizes.first()).toHaveCSS('outline', SwatchOutlineStyles.Sizes.Hovered);
      await expect.soft(sizes.first()).toHaveCSS('background-color', Colors.White);
      // For some reason a simple blur() isn't enough so hover over another element
      await homePage.getProductItemElement(0, ProductItemElements.Name).hover();
      await expect.soft(sizes.first()).toHaveCSS('outline', SwatchOutlineStyles.Sizes.Selected);

      //Deselect
      await sizes.first().click();
      await expect.soft(sizes.first()).not.toHaveClass(swatchSelectedClass);
      await expect.soft(sizes.first()).toHaveCSS('outline', SwatchOutlineStyles.Sizes.Hovered);
      await expect.soft(sizes.first()).toHaveCSS('background-color', Colors.LightGrey);
      await homePage.getProductItemElement(0, ProductItemElements.Name).hover();
      await expect.soft(sizes.first()).toHaveCSS('outline', SwatchOutlineStyles.Sizes.NotSelected);

      const colors = homePage.getProductItemElement(0, ProductItemElements.Colors);

      // Select
      await colors.first().click();
      await expect.soft(colors.first()).toHaveClass(swatchSelectedClass);
      await expect.soft(colors.first()).toHaveCSS('outline', SwatchOutlineStyles.Colors.Hovered);
      // For some reason a simple blur() isn't enough so hover over another element
      await homePage.getProductItemElement(0, ProductItemElements.Name).hover();
      await expect.soft(colors.first()).toHaveCSS('outline', SwatchOutlineStyles.Colors.Selected);

      //Deselect
      await colors.first().click();
      await expect.soft(colors.first()).not.toHaveClass(swatchSelectedClass);
      await expect.soft(colors.first()).toHaveCSS('outline', SwatchOutlineStyles.Colors.Hovered);
    });

    test('Can only select single size option at a time', async () => {
      // The styling of the 'selected' class is tested above so just checking whether an element has the class is sufficient here
      const sizes = homePage.getProductItemElement(0, ProductItemElements.Sizes);
      expect(await sizes.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await sizes.count()); i++) {
        await sizes.nth(i).click();
        await expect.soft(sizes.nth(i)).toHaveClass(swatchSelectedClass);
        for (let j = 0; j < (await sizes.count()); j++) {
          if (j !== i) {
            await expect.soft(sizes.nth(j)).not.toHaveClass(swatchSelectedClass);
          }
        }
      }
    });

    test('Can only select single color option at a time', async () => {
      // The styling of the 'selected' class is tested above so just checking whether an element has the class is sufficient here
      const colors = homePage.getProductItemElement(0, ProductItemElements.Colors);
      expect(await colors.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await colors.count()); i++) {
        await colors.nth(i).click();
        await expect.soft(colors.nth(i)).toHaveClass(swatchSelectedClass);
        for (let j = 0; j < (await colors.count()); j++) {
          if (j !== i) {
            await expect.soft(colors.nth(j)).not.toHaveClass(swatchSelectedClass);
          }
        }
      }
    });
  });

  test.describe('Visual tests', () => {
    test('Default page appearance', async ({ page }) => {
      await expect(page).toHaveScreenshot('default.png', {
        fullPage: true,
        mask: [homePage.adsWidget],
        timeout: 20000,
      });
    });

    test('Product hover', async () => {
      await homePage.productItem.nth(0).hover();
      await expect(homePage.productsGrid).toHaveScreenshot('productHover.png', { timeout: 20000 });
    });
  });

  test.describe('Link tests', () => {
    test('Promo block links', async ({ baseURL }) => {
      const promoBlocks = homePage.promoBlock;
      expect(await promoBlocks.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await promoBlocks.count()); i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveAttribute('href', `${baseURL}${PromoBlockLinks[i]}`);
      }
    });

    test('Product links', async ({ baseURL }) => {
      const products = homePage.productItem;
      expect(await products.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await products.count()); i++) {
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
  });

  test.describe('Tooltip tests', () => {
    const tooltipWidth = '110';
    const tooltipHeight = '90';
    test('Size option tooltips', async () => {
      const sizes = homePage.getProductItemElement(0, ProductItemElements.Sizes);
      expect(await sizes.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await sizes.count()); i++) {
        await expect.soft(sizes.nth(i)).toHaveAttribute('option-tooltip-value', Products[0].sizes![i]);
        await expect.soft(sizes.nth(i)).toHaveAttribute('thumb-width', tooltipWidth);
        await expect.soft(sizes.nth(i)).toHaveAttribute('thumb-height', tooltipHeight);
      }
    });

    test('Color swatch tooltips', async () => {
      const colors = homePage.getProductItemElement(0, ProductItemElements.Colors);
      expect(await colors.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await colors.count()); i++) {
        await expect.soft(colors.nth(i)).toHaveAttribute('option-tooltip-value', rgbToHex(Products[0].colors![i]));
        await expect.soft(colors.nth(i)).toHaveAttribute('thumb-width', tooltipWidth);
        await expect.soft(colors.nth(i)).toHaveAttribute('thumb-height', tooltipHeight);
      }
    });
  });
});
