import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class AccountPage extends BasePage {
  url = '/customer/account/';
  readonly greeting: Locator;

  constructor(page: Page) {
    super(page);
    this.greeting = this.banner.locator('.greet.welcome');
  }

  async open() {
    await super.open(this.url);
  }
}
