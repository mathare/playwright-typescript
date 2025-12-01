import { expect, test } from '@playwright/test';
import { login } from '../helpers/utils';
import { CheckoutOverviewPage, EXPECTED_TEXT } from '../pages/checkoutOverviewPage';
import { URLS } from '../data/pages';

test.describe('Checkout overview page tests', () => {
  let checkoutOverviewPage: CheckoutOverviewPage;

  test.describe('Empty cart', () => {
    test.beforeEach(async ({ page, baseURL }) => {
      checkoutOverviewPage = new CheckoutOverviewPage(page);
      await login(page, baseURL!, 'standard_user');
      await page.goto(URLS.checkoutOverviewPage);
    });

    // Common cart elements can be tested with an empty cart
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
    });
  });
});
