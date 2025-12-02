import { expect, test } from '@playwright/test';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';

test.describe('Checkout complete page tests', () => {
  let checkoutCompletePage: CheckoutCompletePage;

  // The checkout complete page doesn't change whether we purchased items or not so
  // we can proceed with an empty order and navigate directly to the page under test
  test.beforeEach(async ({ page, baseURL }) => {
    checkoutCompletePage = new CheckoutCompletePage(page);
    await login(page, baseURL!, 'standard_user');
    await page.goto(URLS.checkoutCompletePage);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(checkoutCompletePage.pageHeader.primaryHeader).toBeVisible();
      await expect(checkoutCompletePage.subtitle).toBeVisible();
      await expect(checkoutCompletePage.checkoutCompleteContainer).toBeVisible();
      await expect(checkoutCompletePage.checkoutCompleteImg).toBeVisible();
      await expect(checkoutCompletePage.checkoutCompleteHeader).toBeVisible();
      await expect(checkoutCompletePage.checkoutCompleteText).toBeVisible();
      await expect(checkoutCompletePage.backButton).toBeVisible();
      await expect(checkoutCompletePage.pageFooter.footer).toBeVisible();
    });
  });
});
