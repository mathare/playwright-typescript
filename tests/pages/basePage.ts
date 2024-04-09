import { Locator, Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;
  readonly globalMessage: Locator;
  readonly pageHeader: Locator;
  readonly banner: Locator;
  readonly bannerLink: Locator;
  readonly logoLink: Locator;
  readonly searchInput: Locator;
  readonly cartLink: Locator;
  readonly topNav: Locator;
  readonly topNavLink: Locator;
  readonly pageFooter: Locator;
  readonly pageFooterLink: Locator;
  readonly copyrightFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalMessage = page.locator('.global.message');
    this.pageHeader = page.locator('header.page-header');
    this.banner = page.locator('.panel.wrapper');
    this.bannerLink = this.banner.locator('li a');
    this.logoLink = page.locator('a.logo');
    this.searchInput = page.locator('input#search');
    this.cartLink = page.locator('a.showcart');
    this.topNav = page.locator('.nav-sections');
    this.topNavLink = this.topNav.getByRole('menuitem');
    this.pageFooter = page.locator('footer.page-footer');
    this.pageFooterLink = this.pageFooter.locator('li a');
    this.copyrightFooter = page.locator('.copyright');
  }
  async open(url: string) {
    await this.page.goto(url, { timeout: 30000 });
    await this.page.locator('.fc-button').getByText('Consent').click();
  }
}
