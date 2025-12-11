import { test, expect } from '@playwright/test';
import { LoginPage, COLORS, EXPECTED_TEXT } from '../pages/loginPage';
import { URLS } from '../data/pages';
import { getCookies } from '../helpers/utils';
import { USERS } from '../data/users';

test.describe('Login page tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(URLS.loginPage);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties
    // rather than actually using image comparison.
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Element visibility', async () => {
      await expect(loginPage.loginContainer).toBeVisible();
      await expect(loginPage.title).toBeVisible();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
      await expect(loginPage.credentialsContainer).toBeVisible();
      await expect(loginPage.usernames).toBeVisible();
      await expect(loginPage.password).toBeVisible();
    });

    test('Text content of elements', async () => {
      await expect(loginPage.title).toHaveText(EXPECTED_TEXT.title);
      await expect(loginPage.usernameInput).toBeEmpty();
      await expect(loginPage.usernameInput).toHaveAttribute('placeholder', EXPECTED_TEXT.placeholders.username);
      await expect(loginPage.passwordInput).toBeEmpty();
      await expect(loginPage.passwordInput).toHaveAttribute('placeholder', EXPECTED_TEXT.placeholders.password);
      await expect(loginPage.loginButton).toHaveText(EXPECTED_TEXT.loginButton);
      await expect(loginPage.usernamesHeader).toHaveText(EXPECTED_TEXT.headers.usernames);
      await expect(loginPage.passwordHeader).toHaveText(EXPECTED_TEXT.headers.password);
      await expect(loginPage.usernames).toHaveText(
        [EXPECTED_TEXT.headers.usernames, ...EXPECTED_TEXT.acceptedUsernames].join('\n'),
        {
          useInnerText: true,
        }
      );
      await expect(loginPage.password).toHaveText(`${EXPECTED_TEXT.headers.password}\n${EXPECTED_TEXT.password}`, {
        useInnerText: true,
      });
    });

    test('Element styling', async () => {
      let element = loginPage.loginContainer;
      await expect(element).toHaveCSS('background-color', COLORS.loginContainer.backgroundColor);

      element = loginPage.title;
      await expect(element).toHaveCSS('color', COLORS.titleTextColor);
      await expect(element).toHaveCSS('font-size', '24px');
      await expect(element).toHaveCSS('text-align', 'center');

      element = loginPage.usernameInput;
      await expect(element).toHaveAttribute('type', 'text');
      await expect(element).toHaveCSS('background-color', COLORS.loginForm.backgroundColor);
      await expect(element).toHaveCSS('border-bottom-color', COLORS.input.borderColor);
      await expect(element).toHaveCSS('color', COLORS.input.textColor);
      await expect(element).toHaveCSS('font-size', '14px');
      await expect(element).toHaveCSS('text-align', 'start');

      element = loginPage.passwordInput;
      await expect(element).toHaveAttribute('type', 'password');
      await expect(element).toHaveCSS('background-color', COLORS.loginForm.backgroundColor);
      await expect(element).toHaveCSS('border-bottom-color', COLORS.input.borderColor);
      await expect(element).toHaveCSS('color', COLORS.input.textColor);
      await expect(element).toHaveCSS('font-size', '14px');
      await expect(element).toHaveCSS('text-align', 'start');

      element = loginPage.loginButton;
      await expect(element).toContainClass('submit-button');
      await expect(element).toHaveCSS('background-color', COLORS.loginButton.backgroundColor);
      await expect(element).toHaveCSS('border', `4px solid ${COLORS.loginButton.borderColor}`);
      await expect(element).toHaveCSS('color', COLORS.loginButton.textColor);
      await expect(element).toHaveCSS('font-size', '16px');

      element = loginPage.credentialsContainer;
      await expect(element).toHaveCSS('background-color', COLORS.credentialsContainer.backgroundColor);
      await expect(element).toHaveCSS('color', COLORS.credentialsContainer.textColor);
      await expect(element).toHaveCSS('font-size', '14px');

      element = loginPage.usernamesHeader;
      await expect(element).toHaveCSS('font-size', '16px');
      await expect(element).toHaveCSS('font-weight', '700');

      element = loginPage.passwordHeader;
      await expect(element).toHaveCSS('font-size', '16px');
      await expect(element).toHaveCSS('font-weight', '700');
    });

    test.describe('Visual tests', () => {
      test('Default state', async ({ page }) => {
        await expect(page).toHaveScreenshot('default.png');
      });

      test('Error state', async ({ page }) => {
        await loginPage.loginButton.click();
        await expect(page).toHaveScreenshot('error.png');
      });
    });
  });

  test.describe('Behavioural tests', () => {
    const USERNAME = USERS.standard.username;
    const PASSWORD = process.env.PASSWORD!;

    test.describe('Successful logins', () => {
      test('Submit form by clicking login button', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      test('Submit form by pressing enter after typing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.passwordInput.press('Enter');
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
        test(`Log in as ${user.description}`, async ({ page, baseURL, context }) => {
          await loginPage.usernameInput.fill(user.username);
          await loginPage.passwordInput.fill(PASSWORD);
          await loginPage.loginButton.click();
          await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
          const cookies = await getCookies(context, baseURL!);
          expect(cookies).toHaveLength(1);
          expect(cookies[0]).toHaveProperty('name', 'session-username');
          expect(cookies[0]).toHaveProperty('value', user.username);
        });
      });
    });

    test.describe('Unsuccessful logins', () => {
      test('Missing credentials', async ({ page, baseURL }) => {
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingUsername);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('Missing username', async ({ page, baseURL }) => {
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingUsername);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('Missing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.missingPassword);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('Invalid username', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('dummy_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.incorrectCredentials);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('Invalid password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill('password');
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.incorrectCredentials);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('User is locked out', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERS.lockedOut.username);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.errorMessages.lockedOutUser);
        await expect(page).toHaveURL(`${baseURL}${URLS.loginPage}`);
      });

      test('Validation errors cleared on closing error message', async () => {
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await expect(loginPage.errorContainer).toBeVisible();

        await loginPage.errorCloseButton.click();
        await loginPage.inputDoesNotHaveValidationError('username');
        await loginPage.inputDoesNotHaveValidationError('password');
        // The error container is still visible on the page but is white and empty
        await expect(loginPage.errorContainer).toHaveCSS('background-color', COLORS.loginForm.backgroundColor);
        await expect(loginPage.errorContainer).toBeEmpty();
      });
    });
  });
});
