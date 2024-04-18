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
  readonly topnavLink: Locator;
  readonly topnavLvl0Link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header.page-header');
    this.banner = this.header.locator('.panel.wrapper');
    this.bannerLink = this.banner.locator('li a');
    this.greeting = this.banner.locator('.greet.welcome');
    this.logo = this.header.locator('a.logo');
    this.searchInput = this.header.locator('input#search');
    this.cartLink = this.header.locator('a.showcart');
    this.topnav = page.locator('.nav-sections');
    this.topnavLink = this.topnav.getByRole('menuitem');
    this.topnavLvl0Link = this.topnav.locator('li.level0').getByRole('menuitem');
  }

  async getTopnavSubMenuLinks(lvl0Index: number): Promise<Locator> {
    return this.topnavLvl0Link.nth(lvl0Index).locator('..').locator('li.level1 a');
  }
}
