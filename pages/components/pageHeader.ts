import { Locator, Page } from '@playwright/test';
import { Menu } from './menu';

export class PageHeader {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly primaryHeader: Locator;
  readonly menuButton: Locator;
  readonly menu: Menu;
  readonly title: Locator;
  readonly shoppingCartContainer: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;
  readonly secondaryHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerContainer = page.getByTestId('header-container');
    this.primaryHeader = this.headerContainer.getByTestId('primary-header');
    this.menuButton = this.primaryHeader.locator('#react-burger-menu-btn');
    this.menu = new Menu(page);
    this.title = this.primaryHeader.locator('div.app_logo');
    this.shoppingCartContainer = this.primaryHeader.locator('#shopping_cart_container');
    this.shoppingCartLink = this.shoppingCartContainer.getByTestId('shopping-cart-link');
    this.shoppingCartBadge = this.shoppingCartLink.getByTestId('shopping-cart-badge');
    this.secondaryHeader = page.getByTestId('secondary-header');
  }
}

export const EXPECTED_TEXT = {
  title: 'Swag Labs',
};

export const COLORS = {
  borderColor: 'rgb(237, 237, 237)',
  textColor: 'rgb(19, 35, 34)',
};
