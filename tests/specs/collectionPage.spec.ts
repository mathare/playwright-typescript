import { test, expect } from '@playwright/test';
import CollectionPage from '../pages/collectionPage';
import { Collections, ExpectedText, Links, Products } from '../data/collectionPage';
import { ProductItemElements } from '../pages/components/productItem';

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
      if (Products[collection].length) await expect.soft(collectionPage.productsGrid).toBeVisible();
      await expect.soft(collectionPage.pageFooter.footer).toBeVisible();
      await expect.soft(collectionPage.pageFooter.copyrightFooter).toBeVisible();

      await expect.soft(collectionPage.promoBlock).toHaveCount(ExpectedText[collection].PromoBlocks.length);
      await expect.soft(collectionPage.productItem).toHaveCount(Products[collection].length);
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

    test('Product item details', async () => {
      const productDetails = Products[collection];
      const productItems = collectionPage.productItem;
      await expect.soft(productItems).toHaveCount(productDetails.length);
      for (let i = 0; i < (await productItems.count()); i++) {
        await expect
          .soft(collectionPage.getProductItemElement(i, ProductItemElements.Name))
          .toHaveText(productDetails[i].title);
        if (productDetails[i].rating) {
          await expect
            .soft(collectionPage.getProductItemElement(i, ProductItemElements.Rating))
            .toHaveText(productDetails[i].rating!);
        }
        if (productDetails[i].reviews) {
          await expect
            .soft(collectionPage.getProductItemElement(i, ProductItemElements.Reviews))
            .toHaveText(productDetails[i].reviews!);
        }
        await expect
          .soft(collectionPage.getProductItemElement(i, ProductItemElements.Price).first())
          .toHaveText(productDetails[i].price);
        if (productDetails[i].sizes) {
          const sizes = collectionPage.getProductItemElement(i, ProductItemElements.Sizes);
          await expect.soft(sizes).toHaveCount(productDetails[i].sizes!.length);
          for (let j = 0; j < (await sizes.count()); j++) {
            await expect.soft(sizes.nth(j)).toHaveText(productDetails[i].sizes![j]);
          }
        }
        if (productDetails[i].colors) {
          const colors = collectionPage.getProductItemElement(i, ProductItemElements.Colors);
          await expect.soft(colors).toHaveCount(productDetails[i].colors!.length);
          for (let j = 0; j < (await colors.count()); j++) {
            await expect.soft(colors.nth(j)).toHaveCSS('background-color', productDetails[i].colors![j]);
          }
        }
      }
    });
  });

  test.describe('Link tests', () => {
    test('Breadcrumb links', async ({ baseURL }) => {
      const breadcrumbs = (await collectionPage.breadcrumbsContainer.innerText()).split('  ');
      // The last breadcrumb doesn't have a link as it is the current page
      for (let i = 0; i < breadcrumbs.length - 1; i++) {
        await expect
          .soft(collectionPage.breadcrumb.nth(i))
          .toHaveAttribute('href', `${baseURL}${Links[collection].Breadcrumbs[breadcrumbs[i]]}`);
      }
    });

    test('Promo block links', async ({ baseURL }) => {
      const promoBlocks = collectionPage.promoBlock;
      await expect.soft(promoBlocks).toHaveCount(Links[collection].PromoBlocks.length);
      for (let i = 0; i < (await promoBlocks.count()); i++) {
        await expect.soft(promoBlocks.nth(i)).toHaveAttribute('href', `${baseURL}${Links[collection].PromoBlocks[i]}`);
      }
    });

    test('Product links', async ({ baseURL }) => {
      const productDetails = Products[collection];
      const products = collectionPage.productItem;
      await expect.soft(products).toHaveCount(productDetails.length);
      for (let i = 0; i < (await products.count()); i++) {
        await expect
          .soft(collectionPage.getProductItemElement(i, ProductItemElements.PhotoLink))
          .toHaveAttribute('href', `${baseURL}${productDetails[i].link}`);
        await expect
          .soft(collectionPage.getProductItemElement(i, ProductItemElements.NameLink))
          .toHaveAttribute('href', `${baseURL}${productDetails[i].link}`);
        if (productDetails[i].reviews) {
          await expect
            .soft(collectionPage.getProductItemElement(i, ProductItemElements.ReviewsLink))
            .toHaveAttribute('href', `${baseURL}${productDetails[i].link}#reviews`);
        } else {
          await expect.soft(collectionPage.getProductItemElement(i, ProductItemElements.ReviewsLink)).not.toBeVisible();
        }
      }
    });
  });
});
