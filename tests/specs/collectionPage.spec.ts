import { test, expect } from '@playwright/test';
import CollectionPage from '../pages/collectionPage';
import { Collections, ExpectedText, Links, Filters, Products, ShoppingOptions } from '../data/collectionPage';
import { ProductItemElements } from '../pages/components/productItem';
import { Colors, Links as HeaderLinks, TopnavLvl0 } from '../data/pageHeader';
import * as dotenv from 'dotenv';

const Timeouts = {
  Visual: 20000,
};

dotenv.config();
const pages = process.env.TEST_MODE === 'full' ? Object.keys(Collections) : ['WhatsNew'];
for (const collection of pages) {
  test.describe(`${collection} page tests`, () => {
    let collectionPage: CollectionPage;

    test.beforeEach(async ({ page }) => {
      collectionPage = new CollectionPage(page);
      await collectionPage.open(Collections[collection]);
    });

    test.describe('Appearance tests', () => {
      // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
      // The tests could be combined but I have split them here to make them easier to read and maintain

      test('Main page elements displayed', async () => {
        await expect.soft(collectionPage.globalMessage).toBeVisible();
        await expect.soft(collectionPage.pageHeader.header).toBeVisible();
        await expect.soft(collectionPage.pageHeader.topnav).toBeVisible();
        await expect.soft(collectionPage.breadcrumbsContainer).toBeVisible();
        if (HeaderLinks.Topnav.hasOwnProperty(collection)) {
          await expect.soft(collectionPage.primarySidebar).toBeVisible();
          await expect.soft(collectionPage.secondarySidebar).toBeVisible();
        }
        if (Products.hasOwnProperty(collection) && Products[collection].length) {
          await expect.soft(collectionPage.productsGrid).toBeVisible();
          await expect.soft(collectionPage.productItem).toHaveCount(Products[collection].length);
        }
        await expect.soft(collectionPage.pageFooter.footer).toBeVisible();
        await expect.soft(collectionPage.pageFooter.copyrightFooter).toBeVisible();
        await expect.soft(collectionPage.promoBlock).toHaveCount(ExpectedText[collection].PromoBlocks.length);
      });

      test('Text content of page elements', async () => {
        const collectionExpectedText = ExpectedText[collection];
        await expect.soft(collectionPage.breadcrumbsContainer).toHaveText(collectionExpectedText.Breadcrumbs);
        await expect.soft(collectionPage.pageTitle).toHaveText(collectionExpectedText.Title);

        if (ShoppingOptions.hasOwnProperty(collection)) {
          const collectionShoppingOptions = ShoppingOptions[collection];
          await expect.soft(collectionPage.shoppingOptionsTitle).toHaveText(collectionShoppingOptions.title);
          await expect.soft(collectionPage.shoppingOptionsSubtitle).toHaveText(collectionShoppingOptions.subtitle);
          const categories = await collectionPage.getFilterCategories(collectionPage.shoppingOptionsList);
          await expect.soft(categories).toHaveCount(collectionShoppingOptions.categories.length);
          for (let i = 0; i < collectionShoppingOptions.categories.length; i++) {
            const expectedText = `${collectionShoppingOptions.categories[i].title} ${collectionShoppingOptions.categories[i].count}`;
            await expect.soft(categories.nth(i).locator('..')).toHaveText(expectedText, { useInnerText: true });
          }
        }

        if (Filters.hasOwnProperty(collection)) {
          const collectionFilters = Filters[collection];
          const filterLists = collectionPage.filterList;
          await expect.soft(filterLists).toHaveCount(collectionFilters.length);
          for (let i = 0; i < collectionFilters.length; i++) {
            await expect.soft(collectionPage.filterTitle.nth(i)).toHaveText(collectionFilters[i].title);
            const filterCategories = await collectionPage.getFilterCategories(filterLists.nth(i));
            await expect.soft(filterCategories).toHaveCount(collectionFilters[i].categories.length);
            for (let j = 0; j < collectionFilters[i].categories.length; j++) {
              await expect.soft(filterCategories.nth(j)).toHaveText(collectionFilters[i].categories[j].title);
            }
          }
        }

        // "Secondary" collection pages don't have a sidebar
        if (HeaderLinks.Topnav.hasOwnProperty(collection)) {
          const sidebarBlocks = collectionPage.sidebarBlock;
          await expect.soft(sidebarBlocks).toHaveCount(ExpectedText.SidebarBlocks.length);
          for (let i = 0; i < ExpectedText.SidebarBlocks.length; i++) {
            await expect.soft(sidebarBlocks.nth(i)).toHaveText(ExpectedText.SidebarBlocks[i], { useInnerText: true });
          }
        }

        const promoBlocks = collectionPage.promoBlock;
        await expect.soft(promoBlocks).toHaveCount(collectionExpectedText.PromoBlocks.length);
        for (let i = 0; i < collectionExpectedText.PromoBlocks.length; i++) {
          await expect
            .soft(promoBlocks.nth(i))
            .toHaveText(collectionExpectedText.PromoBlocks[i], { useInnerText: true });
        }
        if (
          collectionExpectedText.ProductsGrid.hasOwnProperty('Title') &&
          collectionExpectedText.ProductsGrid.hasOwnProperty('Subtitle')
        ) {
          await expect.soft(collectionPage.productsGridTitle).toHaveText(collectionExpectedText.ProductsGrid.Title);
          await expect
            .soft(collectionPage.productsGridSubtitle)
            .toHaveText(collectionExpectedText.ProductsGrid.Subtitle);
        }
      });

      test('Product item details', async ({}, testInfo) => {
        // The products displayed on the What's New page keep changing so there is no point verifying they are correct
        testInfo.skip(collection === 'WhatsNew', `Skip test for "What's New" page`);
        const productDetails = Products[collection];
        const productItems = collectionPage.productItem;
        await expect.soft(productItems).toHaveCount(productDetails.length);
        for (let i = 0; i < productDetails.length; i++) {
          await expect
            .soft(collectionPage.getProductItemElement(i, ProductItemElements.Name))
            .toHaveText(productDetails[i].name);
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
            .toHaveText(productDetails[i].price, { useInnerText: true });
          if (productDetails[i].sizes) {
            const sizes = collectionPage.getProductItemElement(i, ProductItemElements.Sizes);
            await expect.soft(sizes).toHaveCount(productDetails[i].sizes!.length);
            for (let j = 0; j < productDetails[i].sizes!.length; j++) {
              await expect.soft(sizes.nth(j)).toHaveText(productDetails[i].sizes![j]);
            }
          }
          if (productDetails[i].colors) {
            const colors = collectionPage.getProductItemElement(i, ProductItemElements.Colors);
            await expect.soft(colors).toHaveCount(productDetails[i].colors!.length);
            for (let j = 0; j < productDetails[i].colors!.length; j++) {
              await expect.soft(colors.nth(j)).toHaveCSS('background-color', productDetails[i].colors![j]);
            }
          }
        }
      });

      test('Corresponding topnav item highlighted', async ({}, testInfo) => {
        testInfo.skip(
          !HeaderLinks.Topnav.hasOwnProperty(collection),
          `${collection} has no corresponding topnav item so skip test`,
        );
        const activeClass = /active/;
        const topnavLinks = await collectionPage.pageHeader.getTopnavMenuItem(collectionPage.pageHeader.topnav, 0);
        await expect.soft(topnavLinks).toHaveCount(Object.keys(TopnavLvl0).length);
        for (let i = 0; i < Object.keys(TopnavLvl0).length; i++) {
          const link = await collectionPage.pageHeader.getTopnavMenuLink(topnavLinks.nth(i));
          if ((await link.textContent()) === collection.replace('WhatsNew', "What's New")) {
            await expect.soft(topnavLinks.nth(i)).toHaveClass(activeClass);
            await expect.soft(link).toHaveCSS('border-color', Colors.Border.Active);
            await expect.soft(link).toHaveCSS('border-width', '0px 0px 3px');
          } else {
            await expect.soft(topnavLinks.nth(i)).not.toHaveClass(activeClass);
            await expect.soft(link).toHaveCSS('border-color', Colors.Border.Inactive);
            await expect.soft(link).toHaveCSS('border-width', '0px');
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

      test('Filter links', async ({ baseURL }) => {
        if (ShoppingOptions.hasOwnProperty(collection)) {
          const collectionShoppingOptions = ShoppingOptions[collection];
          const categories = await collectionPage.getFilterCategories(collectionPage.shoppingOptionsList);
          await expect.soft(categories).toHaveCount(collectionShoppingOptions.categories.length);
          for (let i = 0; i < collectionShoppingOptions.categories.length; i++) {
            await expect
              .soft(categories.nth(i))
              .toHaveAttribute('href', `${baseURL}${collectionShoppingOptions.categories[i].link}`);
          }
        }

        if (Filters.hasOwnProperty(collection)) {
          const collectionFilters = Filters[collection];
          const filterLists = collectionPage.filterList;
          await expect.soft(filterLists).toHaveCount(collectionFilters.length);
          for (let i = 0; i < collectionFilters.length; i++) {
            const filterCategories = await collectionPage.getFilterCategories(filterLists.nth(i));
            await expect.soft(filterCategories).toHaveCount(collectionFilters[i].categories.length);
            for (let j = 0; j < collectionFilters[i].categories.length; j++) {
              await expect
                .soft(filterCategories.nth(j))
                .toHaveAttribute('href', `${baseURL}${collectionFilters[i].categories[j].link}`);
            }
          }
        }
      });

      test('Promo block links', async ({ baseURL }) => {
        const promoBlocks = collectionPage.promoBlock;
        await expect.soft(promoBlocks).toHaveCount(Links[collection].PromoBlocks.length);
        for (let i = 0; i < Links[collection].PromoBlocks.length; i++) {
          if (Links[collection].PromoBlocks[i] !== '') {
            await expect
              .soft(promoBlocks.nth(i))
              .toHaveAttribute('href', `${baseURL}${Links[collection].PromoBlocks[i]}`);
          }
        }
      });

      test('Product links', async ({ baseURL }, testInfo) => {
        // The products displayed on the What's New page keep changing so there is no point verifying the links are correct
        testInfo.skip(collection === 'WhatsNew', `Skip test for "What's New" page`);
        const productDetails = Products[collection];
        const products = collectionPage.productItem;
        await expect.soft(products).toHaveCount(productDetails.length);
        for (let i = 0; i < productDetails.length; i++) {
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
            await expect
              .soft(collectionPage.getProductItemElement(i, ProductItemElements.ReviewsLink))
              .not.toBeVisible();
          }
        }
      });
    });

    test.describe('Visual tests', () => {
      test('Collection page appearance', async ({ browserName }) => {
        const imageName = `${collection.replace(collection.charAt(0), collection.charAt(0).toLowerCase())}.png`;
        // Mask products grid for What's New page since it keeps changing
        const mask =
          collection === 'WhatsNew'
            ? [collectionPage.productsGrid]
            : // Mask colour swatches on Firefox as they can render inconsistently and we already have a test for
              // the RGB value of each colour
              browserName === 'firefox'
              ? [collectionPage.productItem.locator(ProductItemElements.Colors)]
              : [];
        // Allow a small diff on Firefox to reduce flake
        const maxDiffPixels = browserName === 'firefox' ? 100 : 0;
        await expect(collectionPage.mainContent).toHaveScreenshot(imageName, {
          timeout: Timeouts.Visual,
          mask: mask,
          maxDiffPixels: maxDiffPixels,
        });
      });
    });
  });
}
