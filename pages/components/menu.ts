import { Locator, Page } from '@playwright/test';

export class Menu {
  readonly page: Page;
  readonly menu: Locator;
  readonly menuItemList: Locator;
  readonly menuItem: Locator;
  readonly menuCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.locator('div.bm-menu-wrap');
    this.menuItemList = this.menu.locator('nav.bm-item-list');
    this.menuItem = this.menuItemList.locator('a.menu-item');
    this.menuCloseButton = this.menu.locator('#react-burger-cross-btn');
  }
}

export const EXPECTED_TEXT = {
  menuItems: ['All Items', 'About', 'Logout', 'Reset App State'],
};

export const COLORS = {
  textColor: 'rgb(24, 88, 58)',
  borderColor: 'rgb(237, 237, 237)',
  hoverColor: 'rgb(61, 220, 145)',
};

export const LINKS = {
  allItems: '#',
  about: 'https://saucelabs.com',
  logout: '#',
  resetAppState: '#',
};
