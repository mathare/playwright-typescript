import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class CreateNewAccountPage extends BasePage {
  url = '/customer/account/create/';
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly mainBlock: Locator;
  readonly createAccountForm: Locator;
  readonly fieldset: Locator;
  readonly personalInfoBlock: Locator;
  readonly signInInfoBlock: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.mainBlock = this.page.locator('.column.main');
    this.createAccountForm = this.mainBlock.locator('form.form-create-account');
    this.fieldset = this.createAccountForm.locator('fieldset');
    this.personalInfoBlock = this.createAccountForm.locator('fieldset.create.info');
    this.signInInfoBlock = this.createAccountForm.locator('fieldset.create.account');
    this.createAccountButton = this.createAccountForm.locator('button.submit');
  }

  async open(): Promise<void> {
    await super.open(this.url);
  }

  formElement(index: number, element: FormBlockElements): Locator {
    return this.fieldset.nth(index).locator(element);
  }
}

export enum FormBlockElements {
  Title = 'legend.legend',
  Field = 'div.field',
  Label = `${Field} label`,
}
