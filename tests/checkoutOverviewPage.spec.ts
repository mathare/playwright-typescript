import { expect, test } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CheckoutOverviewPage, COLORS, EXPECTED_TEXT } from '../pages/checkoutOverviewPage';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';
import { PRODUCT_ELEMENTS } from '../pages/components/cartList';

test.describe('Checkout overview page tests', () => {
  let checkoutOverviewPage: CheckoutOverviewPage;

  test.beforeEach(async ({ page, context, baseURL }) => {
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    await login(context, baseURL!, 'standard_user');
    await page.goto(URLS.checkoutOverviewPage);
  });

  // Common cart elements can be tested without purchasing anything
  test.describe('No items purchased', () => {
    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(checkoutOverviewPage.pageHeader.primaryHeader).toBeVisible();
        await expect(checkoutOverviewPage.subtitle).toBeVisible();
        await expect(checkoutOverviewPage.checkoutSummaryContainer).toBeVisible();
        await expect(checkoutOverviewPage.cartList.cartList).toBeVisible();
        await expect(checkoutOverviewPage.cartList.cartItem).toHaveCount(0);
        await expect(checkoutOverviewPage.summaryInfo).toBeVisible();
        await expect(checkoutOverviewPage.paymentInfoLabel).toBeVisible();
        await expect(checkoutOverviewPage.paymentInfoValue).toBeVisible();
        await expect(checkoutOverviewPage.shippingInfoLabel).toBeVisible();
        await expect(checkoutOverviewPage.shippingInfoValue).toBeVisible();
        await expect(checkoutOverviewPage.priceTotalLabel).toBeVisible();
        await expect(checkoutOverviewPage.subtotalLabel).toBeVisible();
        await expect(checkoutOverviewPage.taxLabel).toBeVisible();
        await expect(checkoutOverviewPage.totalLabel).toBeVisible();
        await expect(checkoutOverviewPage.cartFooter).toBeVisible();
        await expect(checkoutOverviewPage.actionButton).toHaveCount(2);
        await expect(checkoutOverviewPage.cancelButton).toBeVisible();
        await expect(checkoutOverviewPage.finishButton).toBeVisible();
        await expect(checkoutOverviewPage.pageFooter.footer).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(checkoutOverviewPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(checkoutOverviewPage.paymentInfoLabel).toHaveText(EXPECTED_TEXT.paymentInfo.label);
        await expect(checkoutOverviewPage.paymentInfoValue).toHaveText(EXPECTED_TEXT.paymentInfo.value);
        await expect(checkoutOverviewPage.shippingInfoLabel).toHaveText(EXPECTED_TEXT.shippingInfo.label);
        await expect(checkoutOverviewPage.shippingInfoValue).toHaveText(EXPECTED_TEXT.shippingInfo.value);
        await expect(checkoutOverviewPage.priceTotalLabel).toHaveText(EXPECTED_TEXT.priceInfo.label);
        // As the cart is empty the item total and tax are both zero
        await expect(checkoutOverviewPage.subtotalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.subtotalPrefix}0`);
        await expect(checkoutOverviewPage.taxLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.taxPrefix}0.00`);
        await expect(checkoutOverviewPage.totalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.totalPrefix}0.00`);
        for (let i = 0; i < (await checkoutOverviewPage.actionButton.count()); i++) {
          await expect(checkoutOverviewPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
        }
      });

      test('Default element styling', async ({ browserName }) => {
        let element = checkoutOverviewPage.subtitle;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.paymentInfoLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.paymentInfoValue;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.shippingInfoLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.shippingInfoValue;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.priceTotalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.subtotalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.taxLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.totalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '800');

        for (let i = 0; i < (await checkoutOverviewPage.actionButton.count()); i++) {
          element = checkoutOverviewPage.actionButton.nth(i);
          const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
          await expect(element).toContainClass(expectedClass);
          await expect(element).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          const expectedBorderStyle = i === 1 ? (browserName === 'firefox' ? '0px' : '0px none') : '1px solid';
          await expect(element).toHaveCSS('border', `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Cursor is pointer for "Cancel" and "Finish" buttons', async () => {
        await expect(checkoutOverviewPage.cancelButton).toHaveCSS('cursor', 'pointer');
        await expect(checkoutOverviewPage.finishButton).toHaveCSS('cursor', 'pointer');
      });

      test('"Finish" button is enabled even when no items purchased', async () => {
        await expect(checkoutOverviewPage.finishButton).toBeEnabled();
      });

      test.describe('Visual tests', () => {
        test('Default state', async ({ page }) => {
          await expect(page).toHaveScreenshot('noItems.png', { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          await checkoutOverviewPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
        });
      });
    });

    test.describe('Behavioural tests', () => {
      test('"Cancel" button opens inventory page', async ({ page, baseURL }) => {
        await checkoutOverviewPage.cancelButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      test('"Finish" button opens checkout complete page', async ({ page, baseURL }) => {
        await checkoutOverviewPage.finishButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutCompletePage}`);
      });
    });
  });

  test.describe('Items purchased', () => {
    const productIds = PRODUCT_INFO.map((product) => product.id);

    test.describe('Appearance tests', () => {
      test.beforeEach(async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.checkoutOverviewPage);
      });

      test('Item list element visibility', async () => {
        await expect(checkoutOverviewPage.cartList.cartList).toBeVisible();
        await expect(checkoutOverviewPage.cartList.cartItem).toHaveCount(productIds.length);

        // There is no button to remove each product from the cart as we have already purchased it
        for (let i = 0; i < productIds.length; i++) {
          const element = checkoutOverviewPage.cartList.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toHaveCount(0);
        }
      });

      test('Price total info reflects cost of items purchased', async ({ page }) => {
        // Sort products into random order using the Fisher-Yates algorithm
        let products = [...PRODUCT_INFO];
        let j = products.length;
        while (j) {
          const i = Math.floor(Math.random() * j--);
          [products[j], products[i]] = [products[i], products[j]];
        }
        // Slice off first n elements of the array
        const purchasedProducts = products.slice(0, Math.ceil(Math.random() * products.length));
        await setCartContentsInLocalStorage(
          page,
          purchasedProducts.map((prod) => prod.id),
          URLS.checkoutOverviewPage
        );

        const subtotalAmount = purchasedProducts.reduce((n, { price }) => n + Number(price), 0);
        // Tax is charged at 8%
        const taxAmount = (Math.round(subtotalAmount * 100 * 0.08) / 100).toFixed(2);
        const totalAmount = (Math.round((Number(subtotalAmount) + Number(taxAmount)) * 100) / 100).toFixed(2);
        await expect(checkoutOverviewPage.subtotalLabel).toHaveText(
          `${EXPECTED_TEXT.priceInfo.subtotalPrefix}${subtotalAmount}`
        );
        await expect(checkoutOverviewPage.taxLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.taxPrefix}${taxAmount}`);
        await expect(checkoutOverviewPage.totalLabel).toHaveText(
          `${EXPECTED_TEXT.priceInfo.totalPrefix}${totalAmount}`
        );
      });

      test('Order of products purchased does not affect price total', async ({ page }) => {
        const shuffledProductIds = [...productIds].sort(() => Math.random() - 0.5);
        await setCartContentsInLocalStorage(page, shuffledProductIds, URLS.checkoutOverviewPage);

        await expect(checkoutOverviewPage.subtotalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.subtotalPrefix}129.94`);
        await expect(checkoutOverviewPage.taxLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.taxPrefix}10.40`);
        await expect(checkoutOverviewPage.totalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.totalPrefix}140.34`);
      });

      test.describe('Visual tests', () => {
        test('Single product purchased', async ({ page }) => {
          await setCartContentsInLocalStorage(page, [0], URLS.checkoutOverviewPage);
          await expect(checkoutOverviewPage.checkoutSummaryContainer).toHaveScreenshot('singleProductPurchased.png');
        });

        test('All products purchased', async () => {
          await expect(checkoutOverviewPage.checkoutSummaryContainer).toHaveScreenshot('allProductsPurchased.png');
        });
      });
    });
  });
});
