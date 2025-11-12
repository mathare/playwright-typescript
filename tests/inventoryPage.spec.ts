import { test, expect } from '@playwright/test';
import {
  COLORS,
  EXPECTED_TEXT,
  InventoryPage,
  PRODUCT_ELEMENTS,
  PRODUCT_INFO,
  SOCIAL_LINKS,
} from '../pages/inventoryPage';
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
      await expect(inventoryPage.headerContainer).toBeVisible();
      await expect(inventoryPage.menuButton).toBeVisible();
      await expect(inventoryPage.menu).not.toBeVisible();
      await expect(inventoryPage.title).toBeVisible();
      await expect(inventoryPage.shoppingCartLink).toBeVisible();
      await expect(inventoryPage.shoppingCartBadge).toHaveCount(0);
      await expect(inventoryPage.secondaryHeader).toBeVisible();
      await expect(inventoryPage.subtitle).toBeVisible();
      await expect(inventoryPage.activeSortOption).toBeVisible();
      await expect(inventoryPage.sortSelect).toBeVisible();
      await expect(inventoryPage.inventoryContainer).toBeVisible();
      await expect(inventoryPage.inventoryItem).toHaveCount(PRODUCT_INFO.length);
      await expect(inventoryPage.footer).toBeVisible();
      await expect(inventoryPage.socialMediaItem).toHaveCount(EXPECTED_TEXT.SOCIAL_MEDIA.length);
      await expect(inventoryPage.footerCopy).toBeVisible();
    });

    test('Element visibility with menu open', async () => {
      await inventoryPage.menuButton.click();
      await expect(inventoryPage.menu).toBeVisible();
      await expect(inventoryPage.menuItem).toHaveCount(EXPECTED_TEXT.MENU_ITEMS.length);
      await expect(inventoryPage.menuCloseButton).toBeVisible();

      // The menu obscures certain page elements but they still count as visible based on the Playwright definition
      // Therefore, rather than asserting on the state of the covered elements it is easier to test visually (below)
    });

    // Verifying the details of each displayed product is done via a separate test
    test('Text content of elements', async () => {
      await expect(inventoryPage.title).toHaveText(EXPECTED_TEXT.TITLE);
      await expect(inventoryPage.subtitle).toHaveText(EXPECTED_TEXT.SUBTITLE);
      await expect(inventoryPage.activeSortOption).toHaveText(EXPECTED_TEXT.SORT_OPTIONS[0]);
      await expect(inventoryPage.sortSelect).toHaveText(EXPECTED_TEXT.SORT_OPTIONS.join(''));
      for (let i = 0; i < EXPECTED_TEXT.SOCIAL_MEDIA.length; i++) {
        await expect(inventoryPage.socialMediaItem.nth(i)).toHaveText(EXPECTED_TEXT.SOCIAL_MEDIA[i]);
      }
      await expect(inventoryPage.footerCopy).toHaveText(EXPECTED_TEXT.FOOTER);

      await inventoryPage.menuButton.click();
      for (let i = 0; i < EXPECTED_TEXT.MENU_ITEMS.length; i++) {
        await expect(inventoryPage.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.MENU_ITEMS[i]);
      }
    });

    test('Element styling', async () => {
      await expect(inventoryPage.body).toHaveCSS('background-color', COLORS.BACKGROUND_COLOR);
      await expect(inventoryPage.body).toHaveCSS('color', COLORS.TEXT_COLOR);
      await expect(inventoryPage.body).toHaveCSS('font-size', '14px');
      // Menu button is in the top-left
      await expect(inventoryPage.menuButton).toHaveCSS('position', 'absolute');
      await expect(inventoryPage.menuButton).toHaveCSS('left', '0px');
      await expect(inventoryPage.menuButton).toHaveCSS('top', '0px');
      await expect(inventoryPage.title).toHaveCSS('font-size', '24px');
      // Shopping cart link is in the top-right (within a container)
      await expect(inventoryPage.shoppingCartContainer).toHaveCSS('position', 'absolute');
      await expect(inventoryPage.shoppingCartContainer).toHaveCSS('right', '20px');
      await expect(inventoryPage.shoppingCartContainer).toHaveCSS('top', '10px');
      await expect(inventoryPage.shoppingCartContainer).toHaveCSS('width', '40px');
      await expect(inventoryPage.shoppingCartContainer).toHaveCSS('height', '40px');
      await expect(inventoryPage.subtitle).toHaveCSS('font-size', '18px');
      await expect(inventoryPage.subtitle).toHaveCSS('font-weight', '500');
      await expect(inventoryPage.activeSortOption).toHaveCSS('text-align', 'center');

      await expect(inventoryPage.footer).toHaveCSS('background-color', COLORS.FOOTER_BACKGROUND_COLOR);
      const numSocialMediaItems = await inventoryPage.socialMediaItem.count();
      const regex = '^url\\("data:image\\/png;base64,[A-Za-z0-9+\\/=\\"\\)]*$';
      for (let i = 0; i < numSocialMediaItems; i++) {
        // Social media items each have a different base64-encoded background image so verify against a regex
        await expect(inventoryPage.socialMediaItem.nth(i)).toHaveCSS('background-image', new RegExp(regex));
        await expect(inventoryPage.socialMediaLink.nth(i)).toHaveCSS('color', COLORS.SOCIAL_LINK_TEXT_COLOR);
        await expect(inventoryPage.socialMediaLink.nth(i)).toHaveCSS('font-size', '0px');
      }
      await expect(inventoryPage.footerCopy).toHaveCSS('color', COLORS.FOOTER_TEXT_COLOR);
    });

    test.describe('Visual tests', () => {
      test('Default state', async ({ page }) => {
        await expect(page).toHaveScreenshot('default.png', { fullPage: true });
      });

      test('Menu open', async ({ page }) => {
        await inventoryPage.menuButton.click();
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
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS(
          'border',
          `1px solid ${COLORS.PRODUCT_BORDER_COLOR}`
        );
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS('border-radius', '8px');
        await expect(inventoryPage.inventoryItem.nth(i)).toHaveCSS('display', 'flex');
        await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveCSS(
          'color',
          COLORS.PRODUCT_TITLE_COLOR
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
              EXPECTED_TEXT.ADD_TO_CART_BUTTON
            );
          }
        });
      });
    });

    test.describe('Add products to cart & remove', () => {
      test('Add product to cart', async () => {
        const PRODUCT_INDEX = Math.floor(Math.random() * NUM_PRODUCTS);
        await inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button).click();

        // Verify cart
        await expect(inventoryPage.shoppingCartBadge).toBeVisible();
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

        // Verify button on relevant product has changed correctly
        await expect(inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button)).toHaveText(
          EXPECTED_TEXT.REMOVE_BUTTON
        );
        await expect(inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button)).not.toContainClass(
          'btn_primary'
        );
        await expect(inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button)).toContainClass(
          'btn_secondary'
        );
        await expect(inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button)).toHaveCSS(
          'border',
          `1px solid ${COLORS.REMOVE_BUTTON_COLOR}`
        );
        await expect(inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.button)).toHaveCSS(
          'color',
          COLORS.REMOVE_BUTTON_COLOR
        );

        // Verify other products unchanged
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          if (i !== PRODUCT_INDEX) {
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
              EXPECTED_TEXT.ADD_TO_CART_BUTTON
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toContainClass('btn_primary');
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).not.toContainClass(
              'btn_secondary'
            );
          }
        }
      });

      test('Add multiple products to cart', async () => {
        for (let i = 0; i < NUM_PRODUCTS; i++) {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
          await expect(inventoryPage.shoppingCartBadge).toHaveText(`${i + 1}`);
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
            EXPECTED_TEXT.REMOVE_BUTTON
          );
        }
      });

      test('Remove only product from cart', async () => {
        await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

        await inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
        await expect(inventoryPage.shoppingCartBadge).toHaveCount(0);
        await expect(inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button)).toHaveText(
          EXPECTED_TEXT.ADD_TO_CART_BUTTON
        );
        await expect(inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button)).toContainClass('btn_primary');
        await expect(inventoryPage.getProductElement(0, PRODUCT_ELEMENTS.button)).not.toContainClass('btn_secondary');
      });

      test('Remove multiple products from cart', async () => {
        await inventoryPage.addAllProductsToCart();
        await expect(inventoryPage.shoppingCartBadge).toHaveText(`${NUM_PRODUCTS}`);

        for (let i = 0; i < NUM_PRODUCTS; i++) {
          await inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button).click();
          if (i === NUM_PRODUCTS - 1) {
            await expect(inventoryPage.shoppingCartBadge).toHaveCount(0);
          } else {
            await expect(inventoryPage.shoppingCartBadge).toHaveText(`${NUM_PRODUCTS - (i + 1)}`);
          }
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
            EXPECTED_TEXT.ADD_TO_CART_BUTTON
          );
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

  test('Shopping cart link opens cart page', async ({ page, baseURL }) => {
    // The shopping cart link doesn't actually have an href attribute but still opens the cart page
    await expect(inventoryPage.shoppingCartLink).not.toHaveAttribute('href');
    await inventoryPage.shoppingCartLink.click();
    await expect(page).toHaveURL(`${baseURL}/cart.html`);
  });

  test('Social media links open relevant page in new tab', async () => {
    for (let i = 0; i < SOCIAL_LINKS.length; i++) {
      await expect(inventoryPage.socialMediaLink.nth(i)).toHaveAttribute('href', SOCIAL_LINKS[i]);
      await expect(inventoryPage.socialMediaLink.nth(i)).toHaveAttribute('target', '_blank');
      await expect(inventoryPage.socialMediaLink.nth(i)).toHaveAttribute('rel', 'noreferrer');
    }
  });
});
