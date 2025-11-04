import { test, expect } from '@playwright/test';
import { EXPECTED_TEXT, InventoryPage } from '../pages/inventoryPage';
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
      await expect(inventoryPage.inventoryItem).toHaveCount(6);
      await expect(inventoryPage.footer).toBeVisible();
      await expect(inventoryPage.socialMediaLink).toHaveCount(3);
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
  });
});
