import { test, expect } from '@playwright/test';
import ProductCategoryPage from '../pages/productCategoryPage';
import { ExpectedText, ProductCategories } from '../data/productCategoryPage';

test.describe('Product category page tests', () => {
  let productCategoryPage: ProductCategoryPage;
  test.beforeEach(async ({ page }) => {
    productCategoryPage = new ProductCategoryPage(page);
    // Temporarily set category page to known page rather than random page for simplicity at this stage
    await productCategoryPage.open(ProductCategories.Women.Tops);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(productCategoryPage.globalMessage).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.header).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.topnav).toBeVisible();
      await expect.soft(productCategoryPage.breadcrumbs).toBeVisible();
      await expect.soft(productCategoryPage.filters).toBeVisible();
      await expect.soft(productCategoryPage.sidebar).toBeVisible();
      await expect.soft(productCategoryPage.displayToolbar).toBeVisible();
      await expect.soft(productCategoryPage.productsGrid).toBeVisible();
      await expect.soft(productCategoryPage.paginationToolbar).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.footer).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Text content of page elements', async () => {
      // Need to select the relevant category once we revert to using random pages rather than a fixed category page
      const categoryExpectedText = ExpectedText.WomenTops;
      await expect.soft(productCategoryPage.breadcrumbs).toHaveText(categoryExpectedText.Breadcrumbs);
      await expect.soft(productCategoryPage.pageTitle).toHaveText(categoryExpectedText.Title);
      await expect.soft(productCategoryPage.filtersTitle).toHaveText(ExpectedText.FiltersTitle);
    });
  });
});
