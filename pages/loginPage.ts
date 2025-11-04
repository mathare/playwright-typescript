import { Locator, Page, expect } from '@playwright/test';

type CredentialsInputs = 'username' | 'password';

export class LoginPage {
  readonly url = '/';
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

  // *** ACTIONS ***
  async login(username: string) {
    await this.page.goto(this.url);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill('secret_sauce');
    await this.loginButton.click();
  }

  // *** ASSERTIONS ***
  #getInput(input: CredentialsInputs): Locator {
    return input === 'username' ? this.usernameInput : this.passwordInput;
  }

  async inputHasValidationError(input: CredentialsInputs) {
    const INPUT_LOCATOR = this.#getInput(input);
    await expect(INPUT_LOCATOR).toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.INPUT_ERROR_BORDER_COLOR);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).toBeVisible();
  }

  async inputDoesNotHaveValidationError(input: CredentialsInputs) {
    const INPUT_LOCATOR = this.#getInput(input);
    await expect(INPUT_LOCATOR).not.toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.INPUT_BORDER_COLOR);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).not.toBeVisible();
  }

  async errorMessageDisplayed(message: string) {
    await expect(this.errorContainer).toBeVisible();
    await expect(this.errorContainer).toHaveCSS('background-color', COLORS.ERROR_BACKGROUND_COLOR);
    await expect(this.errorMessage).toHaveCSS('color', COLORS.ERROR_TEXT_COLOR);
    await expect(this.errorContainer).toHaveText(message);
  }
}

export const COLORS = {
  CREDENTIALS_CONTAINER_BACKGROUND_COLOR: 'rgb(19, 35, 34)',
  CREDENTIALS_CONTAINER_TEXT_COLOR: 'rgb(255, 255, 255)',
  ERROR_BACKGROUND_COLOR: 'rgb(226, 35, 26)',
  ERROR_TEXT_COLOR: 'rgb(255, 255, 255)',
  INPUT_BORDER_COLOR: 'rgb(237, 237, 237)',
  INPUT_ERROR_BORDER_COLOR: 'rgb(226, 35, 26)',
  INPUT_TEXT_COLOR: 'rgb(72, 76, 85)',
  LOGIN_BUTTON_BACKGROUND_COLOR: 'rgb(61, 220, 145)',
  LOGIN_BUTTON_TEXT_COLOR: 'rgb(19, 35, 34)',
  LOGIN_CONTAINER_BACKGROUND_COLOR: 'rgb(238, 252, 246)',
  LOGIN_FORM_BACKGROUND_COLOR: 'rgb(255, 255, 255)',
  TITLE_TEXT_COLOR: 'rgb(19, 35, 34)',
};

export const EXPECTED_TEXT = {
  TITLE: 'Swag Labs',
  USERNAME_PLACEHOLDER: 'Username',
  PASSWORD_PLACEHOLDER: 'Password',
  LOGIN_BUTTON: 'Login',
  USERNAMES_HEADER: 'Accepted usernames are:',
  ACCEPTED_USERNAMES: [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
  ],
  PASSWORD_HEADER: 'Password for all users:',
  PASSWORD: 'secret_sauce',
  USERNAME_ERROR_MESSAGE: 'Epic sadface: Username is required',
  PASSWORD_ERROR_MESSAGE: 'Epic sadface: Password is required',
  INCORRECT_CREDENTIALS_ERROR_MESSAGE: 'Epic sadface: Username and password do not match any user in this service',
  LOCKED_OUT_USER_ERROR_MESSAGE: 'Epic sadface: Sorry, this user has been locked out.',
};

export const FONT_SIZES = {
  BUTTON: '16px',
  HEADER: '16px',
  STANDARD: '14px',
  TITLE: '24px',
};
