import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly url = '/';
  readonly page: Page;
  readonly loginContainer: Locator;
  readonly title: Locator;
  readonly usernameInput: Locator;
  readonly usernameErrorIcon: Locator;
  readonly passwordInput: Locator;
  readonly passwordErrorIcon: Locator;
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
    this.usernameErrorIcon = this.usernameInput.locator('.. >> svg');
    this.passwordInput = page.getByTestId('password');
    this.passwordErrorIcon = this.passwordInput.locator('.. >> svg');
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

  async login(username: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill('secret_sauce');
    await this.loginButton.click();
  }
}
