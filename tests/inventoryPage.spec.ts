import { test, expect } from '@playwright/test';
import { EXPECTED_TEXT, InventoryPage, PRODUCT_INFO } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Inventory page tests', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.login('standard_user');
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(inventoryPage.headerContainer).toBeVisible();
      await expect(inventoryPage.menuButton).toBeVisible();
      await expect(inventoryPage.menu).not.toBeVisible();
      await expect(inventoryPage.title).toBeVisible();
      await expect(inventoryPage.shoppingCartLink).toBeVisible();
      await expect(inventoryPage.secondaryHeader).toBeVisible();
      await expect(inventoryPage.subtitle).toBeVisible();
      await expect(inventoryPage.activeSortOption).toBeVisible();
      await expect(inventoryPage.sortSelect).toBeVisible();
      await expect(inventoryPage.inventoryContainer).toBeVisible();
      await expect(inventoryPage.inventoryItem).toHaveCount(PRODUCT_INFO.length);
      await expect(inventoryPage.footer).toBeVisible();
      await expect(inventoryPage.socialMediaLink).toHaveCount(EXPECTED_TEXT.SOCIAL_MEDIA.length);
      await expect(inventoryPage.footerCopy).toBeVisible();
    });

    test('Element visibility with menu open', async () => {
      await inventoryPage.menuButton.click();
      await expect(inventoryPage.menu).toBeVisible();
      await expect(inventoryPage.menuItem).toHaveCount(EXPECTED_TEXT.MENU_ITEMS.length);
      await expect(inventoryPage.menuCloseButton).toBeVisible();

      // The menu obscures certain page elements but they still count as visible based on the Playwright definition
      // Therefore, rather than asserting on the state of the covered elements it is easier to test visually (below)
    });

    // Verifying the details of each displayed product is done via a separate test
    test('Text content of elements', async () => {
      await expect(inventoryPage.title).toHaveText(EXPECTED_TEXT.TITLE);
      await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.SUBTITLE);
      await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.SORT_OPTIONS[0]);
      await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.SORT_OPTIONS.join(''));
      for (let i = 0; i < EXPECTED_TEXT.SOCIAL_MEDIA.length; i++) {
        await expect(inventoryPage.socialMediaLink.nth(i)).toHaveText(EXPECTED_TEXT.SOCIAL_MEDIA[i]);
      }
      await expect(inventoryPage.footerCopy).toHaveText(EXPECTED_TEXT.FOOTER);

      await inventoryPage.menuButton.click();
      for (let i = 0; i < EXPECTED_TEXT.MENU_ITEMS.length; i++) {
        await expect(inventoryPage.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.MENU_ITEMS[i]);
      }
    });

    test('Product details', async () => {
      // Sort products by default sort option (name A-Z)
      const PRODUCTS = PRODUCT_INFO.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
      for (let i = 0; i < PRODUCTS.length; i++) {
        await expect
          .soft(inventoryPage.getProductInfo(i, 'img.inventory_item_img'))
          .toHaveAttribute('src', PRODUCTS[i].imgSrc);
        await expect(inventoryPage.getProductInfo(i, 'div.inventory_item_name')).toHaveText(PRODUCTS[i].title);
        await expect(inventoryPage.getProductInfo(i, 'div.inventory_item_desc')).toHaveText(PRODUCTS[i].description);
        await expect(inventoryPage.getProductInfo(i, 'div.inventory_item_price')).toHaveText(PRODUCTS[i].price);
      }
    });

    test.describe('Visual tests', () => {
      test('Default state', async ({ page }) => {
        await expect(page).toHaveScreenshot('default.png', { fullPage: true });
      });

      test('Menu open', async ({ page }) => {
        await inventoryPage.menuButton.click();
        await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
      });
    });
  });
});
