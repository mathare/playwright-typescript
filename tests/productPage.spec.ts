import test, { expect } from '@playwright/test';
import { ProductPage } from '../pages/productPage';
import { LoginPage } from '../pages/loginPage';
import { EXPECTED_TEXT } from '../pages/inventoryPage';

test.describe('Product page tests', () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.login('standard_user');
    // Hardcode to backpack page for now
    await page.goto(`${productPage.url}4`);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(productPage.headerContainer).toBeVisible();
      await expect(productPage.menuButton).toBeVisible();
      await expect(productPage.menu).not.toBeVisible();
      await expect(productPage.title).toBeVisible();
      await expect(productPage.shoppingCartLink).toBeVisible();
      await expect(productPage.shoppingCartBadge).toHaveCount(0);
      await expect(productPage.secondaryHeader).toBeVisible();
      await expect(productPage.backButton).toBeVisible();
      await expect(productPage.inventoryItem).toBeVisible();
      await expect(productPage.productImage).toBeVisible;
      await expect(productPage.productName).toBeVisible;
      await expect(productPage.productDescription).toBeVisible;
      await expect(productPage.productPrice).toBeVisible;
      await expect(productPage.addToCartButton).toBeVisible;
      await expect(productPage.removeButton).toHaveCount(0);
      await expect(productPage.footer).toBeVisible();
      await expect(productPage.socialMediaItem).toHaveCount(EXPECTED_TEXT.socialMedia.length);
      await expect(productPage.footerCopy).toBeVisible();
    });
  });
});
