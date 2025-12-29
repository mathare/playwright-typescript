import { test, expect } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CartPage, COLORS, EXPECTED_TEXT } from '../pages/cartPage';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';
import { USERS } from '../data/users';

let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  cartPage = new CartPage(page);
});

// Common cart elements can be tested with an empty cart
test.describe('Empty cart', () => {
  test.describe('Appearance tests', () => {
    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(URLS.cartPage);
        });

        test('Default element visibility', async () => {
          await expect(cartPage.pageHeader.primaryHeader).toBeVisible();
          await expect(cartPage.subtitle).toBeVisible();
          await expect(cartPage.cartContentsContainer).toBeVisible();
          await expect(cartPage.cartList.cartList).toBeVisible();
          await expect(cartPage.cartList.cartItem).toHaveCount(0);
          await expect(cartPage.cartFooter).toBeVisible();
          await expect(cartPage.actionButton).toHaveCount(2);
          await expect(cartPage.continueShoppingButton).toBeVisible();
          await expect(cartPage.checkoutButton).toBeVisible();
          await expect(cartPage.pageFooter.footer).toBeVisible();
        });

        test('Text content of elements', async () => {
          await expect(cartPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
          for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
            await expect(cartPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
          }
        });

        test('Element styling', async ({ browserName }) => {
          let element = cartPage.subtitle;
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '18px');
          await expect(element).toHaveCSS('font-weight', '500');

          await expect(cartPage.cartContentsContainer).toHaveCSS('background-color', COLORS.backgroundColor);

          await expect(cartPage.cartFooter).toHaveCSS('display', 'flex');
          for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
            element = cartPage.actionButton.nth(i);
            const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
            await expect(element).toContainClass(expectedClass);
            await expect(element).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
            await expect(element).toHaveCSS('color', COLORS.buttons[i].textColor);
            const expectedBorderStyle = i === 1 ? (browserName === 'firefox' ? '0px' : '0px none') : '1px solid';
            await expect(element).toHaveCSS('border', `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`);
            await expect(element).toHaveCSS('border-radius', '4px');
            await expect(element).toHaveCSS('font-size', '16px');
            await expect(element).toHaveCSS('font-weight', '500');
          }
        });

        test('Cursor is pointer for "Continue Shopping" and "Checkout" buttons', async () => {
          await expect(cartPage.continueShoppingButton).toHaveCSS('cursor', 'pointer');
          await expect(cartPage.checkoutButton).toHaveCSS('cursor', 'pointer');
        });

        test('"Checkout" button is enabled even when cart is empty', async () => {
          await expect(cartPage.checkoutButton).toBeEnabled();
        });
      });
    });
  });

  test.describe('Visual tests', () => {
    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(URLS.cartPage);
        });

        test('Default state', async ({ page }) => {
          const SNAPSHOT = user === USERS.visual ? 'emptyCartMisaligned.png' : 'emptyCart.png';
          await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          const SNAPSHOT = user === USERS.visual ? 'menuOpenMisaligned.png' : 'menuOpen.png';
          await cartPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true });
        });
      });
    });
  });

  test.describe('Behavioural tests', () => {
    test('"Continue Shopping" button opens inventory page', async ({ page, baseURL }) => {
      await cartPage.continueShoppingButton.click();
      await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
    });

    test('"Checkout" button opens checkout page', async ({ page, baseURL }) => {
      await cartPage.checkoutButton.click();
      await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
    });
  });
});

test.describe('Products in cart', () => {
  const productIds = PRODUCT_INFO.map((product) => product.id);

  test.describe('Appearance tests', () => {
    test.beforeEach(async ({ page }) => {
      await setCartContentsInLocalStorage(page, productIds, URLS.cartPage);
    });

    test('Item list element visibility', async () => {
      await expect(cartPage.cartList.cartList).toBeVisible();
      await expect(cartPage.cartList.cartItem).toHaveCount(productIds.length);
    });

    test.describe('Visual tests', () => {
      test('Single product in cart', async ({ page }) => {
        await setCartContentsInLocalStorage(page, [0], URLS.cartPage);
        await expect(cartPage.cartContentsContainer).toHaveScreenshot('singleProductInCart.png');
      });

      test('All products in cart', async () => {
        await expect(cartPage.cartContentsContainer).toHaveScreenshot('allProductsInCart.png');
      });
    });
  });
});
