import { test, expect } from '@playwright/test';
import { CheckoutInfoPage, EXPECTED_TEXT } from '../pages/checkoutInfoPage';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';

test.describe('Checkout info page tests', () => {
  let checkoutInfoPage: CheckoutInfoPage;

  // The checkout info page doesn't change whether the cart contains items or not so
  // we can proceed with an empty cart and navigate directly to the page under test
  test.beforeEach(async ({ page, baseURL }) => {
    checkoutInfoPage = new CheckoutInfoPage(page);
    await login(page, baseURL!, 'standard_user');
    await page.goto(URLS.checkoutInfoPage);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(checkoutInfoPage.pageHeader.primaryHeader).toBeVisible();
      await expect(checkoutInfoPage.subtitle).toBeVisible();
      await expect(checkoutInfoPage.checkoutInfoContainer).toBeVisible();
      await expect(checkoutInfoPage.checkoutInfoForm).toBeVisible();
      await expect(checkoutInfoPage.firstNameInput).toBeVisible();
      await expect(checkoutInfoPage.lastNameInput).toBeVisible();
      await expect(checkoutInfoPage.postalCodeInput).toBeVisible();
      await expect(checkoutInfoPage.errorMessageContainer).toBeVisible();
      await expect(checkoutInfoPage.checkoutButtonsContainer).toBeVisible();
      await expect(checkoutInfoPage.actionButton).toHaveCount(2);
      await expect(checkoutInfoPage.pageFooter.footer).toBeVisible();
    });

    test('Text content of elements', async () => {
      await expect(checkoutInfoPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
      await expect(checkoutInfoPage.firstNameInput).toBeEmpty();
      await expect(checkoutInfoPage.firstNameInput).toHaveAttribute(
        'placeholder',
        EXPECTED_TEXT.placeholders.firstName
      );
      await expect(checkoutInfoPage.lastNameInput).toBeEmpty();
      await expect(checkoutInfoPage.lastNameInput).toHaveAttribute('placeholder', EXPECTED_TEXT.placeholders.lastName);
      await expect(checkoutInfoPage.postalCodeInput).toBeEmpty();
      await expect(checkoutInfoPage.postalCodeInput).toHaveAttribute(
        'placeholder',
        EXPECTED_TEXT.placeholders.postalCode
      );
      await expect(checkoutInfoPage.errorMessageContainer).toBeEmpty();
      for (let i = 0; i < (await checkoutInfoPage.actionButton.count()); i++) {
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
      }
    });
  });
});
