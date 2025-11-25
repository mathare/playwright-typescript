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

    test('Default element styling', async ({ browserName }) => {
      await expect(checkoutInfoPage.subtitle).toHaveCSS('color', COLORS.subtitleColor);
      await expect(checkoutInfoPage.subtitle).toHaveCSS('font-size', '18px');
      await expect(checkoutInfoPage.subtitle).toHaveCSS('font-weight', '500');

      await expect(checkoutInfoPage.checkoutInfoForm).toHaveCSS('border', `1px solid ${COLORS.borderColor}`);
      await expect(checkoutInfoPage.checkoutInfoForm).toHaveCSS('border-radius', '8px');
      await expect(checkoutInfoPage.checkoutInfoForm).toHaveCSS('padding', '40px 40px 0px');

      for (let i = 0; i < (await checkoutInfoPage.formInput.count()); i++) {
        const element = checkoutInfoPage.formInput.nth(i);
        await expect(element).not.toContainClass('error');
        await expect(element).toHaveCSS('border', '');
        await expect(element).toHaveCSS('border-bottom', `1px solid ${COLORS.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '0px');
        await expect(element).toHaveCSS('color', COLORS.inputTextColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('padding', '10px 0px');
      }

      await expect(checkoutInfoPage.errorMessageContainer).not.toContainClass('error');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('background-color', COLORS.backgroundColor);
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('display', 'flex');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('justify-content', 'center');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('margin-bottom', '5px');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('margin-top', '-10px');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('padding-left', '10px');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('padding-right', '10px');
      await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('position', 'relative');

      await expect(checkoutInfoPage.checkoutButtonsContainer).toHaveCSS(
        'border-top',
        `1px solid ${COLORS.borderColor}`
      );
      await expect(checkoutInfoPage.checkoutButtonsContainer).toHaveCSS('display', 'flex');

      for (let i = 0; i < (await checkoutInfoPage.actionButton.count()); i++) {
        const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
        await expect(checkoutInfoPage.actionButton.nth(i)).toContainClass(expectedClass);
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS(
          'background-color',
          COLORS.buttons[i].backgroundColor
        );
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS('color', COLORS.buttons[i].textColor);
        const expectedBorderStyle = i === 1 ? (browserName === 'firefox' ? '0px' : '0px none') : '1px solid';
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS(
          'border',
          `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`
        );
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS('border-radius', '4px');
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS('font-size', '16px');
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS('font-weight', '500');
      }
    });
  });
});
