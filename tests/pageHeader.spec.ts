import test, { expect } from '@playwright/test';
import { EXPECTED_TEXT, PageHeader } from '../pages/components/pageHeader';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

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
      // Menu button is in the top-left
      await expect(pageHeader.menuButton).toHaveCSS('position', 'absolute');
      await expect(pageHeader.menuButton).toHaveCSS('left', '0px');
      await expect(pageHeader.menuButton).toHaveCSS('top', '0px');
      await expect(pageHeader.title).toHaveCSS('font-size', '24px');
      // Shopping cart link is in the top-right (within a container)
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('position', 'absolute');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('right', '20px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('top', '10px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('width', '40px');
      await expect(pageHeader.shoppingCartContainer).toHaveCSS('height', '40px');
    });
  });

  test('Shopping cart link opens cart page', async ({ page, baseURL }) => {
    // The shopping cart link doesn't actually have an href attribute but still opens the cart page
    await expect(pageHeader.shoppingCartLink).not.toHaveAttribute('href');
    await pageHeader.shoppingCartLink.click();
    await expect(page).toHaveURL(`${baseURL}/cart.html`);
  });
});
