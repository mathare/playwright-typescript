import { expect, test } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CheckoutOverviewPage, COLORS, EXPECTED_TEXT, PRODUCT_ELEMENTS } from '../pages/checkoutOverviewPage';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';

test.describe('Checkout overview page tests', () => {
  let checkoutOverviewPage: CheckoutOverviewPage;

  test.beforeEach(async ({ page, baseURL }) => {
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('No items purchased', () => {
    test.beforeEach(async ({ page, baseURL }) => {
      await page.goto(URLS.checkoutOverviewPage);
    });

    // Common cart elements can be tested without purchasing anything
    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(checkoutOverviewPage.pageHeader.primaryHeader).toBeVisible();
        await expect(checkoutOverviewPage.subtitle).toBeVisible();
        await expect(checkoutOverviewPage.checkoutSummaryContainer).toBeVisible();
        await expect(checkoutOverviewPage.cartList).toBeVisible();
        await expect(checkoutOverviewPage.qtyHeader).toBeVisible();
        await expect(checkoutOverviewPage.descHeader).toBeVisible();
        await expect(checkoutOverviewPage.cartItem).toHaveCount(0);
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
        await expect(checkoutOverviewPage.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(checkoutOverviewPage.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
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

        element = checkoutOverviewPage.cartList;
        await expect(element).toHaveCSS('display', 'block');

        const headers = [checkoutOverviewPage.qtyHeader, checkoutOverviewPage.descHeader];
        for (let i = 0; i < headers.length; i++) {
          element = headers[i];
          await expect(element).toHaveCSS('color', COLORS.itemList.headerColor);
          await expect(element).toHaveCSS('display', 'inline-block');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }

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
        await expect(checkoutOverviewPage.cartList).toBeVisible();
        await expect(checkoutOverviewPage.qtyHeader).toBeVisible();
        await expect(checkoutOverviewPage.descHeader).toBeVisible();
        await expect(checkoutOverviewPage.cartItem).toHaveCount(productIds.length);

        // Verify each item purchased displays all expected elements
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = checkoutOverviewPage.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            // There is no button to remove the product from the cart as we have already purchased it
            if (productElements[j] === 'button') {
              await expect(productElement).toHaveCount(0);
            } else {
              await expect(productElement).toBeVisible();
            }
          }
        }
      });

      test('Text content of items purchased', async () => {
        for (let i = 0; i < productIds.length; i++) {
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(
            PRODUCT_INFO[i].title
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i].description
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
            `\$${PRODUCT_INFO[i].price}`
          );
        }
      });
    });
  });
});
