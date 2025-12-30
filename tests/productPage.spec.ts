import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, ProductPage } from '../pages/productPage';
import { PRODUCT_INFO } from '../data/products';
import { getCartContentsFromLocalStorage, login } from '../helpers/utils';
import { URLS } from '../data/pages';
import { USERS } from '../data/users';

let productPage: ProductPage;

test.beforeEach(async ({ page, context, baseURL }) => {
  productPage = new ProductPage(page);
  await login(context, baseURL!, 'standard_user');
});

test.describe('Common page elements', async () => {
  // Some elements of the product page are common to all products so there is no need to
  // test these on every product page. We can test them on a single product page (in this
  // case the bike light page) and reasonably assume they will appear and behave the same
  // on other product pages

  test.describe('Appearance tests', () => {
    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(`${URLS.productPage}0`);
        });

        test('Default element visibility', async () => {
          await expect(productPage.pageHeader.headerContainer).toBeVisible();
          await expect(productPage.backButton).toBeVisible();
          await expect(productPage.inventoryItem).toBeVisible();
          await expect(productPage.pageFooter.footer).toBeVisible();
        });

        test('Text content of elements', async () => {
          await expect(productPage.backButton).toHaveText(EXPECTED_TEXT.backButton);
        });

        test('Element styling', async () => {
          let element = productPage.body;
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '14px');

          element = productPage.backButton;
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = productPage.inventoryItemContainer;
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);

          element = productPage.inventoryItem;
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.product.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '8px');
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('display', 'flex');

          element = productPage.productName;
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = productPage.productDescription;
          await expect(element).toHaveCSS('font-size', '14px');

          element = productPage.productPrice;
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = productPage.cartButton;
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.textColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
          await expect(element).toHaveCSS('width', '160px');
        });

        test('"Back to products" button style updates on hover', async () => {
          await productPage.backButton.hover();
          await expect(productPage.backButton).toHaveCSS('color', COLORS.backButton.hoverColor);
        });
      });
    });
  });

  test.describe('Visual tests', () => {
    // These visual tests could mask the product details elements for greater resilience
    // i.e. the baseline images would not need to change if the product details change.
    // However, I want to be alerted to any changes in the product details elements so
    // these tests rightly capture those elements. That way if they change size, position
    // etc we have those changes tracked by a failing test

    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(`${URLS.productPage}0`);
        });

        test('Default state', async ({ page }) => {
          let snapshot = 'default.png';
          if (user === USERS.error) snapshot = 'defaultErrorUser.png';
          if (user === USERS.visual) snapshot = 'defaultVisualUser.png';
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          let snapshot = 'menuOpen.png';
          if (user === USERS.error) snapshot = 'menuOpenErrorUser.png';
          if (user === USERS.visual) snapshot = 'menuOpenVisualUser.png';
          await productPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true });
        });

        test('Product added to cart', async ({ page }) => {
          let snapshot = 'productInCart.png';
          if (user === USERS.error) snapshot = 'productInCartErrorUser.png';
          if (user === USERS.visual) snapshot = 'productInCartVisualUser.png';
          await productPage.cartButton.click();
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true });
        });
      });
    });
  });

  test.describe('Behavioural tests', () => {
    test('"Back to products" button opens inventory page', async ({ page, baseURL }) => {
      await productPage.backButton.click();
      await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
    });

    test.describe('Add to cart & remove', () => {
      // Which products are in the cart is tracked via a cart-contents array in local storage.
      // As each product can only be added to the cart once it uses an array of product IDs.
      // The length of this array is used to determine the badge to display over the cart in
      // the header, as tested in the page header spec. So all we need to test here is that
      // product IDs are added to the cart-contents array in local storage correctly
      let cartContents: Record<string, string>;

      test('Add product to cart', async ({ context }) => {
        await productPage.cartButton.click();

        // Verify product ID in local storage
        cartContents = await getCartContentsFromLocalStorage(context);
        expect(cartContents.value).toEqual('[0]');

        // Verify button has updated correctly
        await productPage.verifyCartButtonStyle('remove');
      });

      test('Remove product from cart', async ({ context }) => {
        await productPage.cartButton.click();
        cartContents = await getCartContentsFromLocalStorage(context);
        expect(cartContents.value).toEqual('[0]');
        await productPage.cartButton.click();

        // Verify product ID in local storage
        cartContents = await getCartContentsFromLocalStorage(context);
        expect(cartContents.value).toEqual('[]');

        // Verify button has updated correctly
        await productPage.verifyCartButtonStyle('add');
      });
    });
  });
});

PRODUCT_INFO.forEach((product) => {
  test.describe(`${product.shortName} page tests`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${URLS.productPage}${product.id}`);
    });

    test.describe('Appearance tests', () => {
      test('Element visibility', async () => {
        await expect(productPage.productImage).toBeVisible();
        await expect(productPage.productName).toBeVisible();
        await expect(productPage.productDescription).toBeVisible();
        await expect(productPage.productPrice).toBeVisible();
        await expect(productPage.cartButton).toBeVisible();
      });

      test('Product details', async () => {
        await expect(productPage.productImage).toHaveAttribute('alt', product.title);
        await expect(productPage.productImage).toHaveAttribute('src', product.imgSrc);
        await expect(productPage.productName).toHaveText(product.title);
        await expect(productPage.productDescription).toHaveText(product.description);
        await expect(productPage.productPrice).toHaveText(`\$${product.price}`);
        await expect(productPage.cartButton).toHaveText(EXPECTED_TEXT.addToCartButton);
      });
    });

    test.describe('Visual tests', () => {
      // The visual tests for the individual product pages capture the product elements only so they
      // are resilient to any header/footer changes
      test('Product details', async () => {
        await expect(productPage.inventoryItem).toHaveScreenshot(generateProductSnapshotName(product.shortName));
      });
    });
  });
});

const generateProductSnapshotName = (name: string): string => {
  // Sanitise product name for use as snapshot name
  // Convert first letter to lowercase then remove spaces & dashes
  return name.charAt(0).toLowerCase() + name.slice(1).replace(' ', '').replace('-', '') + '.png';
};
