import { test, expect, Locator } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, ProductPage } from '../pages/productPage';
import { ALL_PRODUCTS } from '../data/products';
import { generateProductSnapshotName, getCartContentsFromLocalStorage, login } from '../helpers/utils';
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
  // on other product pages. It helps that the bike light is a product that all users can
  // add to the basket via the UI allowing the same product page to be used for everyone.
  // There are separate tests covering cases where the behaviour of the product page differs
  // from the bike light page for certain users

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

    let maskedElements: Locator[];

    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(`${URLS.productPage}0`);
          maskedElements = [productPage.pageFooter.footer];
        });

        test('Default state', async ({ page }) => {
          let snapshot = 'default.png';
          if (user === USERS.error) snapshot = 'defaultErrorUser.png';
          if (user === USERS.visual) snapshot = 'defaultVisualUser.png';
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true, mask: maskedElements });
        });

        test('Menu open', async ({ page }) => {
          let snapshot = 'menuOpen.png';
          if (user === USERS.error) snapshot = 'menuOpenErrorUser.png';
          if (user === USERS.visual) snapshot = 'menuOpenVisualUser.png';
          await productPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true, mask: maskedElements });
        });

        test('Product added to cart', async ({ page }) => {
          let snapshot = 'productInCart.png';
          if (user === USERS.error) snapshot = 'productInCartErrorUser.png';
          if (user === USERS.visual) snapshot = 'productInCartVisualUser.png';
          await productPage.cartButton.click();
          await expect(page).toHaveScreenshot(snapshot, { fullPage: true, mask: maskedElements });
        });
      });
    });
  });

  test.describe('Behavioural tests', () => {
    [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
      test.describe(user.description, () => {
        test.beforeEach(async ({ page, context, baseURL }) => {
          await login(context, baseURL!, user.username);
          await page.goto(`${URLS.productPage}0`);
        });

        test('"Back to products" button opens inventory page', async ({ page, baseURL }) => {
          await productPage.backButton.click();
          await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
        });
      });
    });
  });
});

ALL_PRODUCTS.forEach((product) => {
  test.describe(`${product.shortName} page tests`, () => {
    test.describe('Appearance tests', () => {
      [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
        test.describe(user.description, () => {
          test.beforeEach(async ({ page, context, baseURL }) => {
            await login(context, baseURL!, user.username);
            await page.goto(`${URLS.productPage}${product.id}`);
          });

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
            const DESCRIPTION = user === USERS.error ? EXPECTED_TEXT.descriptionError : product.description;
            await expect(productPage.productDescription).toHaveText(DESCRIPTION);
            await expect(productPage.productPrice).toHaveText(`\$${product.price}`);
            await expect(productPage.cartButton).toHaveText(EXPECTED_TEXT.addToCartButton);
          });
        });
      });
    });

    test.describe('Visual tests', () => {
      // The visual tests for the individual product pages capture the product elements only so they
      // are resilient to any header/footer changes

      [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
        test.describe(user.description, () => {
          test.beforeEach(async ({ page, context, baseURL }) => {
            await login(context, baseURL!, user.username);
            await page.goto(`${URLS.productPage}${product.id}`);
          });

          test('Product details', async () => {
            const SNAPSHOT =
              user === USERS.error
                ? generateProductSnapshotName(product.shortName).replace('.', 'ErrorUser.')
                : generateProductSnapshotName(product.shortName);
            await expect(productPage.inventoryItem).toHaveScreenshot(SNAPSHOT);
          });
        });
      });
    });

    test.describe('Behavioural tests', () => {
      // Which products are in the cart is tracked via a cart-contents array in local storage.
      // As each product can only be added to the cart once, it uses a simple array of product
      // IDs without quantities per product. The length of this array is used to determine the
      // badge to display over the cart in the header, as tested in the page header spec. So all
      // we need to test here is that product IDs are added to the cart-contents array in local
      // storage correctly and that the add/remove button style updates accordingly

      let cartContents: Record<string, string>;

      [USERS.standard, USERS.visual, USERS.performanceGlitch].forEach((user) => {
        test.describe(user.description, () => {
          test.beforeEach(async ({ page, context, baseURL }) => {
            await login(context, baseURL!, user.username);
            await page.goto(`${URLS.productPage}${product.id}`);
          });

          test('Add product to cart', async ({ context }) => {
            await productPage.cartButton.click();

            // Verify product ID in local storage
            cartContents = await getCartContentsFromLocalStorage(context);
            expect(cartContents.value).toEqual(`[${product.id}]`);

            // Verify button has updated correctly
            await productPage.verifyCartButtonStyle('remove');
          });

          test('Remove product from cart', async ({ context }) => {
            await productPage.cartButton.click();
            cartContents = await getCartContentsFromLocalStorage(context);
            expect(cartContents.value).toEqual(`[${product.id}]`);
            await productPage.cartButton.click();

            // Verify product ID in local storage
            cartContents = await getCartContentsFromLocalStorage(context);
            expect(cartContents.value).toEqual('[]');

            // Verify button has updated correctly
            await productPage.verifyCartButtonStyle('add');
          });
        });
      });

      [USERS.problem, USERS.error].forEach((user) => {
        test.describe(user.description, () => {
          test.beforeEach(async ({ page, context, baseURL }) => {
            await login(context, baseURL!, user.username);
            await page.goto(`${URLS.productPage}${product.id}`);
          });

          if (!product.restrictedPurchase) {
            test('Add product to cart', async ({ context }) => {
              await productPage.cartButton.click();

              // Verify product ID in local storage
              cartContents = await getCartContentsFromLocalStorage(context);
              expect(cartContents.value).toEqual(`[${product.id}]`);

              // Verify button has updated correctly
              await productPage.verifyCartButtonStyle('remove');
            });

            test('"Remove" button does nothing', async ({ context }) => {
              await productPage.cartButton.click();
              cartContents = await getCartContentsFromLocalStorage(context);
              expect(cartContents.value).toEqual(`[${product.id}]`);
              await productPage.cartButton.click();

              // Verify product still in cart & button unchanged
              cartContents = await getCartContentsFromLocalStorage(context);
              expect(cartContents.value).toEqual(`[${product.id}]`);
              await productPage.verifyCartButtonStyle('remove');
            });
          } else {
            test('Unable to add product to cart', async ({ context }) => {
              await productPage.cartButton.click();

              // Verify cart contents not set in local storage
              cartContents = await getCartContentsFromLocalStorage(context);
              expect(cartContents).toBeUndefined();

              // Verify button is unchanged
              await productPage.verifyCartButtonStyle('add');
            });
          }
        });
      });
    });
  });
});
