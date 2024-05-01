import { Locator, Page } from '@playwright/test';

export default class PageHeader {
  readonly page: Page;
  readonly header: Locator;
  readonly banner: Locator;
  readonly bannerLink: Locator;
  readonly greeting: Locator;
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly cartLink: Locator;
  readonly topnav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header.page-header');
    this.banner = this.header.locator('.panel.wrapper');
    this.bannerLink = this.banner.locator('li a');
    this.greeting = this.banner.locator('.greet.welcome');
    this.logo = this.header.locator('a.logo');
    this.searchInput = this.header.locator('input#search');
    this.cartLink = this.header.locator('a.showcart');
    this.topnav = page.locator('nav');
  }

  async getTopnavMenuItem(menu: Locator, lvl: number): Promise<Locator> {
    return menu.locator(`li.level${lvl}`);
  }

  async getTopnavMenuLink(menuItem: Locator): Promise<Locator> {
    return menuItem.locator('a').first();
  }
}
