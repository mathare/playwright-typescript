import { expect, test } from '@playwright/test';
import { CartList, COLORS, EXPECTED_TEXT } from '../pages/components/cartList';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';

test.describe('Cart page tests', () => {
  let cartList: CartList;

  test.beforeEach(async ({ page, baseURL }) => {
    cartList = new CartList(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('Empty cart', () => {
    // We can test the cart list on any page that uses it - namely the cart page and checkout overview page
    // but the cart page is the simplest so open that
    test.beforeEach(async ({ page }) => {
      await page.goto(URLS.cartPage);
    });

    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(cartList.cartList).toBeVisible();
        await expect(cartList.qtyHeader).toBeVisible();
        await expect(cartList.descHeader).toBeVisible();
        await expect(cartList.cartItem).toHaveCount(0);
      });

      test('Text content of elements', async () => {
        await expect(cartList.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(cartList.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
      });

      test('Element styling', async () => {
        let element = cartList.cartList;
        await expect(element).toHaveCSS('display', 'block');

        const headers = [cartList.qtyHeader, cartList.descHeader];
        for (let i = 0; i < headers.length; i++) {
          element = headers[i];
          await expect(element).toHaveCSS('color', COLORS.headerColor);
          await expect(element).toHaveCSS('display', 'inline-block');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test.describe('Visual tests', () => {
        test('Default state', async () => {
          await expect(cartList.cartList).toHaveScreenshot('emptyCart.png');
        });
      });
    });
  });
});
