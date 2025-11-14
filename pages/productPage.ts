import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly url = '/inventory-item.html?id=';
  readonly page: Page;
  readonly body: Locator;
  readonly headerContainer: Locator;
  readonly menuButton: Locator;
  readonly menu: Locator;
  readonly menuItem: Locator;
  readonly menuCloseButton: Locator;
  readonly title: Locator;
  readonly shoppingCartContainer: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;
  readonly secondaryHeader: Locator;
  readonly backButton: Locator;
  readonly inventoryItemContainer: Locator;
  readonly inventoryItem: Locator;
  readonly productImage: Locator;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly cartButton: Locator;
  readonly footer: Locator;
  readonly socialMediaItem: Locator;
  readonly socialMediaLink: Locator;
  readonly footerCopy: Locator;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');
    this.headerContainer = page.getByTestId('header-container');
    this.menuButton = this.headerContainer.locator('#react-burger-menu-btn');
    this.menu = page.locator('div.bm-menu-wrap');
    this.menuItem = this.menu.locator('a.menu-item');
    this.menuCloseButton = this.menu.locator('#react-burger-cross-btn');
    this.title = this.headerContainer.locator('div.app_logo');
    this.shoppingCartContainer = this.headerContainer.locator('#shopping_cart_container');
    this.shoppingCartLink = this.shoppingCartContainer.getByTestId('shopping-cart-link');
    this.shoppingCartBadge = this.shoppingCartLink.getByTestId('shopping-cart-badge');
    this.secondaryHeader = page.getByTestId('secondary-header');
    this.backButton = this.secondaryHeader.getByTestId('back-to-products');
    this.inventoryItemContainer = page.getByTestId('inventory-container');
    this.inventoryItem = page.getByTestId('inventory-item');
    this.productImage = this.inventoryItem.locator('img.inventory_details_img');
    this.productName = this.inventoryItem.getByTestId('inventory-item-name');
    this.productDescription = this.inventoryItem.getByTestId('inventory-item-desc');
    this.productPrice = this.inventoryItem.getByTestId('inventory-item-price');
    this.cartButton = this.inventoryItem.locator('button');
    this.footer = page.getByTestId('footer');
    this.socialMediaItem = this.footer.locator('ul.social li');
    this.socialMediaLink = this.socialMediaItem.locator('a');
    this.footerCopy = this.footer.getByTestId('footer-copy');
  }
}
