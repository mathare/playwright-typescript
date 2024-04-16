import { Locator, Page } from '@playwright/test';

export default class BasePage {
  readonly url: string;
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
  readonly topNavLvl0Link: Locator;
  readonly adsWidget: Locator
  readonly pageFooter: Locator;
  readonly pageFooterLink: Locator;
  readonly copyrightFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalMessage = page.locator('.global.message');
    this.pageHeader = page.locator('header.page-header');
    this.banner = this.pageHeader.locator('.panel.wrapper');
    this.bannerLink = this.banner.locator('li a');
    this.logoLink = page.locator('a.logo');
    this.searchInput = page.locator('input#search');
    this.cartLink = page.locator('a.showcart');
    this.topNav = page.locator('.nav-sections');
    this.topNavLink = this.topNav.getByRole('menuitem');
    this.topNavLvl0Link = this.topNav.locator('li.level0').getByRole('menuitem');
    this.adsWidget = page.locator('.widget').filter({has: page.locator('ins.adsbygoogle')});
    this.pageFooter = page.locator('footer.page-footer');
    this.pageFooterLink = this.pageFooter.locator('li a');
    this.copyrightFooter = page.locator('.copyright');
  }
  async open(url: string) {
    // Firefox can be VERY slow to load the page it seems so use a large timeout even though it exceeds the configured test timeout for most browsers
    await this.page.goto(url, { timeout: 90000 });
    if (process.platform === 'win32') {
      await this.page.getByRole('button').getByText('Consent').click();
    }
  }

  async getTopNavSubMenuLinks(lvl0Index: number): Promise<Locator> {
    return this.topNavLvl0Link.nth(lvl0Index).locator('..').locator('li.level1 a');
  }
}
