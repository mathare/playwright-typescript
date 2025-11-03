import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly url = '/';
  readonly page: Page;
  readonly loginContainer: Locator;
  readonly title: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly credentialsContainer: Locator;
  readonly usernames: Locator;
  readonly password: Locator;
  readonly usernameHeader: Locator;
  readonly passwordHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginContainer = page.locator('div.login_container');
    this.title = page.locator('div.login_logo');
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.credentialsContainer = page
      .getByTestId('login-credentials-container')
      .locator('.login_credentials_wrap-inner');
    this.usernames = this.credentialsContainer.getByTestId('login-credentials');
    this.password = this.credentialsContainer.getByTestId('login-password');
    this.usernameHeader = this.usernames.locator('h4');
    this.passwordHeader = this.password.locator('h4');
  }

  async login(username: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill('secret_sauce');
    await this.loginButton.click();
  }
}
