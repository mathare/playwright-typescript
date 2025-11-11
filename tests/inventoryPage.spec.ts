import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, InventoryPage, PRODUCT_ELEMENTS, PRODUCT_INFO } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Inventory page tests', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.login('standard_user');
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
    });
  });

  test.describe('Product tests', () => {
    test('Product styling', async () => {
      const numProducts = await inventoryPage.inventoryItem.count();
      for (let i = 0; i < numProducts; i++) {
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
          sortOption: 'default',
        },
        {
          description: 'Sort by name (Z-A)',
          products: [...PRODUCT_INFO].sort((a, b) => (b.title > a.title ? 1 : a.title > b.title ? -1 : 0)),
          sortOption: 'za',
        },
        {
          description: 'Sort by price (low-high)',
          products: [...PRODUCT_INFO].sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)),
          sortOption: 'lohi',
        },
        {
          description: 'Sort by price (high-low)',
          products: [...PRODUCT_INFO].sort((a, b) => (b.price > a.price ? 1 : a.price > b.price ? -1 : 0)),
          sortOption: 'hilo',
        },
      ].forEach((testCase) => {
        test(testCase.description, async () => {
          if (testCase.sortOption !== 'default') {
            await inventoryPage.sortSelect.selectOption(testCase.sortOption);
          }

          const PRODUCTS = testCase.products;
          for (let i = 0; i < PRODUCTS.length; i++) {
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img)).toHaveAttribute(
              'src',
              PRODUCTS[i].imgSrc
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.img)).toHaveAttribute(
              'alt',
              PRODUCTS[i].title
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(PRODUCTS[i].title);
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
              PRODUCTS[i].description
            );
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
              `\$${PRODUCTS[i].price}`
            );

            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toBeVisible();
            await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
              EXPECTED_TEXT.ADD_TO_CART_BUTTON
            );
          }
        });
      });
    });

    test('Add product to cart', async () => {
      const PRODUCT_INDEX = Math.floor(Math.random() * PRODUCT_INFO.length);
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
      for (let i = 0; i < PRODUCT_INFO.length; i++) {
        if (i !== PRODUCT_INDEX) {
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(
            EXPECTED_TEXT.ADD_TO_CART_BUTTON
          );
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toContainClass('btn_primary');
          await expect(inventoryPage.getProductElement(i, PRODUCT_ELEMENTS.button)).not.toContainClass('btn_secondary');
        }
      }
    });
  });
});
