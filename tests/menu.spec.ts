import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage, PRODUCT_ELEMENTS } from '../pages/inventoryPage';
import { COLORS, EXPECTED_TEXT, LINKS, Menu } from '../pages/components/menu';
import { PageHeader } from '../pages/components/pageHeader';
import { PRODUCT_INFO } from '../data/products';
import { setCartContentsInLocalStorage } from '../helpers/utils';
import { URLS } from '../data/pages';

// This spec makes a not unreasonable assumption that the menu is the same across all pages.
// As such, the main assertions are performed against a single page (the inventory page).

test.describe('Menu tests', () => {
  let loginPage: LoginPage;
  let pageHeader: PageHeader;
  let menu: Menu;
  const numMenuItems = EXPECTED_TEXT.menuItems.length;

  test.beforeEach(async ({ page, baseURL }) => {
    loginPage = new LoginPage(page);
    await loginPage.login('standard_user');
    await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
    pageHeader = new PageHeader(page);
    menu = new Menu(page);
  });

  test.describe('Appearance tests', () => {
    test('Menu closed', async () => {
      // The menu elements exist in the DOM but are not visible on screen while the menu is closed
      await expect(menu.menu).not.toBeVisible();
      await expect(menu.menuCloseButton).not.toBeVisible();
      await expect(menu.menuItemList).not.toBeVisible();
      await expect(menu.menuItem).toHaveCount(numMenuItems);
      for (let i = 0; i < numMenuItems; i++) {
        await expect(menu.menuItem.nth(i)).not.toBeVisible();
      }
    });

    test('Element visibility with menu open', async () => {
      await pageHeader.menuButton.click();
      await expect(menu.menu).toBeVisible();
      await expect(menu.menuItemList).toBeVisible();
      await expect(menu.menuItem).toHaveCount(numMenuItems);
      for (let i = 0; i < numMenuItems; i++) {
        await expect(menu.menuItem.nth(i)).toBeVisible();
      }
      await expect(menu.menuCloseButton).toBeVisible();
    });

    test('Text content of elements', async () => {
      await pageHeader.menuButton.click();
      for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
        await expect(menu.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.menuItems[i]);
      }
    });

    test('Element styling', async () => {
      await pageHeader.menuButton.click();
      await expect(menu.menu).toHaveCSS('position', 'fixed');
      for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
        await expect(menu.menuItem.nth(i)).toHaveCSS('color', COLORS.textColor);
        await expect(menu.menuItem.nth(i)).toHaveCSS('border-bottom', `1px solid ${COLORS.borderColor}`);
        await expect(menu.menuItem.nth(i)).toHaveCSS('font-size', '16px');

        await menu.menuItem.nth(i).hover();
        await expect(menu.menuItem.nth(i)).toHaveCSS('color', COLORS.hoverColor);
      }
    });

    test.describe('Visual tests', () => {
      // There is no need to visually test the menu when closed as this is done as part of the page header tests
      test('Menu open', async () => {
        // This test is limited to the menu itself. How it appears on each page when open is tested via
        // visual tests for the individual pages in the corresponding specs
        await pageHeader.menuButton.click();
        await expect(menu.menu).toHaveScreenshot('menuOpen.png');
      });
    });
  });

  test('Menu item links', async () => {
    for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
      const menuItemText = EXPECTED_TEXT.menuItems[i];
      const key = (menuItemText.charAt(0).toLowerCase + menuItemText.replace(' ', '')) as keyof typeof LINKS;
      await expect(menu.menuItem.nth(i)).toHaveAttribute('href', LINKS[key]);
    }
  });

  test.describe('Behavioural tests', () => {
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
      await pageHeader.menuButton.click();
      inventoryPage = new InventoryPage(page);
    });

    test('Close button closes menu', async () => {
      await menu.menuCloseButton.click();
      await expect(menu.menu).not.toBeVisible();
    });

    // Many of the menu item links have an href attribute of "#" indicating there is some JavaScript actioned
    // when the link is clicked so we should test what each link does explicitly
    test('"All Items" menu link opens inventory page', async ({ page, baseURL }) => {
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[0] }).click();
      await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      // The menu remains open
      await expect(menu.menu).toBeVisible();

      // Navigate to another page to prove the link opens the inventory page if not already open
      await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.title).click();
      await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${PRODUCT_INFO[0].id}`);

      await pageHeader.menuButton.click();
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[0] }).click();
      await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      // The menu is closed
      await expect(menu.menu).not.toBeVisible();
    });

    test('"About" menu link opens Sauce Labs webpage in current tab', async ({ page }) => {
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[1] }).click();
      await expect(page).toHaveURL(LINKS.about);
    });

    test('"Logout" menu item logs the user out', async ({ page, baseURL, context }) => {
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[2] }).click();
      await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      // Login cookie is deleted
      const cookies = await context.cookies(baseURL);
      expect(cookies).toHaveLength(0);
    });

    test('"Reset App State" menu link does nothing when no products in cart', async ({ page, baseURL }) => {
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[3] }).click();
      await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      // The menu remains open
      await expect(menu.menu).toBeVisible();
      await expect(pageHeader.shoppingCartBadge).toHaveCount(0);
    });

    test('"Reset App State" menu link empties shopping cart but does not reset product cart buttons', async ({
      page,
    }) => {
      // "Force" products into cart via local storage
      const productsInCart = [0, 1];
      await setCartContentsInLocalStorage(page, productsInCart, URLS.inventoryPage);
      await expect(pageHeader.shoppingCartBadge).toBeVisible();
      await expect(pageHeader.shoppingCartBadge).toHaveText(`${productsInCart.length}`);
      for (let i = 0; i < PRODUCT_INFO.length; i++) {
        const buttonText = productsInCart.includes(PRODUCT_INFO[i].id) ? 'remove' : 'add';
        await inventoryPage.verifyCartButtonStyle(i, buttonText);
      }

      await pageHeader.menuButton.click();
      await menu.menuItem.filter({ hasText: EXPECTED_TEXT.menuItems[3] }).click();
      await expect(menu.menu).toBeVisible();
      await expect(pageHeader.shoppingCartBadge).toHaveCount(0);
      // Product cart buttons are unchanged
      for (let i = 0; i < PRODUCT_INFO.length; i++) {
        const buttonText = productsInCart.includes(PRODUCT_INFO[i].id) ? 'remove' : 'add';
        await inventoryPage.verifyCartButtonStyle(i, buttonText);
      }
    });
  });
});
