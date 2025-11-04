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
      await expect(loginPage.title).toHaveText(EXPECTED_TEXT.TITLE);
      await expect(loginPage.usernameInput).toBeEmpty();
      await expect(loginPage.usernameInput).toHaveAttribute('placeholder', EXPECTED_TEXT.USERNAME_PLACEHOLDER);
      await expect(loginPage.passwordInput).toBeEmpty();
      await expect(loginPage.passwordInput).toHaveAttribute('placeholder', EXPECTED_TEXT.PASSWORD_PLACEHOLDER);
      await expect(loginPage.loginButton).toHaveText(EXPECTED_TEXT.LOGIN_BUTTON);
      await expect(loginPage.usernamesHeader).toHaveText(EXPECTED_TEXT.USERNAMES_HEADER);
      await expect(loginPage.passwordHeader).toHaveText(EXPECTED_TEXT.PASSWORD_HEADER);
      await expect(loginPage.usernames).toHaveText(
        [EXPECTED_TEXT.USERNAMES_HEADER, ...EXPECTED_TEXT.ACCEPTED_USERNAMES].join('\n'),
        {
          useInnerText: true,
        }
      );
      await expect(loginPage.password).toHaveText(`${EXPECTED_TEXT.PASSWORD_HEADER}\n${EXPECTED_TEXT.PASSWORD}`, {
        useInnerText: true,
      });
    });

    test('Element styling', async () => {
      await expect(loginPage.loginContainer).toHaveCSS('background-color', COLORS.LOGIN_CONTAINER_BACKGROUND_COLOR);
      await expect(loginPage.title).toHaveCSS('color', COLORS.TITLE_TEXT_COLOR);
      await expect(loginPage.title).toHaveCSS('font-size', FONT_SIZES.TITLE);
      await expect(loginPage.title).toHaveCSS('text-align', 'center');
      await expect(loginPage.usernameInput).toHaveAttribute('type', 'text');
      await expect(loginPage.usernameInput).toHaveCSS('background-color', COLORS.LOGIN_FORM_BACKGROUND_COLOR);
      await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', COLORS.INPUT_BORDER_COLOR);
      await expect(loginPage.usernameInput).toHaveCSS('color', COLORS.INPUT_TEXT_COLOR);
      await expect(loginPage.usernameInput).toHaveCSS('font-size', FONT_SIZES.STANDARD);
      await expect(loginPage.usernameInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
      await expect(loginPage.passwordInput).toHaveCSS('background-color', COLORS.LOGIN_FORM_BACKGROUND_COLOR);
      await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', COLORS.INPUT_BORDER_COLOR);
      await expect(loginPage.passwordInput).toHaveCSS('color', COLORS.INPUT_TEXT_COLOR);
      await expect(loginPage.passwordInput).toHaveCSS('font-size', FONT_SIZES.STANDARD);
      await expect(loginPage.passwordInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.loginButton).toContainClass('submit-button');
      await expect(loginPage.loginButton).toHaveCSS('background-color', COLORS.LOGIN_BUTTON_BACKGROUND_COLOR);
      await expect(loginPage.loginButton).toHaveCSS('border', `4px solid ${COLORS.LOGIN_BUTTON_BACKGROUND_COLOR}`);
      await expect(loginPage.loginButton).toHaveCSS('color', COLORS.LOGIN_BUTTON_TEXT_COLOR);
      await expect(loginPage.loginButton).toHaveCSS('font-size', FONT_SIZES.BUTTON);
      await expect(loginPage.credentialsContainer).toHaveCSS(
        'background-color',
        COLORS.CREDENTIALS_CONTAINER_BACKGROUND_COLOR
      );
      await expect(loginPage.credentialsContainer).toHaveCSS('color', COLORS.CREDENTIALS_CONTAINER_TEXT_COLOR);
      await expect(loginPage.credentialsContainer).toHaveCSS('font-size', FONT_SIZES.STANDARD);
      await expect(loginPage.usernamesHeader).toHaveCSS('font-size', FONT_SIZES.HEADER);
      await expect(loginPage.usernamesHeader).toHaveCSS('font-weight', '700');
      await expect(loginPage.passwordHeader).toHaveCSS('font-size', FONT_SIZES.HEADER);
      await expect(loginPage.passwordHeader).toHaveCSS('font-weight', '700');
    });

    test('Visual test', async ({ page }) => {
      await expect(page).toHaveScreenshot('loginPage.png');
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
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.USERNAME_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing username', async ({ page, baseURL }) => {
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.USERNAME_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.PASSWORD_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid username', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('dummy_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.INCORRECT_CREDENTIALS_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill('password');
        await loginPage.loginButton.click();
        await loginPage.inputHasValidationError('username');
        await loginPage.inputHasValidationError('password');
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.INCORRECT_CREDENTIALS_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('User is locked out', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('locked_out_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.LOCKED_OUT_USER_ERROR_MESSAGE);
        await loginPage.errorMessageDisplayed(EXPECTED_TEXT.LOCKED_OUT_USER_ERROR_MESSAGE);
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
        await expect(loginPage.errorContainer).toHaveCSS('background-color', COLORS.LOGIN_FORM_BACKGROUND_COLOR);
        await expect(loginPage.errorContainer).toBeEmpty();
      });
    });
  });
});
