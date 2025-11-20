import { Locator, Page, expect } from '@playwright/test';
import { URLS } from '../data/pages';

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

  // *******
  // ACTIONS
  // *******
  async login(username: string) {
    await this.page.goto(URLS.loginPage);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill('secret_sauce');
    await this.loginButton.click();
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
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.inputErrorBorderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).toBeVisible();
  }

  async inputDoesNotHaveValidationError(input: CredentialsInputs) {
    const INPUT_LOCATOR = this.#getInput(input);
    await expect(INPUT_LOCATOR).not.toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.inputBorderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).not.toBeVisible();
  }

  async errorMessageDisplayed(message: string) {
    await expect(this.errorContainer).toBeVisible();
    await expect(this.errorContainer).toHaveCSS('background-color', COLORS.errorBackgroundColor);
    await expect(this.errorMessage).toHaveCSS('color', COLORS.errorTextColor);
    await expect(this.errorContainer).toHaveText(message);
  }
}

export const COLORS = {
  credentialsContainerBackgroundColor: 'rgb(19, 35, 34)',
  credentialsContainerTextColor: 'rgb(255, 255, 255)',
  errorBackgroundColor: 'rgb(226, 35, 26)',
  errorTextColor: 'rgb(255, 255, 255)',
  inputBorderColor: 'rgb(237, 237, 237)',
  inputErrorBorderColor: 'rgb(226, 35, 26)',
  inputTextColor: 'rgb(72, 76, 85)',
  loginButtonBackgroundColor: 'rgb(61, 220, 145)',
  loginButtonTextColor: 'rgb(19, 35, 34)',
  loginContainerBackgroundColor: 'rgb(238, 252, 246)',
  loginFormBackgroundColor: 'rgb(255, 255, 255)',
  titleTextColor: 'rgb(19, 35, 34)',
};

export const EXPECTED_TEXT = {
  title: 'Swag Labs',
  usernamePlaceholder: 'Username',
  passwordPlaceholder: 'Password',
  loginButton: 'Login',
  usernamesHeader: 'Accepted usernames are:',
  acceptedUsernames: [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
  ],
  passwordHeader: 'Password for all users:',
  password: 'secret_sauce',
  usernameErrorMessage: 'Epic sadface: Username is required',
  passwordErrorMessage: 'Epic sadface: Password is required',
  incorrectCredentialsErrorMessage: 'Epic sadface: Username and password do not match any user in this service',
  lockedOutUserErrorMessage: 'Epic sadface: Sorry, this user has been locked out.',
};

export const FONT_SIZES = {
  button: '16px',
  header: '16px',
  standard: '14px',
  title: '24px',
};
