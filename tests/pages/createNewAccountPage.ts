import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class CreateNewAccountPage extends BasePage {
  url = '/customer/account/create/';
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly mainBlock: Locator;
  readonly createAccountForm: Locator;
  readonly fieldset: Locator;
  readonly blockTitle: Locator;
  readonly field: Locator;
  readonly personalInfoBlock: Locator;
  readonly signInInfoBlock: Locator;
  readonly passwordStrengthIndicator: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.mainBlock = this.page.locator('.column.main');
    this.createAccountForm = this.mainBlock.locator('form.form-create-account');
    this.fieldset = this.createAccountForm.locator('fieldset');
    this.blockTitle = this.createAccountForm.locator('legend.legend');
    this.field = this.createAccountForm.locator('div.field');
    this.personalInfoBlock = this.createAccountForm.locator('fieldset.create.info');
    this.signInInfoBlock = this.createAccountForm.locator('fieldset.create.account');
    this.passwordStrengthIndicator = this.signInInfoBlock.locator('#password-strength-meter');
    this.createAccountButton = this.createAccountForm.locator('button.submit');
  }

  async open(): Promise<void> {
    await super.open(this.url);
  }

  formElement(index: number, element: FieldElements): Locator {
    return this.field.nth(index).locator(element);
  }

  async passwordStrengthIndicatorStyle(): Promise<Record<string, string>> {
    const width = await this.passwordStrengthIndicator.evaluate((el) => window.getComputedStyle(el, ':before').width);
    const backgroundColor = await this.passwordStrengthIndicator.evaluate(
      (el) => window.getComputedStyle(el, ':before').backgroundColor,
    );
    return { backgroundColor, width };
  }
}

export enum Fields {
  FirstName,
  LastName,
  Email,
  Password,
  ConfirmPassword,
}

export enum FieldElements {
  Label = 'label',
  Input = 'input',
  ValidationError = 'div.mage-error',
}
