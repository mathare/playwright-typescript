import { test, expect } from '@playwright/test';
import { LoginPage, COLORS, FONT_SIZES, EXPECTED_TEXT } from '../pages/loginPage';

test.describe('Login page tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(loginPage.url);
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
      await expect(loginPage.usernameInput).toHaveAttribute('placeholder', EXPECTED_TEXT.usernamePlaceholder);
      await expect(loginPage.passwordInput).toBeEmpty();
      await expect(loginPage.passwordInput).toHaveAttribute('placeholder', EXPECTED_TEXT.passwordPlaceholder);
      await expect(loginPage.loginButton).toHaveText(EXPECTED_TEXT.loginButton);
      await expect(loginPage.usernamesHeader).toHaveText(EXPECTED_TEXT.usernamesHeader);
      await expect(loginPage.passwordHeader).toHaveText(EXPECTED_TEXT.passwordHeader);
      await expect(loginPage.usernames).toHaveText(
        [EXPECTED_TEXT.usernamesHeader, ...EXPECTED_TEXT.acceptedUsernames].join('\n'),
        {
          useInnerText: true,
        }
      );
      await expect(loginPage.password).toHaveText(`${EXPECTED_TEXT.passwordHeader}\n${EXPECTED_TEXT.password}`, {
        useInnerText: true,
      });
    });

    test('Element styling', async () => {
      await expect(loginPage.loginContainer).toHaveCSS('background-color', COLORS.loginContainerBackgroundColor);
      await expect(loginPage.title).toHaveCSS('color', COLORS.titleTextColor);
      await expect(loginPage.title).toHaveCSS('font-size', FONT_SIZES.title);
      await expect(loginPage.title).toHaveCSS('text-align', 'center');
      await expect(loginPage.usernameInput).toHaveAttribute('type', 'text');
      await expect(loginPage.usernameInput).toHaveCSS('background-color', COLORS.loginFormBackgroundColor);
      await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', COLORS.inputBorderColor);
      await expect(loginPage.usernameInput).toHaveCSS('color', COLORS.inputTextColor);
      await expect(loginPage.usernameInput).toHaveCSS('font-size', FONT_SIZES.standard);
      await expect(loginPage.usernameInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
      await expect(loginPage.passwordInput).toHaveCSS('background-color', COLORS.loginFormBackgroundColor);
      await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', COLORS.inputBorderColor);
      await expect(loginPage.passwordInput).toHaveCSS('color', COLORS.inputTextColor);
      await expect(loginPage.passwordInput).toHaveCSS('font-size', FONT_SIZES.standard);
      await expect(loginPage.passwordInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.loginButton).toContainClass('submit-button');
      await expect(loginPage.loginButton).toHaveCSS('background-color', COLORS.loginButtonBackgroundColor);
      await expect(loginPage.loginButton).toHaveCSS('border', `4px solid ${COLORS.loginButtonBackgroundColor}`);
      await expect(loginPage.loginButton).toHaveCSS('color', COLORS.loginButtonTextColor);
      await expect(loginPage.loginButton).toHaveCSS('font-size', FONT_SIZES.button);
      await expect(loginPage.credentialsContainer).toHaveCSS(
        'background-color',
        COLORS.credentialsContainerBackgroundColor
      );
      await expect(loginPage.credentialsContainer).toHaveCSS('color', COLORS.credentialsContainerTextColor);
      await expect(loginPage.credentialsContainer).toHaveCSS('font-size', FONT_SIZES.standard);
      await expect(loginPage.usernamesHeader).toHaveCSS('font-size', FONT_SIZES.header);
      await expect(loginPage.usernamesHeader).toHaveCSS('font-weight', '700');
      await expect(loginPage.passwordHeader).toHaveCSS('font-size', FONT_SIZES.header);
      await expect(loginPage.passwordHeader).toHaveCSS('font-weight', '700');
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
    const USERNAME = 'standard_user';
    const PASSWORD = process.env.PASSWORD!;

    test.describe('Successful logins', () => {
      test('Submit form by clicking login button', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await expect(page).toHaveURL(`${baseURL}/inventory.html`);
      });

      test('Submit form by pressing enter after typing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.passwordInput.press('Enter');
        await expect(page).toHaveURL(`${baseURL}/inventory.html`);
      });

      ['standard_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'].forEach((username) => {
        test(`Log in as ${username}`, async ({ page, baseURL, context }) => {
          await loginPage.usernameInput.fill(username);
          await loginPage.passwordInput.fill(PASSWORD);
          await loginPage.loginButton.click();
          await expect(page).toHaveURL(`${baseURL}/inventory.html`);
          const cookies = await context.cookies(baseURL);
          expect(cookies).toHaveLength(1);
          expect(cookies[0]).toHaveProperty('name', 'session-username');
          expect(cookies[0]).toHaveProperty('value', username);
        });
      });
    });

    test.describe('Unsuccessful logins', () => {
      test('Missing credentials', async ({ page, baseURL }) => {
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.usernameErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing username', async ({ page, baseURL }) => {
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.usernameErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.passwordErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid username', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('dummy_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.incorrectCredentialsErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill('password');
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.incorrectCredentialsErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('User is locked out', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('locked_out_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.lockedOutUserErrorMessage);
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.lockedOutUserErrorMessage);
        await expect(page).toHaveURL(`${baseURL}/`);
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
        await expect(loginPage.errorContainer).toHaveCSS('background-color', COLORS.loginFormBackgroundColor);
        await expect(loginPage.errorContainer).toBeEmpty();
      });
    });
  });
});
