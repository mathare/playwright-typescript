import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class SignInPage extends BasePage {
  url = '/customer/account/login/';
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly errorMessage: Locator;
  readonly existingCustomerBlock: Locator;
  readonly existingCustomerHeading: Locator;
  readonly loginForm: Locator;
  readonly existingCustomerSubheading: Locator;
  readonly emailInputLabel: Locator;
  readonly emailInput: Locator;
  readonly emailInputError: Locator;
  readonly passwordInputLabel: Locator;
  readonly passwordInput: Locator;
  readonly passwordInputError: Locator;
  readonly loginButton: Locator;
  readonly forgottenPasswordLink: Locator;
  readonly newCustomerBlock: Locator;
  readonly newCustomerHeading: Locator;
  readonly newCustomerContent: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.errorMessage = this.mainContent.getByRole('alert').first();
    this.existingCustomerBlock = this.mainContent.locator('.block-customer-login');
    this.existingCustomerHeading = this.existingCustomerBlock.locator('.block-title');
    this.loginForm = this.existingCustomerBlock.locator('#login-form');
    this.existingCustomerSubheading = this.loginForm.locator('.field.note');
    this.emailInputLabel = this.loginForm.locator('.field.email label');
    this.emailInput = this.loginForm.locator('#email');
    this.emailInputError = this.loginForm.locator('#email-error');
    this.passwordInputLabel = this.loginForm.locator('.field.password label');
    this.passwordInput = this.loginForm.locator('#pass');
    this.passwordInputError = this.loginForm.locator('#pass-error');
    this.loginButton = this.loginForm.locator('button[name=send]');
    this.forgottenPasswordLink = this.loginForm.locator('a.action.remind');
    this.newCustomerBlock = this.mainContent.locator('.block-new-customer');
    this.newCustomerHeading = this.newCustomerBlock.locator('.block-title');
    this.newCustomerContent = this.newCustomerBlock.locator('.block-content p');
    // Even though this element is styled as a button it is actually an anchor
    this.createAccountButton = this.newCustomerBlock.locator('a.action.create');
  }

  async open(): Promise<void>  {
    await super.open(this.url);
  }

  async loginAs(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
