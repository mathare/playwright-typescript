import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, PageHeader } from '../pages/components/pageHeader';
import { PRODUCT_INFO } from '../data/products';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { URLS } from '../data/pages';
import { USERS } from '../data/users';

// This spec makes a not unreasonable assumption that the header displayed at the top of all pages
// expect the login page is mostly the same across all pages. As such, the main assertions are performed
// against a single page (the inventory page).
// There are some differences in the secondary header between pages but all within the same secondary
// header container - those are verified within the individual page test specs.

let pageHeader: PageHeader;

test.beforeEach(async ({ page }) => {
  pageHeader = new PageHeader(page);
});

test.describe('Appearance tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.inventoryPage);
      });

      test('Default element visibility', async () => {
        await expect(pageHeader.headerContainer).toBeVisible();
        await expect(pageHeader.menuButton).toBeVisible();
        await expect(pageHeader.menu.menu).not.toBeVisible();
        await expect(pageHeader.title).toBeVisible();
        await expect(pageHeader.shoppingCartLink).toBeVisible();
        await expect(pageHeader.shoppingCartBadge).toHaveCount(0);
        await expect(pageHeader.secondaryHeader).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(pageHeader.title).toHaveText(EXPECTED_TEXT.title);
      });

      test('Element styling', async () => {
        let element = pageHeader.headerContainer;
        await expect(element).toHaveCSS('border-bottom', `1px solid ${COLORS.borderColor}`);
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('display', 'flex');

        element = pageHeader.title;
        await expect(element).toHaveCSS('font-size', '24px');
        await expect(element).toHaveCSS('text-align', 'center');

        element = pageHeader.menuButton;
        // Menu button is in the top-left
        await expect(element).toHaveCSS('position', 'absolute');
        await expect(element).toHaveCSS('left', '0px');
        await expect(element).toHaveCSS('top', '0px');

        element = pageHeader.shoppingCartContainer;
        // Shopping cart link is in the top-right (within a container)
        const VISUAL_FAILURE_CLASS = 'visual_failure';
        await expect(element).toHaveCSS('position', 'absolute');
        if (user.description === 'Visual User') {
          // The cart icon is misaligned for the Visual User account
          await expect(element).toContainClass(VISUAL_FAILURE_CLASS);
          await expect(element).toHaveCSS('right', '205px');
          await expect(element).toHaveCSS('top', '40px');
        } else {
          await expect(element).not.toContainClass(VISUAL_FAILURE_CLASS);
          await expect(element).toHaveCSS('right', '20px');
          await expect(element).toHaveCSS('top', '10px');
        }
        await expect(element).toHaveCSS('width', '40px');
        await expect(element).toHaveCSS('height', '40px');
      });

      // The cart in the main header shows a badge indicating the number of products in the cart (if not 0)
      // but updating the contents of the cart can only be done outside the header itself. Therefore, to be
      // able to test the badge appearance in this spec we "force" products into the cart via local storage
      // rather than using the standard UI interactions
      test('Shopping cart badge appearance', async ({ page }) => {
        if (user.description === 'Performance Glitch User') test.setTimeout(60_000);
        let productIds: number[] = [];
        for (let i = 0; i < PRODUCT_INFO.length; i++) {
          productIds.push(i);
          await setCartContentsInLocalStorage(page, productIds, URLS.inventoryPage);
          await expect(pageHeader.shoppingCartBadge).toBeVisible();
          await expect(pageHeader.shoppingCartBadge).toHaveText(`${i + 1}`, { timeout: 10_000 });
        }
      });
    });
  });
});

test.describe('Visual tests', () => {
  // These visual tests are limited to the primary header as this is the only element
  // shared by all pages - the secondary header varies between pages

  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.inventoryPage);
      });

      test('No products in cart', async () => {
        const SNAPSHOT = user === USERS.visual ? 'emptyCartMisaligned.png' : 'emptyCart.png';
        await expect(pageHeader.primaryHeader).toHaveScreenshot(SNAPSHOT);
      });

      test('Products in cart', async ({ page }) => {
        const SNAPSHOT = user === USERS.visual ? 'productsInCartMisaligned.png' : 'productsInCart.png';
        await setCartContentsInLocalStorage(page, [0, 1], URLS.inventoryPage);
        await expect(pageHeader.primaryHeader).toHaveScreenshot(SNAPSHOT);
      });
    });
  });
});

test.describe('Behavioural tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.inventoryPage);
      });

      test('Shopping cart link opens cart page', async ({ page, baseURL }) => {
        // The shopping cart link doesn't actually have an href attribute but still opens the cart page
        await expect(pageHeader.shoppingCartLink).not.toHaveAttribute('href');
        await pageHeader.shoppingCartLink.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
      });
    });
  });
});
