import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductItemElements } from '../pages/components/productItem';
import { Colors, SwatchOutlineStyles } from '../data/products';
import { Products } from '../data/homePage';
import { rgbToHex } from '../helpers/colorUtils';

test.describe('Product item tests', () => {
  // These tests could use any page that has product items on it. It just so happens that I have chosen the home page for simplicity
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test.describe('Appearance tests', () => {
    const swatchSelectedClass = /selected/;

    test('Additional controls displayed on hover', async () => {
      await homePage.productItem.first().hover();
      await expect.soft(homePage.getProductItemElement(0, ProductItemElements.AddToCartButton)).toBeVisible();
      await expect.soft(homePage.getProductItemElement(0, ProductItemElements.AddToWishListButton)).toBeVisible();
      await expect.soft(homePage.getProductItemElement(0, ProductItemElements.AddToCompareButton)).toBeVisible();
    });

    test('Product swatch styling', async ({ browserName }) => {
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
      const outlineStyle =
        browserName === 'firefox'
          ? // Firefox doesn't include "none" in the outline style but other browsers do
            SwatchOutlineStyles.Sizes.NotSelected.replace('none ', '')
          : SwatchOutlineStyles.Sizes.NotSelected;
      await expect.soft(sizes.first()).toHaveCSS('outline', outlineStyle);

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
      await expect.soft(sizes).toHaveCount(Products[0].sizes!.length);
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
      await expect.soft(colors).toHaveCount(Products[0].colors!.length);
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

  test.describe('Tooltip tests', () => {
    const tooltipWidth = '110';
    const tooltipHeight = '90';
    test('Size option tooltips', async () => {
      const sizes = homePage.getProductItemElement(0, ProductItemElements.Sizes);
      await expect.soft(sizes).toHaveCount(Products[0].sizes!.length);
      for (let i = 0; i < (await sizes.count()); i++) {
        await expect.soft(sizes.nth(i)).toHaveAttribute('option-tooltip-value', Products[0].sizes![i]);
        await expect.soft(sizes.nth(i)).toHaveAttribute('thumb-width', tooltipWidth);
        await expect.soft(sizes.nth(i)).toHaveAttribute('thumb-height', tooltipHeight);
      }
    });

    test('Color swatch tooltips', async () => {
      const colors = homePage.getProductItemElement(0, ProductItemElements.Colors);
      await expect.soft(colors).toHaveCount(Products[0].colors!.length);
      for (let i = 0; i < (await colors.count()); i++) {
        await expect.soft(colors.nth(i)).toHaveAttribute('option-tooltip-value', rgbToHex(Products[0].colors![i]));
        await expect.soft(colors.nth(i)).toHaveAttribute('thumb-width', tooltipWidth);
        await expect.soft(colors.nth(i)).toHaveAttribute('thumb-height', tooltipHeight);
      }
    });
  });
});
