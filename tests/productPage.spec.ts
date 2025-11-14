import test, { expect } from '@playwright/test';
import { ProductPage } from '../pages/productPage';
import { LoginPage } from '../pages/loginPage';
import { COLORS, EXPECTED_TEXT, InventoryPage, PRODUCT_INFO, SOCIAL_LINKS } from '../pages/inventoryPage';

test.describe('Product page tests', () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.login('standard_user');
  });

  test.describe('Common page elements', async () => {
    // Some elements of the product page are common to all products e.g header, menu, footer
    // so there is no need to test these on every product page. We can test them on a single
    // product page and reasonably assume they will appear and behave the same on other product
    // pages

    test.beforeEach(async ({ page }) => {
      // Open bike light product page
      await page.goto(`${productPage.url}0`);
    });

    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(productPage.headerContainer).toBeVisible();
        await expect(productPage.menuButton).toBeVisible();
        await expect(productPage.menu).not.toBeVisible();
        await expect(productPage.title).toBeVisible();
        await expect(productPage.shoppingCartLink).toBeVisible();
        await expect(productPage.shoppingCartBadge).toHaveCount(0);
        await expect(productPage.secondaryHeader).toBeVisible();
        await expect(productPage.backButton).toBeVisible();
        await expect(productPage.inventoryItem).toBeVisible();
        await expect(productPage.footer).toBeVisible();
        await expect(productPage.socialMediaItem).toHaveCount(EXPECTED_TEXT.socialMedia.length);
        await expect(productPage.footerCopy).toBeVisible();
      });

      test('Element visibility with menu open', async () => {
        await productPage.menuButton.click();
        await expect(productPage.menu).toBeVisible();
        await expect(productPage.menuItem).toHaveCount(EXPECTED_TEXT.menuItems.length);
        await expect(productPage.menuCloseButton).toBeVisible();

        // The menu obscures certain page elements but they still count as visible based on the Playwright definition
        // Therefore, rather than asserting on the state of the covered elements it is easier to test visually (below)
      });

      test('Text content of elements', async () => {
        await expect(productPage.title).toHaveText(EXPECTED_TEXT.title);
        await expect(productPage.backButton).toHaveText('Back to products');

        for (let i = 0; i < EXPECTED_TEXT.socialMedia.length; i++) {
          await expect(productPage.socialMediaItem.nth(i)).toHaveText(EXPECTED_TEXT.socialMedia[i]);
        }
        await expect(productPage.footerCopy).toHaveText(EXPECTED_TEXT.footer);

        await productPage.menuButton.click();
        for (let i = 0; i < EXPECTED_TEXT.menuItems.length; i++) {
          await expect(productPage.menuItem.nth(i)).toHaveText(EXPECTED_TEXT.menuItems[i]);
        }
      });

      test('Element styling', async () => {
        await expect(productPage.body).toHaveCSS('background-color', COLORS.backgroundColor);
        await expect(productPage.body).toHaveCSS('color', COLORS.textColor);
        await expect(productPage.body).toHaveCSS('font-size', '14px');
        // Menu button is in the top-left
        await expect(productPage.menuButton).toHaveCSS('position', 'absolute');
        await expect(productPage.menuButton).toHaveCSS('left', '0px');
        await expect(productPage.menuButton).toHaveCSS('top', '0px');
        await expect(productPage.title).toHaveCSS('font-size', '24px');
        // Shopping cart link is in the top-right (within a container)
        await expect(productPage.shoppingCartContainer).toHaveCSS('position', 'absolute');
        await expect(productPage.shoppingCartContainer).toHaveCSS('right', '20px');
        await expect(productPage.shoppingCartContainer).toHaveCSS('top', '10px');
        await expect(productPage.shoppingCartContainer).toHaveCSS('width', '40px');
        await expect(productPage.shoppingCartContainer).toHaveCSS('height', '40px');
        await expect(productPage.backButton).toHaveCSS('font-size', '16px');
        await expect(productPage.backButton).toHaveCSS('font-weight', '500');

        await expect(productPage.inventoryItemContainer).toHaveCSS('background-color', COLORS.backgroundColor);
        await expect(productPage.inventoryItem).toHaveCSS('border', `1px solid ${COLORS.productBorderColor}`);
        await expect(productPage.inventoryItem).toHaveCSS('border-radius', '8px');
        await expect(productPage.inventoryItem).toHaveCSS('color', COLORS.textColor);
        await expect(productPage.inventoryItem).toHaveCSS('display', 'flex');
        await expect(productPage.productName).toHaveCSS('font-size', '20px');
        await expect(productPage.productName).toHaveCSS('font-weight', '500');
        await expect(productPage.productDescription).toHaveCSS('font-size', '14px');
        await expect(productPage.productPrice).toHaveCSS('font-size', '20px');
        await expect(productPage.productPrice).toHaveCSS('font-weight', '500');
        await expect(productPage.cartButton).toHaveCSS('border', `1px solid ${COLORS.textColor}`);
        await expect(productPage.cartButton).toHaveCSS('border-radius', '4px');
        await expect(productPage.cartButton).toHaveCSS('font-size', '16px');
        await expect(productPage.cartButton).toHaveCSS('font-weight', '500');
        await expect(productPage.cartButton).toHaveCSS('width', '160px');

        await expect(productPage.footer).toHaveCSS('background-color', COLORS.footerBackgroundColor);
        const numSocialMediaItems = await productPage.socialMediaItem.count();
        const regex = '^url\\("data:image\\/png;base64,[A-Za-z0-9+\\/=\\"\\)]*$';
        for (let i = 0; i < numSocialMediaItems; i++) {
          // Social media items each have a different base64-encoded background image so verify against a regex
          await expect(productPage.socialMediaItem.nth(i)).toHaveCSS('background-image', new RegExp(regex));
          await expect(productPage.socialMediaLink.nth(i)).toHaveCSS('color', COLORS.socialLinkTextColor);
          await expect(productPage.socialMediaLink.nth(i)).toHaveCSS('font-size', '0px');
        }
        await expect(productPage.footerCopy).toHaveCSS('color', COLORS.footerTextColor);
      });

      test('Add product to cart', async () => {
        await productPage.cartButton.click();

        // Verify cart appearance in header
        await expect(productPage.shoppingCartBadge).toBeVisible();
        await expect(productPage.shoppingCartBadge).toHaveText('1');

        // Verify button has updated correctly
        await productPage.verifyCartButtonStyle('remove');
      });

      test('Remove product from cart', async () => {
        await productPage.cartButton.click();
        await expect(productPage.shoppingCartBadge).toHaveText('1');
        await productPage.cartButton.click();

        // Verify cart appearance in header
        await expect(productPage.shoppingCartBadge).toHaveCount(0);

        // Verify button has updated correctly
        await productPage.verifyCartButtonStyle('add');
      });

      test.describe('Visual tests', () => {
        test('Default state', async ({ page }) => {
          await expect(page).toHaveScreenshot('default.png', { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          await productPage.menuButton.click();
          await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
        });

        test('Product added to cart', async ({ page }) => {
          await productPage.cartButton.click();
          await expect(page).toHaveScreenshot('productsInCart.png', { fullPage: true });
        });
      });
    });

    test('Shopping cart link opens cart page', async ({ page, baseURL }) => {
      // The shopping cart link doesn't actually have an href attribute but still opens the cart page
      await expect(productPage.shoppingCartLink).not.toHaveAttribute('href');
      await productPage.shoppingCartLink.click();
      await expect(page).toHaveURL(`${baseURL}/cart.html`);
    });

    test('Back to products button opens inventory page', async ({ page, baseURL }) => {
      await productPage.backButton.click();
      const inventoryPage = new InventoryPage(page);
      await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`);
    });

    test('Social media links open relevant page in new tab', async () => {
      for (let i = 0; i < SOCIAL_LINKS.length; i++) {
        await expect(productPage.socialMediaLink.nth(i)).toHaveAttribute('href', SOCIAL_LINKS[i]);
        await expect(productPage.socialMediaLink.nth(i)).toHaveAttribute('target', '_blank');
        await expect(productPage.socialMediaLink.nth(i)).toHaveAttribute('rel', 'noreferrer');
      }
    });
  });

  PRODUCT_INFO.forEach((product) => {
    test.describe(`${product.shortName} page tests`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`${productPage.url}${product.id}`);
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

        test.describe('Visual tests', () => {
          test('Product details', async () => {
            await expect(productPage.inventoryItem).toHaveScreenshot(generateProductSnapshotName(product.shortName));
          });
        });
      });
    });
  });
});

const generateProductSnapshotName = (name: string): string => {
  // Sanitise product name for use as snapshot name
  // Remove spaces & dashes then convert first letter to lowercase
  return name.charAt(0).toLowerCase() + name.slice(1).replace(' ', '').replace('-', '') + '.png';
};
