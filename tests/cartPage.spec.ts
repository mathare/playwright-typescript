import { test, expect } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CartPage, COLORS, EXPECTED_TEXT } from '../pages/cartPage';
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

    // Common cart elements can be tested with an empty cart
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
        await expect(cartPage.actionButton).toHaveCount(2);
        await expect(cartPage.pageFooter.footer).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(cartPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(cartPage.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(cartPage.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
        for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
          await expect(cartPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
        }
      });

      test('Element styling', async () => {
        await expect(cartPage.subtitle).toHaveCSS('color', COLORS.textColor);
        await expect(cartPage.subtitle).toHaveCSS('font-size', '18px');
        await expect(cartPage.subtitle).toHaveCSS('font-weight', '500');
        await expect(cartPage.cartContentsContainer).toHaveCSS('background-color', COLORS.backgroundColor);

        await expect(cartPage.cartList).toHaveCSS('display', 'block');
        const headers = [cartPage.qtyHeader, cartPage.descHeader];
        for (let i = 0; i < headers.length; i++) {
          await expect(headers[i]).toHaveCSS('color', COLORS.itemList.textColor);
          await expect(headers[i]).toHaveCSS('display', 'inline-block');
          await expect(headers[i]).toHaveCSS('font-size', '16px');
          await expect(headers[i]).toHaveCSS('font-weight', '500');
        }

        await expect(cartPage.cartFooter).toHaveCSS('display', 'flex');
        for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
          const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
          await expect(cartPage.actionButton.nth(i)).toContainClass(expectedClass);
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('color', COLORS.buttons[i].textColor);
          const expectedBorderStyle = i === 1 ? '0px none' : '1px solid';
          await expect(cartPage.actionButton.nth(i)).toHaveCSS(
            'border',
            `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`
          );
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('border-radius', '4px');
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('font-size', '16px');
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('font-weight', '500');
        }
      });

      test.describe('Visual tests', () => {
        test('Default state', async ({ page }) => {
          await expect(page).toHaveScreenshot('emptyCart.png', { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          await cartPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
        });
      });
    });

    test.describe('Behavioural tests', () => {
      test('"Continue Shopping" button opens inventory page', async ({ page, baseURL }) => {
        await cartPage.actionButton.nth(0).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      test('"Checkout" button opens checkout page', async ({ page, baseURL }) => {
        await cartPage.actionButton.nth(1).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
      });
    });
  });
});
