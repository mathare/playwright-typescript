import { test, expect } from '@playwright/test';
import ProductCategoryPage from '../pages/productCategoryPage';

test.describe('Product category page tests', () => {
  let productCategoryPage: ProductCategoryPage;
  test.beforeEach(async ({ page }) => {
    productCategoryPage = new ProductCategoryPage(page);
    await productCategoryPage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(productCategoryPage.globalMessage).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.header).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.topnav).toBeVisible();
      await expect.soft(productCategoryPage.breadcrumbs).toBeVisible();
      await expect.soft(productCategoryPage.mainContent).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.footer).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.copyrightFooter).toBeVisible();
    });
  });
});
