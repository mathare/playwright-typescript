import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly url = '/inventoty.html';
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
  readonly subtitle: Locator;
  readonly activeSortOption: Locator;
  readonly sortSelect: Locator;
  readonly inventoryContainer: Locator;
  readonly inventoryItem: Locator;
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
    this.subtitle = this.secondaryHeader.getByTestId('title');
    this.activeSortOption = this.secondaryHeader.getByTestId('active-option');
    this.sortSelect = this.secondaryHeader.getByTestId('product-sort-container');
    this.inventoryContainer = page.getByTestId('inventory-container');
    this.inventoryItem = this.inventoryContainer.getByTestId('inventory-item');
    this.footer = page.getByTestId('footer');
    this.socialMediaItem = this.footer.locator('ul.social li');
    this.socialMediaLink = this.socialMediaItem.locator('a');
    this.footerCopy = this.footer.getByTestId('footer-copy');
  }

  getProductElement(index: number, element: string): Locator {
    return this.inventoryItem.nth(index).locator(element);
  }

  async addAllProductsToCart(): Promise<void> {
    for (let i = 0; i < PRODUCT_INFO.length; i++) {
      await this.getProductElement(i, PRODUCT_ELEMENTS.button).click();
    }
  }
}

export const EXPECTED_TEXT = {
  TITLE: 'Swag Labs',
  SUBTITLE: 'Products',
  SORT_OPTIONS: ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'],
  SOCIAL_MEDIA: ['Twitter', 'Facebook', 'LinkedIn'],
  FOOTER: '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy',
  MENU_ITEMS: ['All Items', 'About', 'Logout', 'Reset App State'],
  ADD_TO_CART_BUTTON: 'Add to cart',
  REMOVE_BUTTON: 'Remove',
};

export const COLORS = {
  BACKGROUND_COLOR: 'rgb(255, 255, 255)',
  TEXT_COLOR: 'rgb(19, 35, 34)',
  PRODUCT_BORDER_COLOR: 'rgb(237, 237, 237)',
  PRODUCT_TITLE_COLOR: 'rgb(24, 88, 58)',
  REMOVE_BUTTON_COLOR: 'rgb(226, 35, 26)',
  FOOTER_BACKGROUND_COLOR: 'rgb(19, 35, 34)',
  FOOTER_TEXT_COLOR: 'rgb(255, 255, 255)',
  SOCIAL_LINK_BACKGROUND_COLOR: 'rgb()',
  SOCIAL_LINK_TEXT_COLOR: 'rgb(0, 0, 238)',
};

export const PRODUCT_INFO = [
  {
    title: 'Sauce Labs Backpack',
    imgSrc: '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
    description:
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: 29.99,
  },
  {
    title: 'Sauce Labs Bike Light',
    imgSrc: '/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg',
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    price: 9.99,
  },
  {
    title: 'Sauce Labs Bolt T-Shirt',
    imgSrc: '/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg',
    description:
      'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
    price: 15.99,
  },
  {
    title: 'Sauce Labs Fleece Jacket',
    imgSrc: '/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg',
    description:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    price: 49.99,
  },
  {
    title: 'Sauce Labs Onesie',
    imgSrc: '/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg',
    description:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    price: 7.99,
  },
  {
    title: 'Test.allTheThings() T-Shirt (Red)',
    imgSrc: '/static/media/red-tatt-1200x1500.30dadef477804e54fc7b.jpg',
    description:
      'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
    price: 15.99,
  },
];

export enum PRODUCT_ELEMENTS {
  img = 'img.inventory_item_img',
  title = 'div.inventory_item_name',
  description = 'div.inventory_item_desc',
  price = 'div.inventory_item_price',
  button = 'button',
}
