import test, { expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Inventory page tests', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.login('standard_user');
  });

  test.describe('Appearance tests', () => {
    test('Element visibility', async () => {
      await expect(inventoryPage.headerContainer).toBeVisible();
      await expect(inventoryPage.menuButton).toBeVisible();
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
  });
});
