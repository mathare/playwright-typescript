import test, { expect } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CartPage } from '../pages/cartPage';
import { URLS } from '../data/pages';

test.describe('Product page tests', () => {
  let cartPage: CartPage;

  test.beforeEach(async ({ page, baseURL }) => {
    cartPage = new CartPage(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('Empty cart', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(URLS.cartPage);
    });

    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(cartPage.pageHeader.primaryHeader).toBeVisible();
        await expect(cartPage.subtitle).toBeVisible();
        await expect(cartPage.cartContentsContainer).toBeVisible();
        await expect(cartPage.cartList).toBeVisible();
        await expect(cartPage.qtyHeader).toBeVisible();
        await expect(cartPage.descHeader).toBeVisible();
        await expect(cartPage.cartItem).toHaveCount(0);
        await expect(cartPage.cartFooter).toBeVisible();
        await expect(cartPage.continueShoppingBtn).toBeVisible();
        await expect(cartPage.checkoutBtn).toBeVisible();
        await expect(cartPage.pageFooter.footer).toBeVisible();
      });
    });
  });
});
