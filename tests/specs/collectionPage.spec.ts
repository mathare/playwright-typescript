import { test, expect } from '@playwright/test';
import CollectionPage from '../pages/collectionPage';
import { Collections, ExpectedText } from '../data/collectionPage';

test.describe('Collection page tests', () => {
  let collectionPage: CollectionPage;
  let collection: string;
  test.beforeEach(async ({ page }) => {
    collectionPage = new CollectionPage(page);
    // const topLvlCategory = Object.keys(Collections)[Math.floor(Math.random() * Object.keys(Collections).length)];
    // const subCategory = Object.keys(Collections[topLvlCategory])[
    //   Math.floor(Math.random() * Object.keys(Collections[topLvlCategory]).length)
    // ];
    // category = `${topLvlCategory}${subCategory}`;
    // await collectionPage.open(Collections[topLvlCategory][subCategory]);

    // Hardcode page for now
    collection = 'Women';
    await collectionPage.open(Collections.Women);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(collectionPage.globalMessage).toBeVisible();
      await expect.soft(collectionPage.pageHeader.header).toBeVisible();
      await expect.soft(collectionPage.pageHeader.topnav).toBeVisible();
      await expect.soft(collectionPage.breadcrumbsContainer).toBeVisible();
      await expect.soft(collectionPage.primarySidebar).toBeVisible();
      await expect.soft(collectionPage.secondarySidebar).toBeVisible();
      await expect.soft(collectionPage.productsGrid).toBeVisible();
      await expect.soft(collectionPage.pageFooter.footer).toBeVisible();
      await expect.soft(collectionPage.pageFooter.copyrightFooter).toBeVisible();

      // To be replaced by dynamic values depending on collection
      await expect.soft(collectionPage.promoBlock).toHaveCount(7);
      await expect.soft(collectionPage.productItem).toHaveCount(4);
    });

    test('Text content of page elements', async () => {
      const collectionExpectedText = ExpectedText[collection];
      await expect.soft(collectionPage.breadcrumbsContainer).toHaveText(collectionExpectedText.Breadcrumbs);
      await expect.soft(collectionPage.pageTitle).toHaveText(collectionExpectedText.Title);
      // Add sidebar expected text verification
      const promoBlocks = collectionPage.promoBlock;
      await expect.soft(promoBlocks).toHaveCount(collectionExpectedText.PromoBlocks.length);
      for (let i = 0; i < (await promoBlocks.count()); i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveText(collectionExpectedText.PromoBlocks[i], { useInnerText: true });
      }
      await expect.soft(collectionPage.productsGridTitle).toHaveText(collectionExpectedText.ProductsGrid.Title);
      await expect.soft(collectionPage.productsGridSubtitle).toHaveText(collectionExpectedText.ProductsGrid.Subtitle);
    });
  });
});
