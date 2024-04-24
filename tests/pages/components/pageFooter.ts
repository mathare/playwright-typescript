import { Locator, Page } from '@playwright/test';

export default class PageFooter {
  readonly page: Page;
  readonly footer: Locator;
  readonly footerLink: Locator;
  readonly copyrightFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = page.locator('footer.page-footer');
    this.footerLink = this.footer.locator('li a');
    this.copyrightFooter = page.locator('.copyright');
  }
}
