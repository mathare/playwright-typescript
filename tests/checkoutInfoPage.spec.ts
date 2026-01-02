import { test, expect, Locator } from '@playwright/test';
import { CheckoutInfoPage, COLORS, EXPECTED_TEXT } from '../pages/checkoutInfoPage';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';
import { USERS } from '../data/users';

let checkoutInfoPage: CheckoutInfoPage;

// The checkout info page doesn't change whether the cart contains items or not so
// we can proceed with an empty cart and navigate directly to the page under test
test.beforeEach(async ({ page }) => {
  checkoutInfoPage = new CheckoutInfoPage(page);
});

test.describe('Appearance tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
      });

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
        await expect(checkoutInfoPage.lastNameInput).toHaveAttribute(
          'placeholder',
          EXPECTED_TEXT.placeholders.lastName
        );
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
        let element = checkoutInfoPage.subtitle;
        await expect(element).toHaveCSS('color', COLORS.subtitleColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutInfoPage.checkoutInfoForm;
        await expect(element).toHaveCSS('border', `1px solid ${COLORS.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '8px');
        await expect(element).toHaveCSS('padding', '40px 40px 0px');

        for (let i = 0; i < (await checkoutInfoPage.formInput.count()); i++) {
          element = checkoutInfoPage.formInput.nth(i);
          await expect(element).not.toContainClass('error');
          await expect(element).toHaveCSS('border', '');
          await expect(element).toHaveCSS('border-bottom', `1px solid ${COLORS.input.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '0px');
          await expect(element).toHaveCSS('color', COLORS.input.textColor);
          await expect(element).toHaveCSS('font-size', '14px');
          await expect(element).toHaveCSS('padding', '10px 0px');
        }

        element = checkoutInfoPage.errorMessageContainer;
        await expect(element).not.toContainClass('error');
        await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
        await expect(element).toHaveCSS('display', 'flex');
        await expect(element).toHaveCSS('justify-content', 'center');
        await expect(element).toHaveCSS('margin-bottom', '5px');
        await expect(element).toHaveCSS('margin-top', '-10px');
        await expect(element).toHaveCSS('padding-left', '10px');
        await expect(element).toHaveCSS('padding-right', '10px');
        await expect(element).toHaveCSS('position', 'relative');

        element = checkoutInfoPage.checkoutButtonsContainer;
        await expect(element).toHaveCSS('border-top', `1px solid ${COLORS.borderColor}`);
        await expect(element).toHaveCSS('display', 'flex');

        for (let i = 0; i < (await checkoutInfoPage.actionButton.count()); i++) {
          element = checkoutInfoPage.actionButton.nth(i);
          const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
          await expect(element).toContainClass(expectedClass);
          await expect(element).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
          await expect(element).toHaveCSS('color', COLORS.buttons[i].textColor);
          const expectedBorderStyle = i === 1 ? (browserName === 'firefox' ? '0px' : '0px none') : '1px solid';
          await expect(element).toHaveCSS('border', `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
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
    });
  });
});

test.describe('Visual tests', () => {
  let maskedElements: Locator[];

  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
        maskedElements = [checkoutInfoPage.pageFooter.footer];
      });

      test('Default state', async ({ page }) => {
        const SNAPSHOT = user === USERS.visual ? 'defaultMisaligned.png' : 'default.png';
        await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true, mask: maskedElements });
      });

      test('Menu open', async ({ page }) => {
        const SNAPSHOT = user === USERS.visual ? 'menuOpenMisaligned.png' : 'menuOpen.png';
        await checkoutInfoPage.pageHeader.menuButton.click();
        await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true, mask: maskedElements });
      });

      test('Error state', async () => {
        await checkoutInfoPage.continueButton.click();
        await expect(checkoutInfoPage.checkoutInfoContainer).toHaveScreenshot('error.png');
      });
    });
  });
});

test.describe('Behavioural tests', () => {
  const FIRST_NAME = 'John';
  const LAST_NAME = 'Smith';
  const POSTAL_CODE = 'AB12 3CD';

  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
      });

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
      });

      test('"Cancel" button opens cart page', async ({ page, baseURL }) => {
        await checkoutInfoPage.cancelButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
      });
    });
  });

  [USERS.standard, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
      });

      test.describe('Form validation errors', () => {
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

        // We've effectively already tested this when submitting the blank form but this is a more explicit test
        // of the form validation behaviour
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

  [USERS.problem].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
      });

      test.describe('Form validation errors', () => {
        test('Last name appears in first name input', async () => {
          await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
          await expect(checkoutInfoPage.firstNameInput).toHaveValue(LAST_NAME);
          await expect(checkoutInfoPage.lastNameInput).toBeEmpty();
        });

        test('Last name overwrites existing first name', async () => {
          await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
          await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
          await expect(checkoutInfoPage.firstNameInput).toHaveValue(LAST_NAME);
          await expect(checkoutInfoPage.lastNameInput).toBeEmpty();
        });

        // There is no test for a missing first name error if the form is submitted with a last name and postal
        // code as the last name is displayed in the first name input (as shown above) so the form cannot get into
        // a suitable state for such a test. Similarly there is no test for a missing postal code error if the form
        // is submitted with first and last names only

        test('Missing last name error displayed if form submitted with other fields complete', async () => {
          await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
          await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
          await checkoutInfoPage.continueButton.click();
          await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingLastName);
        });

        // This is a cut-down version of the test for the previous users as the form cannot be submitted with only
        // a last name as the value is written to the first name input instead (as shown in an earlier test)
        test('Only first validation error shown on submitting partially complete form', async ({ page, baseURL }) => {
          // First name only
          await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
          await checkoutInfoPage.continueButton.click();
          await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingLastName);
          await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
          await checkoutInfoPage.resetCheckoutInfoForm();

          // Postal code only
          await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
          await checkoutInfoPage.continueButton.click();
          await checkoutInfoPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingFirstName);
          await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
          await checkoutInfoPage.resetCheckoutInfoForm();
        });

        // There is no test for the validation errors remaining if the form is made valid but not submitted
        // as the form can never be made valid for this user - the last name input will always be blank
      });

      // The last name input cannot be completed so the form cannot be submitted correctly and thus the
      // Continue button leaves the user on the current page with a validation error
      // NB The validation error is tested above so there is no need to verify it here
      test('"Continue" button leaves user on checkout info page', async ({ page, baseURL }) => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.continueButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
      });

      // Even though the form cannot be completed pressing enter after entering the postal code takes the
      // user back to the cart page
      test('Submitting form by pressing enter key opens cart page', async ({ page, baseURL }) => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.postalCodeInput.press('Enter');
        await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
      });
    });
  });

  [USERS.error].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutInfoPage);
      });

      test.describe('Form validation errors', () => {
        // All inputs are verified as blank in this test due to the behaviour seen for Problem User
        // where the last name value was displayed in the wrong input. But in this case the value
        // entered doesn't display at all
        test('Last name input remains blank', async () => {
          await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
          await expect(checkoutInfoPage.firstNameInput).toBeEmpty();
          await expect(checkoutInfoPage.lastNameInput).toBeEmpty();
          await expect(checkoutInfoPage.postalCodeInput).toBeEmpty();
        });

        // There are no tests for a missing value error if the form is submitted with other inputs completed.
        // The last name input is always blank (as shown above) so the only inputs that can be populated are
        // first name and postal code. Verifying a validation error is shown when the form has just a first
        // name value or postal code value is covered by earlier tests. The form can be submitted with a
        // missing last name (as shown in a later test) so the form cannot be put into a state where there are
        // two valid and populated inputs but the form itself is invalid.

        // Similarly there is no test for only the first of multiple validation errors being displayed on submitting
        // a partially complete form. There are only two possible validation errors for this user (missing first name
        // or missing postal code) and both are covered by previous test cases.

        // There is no test for the validation errors remaining if the form is made valid but not submitted
        // as the form can never be fully completed for this user (the last name input will always be blank)
        // although that doesn't prevent the form from being submitted as subsequent tests will show
      });

      // The last name input remains blank but the form can still be submitted correctly
      test('"Continue" button opens checkout overview page', async ({ page, baseURL }) => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.continueButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutOverviewPage}`);
      });

      // Even though the form cannot be completed (all inputs populated) it can still be submitted
      // (as shown above) so we know the form is valid. However, pressing enter after entering the
      // postal code takes the user back to the cart page rather than submitting the form
      test('Submitting form by pressing enter key opens cart page', async ({ page, baseURL }) => {
        await checkoutInfoPage.firstNameInput.fill(FIRST_NAME);
        await checkoutInfoPage.lastNameInput.fill(LAST_NAME);
        await checkoutInfoPage.postalCodeInput.fill(POSTAL_CODE);
        await checkoutInfoPage.postalCodeInput.press('Enter');
        await expect(page).toHaveURL(`${baseURL}${URLS.cartPage}`);
      });
    });
  });
});
