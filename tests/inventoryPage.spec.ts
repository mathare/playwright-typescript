import { test, expect, BrowserContext } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, InventoryPage, PRODUCT_ELEMENTS, PRODUCT_INFO } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Inventory page tests', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page, baseURL }) => {
    let loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.login('standard_user');
    await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(inventoryPage.pageHeader.headerContainer).toBeVisible();
      await expect(inventoryPage.subtitle).toBeVisible();
      await expect(inventoryPage.activeSortOption).toBeVisible();
      await expect(inventoryPage.sortSelect).toBeVisible();
      await expect(inventoryPage.inventoryContainer).toBeVisible();
      await expect(inventoryPage.inventoryItem).toHaveCount(PRODUCT_INFO.length);
      await expect(inventoryPage.pageFooter.footer).toBeVisible();
    });

    test('Element visibility with menu open', async () => {
      await inventoryPage.pageHeader.menuButton.click();
      await expect(inventoryPage.pageHeader.menu).toBeVisible();
      await expect(inventoryPage.pageHeader.menuItem).toHaveCount(EXPECTED_TEXT.menuItems.length);
      await expect(inventoryPage.pageHeader.menuCloseButton).toBeVisible();

      // The menu obscures certain page elements but they still count as visible based on the Playwright definition
      // Therefore, rather than asserting on the state of the covered elements it is easier to test visually (below)
    });

    // Verifying the details of each displayed product is done via a separate test
    test('Text content of elements', async () => {
      await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
      await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.sortOptions[0]);
      await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.sortOptions.join(''));

      await inventoryPage.pageHeader.menuButton.click();
      for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
        await expect(inventoryPage.pageHeader.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.menuItems[i]);
      }
    });

    test('Element styling', async () => {
      await expect(inventoryPage.body).toHaveCSS('background-color', COLORS.backgroundColor);
      await expect(inventoryPage.body).toHaveCSS('color', COLORS.textColor);
      await expect(inventoryPage.body).toHaveCSS('font-size', '14px');

      await expect(inventoryPage.subtitle).toHaveCSS('font-size', '18px');
      await expect(inventoryPage.subtitle).toHaveCSS('font-weight', '500');
      await expect(inventoryPage.activeSortOption).toHaveCSS('text-align', 'center');
    });

    test.describe('Visual tests', () => {
      test('Default state', async ({ page }) => {
        await expect(page).toHaveScreenshot('default.png', { fullPage: true });
      });

      test('Menu open', async ({ page }) => {
        await inventoryPage.pageHeader.menuButton.click();
        await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
      });

      test('Products added to cart', async ({ page }) => {
        await inventoryPage.addAllProductsToCart();
        await expect(page).toHaveScreenshot('productsInCart.png', { fullPage: true });
      });
    });
  });

  test.describe('Product tests', () => {
    const NUM_PRODUCTS = PRODUCT_INFO.length;

    test('Product styling', async () => {
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS('border', `1px solid ${COLORS.productBorderColor}`);
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS('border-radius', '8px');
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS('display', 'flex');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS(
          'color',
          COLORS.productTitleColor
        );
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS('font-size', '20px');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS('font-weight', '500');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveCSS('font-size', '20px');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveCSS('font-weight', '500');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveCSS('font-size', '16px');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveCSS('font-weight', '500');
      }
    });

    test.describe('Product details', () => {
      [
        {
          description: 'Default sort (name A-Z)',
          products: [...PRODUCT_INFO].sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0)),
          sortBy: 'Name (A to Z)',
          sortOption: 'default',
        },
        {
          description: 'Sort by name (Z-A)',
          products: [...PRODUCT_INFO].sort((a, b) => (b.title > a.title ? 1 : a.title > b.title ? -1 : 0)),
          sortBy: 'Name (Z to A)',
          sortOption: 'za',
        },
        {
          description: 'Sort by price (low-high)',
          products: [...PRODUCT_INFO].sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)),
          sortBy: 'Price (low to high)',
          sortOption: 'lohi',
        },
        {
          description: 'Sort by price (high-low)',
          products: [...PRODUCT_INFO].sort((a, b) => (b.price > a.price ? 1 : a.price > b.price ? -1 : 0)),
          sortBy: 'Price (high to low)',
          sortOption: 'hilo',
        },
      ].forEach((testCase) => {
        test(testCase.description, async () => {
          if (testCase.sortOption !== 'default') {
            await inventoryPage.sortSelect.selectOption(testCase.sortOption);
          }
          await expect(inventoryPage.activeSortOption).toHaveText(testCase.sortBy);

          for (let i = 0; i < testCase.products.length; i++) {
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img)).toHaveAttribute(
              'src',
              testCase.products[i].imgSrc
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img)).toHaveAttribute(
              'alt',
              testCase.products[i].title
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(
              testCase.products[i].title
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
              testCase.products[i].description
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
              `\$${testCase.products[i].price}`
            );

            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toBeVisible();
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
              EXPECTED_TEXT.addToCartButton
            );
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

      let cartContents: Record<string, string | string[]>;
      let productIDs: string;

      test('Add product to cart', async ({ context }) => {
        const PRODUCT_INDEX = Math.floor(Math.random() * NUM_PRODUCTS);
        await inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button).click();

        // Verify product ID added to cart contents in local storage
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
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
          await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText(`${i + 1}`);
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
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText('1');
        cartContents = await getCartContentsFromLocalStorage(context);
        expect(cartContents.value).toEqual(`[${PRODUCT_INFO[0].id}]`);

        await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveCount(0);
        cartContents = await getCartContentsFromLocalStorage(context);
        expect(cartContents.value).toEqual('[]');
        await inventoryPage.verifyCartButtonStyle(0, 'add');
      });

      test('Remove multiple products from cart', async ({ context }) => {
        await inventoryPage.addAllProductsToCart();
        await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText(`${NUM_PRODUCTS}`);

        for (let i = 0; i < NUM_PRODUCTS; i++) {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
          if (i === NUM_PRODUCTS - 1) {
            await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveCount(0);
          } else {
            await expect(inventoryPage.pageHeader.shoppingCartBadge).toHaveText(`${NUM_PRODUCTS - (i + 1)}`);
          }
          cartContents = await getCartContentsFromLocalStorage(context);
          productIDs = `[${PRODUCT_INFO.slice(i + 1)
            .map((product) => product.id)
            .join()}]`;
          expect(cartContents.value).toEqual(productIDs);
          await inventoryPage.verifyCartButtonStyle(i, 'add');
        }
      });
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

    for (let i = 0; i < NUM_PRODUCTS; i++) {
      test.describe(` ${PRODUCT_INFO[i].title} link tests`, () => {
        test(`Clicking title opens product page`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title).click();
          await expect(page).toHaveURL(`${baseURL}/inventory-item.html?id=${PRODUCT_INFO[i].id}`);
        });

        test(`Clicking image opens product page`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img).click();
          await expect(page).toHaveURL(`${baseURL}/inventory-item.html?id=${PRODUCT_INFO[i].id}`);
        });

        test(`Clicking description does nothing`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description).click();
          await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`);
        });

        test(`Clicking price does nothing`, async ({ page, baseURL }) => {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price).click();
          await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`);
        });
      });
    }
  });
});

const getCartContentsFromLocalStorage = async (context: BrowserContext) => {
  const storageState = await context.storageState();
  return storageState.origins![0].localStorage.filter((item) => item.name === 'cart-contents')[0];
};
