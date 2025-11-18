import test, { expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, PageHeader } from '../pages/components/pageHeader';
import { InventoryPage, PRODUCT_INFO } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';
import { UAParser } from 'ua-parser-js';

// This spec makes a not unreasonable assumption that the header displayed at the top of all pages
// expect the login page is mostly the same across all pages. As such, the main assertions are performed
// against a single page (the inventory page).
// There are some differences in the secondary header between pages but all within the same secondary
// header container - those are verified within the individual page test specs.

test.describe('Page header tests', () => {
  let pageHeader: PageHeader;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.login('standard_user');
    await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`);
    pageHeader = new PageHeader(page);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(pageHeader.headerContainer).toBeVisible();
      await expect(pageHeader.menuButton).toBeVisible();
      await expect(pageHeader.menu).not.toBeVisible();
      await expect(pageHeader.title).toBeVisible();
      await expect(pageHeader.shoppingCartLink).toBeVisible();
      await expect(pageHeader.shoppingCartBadge).toHaveCount(0);
      await expect(pageHeader.secondaryHeader).toBeVisible();
    });

    test('Text content of elements', async () => {
      await expect(pageHeader.title).toHaveText(EXPECTED_TEXT.title);
    });

    test('Element styling', async () => {
      await expect(pageHeader.headerContainer).toHaveCSS('border-bottom', `1px solid ${COLORS.borderColor}`);
      await expect(pageHeader.headerContainer).toHaveCSS('color', COLORS.textColor);
      await expect(pageHeader.headerContainer).toHaveCSS('display', 'flex');

      await expect(pageHeader.title).toHaveCSS('font-size', '24px');
      await expect(pageHeader.title).toHaveCSS('text-align', 'center');

      // Menu button is in the top-left
      await expect(pageHeader.menuButton).toHaveCSS('position', 'absolute');
      await expect(pageHeader.menuButton).toHaveCSS('left', '0px');
      await expect(pageHeader.menuButton).toHaveCSS('top', '0px');

      // Shopping cart link is in the top-right (within a container)
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('position', 'absolute');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('right', '20px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('top', '10px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('width', '40px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('height', '40px');
    });

    // The cart in the main header shows a badge indicating the number of products in the cart (if not 0)
    // but updating the contents of the cart can only be done outside the header itself. Therefore, to be
    // able to test the badge appearance in this spec we "force" products into the cart via local storage
    // rather than using the standard UI interactions
    test('Shopping cart badge appearance', async ({ page }) => {
      let productIds: number[] = [];
      for (let i = 0; i < PRODUCT_INFO.length; i++) {
        productIds.push(i);
        await page.evaluate(
          (productIds) => localStorage.setItem('cart-contents', `[${productIds.join()}]`),
          productIds
        );
        await page.reload();
        await expect(pageHeader.shoppingCartBadge).toBeVisible();
        await expect(pageHeader.shoppingCartBadge).toHaveText(`${i + 1}`);
      }
    });

    test.describe('Visual tests', () => {
      // These visual tests are limited to the primary header as this is the only element
      // shared by all pages - the secondary header varies between pages

      test('No products in cart', async () => {
        await expect(pageHeader.primaryHeader).toHaveScreenshot('emptyCart.png');
      });

      test('Products in cart', async ({ page, browserName }) => {
        test.skip(browserName === 'webkit', 'Page reload seems to fail for webkit on Linux');
        await page.evaluate(() => localStorage.setItem('cart-contents', '[0,1]'));
        await page.goto(inventoryPage.url);
        await expect(pageHeader.primaryHeader).toHaveScreenshot('productsInCart.png');
      });
    });
  });

  test('Shopping cart link opens cart page', async ({ page, baseURL }) => {
    // The shopping cart link doesn't actually have an href attribute but still opens the cart page
    await expect(pageHeader.shoppingCartLink).not.toHaveAttribute('href');
    await pageHeader.shoppingCartLink.click();
    await expect(page).toHaveURL(`${baseURL}/cart.html`);
  });
});
