import test, { expect } from '@playwright/test';
import { ProductPage } from '../pages/productPage';
import { LoginPage } from '../pages/loginPage';
import { EXPECTED_TEXT, PRODUCT_INFO } from '../pages/inventoryPage';

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

    test('Element visibility with menu open', async () => {
      await productPage.menuButton.click();
      await expect(productPage.menu).toBeVisible();
      await expect(productPage.menuItem).toHaveCount(EXPECTED_TEXT.menuItems.length);
      await expect(productPage.menuCloseButton).toBeVisible();

      // The menu obscures certain page elements but they still count as visible based on the Playwright definition
      // Therefore, rather than asserting on the state of the covered elements it is easier to test visually (below)
    });

    test('Text content of elements', async () => {
      await expect(productPage.title).toHaveText(EXPECTED_TEXT.title);
      await expect(productPage.backButton).toHaveText('Back to products');

      await expect(productPage.productName).toHaveText(PRODUCT_INFO[0].title);
      await expect(productPage.productDescription).toHaveText(PRODUCT_INFO[0].description);
      await expect(productPage.productPrice).toHaveText(`\$${PRODUCT_INFO[0].price}`);
      await expect(productPage.addToCartButton).toHaveText(EXPECTED_TEXT.addToCartButton);

      for (let i = 0; i < EXPECTED_TEXT.socialMedia.length; i++) {
        await expect(productPage.socialMediaItem.nth(i)).toHaveText(EXPECTED_TEXT.socialMedia[i]);
      }
      await expect(productPage.footerCopy).toHaveText(EXPECTED_TEXT.footer);

      await productPage.menuButton.click();
      for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
        await expect(productPage.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.menuItems[i]);
      }
    });
  });
});
