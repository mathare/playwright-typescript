import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly url = '/inventoty.html';
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly menuButton: Locator;
  readonly menu: Locator;
  readonly menuItem: Locator;
  readonly menuCloseButton: Locator;
  readonly title: Locator;
  readonly shoppingCartLink: Locator;
  readonly secondaryHeader: Locator;
  readonly subtitle: Locator;
  readonly activeSortOption: Locator;
  readonly sortSelect: Locator;
  readonly inventoryContainer: Locator;
  readonly inventoryItem: Locator;
  readonly footer: Locator;
  readonly socialMediaLink: Locator;
  readonly footerCopy: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerContainer = page.getByTestId('header-container');
    this.menuButton = this.headerContainer.locator('#react-burger-menu-btn');
    this.menu = page.locator('div.bm-menu-wrap');
    this.menuItem = this.menu.locator('a.menu-item');
    this.menuCloseButton = this.menu.locator('#react-burger-cross-btn');
    this.title = this.headerContainer.locator('div.app_logo');
    this.shoppingCartLink = this.headerContainer.getByTestId('shopping-cart-link');
    this.secondaryHeader = page.getByTestId('secondary-header');
    this.subtitle = this.secondaryHeader.getByTestId('title');
    this.activeSortOption = this.secondaryHeader.getByTestId('active-option');
    this.sortSelect = this.secondaryHeader.getByTestId('product-sort-container');
    this.inventoryContainer = page.getByTestId('inventory-container');
    this.inventoryItem = this.inventoryContainer.getByTestId('inventory-item');
    this.footer = page.getByTestId('footer');
    this.socialMediaLink = this.footer.locator('ul.social li');
    this.footerCopy = this.footer.getByTestId('footer-copy');
  }
}
