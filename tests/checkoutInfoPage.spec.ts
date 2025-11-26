import { test, expect } from '@playwright/test';
import { CheckoutInfoPage, COLORS, EXPECTED_TEXT } from '../pages/checkoutInfoPage';
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
      await expect(checkoutInfoPage.errorMessage).toHaveCount(0);
      await expect(checkoutInfoPage.errorCloseButton).toHaveCount(0);
      await expect(checkoutInfoPage.checkoutButtonsContainer).toBeVisible();
      await expect(checkoutInfoPage.actionButton).toHaveCount(2);
      await expect(checkoutInfoPage.cancelButton).toBeVisible();
      await expect(checkoutInfoPage.continueButton).toBeVisible();
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
        await expect(element).toHaveCSS('border-bottom', `1px solid ${COLORS.input.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '0px');
        await expect(element).toHaveCSS('color', COLORS.input.textColor);
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

    test('Form inputs validation attributes', async () => {
      for (let i = 0; i < (await checkoutInfoPage.formInput.count()); i++) {
        const element = checkoutInfoPage.formInput.nth(i);
        await expect(element).toHaveAttribute('type', 'text');
        await expect(element).toHaveAttribute('autocorrect', 'off');
        await expect(element).toHaveAttribute('autocapitalize', 'none');
      }
    });

    test('Cursor is text for form inputs', async ({ browserName }) => {
      test.skip(browserName === 'webkit');
      for (let i = 0; i < (await checkoutInfoPage.formInput.count()); i++) {
        const element = checkoutInfoPage.formInput.nth(i);
        await expect(element).toHaveCSS('cursor', 'text');
      }
    });

    test('Cursor is pointer for "Cancel" and "Continue" buttons', async () => {
      for (let i = 0; i < (await checkoutInfoPage.actionButton.count()); i++) {
        await expect(checkoutInfoPage.actionButton.nth(i)).toHaveCSS('cursor', 'pointer');
      }
    });

    test('"Continue" button is enabled even when form inputs are empty', async () => {
      await expect(checkoutInfoPage.continueButton).toBeEnabled();
    });

    test.describe('Visual tests', () => {
      test('Default state', async ({ page }) => {
        await expect(page).toHaveScreenshot('default.png', { fullPage: true });
      });

      test('Menu open', async ({ page }) => {
        await checkoutInfoPage.pageHeader.menuButton.click();
        await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
      });

      test('Error state', async () => {
        await checkoutInfoPage.continueButton.click();
        await expect(checkoutInfoPage.checkoutInfoContainer).toHaveScreenshot('error.png');
      });
    });
  });

  test.describe('Behavioural tests', () => {
    const FIRST_NAME = 'John';
    const LAST_NAME = 'Smith';
    const POSTAL_CODE = 'AB12 3CD';

    test.describe('Form validation errors', () => {
      test('Missing first name error shown on submitting blank form', async ({ page, baseURL }) => {
        await checkoutInfoPage.continueButton.click();

        await checkoutInfoPage.inputHasValidationError('firstName');
        await checkoutInfoPage.inputHasValidationError('lastName');
        await checkoutInfoPage.inputHasValidationError('postalCode');
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
      });

      test('All inputs show validation error if form is invalid', async () => {
        const INPUTS = [
          { element: checkoutInfoPage.firstNameInput, value: FIRST_NAME },
          { element: checkoutInfoPage.lastNameInput, value: LAST_NAME },
          { element: checkoutInfoPage.postalCodeInput, value: POSTAL_CODE },
        ];
        for (let i = 0; i < INPUTS.length; i++) {
          await INPUTS[i].element.fill(INPUTS[i].value);
          await checkoutInfoPage.continueButton.click();

          // All inputs show a validation error even if the value is valid
          await checkoutInfoPage.inputHasValidationError('firstName');
          await checkoutInfoPage.inputHasValidationError('lastName');
          await checkoutInfoPage.inputHasValidationError('postalCode');

          await checkoutInfoPage.resetCheckoutInfoForm();
        }
      });

      // We've effectively already tested this when submitting the blank form
      // but this is a more explicit test of the form validation behaviour
      test('Only first validation error shown on submitting partially complete form', async ({ page, baseURL }) => {
        // Last name only
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
        await checkoutInfoPage.resetCheckoutInfoForm();

        // Postal code only
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
        await checkoutInfoPage.resetCheckoutInfoForm();

        // First name only
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingLastName);
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
        await checkoutInfoPage.resetCheckoutInfoForm();
      });

      test('Missing first name error displayed if form submitted with other fields complete', async () => {
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
      });

      test('Missing last name error displayed if form submitted with other fields complete', async () => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingLastName);
      });

      test('Missing postal code error displayed if form submitted with other fields complete', async () => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingPostalCode);
      });

      test('Form validation errors cleared on closing error message', async () => {
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
        await checkoutInfoPage.errorCloseButton.click();

        await checkoutInfoPage.inputDoesNotHaveValidationError('firstName');
        await checkoutInfoPage.inputDoesNotHaveValidationError('lastName');
        await checkoutInfoPage.inputDoesNotHaveValidationError('postalCode');
        // The error message container is still present and visible but is white and empty
        await expect(checkoutInfoPage.errorMessageContainer).toBeVisible();
        await expect(checkoutInfoPage.errorMessageContainer).toBeEmpty();
        await expect(checkoutInfoPage.errorMessageContainer).not.toContainClass('error');
        await expect(checkoutInfoPage.errorMessageContainer).toHaveCSS('background-color', COLORS.backgroundColor);
        await expect(checkoutInfoPage.errorMessage).toHaveCount(0);
        await expect(checkoutInfoPage.errorCloseButton).toHaveCount(0);
      });

      test('Form validation errors remain if form made valid but not submitted', async () => {
        await checkoutInfoPage.continueButton.click();
        await checkoutInfoPage.inputHasValidationError('firstName');
        await checkoutInfoPage.inputHasValidationError('lastName');
        await checkoutInfoPage.inputHasValidationError('postalCode');
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);

        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.inputHasValidationError('firstName');
        await checkoutInfoPage.inputHasValidationError('lastName');
        await checkoutInfoPage.inputHasValidationError('postalCode');
        await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
      });
    });

    test('"Cancel" button opens cart page', async ({ page, baseURL }) => {
      await checkoutInfoPage.cancelButton.click();
      await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
    });

    test('"Continue" button opens checkout overview page', async ({ page, baseURL }) => {
      await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
      await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
      await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
      await checkoutInfoPage.continueButton.click();
      await expect(page).toHaveURL(`${baseURL}${URLS.checkoutOverviewPage}`);
    });

    // This is not the behaviour I expected - I assumed the behaviour would be the same as clicking
    // the "Continue" button especially since that is the primary button but for some reason it
    // doesn't work that way. That may be intentional, I don't know as there is no documentation for
    // the 3rd-party application under test
    test('Submitting form by pressing enter key opens cart page', async ({ page, baseURL }) => {
      await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
      await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
      await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
      await checkoutInfoPage.postalCodeInput.press('Enter');
      await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
    });
  });
});
