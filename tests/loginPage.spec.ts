import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

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
      const USERNAMES_HEADER = 'Accepted usernames are:';
      const ACCEPTED_USERNAMES = [
        'standard_user',
        'locked_out_user',
        'problem_user',
        'performance_glitch_user',
        'error_user',
        'visual_user',
      ];
      const PASSWORD_HEADER = 'Password for all users:';
      const PASSWORD = 'secret_sauce';

      await expect(loginPage.title).toHaveText('Swag Labs');
      await expect(loginPage.usernameInput).toBeEmpty();
      await expect(loginPage.usernameInput).toHaveAttribute('placeholder', 'Username');
      await expect(loginPage.passwordInput).toBeEmpty();
      await expect(loginPage.passwordInput).toHaveAttribute('placeholder', 'Password');
      await expect(loginPage.loginButton).toHaveText('Login');
      await expect(loginPage.usernameHeader).toHaveText(USERNAMES_HEADER);
      await expect(loginPage.passwordHeader).toHaveText(PASSWORD_HEADER);
      await expect(loginPage.usernames).toHaveText([USERNAMES_HEADER, ...ACCEPTED_USERNAMES].join('\n'), {
        useInnerText: true,
      });
      await expect(loginPage.password).toHaveText(`${PASSWORD_HEADER}\n${PASSWORD}`, { useInnerText: true });
    });

    test('Element styling', async () => {
      await expect(loginPage.loginContainer).toHaveCSS('background-color', 'rgb(238, 252, 246)');
      await expect(loginPage.title).toHaveCSS('color', 'rgb(19, 35, 34)');
      await expect(loginPage.title).toHaveCSS('font-size', '24px');
      await expect(loginPage.title).toHaveCSS('text-align', 'center');
      await expect(loginPage.usernameInput).toHaveAttribute('type', 'text');
      await expect(loginPage.usernameInput).toHaveCSS('background-color', 'rgb(255, 255, 255)');
      await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', 'rgb(237, 237, 237)');
      await expect(loginPage.usernameInput).toHaveCSS('color', 'rgb(72, 76, 85)');
      await expect(loginPage.usernameInput).toHaveCSS('font-size', '14px');
      await expect(loginPage.usernameInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
      await expect(loginPage.passwordInput).toHaveCSS('background-color', 'rgb(255, 255, 255)');
      await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', 'rgb(237, 237, 237)');
      await expect(loginPage.passwordInput).toHaveCSS('color', 'rgb(72, 76, 85)');
      await expect(loginPage.passwordInput).toHaveCSS('font-size', '14px');
      await expect(loginPage.passwordInput).toHaveCSS('text-align', 'start');
      await expect(loginPage.loginButton).toHaveClass(/submit-button/);
      await expect(loginPage.loginButton).toHaveCSS('background-color', 'rgb(61, 220, 145)');
      await expect(loginPage.loginButton).toHaveCSS('border', '4px solid rgb(61, 220, 145)');
      await expect(loginPage.loginButton).toHaveCSS('color', 'rgb(19, 35, 34)');
      await expect(loginPage.loginButton).toHaveCSS('font-size', '16px');
      await expect(loginPage.credentialsContainer).toHaveCSS('background-color', 'rgb(19, 35, 34)');
      await expect(loginPage.credentialsContainer).toHaveCSS('color', 'rgb(255, 255, 255)');
      await expect(loginPage.credentialsContainer).toHaveCSS('font-size', '14px');
      await expect(loginPage.usernameHeader).toHaveCSS('font-size', '16px');
      await expect(loginPage.usernameHeader).toHaveCSS('font-weight', '700');
      await expect(loginPage.passwordHeader).toHaveCSS('font-size', '16px');
      await expect(loginPage.passwordHeader).toHaveCSS('font-weight', '700');
    });

    test('Visual test', async ({ page }) => {
      await expect(page).toHaveScreenshot('loginPage.png');
    });
  });

  test.describe('Behavioural tests', () => {
    const USERNAME = 'standard_user';
    const PASSWORD = 'secret_sauce';

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
      const ERROR_BACKGROUND_COLOR = 'rgb(226, 35, 26)';
      const ERROR_COLOR = 'rgb(255, 255, 255)';
      const USERNAME_ERROR_MESSAGE = 'Epic sadface: Username is required';
      const PASSWORD_ERROR_MESSAGE = 'Epic sadface: Password is required';
      const INCORRECT_CREDENTIALS_ERROR_MESSAGE =
        'Epic sadface: Username and password do not match any user in this service';

      test('Missing credentials', async ({ page, baseURL }) => {
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(USERNAME_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing username', async ({ page, baseURL }) => {
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(USERNAME_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Missing password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(PASSWORD_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid username', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill('dummy_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(INCORRECT_CREDENTIALS_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Invalid password', async ({ page, baseURL }) => {
        await loginPage.usernameInput.fill(USERNAME);
        await loginPage.passwordInput.fill('password');
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(INCORRECT_CREDENTIALS_ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('User is locked out', async ({ page, baseURL }) => {
        const ERROR_MESSAGE = 'Epic sadface: Sorry, this user has been locked out.';

        await loginPage.usernameInput.fill('locked_out_user');
        await loginPage.passwordInput.fill(PASSWORD);
        await loginPage.loginButton.click();
        await expect(loginPage.usernameInput).toHaveClass(/input_error/);
        await expect(loginPage.usernameInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordInput).toHaveClass(/input_error/);
        await expect(loginPage.passwordInput).toHaveCSS('border-bottom-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();
        await expect(loginPage.errorContainer).toHaveCSS('background-color', ERROR_BACKGROUND_COLOR);
        await expect(loginPage.errorMessage).toHaveCSS('color', ERROR_COLOR);
        await expect(loginPage.errorContainer).toHaveText(ERROR_MESSAGE);
        await expect(page).toHaveURL(`${baseURL}/`);
      });

      test('Validation errors cleared on closing error message', async () => {
        await loginPage.loginButton.click();
        await expect(loginPage.usernameErrorIcon).toBeVisible();
        await expect(loginPage.passwordErrorIcon).toBeVisible();
        await expect(loginPage.errorContainer).toBeVisible();

        await loginPage.errorCloseButton.click();
        await expect(loginPage.usernameErrorIcon).not.toBeVisible();
        await expect(loginPage.passwordErrorIcon).not.toBeVisible();
        // The error container is still visible on the page but is white and empty
        await expect(loginPage.errorContainer).toHaveCSS('background-color', 'rgb(255, 255, 255)');
        await expect(loginPage.errorContainer).toBeEmpty();
      });
    });
  });
});
