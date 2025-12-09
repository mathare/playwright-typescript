import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, InventoryPage, PRODUCT_ELEMENTS } from '../pages/inventoryPage';
import { PRODUCT_INFO } from '../data/products';
import {
  formatUsernameForDisplay,
  formatUsernameForScreenshotFilename,
  getCartContentsFromLocalStorage,
  login,
  setCartContentsInLocalStorage,
} from '../helpers/utils';
import { URLS } from '../data/pages';

const NUM_PRODUCTS = PRODUCT_INFO.length;

let inventoryPage: InventoryPage;
let cartContents: Record<string, string>;

test.beforeEach(async ({ page }) => {
  inventoryPage = new InventoryPage(page);
});

test.describe('Appearance tests', () => {
  ['standard_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Default element visibility', async ({}) => {
        await expect(inventoryPage.pageHeader.headerContainer).toBeVisible();
        await expect(inventoryPage.subtitle).toBeVisible();
        await expect(inventoryPage.activeSortOption).toBeVisible();
        await expect(inventoryPage.sortSelect).toBeVisible();
        await expect(inventoryPage.inventoryContainer).toBeVisible();
        await expect(inventoryPage.inventoryItem).toHaveCount(NUM_PRODUCTS);
        await expect(inventoryPage.pageFooter.footer).toBeVisible();
      });

      // Verifying the details of each displayed product is done via a separate test
      test('Text content of elements', async () => {
        await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.sortOptions[0]);
        await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.sortOptions.join(''));
      });

      test('Element styling', async () => {
        let element = inventoryPage.body;
        await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');

        element = inventoryPage.subtitle;
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        await expect(inventoryPage.activeSortOption).toHaveCSS('text-align', 'center');
      });
    });
  });
});

test.describe('Visual tests', () => {
  test.describe(formatUsernameForDisplay('standard_user'), () => {
    test.beforeEach(async ({ page, context, baseURL }) => {
      await login(context, baseURL!, 'standard_user');
      await page.goto(URLS.inventoryPage);
    });

    test('Default state of full page', async ({ page }) => {
      await expect(page).toHaveScreenshot('default.png', { fullPage: true });
    });

    test('Menu open', async ({ page }) => {
      await inventoryPage.pageHeader.menuButton.click();
      await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
    });

    test('Products added to cart', async () => {
      await inventoryPage.addAllProductsToCart();
      // Limit this image comparison to only the elements that have changed to reduce
      // dependencies on other elements that might change e.g. page header and footer
      await expect(inventoryPage.inventoryContainer).toHaveScreenshot('productsInCart.png');
    });
  });

  ['standard_user', 'problem_user', 'error_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Default state', async () => {
        await expect(inventoryPage.inventoryContainer).toHaveScreenshot(formatUsernameForScreenshotFilename(user));
      });
    });
  });
});

test.describe('Product tests', () => {
  ['standard_user', 'problem_user', 'error_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Default product styling', async () => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          let element = inventoryPage.inventoryItem.nth(i);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.product.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '8px');
          await expect(element).toHaveCSS('display', 'flex');

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveCSS('color', COLORS.product.titleColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Product title changes style on hover', async () => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).hover();
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS(
            'color',
            COLORS.product.hoverColor
          );
        }
      });

      test('Only title & img have link to product page', async () => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          // I don't like using locators within tests but this is the easiest way of conducting this test
          const LINK = inventoryPage.inventoryItem.nth(i).locator('a');
          await expect(LINK).toHaveCount(2);
          // Verifying this ID doesn't really show the link is on the image but it can be implied from the ID
          // Verifying the link position in the DOM relative to other elements (e.g. the product image) is tricky and offers relatively low value
          await expect(LINK.nth(0)).toHaveId(new RegExp('item_\\d_img_link'));
          await expect(LINK.nth(0)).toHaveAttribute('href', '#');
          await expect(LINK.nth(1)).toHaveId(new RegExp('item_\\d_title_link'));
          await expect(LINK.nth(1)).toHaveAttribute('href', '#');
        }
      });

      test('Cursor changes when over title, img and cart button', async ({ browserName }) => {
        test.skip(browserName === 'webkit');
        const pointerElements = ['title', 'img', 'button'];
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = inventoryPage.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            await productElement.hover();
            const cursorStyle = pointerElements.includes(productElements[j]) ? 'pointer' : 'auto';
            await expect(productElement).toHaveCSS('cursor', cursorStyle);
          }
        }
      });
    });
  });

  ['standard_user', 'error_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Product details - default sort (name A-Z)', async () => {
        const PRODUCTS = [...PRODUCT_INFO].sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
        for (let i = 0; i < PRODUCTS.length; i++) {
          let element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img);
          await expect(element).toHaveAttribute('src', PRODUCTS[i].imgSrc);
          await expect(element).toHaveAttribute('alt', PRODUCTS[i].title);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveText(PRODUCTS[i].title);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description);
          await expect(element).toHaveText(PRODUCTS[i].description);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveText(`\$${PRODUCTS[i].price}`);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toBeVisible();
          await expect(element).toHaveText(EXPECTED_TEXT.addToCartButton);
        }
      });

      for (let i = 0; i < NUM_PRODUCTS; i++) {
        test.describe(` ${PRODUCT_INFO[i].shortName} link tests`, () => {
          test(`Clicking title opens product page`, async ({ page, baseURL }) => {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).click();
            await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${PRODUCT_INFO[i].id}`);
          });

          test(`Clicking image opens product page`, async ({ page, baseURL }) => {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img).click();
            await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${PRODUCT_INFO[i].id}`);
          });

          test(`Clicking description does nothing`, async ({ page, baseURL }) => {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description).click();
            await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
          });

          test(`Clicking price does nothing`, async ({ page, baseURL }) => {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price).click();
            await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
          });
        });
      }
    });
  });

  ['standard_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test.describe('Non-default sorting', () => {
        [
          {
            description: 'sort by name (Z-A)',
            products: [...PRODUCT_INFO].sort((a, b) => (b.title > a.title ? 1 : a.title > b.title ? -1 : 0)),
            sortBy: 'Name (Z to A)',
            sortOption: 'za',
          },
          {
            description: 'sort by price (low-high)',
            products: [...PRODUCT_INFO].sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)),
            sortBy: 'Price (low to high)',
            sortOption: 'lohi',
          },
          {
            description: 'sort by price (high-low)',
            products: [...PRODUCT_INFO].sort((a, b) => (b.price > a.price ? 1 : a.price > b.price ? -1 : 0)),
            sortBy: 'Price (high to low)',
            sortOption: 'hilo',
          },
        ].forEach((testCase) => {
          test(`Product details - ${testCase.description}`, async () => {
            if (testCase.sortOption !== 'default') {
              await inventoryPage.sortSelect.selectOption(testCase.sortOption);
            }
            await expect(inventoryPage.activeSortOption).toHaveText(testCase.sortBy);

            for (let i = 0; i < testCase.products.length; i++) {
              let element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img);
              await expect(element).toHaveAttribute('src', testCase.products[i].imgSrc);
              await expect(element).toHaveAttribute('alt', testCase.products[i].title);

              element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
              await expect(element).toHaveText(testCase.products[i].title);

              element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description);
              await expect(element).toHaveText(testCase.products[i].description);

              element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
              await expect(element).toHaveText(`\$${testCase.products[i].price}`);

              element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
              await expect(element).toBeVisible();
              await expect(element).toHaveText(EXPECTED_TEXT.addToCartButton);
            }
          });
        });
      });

      test.describe('Add products to cart & remove', () => {
        // Which products are in the cart is tracked via a cart-contents array in local storage.
        // As each product can only be added to the cart once it uses an array of product IDs.
        // The length of this array is used to determine the badge to display over the cart in
        // the header, as tested in the page header spec. So all we need to test here is that
        // product IDs are added to the cart-contents array in local storage correctly

        let productIDs: string;

        test('Add product to cart', async ({ context }) => {
          const PRODUCT_INDEX = Math.floor(Math.random() * NUM_PRODUCTS);
          await inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button).click();

          // Verify product ID added to cart contents in local storage
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual(`[${PRODUCT_INFO[PRODUCT_INDEX].id}]`);

          // Verify button on relevant product has changed correctly
          await inventoryPage.verifyCartButtonStyle(PRODUCT_INDEX, 'remove');

          // Verify other products unchanged
          for (let i = 0; i < NUM_PRODUCTS; i++) {
            if (i !== PRODUCT_INDEX) {
              await inventoryPage.verifyCartButtonStyle(i, 'add');
            }
          }
        });

        test('Add multiple products to cart', async ({ context }) => {
          for (let i = 0; i < NUM_PRODUCTS; i++) {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
            cartContents = await getCartContentsFromLocalStorage(context);
            productIDs = `[${PRODUCT_INFO.slice(0, i + 1)
              .map((product) => product.id)
              .join()}]`;
            expect(cartContents.value).toEqual(productIDs);
            await inventoryPage.verifyCartButtonStyle(i, 'remove');
          }
        });

        test('Remove only product from cart', async ({ context }) => {
          await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual(`[${PRODUCT_INFO[0].id}]`);

          await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual('[]');
          await inventoryPage.verifyCartButtonStyle(0, 'add');
        });

        test('Remove multiple products from cart', async ({ context }) => {
          await inventoryPage.addAllProductsToCart();

          for (let i = 0; i < NUM_PRODUCTS; i++) {
            await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
            cartContents = await getCartContentsFromLocalStorage(context);
            productIDs = `[${PRODUCT_INFO.slice(i + 1)
              .map((product) => product.id)
              .join()}]`;
            expect(cartContents.value).toEqual(productIDs);
            await inventoryPage.verifyCartButtonStyle(i, 'add');
          }
        });
      });
    });
  });

  ['problem_user', 'error_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      const PURCHASABLE_PRODUCTS = ['Backpack', 'Bike Light', 'Onesie'];
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Only backpack, bike light & onesie can be added to cart', async ({ page, context }) => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          // Clear any existing cart contents
          await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
          if (PURCHASABLE_PRODUCTS.includes(PRODUCT_INFO[i].shortName)) {
            await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
            await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
            await inventoryPage.verifyCartButtonStyle(i, 'remove');
            // Verify product ID added to cart contents in local storage
            cartContents = await getCartContentsFromLocalStorage(context);
            expect(cartContents.value).toEqual(`[${PRODUCT_INFO[i].id}]`);
          } else {
            await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveCount(0);
            await inventoryPage.verifyCartButtonStyle(i, 'add');
            // Verify product ID added to cart contents in local storage
            cartContents = await getCartContentsFromLocalStorage(context);
            expect(cartContents.value).toEqual('[]');
          }
        }
      });

      test('Items added to cart cannot be removed', async ({ page }) => {
        let productIndex: number;

        for (let i = 0; i < PURCHASABLE_PRODUCTS.length; i++) {
          // Clear any existing cart contents
          await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

          // Add product to cart
          productIndex = PRODUCT_INFO.findIndex((prod) => prod.shortName === PURCHASABLE_PRODUCTS[i]);
          await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
          await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');

          await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
          await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');
        }
      });
    });
  });

  ['problem_user'].forEach((user) => {
    test.describe(formatUsernameForDisplay(user), () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user);
        await page.goto(URLS.inventoryPage);
      });

      test('Product image is incorrect for all products', async () => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          let element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img);
          await expect(element).toHaveAttribute('src', '/static/media/sl-404.168b1cce10384b857a6f.jpg');
          await expect(element).toHaveAttribute('alt', PRODUCT_INFO[i].title);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveText(PRODUCT_INFO[i].title);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description);
          await expect(element).toHaveText(PRODUCT_INFO[i].description);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveText(`\$${PRODUCT_INFO[i].price}`);

          element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toBeVisible();
          await expect(element).toHaveText(EXPECTED_TEXT.addToCartButton);
        }
      });

      test('Sort does nothing', async () => {
        const SORT_OPTIONS = ['az', 'za', 'lohi', 'hilo'];
        for (let i = 0; i < SORT_OPTIONS.length; i++) {
          await inventoryPage.sortSelect.selectOption(SORT_OPTIONS[i]);
          await expect(inventoryPage.activeSortOption).toHaveText('Name (A to Z)');
          await expect(inventoryPage.inventoryContainer).toHaveScreenshot('problemUser.png');
        }
      });

      test('Each product title and image links to the wrong product page', async ({ page, baseURL }) => {
        // We can reasonably assume the product page displays the details of the corresponding product if
        // the URL has the matching product ID, even though we are logged in as problem_user. This is
        // verified by tests within the Product Page spec
        const LINKED_PRODUCT_IDS = [5, 1, 2, 6, 3, 4];
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${LINKED_PRODUCT_IDS[i]}`);
          await page.goBack();

          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${LINKED_PRODUCT_IDS[i]}`);
          await page.goBack();
        }
      });
    });
  });
});

test.describe('Problem User', () => {
  const PURCHASABLE_PRODUCTS = ['Backpack', 'Bike Light', 'Onesie'];

  test.beforeEach(async ({ page, context, baseURL }) => {
    inventoryPage = new InventoryPage(page);
    await login(context, baseURL!, 'problem_user');
    await page.goto(URLS.inventoryPage);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(inventoryPage.pageHeader.headerContainer).toBeVisible();
      await expect(inventoryPage.subtitle).toBeVisible();
      await expect(inventoryPage.activeSortOption).toBeVisible();
      await expect(inventoryPage.sortSelect).toBeVisible();
      await expect(inventoryPage.inventoryContainer).toBeVisible();
      await expect(inventoryPage.inventoryItem).toHaveCount(NUM_PRODUCTS);
      await expect(inventoryPage.pageFooter.footer).toBeVisible();
    });

    // Verifying the details of each displayed product is done via a separate test
    test('Text content of elements', async () => {
      await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
      await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.sortOptions[0]);
      await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.sortOptions.join(''));
    });

    test('Element styling', async () => {
      let element = inventoryPage.body;
      await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
      await expect(element).toHaveCSS('color', COLORS.textColor);
      await expect(element).toHaveCSS('font-size', '14px');

      element = inventoryPage.subtitle;
      await expect(element).toHaveCSS('font-size', '18px');
      await expect(element).toHaveCSS('font-weight', '500');

      await expect(inventoryPage.activeSortOption).toHaveCSS('text-align', 'center');
    });

    test.describe('Visual tests', () => {
      test('Default state', async () => {
        await expect(inventoryPage.inventoryContainer).toHaveScreenshot('problemUser.png');
      });
    });
  });

  test.describe('Product tests', () => {
    test('Default product styling', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        let element = inventoryPage.inventoryItem.nth(i);
        await expect(element).toHaveCSS('border', `1px solid ${COLORS.product.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '8px');
        await expect(element).toHaveCSS('display', 'flex');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
        await expect(element).toHaveCSS('color', COLORS.product.titleColor);
        await expect(element).toHaveCSS('font-size', '20px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
        await expect(element).toHaveCSS('font-size', '20px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
        await expect(element).toHaveCSS('font-size', '16px');
        await expect(element).toHaveCSS('font-weight', '500');
      }
    });

    test('Product title changes style on hover', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).hover();
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS(
          'color',
          COLORS.product.hoverColor
        );
      }
    });

    test('Product image is incorrect for all products', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        let element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img);
        await expect(element).toHaveAttribute('src', '/static/media/sl-404.168b1cce10384b857a6f.jpg');
        await expect(element).toHaveAttribute('alt', PRODUCT_INFO[i].title);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
        await expect(element).toHaveText(PRODUCT_INFO[i].title);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description);
        await expect(element).toHaveText(PRODUCT_INFO[i].description);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
        await expect(element).toHaveText(`\$${PRODUCT_INFO[i].price}`);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
        await expect(element).toBeVisible();
        await expect(element).toHaveText(EXPECTED_TEXT.addToCartButton);
      }
    });

    test('Sort does nothing', async () => {
      const SORT_OPTIONS = ['az', 'za', 'lohi', 'hilo'];
      for (let i = 0; i < SORT_OPTIONS.length; i++) {
        await inventoryPage.sortSelect.selectOption(SORT_OPTIONS[i]);
        await expect(inventoryPage.activeSortOption).toHaveText('Name (A to Z)');
        await expect(inventoryPage.inventoryContainer).toHaveScreenshot('problemUser.png');
      }
    });

    test('Only backpack, bike light & onesie can be added to cart', async ({ page, context }) => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        // Clear any existing cart contents
        await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
        if (PURCHASABLE_PRODUCTS.includes(PRODUCT_INFO[i].shortName)) {
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
          await inventoryPage.verifyCartButtonStyle(i, 'remove');
          // Verify product ID added to cart contents in local storage
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual(`[${PRODUCT_INFO[i].id}]`);
        } else {
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveCount(0);
          await inventoryPage.verifyCartButtonStyle(i, 'add');
          // Verify product ID added to cart contents in local storage
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual('[]');
        }
      }
    });

    test('Items added to cart cannot be removed', async ({ page }) => {
      let productIndex: number;

      for (let i = 0; i < PURCHASABLE_PRODUCTS.length; i++) {
        // Clear any existing cart contents
        await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

        // Add product to cart
        productIndex = PRODUCT_INFO.findIndex((prod) => prod.shortName === PURCHASABLE_PRODUCTS[i]);
        await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
        await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');

        await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
        await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');
      }
    });

    test('Each product title and image links to the wrong product page', async ({ page, baseURL }) => {
      // We can reasonably assume the product page displays the details of the corresponding product if
      // the URL has the matching product ID, even though we are logged in as problem_user. This is
      // verified by tests within the Product Page spec
      const LINKED_PRODUCT_IDS = [5, 1, 2, 6, 3, 4];
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${LINKED_PRODUCT_IDS[i]}`);
        await page.goBack();

        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${LINKED_PRODUCT_IDS[i]}`);
        await page.goBack();
      }
    });

    test('Cursor changes when over title, img and cart button', async ({ browserName }) => {
      test.skip(browserName === 'webkit');
      const pointerElements = ['title', 'img', 'button'];
      const productElements = Object.keys(PRODUCT_ELEMENTS);
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        for (let j = 0; j < productElements.length; j++) {
          const productElement = inventoryPage.getProductElement(
            i,
            PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
          );
          await productElement.hover();
          const cursorStyle = pointerElements.includes(productElements[j]) ? 'pointer' : 'auto';
          await expect(productElement).toHaveCSS('cursor', cursorStyle);
        }
      }
    });
  });
});

test.describe('Error User', () => {
  test.beforeEach(async ({ page, context, baseURL }) => {
    inventoryPage = new InventoryPage(page);
    await login(context, baseURL!, 'error_user');
    await page.goto(URLS.inventoryPage);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(inventoryPage.pageHeader.headerContainer).toBeVisible();
      await expect(inventoryPage.subtitle).toBeVisible();
      await expect(inventoryPage.activeSortOption).toBeVisible();
      await expect(inventoryPage.sortSelect).toBeVisible();
      await expect(inventoryPage.inventoryContainer).toBeVisible();
      await expect(inventoryPage.inventoryItem).toHaveCount(NUM_PRODUCTS);
      await expect(inventoryPage.pageFooter.footer).toBeVisible();
    });

    // Verifying the details of each displayed product is done via a separate test
    test('Text content of elements', async () => {
      await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
      await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.sortOptions[0]);
      await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.sortOptions.join(''));
    });

    test('Element styling', async () => {
      let element = inventoryPage.body;
      await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
      await expect(element).toHaveCSS('color', COLORS.textColor);
      await expect(element).toHaveCSS('font-size', '14px');

      element = inventoryPage.subtitle;
      await expect(element).toHaveCSS('font-size', '18px');
      await expect(element).toHaveCSS('font-weight', '500');

      await expect(inventoryPage.activeSortOption).toHaveCSS('text-align', 'center');
    });

    test.describe('Visual tests', () => {
      test('Default state', async () => {
        await expect(inventoryPage.inventoryContainer).toHaveScreenshot('errorUser.png');
      });
    });
  });

  test.describe('Product tests', () => {
    const PURCHASABLE_PRODUCTS = ['Backpack', 'Bike Light', 'Onesie'];

    test('Default product styling', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        let element = inventoryPage.inventoryItem.nth(i);
        await expect(element).toHaveCSS('border', `1px solid ${COLORS.product.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '8px');
        await expect(element).toHaveCSS('display', 'flex');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
        await expect(element).toHaveCSS('color', COLORS.product.titleColor);
        await expect(element).toHaveCSS('font-size', '20px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
        await expect(element).toHaveCSS('font-size', '20px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
        await expect(element).toHaveCSS('font-size', '16px');
        await expect(element).toHaveCSS('font-weight', '500');
      }
    });

    test('Product title changes style on hover', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).hover();
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS(
          'color',
          COLORS.product.hoverColor
        );
      }
    });

    test('Product details', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        let element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img);
        await expect(element).toHaveAttribute('src', PRODUCT_INFO[i].imgSrc);
        await expect(element).toHaveAttribute('alt', PRODUCT_INFO[i].title);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title);
        await expect(element).toHaveText(PRODUCT_INFO[i].title);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description);
        await expect(element).toHaveText(PRODUCT_INFO[i].description);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price);
        await expect(element).toHaveText(`\$${PRODUCT_INFO[i].price}`);

        element = inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button);
        await expect(element).toBeVisible();
        await expect(element).toHaveText(EXPECTED_TEXT.addToCartButton);
      }
    });

    test('Sort raises an error alert', async ({ page }) => {
      // Trap alerts to allow verification rather than have Playwright handle them automatically
      page.on('dialog', async (alert) => {
        expect(alert.message()).toEqual(EXPECTED_TEXT.brokenSort);
        alert.dismiss();
      });

      const SORT_OPTIONS = ['az', 'za', 'lohi', 'hilo'];
      for (let i = 0; i < SORT_OPTIONS.length; i++) {
        await inventoryPage.sortSelect.selectOption(SORT_OPTIONS[i]);
        await expect(inventoryPage.activeSortOption).toHaveText('Name (A to Z)');
      }
    });

    test('Only backpack, bike light & onesie can be added to cart', async ({ page, context }) => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        // Clear any existing cart contents
        await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

        await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
        if (PURCHASABLE_PRODUCTS.includes(PRODUCT_INFO[i].shortName)) {
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
          await inventoryPage.verifyCartButtonStyle(i, 'remove');
          // Verify product ID added to cart contents in local storage
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual(`[${PRODUCT_INFO[i].id}]`);
        } else {
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveCount(0);
          await inventoryPage.verifyCartButtonStyle(i, 'add');
          // Verify product ID added to cart contents in local storage
          cartContents = await getCartContentsFromLocalStorage(context);
          expect(cartContents.value).toEqual('[]');
        }
      }
    });

    test('Items added to cart cannot be removed', async ({ page }) => {
      let productIndex: number;

      for (let i = 0; i < PURCHASABLE_PRODUCTS.length; i++) {
        // Clear any existing cart contents
        await setCartContentsInLocalStorage(page, [], URLS.inventoryPage);

        // Add product to cart
        productIndex = PRODUCT_INFO.findIndex((prod) => prod.shortName === PURCHASABLE_PRODUCTS[i]);
        await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
        await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');

        await inventoryPage.getProductElement(productIndex, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
        await inventoryPage.verifyCartButtonStyle(productIndex, 'remove');
      }
    });

    test('Cursor changes when over title, img and cart button', async ({ browserName }) => {
      test.skip(browserName === 'webkit');
      const pointerElements = ['title', 'img', 'button'];
      const productElements = Object.keys(PRODUCT_ELEMENTS);
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        for (let j = 0; j < productElements.length; j++) {
          const productElement = inventoryPage.getProductElement(
            i,
            PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
          );
          await productElement.hover();
          const cursorStyle = pointerElements.includes(productElements[j]) ? 'pointer' : 'auto';
          await expect(productElement).toHaveCSS('cursor', cursorStyle);
        }
      }
    });

    for (let i = 0; i < NUM_PRODUCTS; i++) {
      test.describe(` ${PRODUCT_INFO[i].shortName} link tests`, () => {
        test(`Clicking title opens product page`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${PRODUCT_INFO[i].id}`);
        });

        test(`Clicking image opens product page`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.productPage}${PRODUCT_INFO[i].id}`);
        });

        test(`Clicking description does nothing`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
        });

        test(`Clicking price does nothing`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price).click();
          await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
        });
      });
    }
  });
});
