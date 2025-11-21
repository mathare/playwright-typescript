import { Locator, Page, expect } from '@playwright/test';

type CredentialsInputs = 'username' | 'password';

export class LoginPage {
  readonly page: Page;
  readonly loginContainer: Locator;
  readonly title: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly errorContainer: Locator;
  readonly errorCloseButton: Locator;
  readonly errorMessage: Locator;
  readonly loginButton: Locator;
  readonly credentialsContainer: Locator;
  readonly usernames: Locator;
  readonly password: Locator;
  readonly usernamesHeader: Locator;
  readonly passwordHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginContainer = page.locator('div.login_container');
    this.title = page.locator('div.login_logo');
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.errorContainer = page.locator('div.error-message-container');
    this.errorCloseButton = this.errorContainer.getByTestId('error-button');
    this.errorMessage = this.errorContainer.getByTestId('error');
    this.loginButton = page.getByTestId('login-button');
    this.credentialsContainer = page
      .getByTestId('login-credentials-container')
      .locator('.login_credentials_wrap-inner');
    this.usernames = this.credentialsContainer.getByTestId('login-credentials');
    this.password = this.credentialsContainer.getByTestId('login-password');
    this.usernamesHeader = this.usernames.locator('h4');
    this.passwordHeader = this.password.locator('h4');
  }

  // **********
  // ASSERTIONS
  // **********
  #getInput(input: CredentialsInputs): Locator {
    return input === 'username' ? this.usernameInput : this.passwordInput;
  }

  async inputHasValidationError(input: CredentialsInputs) {
    const INPUT_LOCATOR = this.#getInput(input);
    await expect(INPUT_LOCATOR).toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.input.errorBorderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).toBeVisible();
  }

  async inputDoesNotHaveValidationError(input: CredentialsInputs) {
    const INPUT_LOCATOR = this.#getInput(input);
    await expect(INPUT_LOCATOR).not.toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.input.borderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).not.toBeVisible();
  }

  async errorMessageDisplayed(message: string) {
    await expect(this.errorContainer).toBeVisible();
    await expect(this.errorContainer).toHaveCSS('background-color', COLORS.error.backgroundColor);
    await expect(this.errorMessage).toHaveCSS('color', COLORS.error.textColor);
    await expect(this.errorContainer).toHaveText(message);
  }
}

export const COLORS = {
  credentialsContainer: {
    backgroundColor: 'rgb(19, 35, 34)',
    textColor: 'rgb(255, 255, 255)',
  },
  error: {
    backgroundColor: 'rgb(226, 35, 26)',
    textColor: 'rgb(255, 255, 255)',
  },
  input: {
    borderColor: 'rgb(237, 237, 237)',
    errorBorderColor: 'rgb(226, 35, 26)',
    textColor: 'rgb(72, 76, 85)',
  },
  loginButton: {
    backgroundColor: 'rgb(61, 220, 145)',
    borderColor: 'rgb(61, 220, 145)',
    textColor: 'rgb(19, 35, 34)',
  },
  loginContainer: { backgroundColor: 'rgb(238, 252, 246)' },
  loginForm: { backgroundColor: 'rgb(255, 255, 255)' },
  titleTextColor: 'rgb(19, 35, 34)',
};

export const EXPECTED_TEXT = {
  title: 'Swag Labs',
  placeholders: {
    username: 'Username',
    password: 'Password',
  },
  loginButton: 'Login',
  headers: {
    usernames: 'Accepted usernames are:',
    password: 'Password for all users:',
  },
  acceptedUsernames: [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
  ],
  password: 'secret_sauce',
  errorMessages: {
    missingUsername: 'Epic sadface: Username is required',
    missingPassword: 'Epic sadface: Password is required',
    incorrectCredentials: 'Epic sadface: Username and password do not match any user in this service',
    lockedOutUser: 'Epic sadface: Sorry, this user has been locked out.',
  },
};

export const FONT_SIZES = {
  button: '16px',
  header: '16px',
  standard: '14px',
  title: '24px',
};
