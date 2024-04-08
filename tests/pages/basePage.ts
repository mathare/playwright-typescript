import { Locator, Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;
  readonly globalMessage: Locator;
  readonly pageHeader: Locator;
  readonly banner: Locator;
  readonly topNav: Locator;
  readonly pageFooter: Locator;
  readonly copyrightFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalMessage = page.locator('.global.message');
    this.pageHeader = page.locator('header.page-header');
    this.banner = page.locator('.panel.wrapper');
    this.topNav = page.locator('.nav-sections');
    this.pageFooter = page.locator('footer.page-footer');
    this.copyrightFooter = page.locator('.copyright');
  }
  async open(url: string) {
    await this.page.goto(url, { timeout: 30000 });
    await this.page.locator('.fc-button').getByText('Consent').click();
  }
}
